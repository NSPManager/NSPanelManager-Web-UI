// App.tsx
import { useEffect } from "react";
import { stompService } from "@/services/stompService";
import { useScreenOrientation } from "./hooks";
import { Outlet, useNavigate } from "react-router-dom";
import { useConfigStore, useIdleStore, useUIStore } from "./stores";
import { NSPanelConfig_NSPanelScreensaverMode } from "./generated/src/proto/protobuf_nspanel";

function App() {
  const navigate = useNavigate();
  const screenSaverMode = useConfigStore(
    (state) => state.config?.screensaverMode,
  );

  const resetIdleTimer = useIdleStore.getState().resetIdleTimer;

  useEffect(() => {
    stompService.init();
    resetIdleTimer(handleIdleTimeout);

    return () => {
      console.log("Cleaning up");
      stompService.cleanup(); // Total cleanup on unmount
    };
  }, []);

  useScreenOrientation();

  function handleIdleTimeout() {
    const currentPath = window.location.pathname;

    useConfigStore.getState().setDefaultRoom();
    useUIStore.getState().setMainPageMode("roomLights");
    useUIStore.setState({ isRoomSelectorOpen: false });
    if (
      screenSaverMode !== NSPanelConfig_NSPanelScreensaverMode.NO_SCREENSAVER &&
      useConfigStore.getState().config?.screensaverActivationTimeout !== 0
    ) {
      navigate("/webapp/screensaver");
    } else {
      if (currentPath === "/webapp" || currentPath === "/webapp/") {
      } else {
        navigate("/webapp/");
      }
    }
  }

  return (
    <div
      onPointerDownCapture={() => resetIdleTimer(handleIdleTimeout)}
      onPointerMoveCapture={() => resetIdleTimer(handleIdleTimeout)}
      className="relative h-[100dvh] w-full overflow-hidden bg-black text-white"
    >
      {/*Background Layer*/}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-100"
        style={{
          background: "linear-gradient(to top, #5c7852, #9fa0a8)",
        }}
      />
      <Outlet />
    </div>
  );
}
export default App;
