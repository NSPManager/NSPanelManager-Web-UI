import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "@/animations/nspanelAnimation.json";
import { useRef } from "react";
import type { AnimationItem } from "lottie-web";

export default function LoadingAnimation() {
  const lottieInstanceRef = useRef<AnimationItem>(null);

  return (
    <Player
      lottieRef={(instance) => {
        lottieInstanceRef.current = instance;
      }}
      onEvent={(event) => {
        // console.log(event);
        if (event === "load" && lottieInstanceRef.current) {
          lottieInstanceRef.current.playSegments([0, 47], true);
        }
        if (event === "complete" && lottieInstanceRef.current) {
          {
            lottieInstanceRef.current.playSegments([48, 59], true);
          }
        }
      }}
      autoplay={false}
      loop={false}
      src={animationData}
      keepLastFrame={true}
      className="w-full h-auto]"
    ></Player>
  );
}
