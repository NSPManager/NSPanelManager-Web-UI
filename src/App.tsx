// App.tsx
import { useEffect } from "react";
import { stompService } from "@/services/stompService";
import { MainPage } from "@/pages";
import { useScreenOrientation } from "./hooks";

function App() {
  useEffect(() => {
    stompService.init();

    return () => {
      console.log("Cleaning up");
      stompService.cleanup(); // Total cleanup on unmount
    };
  }, []);

  useScreenOrientation();

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-black text-white">
      {/*Background Layer*/}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-100 bg-[linear-gradient(66.5deg,rgba(161,204,165,1)_-11.3%,rgba(12,146,180,1)_100.1%)]"
        // style={{
        //   backgroundImage: `url('default-bg.jpg')`,
        // }}
      />
      <MainPage />
    </div>
  );
}
export default App;
