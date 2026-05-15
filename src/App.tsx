// App.tsx
import { useEffect } from "react";
import { stompService } from "./services/stompService";
import { useConfigStore } from "./stores/useConfigStore";
import { useRoomsStore } from "./stores/useRoomsStore";

function App() {
  const currentRoomId = useConfigStore((state) => state.currentRoomId);
  const currentRoom = useRoomsStore((state) =>
    currentRoomId ? state.rooms[currentRoomId] : null,
  );

  useEffect(() => {
    stompService.init();

    return () => {
      console.log("Cleaning up");
      stompService.cleanup(); // Total cleanup on unmount
    };
  }, []);

  // 3. Handle the "Not Ready" states
  if (!currentRoomId) return <div>No room selected in config.</div>;
  if (!currentRoom) return <div>Waiting for room data...</div>;

  return (
    <div>
      <h1>Active Room: {currentRoom.name}</h1>
    </div>
  );
}
export default App;
