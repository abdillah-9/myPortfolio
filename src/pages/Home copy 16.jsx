import { useEffect, useRef } from "react";

export default function ParticleLayers() {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create multiple particle layers
    const layers = [
      { count: 50, speed: 0.2, size: 2, color: "rgba(78,201,204,0.2)" },
      { count: 30, speed: 0.5, size: 3, color: "rgba(36,121,123,0.15)" },
      { count: 20, speed: 1, size: 4, color: "rgba(230,219,101,0.1)" },
    ];

    // Initialize particles
    layers.forEach((layer, layerIndex) => {
      for (let i = 0; i < layer.count; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: layer.size,
          speed: layer.speed,
          color: layer.color,
          layerIndex,
        });
      }
    });

    // Animate particles
    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p) => {
        // Move particle downward
        p.y += p.speed;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
