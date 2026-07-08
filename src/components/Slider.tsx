import { useRoomsStore } from "@/stores";
import type { LightType, SliderType } from "@/types";
import * as RadixSlider from "@radix-ui/react-slider";
import { useEffect, useState, type JSX } from "react";

interface SliderProps {
  value: number;
  sliderType: SliderType;
  orientation: "horizontal" | "vertical" | undefined;
  icon: JSX.Element;
  resetLockTimeout(): void;
  lockLightType?: typeof LightType.CEILING | typeof LightType.TABLE;
}

function Slider({
  value,
  sliderType,
  orientation,
  icon,
  resetLockTimeout,
  lockLightType,
}: SliderProps) {
  const [sliderValue, setSliderValue] = useState(value);

  useEffect(() => {
    setSliderValue(value);
  }, [value]);

  return (
    <RadixSlider.Root
      orientation={orientation}
      min={0}
      max={100}
      step={1}
      value={[sliderValue]}
      onValueChange={(values) => {
        setSliderValue(values[0]);
        lockLightType ? resetLockTimeout() : "";
      }}
      onValueCommit={(values) =>
        useRoomsStore
          .getState()
          .handleLightSlider(values[0], sliderType, lockLightType)
      }
      className="relative flex flex-col items-center select-none touch-none w-full h-full"
    >
      <div className="absolute flex flex-col justify-center w-[30px] md:w-[50px] inset-0 m-auto pointer-events-none z-20">
        {icon}
      </div>
      {/* replace grow with h-full on the track */}
      <RadixSlider.Track className="relative h-full w-full rounded-xl overflow-hidden z-10">
        <RadixSlider.Range
          className={`absolute bg-black/30 cursor-pointer transition-colors duration-200 ${orientation === "vertical" ? "w-full border-t-3" : "h-full border-r-3"} ${lockLightType ? "border-[#FFC101]" : ""} `}
        />
      </RadixSlider.Track>
      <RadixSlider.Thumb className="block" aria-label="Light brightness" />
    </RadixSlider.Root>
  );
}

export default Slider;
