import { useState } from "react";

export default function ParallaxBlobs() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
    const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1
    setMouse({ x, y });
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #e8e8fc, #f7f9ff)"
      }}
    >
      {/* Blob 1 (slow, big) */}
      <svg
        viewBox="0 0 300 300"
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "320px",
          height: "320px",
          opacity: 0.5,
          transform: `translate(${mouse.x * 20}px, ${mouse.y * 20}px)`,
          transition: "transform 0.1s linear"
        }}
      >
        <path
          fill="#4EC9CC"
          d="M150,40 C200,40 260,80 250,140 C240,200 190,250 140,240 C90,230 40,190 50,130 C60,70 100,40 150,40 Z"
        />
      </svg>

      {/* Blob 2 (medium speed) */}
      <svg
        viewBox="0 0 300 300"
        style={{
          position: "absolute",
          bottom: "15%",
          right: "10%",
          width: "400px",
          height: "400px",
          opacity: 0.35,
          transform: `translate(${mouse.x * 35}px, ${mouse.y * 35}px)`,
          transition: "transform 0.1s linear"
        }}
      >
        <path
          fill="#24797B"
          d="M150,50 C210,40 260,90 240,150 C220,210 170,250 120,240 C70,230 40,180 50,120 C60,70 100,60 150,50 Z"
        />
      </svg>

      {/* Blob 3 (fast, small) */}
      <svg
        viewBox="0 0 300 300"
        style={{
          position: "absolute",
          top: "50%",
          left: "40%",
          width: "250px",
          height: "250px",
          opacity: 0.25,
          transform: `translate(${mouse.x * 50}px, ${mouse.y * 50}px)`,
          transition: "transform 0.1s linear"
        }}
      >
        <path
          fill="#E6DB65"
          d="M150,60 C200,60 230,100 220,150 C210,200 170,230 120,220 C70,210 60,170 70,120 C80,80 110,60 150,60 Z"
        />
      </svg>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <h1 style={{ fontSize: "3rem" }}>Mouse Parallax Blobs</h1>
        <p>Move your mouse — the background reacts 🫧</p>
      </div>
    </div>
  );
}
