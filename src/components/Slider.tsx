import * as RadixSlider from "@radix-ui/react-slider";
import { useEffect, useState, type JSX } from "react";
import { useRoomsStore } from "../stores/useRoomsStore";
import { SliderType } from "../types";

interface SliderProps {
  value: number;
  sliderType: SliderType;
  icon: JSX.Element;
}

function Slider({ value, sliderType, icon }: SliderProps) {
  const [sliderValue, setSliderValue] = useState(value);

  useEffect(() => {
    setSliderValue(value);
  }, [value]);

  return (
    <RadixSlider.Root
      orientation="vertical"
      min={0}
      max={100}
      step={1}
      value={[sliderValue]}
      onValueChange={(values) => {
        setSliderValue(values[0]);
      }}
      onValueCommit={(values) =>
        useRoomsStore.getState().handleLightSlider(values[0], sliderType)
      }
      className="relative flex flex-col items-center select-none touch-none w-full h-full"
    >
      <div className="absolute flex flex-col justify-center w-1/2 max-w-[50px] md:w-1/3 inset-0 m-auto pointer-events-none z-20">
        {icon}
      </div>
      <RadixSlider.Track className="relative grow w-full rounded-xl overflow-hidden z-10">
        <RadixSlider.Range className="absolute w-full bg-black/30 border-t-3" />
      </RadixSlider.Track>
      <RadixSlider.Thumb className="block" aria-label="Light brightness" />
    </RadixSlider.Root>
  );
}

export default Slider;
