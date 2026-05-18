import { create } from "zustand";
import { devtools } from "zustand/middleware";

type MainPageMode = "roomLights" | "allLights";

interface UIState {
  mainPageMode: MainPageMode;
  toggleMainPageMode: () => void;
  setMainPageMode: (mode: MainPageMode) => void;
  resetMainPagemode: () => void;
}

export const useUIStore = create<UIState>()(
  devtools((set, get) => ({
    mainPageMode: "roomLights",
    toggleMainPageMode: () => {
      get().mainPageMode === "roomLights"
        ? set({ mainPageMode: "allLights" })
        : set({ mainPageMode: "roomLights" });
    },
    setMainPageMode: (mode) =>
      set({ mainPageMode: mode }, false, "setMainPageMode"),
    resetMainPagemode: () =>
      set({ mainPageMode: "roomLights" }, false, "resetMainPagemode"),
  })),
);
