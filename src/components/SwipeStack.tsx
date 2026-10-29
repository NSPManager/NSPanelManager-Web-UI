import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { animate, motion, useMotionValue, type PanInfo } from "framer-motion";
import Screen from "./Screen";
import Background from "./Background";

const BASE_URL = "/webapp";

const swipePages: Record<string, { parentPage: string; dropDownPage: string }> =
  {
    [`${BASE_URL}/mainpage`]: {
      parentPage: `${BASE_URL}/screensaver`,
      dropDownPage: `${BASE_URL}/dropdown`,
    },
    [`${BASE_URL}/roompage`]: {
      parentPage: `${BASE_URL}/mainpage`,
      dropDownPage: "",
    },
    [`${BASE_URL}/lightpage`]: {
      parentPage: `${BASE_URL}/roompage`,
      dropDownPage: "",
    },
  };

function parentPageOf(pathname: string): string | undefined {
  if (pathname.startsWith(`${BASE_URL}/lightpage/`))
    return `${BASE_URL}/roompage`;
  return swipePages[pathname]?.parentPage;
}

function SwipeStack() {
  const { pathname } = useLocation();

  const parentPage = parentPageOf(pathname);
  const dropDownPage = swipePages[pathname]?.dropDownPage;

  const navigate = useNavigate();

  const didDrag = useRef(false);

  const SLIDE = { duration: 0.22, ease: "easeOut" } as const;

  const H = window.innerHeight;
  const pageY = useMotionValue(0);
  const dropY = useMotionValue(-H);
  const [open, setOpen] = useState(false);
  const axis = useRef<"x" | "y" | "blocked" | null>(null);

  useLayoutEffect(() => {
    pageY.jump(0); // like set(), but also stops any running animation
    setOpen(false);
  }, [pathname, pageY]);

  //   const onPanStart = (e: PointerEvent | MouseEvent | TouchEvent) => {
  //     const blocked = (e.target as HTMLElement).closest("[data-no-swipe]");
  //     axis.current = blocked ? "blocked" : null;
  //   };

  const onPan = (_: unknown, info: PanInfo) => {
    if (axis.current === "blocked") return;
    if (!axis.current) {
      // decide axis after 8px
      const { x, y } = info.offset;
      if (Math.abs(x) < 8 && Math.abs(y) < 8) return;
      axis.current = Math.abs(y) > Math.abs(x) ? "y" : "x";
      didDrag.current = true;
    }
    if (axis.current !== "y") return; // drag is not vertical return

    const dy = info.offset.y;
    if (open && dropDownPage) {
      dropY.set(Math.min(0, dy)); // dropdown open: dragging up closes it
    } else if (dy > 0 && dropDownPage) {
      dropY.set(Math.min(0, -H + dy)); // pull down: dropdown follows finger
    } else if (parentPage && dy < 0) {
      pageY.set(dy); // swipe up: page moves away
    }
  };

  const onPanEnd = (_: unknown, info: PanInfo) => {
    if (axis.current !== "y") return;
    const { y: dy } = info.offset;
    const vy = info.velocity.y;

    if (open && dropDownPage) {
      if (-dy > H * 0.25 || -vy > 500) {
        animate(dropY, -H, SLIDE).then(() => setOpen(false));
      } else animate(dropY, 0, SLIDE);
    } else if (dy > 0 && dropDownPage) {
      if (dy > H * 0.25 || vy > 500) {
        animate(dropY, 0, SLIDE).then(() => setOpen(true));
      } else animate(dropY, -H, SLIDE);
    } else if (parentPage) {
      if (-dy > H * 0.3 || -vy > 500) {
        animate(pageY, -H, SLIDE).then(() =>
          navigate(parentPage, { replace: true }),
        );
      } else animate(pageY, 0, SLIDE);
    }
  };

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

  // const lastPath = useRef(pathname);
  // if (lastPath.current !== pathname) {
  //   lastPath.current = pathname;
  //   // pageY.set(0);
  //   // setOpen(false);
  // }
  console.log(dropDownPage);

  return (
    <motion.div
      className="fixed inset-0 overflow-hidden"
      style={{ touchAction: "none" }}
      onPointerDownCapture={onPointerDownCapture}
      onClickCapture={onClickCapture}
      //   onPanStart={onPanStart}
      onPan={onPan}
      onPanEnd={onPanEnd}
    >
      {parentPage && (
        <motion.div
          key={parentPage}
          className="absolute inset-0"
          style={{ zIndex: 0 }}
        >
          {" "}
          <Background />
          <Screen path={parentPage} />
        </motion.div>
      )}

      <motion.div
        key={pathname}
        className="absolute inset-0"
        style={{ y: pageY, zIndex: 1 }}
      >
        {" "}
        <Background />
        <Screen path={pathname} />
      </motion.div>

      {dropDownPage && (
        <motion.div
          className="absolute inset-0 bg-black"
          style={{ y: dropY, zIndex: 2 }}
        >
          {" "}
          {/* Lightpage just as test */}
          <Screen path={dropDownPage} />
        </motion.div>
      )}
    </motion.div>
  );
}

export default SwipeStack;
