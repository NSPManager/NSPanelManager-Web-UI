import { useEffect, useRef, useState } from "react";
import { Lottie, type LottieHandle } from "lottie-react";

const iconModules = import.meta.glob<{ default: object }>(
  "/node_modules/@meteocons/lottie/**/*.json",
);

interface WeatherIconProps {
  slug: string;
  autoplay?: boolean;
  style?: "fill" | "line";
  size?: string | number;
}

function DynamicWeatherIcon({
  slug,
  autoplay,
  style = "fill",
  size = 64,
}: WeatherIconProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const lottieRef = useRef<LottieHandle>(null);

  useEffect(() => {
    const loader =
      iconModules[`/node_modules/@meteocons/lottie/${style}/${slug}.json`];
    loader?.().then((mod) => setAnimationData(mod.default));
  }, [slug, style]);

  useEffect(() => {
    if (!autoplay) return;

    function pauseOnTouch() {
      lottieRef.current?.pause();
    }
    document.addEventListener("touchstart", pauseOnTouch, {
      once: true,
      capture: true,
    });
    return () =>
      document.removeEventListener("touchstart", pauseOnTouch, {
        capture: true,
      });
  }, [autoplay]);

  if (!animationData) {
    return <div style={{ width: size, height: size }} />;
  }

  return (
    <Lottie
      lottieRef={lottieRef}
      src={animationData}
      loop
      autoplay={autoplay}
      style={{ width: size, height: size }}
    />
  );
}

export default DynamicWeatherIcon;
