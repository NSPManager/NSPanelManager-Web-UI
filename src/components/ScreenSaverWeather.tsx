import { useDateTime } from "@/hooks";
import { useUIStore } from "@/stores";
import { useWeatherStore } from "@/stores/useWeatherStore";
import WeatherLandscape from "./WeatherLandscape";
import WeatherPortrait from "./WeatherPortrait";

function ScreenSaverWeather() {
  const { currentDate, currentTime } = useDateTime();
  // const showScreensaverOutsideTemperature = useConfigStore(
  //   (state) => state.config?.showScreensaverInsideTemperature,
  // );

  const weather = useWeatherStore((state) => state.weather);

  const orientation = useUIStore((state) => state.orientation);

  if (!weather) {
    return (
      <div className="flex flex-col w-full h-full justify-center items-center">
        <div className="font-nspm text-7xl">U</div>
        <div>Could net get weather...</div>
      </div>
    );
  }

  if (orientation === "landscape") {
    return (
      <WeatherLandscape
        currentDate={currentDate}
        currentTime={currentTime}
        weather={weather}
      />
    );
  }
  return (
    <WeatherPortrait
      currentDate={currentDate}
      currentTime={currentTime}
      weather={weather}
    />
  );
}

export default ScreenSaverWeather;
