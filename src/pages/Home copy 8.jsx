export default function HandDrawnSnakes() {
  return (
    <svg
      viewBox="0 0 800 600"
      style={{ width: "100%", height: "100vh", background: "#EAFFFD" }}
    >
      {/* Snake line 1 */}
      <path
        d="M50,300 C150,200 300,400 450,300 C600,200 700,350 800,300"
        fill="none"
        stroke="#24797B"
        strokeWidth="12"
        strokeLinecap="round"
        opacity="0.35"
        strokeDasharray="1200"
        strokeDashoffset="1200"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="1200"
          to="0"
          dur="8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;0.35;0.35;0"
          dur="8s"
          repeatCount="indefinite"
        />
      </path>

      {/* Snake line 2 */}
      <path
        d="M0,180 C120,120 280,260 420,200 C560,140 680,240 800,220"
        fill="none"
        stroke="#4EC9CC"
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.3"
        strokeDasharray="1000"
        strokeDashoffset="1000"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="1000"
          to="0"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;0.3;0.3;0"
          dur="10s"
          repeatCount="indefinite"
        />
      </path>

      {/* Snake line 3 */}
      <path
        d="M0,420 C180,360 320,520 500,440 C620,380 720,460 800,430"
        fill="none"
        stroke="#E6DB65"
        strokeWidth="9"
        strokeLinecap="round"
        opacity="0.25"
        strokeDasharray="1100"
        strokeDashoffset="1100"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="1100"
          to="0"
          dur="12s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;0.25;0.25;0"
          dur="12s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}
