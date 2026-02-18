import { useState } from "react";

export default function BlobTextReveal() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    setMouse({
      x: (e.clientX / innerWidth) * 100,
      y: (e.clientY / innerHeight) * 100,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(135deg, #4EC9CC, #E6DB65)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <svg width="100%" height="100%" style={{ position: "absolute" }}>
        <defs>
          <mask id="blobMask">
            <rect width="100%" height="100%" fill="black" />
            <circle
              cx={`${mouse.x}%`}
              cy={`${mouse.y}%`}
              r="150"
              fill="white"
            />
          </mask>
        </defs>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="0.35em"
          fontSize="5rem"
          fontWeight="bold"
          fill="#fff"
          mask="url(#blobMask)"
        >
          HELLO
        </text>
      </svg>
    </div>
  );
}
