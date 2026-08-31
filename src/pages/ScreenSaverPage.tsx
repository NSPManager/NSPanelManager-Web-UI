import { NSPanelConfig_NSPanelScreensaverMode } from "@/generated/src/proto/protobuf_nspanel";
import { useDateTime } from "@/hooks";
import { useConfigStore } from "@/stores";
import { useNavigate } from "react-router-dom";

function ScreenSaverPage() {
  const navigate = useNavigate();
  const { currentDate, currentTime } = useDateTime();
  const hasBackground = useConfigStore(
    (state) =>
      state.config?.screensaverMode ===
        NSPanelConfig_NSPanelScreensaverMode.DATETIME_WITH_BACKGROUND ||
      state.config?.screensaverMode ===
        NSPanelConfig_NSPanelScreensaverMode.WEATHER_WITH_BACKGROUND,
  );

  function handleWakeUp(e: React.MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    navigate("/webapp/");
  }

  return (
    <div
      onClick={handleWakeUp}
      onMouseMove={handleWakeUp}
      className={`relative z-10 h-full ${hasBackground ? "" : "bg-black"} flex flex-col justify-center items-center`}
    >
      <div className="text-8xl">{currentTime}</div>

      <div className="capitalize">{currentDate}</div>
    </div>
  );
}

export default ScreenSaverPage;
