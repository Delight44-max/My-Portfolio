"use client";
const technicalSkills = [
  {
    category: "Frontend",
    icon: "⚡",
    skills: [
      { name: "Next.js", level: 95 },
      { name: "React", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript (ES6+)", level: 93 },
      { name: "Tailwind CSS", level: 88 },
      { name: "HTML & CSS", level: 95 },
        {name: "React-Native", level: 88},
    ],
  },
  {
    category: "Backend",
    icon: "🛠",
    skills: [
      { name: "Java Spring Boot", level: 85 },
      { name: "Node.js", level: 88 },
        { name: "Python", level: 70 },
        { name: "Nest.js", level: 60 },
        { name: "C, c++, c#, .NET", level: 60 },
      { name: "Express.js", level: 87 },
      { name: "REST API Design", level: 90 },
      { name: "Socket.IO", level: 82 },
        {name: "MQTT", level: 70},
      { name: "Go (Golang)", level: 60 },
        { name: "proficiency in micro-service and event-Driven architectural patterns", level: 70 },
    ],
  },
  {
    category: "Database",
    icon: "🗄",
    skills: [
      { name: "PostgresSQL", level: 85 },
      { name: "MongoDB", level: 78 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "🚀",
    skills: [
      { name: "Docker", level: 78 },
      { name: "Git & GitHub", level: 92 },
      { name: "Vercel / Render", level: 88 },
      { name: "Firebase", level: 80 },
        { name: "AI tools - Claude, ChatGPT etc, for faster Debugging", level: 88 },
    ],
  },
];

const softSkills = [
  { name: "Problem Solving", desc: "Breaking down complex challenges into clear, actionable steps." },
  { name: "Communication", desc: "Articulating technical concepts clearly to both technical and non-technical stakeholders." },
  { name: "Team Collaboration", desc: "Working effectively within cross-functional teams across design, product, and engineering." },
  { name: "Attention to Detail", desc: "Pixel-perfect frontend execution and meticulous code quality standards." },
  { name: "Adaptability", desc: "Quickly learning new technologies and adapting to evolving project requirements." },
  { name: "Time Management", desc: "Delivering features on schedule while maintaining high code quality." },
  { name: "Critical Thinking", desc: "Evaluating technical trade-offs to make informed architectural decisions." },
  { name: "Growth Mindset", desc: "Continuously learning and improving — code, systems, and self." },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-primary)" }}>
          {name}
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)" }}>
          {level}%
        </span>
      </div>
      <div
        style={{
          width: "100%",
          height: "4px",
          background: "var(--border)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${level}%`,
            background: `linear-gradient(to right, var(--crimson) 0%, var(--crimson-light) 100%)`,
            borderRadius: "2px",
            transition: "width 1.2s ease",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="reveal"
      style={{ padding: "100px max(24px, 6vw)", background: "var(--bg)" }}
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
          Skills & Expertise
        </p>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
            fontWeight: 600,
            lineHeight: 1.1,
            color: "var(--text-primary)",
            marginBottom: "60px",
            letterSpacing: "-0.02em",
          }}
        >
          Technical &{" "}
          <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>Human</em> capabilities.
        </h2>

        {/* Technical Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
            marginBottom: "80px",
          }}
        >
          {technicalSkills.map((cat) => (
            <div
              key={cat.category}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "28px",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(190,18,60,0.08)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
                <span style={{ fontSize: "1.4rem" }}>{cat.icon}</span>
                <h3 style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  {cat.category}
                </h3>
              </div>
              {cat.skills.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: "36px",
              letterSpacing: "-0.01em",
            }}
          >
            Soft Skills
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            {softSkills.map((s) => (
              <div
                key={s.name}
                style={{
                  display: "flex",
                  gap: "14px",
                  padding: "20px",
                  background: "var(--bg-card)",
                  borderRadius: "10px",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--crimson)",
                    flexShrink: 0,
                    marginTop: "6px",
                  }}
                />
                <div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px" }}>
                    {s.name}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.825rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
