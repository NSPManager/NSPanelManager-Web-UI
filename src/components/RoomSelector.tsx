import { useConfigStore, useRoomsStore, useUIStore } from "@/stores";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { useShallow } from "zustand/shallow";

function roomSelector() {
  const [open, setOpen] = useState(false);

  const roomIds = useRoomsStore(
    useShallow((state) => Object.values(state.rooms).map((room) => room.id)),
  );
  const roomNames = useRoomsStore(
    useShallow((state) => Object.values(state.rooms).map((room) => room.name)),
  );
  const mainPagemode = useUIStore((state) => state.mainPageMode);
  const currentRoomId = useConfigStore((state) => state.currentRoomId);
  const setCurrentRoom = useConfigStore((state) => state.setCurrentRoom);
  const currentRoomName = useRoomsStore((state) =>
    currentRoomId ? state.rooms[currentRoomId]?.name : undefined,
  );
  const orientation = useUIStore((state) => state.orientation);

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
            className={`z-50 ${orientation === "landscape" ? "grid grid-cols-3" : "flex flex-col"}  gap-[4px] grow rounded-xl text-white p-8 shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow`}
          >
            {roomNames.map((room, index) => {
              const id = roomIds[index];
              const isActive = currentRoomId === String(id);
              return (
                <button
                  key={id}
                  onClick={() => {
                    setCurrentRoom(String(id));
                    setTimeout(() => {
                      setOpen(false);
                    }, 200);
                  }}
                  className={`flex p-4 pl-5 pr-5 rounded-md transition-all duration-100 transform active:scale-[0.96] cursor-pointer ${
                    isActive ? "bg-[#ffc101]" : "bg-black/70 hover:bg-black/50"
                  }`}
                >
                  {room}
                </button>
              );
            })}
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default roomSelector;
