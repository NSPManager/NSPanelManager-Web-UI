import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { INSPanelConfig } from "../proto/bundle";

interface ConfigState {
  virtualMac: string | null;
  config: INSPanelConfig | null;
  isLoaded: boolean;
  roomOrder: string[];
  currentRoomId: string | null;

  setVirtualMac: () => void;
  setConfig: (newConfig: INSPanelConfig) => void;
  setCurrentRoom: () => void;
  resetConfig: () => void;
}

export const useConfigStore = create<ConfigState>()(
  devtools(
    (set) => ({
      virtualMac: null,
      config: null,
      isLoaded: false,
      roomOrder: [],
      currentRoomId: null,

      setVirtualMac: () => {
        let virtualMac = localStorage.getItem("nspanel_virtual_mac");
        if (!virtualMac) {
          //TODO create function to randomize a mac-address
          virtualMac = "AA:BB:CC:AA:BB:CC";
        }
        set({ virtualMac }, false, "setVirtualMac");
        localStorage.setItem("nspanel_virtual_mac", virtualMac);
        console.log("Setting virtual mac address");
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
