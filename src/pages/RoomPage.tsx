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

import { stompService } from "@/services/stompService";
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
  const nextRoom = useConfigStore((state) => state.nextRoom);
  const prevRoom = useConfigStore((state) => state.prevRoom);
  const setDefaultRoom = useConfigStore((state) => state.setDefaultRoom);

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
    return () => {
      (setDefaultRoom(),
        useConfigStore.setState({ roomChangeDirection: "DIRECT" }));
    };
  }, []);

  useEffect(() => {
    if (useConfigStore.getState().roomChangeDirection === "DIRECT" || "NEXT") {
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
      {/* ROW 1 NAVIGATION AND HEADER TEXT*/}
      <div
        className={`grid grid-cols-[auto_2px_auto_1fr_auto] md:grid-cols-[auto_4px_auto_1fr_auto] rounded-xl ${orientation === "landscape" ? "h-20 max-lg:[@media(min-aspect-ratio:2/1)]:h-10" : "h-20"}`}
      >
        <div
          onClick={() =>
            // (useConfigStore.setState({ resetDefaultRoom: true }),
            navigate("/webapp/")
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
          className="flex p-5 h-full rounded-r-xl items-center bg-black/20 justify-center select-none cursor-pointer active:opacity-60 duration-50 transition-all"
        >
          <ChevronRight />
        </div>
      </div>
      {/* Buttons */}
      <div
        className={`grid grid-cols-2 gap-1 md:gap-2 ${totalButtons === 4 ? "grid-rows-2" : totalButtons === 8 ? "grid-rows-4" : "grid-rows-6"}`}
      >
        {roomButtons.map((button) => {
          const buttonName = roomViewMap.get(button);
          return (
            <div
              className={`grid ${totalButtons !== 4 ? "grid-cols-[1fr_2px_70px] md:grid-cols-[1fr_2px_100px]" : "grid-rows-[1fr_2px_1fr]"} items-center rounded-xl`}
            >
              <div
                onClick={() =>
                  // (useConfigStore.setState({ resetDefaultRoom: true }),
                  navigate("/webapp/lightpage/67")
                }
                className={`flex h-full bg-black/20 items-center ${totalButtons !== 4 ? "justify-start rounded-l-xl p-3" : "justify-center rounded-t-xl"} select-none cursor-pointer active:opacity-60 duration-50 transition-all`}
              >
                {buttonName}
              </div>
              <div
                className={`grid ${totalButtons !== 4 ? "grid-rows-[1fr_60%_1fr]" : "grid-cols-[1fr_60%_1fr]"} h-full`}
              >
                <div className="bg-black/20"></div>
                <div className="bg-transparent"></div>
                <div className="bg-black/20"></div>
              </div>
              <div
                className={`flex h-full bg-black/20 justify-center items-center ${totalButtons !== 4 ? "rounded-r-xl" : "rounded-b-xl"}`}
              >
                {buttonName ? (
                  <button
                    onClick={() =>
                      stompService.sendLightCommand(
                        { brightness: 0, colorTemp: 0 },
                        67,
                      )
                    }
                    className="relative inline-flex h-7 w-12 rounded-full bg-white/40 p-1 cursor-pointer transition-colors duration-200 ease-in-out select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  >
                    <span className="h-5 w-5 inline-block rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out"></span>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RoomPage;
