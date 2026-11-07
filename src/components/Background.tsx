// import bg from "@/assets/images/jeremy-bishop-G9i_plbfDgk-unsplash.jpg"; // or url(/webapp/background.jpg) if it's in public/
import RoomGlow from "./RoomGlow"; // the single-glow component from before
import useBackgroundImage from "@/hooks/useBackgroundImage";
import { CrossfadeImage } from "./CrossFadeImage";

// const BG_BASE_URL = "@/assets/images/backgrounds";

function Background() {
  const imageUrl = useBackgroundImage();

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0d1612]">
      {/* 1. photo: fills the screen, crops instead of stretching */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
      radial-gradient(90% 90% at 50% 45%, transparent 60%, rgba(0,0,0,.35) 100%),
      url(${imageUrl || bg})`,
          backgroundSize: "100% 100%, cover",
          backgroundPosition: "center, center",
        }}
      /> */}
      <CrossfadeImage src={imageUrl} />

      {/* 3. room glow: reacts to brightness and color temperature */}
      <RoomGlow />

      {/* 4. vignette: darkens the edges so the middle feels lit */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(90% 90% at 50% 45%, transparent 60%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      {/* 5. fine noise: hides banding in the gradients */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
        }}
      />
    </div>
  );
}

export default Background;
