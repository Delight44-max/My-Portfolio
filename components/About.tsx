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
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                }}
            >
                {/* Section Label */}
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
          <span
              style={{
                  display: "inline-block",
                  width: 32,
                  height: 1,
                  background: "var(--crimson)",
              }}
          />
                    About Me
                </p>

                <div
                    className="about-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1.4fr",
                        gap: "80px",
                        alignItems: "start",
                    }}
                >
                    {/* Image */}
                    <div style={{ position: "relative" }}>
                        <div
                            style={{
                                position: "relative",
                                width: "100%",
                                maxWidth:"900px",
                                margin: "0 auto",
                                aspectRatio: "4 / 3",
                                borderRadius: "10px",
                                overflow: "hidden",
                                background: "var(--border)",
                            }}
                        >
                            <Image
                                src="/images/about.webp"
                                alt="Delight Eboagoro"
                                fill
                                sizes="(max-width:768px)100vw,900px"
                                style={{
                                    objectFit: "contain",
                                    objectPosition: "center",
                                }}
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
                            />
                        </div>

                        <div
                            style={{
                                position: "absolute",
                                top: "-20px",
                                left: "-20px",
                                width: "80px",
                                height: "80px",
                                backgroundImage:
                                    "radial-gradient(circle,var(--crimson) 1.5px,transparent 1.5px)",
                                backgroundSize: "12px 12px",
                                opacity: 0.4,
                            }}
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <h2
                            style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "clamp(2.2rem,4vw,3.5rem)",
                                fontWeight: 600,
                                lineHeight: 1.1,
                                color: "var(--text-primary)",
                                marginBottom: "28px",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Crafting digital
                            <br />
                            <em
                                style={{
                                    color: "var(--crimson)",
                                    fontStyle: "italic",
                                }}
                            >
                                experiences
                            </em>{" "}
                            that matter.
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
                            I'm{" "}
                            <strong style={{ color: "var(--text-primary)" }}>
                                Eboagoro Jahdiebube Delight
                            </strong>{" "}
                            — a Fullstack Software Engineer passionate about building
                            production-ready digital products. I graduated from{" "}
                            <strong style={{ color: "var(--text-primary)" }}>
                                Semicolon Africa
                            </strong>
                            , one of Nigeria's leading software engineering institutions,
                            where I gained strong expertise across frontend, backend,
                            databases, cloud deployment and modern software architecture.
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
                            I enjoy transforming ideas into reliable applications—from
                            beautiful interfaces built with React, Next.js and TypeScript, to
                            scalable backend systems using Java Spring Boot, Node.js and
                            PostgreSQL. My focus is writing maintainable code that performs
                            well and delivers excellent user experiences.
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
                            Whether it's fintech, emergency response, AI-powered platforms or
                            business software, I enjoy solving meaningful problems through
                            technology. I'm always learning, refining my craft and shipping
                            products that create measurable impact.
                        </p>

                        {/* Highlights */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "20px",
                            }}
                        >
                            {[
                                {
                                    label: "Education",
                                    value: "Semicolon Africa",
                                },
                                {
                                    label: "Specialisation",
                                    value: "Fullstack Engineering",
                                },
                                {
                                    label: "Location",
                                    value: "Lagos, Nigeria",
                                },
                                {
                                    label: "Open To",
                                    value: "Remote • Hybrid • On-site",
                                },
                            ].map(({ label, value }) => (
                                <div
                                    key={label}
                                    style={{
                                        borderLeft: "2px solid var(--crimson)",
                                        paddingLeft: "16px",
                                    }}
                                >
                                    <p
                                        style={{
                                            fontFamily: "var(--font-mono)",
                                            fontSize: ".72rem",
                                            color: "var(--text-muted)",
                                            textTransform: "uppercase",
                                            letterSpacing: ".12em",
                                            marginBottom: "6px",
                                        }}
                                    >
                                        {label}
                                    </p>

                                    <p
                                        style={{
                                            fontFamily: "var(--font-body)",
                                            fontWeight: 600,
                                            color: "var(--text-primary)",
                                        }}
                                    >
                                        {value}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* ================= CERTIFICATIONS ================= */}
                        <div
                            style={{
                                marginTop: "70px",
                                paddingTop: "55px",
                                borderTop: "1px solid var(--border)",
                            }}
                        >
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
                <span
                    style={{
                        display: "inline-block",
                        width: 32,
                        height: 1,
                        background: "var(--crimson)",
                    }}
                />
                                Professional Certifications
                            </p>

                            <h3
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "clamp(1.8rem,3vw,2.5rem)",
                                    fontWeight: 600,
                                    color: "var(--text-primary)",
                                    marginBottom: "16px",
                                }}
                            >
                                Training & Credentials
                            </h3>

                            <p
                                style={{
                                    fontFamily: "var(--font-body)",
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.8,
                                    maxWidth: "720px",
                                    marginBottom: "36px",
                                }}
                            >
                                These certifications represent my formal software engineering
                                training and continuous professional development. They reflect
                                the practical experience and technical foundation behind every
                                product I build.
                            </p>

                            <div
                                className="certificate-grid"
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(2,minmax(0,1fr))",
                                    gap: "28px",
                                }}
                            >
                                {[
                                    {
                                        image: "/images/Semicolon_Cert.webp",
                                        title: "Semicolon Africa",
                                        subtitle: "Fullstack Software Engineering",
                                    },
                                    {
                                        image: "/images/Henly_Cert.webp",
                                        title: "Henley Business School",
                                        subtitle: "Professional Certificate",
                                    },
                                ].map((cert) => (
                                    <div
                                        key={cert.title}
                                        className="certificate-card"
                                        style={{
                                            background: "var(--bg)",
                                            border: "1px solid var(--border)",
                                            borderRadius: "12px",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: "relative",
                                                aspectRatio: "16/10",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <Image
                                                src={cert.image}
                                                alt={cert.title}
                                                fill
                                                sizes="(max-width:768px)100vw,500px"
                                                style={{
                                                    objectFit: "cover",
                                                    transition: ".5s",
                                                }}
                                            />
                                        </div>

                                        <div
                                            style={{
                                                padding: "22px",
                                            }}
                                        >
                                            <h4
                                                style={{
                                                    color: "var(--text-primary)",
                                                    fontSize: "1.15rem",
                                                    marginBottom: "8px",
                                                }}
                                            >
                                                {cert.title}
                                            </h4>

                                            <p
                                                style={{
                                                    color: "var(--text-secondary)",
                                                    lineHeight: 1.7,
                                                }}
                                            >
                                                {cert.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .certificate-card{
          transition:all .35s ease;
        }

        .certificate-card:hover{
          transform:translateY(-8px);
          border-color:var(--crimson);
          box-shadow:0 24px 60px rgba(0,0,0,.18);
        }

        .certificate-card:hover img{
          transform:scale(1.05);
        }

        @media (max-width:768px){

          .about-grid{
            grid-template-columns:1fr !important;
            gap:40px !important;
          }

          .certificate-grid{
            grid-template-columns:1fr !important;
          }

        }
      `}</style>
        </section>
    );
}