"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(249,247,244,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        padding: "0 max(24px, 5vw)",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.3rem",
          fontWeight: 600,
          color: "var(--text-primary)",
          textDecoration: "none",
          letterSpacing: "0.01em",
        }}
      >
        JD<span style={{ color: "var(--crimson)" }}>.</span>
      </a>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="hidden-mobile">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="animated-underline"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--text-secondary)",
              textDecoration: "none",
              letterSpacing: "0.03em",
              textTransform: "uppercase",
            }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          style={{
            background: "var(--crimson)",
            color: "white",
            padding: "8px 20px",
            borderRadius: "4px",
            textDecoration: "none",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            transition: "background 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "var(--crimson-light)")}
          onMouseOut={(e) => (e.currentTarget.style.background = "var(--crimson)")}
        >
          Hire Me
        </a>
      </div>

      {/* Mobile burger */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px",
        }}
        className="show-mobile"
        aria-label="Toggle menu"
      >
        <div style={{ width: 24, height: 2, background: "var(--text-primary)", marginBottom: 6, transition: "all 0.2s", transform: open ? "rotate(45deg) translateY(8px)" : "none" }} />
        <div style={{ width: 24, height: 2, background: "var(--text-primary)", marginBottom: 6, opacity: open ? 0 : 1, transition: "all 0.2s" }} />
        <div style={{ width: 24, height: 2, background: "var(--text-primary)", transition: "all 0.2s", transform: open ? "rotate(-45deg) translateY(-8px)" : "none" }} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 64,
            left: 0,
            right: 0,
            background: "var(--bg-card)",
            borderBottom: "1px solid var(--border)",
            padding: "24px max(24px, 5vw)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
