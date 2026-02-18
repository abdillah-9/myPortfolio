import { useEffect, useState } from "react";

export default function ScrollMotion() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ height: "300vh", background: "#f7f9ff" }}>
      {/* Parallax blobs */}
      <div
        style={{
          position: "fixed",
          top: 100 + scroll * 0.3,
          left: 100,
          width: 150,
          height: 150,
          borderRadius: "50%",
          background: "#4EC9CC",
          opacity: 0.5,
        }}
      />
      <div
        style={{
          position: "fixed",
          top: 300 + scroll * 0.6,
          left: 400,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "#E6DB65",
          opacity: 0.3,
        }}
      />

      {/* Gradient header */}
      <h1
        style={{
          position: "fixed",
          top: 50 + scroll * 0.2,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "4rem",
          color: "#24797B",
        }}
      >
        Scroll Reactive Background
      </h1>
    </div>
  );
}
