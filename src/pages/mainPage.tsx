import { ChevronDown, SlidersVertical, Sun } from "lucide-react";
import { useConfigStore } from "../stores/useConfigStore";
import { useRoomsStore } from "../stores/useRoomsStore";
import { useUIStore } from "../stores/useUIStore";
import { LightType, SliderType } from "../types";
import TableLightIcon from "../components/TableLightIcon";
import CeilingLightIcon from "../components/CeilingLighIcon";
import Slider from "../components/Slider";
import ColorTempIcon from "../components/ColorTempIcon";

function MainPage() {
  const mainPagemode = useUIStore((state) => state.mainPageMode);

  const currentRoomId = useConfigStore((state) => state.currentRoomId);
  const isLoaded = useRoomsStore((state) => state.isLoaded);
  const room =
    mainPagemode === "roomLights"
      ? useRoomsStore((state) =>
          currentRoomId ? state.rooms[currentRoomId] : null,
        )
      : useRoomsStore((state) => state.globalRoom);

  if (!isLoaded || !room) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="relative z-10 grid h-full w-full grid-cols-4 grid-rows-[auto_1fr_auto] gap-2 p-2 ">
      {/* Row 1 */}
      <div className="flex col-span-4 h-20 rounded-xl bg-black/20">
        <div className="flex flex-1 items-center justify-center h-full">
          <SlidersVertical />
        </div>
        <div className="flex flex-[7] items-center justify-center h-full"></div>
      </div>
      {/* Row 2 ceiling, table, brightness, colortemp */}
      <div
        onClick={() =>
          useRoomsStore.getState().handleLightToggle(LightType.CEILING)
        }
        className="flex flex-col p-4 rounded-xl items-center justify-center bg-black/20"
      >
        <div className="flex justify-center w-1/2 max-w-[50px] md:w-1/3">
          <CeilingLightIcon isOn={room.numCeilingLightsOn > 0} />
        </div>
      </div>
      <div
        onClick={() =>
          useRoomsStore.getState().handleLightToggle(LightType.TABLE)
        }
        className="flex flex-col p-4 rounded-xl items-center justify-center bg-black/20"
      >
        <div className="flex justify-center w-1/2 max-w-[50px] md:w-1/3 ">
          <TableLightIcon isOn={room.numTableLightsOn > 0} />
        </div>
      </div>
      <div className="flex flex-col p-2 rounded-xl items-center justify-center bg-black/20">
        {/* <div className="flex justify-center w-full h-full"> */}
        <Slider
          value={room.averageDimLevel}
          sliderType={SliderType.BRIGHTNESS}
          icon={<Sun size={"100%"} className="w-full" />}
        />
      </div>
      {/* </div> */}
      <div className="flex flex-col p-2 rounded-xl items-center justify-center bg-black/20">
        <Slider
          value={room.averageColorTemperature}
          sliderType={SliderType.COLORTEMP}
          icon={<ColorTempIcon />}
        />
      </div>

      {/* Row 3 Room toggle bu col-span-2tton and Light Mode */}
      <div className="flex col-span-2 h-20 rounded-xl items-center justify-center bg-black/20">
        <button
          onClick={() => useConfigStore.getState().setCurrentRoom()}
          className="flex flex-1 items-center justify-center h-full"
        >
          <ChevronDown />
        </button>
        <div className="w-[2px] h-[60%] bg-[#ffffff80]"></div>
        <button className="text-md flex flex-[3] justify-center">
          {room.name || "All"}
        </button>
      </div>
      <button
        onClick={() => useUIStore.getState().toggleMainPageMode()}
        className="relative flex col-span-2 h-20 rounded-xl items-center justify-center bg-black/20"
      >
        <div className="absolute left-0 top-0 bottom-0 w-[25%] flex items-center justify-center">
          <ChevronDown />
        </div>
        <span className="text-md flex justify-center">
          {mainPagemode === "roomLights" ? "Room Lights" : "All Lights"}
        </span>
      </button>
    </div>
  );
}

export default MainPage;
