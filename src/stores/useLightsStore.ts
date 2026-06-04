import { create } from "zustand";
import { devtools } from "zustand/middleware";

import type { NSPanelEntityState } from "@/proto/bundle";

interface LightState {
  lights: Record<string, NSPanelEntityState>;
  isLoaded: boolean;
  updateLight: (lightData: NSPanelEntityState) => void;
  resetLights: () => void;
}

export const useLightsStore = create<LightState>()(
  devtools(
    (set) => ({
      lights: {},
      isLoaded: false,

      updateLight: (lightData) => {
        set(
          (state) => ({
            lights: {
              ...state.lights,
              [String(lightData.light?.lightId)]: lightData,
            },
            isLoaded: true,
          }),
          false,
          "updateLight",
        );
      },

      resetLights: () =>
        set(
          {
            lights: {},
            isLoaded: false,
          },
          false,
          "resetLights",
        ),
    }),
    { name: "LightsStore" },
  ),
);
