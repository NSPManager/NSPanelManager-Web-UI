import { useEffect, useState } from "react";

function useScreenOrientation() {
  const [orientation, setOrientation] = useState<"landscape" | "portrait">(
    "landscape",
  );

  useEffect(() => {
    function checkOrientation() {
      setOrientation(
        window.innerWidth >= window.innerHeight ? "landscape" : "portrait",
      );
    }
    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

  return orientation;
}

export default useScreenOrientation;
