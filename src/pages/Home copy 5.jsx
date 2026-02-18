export default function Home(){
   return(
    <div style={{
      width:"100vw", 
      height:"100vh", 
      backgroundColor:'rgba(232, 232, 252, 1)',
      position:'relative'
      }}>

      {/* SVG BACKGROUND */}
      <svg viewBox="0 0 200 100" width="200">
  <path d="M10 80 L60 20 L120 80 L180 20" stroke="black" strokeWidth="3" fill="none" />
</svg>
<svg viewBox="0 0 200 100" width="200">
  <path d="M50 20 L150 20 L150 80 L50 80 Z" fill="#4EC9CC" />
</svg>
<svg viewBox="0 0 200 100" width="200">
  <path d="M10 80 Q100 10 190 80" stroke="#24797B" strokeWidth="4" fill="none" />
</svg>
<svg viewBox="0 0 200 100" width="200">
  <path d="M0 50 C50 0, 150 100, 200 50" stroke="#E6DB65" strokeWidth="4" fill="none" />
</svg>
<svg viewBox="0 0 200 100" width="200">
  <path d="M50 50 A40 40 0 1 1 150 50" stroke="black" strokeWidth="4" fill="none" />
</svg>
<svg viewBox="0 0 200 200" width="200">
  <path
    d="M50 100 
       C50 20, 150 20, 150 100 
       C150 180, 50 180, 50 100 Z"
    fill="#4EC9CC"
  />
</svg>
<svg viewBox="0 0 300 100" width="300">
  <path
    d="M10 60 C40 20, 80 20, 110 60 S180 100, 210 60 S260 20, 290 60"
    stroke="#24797B"
    strokeWidth="4"
    fill="none"
  />
</svg>
<svg
  viewBox="0 0 1440 320"
  preserveAspectRatio="none"
  style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "50%",
    zIndex: 0
  }}
>
  {/* 🌊 Wave */}
  <path
    d="M0,224L80,213.3C160,203,320,181,480,165.3C640,149,800,139,960,154.7C1120,171,1280,213,1360,234.7L1440,256L1440,320L0,320Z"
    fill="#d72713ff"
  />

  {/* 🫧 Blob */}
  <path
    d="M300,120
       C260,60, 360,40, 420,80
       C480,120, 460,200, 380,220
       C300,240, 240,180, 260,140
       C270,120, 290,130, 300,120 Z"
    fill="#24797B"
    opacity="0.6"
  />
</svg>
<svg width="200" height="200" viewBox="0 0 200 200">
  {/* Background circle */}
  <circle cx="100" cy="100" r="90" fill="#24797B" />

  {/* Letter A shape */}
  <path
    d="M60,150 L100,40 L140,150 L120,150 L110,120 L90,120 L80,150 Z"
    fill="#E6DB65"
  />
</svg>
<svg width="200" height="200" viewBox="0 0 200 200">
  {/* Blob */}
  <path
    d="M100,20
       C140,20 180,60 170,110
       C160,160 120,180 80,170
       C40,160 20,120 30,80
       C40,40 60,20 100,20 Z"
    fill="#4EC9CC"
  />

  {/* Slash line */}
  <path
    d="M40,160 L160,40"
    stroke="#174F50"
    strokeWidth="10"
    strokeLinecap="round"
  />
</svg>
<svg
  viewBox="0 0 300 300"
  style={{
    position: "absolute",
    top: "20%",
    right: "10%",
    width: "300px",
    height: "300px",
    zIndex: 0,
    opacity: 0.6
  }}
>
  <path
    fill="#4EC9CC"
    d="
      M150,40
      C200,40 260,80 250,140
      C240,200 190,250 140,240
      C90,230 40,190 50,130
      C60,70 100,40 150,40 Z
    "
  >
    <animate
      attributeName="d"
      dur="8s"
      repeatCount="indefinite"
      values="
        M150,40
        C200,40 260,80 250,140
        C240,200 190,250 140,240
        C90,230 40,190 50,130
        C60,70 100,40 150,40 Z;

        M150,30
        C220,50 260,100 230,160
        C200,220 150,260 100,230
        C50,200 40,140 70,100
        C100,60 120,40 150,30 Z;

        M150,40
        C200,40 260,80 250,140
        C240,200 190,250 140,240
        C90,230 40,190 50,130
        C60,70 100,40 150,40 Z
      "
    />
  </path>
</svg>

      {/* Blob 1 */}
      <svg
        viewBox="0 0 300 300"
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "320px",
          height: "320px",
          opacity: 0.5
        }}
      >
        <path fill="#4EC9CC" d="M150,40 C200,40 260,80 250,140 C240,200 190,250 140,240 C90,230 40,190 50,130 C60,70 100,40 150,40 Z">
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M150,40 C200,40 260,80 250,140 C240,200 190,250 140,240 C90,230 40,190 50,130 C60,70 100,40 150,40 Z;
              M150,30 C220,50 260,100 230,160 C200,220 150,260 100,230 C50,200 40,140 70,100 C100,60 120,40 150,30 Z;
              M150,40 C200,40 260,80 250,140 C240,200 190,250 140,240 C90,230 40,190 50,130 C60,70 100,40 150,40 Z
            "
          />
        </path>
      </svg>

      {/* Blob 2 */}
      <svg
        viewBox="0 0 300 300"
        style={{
          position: "absolute",
          bottom: "15%",
          right: "10%",
          width: "400px",
          height: "400px",
          opacity: 0.35
        }}
      >
        <path fill="#24797B" d="M150,50 C210,40 260,90 240,150 C220,210 170,250 120,240 C70,230 40,180 50,120 C60,70 100,60 150,50 Z">
          <animate
            attributeName="d"
            dur="14s"
            repeatCount="indefinite"
            values="
              M150,50 C210,40 260,90 240,150 C220,210 170,250 120,240 C70,230 40,180 50,120 C60,70 100,60 150,50 Z;
              M150,30 C230,60 260,120 220,180 C180,240 120,260 80,230 C40,200 40,130 80,90 C110,60 120,40 150,30 Z;
              M150,50 C210,40 260,90 240,150 C220,210 170,250 120,240 C70,230 40,180 50,120 C60,70 100,60 150,50 Z
            "
          />
        </path>
      </svg>

      {/* Blob 3 */}
      <svg
        viewBox="0 0 300 300"
        style={{
          position: "absolute",
          top: "50%",
          left: "40%",
          width: "250px",
          height: "250px",
          opacity: 0.25
        }}
      >
        <path fill="#E6DB65" d="M150,60 C200,60 230,100 220,150 C210,200 170,230 120,220 C70,210 60,170 70,120 C80,80 110,60 150,60 Z">
          <animate
            attributeName="d"
            dur="9s"
            repeatCount="indefinite"
            values="
              M150,60 C200,60 230,100 220,150 C210,200 170,230 120,220 C70,210 60,170 70,120 C80,80 110,60 150,60 Z;
              M150,40 C220,80 240,120 210,180 C180,240 120,240 90,210 C60,180 60,120 90,90 C110,70 120,50 150,40 Z;
              M150,60 C200,60 230,100 220,150 C210,200 170,230 120,220 C70,210 60,170 70,120 C80,80 110,60 150,60 Z
            "
          />
        </path>
      </svg>
        <svg
          viewBox="0 0 500 300"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "300px",
            height: "200px",
            zIndex: 0,
            opacity: 0.3
          }}
        >
          {/* Circle */}
          <circle cx="80" cy="80" r="50" fill="#E6DB65" />

          {/* Rectangle */}
          <rect x="150" y="40" width="120" height="80" rx="20" fill="#24797B" />

          {/* Triangle */}
          <polygon points="250,200 300,120 350,200" fill="#4EC9CC" />
        </svg>

      {/* Background SVG 1 */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "40%",
          zIndex: 0
        }}
      >
        <path
          d="M0,224L80,213.3C160,203,320,181,480,165.3C640,149,800,139,960,154.7C1120,171,1280,213,1360,234.7L1440,256L1440,320L0,320Z"
          fill="#4EC9CC"
        />
      </svg>

      {/* Background SVG 2 (another layer) */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "35%",
          zIndex: 0,
          opacity: 0.4
        }}
      >
        <path
          d="M0,96L80,128C160,160,320,224,480,229.3C640,235,800,181,960,149.3C1120,117,1280,107,1360,101.3L1440,96L1440,0L0,0Z"
          fill="#24797B"
        />
      </svg>

      <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', gap:'20px', height:'100vh', zIndex:1, position:'absolute'}}>
        <h1>Heading text</h1>
        <p>Description text</p>
      </div>
    </div>
   )
}