"use client";
import React from "react";
import { Reveal } from "./ui/Reveal";
import { GitHubStats } from "./ui/GitHubStats";
import { PROFILE } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" style={{ padding: "6rem 4rem", maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
      <Reveal>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
          <span style={{ fontFamily: "monospace", fontSize: 12, color: "#63b3ed" }}>03.</span>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>About</h2>
          <div style={{ flex: 1, height: 1, background: "rgba(99,179,237,0.12)" }} />
        </div>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem" }}>
        <Reveal delay={0}>
          <p style={{ fontSize: 15, color: "#718096", lineHeight: 1.9, marginBottom: 16, fontWeight: 400 }}>
            I'm <strong style={{ color: "#e2e8f0", fontWeight: 600 }}>Omm Dutta</strong>, an ML/AI and Full Stack engineer building deployment-ready AI systems.
            I gravitate toward projects that ship — cloud-hosted, end-to-end solutions rather than notebooks that live in isolation.
          </p>
          <p style={{ fontSize: 15, color: "#718096", lineHeight: 1.9, marginBottom: 16, fontWeight: 400 }}>
            My work spans fraud detection ensembles, agentic LLM workflows, emotion recognition, and full-stack interview automation.
            I'm equally comfortable training transformer models and wiring REST APIs.
          </p>
          <p style={{ fontSize: 15, color: "#718096", lineHeight: 1.9, marginBottom: 24, fontWeight: 400 }}>
            Beyond ML engineering, I actively compete in <strong style={{ color: "#e2e8f0", fontWeight: 600 }}>competitive programming</strong>, solving tree DP, graph problems, and contest mathematics in C++.
          </p>
          <div style={{ background: "#0b1120", borderLeft: "2px solid #63b3ed", padding: "14px 20px", borderRadius: "0 4px 4px 0" }}>
            <p style={{ fontFamily: "monospace", fontSize: 12, color: "#63b3ed", lineHeight: 1.8, margin: 0 }}>
              // Targeting ML/AI Engineer & Full Stack roles<br />
              // Open to remote & hybrid
            </p>
          </div>

          <div style={{ marginTop: 24 }}>
            <div style={{ fontFamily: "monospace", fontSize: 10, color: "#4a5568", letterSpacing: "0.12em", marginBottom: 10 }}>GITHUB STATS</div>
            <GitHubStats username={PROFILE.github} />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {[
              ["ROLE", "ML/AI + Full Stack"],
              ["AVAILABILITY", PROFILE.availability],
              ["TIMELINE", PROFILE.timeline],
              ["LOCATION", PROFILE.location],
              ["INTERESTS", "AI · Competitive Prog."],
              ["GITHUB", `@${PROFILE.github}`],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: "1px solid rgba(99,179,237,0.08)" }}>
                <span style={{ fontFamily: "monospace", fontSize: 11, color: "#4a5568", letterSpacing: "0.1em" }}>{k}</span>
                <span style={{ fontSize: 14, color: k === "AVAILABILITY" ? "#68d391" : k === "GITHUB" ? "#63b3ed" : "#e2e8f0", fontWeight: 600, textAlign: "right" }}>{v}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
