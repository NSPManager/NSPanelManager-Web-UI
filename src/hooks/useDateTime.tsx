import { useConfigStore } from "@/stores";
import { useEffect, useState } from "react";

function useDateTime() {
  const [time, setTime] = useState(new Date());
  const isUsTime = useConfigStore(
    (state) => state.config?.clockUsStyle || false,
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const currentTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: isUsTime,
  });

  const currentDate = time.toLocaleDateString([], {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  return { currentTime, currentDate };
}

export default useDateTime;
