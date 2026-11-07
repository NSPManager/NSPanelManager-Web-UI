import kitchen from "@/assets/images/backgrounds/kitchen.jpg";
import entryway from "@/assets/images/backgrounds/entryway.jpg";
import livingroom from "@/assets/images/backgrounds/livingroom.jpg";
import office from "@/assets/images/backgrounds/office.jpg";
import screensaver from "@/assets/images/backgrounds/screensaver.jpg";
import bg from "@/assets/images/jeremy-bishop-G9i_plbfDgk-unsplash.jpg"; // or url(/webapp/background.jpg) if it's in public/

const ROOM_IMAGES: Record<string, string> = {
  2: kitchen,
  3: livingroom,
  5: entryway,
  7: office,
};

const SCREENSAVER_IMAGE = screensaver;

import { useConfigStore } from "@/stores";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function useBackgroundImage() {
  const { pathname } = useLocation();
  const currentRoomId = useConfigStore((state) => state.currentRoomId);
  const last = useRef<string>(bg);

  useEffect(() => {
    Object.values(ROOM_IMAGES).forEach((url) => {
      const img = new Image();
      img.src = url;
    });
    const img = new Image();
    img.src = SCREENSAVER_IMAGE;
  }, []);

  if (!import.meta.env.DEV) return bg;

  if (pathname === "/webapp/screensaver") {
    last.current = screensaver;
    return last.current;
  }
  // a missing id means "no change yet", not "go back to the default"
  else if (currentRoomId == null) return last.current;

  last.current = ROOM_IMAGES[currentRoomId] ?? bg;
  return last.current;
}

export default useBackgroundImage;
