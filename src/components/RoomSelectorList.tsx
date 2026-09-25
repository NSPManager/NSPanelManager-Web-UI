import { useLongPress } from "@/hooks/useLongPress";
import { useConfigStore, useRoomsStore, useUIStore } from "@/stores";
import { LightType } from "@/types";
import { useNavigate } from "react-router-dom";
import { useShallow } from "zustand/shallow";
import CeilingLightIcon from "./CeilingLightIcon";
import TableLightIcon from "./TableLightIcon";

function RoomSelectorList() {
  const navigate = useNavigate();
  const setIsOpen = useUIStore((state) => state.setIsRoomSelectorOpen);

  // 1. Grab the reactive rooms map directly
  const rooms = useRoomsStore((state) => state.rooms);
  // 2. Fetch JUST the string IDs. useShallow handles arrays of primitives perfectly!
  const roomIds = useRoomsStore(
    useShallow((state) => Object.keys(state.rooms)),
  );
  const currentRoomId = useConfigStore((state) => state.currentRoomId);

  const setCurrentRoom = useConfigStore((state) => state.setCurrentRoom);

  const handleLightToggle = useRoomsStore.getState().handleLightToggle;

  return (
    <>
      {roomIds.map((id) => {
        // const id = roomIds[index];
        // const isActive = currentRoomId === String(id);
        const currentRoomData = rooms[id];
        if (!currentRoomData) return null; // Safety check

        const isActive = currentRoomId === String(id);
        const name = currentRoomData.name;

        const selectRoomButtonHandlers = useLongPress({
          onShortPress: () => {
            setCurrentRoom(String(id));
            setIsOpen(false);
          },
          onLongPress: () => {
            setCurrentRoom(String(id));
            setIsOpen(false);
            navigate("/webapp/roompage");
          },
        });
        return (
          <div
            key={id}
            //TODO
            // onClick={() => {
            //   setCurrentRoom(String(id));
            //   setIsOpen(false);
            // }}
            {...selectRoomButtonHandlers}
            className={`flex h-[55px] md:h-[80px] justify-between items-center p-1 pl-2 md:p-2 md:pl-4 rounded-md transition-all duration-100 transform cursor-pointer ${
              isActive ? "bg-[#ffc101]" : "bg-black/70 hover:bg-black/50"
            }`}
          >
            {name}
            <div className="flex h-full items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleLightToggle(LightType.CEILING, String(id));
                }}
                className={`flex h-full aspect-square rounded-md p-2 items-center justify-center cursor-pointer  border-1 border-white/30 ${
                  isActive
                    ? "bg-[#5c7852] hover:bg-[#5c7852]/90"
                    : "hover:bg-white/10"
                }`}
              >
                <CeilingLightIcon
                  isOn={currentRoomData.numCeilingLightsOn > 0}
                  className="h-full w-auto"
                />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleLightToggle(LightType.TABLE, String(id));
                }}
                className={`flex h-full aspect-square rounded-md p-2 items-center justify-center cursor-pointer  border-1 border-white/30 ${
                  isActive
                    ? "bg-[#5c7852] hover:bg-[#5c7852]/90"
                    : "hover:bg-white/10"
                }`}
              >
                <TableLightIcon
                  isOn={currentRoomData.numTableLightsOn > 0}
                  className="h-full w-auto"
                />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default RoomSelectorList;
