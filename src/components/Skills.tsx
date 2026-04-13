"use client";
import React, { useState } from "react";
import { Reveal } from "./ui/Reveal";
import { SKILLS } from "@/data/portfolio";

function SkillCard({ sk }: { sk: any }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: "#0b1120", border: `1px solid ${hov ? `${sk.accent}40` : "rgba(99,179,237,0.08)"}`, padding: "1.5rem", borderRadius: 2, transition: "all 0.3s", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: sk.accent, opacity: hov ? 0.7 : 0.25, transition: "opacity 0.3s" }} />
      <div style={{ fontFamily: "monospace", fontSize: 10, color: sk.accent, letterSpacing: "0.15em", marginBottom: 14, paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.04)" }}>{sk.category.toUpperCase()}</div>
      <ul style={{ listStyle: "none" }}>
        {sk.items.map((item: string) => (
          <li key={item} style={{ fontSize: 13, color: "#a0aec0", padding: "4px 0", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: sk.accent, fontSize: 10 }}>▸</span>{item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "6rem 4rem", maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
      <Reveal>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
          <span style={{ fontFamily: "monospace", fontSize: 12, color: "#63b3ed" }}>02.</span>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>Skills</h2>
          <div style={{ flex: 1, height: 1, background: "rgba(99,179,237,0.12)" }} />
        </div>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
        {SKILLS.map((sk, i) => (
          <Reveal key={sk.category} delay={i * 80}>
            <SkillCard sk={sk} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
