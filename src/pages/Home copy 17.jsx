export default function UltimateHero() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(270deg, #4EC9CC, #24797B, #E6DB65, #e8e8fc)",
        backgroundSize: "600% 600%",
        animation: "gradientShift 15s ease infinite",
      }}
    >
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes float1 { 0%{transform:translateY(0);}50%{transform:translateY(-20px);}100%{transform:translateY(0);} }
          @keyframes float2 { 0%{transform:translateY(0);}50%{transform:translateY(-40px);}100%{transform:translateY(0);} }
          @keyframes morph {
            0% { d: path("M150,40 C200,40 260,80 250,140 C240,200 190,250 140,240 C90,230 40,190 50,130 C60,70 100,40 150,40 Z"); }
            50% { d: path("M150,30 C220,60 270,120 240,170 C210,220 160,260 120,230 C80,200 30,160 60,110 C90,60 120,40 150,30 Z"); }
            100% { d: path("M150,40 C200,40 260,80 250,140 C240,200 190,250 140,240 C90,230 40,190 50,130 C60,70 100,40 150,40 Z"); }
          }
        `}
      </style>

      {/* Grain / noise overlay */}
      <svg
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          opacity: 0.08,
          pointerEvents: "none",
          mixBlendMode: "overlay",
        }}
      >
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Particle layers */}
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, zIndex: 1 }}
      >
        {[...Array(30)].map((_, i) => (
          <circle
            key={`p1-${i}`}
            cx={Math.random() * 100 + "%"}
            cy={Math.random() * 100 + "%"}
            r={Math.random() * 3 + 1}
            fill="rgba(78,201,204,0.2)"
            style={{
              animation: `float1 ${5 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <circle
            key={`p2-${i}`}
            cx={Math.random() * 100 + "%"}
            cy={Math.random() * 100 + "%"}
            r={Math.random() * 4 + 2}
            fill="rgba(36,121,123,0.15)"
            style={{
              animation: `float2 ${8 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </svg>

      {/* Gooey / morphing blobs */}
      <svg
        viewBox="0 0 300 300"
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          top: "30%",
          left: "20%",
          zIndex: 3,
          filter: "url(#goo)",
        }}
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
        <path
          fill="#4EC9CC"
          d="M150,40 C200,40 260,80 250,140 C240,200 190,250 140,240 C90,230 40,190 50,130 C60,70 100,40 150,40 Z"
          style={{ animation: "morph 6s infinite" }}
        />
        <path
          fill="#24797B"
          d="M150,50 C210,40 260,90 240,150 C220,210 170,250 120,240 C70,230 40,180 50,120 C60,70 100,60 150,50 Z"
          style={{ animation: "morph 8s infinite" }}
        />
      </svg>

      {/* Content with mask reveal */}
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, zIndex: 4 }}
      >
        <defs>
          <mask id="circleMask">
            <rect width="100%" height="100%" fill="black" />
            <circle
              cx="50%"
              cy="50%"
              r="100"
              fill="white"
            >
              <animate
                attributeName="r"
                values="50;200;50"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>
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
          mask="url(#circleMask)"
        >
          WELCOME
        </text>
      </svg>
    </div>
  );
}
