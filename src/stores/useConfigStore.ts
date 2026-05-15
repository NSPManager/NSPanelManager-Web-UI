import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { INSPanelConfig } from "../proto/bundle";

interface ConfigState {
  config: INSPanelConfig | null;
  isLoaded: boolean;
  roomOrder: string[];
  currentRoomId: string | null;

  // Actions
  setConfig: (newConfig: INSPanelConfig) => void;
  setCurrentRoom: (roomId: string) => void;
  resetConfig: () => void;
}

export const useConfigStore = create<ConfigState>()(
  devtools(
    (set) => ({
      config: null,
      isLoaded: false,
      roomOrder: [],
      currentRoomId: null,

      setConfig: (newConfig) => {
        // Extract the room order from the config immediately
        const order =
          newConfig.roomInfos?.map((room) => String(room.roomId)) || [];

        set(
          {
            config: newConfig,
            isLoaded: true,
            roomOrder: order,
            // Set default room if it's the first time loading
            currentRoomId: String(newConfig.defaultRoom) || order[0] || null,
          },
          false,
          "setConfig",
        );
      },

      setCurrentRoom: (roomId) =>
        set({ currentRoomId: roomId }, false, "setCurrentRoom"),

      resetConfig: () =>
        set(
          {
            config: null,
            isLoaded: false,
            roomOrder: [],
            currentRoomId: null,
          },
          false,
          "resetConfig",
        ),
    }),
    { name: "ConfigStore" },
  ),
);
