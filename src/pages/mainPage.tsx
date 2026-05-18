import { ChevronDown, SlidersVertical, Sun } from "lucide-react";
import { useConfigStore } from "../stores/useConfigStore";
import { useRoomsStore } from "../stores/useRoomsStore";
import { useUIStore } from "../stores/useUIStore";

function MainPage() {
  const mainPagemode = useUIStore((state) => state.mainPageMode);

  const currentRoomId = useConfigStore((state) => state.currentRoomId);
  const isLoaded = useRoomsStore((state) => state.isLoaded);
  const room =
    mainPagemode === "roomLights"
      ? useRoomsStore((state) =>
          currentRoomId ? state.rooms[currentRoomId] : null,
        )
      : useRoomsStore((state) => state.globalRoom);
  // const isLoaded = useGlobalRoomStore((state) => state.isLoaded);
  // const room = useGlobalRoomStore((state) => state.globalRoom);

  if (!isLoaded || !room) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="relative z-10 grid h-full w-full grid-cols-4 grid-rows-[auto_1fr_auto] gap-2 p-2">
      <div className="flex col-span-4 border-1 h-20 rounded-xl">
        <div className="flex flex-1 items-center justify-center h-full">
          <SlidersVertical />
        </div>
        <div className="flex flex-[7] items-center justify-center h-full"></div>
      </div>
      {/* Row 2 ceiling, table, brightness, colortemp */}
      <div
        // onClick={() =>
        //   sendLightCommand(
        //     2,
        //     rooms[currentRoom]?.ceilingLightsDimLevel > 0 ? "OFF" : "ON",
        //   )
        // }
        className="flex flex-col p-4 border-1 rounded-xl items-center justify-center"
      >
        <div className="flex justify-center">
          <svg
            viewBox="0 0 94.71 191.38"
            width="50%"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(-55.82, -91.01)">
              {/* Top Ceiling Mount */}
              <path
                id="mount"
                fill="#ffffff"
                d="m 101.98,125.17 h -2.25 v -2.74 c -14.16,-2.44 -17.39,-14.82 -17.39,-14.82 v -16.6 h 0.36 l 20.4,0 20.4,0 h 0.36 v 16.6 c 0,0 -3.23,12.37 -17.39,14.82 v 2.74 h -2.52"
              />

              {/* The Connecting Stem */}
              <path
                id="stem"
                fill="#ffffff"
                d="m 101.14,202.9 h 3.95 v -77.73 h -3.95 z"
              />

              {/* THE GLASS SHADE - This is the part we color! */}
              <path
                id="glass"
                fill={room.ceilingLightsDimLevel > 0 ? "#ffc101" : "#FFFFFF"}
                style={{ transition: "fill 0.3s ease" }}
                d="m 105.09,202.9 v 0 h 2.7 v 2.48 c 0,0 37.39,-3.92 36.86,44.66 v 0.53 h 2.79 c 0,0 2.97,0.31 2.97,3.28 v 23.64 l 0.12,4.89 H 103.18 55.82 v -4.89 -23.64 c 0,-2.97 2.97,-3.28 2.97,-3.28 h 2.79 v -0.53 c -0.53,-48.58 36.86,-44.66 36.86,-44.66 v -2.48 h 2.7 v 0"
              />
            </g>
          </svg>
        </div>
      </div>
      <div
        // onClick={() =>
        //   sendLightCommand(
        //     1,
        //     rooms[currentRoom]?.tableLightsDimLevel > 0 ? "OFF" : "ON",
        //   )
        // }
        className="flex flex-col p-4 border-1 rounded-xl items-center justify-center"
      >
        <div className="flex justify-center">
          <svg
            width="50%"
            version="1.1"
            viewBox="0 0 53.532 91.439"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(-30.27 -9.72)" stroke-width=".10389">
              <path
                id="glass"
                fill={room.tableLightsDimLevel > 0 ? "#ffc101" : "#FFFFFF"}
                d="m55.789 41.355-7.5062-0.0036c-8.1435-0.0039-15.509-0.13569-16.902-0.30248-0.48241-0.05774-0.94015-0.16802-1.0172-0.24507-0.11552-0.11552-0.12119-0.51225-0.03231-2.2619 0.23677-4.6611 1.0112-7.8153 2.9548-12.034 2.1633-4.6956 5.196-8.3406 9.1013-10.939 2.7105-1.8032 6.9826-3.5363 9.5822-3.8874 0.27042-0.03652 0.54394-0.12937 0.60782-0.20634 0.06388-0.07697 0.28676-0.1682 0.4953-0.20274 0.20854-0.03453 0.44928-0.09017 0.535-0.12363 0.16848-0.06577 0.38103-0.08553 1.2158-0.11298l0.54048-0.01778 0.06186-1.2987h3.2207l0.06186 1.2987 0.54048 0.01778c0.83474 0.02745 1.0473 0.04721 1.2158 0.11298 0.08571 0.03346 0.32646 0.08909 0.535 0.12363 0.20854 0.03453 0.43142 0.12576 0.4953 0.20274 0.06388 0.07697 0.3374 0.16982 0.60782 0.20634 1.1995 0.16198 3.4237 0.8207 4.9975 1.4801 3.5077 1.4696 6.2214 3.3031 8.6676 5.8565 2.1401 2.2338 3.6029 4.4168 5.0184 7.4894 1.9436 4.2188 2.7181 7.3729 2.9548 12.034 0.08888 1.7497 0.08321 2.1464-0.03231 2.2619-0.07705 0.07705-0.53479 0.18733-1.0172 0.24507-1.3936 0.16679-8.759 0.2986-16.902 0.30248l-7.5062 0.0036z"
              />
              <path
                fill="#ffffff"
                d="m54.335 101.14c-3.9565-0.21732-5.9825-0.58093-6.4631-1.16-0.09761-0.11762-0.12355-0.57148-0.09916-1.7354 0.02799-1.3358 8e-3 -1.5969-0.13082-1.7121-0.09011-0.0748-0.16384-0.29294-0.16384-0.48477 0-0.30436 0.05486-0.37678 0.43067-0.5685 0.6941-0.3541 2.3013-0.71174 4.0607-0.9036l1.6383-0.17866v-23.61c0-15.671-0.03494-23.61-0.10389-23.61-0.05714 0-0.10389-0.0935-0.10389-0.20778 0-0.19459 0.06926-0.20778 1.0909-0.20778 0.9004 0 1.0909-0.02721 1.0909-0.15584 0-0.08571 0.04675-0.15584 0.10389-0.15584 0.06644 0 0.10389-3.4631 0.10389-5.0907l2.4934-2e-6c0 1.6276 0.03746 5.0907 0.10389 5.0907 0.05714 0 0.10389 0.07013 0.10389 0.15584 0 0.12863 0.19047 0.15584 1.0909 0.15584 1.0216 0 1.0909 0.01319 1.0909 0.20778 0 0.11428-0.04675 0.20778-0.10389 0.20778-0.06896 0-0.10389 7.9392-0.10389 23.61v23.61l1.6383 0.17866c1.7594 0.19186 3.3666 0.54949 4.0607 0.9036 0.37581 0.19172 0.43067 0.26413 0.43067 0.5685 0 0.19183-0.07373 0.40998-0.16384 0.48476-0.13867 0.11509-0.15897 0.37643-0.13214 1.701 0.01743 0.86075-0.0055 1.6241-0.05099 1.6964-0.27864 0.4426-1.6323 0.80494-3.8031 1.018-1.4602 0.14331-6.7267 0.26812-8.1092 0.19219z"
              />
            </g>
            <circle fill="#ffffff" cx="34.838" cy="55.073" r="1.2873" />
            <rect
              fill="#ffffff"
              x="34.148"
              y="31.602"
              width="1.3905"
              height="22.682"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col p-4 border-1 rounded-xl items-center justify-center">
        <Sun size={"50"} />
      </div>
      <div className="flex flex-col p-4 border-1 rounded-xl items-center justify-center">
        <div
          style={{
            width: 45,
            height: 45,
            background: `conic-gradient(from 0, #3b82f6, #ffffff, #facc15, #3b82f6)`,
            // This mask creates a hole from the center (0%) to 60%
            WebkitMaskImage: "radial-gradient(transparent 45%, black 46%)",
            maskImage: "radial-gradient(transparent 45%, black 46%)",
          }}
          className="rounded-full"
        />
      </div>

      {/* Row 3 Room toggle bu col-span-2tton and Light Mode */}
      <div className="flex border-1 col-span-2 h-20 rounded-xl items-center justify-center">
        <button
          onClick={() => useConfigStore.getState().setCurrentRoom()}
          className="flex flex-1 items-center justify-center h-full"
        >
          <ChevronDown />
        </button>
        <div className="w-[2px] h-[60%] bg-[#ffffff80]"></div>
        <button className="text-xl flex flex-[3] justify-center">
          {room.name || "All"}
        </button>
      </div>
      <button
        onClick={() => useUIStore.getState().toggleMainPageMode()}
        className="relative flex col-span-2 border-1 h-20 rounded-xl items-center justify-center"
      >
        <div className="absolute left-0 top-0 bottom-0 w-[25%] flex items-center justify-center">
          <ChevronDown />
        </div>
        <span className="text-xl flex justify-center">
          {mainPagemode === "roomLights" ? "Room Lights" : "All Lights"}
        </span>
      </button>
    </div>
  );
}

export default MainPage;
