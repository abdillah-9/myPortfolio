export default function CalmSnakes() {
  return (
    <svg
      viewBox="0 0 800 600"
      style={{ width: "100%", height: "100vh", background: "#EAFFFD" }}
    >
      {/* Snake 1 */}
      <path
        fill="none"
        stroke="#24797B"
        strokeWidth="12"
        strokeLinecap="round"
        opacity="0.35"
        d="M100,200 C250,100 450,300 600,200 C700,150 750,250 780,300"
      >
        <animate
          attributeName="d"
          dur="20s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.5;1"
          keySplines="0.4 0 0.2 1;0.4 0 0.2 1"
          values="
            M100,200 C250,100 450,300 600,200 C700,150 750,250 780,300;
            M100,220 C260,120 440,280 600,220 C700,180 740,260 780,320;
            M100,200 C250,100 450,300 600,200 C700,150 750,250 780,300
          "
        />
      </path>

      {/* Snake 2 */}
      <path
        fill="none"
        stroke="#4EC9CC"
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.3"
        d="M50,350 C200,300 400,450 600,380 C680,350 740,420 800,400"
      >
        <animate
          attributeName="d"
          dur="26s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.5;1"
          keySplines="0.4 0 0.2 1;0.4 0 0.2 1"
          values="
            M50,350 C200,300 400,450 600,380 C680,350 740,420 800,400;
            M50,330 C210,320 390,430 600,360 C690,340 750,400 800,380;
            M50,350 C200,300 400,450 600,380 C680,350 740,420 800,400
          "
        />
      </path>

      {/* Snake 3 */}
      <path
        fill="none"
        stroke="#E6DB65"
        strokeWidth="9"
        strokeLinecap="round"
        opacity="0.25"
        d="M0,150 C180,120 320,200 480,170 C620,140 700,180 800,160"
      >
        <animate
          attributeName="d"
          dur="30s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.5;1"
          keySplines="0.4 0 0.2 1;0.4 0 0.2 1"
          values="
            M0,150 C180,120 320,200 480,170 C620,140 700,180 800,160;
            M0,165 C190,140 310,190 480,185 C610,160 710,200 800,180;
            M0,150 C180,120 320,200 480,170 C620,140 700,180 800,160
          "
        />
      </path>
    </svg>
  );
}
