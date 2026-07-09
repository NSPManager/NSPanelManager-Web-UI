import { ChevronDown, SlidersVertical, Sun } from "lucide-react";
import { useConfigStore, useRoomsStore, useUIStore } from "@/stores";
import {
  CeilingLightIcon,
  ColorTempIcon,
  RoomSelector,
  Slider,
  TableLightIcon,
} from "@/components";
import { LightType, SliderType } from "@/types";
import { useLongPress } from "@/hooks/useLongPress";
import { useLongPressLock } from "@/hooks/useLongPressLock";

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

  const orientation = useUIStore((state) => state.orientation);
  const sliderOrientation =
    orientation === "landscape" ? "vertical" : "horizontal";
  const handleLightToggle = useRoomsStore.getState().handleLightToggle;
  const setCurrentRoom = useConfigStore.getState().setCurrentRoom;
  const toggleMainPageMode = useUIStore.getState().toggleMainPageMode;

  const tableLock = useLongPressLock();

  const tableButtonHandlers = useLongPress({
    onShortPress: () =>
      tableLock.isLockActive || ceilingLock.isLockActive
        ? clearAllLocks()
        : handleLightToggle(LightType.TABLE),
    onLongPress: () => {
      if (tableLock.isLockActive) return clearAllLocks();
      ceilingLock.clearLock();
      tableLock.startLock();
    },
  });

  const ceilingLock = useLongPressLock();

  const ceilingButtonHandlers = useLongPress({
    onShortPress: () =>
      tableLock.isLockActive || ceilingLock.isLockActive
        ? clearAllLocks()
        : handleLightToggle(LightType.CEILING),
    onLongPress: () => {
      if (ceilingLock.isLockActive) return clearAllLocks();
      tableLock.clearLock();
      ceilingLock.startLock();
    },
  });

  function clearAllLocks() {
    ceilingLock.clearLock();
    tableLock.clearLock();
  }
  if (!isLoaded || !room) {
    return (
      <div className="relative z-10 flex h-full items-center justify-center">
        Waiting for config from manager...
      </div>
    );
  }

  const cardStyles = "rounded-xl items-center justify-center bg-black/20";

  const sliderStyles = `p-2 ${orientation === "landscape" ? "col-span-1" : "col-span-2"}`;

  const ceilingTableStyles = "flex justify-center w-[30px] md:w-[50px]";

  const activeLockBrightnessSlider = tableLock.isLockActive
    ? {
        type: LightType.TABLE,
        value: room.tableLightsDimLevel,
        reset: tableLock.resetLockTimeout,
      }
    : ceilingLock.isLockActive
      ? {
          type: LightType.CEILING,
          value: room.ceilingLightsDimLevel,
          reset: ceilingLock.resetLockTimeout,
        }
      : null;

  const activeLockColorTempSlider = tableLock.isLockActive
    ? {
        type: LightType.TABLE,
        value: room.tableLightsColorTemperatureValue,
        reset: tableLock.resetLockTimeout,
      }
    : ceilingLock.isLockActive
      ? {
          type: LightType.CEILING,
          value: room.ceilingLightsColorTemperatureValue,
          reset: ceilingLock.resetLockTimeout,
        }
      : null;

  return (
    <div className="relative z-10 grid h-full grid-rows-[auto_1fr_auto] gap-1 p-2 md:gap-2">
      {/* ROW 1 */}
      <div
        className={`flex rounded-xl bg-black/20 ${orientation === "landscape" ? "h-20 max-lg:[@media(min-aspect-ratio:2/1)]:h-10" : "h-20"}`}
      >
        <div className="flex flex-1 items-center justify-center h-full">
          <SlidersVertical />
        </div>
        <div className="flex flex-[7] items-center justify-center h-full"></div>
      </div>
      {/* ROW 2 Buttons: ceiling, table, brightness, colortemp */}
      <div
        className={`grid gap-1 md:gap-2 ${orientation === "landscape" ? "grid-cols-4 grid-rows-1" : "grid-cols-2 grid-rows-3"}`}
      >
        <div
          {...ceilingButtonHandlers}
          // onClick={() => handleLightToggle(LightType.CEILING)}
          className={`flex flex-col cursor-pointer ${cardStyles}`}
        >
          <div
            className={`w-[60px] h-[3px] transition-colors duration-200 ${ceilingLock.isLockActive ? "bg-[#FFC101]" : "bg-transparent"} `}
          ></div>
          <div className={`${ceilingTableStyles}`}>
            <CeilingLightIcon isOn={room.numCeilingLightsOn > 0} />
          </div>
        </div>
        <div
          {...tableButtonHandlers}
          // onClick={() => handleLightToggle(LightType.TABLE)}
          className={`flex flex-col cursor-pointer ${cardStyles}`}
        >
          <div className={`${ceilingTableStyles}`}>
            <TableLightIcon isOn={room.numTableLightsOn > 0} />
          </div>
          <div
            className={`w-[60px] h-[3px] transition-colors duration-200 ${tableLock.isLockActive ? "bg-[#FFC101]" : "bg-transparent"} `}
          ></div>
        </div>
        <div className={`flex flex-col ${cardStyles} ${sliderStyles}`}>
          <Slider
            value={
              activeLockBrightnessSlider
                ? activeLockBrightnessSlider.value
                : room.averageDimLevel
            }
            sliderType={SliderType.BRIGHTNESS}
            orientation={sliderOrientation}
            icon={<Sun size={"100%"} className="w-full" />}
            resetLockTimeout={activeLockBrightnessSlider?.reset}
            lockLightType={activeLockBrightnessSlider?.type}
          />
        </div>
        <div className={`flex flex-col ${cardStyles} ${sliderStyles}`}>
          <Slider
            value={
              activeLockColorTempSlider
                ? activeLockColorTempSlider.value
                : room.averageColorTemperature
            }
            sliderType={SliderType.COLORTEMP}
            orientation={sliderOrientation}
            icon={<ColorTempIcon />}
            resetLockTimeout={activeLockColorTempSlider?.reset}
            lockLightType={activeLockColorTempSlider?.type}
          />
        </div>
      </div>
      <div>
        {/* ROW 3 Room toggle button and Light Mode */}
        <div
          className={`grid grid-cols-2 gap-1 md:gap-2 ${orientation === "landscape" ? "h-20 max-lg:[@media(min-aspect-ratio:2/1)]:h-10" : "h-20"}`}
        >
          <div className="grid grid-cols-[1fr_2px_3fr] md:grid-cols-[1fr_4px_3fr]">
            <div
              className={`flex rounded-l-xl items-center justify-center bg-black/20`}
            >
              <button
                onClick={
                  mainPagemode === "roomLights"
                    ? () => setCurrentRoom()
                    : undefined
                }
                className="flex items-center justify-center h-full w-full cursor-pointer"
              >
                <ChevronDown />
              </button>
            </div>
            <div className="grid grid-rows-[1fr_60%_1fr]">
              <div className="bg-black/20"></div>
              <div className="bg-transparent"></div>
              <div className="bg-black/20"></div>
            </div>
            <div
              className={`flex rounded-r-xl items-center justify-center bg-black/20`}
            >
              <RoomSelector />
            </div>
          </div>
          <button
            onClick={() => toggleMainPageMode()}
            className={`relative flex cursor-pointer ${cardStyles}`}
          >
            <div className="absolute left-0 top-0 bottom-0 w-[25%] flex items-center justify-center">
              <ChevronDown />
            </div>
            <span className="text-md flex justify-center cursor-pointer">
              {mainPagemode === "roomLights" ? "Room Lights" : "All Lights"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
