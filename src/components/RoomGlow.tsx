import { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useConfigStore, useRoomsStore, useUIStore } from "@/stores";

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const percentToUnit = (p: number) => clamp01(p / 100);

// Tint opacity: how dark the photo is when lights are off vs. fully on
const TINT_OFF = 0.8; // lights off: dark room
const TINT_ON = 0.3; // lights at 100%: photo shows through

const makeGlow = (rgb: string) =>
  `radial-gradient(farthest-corner at 50% 30%,
    rgba(${rgb}, .75) 0%,
    rgba(${rgb}, .40) 40%,
    rgba(${rgb}, .18) 75%,
    rgba(${rgb}, .10) 100%)`;

const COOL = makeGlow("255,170,90");
const WARM = makeGlow("190,215,255");

function RoomGlow() {
  const mainPageMode = useUIStore((state) => state.mainPageMode);
  const currentRoomId = useConfigStore((state) => state.currentRoomId);

  const roomDim = useRoomsStore(
    (state) => state.rooms[currentRoomId || 0]?.averageDimLevel,
  );

  const roomTemp = useRoomsStore(
    (state) => state.rooms[currentRoomId || 0]?.averageColorTemperature,
  );

  const globalDim = useRoomsStore((state) => state.globalRoom?.averageDimLevel);
  const globalTemp = useRoomsStore(
    (state) => state.globalRoom?.averageColorTemperature,
  );

  const dim = mainPageMode === "roomLights" ? roomDim || 0 : globalDim || 0;
  const tempPercent =
    mainPageMode === "roomLights" ? roomTemp || 50 : globalTemp || 50;

  const brightness = useMotionValue(percentToUnit(dim));
  const temp = useMotionValue(percentToUnit(tempPercent));

  useEffect(() => {
    const c = animate(brightness, percentToUnit(dim), { duration: 0.4 });
    return () => c.stop();
  }, [dim, brightness]);

  useEffect(() => {
    const c = animate(temp, percentToUnit(tempPercent), { duration: 0.4 });
    return () => c.stop();
  }, [tempPercent, temp]);

  // darkness of the photo follows brightness: dark when off, lighter when on
  const tintOpacity = useTransform(
    brightness,
    (b) => TINT_OFF - (TINT_OFF - TINT_ON) * Math.pow(b, 0.7),
  );

  const warmOpacity = useTransform<number, number>(
    [brightness, temp],
    ([b, t]) => Math.pow(b, 0.7) * (1 - t),
  );
  const coolOpacity = useTransform<number, number>(
    [brightness, temp],
    ([b, t]) => Math.pow(b, 0.7) * t,
  );

  return (
    <>
      {/* tint: darkens the photo, less so as the lights come up */}
      <motion.div
        className="absolute inset-0 pointer-events-none bg-black"
        style={{ opacity: tintOpacity }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: WARM, opacity: warmOpacity }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: COOL, opacity: coolOpacity }}
      />
    </>
  );
}

export default RoomGlow;
