export default function Home() {
  const colors = {
    background: "#EAFFFD",

    primary: {
      active: "#174F50",   // Primary-800
      base: "#24797B",     // Primary-700
      hover: "#2FA2A3",    // Primary-500
      support: "#4EC9CC",  // Primary-300
      subtle: "#A0E2E3",   // Primary-100
    },

    neutral: {
      heading: "#0F172A",
      body: "rgba(15, 23, 42, 0.75)",
    },
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: colors.background,
        padding: "48px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "#FFFFFF",
          borderRadius: "16px",
          padding: "32px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ color: colors.neutral.heading, marginBottom: "8px" }}>
          Primary Color Scale
        </h1>
        <p style={{ color: colors.neutral.body, marginBottom: "32px" }}>
          Visual check of all primary variants working together.
        </p>

        {/* Primary Buttons */}
        <div style={{ display: "grid", gap: "16px" }}>
          <button
            style={{
              background: colors.primary.active,
              color: "#FFFFFF",
              padding: "14px",
              borderRadius: "10px",
              border: "none",
            }}
          >
            Primary Active (800)
          </button>

          <button
            style={{
              background: colors.primary.base,
              color: "#FFFFFF",
              padding: "14px",
              borderRadius: "10px",
              border: "none",
            }}
          >
            Primary Base (700)
          </button>

          <button
            style={{
              background: colors.primary.hover,
              color: "#FFFFFF",
              padding: "14px",
              borderRadius: "10px",
              border: "none",
            }}
          >
            Primary Hover (600)
          </button>

          <button
            style={{
              background: colors.primary.support,
              color: colors.primary.active,
              padding: "14px",
              borderRadius: "10px",
              border: "none",
            }}
          >
            Primary Support (300)
          </button>

          <button
            style={{
              background: colors.primary.subtle,
              color: colors.primary.active,
              padding: "14px",
              borderRadius: "10px",
              border: "none",
            }}
          >
            Primary Subtle (100)
          </button>
        </div>
      </div>
    </div>
  );
}
