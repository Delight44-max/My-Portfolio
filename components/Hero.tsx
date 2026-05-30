"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "80px max(24px, 6vw) 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: "20%",
          width: "1px",
          height: "100%",
          background: "linear-gradient(to bottom, transparent, var(--border) 20%, var(--border) 80%, transparent)",
          opacity: 0.6,
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left — Text */}
        <div>
          <p
            className="animate-slide-right"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "var(--crimson)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ display: "inline-block", width: 32, height: 1, background: "var(--crimson)" }} />
            Available for Work
          </p>

          <h1
            className="animate-fade-up delay-100"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              fontWeight: 600,
              lineHeight: 1.05,
              color: "var(--text-primary)",
              marginBottom: "12px",
              letterSpacing: "-0.02em",
            }}
          >
            Eboagoro<br />
            Jahdiebube<br />
            <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>Delight.</em>
          </h1>

          <h2
            className="animate-fade-up delay-200"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              fontWeight: 400,
              color: "var(--text-secondary)",
              marginBottom: "28px",
              letterSpacing: "0.01em",
            }}
          >
            Fullstack Engineer — Lagos, Nigeria
          </h2>

          <p
            className="animate-fade-up delay-300"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              maxWidth: "480px",
              marginBottom: "40px",
            }}
          >
            I build performant, user-centred products across the full stack — from pixel-perfect interfaces to resilient backends. Trained at{" "}
            <strong style={{ color: "var(--text-primary)" }}>Semicolon Africa</strong>, I bring both technical depth and product thinking to every project.
          </p>

          <div
            className="animate-fade-up delay-400"
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <a
              href="#projects"
              style={{
                background: "var(--crimson)",
                color: "white",
                padding: "14px 32px",
                borderRadius: "4px",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                transition: "all 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "var(--crimson-light)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "var(--crimson)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              View My Work
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="#contact"
              style={{
                background: "transparent",
                color: "var(--text-primary)",
                padding: "14px 32px",
                borderRadius: "4px",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                border: "1.5px solid var(--border)",
                transition: "all 0.2s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "var(--crimson)";
                e.currentTarget.style.color = "var(--crimson)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
            >
              Get in Touch
            </a>
          </div>

          {/* Social links */}
          <div
            className="animate-fade-up delay-500"
            style={{ display: "flex", gap: "20px", marginTop: "40px", alignItems: "center" }}
          >
            <a
              href="https://github.com/Delight44-max"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-muted)", transition: "color 0.2s", textDecoration: "none" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "var(--crimson)")}
              onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              aria-label="GitHub"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/delight-eboagoro-8100063bb"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-muted)", transition: "color 0.2s", textDecoration: "none" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "var(--crimson)")}
              onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://wa.me/2349113351761"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-muted)", transition: "color 0.2s", textDecoration: "none" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "var(--crimson)")}
              onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              aria-label="WhatsApp"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right — Photo */}
        <div
          className="animate-fade-in delay-300 hero-photo"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Decorative frame */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              right: "-16px",
              bottom: "-16px",
              border: "1.5px solid var(--crimson)",
              borderRadius: "8px",
              opacity: 0.3,
            }}
          />
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "420px",
              aspectRatio: "4/5",
              borderRadius: "8px",
              overflow: "hidden",
              background: "var(--border)",
            }}
          >
            <Image
              src="/images/profile.webp"
              alt="Eboagoro Jahdiebube Delight — Fullstack Engineer"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              style={{ objectFit: "cover", objectPosition: "top center" }}
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAUABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACUQAAIBBAEDBQAAAAAAAAAAAAECAwAEBhESITFBUWGBkbH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Amr9LktoJJYrVgqAsS2AAPnNVY7S6u5pbqCMFGYtGpJAK58q8yktHKRoquxIA+vbNd0CIpbNH4yf2OdvHf5igCjqdhcafb2017IZZrqXMjqcgHGcZ96VT6nbJqC2U00nqMpkJ2gHBOCc/tKUH/9k="
            />
            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "40%",
                background: "linear-gradient(to top, rgba(26,22,20,0.5), transparent)",
              }}
            />
          </div>

          {/* Floating badge */}
          <div
            style={{
              position: "absolute",
              bottom: "24px",
              right: "-8px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "12px 18px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>🇳🇬</span>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Based in</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)" }}>Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
