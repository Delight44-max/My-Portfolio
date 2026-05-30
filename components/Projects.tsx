"use client";
import { projects } from "@/lib/projects";

function StatusBadge({ status }: { status?: string }) {
  const map: Record<string, { bg: string; text: string; label: string }> = {
    live: { bg: "#d1fae5", text: "#065f46", label: "Live" },
    wip: { bg: "#fef3c7", text: "#92400e", label: "In Progress" },
    archived: { bg: "#f3f4f6", text: "#6b7280", label: "Archived" },
  };
  if (!status) return null;
  const s = map[status] ?? map.live;
  return (
    <span
      style={{
        background: s.bg,
        color: s.text,
        fontSize: "0.7rem",
        fontWeight: 600,
        fontFamily: "var(--font-mono)",
        padding: "3px 10px",
        borderRadius: "20px",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
      }}
    >
      {s.label}
    </span>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="reveal"
      style={{
        padding: "100px max(24px, 6vw)",
        background: "var(--bg-card)",
        borderTop: "1px solid var(--border)",
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
          Projects & Work
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "60px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 600,
              lineHeight: 1.1,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            Things I&apos;ve{" "}
            <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>built.</em>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--text-muted)", maxWidth: "340px", textAlign: "right" }}>
            Click any project to visit the live site.
          </p>
        </div>

        {/* Featured projects */}
        {featured.length > 0 && (
          <div style={{ marginBottom: "40px" }}>
            {featured.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textDecoration: "none",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "40px",
                  marginBottom: "20px",
                  background: "var(--bg)",
                  transition: "all 0.25s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--crimson)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(190,18,60,0.1)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Top accent */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(to right, var(--crimson), var(--crimson-light))", borderRadius: "16px 16px 0 0" }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--crimson)",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        background: "var(--crimson-pale)",
                        padding: "4px 10px",
                        borderRadius: "4px",
                      }}
                    >
                      Featured
                    </span>
                    <StatusBadge status={p.status} />
                  </div>
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="var(--crimson)" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>

                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "12px", letterSpacing: "-0.01em" }}>
                  {p.title}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "24px", maxWidth: "700px" }}>
                  {p.description}
                </p>

                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--text-secondary)",
                        background: "var(--bg-card)",
                        border: "1px solid var(--border)",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Regular projects grid */}
        {rest.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {rest.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textDecoration: "none",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "28px",
                  background: "var(--bg)",
                  transition: "all 0.25s ease",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--crimson)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(190,18,60,0.08)";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <StatusBadge status={p.status} />
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="var(--text-muted)" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>

                <h3 style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "10px" }}>
                  {p.title}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "20px" }}>
                  {p.description}
                </p>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {p.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        color: "var(--text-muted)",
                        background: "var(--bg-card)",
                        border: "1px solid var(--border)",
                        padding: "3px 10px",
                        borderRadius: "20px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                  {p.tags.length > 3 && (
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-muted)" }}>
                      +{p.tags.length - 3}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}

        {/* CTA to add more */}
        <div
          style={{
            marginTop: "40px",
            padding: "24px",
            background: "var(--crimson-pale)",
            border: "1px dashed var(--crimson)",
            borderRadius: "10px",
            textAlign: "center",
            opacity: 0.7,
          }}
        >

        </div>
      </div>
    </section>
  );
}
