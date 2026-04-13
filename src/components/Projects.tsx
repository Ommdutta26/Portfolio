"use client";
import React, { useState } from "react";
import { Reveal } from "./ui/Reveal";
import { Tag } from "./ui/Tag";
import { PROJECTS } from "@/data/portfolio";

function ProjectCard({ p, featured }: { p: any; featured: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        gridColumn: featured ? "span 1" : "span 1",
        background: hov ? "#0f1829" : "#0b1120",
        border: `1px solid ${hov ? "rgba(99,179,237,0.3)" : "rgba(99,179,237,0.1)"}`,
        padding: "2rem",
        borderRadius: 2,
        transition: "all 0.35s cubic-bezier(.4,0,.2,1)",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
      }}
      className={featured ? "col-span-1 md:col-span-2" : "col-span-1"}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${p.accent}, transparent)`, opacity: hov ? 1 : featured ? 0.6 : 0, transition: "opacity 0.3s" }} />
      <div style={{ position: "absolute", top: 0, right: 0, width: 120, height: 120, background: `radial-gradient(circle, ${p.accent}10, transparent)`, pointerEvents: "none" }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: p.status === "live" ? "#68d391" : "#f6ad55", animation: "pulse 2s infinite" }} />
          <span style={{ fontFamily: "monospace", fontSize: 10, color: p.status === "live" ? "#68d391" : "#f6ad55", letterSpacing: "0.14em" }}>{p.statusLabel}</span>
        </div>
        <a href={p.github} target="_blank" rel="noreferrer" style={{ color: "#4a5568", textDecoration: "none", fontSize: 12, fontFamily: "monospace", display: "flex", alignItems: "center", gap: 4, transition: "color 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.color = "#63b3ed"} onMouseLeave={e => e.currentTarget.style.color = "#4a5568"}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
          github
        </a>
      </div>

      <div style={{ fontFamily: "monospace", fontSize: 10, color: "#4a5568", letterSpacing: "0.12em", marginBottom: 8 }}>{p.type.toUpperCase()}</div>
      <div style={{ fontSize: featured ? 22 : 18, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 2 }}>{p.title}</div>
      <div style={{ fontSize: 12, color: p.accent, fontFamily: "monospace", marginBottom: 12 }}>{p.subtitle}</div>
      <p style={{ fontSize: 13, color: "#718096", lineHeight: 1.7, marginBottom: 20, fontWeight: 400 }}>{p.desc}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {p.tags.map((t: string) => <Tag key={t} label={t} color={p.tagColors[t] || "blue"} />)}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "6rem 4rem", maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
      <Reveal>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
          <span style={{ fontFamily: "monospace", fontSize: 12, color: "#63b3ed" }}>01.</span>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>Projects</h2>
          <div style={{ flex: 1, height: 1, background: "rgba(99,179,237,0.12)" }} />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.id} delay={i * 100}>
            <ProjectCard p={p} featured={p.featured} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
