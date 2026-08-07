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

import {
  useConfigStore,
  useEntityPagesStore,
  useRoomsStore,
  useUIStore,
} from "@/stores";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RoomPage() {
  const navigate = useNavigate();
  const orientation = useUIStore((state) => state.orientation);
  const sliderOrientation =
    orientation === "landscape" ? "vertical" : "horizontal";
  const nextRoom = useConfigStore((state) => state.nextRoom);
  const prevRoom = useConfigStore((state) => state.prevRoom);

  const currentRoomId = useConfigStore((state) => state.currentRoomId);

  const entityPageIds = useRoomsStore((state) =>
    currentRoomId ? state.rooms[currentRoomId]?.entityPageIds : undefined,
  );
  const [entityIndex, setEntityIndex] = useState(0);

  const activeEntityPageId = entityPageIds?.[entityIndex];
  const activeEntityPage = useEntityPagesStore((state) =>
    activeEntityPageId ? state.entityPages[activeEntityPageId] : undefined,
  );
  const totalButtons = activeEntityPage?.pageType || 8;
  const headerText = activeEntityPage?.headerText || undefined;
  const entities = activeEntityPage?.entities || [];

  const roomViewMap = new Map();
  entities.forEach((entity) => {
    roomViewMap.set(entity.roomViewPosition, entity.name);
  });

  const roomButtons = Array.from({ length: totalButtons }, (_, index) => index);

  useEffect(() => {
    if (useConfigStore.getState().roomChangeDirection === "NEXT") {
      setEntityIndex(0);
    } else {
      if (entityPageIds) {
        setEntityIndex(entityPageIds?.length - 1);
      }
    }
  }, [currentRoomId]);

  function handleNextPage() {
    if (entityPageIds) {
      if (entityIndex + 1 < entityPageIds.length) {
        setEntityIndex(entityIndex + 1);
      } else {
        console.log("nextroom");
        nextRoom();
      }
    }
  }

  function handlePrevPage() {
    if (entityPageIds) {
      if (entityIndex !== 0) {
        setEntityIndex(entityIndex - 1);
      } else {
        prevRoom();
      }
    }
  }

  return (
    <div className="relative z-10 h-full grid grid-rows-[auto_1fr] gap-1 p-2 md:gap-2">
      {/* ROW 1 */}
      <div
        className={`grid grid-cols-[auto_auto_1fr_auto] items-center rounded-xl ${orientation === "landscape" ? "h-20 max-lg:[@media(min-aspect-ratio:2/1)]:h-10" : "h-20"}`}
      >
        <div
          onClick={() => navigate("/webapp")}
          className="flex p-5 h-full rounded-l-xl items-center bg-black/20 justify-center select-none cursor-pointer active:opacity-60 duration-50 transition-all"
        >
          <ChevronLeft />
        </div>
        <div
          onClick={() => handlePrevPage()}
          className="flex p-5 h-full items-center bg-black/20 justify-center select-none cursor-pointer active:opacity-60 duration-50 transition-all"
        >
          <ChevronLeft />
        </div>
        <div className="flex h-full items-center justify-center bg-black/20 select-none">
          {headerText}
        </div>
        <div
          onClick={() => handleNextPage()}
          className="flex p-5 h-full rounded-r-xl items-center bg-black/20 justify-center select-none cursor-pointer active:opacity-60 duration-50 transition-alll"
        >
          <ChevronRight />
        </div>
      </div>
      <div
        className={`grid grid-cols-2 gap-2 ${totalButtons === 4 ? "grid-rows-2" : totalButtons === 8 ? "grid-rows-4" : "grid-rows-6"}`}
      >
        {roomButtons.map((button) => (
          <div className="grid items-center p-2 rounded-xl bg-black/20 select-none cursor-pointer active:opacity-60 duration-50 transition-all">
            {roomViewMap.get(button) || ""}
          </div>
        ))}
      </div>

      {/* <div className="flex flex-col">
        {entities?.map((entity) => (
          <div key={entity.roomViewPosition}>
            {`${entity.name} ${entity.roomViewPosition} ${entity.mqttStateTopic}`}
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default RoomPage;
