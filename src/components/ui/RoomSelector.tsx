import { useConfigStore, useRoomsStore } from "@/stores";
import * as Dialog from "@radix-ui/react-dialog";
import { useShallow } from "zustand/shallow";

interface Props {
  roomName: string;
  currentRoomId: string | null;
  orientation: "landscape" | "portrait";
}

function roomSelector({ roomName, currentRoomId, orientation }: Props) {
  const roomIds = useRoomsStore(
    useShallow((state) => Object.values(state.rooms).map((room) => room.id)),
  );
  const roomNames = useRoomsStore(
    useShallow((state) => Object.values(state.rooms).map((room) => room.name)),
  );

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-md flex justify-center items-center w-full h-full">
          {roomName || "All"}
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
              return (
                <Dialog.Close asChild key={id}>
                  <button
                    onClick={() =>
                      useConfigStore.getState().setCurrentRoom(String(id))
                    }
                    className={`flex p-4 pl-5 pr-5 rounded-md ${room === roomName ? "bg-[#ffc101]" : "bg-black/70"}`}
                  >
                    {room}
                  </button>
                </Dialog.Close>
              );
            })}
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default roomSelector;
