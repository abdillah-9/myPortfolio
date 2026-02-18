import React from "react";

export default function Home() {
  // ===== COLOR TOKENS (locked system) =====
  const colors = {
    background: "#EAFFFD",

    neutral: {
      heading: "rgba(20, 20, 30, 0.9)",
      text: "rgba(20, 20, 30, 0.7)",
      muted: "rgba(20, 20, 30, 0.45)",
    },

    primary: {
      base: "#24797B",
      hover: "#2FA2A3",
      active: "#174F50",
      soft: "#4EC9CC",
      subtle: "#A0E2E3",
    },

    secondary: {
      base: "#403A5F",
    },

    accent: {
      errorBg: "hsl(356, 40%, 92%)",
      errorText: "hsl(356, 70%, 45%)",
      successBg: "hsl(145, 35%, 90%)",
      successText: "hsl(145, 65%, 38%)",
      warnBg: "hsl(32, 45%, 90%)",
      warnText: "hsl(32, 80%, 50%)",
    },
  };

  return (
    <div style={{ background: colors.background, minHeight: "100vh" }}>
      {/* ===== NAVBAR ===== */}
      <nav
        style={{
          background: colors.primary.base,
          padding: "18px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ color: "white", margin: 0 }}>MyPortfolio</h3>

        <div style={{ display: "flex", gap: "32px" }}>
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section
        style={{
          padding: "96px 48px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            color: colors.secondary.base,
            fontSize: "56px",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Building clean & modern web experiences
        </h1>

        <p
          style={{
            color: colors.neutral.text,
            fontSize: "18px",
            maxWidth: "520px",
            marginBottom: "40px",
          }}
        >
          I’m a frontend developer focused on crafting elegant interfaces with
          thoughtful color systems and solid engineering.
        </p>

        <div style={{ display: "flex", gap: "16px" }}>
          <button
            style={{
              background: colors.primary.base,
              color: "white",
              padding: "14px 24px",
              borderRadius: "10px",
              border: "none",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            View Projects
          </button>

          <button
            style={{
              background: colors.primary.subtle,
              color: colors.primary.active,
              padding: "14px 24px",
              borderRadius: "10px",
              border: "none",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Contact Me
          </button>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section
        style={{
          padding: "48px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            color: colors.secondary.base,
            marginBottom: "24px",
          }}
        >
          Selected Projects
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {[1, 2, 3].map((p) => (
            <div
              key={p}
              style={{
                background: "white",
                padding: "24px",
                borderRadius: "14px",
              }}
            >
              <h4 style={{ color: colors.neutral.heading }}>
                Project {p}
              </h4>
              <p style={{ color: colors.neutral.muted }}>
                A short description of the project goes here. Clean, simple,
                focused.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TOAST EXAMPLE (ACCENT) ===== */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "48px auto",
          padding: "16px 24px",
          background: colors.accent.successBg,
          color: colors.accent.successText,
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <strong>✔</strong>
        <span>Portfolio loaded successfully.</span>
      </div>
    </div>
  );
}
