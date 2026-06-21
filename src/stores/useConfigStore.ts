import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { INSPanelConfig } from "@/proto/bundle";
import { generateFriendlyName, generateRandomMac } from "@/utils/utils";

interface ConfigState {
  virtualMac: string;
  friendlyName: string;
  config: INSPanelConfig | null;
  isLoaded: boolean;
  roomOrder: string[];
  currentRoomId: string | null;

  initialize: () => void;
  setConfig: (newConfig: INSPanelConfig) => void;
  setCurrentRoom: (id?: string) => void;
  resetConfig: () => void;
}

export const useConfigStore = create<ConfigState>()(
  devtools(
    persist(
      (set, get) => ({
        virtualMac: "",
        friendlyName: "",
        config: null,
        isLoaded: false,
        roomOrder: [],
        currentRoomId: null,

        initialize: () => {
          const state = get();

          if (!state.virtualMac) {
            const mac = generateRandomMac();

            set({
              virtualMac: mac,
              friendlyName: generateFriendlyName(mac),
            });
          }
        },

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
        // TODO refactor this function, not nice
        setCurrentRoom: (id?: string) => {
          if (id) {
            return set({ currentRoomId: id }, false, "setCurrentRoom");
          }
          const roomOrder = get().roomOrder;
          const currentRoom = get().currentRoomId;
          if (currentRoom) {
            const currentRoomIndex = roomOrder.indexOf(currentRoom);
            const nextRoomIndex = (currentRoomIndex + 1) % roomOrder.length;
            const nextRoom = roomOrder[nextRoomIndex];
            set({ currentRoomId: nextRoom }, false, "setCurrentRoom");
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
      {
        name: "panel-config-storage",
        partialize: (state) => ({
          virtualMac: state.virtualMac,
          friendlyName: state.friendlyName,
        }),
      },
    ),
    { name: "ConfigStore" },
  ),
);
useConfigStore.getState().initialize();
