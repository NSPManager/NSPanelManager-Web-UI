// App.tsx
import { useEffect } from "react";
import { stompService } from "./services/stompService";
import { useConfigStore } from "./stores/useConfigStore";
import { useRoomsStore } from "./stores/useRoomsStore";
import { ChevronDown, SlidersVertical, Sun } from "lucide-react";
import MainPage from "./pages/mainPage";

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

  return <MainPage />;
}
export default App;
