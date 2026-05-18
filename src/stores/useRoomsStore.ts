import { create } from "zustand";
import { devtools } from "zustand/middleware";

import type { NSPanelRoomStatus } from "../proto/bundle";

interface RoomsState {
  rooms: Record<string, NSPanelRoomStatus>;
  globalRoom: NSPanelRoomStatus | null;
  isLoaded: boolean;
  updateRoom: (roomData: NSPanelRoomStatus) => void;
  setGlobalRoom: (roomData: NSPanelRoomStatus) => void;
  resetRooms: () => void;
}

export const useRoomsStore = create<RoomsState>()(
  devtools(
    (set) => ({
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
    }),
    { name: "RoomsStore" },
  ),
);
