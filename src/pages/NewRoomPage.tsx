// useConfigStore
//Update useConfigStore to hold currentRoom and currentEntityPage
// also add setCurrent function to set currentroom and currententitypage
//DONE used setCurrentRoom and added parameter entityPageId as optional

import { type NSPanelConfig_RoomInfo } from "@/generated/src/proto/protobuf_nspanel";
import { useConfigStore, useEntityPagesStore, useUIStore } from "@/stores";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { animate, motion, useMotionValue, type PanInfo } from "framer-motion";
import { EntityGrid } from "@/components";
import LoadingPage from "./LoadingPage";
import { cardBg, cardBorderShadow } from "@/styles";

//Room page
// Room page should have state on currentroom and currententitypage
//DONE
//should create a flat map of all the entitypages stored as :{roomId, index, entityPage}[]
//DONE
// should have logic to know what prev and next entitypage is. easily done wite the array. loop over on end and beginning
//should have prev and next functions that set new currentroom and currententitypage in configstore.
//whenever that changes logic for prev and next ids are recalculated on new render

//<motion.div>
//map over the three entiypage ids prev, current, next
//every entitypage gets its data with the help of entutypage id and entitypagestore
//</motion.div>
//

type entityPageRef = { roomId: number; index: number; entityPageId: number };

function buildSequence(roomInfos: NSPanelConfig_RoomInfo[]): entityPageRef[] {
  return roomInfos.flatMap((room) =>
    room.entityPageIds.map((id, index) => ({
      roomId: room.roomId,
      index: index,
      entityPageId: id,
    })),
  );
}

function NewRoomPage() {
  const navigate = useNavigate();
  const orientation = useUIStore((state) => state.orientation);

  const currentRoomId = useConfigStore((state) => state.currentRoomId);
  const currentEntityPageIndex = useConfigStore(
    (state) => state.currentEntityPageIndex,
  );
  const roomInfos = useConfigStore((state) => state.config?.roomInfos);
  const setCurrentRoom = useConfigStore((state) => state.setCurrentRoom);

  const sequence = buildSequence(roomInfos || []);

  const currentSequenceIndex = sequence.findIndex(
    (position) =>
      position.roomId === Number(currentRoomId) &&
      position.index === currentEntityPageIndex,
  );

  const nextSequenceIndex =
    currentSequenceIndex === sequence.length - 1 ? 0 : currentSequenceIndex + 1;

  const prevSequenceIndex =
    currentSequenceIndex === 0 ? sequence.length - 1 : currentSequenceIndex - 1;

  const currentEntityPageId = sequence?.[currentSequenceIndex]?.entityPageId;
  const headerText = useEntityPagesStore(
    (state) => state.entityPages[currentEntityPageId]?.headerText,
  );

  function changeEntityPage(target: entityPageRef) {
    setCurrentRoom(String(target.roomId), target.index);
  }

  function changeEntityPageClick(dir: "prev" | "next") {
    if (dir == "prev") {
      animate(pageX, W, SLIDE).then(() =>
        changeEntityPage(sequence[prevSequenceIndex]),
      );
    }
    if (dir == "next") {
      animate(pageX, -W, SLIDE).then(() =>
        changeEntityPage(sequence[nextSequenceIndex]),
      );
    }
  }

  const didDrag = useRef(false);

  const SLIDE = { duration: 0.22, ease: "easeOut" } as const;

  const W = window.innerWidth;
  const pageX = useMotionValue(0);
  const axis = useRef<"x" | "y" | "blocked" | null>(null);

  const onPan = (_: unknown, info: PanInfo) => {
    if (sequence.length === 1) return;
    if (axis.current === "blocked") return;
    if (!axis.current) {
      // decide axis after 8px
      const { x, y } = info.offset;
      if (Math.abs(x) < 8 && Math.abs(y) < 8) return;
      axis.current = Math.abs(y) > Math.abs(x) ? "y" : "x";
      didDrag.current = true;
    }
    if (axis.current !== "x") return; // drag is not horizontal return

    const dx = info.offset.x;
    pageX.set(dx);
  };

  const onPanEnd = (_: unknown, info: PanInfo) => {
    if (axis.current !== "x") return;
    const { x: dx } = info.offset;
    const vx = info.velocity.x;

    //RIGHT (PREV)
    // console.log(dx, W, vx);
    if (dx > W * 0.25 || vx > 500) {
      animate(pageX, W, SLIDE).then(() =>
        changeEntityPage(sequence[prevSequenceIndex]),
      );
    }
    //LEFT (NEXT)
    else if (-dx > W * 0.25 || -vx > 500) {
      animate(pageX, -W, SLIDE).then(() =>
        changeEntityPage(sequence[nextSequenceIndex]),
      );
    }
    //RESTORE TO CENTER
    else animate(pageX, 0, SLIDE);
  };

  useLayoutEffect(() => {
    pageX.jump(0);
  }, [currentSequenceIndex, pageX]);

  const onPointerDownCapture = (e: React.PointerEvent) => {
    didDrag.current = false;
    const blocked = (e.target as HTMLElement).closest("[data-no-swipe]");
    axis.current = blocked ? "blocked" : null;
  };

  const onClickCapture = (e: React.MouseEvent) => {
    if (didDrag.current) {
      e.stopPropagation(); // React handlers on buttons never run
      e.preventDefault(); // Links don't navigate
      didDrag.current = false;
    }
  };

  const slides = [
    { offset: -1, ref: sequence[prevSequenceIndex] },
    { offset: 0, ref: sequence[currentSequenceIndex] },
    { offset: 1, ref: sequence[nextSequenceIndex] },
  ];

  if (!sequence[currentSequenceIndex]) return <LoadingPage />;

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 grid grid-rows-[auto_1fr] gap-1 p-1 md:p-2 md:gap-2">
        {/* ROW 1 NAVIGATION AND HEADER TEXT*/}
        <div
          className={`grid grid-cols-[auto_2px_auto_1fr_auto] md:grid-cols-[auto_4px_auto_1fr_auto] border ${cardBorderShadow} rounded-xl ${orientation === "landscape" ? "h-20 max-lg:[@media(min-aspect-ratio:2/1)]:h-10" : "h-20"}`}
        >
          <div
            onClick={() =>
              // (useConfigStore.setState({ resetDefaultRoom: true }),
              navigate("/webapp/")
            }
            className={`flex p-5 h-full ${cardBg} rounded-l-xl items-center justify-center select-none cursor-pointer active:opacity-60 duration-50 transition-all`}
          >
            <ChevronLeft />
          </div>
          <div className="grid grid-rows-[1fr_60%_1fr]">
            <div className={`${cardBg}`}></div>
            <div className="bg-transparent"></div>
            <div className={`${cardBg}`}></div>
          </div>
          <div
            onClick={() => changeEntityPageClick("prev")}
            className={`flex p-5 h-full ${cardBg} items-center justify-center select-none cursor-pointer active:opacity-60 duration-50 transition-all`}
          >
            <ChevronLeft />
          </div>
          <div
            className={`flex h-full ${cardBg} items-center justify-center select-none`}
          >
            {headerText}
          </div>
          <div
            onClick={() => changeEntityPageClick("next")}
            className={`flex p-5 h-full ${cardBg} rounded-r-xl items-center justify-center select-none cursor-pointer active:opacity-60 duration-50 transition-all`}
          >
            <ChevronRight />
          </div>
        </div>
        {/* Entity buttons */}
        <div className="relative min-h-0 -mx-1 md:-mx-2 overflow-hidden">
          <motion.div
            style={{ touchAction: "none", x: pageX }}
            onPointerDownCapture={onPointerDownCapture}
            onClickCapture={onClickCapture}
            onPan={onPan}
            onPanEnd={onPanEnd}
            className="absolute inset-0"
          >
            {slides.map(({ offset, ref }) => (
              <div
                key={ref.entityPageId}
                className={`absolute inset-0 px-1 md:px-2`}
                style={{ transform: `translateX(${offset * 100}%)` }}
              >
                <EntityGrid EntityPageId={ref.entityPageId} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default NewRoomPage;
