import { create } from "zustand";
import { devtools } from "zustand/middleware";

type MainPageMode = "roomLights" | "allLights";
type Orientation = "landscape" | "portrait";

interface UIState {
  mainPageMode: MainPageMode;
  orientation: Orientation;
  toggleMainPageMode: () => void;
  setMainPageMode: (mode: MainPageMode) => void;
  resetMainPagemode: () => void;
  setOrientation: (orientation: Orientation) => void;
}

export const useUIStore = create<UIState>()(
  devtools(
    (set, get) => ({
      mainPageMode: "roomLights",
      orientation: "landscape",
      toggleMainPageMode: () => {
        get().mainPageMode === "roomLights"
          ? set({ mainPageMode: "allLights" })
          : set({ mainPageMode: "roomLights" });
      },
      setMainPageMode: (mode) =>
        set({ mainPageMode: mode }, false, "setMainPageMode"),
      resetMainPagemode: () =>
        set({ mainPageMode: "roomLights" }, false, "resetMainPagemode"),
      setOrientation: (orientation: Orientation) =>
        set({ orientation: orientation }, false, "setOrientation"),
    }),
    { name: "UIStore" },
  ),
);
