function ColorIcon() {
  return (
    <div
      className="w-full aspect-square rounded-full"
      style={{
        background: `conic-gradient(
          from 0deg,
          #ff0000,
          #ffff00,
          #00ff00,
          #00ffff,
          #0000ff,
          #ff00ff,
          #ff0000
        )`,
        WebkitMaskImage: "radial-gradient(transparent 45%, black 46%)",
        maskImage: "radial-gradient(transparent 45%, black 46%)",
      }}
    />
  );
}

export default ColorIcon;
