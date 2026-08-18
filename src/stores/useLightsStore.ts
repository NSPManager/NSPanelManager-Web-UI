import { create } from "zustand";
import { devtools } from "zustand/middleware";

import {
  stompService,
  type LightCommandOptions,
} from "@/services/stompService";
import { SliderType } from "@/types";
import type { NSPanelEntityState } from "@/generated/src/proto/protobuf_nspanel_entity";

interface LightState {
  lights: Record<string, NSPanelEntityState>;
  isLoaded: boolean;
  updateLight: (lightData: NSPanelEntityState) => void;
  resetLights: () => void;
  handleLightPageSlider: (
    lightId: string,
    sliderType: SliderType,
    value: number,
  ) => void;
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
      handleLightPageSlider: (lightId, sliderType, value) => {
        const options: LightCommandOptions = {
          brightness: sliderType === SliderType.BRIGHTNESS ? value : undefined,
          colorTemp: sliderType === SliderType.COLORTEMP ? value : undefined,
          rgb: sliderType === SliderType.RGB ? value : undefined,
          saturation: sliderType === SliderType.SATURATION ? value : undefined,
        };
        stompService.sendLightCommand(options, Number(lightId));
      },
    }),
    { name: "LightsStore" },
  ),
);
