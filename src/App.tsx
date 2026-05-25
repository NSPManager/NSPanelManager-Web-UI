// App.tsx
import { useEffect } from "react";
import { stompService } from "./services/stompService";
import MainPage from "./pages/mainPage";

function App() {
  useEffect(() => {
    stompService.init();

    return () => {
      console.log("Cleaning up");
      stompService.cleanup(); // Total cleanup on unmount
    };
  }, []);

  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden">
      {/* 1. The Background Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: `url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F4789491.jpg&f=1&nofb=1&ipt=af63d75377544ab6623b868a488a3334e53b820e7e91a15247bdd25964544af2')`,
        }}
      />
      <MainPage />
    </div>
  );
}
export default App;
