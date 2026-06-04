import { ChevronDown, SlidersVertical, Sun } from "lucide-react";
import { useScreenOrientation } from "@/hooks";
import { useConfigStore, useRoomsStore, useUIStore } from "@/stores";
import {
  CeilingLightIcon,
  ColorTempIcon,
  Slider,
  TableLightIcon,
} from "@/components";
import { LightType, SliderType } from "@/types";

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

  const orientation = useScreenOrientation();
  const sliderOrientation =
    orientation === "landscape" ? "vertical" : "horizontal";

  if (!isLoaded || !room) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="relative z-10 grid h-full grid-rows-[auto_1fr_auto] gap-1 p-2 md:gap-2">
      {/* ROW 1 */}
      <div
        className={`flex rounded-xl bg-black/20 ${orientation === "landscape" ? "h-10 md:h-20" : "h-20"}`}
      >
        <div className="flex flex-1 items-center justify-center h-full">
          <SlidersVertical />
        </div>
        <div className="flex flex-[7] items-center justify-center h-full"></div>
      </div>
      {/* Row 2 ceiling, table, brightness, colortemp */}
      <div
        className={`grid gap-1 md:gap-2 ${orientation === "landscape" ? "grid-cols-4 grid-rows-1" : "grid-cols-2 grid-rows-3"}`}
      >
        <div
          onClick={() =>
            useRoomsStore.getState().handleLightToggle(LightType.CEILING)
          }
          className="flex flex-col rounded-xl items-center justify-center bg-black/20"
        >
          <div className="flex justify-center w-[30px] md:w-[50px]">
            <CeilingLightIcon isOn={room.numCeilingLightsOn > 0} />
          </div>
        </div>
        <div
          onClick={() =>
            useRoomsStore.getState().handleLightToggle(LightType.TABLE)
          }
          className="flex flex-col rounded-xl items-center justify-center bg-black/20"
        >
          <div className="flex justify-center w-[30px] md:w-[50px]">
            <TableLightIcon isOn={room.numTableLightsOn > 0} />
          </div>
        </div>
        <div
          className={`flex flex-col p-2 rounded-xl items-center justify-center bg-black/20 ${orientation === "landscape" ? "col-span-1" : "col-span-2"}`}
        >
          <Slider
            value={room.averageDimLevel}
            sliderType={SliderType.BRIGHTNESS}
            orientation={sliderOrientation}
            icon={<Sun size={"100%"} className="w-full" />}
          />
        </div>
        <div
          className={`flex flex-col p-2 rounded-xl items-center justify-center bg-black/20 ${orientation === "landscape" ? "col-span-1" : "col-span-2"}`}
        >
          <Slider
            value={room.averageColorTemperature}
            sliderType={SliderType.COLORTEMP}
            orientation={sliderOrientation}
            icon={<ColorTempIcon />}
          />
        </div>
      </div>
      <div>
        {/* Row 3 Room toggle bu col-span-2tton and Light Mode */}
        <div
          className={`grid grid-cols-2 gap-1 md:gap-2 ${orientation === "landscape" ? "h-10 md:h-20" : "h-20"}`}
        >
          <div
            className={`flex rounded-xl items-center justify-center bg-black/20`}
          >
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
            className="relative flex rounded-xl items-center justify-center bg-black/20"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[25%] flex items-center justify-center">
              <ChevronDown />
            </div>
            <span className="text-md flex justify-center">
              {mainPagemode === "roomLights" ? "Room Lights" : "All Lights"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
