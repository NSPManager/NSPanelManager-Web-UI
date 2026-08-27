// App.tsx
import { useEffect } from "react";
import { stompService } from "@/services/stompService";
import { useScreenOrientation } from "./hooks";
import { Outlet, useNavigate } from "react-router-dom";
import { useConfigStore, useIdleStore, useUIStore } from "./stores";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    stompService.init();

    return () => {
      console.log("Cleaning up");
      stompService.cleanup(); // Total cleanup on unmount
    };
  }, []);

  useScreenOrientation();

  function handleIdleTimeout() {
    const currentPath = window.location.pathname;
    if (currentPath === "/webapp" || currentPath === "/webapp/") {
      useConfigStore.getState().setDefaultRoom();
      useUIStore.getState().setMainPageMode("roomLights");
      useUIStore.setState({ isRoomSelectorOpen: false });
    } else {
      navigate("/webapp/");
      useConfigStore.getState().setDefaultRoom();
    }
  }

  return (
    <div
      onPointerDownCapture={() =>
        useIdleStore.getState().resetIdleTimer(handleIdleTimeout)
      }
      onPointerMoveCapture={() =>
        useIdleStore.getState().resetIdleTimer(handleIdleTimeout)
      }
      className="relative h-[100dvh] w-full overflow-hidden bg-black text-white"
    >
      {/*Background Layer*/}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-100 bg-[linear-gradient(66.5deg,rgba(161,204,165,1)_-11.3%,rgba(12,146,180,1)_100.1%)]"
        // style={{
        //   backgroundImage: `url('default-bg.jpg')`,
        // }}
      />
      <Outlet />
    </div>
  );
}
export default App;
