"use client";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        background: "var(--text-primary)",
        padding: "40px max(24px, 6vw)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.2rem",
              fontWeight: 600,
              color: "white",
              letterSpacing: "0.01em",
            }}
          >
            JD<span style={{ color: "var(--crimson-light)" }}>.</span>
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.4)",
              marginTop: "4px",
            }}
          >
            Eboagoro Jahdiebube Delight — Fullstack Engineer
          </p>
        </div>

        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          {[
            { label: "GitHub", href: "https://github.com/Delight44-max" },
            { label: "LinkedIn", href: "https://linkedin.com/in/delight-eboagoro-8100063bb" },
            { label: "WhatsApp", href: "https://wa.me/2349113351761" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "var(--crimson-light)")}
              onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.06em",
          }}
        >
          © {year} Eboagoro Jahdiebube Delight
        </p>
      </div>
    </footer>
  );
}
