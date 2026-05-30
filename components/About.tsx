"use client";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="reveal"
      style={{
        padding: "100px max(24px, 6vw)",
        background: "var(--bg-card)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section label */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            color: "var(--crimson)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ display: "inline-block", width: 32, height: 1, background: "var(--crimson)" }} />
          About Me
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Photo stack */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "3/4",
                borderRadius: "8px",
                overflow: "hidden",
                background: "var(--border)",
              }}
            >
              <Image
                src="/images/about.webp"
                alt="Delight Eboagoro — at work"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                style={{ objectFit: "cover", objectPosition: "center" }}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAUABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACUQAAIBBAEDBQAAAAAAAAAAAAECAwAEBhESITFBUWGBkbH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Amr9LktoJJYrVgqAsS2AAPnNVY7S6u5pbqCMFGYtGpJAK58q8yktHKRoquxIA+vbNd0CIpbNH4yf2OdvHf5igCjqdhcafb2017IZZrqXMjqcgHGcZ96VT6nbJqC2U00nqMpkJ2gHBOCc/tKUH/9k="
              />
            </div>
            {/* Accent dot grid */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
                width: "80px",
                height: "80px",
                backgroundImage: "radial-gradient(circle, var(--crimson) 1.5px, transparent 1.5px)",
                backgroundSize: "12px 12px",
                opacity: 0.4,
              }}
            />
          </div>

          {/* Text */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                fontWeight: 600,
                lineHeight: 1.1,
                color: "var(--text-primary)",
                marginBottom: "28px",
                letterSpacing: "-0.02em",
              }}
            >
              Crafting digital<br />
              <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>experiences</em> that matter.
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              I&apos;m <strong style={{ color: "var(--text-primary)" }}>Eboagoro Jahdiebube Delight</strong> — a Fullstack Engineer with hands-on experience building and deploying production-grade applications. I was trained at{" "}
              <strong style={{ color: "var(--text-primary)" }}>Semicolon Africa</strong>, one of Nigeria&apos;s foremost software engineering schools, where I developed a deep understanding of both frontend and backend engineering.
            </p>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              My work spans the complete product lifecycle — from designing intuitive user interfaces with Next.js and TypeScript, to architecting resilient backends with Java Spring Boot and Node.js, to deploying containerised services and managing databases in production.
            </p>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "40px",
              }}
            >
              I&apos;m passionate about building products that solve real problems for African users and beyond — from emergency response systems to real-time platforms. I care deeply about performance, accessibility, and clean code.
            </p>

            {/* Key highlights */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              {[
                { label: "Education", value: "Semicolon Africa" },
                { label: "Specialisation", value: "Fullstack Engineering" },
                { label: "Location", value: "Lagos, Nigeria" },
                { label: "Open to", value: "Remote / On-site" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    borderLeft: "2px solid var(--crimson)",
                    paddingLeft: "16px",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                    {label}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)" }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
