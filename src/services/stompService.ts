// services/stompService.ts
import { Client, type StompSubscription } from "@stomp/stompjs";
import { useConfigStore } from "../stores/useConfigStore";
import { convertProtbuf } from "./protoService";
import type {
  INSPanelConfig,
  NSPanelEntityState,
  NSPanelRoomEntitiesPage,
  NSPanelRoomStatus,
} from "../proto/bundle";
import { useRoomsStore } from "../stores/useRoomsStore";
import { useEntityPagesStore } from "../stores/useEntityPagesStore";
import { useScenePagesStore } from "../stores/useScenePagesStore";
import { useLightsStore } from "../stores/useLightsStore";

type SubLevel =
  | "config"
  | "allRoomStatus"
  | "rooms"
  | "entityPages"
  | "lights"
  | "scenePages";

const subscriptions: Record<SubLevel, Record<string, StompSubscription>> = {
  config: {},
  allRoomStatus: {},
  rooms: {},
  entityPages: {},
  lights: {},
  scenePages: {},
};

let client: Client | null = null;

export const stompService = {
  // 1. Initialize the connection
  init: () => {
    if (client) return; // Prevent multiple clients

    client = new Client({
      webSocketFactory: () => {
        return new WebSocket("ws://192.168.32.201:8011/websocket/stomp");
      },
      reconnectDelay: 5000,
      onConnect: () => {
        console.log("STOMP Connected");
        stompService.subscribeToConfig();
      },
      onStompError: (frame) => {
        console.error("Broker reported error: " + frame.headers["message"]);
      },
    });

    client.activate();
  },

  // 2. The Global Config Subscription
  subscribeToConfig: () => {
    if (!client?.connected || subscriptions.config["main"]) return;
    console.log("Subscribing to config");
    const sub = client.subscribe(
      "mqtt/nspanel/CC:CC:CC:CC:CC:CC/config",
      (message) => {
        const configData = convertProtbuf<INSPanelConfig>(
          message,
          "NSPanelConfig",
        );
        console.log("Received New Config");

        if (configData && configData.roomInfos) {
          useConfigStore.getState().setConfig(configData);
        }

        // clean all previous subscriptions when new config arrives
        stompService.cleanup("rooms");
        stompService.cleanup("entityPages");
        stompService.cleanup("lights");
        stompService.cleanup("scenePages");

        //remove data from stores as well.

        if (configData?.roomInfos) {
          //Loop through roomInfo object containing entityPages, scenesPages and room ids to start subscriptions
          console.log("Subscribing to rooms, entityPages and ScenePages");

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
      },
    );
    subscriptions.config["main"] = sub;
  },
  subscribeToRoom: (id: number) => {
    if (!client?.connected || subscriptions.rooms[id])
      return console.log(
        "Client not connected or room subscription exists since before.",
      );

    const sub = client.subscribe(
      `mqtt/nspanel/mqttmanager_192.168.32.201/room/${id}/state`,
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
      `mqtt/nspanel/mqttmanager_192.168.32.201/entity_pages/${id}/state`,
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
      `mqtt/nspanel/mqttmanager_192.168.32.201/entity_pages/${id}/state`,
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

  // 3. The Unified Cleanup Function
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
};
