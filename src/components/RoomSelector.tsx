import { useConfigStore, useRoomsStore, useUIStore } from "@/stores";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { useShallow } from "zustand/shallow";
import CeilingLightIcon from "./CeilingLightIcon";
import TableLightIcon from "./TableLightIcon";
import { LightType } from "@/types";

function roomSelector() {
  const [open, setOpen] = useState(false);

  // 1. Grab the reactive rooms map directly
  const rooms = useRoomsStore((state) => state.rooms);

  // 2. Fetch JUST the string IDs. useShallow handles arrays of primitives perfectly!
  const roomIds = useRoomsStore(
    useShallow((state) => Object.keys(state.rooms)),
  );

  // const roomIds = useRoomsStore(
  //   useShallow((state) => Object.values(state.rooms).map((room) => room.id)),
  // );
  // const roomNames = useRoomsStore(
  //   useShallow((state) => Object.values(state.rooms).map((room) => room.name)),
  // );
  const mainPagemode = useUIStore((state) => state.mainPageMode);
  const currentRoomId = useConfigStore((state) => state.currentRoomId);
  const setCurrentRoom = useConfigStore((state) => state.setCurrentRoom);
  const currentRoomName = useRoomsStore((state) =>
    currentRoomId ? state.rooms[currentRoomId]?.name : undefined,
  );
  const orientation = useUIStore((state) => state.orientation);
  const handleLightToggle = useRoomsStore.getState().handleLightToggle;

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          disabled={mainPagemode !== "roomLights"}
          className="no-select text-md flex justify-center items-center w-full h-full cursor-pointer"
        >
          {mainPagemode === "roomLights" ? currentRoomName : "All"}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="z-50 fixed inset-0 backdrop-blur data-[state=open]:animate-overlayShow" />
        <div className="fixed inset-0 z-50 flex items-end justify-center p-2">
          <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12"></Dialog.Title>
          <Dialog.Description />
          <Dialog.Content
            className={`z-50 ${orientation === "landscape" ? "grid grid-cols-2" : "flex flex-col"} gap-[4px] grow rounded-xl text-white p-4 md:p-8 shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow`}
          >
            {roomIds.map((id) => {
              // const id = roomIds[index];
              // const isActive = currentRoomId === String(id);
              const currentRoomData = rooms[id];
              if (!currentRoomData) return null; // Safety check

              const isActive = currentRoomId === String(id);
              const name = currentRoomData.name;
              return (
                <div
                  key={id}
                  onClick={() => {
                    setCurrentRoom(String(id));
                    setTimeout(() => {
                      setOpen(false);
                    }, 200);
                  }}
                  className={`flex h-[50px] md:h-[80px] justify-between items-center p-1 pl-2 md:p-2 md:pl-4 rounded-md transition-all duration-100 transform cursor-pointer ${
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
                      className="flex h-full aspect-square rounded-md p-2 items-center justify-center cursor-pointer bg-gray-800 hover:bg-gray-700"
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
                      className="flex h-full aspect-square rounded-md p-2 items-center justify-center cursor-pointer bg-gray-800 hover:bg-gray-700"
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
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default roomSelector;
