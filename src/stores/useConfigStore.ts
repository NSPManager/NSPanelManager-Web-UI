import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { INSPanelConfig } from "../proto/bundle";

interface ConfigState {
  config: INSPanelConfig | null;
  isLoaded: boolean;
  roomOrder: string[];
  currentRoomId: string | null;

  setConfig: (newConfig: INSPanelConfig) => void;
  setCurrentRoom: () => void;
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
        // Extract the room order from the config
        const order =
          newConfig.roomInfos?.map((room) => String(room.roomId)) || [];

        set(
          {
            config: newConfig,
            isLoaded: true,
            roomOrder: order,
            currentRoomId: String(newConfig.defaultRoom) || order[0] || null,
          },
          false,
          "setConfig",
        );
      },

      setCurrentRoom: () => {
        const roomOrder = useConfigStore.getState().roomOrder;
        const currentRoom = useConfigStore.getState().currentRoomId;
        if (currentRoom) {
          const currentRoomIndex = roomOrder.indexOf(currentRoom);
          const nextRoomIndex = (currentRoomIndex + 1) % roomOrder.length;
          set(
            { currentRoomId: roomOrder[nextRoomIndex] },
            false,
            "setCurrentRoom",
          );
        }
      },

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
