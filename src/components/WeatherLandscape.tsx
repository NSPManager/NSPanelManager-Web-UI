import type { NSPanelWeatherUpdate } from "@/generated/src/proto/protobuf_nspanel";

interface WeatherProps {
  weather: NSPanelWeatherUpdate;
  currentDate: string;
  currentTime: string;
}

function WeatherLandscape({ weather, currentDate, currentTime }: WeatherProps) {
  return (
    <div
      className={`grid w-full h-full grid-cols-2 grid-rows-2 p-1 md:p2 gap-2`}
    >
      {/* Top left contatiner */}
      <div className="flex flex-col rounded-xl bg-black/20 border border-gray-500/20 shadow-md justify-between p-2">
        <div className="flex justify-between">
          <div className="flex">
            <div className="flex font-nspm text-3xl items-center">i</div>
            <div className="flex justify-center items-center">
              {weather.currentTemperatureString}
            </div>
          </div>

          <div className="flex justify-end items-center capitalize">
            {currentDate}
          </div>
        </div>
        <div className="grid col-span-2 justify-center items-center text-7xl md:text-[120px]">
          {currentTime}
        </div>
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="font-nspm text-3xl">Y</div>
            <div className="">{weather.sunriseString}</div>
          </div>
          <div className="flex items-center justify-center">
            <div className="font-nspm text-3xl">X</div>
            <div className="">{weather.sunsetString}</div>
          </div>
        </div>
      </div>
      {/* Top right container */}
      <div className="grid grid-cols-2 grid-rows-2 rounded-xl bg-black/20 border border-gray-500/20 shadow-md p-2 items-center">
        <div className="flex font-nspm text-8xl md:text-[150px] justify-center">
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
        <div className="flex h-full items-end justify-start">
          <div className="font-nspm text-3xl">W</div>
          <div className="">{weather.currentPrecipitationString}</div>
        </div>
        <div className="flex h-full items-end justify-start">
          <div className="font-nspm text-3xl ">T</div>
          <div className="">{weather.currentWindString}</div>
        </div>
      </div>
      {/* Bottom container */}
      <div
        className={`grid col-span-2 rounded-xl bg-black/20 border border-gray-500/20 shadow-md`}
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

export default WeatherLandscape;
