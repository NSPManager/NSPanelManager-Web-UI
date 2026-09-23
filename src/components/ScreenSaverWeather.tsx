import { useDateTime } from "@/hooks";
import { useUIStore } from "@/stores";
import { useWeatherStore } from "@/stores/useWeatherStore";

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

  return (
    <div
      className={`grid w-full h-full ${orientation === "landscape" ? "grid-cols-2 grid-rows-2" : "grid-cols-1 grid-rows-[1fr_1fr_2fr]"} p-1 md:p2 gap-1 md:gap-2`}
    >
      {/* Top left contatiner */}
      <div className="flex flex-col w-full h-full rounded-xl bg-black/20 border border-gray-500/20 shadow-md justify-between p-1">
        {/* First row TEMP and DATE */}
        <div className="flex justify-between">
          <div className="flex">
            <div className="flex font-nspm text-3xl items-center">i</div>
            <div className="flex items-center">
              {weather.currentTemperatureString}
            </div>
          </div>

          <div className="flex items-center capitalize">
            <div className="truncate">{currentDate}</div>
          </div>
        </div>
        {/* Second row TIME */}
        <div className="flex flex-1 justify-center items-center text-7xl md:text-[120px]">
          <div className="">{currentTime}</div>
        </div>
        {/* Third row SUNRISE SUNSET */}
        <div className="flex w-full">
          <div className="flex flex-1 items-center justify-center">
            <span className="font-nspm text-3xl">Y</span>
            <span className="">{weather.sunriseString}</span>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <span className="font-nspm text-3xl">X</span>
            <span className="">{weather.sunsetString}</span>
          </div>
        </div>
      </div>
      {/* Top right container */}
      <div className="flex flex-col w-full h-full rounded-xl bg-black/20 border border-gray-500/20 shadow-md p-1 items-center justify-between">
        {/* First row weather icon and current max min temp */}

        {orientation === "landscape" ? (
          <>
            <div className="flex items-center md:pt-10">
              <div className="flex font-nspm text-9xl md:text-[200px]">
                {weather.currentWeatherIcon}
              </div>
              <div className="flex flex-col items-center">
                <div className="flex text-6xl md:text-8xl">
                  {weather.currentTemperatureString}
                </div>
                <div className="flex text-lg md:text-2xl">
                  {weather.currentMaxminTemperature}
                </div>
              </div>
            </div>
            {/* Second row precipitation and wind */}
            <div className="flex w-full">
              <div className="flex flex-1 items-center justify-center">
                <div className="font-nspm text-3xl">W</div>
                <div className="">{weather.currentPrecipitationString}</div>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <div className="font-nspm text-3xl ">T</div>
                <div className="">{weather.currentWindString}</div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center gap-6">
            {/* First column weather icon and temp */}
            <div className="flex items-center">
              <div className="flex font-nspm text-9xl md:text-[200px]">
                {weather.currentWeatherIcon}
              </div>
              <div className="flex flex-col items-center">
                <div className="flex text-6xl md:text-8xl">
                  {weather.currentTemperatureString}
                </div>
                <div className="flex text-lg md:text-2xl">
                  {weather.currentMaxminTemperature}
                </div>
              </div>
            </div>
            {/* Second column precipitation and wind */}
            <div className="flex flex-col items-start">
              <div className="flex flex-1 items-center justify-center">
                <div className="font-nspm text-3xl">W</div>
                <div className="">{weather.currentPrecipitationString}</div>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <div className="font-nspm text-3xl ">T</div>
                <div className="">{weather.currentWindString}</div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Bottom container */}
      <div
        className={`grid ${orientation === "landscape" ? "col-span-2" : ""} rounded-xl bg-black/20 border border-gray-500/20 shadow-md`}
      >
        <div className="grid grid-cols-[min-content_repeat(5,minmax(0,1fr))] p-2">
          <div className="grid grid-rows-5 justify-center items-center">
            <div></div>
            <div></div>
            <div className="flex font-nspm text-2xl justify-center">j</div>
            <div className="flex font-nspm text-2xl justify-center">W</div>
            <div className="flex font-nspm text-2xl justify-center">T</div>
          </div>
          {weather.forecastItems.map((day) => (
            <div className="grid grid-rows-5 items-center justify-center text">
              <div className="flex justify-center">{day.displayString}</div>
              <div className="flex justify-center font-nspm text-2xl">
                {day.weatherIcon}
              </div>
              <div className="flex justify-center">
                {day.temperatureMaxminString}
              </div>
              <div className="flex justify-center">
                {day.precipitationString}
              </div>
              <div className="flex justify-center">{day.windString}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScreenSaverWeather;
