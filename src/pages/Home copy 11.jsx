export default function DistortedBlob() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#f7f9ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <svg width="400" height="400" viewBox="0 0 400 400">
        <defs>
          <filter id="distort">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.01"
              numOctaves="2"
              seed="2"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur="8s"
                values="0.01;0.02;0.01"
                repeatCount="indefinite"
              />
            </feTurbulence>

            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="30"
            />
          </filter>
        </defs>

        <circle
          cx="200"
          cy="200"
          r="100"
          fill="#4EC9CC"
          filter="url(#distort)"
        />
      </svg>
    </div>
  );
}
