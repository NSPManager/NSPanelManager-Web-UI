import { create } from "zustand";
import { devtools } from "zustand/middleware";

import type { NSPanelRoomStatus } from "../proto/bundle";
import { LightType, SliderType } from "../types";
import { useUIStore } from "./useUIStore";
import { stompService } from "../services/stompService";
import { useConfigStore } from "./useConfigStore";

interface RoomsState {
  rooms: Record<string, NSPanelRoomStatus>;
  globalRoom: NSPanelRoomStatus | null;
  isLoaded: boolean;
  updateRoom: (roomData: NSPanelRoomStatus) => void;
  setGlobalRoom: (roomData: NSPanelRoomStatus) => void;
  resetRooms: () => void;
  handleLightToggle: (lightType: LightType) => void;
  handleLightSlider: (value: number, sliderType: SliderType) => void;
}

export const useRoomsStore = create<RoomsState>()(
  devtools(
    (set, get) => ({
      rooms: {},
      globalRoom: null,
      isLoaded: false,

      updateRoom: (roomData) => {
        set(
          (state) => ({
            rooms: {
              ...state.rooms,
              [String(roomData.id)]: roomData,
            },
            isLoaded: true,
          }),
          false,
          "updateRoom",
        );
      },

      setGlobalRoom: (roomData) =>
        set({ globalRoom: roomData, isLoaded: true }, false, "setGlobalRoom"),

      resetRooms: () =>
        set(
          {
            rooms: {},
            globalRoom: null,
            isLoaded: false,
          },
          false,
          "resetRooms",
        ),
      handleLightToggle: (lightType) => {
        const { config, currentRoomId } = useConfigStore.getState();
        const { rooms, globalRoom } = get();
        const mainPageMode = useUIStore.getState().mainPageMode;

        const activeData =
          mainPageMode === "allLights"
            ? globalRoom
            : currentRoomId !== null
              ? rooms[currentRoomId]
              : null;
        if (!activeData || !config?.defaultLightBrightess || !config?.nspanelId)
          return;

        const isCurrentlyOn =
          lightType === LightType.TABLE
            ? activeData.numTableLightsOn > 0
            : activeData.numCeilingLightsOn > 0;

        const brightness = isCurrentlyOn ? 0 : config.defaultLightBrightess;
        stompService.sendMainPageLightCommand(
          lightType,
          { brightness: brightness },
          {
            isGlobal: mainPageMode === "allLights",
            nspanelId: config?.nspanelId,
            roomId: Number(currentRoomId),
          },
        );
      },
      handleLightSlider: (value, sliderType) => {
        const { config, currentRoomId } = useConfigStore.getState();
        const { rooms, globalRoom } = get();
        const mainPageMode = useUIStore.getState().mainPageMode;

        const activeData =
          mainPageMode === "allLights"
            ? globalRoom
            : currentRoomId !== null
              ? rooms[currentRoomId]
              : null;
        if (!activeData || !config?.nspanelId) return;

        let lightType: LightType;
        if (
          activeData.numCeilingLightsOn > 0 &&
          activeData.numTableLightsOn === 0
        ) {
          lightType = LightType.CEILING;
        } else if (
          activeData.numTableLightsOn > 0 &&
          activeData.numCeilingLightsOn === 0
        ) {
          lightType = LightType.TABLE;
        } else {
          lightType = LightType.ALL;
        }

        stompService.sendMainPageLightCommand(
          lightType,
          {
            brightness:
              sliderType === SliderType.BRIGHTNESS ? value : undefined,
            colorTemp: sliderType === SliderType.COLORTEMP ? value : undefined,
          },
          {
            isGlobal: mainPageMode === "allLights",
            nspanelId: config?.nspanelId,
            roomId: Number(currentRoomId),
          },
        );
      },
    }),
    { name: "RoomsStore" },
  ),
);
