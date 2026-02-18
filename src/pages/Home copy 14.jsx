import { useEffect, useState } from "react";

export default function CursorParticles() {
  const [particles, setParticles] = useState(
    Array.from({ length: 30 }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: 0,
      vy: 0,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => {
          // attraction to cursor
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const force = Math.min(5, 300 / dist);

          return {
            ...p,
            vx: p.vx * 0.9 + (dx / dist) * force,
            vy: p.vy * 0.9 + (dy / dist) * force,
            x: p.x + (p.vx || 0),
            y: p.y + (p.vy || 0),
          };
        })
      );
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const [mouse, setMouse] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  const handleMouseMove = (e) => setMouse({ x: e.clientX, y: e.clientY });

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ width: "100vw", height: "100vh", background: "#EAFFFD", overflow: "hidden" }}
    >
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: p.x,
            top: p.y,
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "#4EC9CC",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}
