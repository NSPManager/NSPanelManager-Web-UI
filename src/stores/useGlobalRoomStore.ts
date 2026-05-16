import { create } from "zustand";
import { devtools } from "zustand/middleware";

import type { NSPanelRoomStatus } from "../proto/bundle";

interface GlobalRoomStoreState {
  globalRoom: NSPanelRoomStatus | null;
  isLoaded: boolean;
  setGlobalRoom: (globalRoomData: NSPanelRoomStatus) => void;
  resetGlobalRoom: () => void;
}

export const useGlobalRoomStore = create<GlobalRoomStoreState>()(
  devtools(
    (set) => ({
      globalRoom: {},
      isLoaded: false,

      setGlobalRoom: (globalRoomData) => {
        set(
          {
            globalRoom: globalRoomData,
            isLoaded: true,
          },
          false,
          "setGlobalRoom",
        );
      },

      resetGlobalRoom: () =>
        set(
          {
            globalRoom: null,
            isLoaded: false,
          },
          false,
          "resetGlobalRoom",
        ),
    }),
    { name: "GlobalRoomStore" },
  ),
);
