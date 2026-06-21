import { Client, type StompSubscription } from "@stomp/stompjs";
import { convertProtbuf } from "@/services/protoService";
import {
  NSPanelMQTTManagerCommand,
  type INSPanelConfig,
  type NSPanelEntityState,
  type NSPanelRoomEntitiesPage,
  type NSPanelRoomStatus,
} from "@/proto/bundle";
import {
  useConfigStore,
  useEntityPagesStore,
  useLightsStore,
  useRoomsStore,
  useScenePagesStore,
} from "@/stores";
import type { LightType } from "@/types";

const MANAGER_ADDRESS = import.meta.env.DEV
  ? "192.168.32.201"
  : window.location.hostname;

type SubLevel =
  | "registerAccept"
  | "config"
  | "globalRoom"
  | "rooms"
  | "entityPages"
  | "lights"
  | "scenePages";

const subscriptions: Record<SubLevel, Record<string, StompSubscription>> = {
  registerAccept: {},
  config: {},
  globalRoom: {},
  rooms: {},
  entityPages: {},
  lights: {},
  scenePages: {},
};

export interface LightCommandOptions {
  brightness?: number;
  colorTemp?: number;
  rgb?: string;
}

let client: Client | null = null;

let registerRequestTimerId: ReturnType<typeof setInterval> | null = null;

function startRegisterRequestTimer() {
  const interval = 5000;
  if (registerRequestTimerId !== null) return;
  console.log(
    `Starting to send register requests every ${interval / 1000} seconds`,
  );

  registerRequestTimerId = setInterval(() => {
    console.log("Sent register request");
    stompService.sendRegisterCommand();
  }, interval);
}

function stopRegisterRequestTimer() {
  if (registerRequestTimerId === null) return;

  clearInterval(registerRequestTimerId);
  registerRequestTimerId = null;
  console.log(
    "Received register accept. Stopping transmission of register requests.",
  );
}

export const stompService = {
  //Initialize the connection
  init: () => {
    if (client) return;

    client = new Client({
      webSocketFactory: () => {
        return new WebSocket(`ws://${window.location.host}/websocket/stomp`);
      },
      reconnectDelay: 5000,
      onConnect: () => {
        console.log("STOMP Connected");
        stompService.subscribeToRegisterAccept();
        stompService.sendRegisterCommand();
        startRegisterRequestTimer();
        // stompService.subscribeToConfig(virtualMac);
        // stompService.sendNSPanelStatus();
      },
      onStompError: (frame) => {
        console.error("Broker reported error: " + frame.headers["message"]);
      },
    });

    client.activate();
  },

  sendRegisterCommand() {
    const virtualMac = useConfigStore.getState().virtualMac;
    const friendlyName = useConfigStore.getState().friendlyName;
    if (!virtualMac && !friendlyName) return;

    const registerCommand = {
      command: "register_request",
      mac_origin: virtualMac,
      friendly_name: friendlyName,
      version: "1.0.1",
      md5_firmware: "",
      md5_data_file: "",
      md5_tft_file: "",
      address: "",
      model: "web",
    };

    if (!client?.connected) return;

    client.publish({
      destination: "mqtt/nspanel/mqttmanager/command",
      body: JSON.stringify(registerCommand), // Sends as a text string
      headers: { "content-type": "text/plain" },
    });
  },

  sendNSPanelStatus(mac: string, state: "online" | "offline") {
    const payload = {
      mac: mac,
      state: state,
    };

    // Convert the object to a JSON string
    const jsonBody = JSON.stringify(payload);

    if (!client?.connected) return;

    client.publish({
      destination: `mqtt/nspanel/${mac}/status`,
      body: jsonBody, // Use 'body' for strings/JSON instead of 'binaryBody'
    });
  },

  newConfigCleanUp: () => {
    //Every time new config arrives remove all dependant subscriptions and reset stores
    stompService.cleanup("globalRoom");
    stompService.cleanup("rooms");
    stompService.cleanup("entityPages");
    stompService.cleanup("lights");
    stompService.cleanup("scenePages");

    useRoomsStore.getState().resetRooms();
    useEntityPagesStore.getState().resetEntityPages();
    useLightsStore.getState().resetLights();
    useScenePagesStore.getState().resetScenePages();
  },

  subscribeToRegisterAccept: () => {
    if (!client?.connected || subscriptions.registerAccept["main"]) return;

    const virtualMac = useConfigStore.getState().virtualMac;
    if (!virtualMac) return;

    console.log("Subscribing to register accept topic");
    const sub = client.subscribe(
      `mqtt/nspanel/${virtualMac}/command`,
      (message) => {
        if (message.body) {
          stopRegisterRequestTimer();
          try {
            //Decode Base64 string back to plain text JSON string
            const decodedString = atob(message.body);

            //Parse the plain text into a JS object
            const dataObj = JSON.parse(decodedString);

            stompService.subscribeToConfig(dataObj.config_topic);
            console.log(dataObj);
          } catch (error) {
            console.error("Failed to decode or parse message:", error);
          }
        }
      },
    );

    subscriptions.registerAccept["main"] = sub;

    // stompService.subscribeToConfig(virtualMac);
  },

  subscribeToConfig: (configTopic: string) => {
    if (!client?.connected || subscriptions.config["main"]) return;
    configTopic = "mqtt/" + configTopic;
    console.log("Subscribing to config", configTopic);
    const sub = client.subscribe(configTopic, (message) => {
      const configData = convertProtbuf<INSPanelConfig>(
        message,
        "NSPanelConfig",
      );
      console.log("Received New Config");

      if (configData && configData.roomInfos) {
        stompService.newConfigCleanUp();
        useConfigStore.getState().setConfig(configData);

        console.log(
          "Starting subscriptions to global room, rooms, entityPages and ScenePages",
        );
        stompService.subscribeToGlobalRoom();
        //Loop through roomInfo object containing entityPages, scenesPages and room ids to start subscriptions
        for (const room of configData.roomInfos) {
          const { roomId, entityPageIds, scenePageIds } = room;

          if (roomId) {
            stompService.subscribeToRoom(roomId);
          }
          if (entityPageIds && entityPageIds.length > 0) {
            for (const id of entityPageIds) {
              stompService.subscribeToEntityPage(id);
            }
          }
          if (scenePageIds && scenePageIds.length > 0)
            for (const id of scenePageIds) {
              stompService.subscribeToScenesPage(id);
            }
        }
      }
    });
    subscriptions.config["main"] = sub;
  },

  subscribeToGlobalRoom: () => {
    if (!client?.connected || subscriptions.globalRoom["main"])
      return console.log(
        "Client not connected or room subscription exists since before.",
      );

    const sub = client.subscribe(
      `mqtt/nspanel/mqttmanager_${MANAGER_ADDRESS}/all_rooms_status`,
      (message) => {
        const allRoomState = convertProtbuf<NSPanelRoomStatus>(
          message,
          "NSPanelRoomStatus",
        );
        if (allRoomState) {
          useRoomsStore.getState().setGlobalRoom(allRoomState);
        }
      },
    );
    subscriptions.globalRoom["main"] = sub;
  },

  subscribeToRoom: (id: number) => {
    if (!client?.connected || subscriptions.rooms[id])
      return console.log(
        "Client not connected or room subscription exists since before.",
      );

    const sub = client.subscribe(
      `mqtt/nspanel/mqttmanager_${MANAGER_ADDRESS}/room/${id}/state`,
      (message) => {
        const roomData = convertProtbuf<NSPanelRoomStatus>(
          message,
          "NSPanelRoomStatus",
        );
        if (roomData) {
          useRoomsStore.getState().updateRoom(roomData);
        }
      },
    );
    // console.log(`Starting subscriptions to room id: ${id}`);
    subscriptions.rooms[id] = sub;
  },

  subscribeToEntityPage: (id: number) => {
    if (!client?.connected || subscriptions.entityPages[id])
      return console.log(
        "Client not connected or entitypage subscription exists since before.",
      );

    const sub = client.subscribe(
      `mqtt/nspanel/mqttmanager_${MANAGER_ADDRESS}/entity_pages/${id}/state`,
      (message) => {
        const entityPageData = convertProtbuf<NSPanelRoomEntitiesPage>(
          message,
          "NSPanelRoomEntitiesPage",
        );
        if (entityPageData) {
          useEntityPagesStore.getState().updateEntityPage(entityPageData);
          console.log("Subscribing to Entities");

          for (const entity of entityPageData.entities) {
            if (entity.mqttStateTopic) {
              stompService.subscribeToEntity(entity.mqttStateTopic);
            }
          }
        }
      },
    );
    // console.log(`Starting subscription to entitypage id: ${id}`);
    subscriptions.entityPages[id] = sub;
  },

  subscribeToScenesPage: (id: number) => {
    if (!client?.connected || subscriptions.scenePages[id])
      return console.log(
        "Client not connected or scene page subscription exist since before.",
      );

    const sub = client.subscribe(
      `mqtt/nspanel/mqttmanager_${MANAGER_ADDRESS}/entity_pages/${id}/state`,
      (message) => {
        const scenePageData = convertProtbuf<NSPanelRoomEntitiesPage>(
          message,
          "NSPanelRoomEntitiesPage",
        );
        if (scenePageData) {
          useScenePagesStore.getState().updateScenePage(scenePageData);
        }
      },
    );
    // console.log(`Starting subscription to scene page id: ${id}`);
    subscriptions.scenePages[id] = sub;
  },

  subscribeToEntity: (mqttTopic: string) => {
    if (!client?.connected || subscriptions.lights[mqttTopic])
      return console.log(
        "Client not connected or light subscription exist since before.",
      );

    const sub = client.subscribe(`mqtt/${mqttTopic}`, (message) => {
      const entityData = convertProtbuf<NSPanelEntityState>(
        message,
        "NSPanelEntityState",
      );
      if (entityData?.light?.lightId) {
        useLightsStore.getState().updateLight(entityData);
      }
    });
    subscriptions.lights[mqttTopic] = sub;
  },

  //Function used to remove subsciptions
  cleanup: (level?: SubLevel) => {
    if (level) {
      const category = subscriptions[level];
      Object.keys(category).forEach((key) => {
        console.log(`Unsubscribing from ${level}: ${key}`);
        category[key].unsubscribe();
        delete category[key];
      });
    } else {
      // Total Cleanup

      (Object.keys(subscriptions) as SubLevel[]).forEach((key) => {
        stompService.cleanup(key);
      });
      console.log("Reached total cleanup");
    }
  },

  sendMainPageLightCommand(
    type: LightType,
    options: LightCommandOptions,
    context: { nspanelId: number; roomId: number; isGlobal: boolean },
  ) {
    const { brightness, colorTemp } = options;
    const payload = {
      nspanelId: context.nspanelId,
      firstPageTurnOn: {
        affectLights: type, // 1 for Table, 2 for Ceiling
        selectedRoom: context.roomId,
        global: context.isGlobal,
        hasBrightnessValue: brightness !== undefined,
        hasKelvinValue: colorTemp !== undefined,
        brightnessSliderValue: brightness ?? 0,
        kelvinSliderValue: colorTemp ?? 0,
      },
    };
    const buffer = NSPanelMQTTManagerCommand.encode(payload).finish();

    // 3. Publish
    if (!client?.connected) return;

    client.publish({
      destination: `mqtt/nspanel/mqttmanager_${MANAGER_ADDRESS}/command`,
      binaryBody: buffer,
    });
  },
};

// TODO
// send online status to manager
// stomptopic: mqtt/nspanel/mac-address/status
// {
// 	"mac":	"24:D7:EB:0E:3D:58",
// 	"state":	"online"
// }
