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
      {/* Row 1 */}
      {/* 1. The Background Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1548913344-66177da9425e?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      />
      <MainPage />
    </div>
  );
}
export default App;
