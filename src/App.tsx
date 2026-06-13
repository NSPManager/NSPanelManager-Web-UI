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
    <div className="relative h-screen w-full bg-black text-white">
      {/*Background Layer*/}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage: `url('default-bg.jpg')`,
        }}
      />
      <MainPage />
    </div>
  );
}
export default App;
