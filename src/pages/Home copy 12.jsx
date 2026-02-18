export default function GrainBackground() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        background: "linear-gradient(135deg, #e8e8fc, #f7f9ff)",
        overflow: "hidden"
      }}
    >
      {/* Noise overlay */}
      <svg
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.95,          // 👈 make it strong so you SEE it
          mixBlendMode: "overlay", // 👈 blends with background
          pointerEvents: "none"
        }}
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3rem",
          fontWeight: "bold"
        }}
      >
        Grain / Noise Texture 🌫️
      </div>
    </div>
  );
}
