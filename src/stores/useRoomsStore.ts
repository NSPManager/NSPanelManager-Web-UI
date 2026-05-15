import { create } from "zustand";
import { devtools } from "zustand/middleware";

import type { NSPanelRoomStatus } from "../proto/bundle";

interface RoomsState {
  rooms: Record<string, NSPanelRoomStatus>;
  isLoaded: boolean;
  updateRoom: (roomData: NSPanelRoomStatus) => void;
  resetRooms: () => void;
}

export const useRoomsStore = create<RoomsState>()(
  devtools(
    (set) => ({
      rooms: {},
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

      resetRooms: () =>
        set(
          {
            rooms: {},
            isLoaded: false,
          },
          false,
          "resetRooms",
        ),
    }),
    { name: "RoomsStore" },
  ),
);
