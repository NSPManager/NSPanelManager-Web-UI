//Need to update roomsStore: change setCurrenRoom to only take care of id and add prevRoom and nextRoom as separate functions
// -- DONE
//Should use storedata currentroom to display data
//With currentroom its possible to get entity pages data and entities for each page.
//It should be possible to press prev/next to get to next entity page.
//if last entitypage current room should next room and the same if going backwards and youre on the first entitypage
//When exiting and going back to main page currentroom should be set to default again
//It should be possible to swipe
//Cool if swipe animation is implemented

//varje sida har en entity pages array ex: [2,3,6] id över resp page
//den behöver hämtas när sidan laddas sätts entityIndex till 0 dvs data för första sidan visas.
//Sedan ändrar vi index för att byta sida. den logiken tar vi sen.
//kolla entity page type 4/8/12
//skapa new map över entities som finns. 1: bord 3: tak osv
//skapa ny array med length = page type 4/8/12
//mappa över denna för varje kolla map:en och skriv ut entiteten om den finns annars lämna tomt.

import { ColorTempIcon, Slider } from "@/components";
import ColorIcon from "@/components/ColorIcon";
import {
  useConfigStore,
  useEntityPagesStore,
  useLightsStore,
  useRoomsStore,
  useUIStore,
} from "@/stores";
import { SliderType } from "@/types";
import { ChevronLeft, ChevronRight, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { TbDropletHalf2Filled } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";

function RoomPage() {
  const navigate = useNavigate();
  const orientation = useUIStore((state) => state.orientation);
  const sliderOrientation =
    orientation === "landscape" ? "vertical" : "horizontal";

  const { id: lightId } = useParams();

  const light = lightId
    ? useLightsStore((state) => state.lights[lightId])
    : undefined;

  const [lightMode, setLightMode] = useState<"COLORTEMP" | "RGB">("COLORTEMP");

  useEffect(() => {
    const currentLightMode = light?.light?.currentLightMode;
    if (currentLightMode !== undefined) {
      setLightMode(currentLightMode === 1 ? "RGB" : "COLORTEMP");
    }
  }, [light?.light?.currentLightMode]);
  console.log(lightMode);
  console.log(light?.light?.currentLightMode);
  // const entityPageIds = useRoomsStore((state) =>
  //   currentRoomId ? state.rooms[currentRoomId]?.entityPageIds : undefined,
  // );
  // const [entityIndex, setEntityIndex] = useState(0);

  // const activeEntityPageId = entityPageIds?.[entityIndex];
  // const activeEntityPage = useEntityPagesStore((state) =>
  //   activeEntityPageId ? state.entityPages[activeEntityPageId] : undefined,
  // );

  // useEffect(() => {
  //   if (useConfigStore.getState().roomChangeDirection === "NEXT") {
  //     setEntityIndex(0);
  //   } else {
  //     if (entityPageIds) {
  //       setEntityIndex(entityPageIds?.length - 1);
  //     }
  //   }
  // }, [currentRoomId]);

  // function handleNextPage() {
  //   if (entityPageIds) {
  //     if (entityIndex + 1 < entityPageIds.length) {
  //       setEntityIndex(entityIndex + 1);
  //     } else {
  //       console.log("nextroom");
  //     }
  //   }
  // }

  // function handlePrevPage() {
  //   if (entityPageIds) {
  //     if (entityIndex !== 0) {
  //       setEntityIndex(entityIndex - 1);
  //     } else {
  //     }
  //   }
  // }

  const cardStyles = "rounded-xl bg-black/20";

  if (!light || !lightId) {
    return (
      <div className="relative z-10 flex h-full items-center justify-center">
        Waiting for config from manager...
      </div>
    );
  }

  return (
    <div className="relative z-10 h-full grid grid-rows-[auto_1fr] gap-1 p-2 md:gap-2">
      {/* ROW 1 NAVIGATION AND HEADER TEXT*/}
      <div
        className={`grid grid-cols-[auto_2px_auto_1fr_auto] md:grid-cols-[auto_4px_auto_1fr_auto] rounded-xl ${orientation === "landscape" ? "h-20 max-lg:[@media(min-aspect-ratio:2/1)]:h-10" : "h-20"}`}
      >
        <div
          onClick={() =>
            // (useConfigStore.setState({ resetDefaultRoom: true }),
            navigate("/webapp/roompage")
          }
          className="flex p-5 h-full rounded-l-xl items-center bg-black/20 justify-center select-none cursor-pointer active:opacity-60 duration-50 transition-all"
        >
          <ChevronLeft />
        </div>
        <div className="grid grid-rows-[1fr_60%_1fr]">
          <div className="bg-black/20"></div>
          <div className="bg-transparent"></div>
          <div className="bg-black/20"></div>
        </div>
        <div
          // onClick={() => handlePrevPage()}
          className="flex p-5 h-full items-center bg-black/20 justify-center select-none cursor-pointer active:opacity-60 duration-50 transition-all"
        >
          <ChevronLeft />
        </div>
        <div className="flex h-full items-center justify-center bg-black/20 select-none">
          {/* {headerText} */}
          {light.light?.name}
        </div>
        <div
          // onClick={() => handleNextPage()}
          className="flex p-5 h-full rounded-r-xl items-center bg-black/20 justify-center select-none cursor-pointer active:opacity-60 duration-50 transition-alll"
        >
          <ChevronRight />
        </div>
      </div>
      {/* Buttons */}
      <div
        className={`grid ${orientation === "landscape" ? "grid-cols-3" : "grid-rows-3"}  gap-1 md:gap-2`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`flex ${cardStyles}`}
        >
          <Slider
            value={light.light?.brightness ?? 0}
            orientation={sliderOrientation}
            sliderType={SliderType.BRIGHTNESS}
            icon={<Sun size={"100%"} className="w-full" />}
            lightId={lightId}
          />
        </div>
        <div
          onClick={(e) => e.stopPropagation()}
          className={`flex flex-col ${cardStyles}`}
        >
          {light.light?.canColorTemp ? (
            <Slider
              value={
                light.light.currentLightMode === 1
                  ? (light.light.saturation ?? 0)
                  : (light.light.colorTemp ?? 0)
              }
              orientation={sliderOrientation}
              sliderType={
                light.light.currentLightMode === 1
                  ? SliderType.SATURATION
                  : SliderType.COLORTEMP
              }
              icon={
                light.light.currentLightMode === 1 ? (
                  <TbDropletHalf2Filled size={"100%"} className="w-full" />
                ) : (
                  <ColorTempIcon />
                )
              }
              lightId={lightId}
            />
          ) : (
            ""
          )}
        </div>
        <div
          onClick={(e) => e.stopPropagation()}
          className={`flex flex-col ${cardStyles}`}
        >
          {light.light?.canColor && light.light.currentLightMode === 1 ? (
            <Slider
              value={light.light.hue ?? 0}
              orientation={sliderOrientation}
              sliderType={SliderType.RGB}
              icon={<ColorIcon />}
              lightId={lightId}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default RoomPage;
