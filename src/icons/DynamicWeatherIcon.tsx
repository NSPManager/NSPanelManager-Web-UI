import { useEffect, useState } from "react";
import { Lottie } from "lottie-react";

const iconModules = import.meta.glob<{ default: object }>(
  "/node_modules/@meteocons/lottie/**/*.json",
);

interface WeatherIconProps {
  slug: string;
  style?: "fill" | "line";
  size?: string | number;
}

function DynamicWeatherIcon({
  slug,
  style = "fill",
  size = 64,
}: WeatherIconProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);
  useEffect(() => {
    const loader =
      iconModules[`/node_modules/@meteocons/lottie/${style}/${slug}.json`];
    loader?.().then((mod) => setAnimationData(mod.default));
  }, [slug, style]);

  if (!animationData) {
    return <div style={{ width: size, height: size }} />;
  }

  return (
    <Lottie
      src={animationData}
      loop
      autoplay
      style={{ width: size, height: size }}
    />
  );
}

export default DynamicWeatherIcon;
