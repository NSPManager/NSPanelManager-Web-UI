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
        className="absolute inset-0 z-0 bg-cover bg-center opacity-100"
        style={{
          // backgroundImage: `url('default-bg.jpg')`,

          /* https://grabient.com/_gHGgHIgGEgDGgDCgC7gIRgJ-gIYgYDhJIgrr */
          /* https://grabient.com/_gUUgL9gfhgULgMwgd5gCfgCqgBhgIMgJtgIs */
          /* https://grabient.com/_gJ6gAQfpkgJOgK2gg2gFMgDlgBlgH0gMIgOQ */
          /* https://grabient.com/_gVSgDUgH1gUGgBUgExgBpgH8gDdgHZgIOgJq */
          /* https://grabient.com/_gAAgHEgHNgAAgFFgKSgBkgF1gBkgAAgIWgLI */
          /* https://grabient.com/_gLAfRrgLAgEog-WgEogKQgBogKTgIrgObgMb */

          /* https://grabient.com/_gbfgDmgDbgZPgCXgBvgBmgHKgKTgIQgJTgIY */
          /* https://grabient.com/_gCHf6Ef9wgEqgRNgMfgDegBngBogKegM1gMX */
          background:
            "linear-gradient(to top, #5c7852, #9fa0a8)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        }}
      />
      <Outlet />
    </div>
  );
}
export default App;
