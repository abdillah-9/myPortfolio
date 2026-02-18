export default function AnimatedGradient() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background:
          "linear-gradient(270deg, #4EC9CC, #24797B, #E6DB65, #e8e8fc)",
        backgroundSize: "600% 600%",
        animation: "gradientShift 12s ease infinite"
      }}
    >
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <div
        style={{
          color: "#0a2a2a",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3rem",
          fontWeight: "bold"
        }}
      >
        Animated Gradient 🌈
      </div>
    </div>
  );
}
