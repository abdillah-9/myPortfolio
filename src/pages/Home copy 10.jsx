export default function GooeyBlobs() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#EAFFFD",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <svg width="600" height="400">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 20 -10"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>

        <g filter="url(#gooey)">
          <circle cx="250" cy="200" r="60" fill="#4EC9CC">
            <animate
              attributeName="cx"
              from="200"
              to="300"
              dur="4s"
              repeatCount="indefinite"
              direction="alternate"
            />
          </circle>

          <circle cx="350" cy="200" r="60" fill="#24797B">
            <animate
              attributeName="cx"
              from="400"
              to="300"
              dur="4s"
              repeatCount="indefinite"
              direction="alternate"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
}
