import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FADE = 0.5; // seconds

export function CrossfadeImage({ src }: { src?: string }) {
  const [shown, setShown] = useState<string[]>(src ? [src] : []);

  useEffect(() => {
    // a briefly missing url must not clear the picture
    if (!src) return;

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const img = new Image();
    img.src = src;
    img
      .decode()
      .catch(() => {}) // show it anyway if decode isn't supported
      .then(() => {
        if (cancelled) return;
        // the new image is ready: add it on top of the current one
        setShown((prev) =>
          prev[prev.length - 1] === src ? prev : [...prev.slice(-1), src],
        );
        // the old layer is only dropped after the fade, counted from now
        timer = setTimeout(
          () => setShown((prev) => prev.slice(-1)),
          FADE * 1000 + 100,
        );
      });

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [src]);

  return (
    <>
      {shown.map((url, i) => (
        <motion.div
          key={url}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${url})` }}
          initial={i === 0 ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: FADE, ease: "easeInOut" }}
        />
      ))}
    </>
  );
}
