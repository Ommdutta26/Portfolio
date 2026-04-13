import React from "react";
import { TypedText } from "./ui/TypedText";
import { AnimatedNumber } from "./ui/AnimatedNumber";
import { PROFILE } from "@/data/portfolio";

export default function Hero() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 4rem", maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
      <div style={{ maxWidth: 720 }}>
        <div style={{ fontFamily: "monospace", fontSize: 12, color: "#68d391", letterSpacing: "0.2em", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 32, height: 1, background: "#68d391" }} />
          OPEN TO WORK· BHUBANESWAR, INDIA
        </div>

        <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 16, color: "#fff" }}>
          {PROFILE.name}
        </h1>

        <h2 style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: 24, letterSpacing: "-0.02em" }}>
          <TypedText words={["ML/AI Engineer", "Full Stack Dev", "AGENTIC AI  Systems", "Competitive Coder"]} />
        </h2>

        <p style={{ fontSize: 16, color: "#718096", lineHeight: 1.8, maxWidth: 520, marginBottom: 36, fontWeight: 400 }}>
          {PROFILE.tagline} Building end-to-end AI systems — deployed, cloud-hosted, and production-ready — from intelligent automation to agentic LLM workflows.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
          {[
            { label: "View Projects", href: "#projects", primary: true },
            { label: "Get In Touch", href: "#contact", primary: false },
            { label: "GitHub ↗", href: `https://github.com/${PROFILE.github}`, primary: false, ext: true },
          ].map(b => (
            <a key={b.label} href={b.href} target={b.ext ? "_blank" : undefined} rel="noreferrer"
              style={{ fontFamily: "monospace", fontSize: 12, padding: "12px 24px", background: b.primary ? "#63b3ed" : "transparent", color: b.primary ? "#050810" : "#63b3ed", border: "1px solid #63b3ed", textDecoration: "none", letterSpacing: "0.08em", fontWeight: 600, clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)", transition: "all 0.2s", display: "inline-block" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; if (!b.primary) e.currentTarget.style.background = "rgba(99,179,237,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; if (!b.primary) e.currentTarget.style.background = "transparent"; }}>
              {b.label}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", gap: "3rem", marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(99,179,237,0.1)" }}>
          {[{ n: 4, s: "+", label: "AI Projects" }, { n: 3, s: "+", label: "Cloud Deploys" }, { n: 5, s: "+", label: "Tech Stacks" }].map(st => (
            <div key={st.label}>
              <div style={{ fontSize: 36, fontWeight: 800, color: "#fff", lineHeight: 1 }}>
                <AnimatedNumber target={st.n} suffix={st.s} />
              </div>
              <div style={{ fontFamily: "monospace", fontSize: 10, color: "#4a5568", letterSpacing: "0.12em", marginTop: 4 }}>{st.label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating terminal */}
      <div style={{ position: "absolute", right: "2rem", top: "50%", transform: "translateY(-50%)", width: 300, animation: "float 5s ease-in-out infinite" }} className="hidden lg:block">
        <div style={{ background: "#0b1120", border: "1px solid rgba(99,179,237,0.15)", borderRadius: 6, overflow: "hidden" }}>
          <div style={{ background: "#111827", padding: "8px 14px", display: "flex", alignItems: "center", gap: 6, borderBottom: "1px solid rgba(99,179,237,0.1)" }}>
            {["#fc5f5a", "#fbbd2c", "#34c749"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
            <span style={{ fontFamily: "monospace", fontSize: 11, color: "#4a5568", marginLeft: "auto" }}>profile.json</span>
          </div>
          <div style={{ padding: "14px 16px", fontFamily: "monospace", fontSize: 12, lineHeight: 2, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: 0, right: 0, height: 2, background: "rgba(99,179,237,0.08)", animation: "scanline 3s linear infinite" }} />
            <div style={{ color: "#4a5568" }}>{"{"}</div>
            {[["name", PROFILE.name], ["role", "AI-ML/Full Stack Engineer"], ["status", "open to work"], ["github", `@${PROFILE.github}`], ["cp", "active"]].map(([k, v]) => (
              <div key={k}>
                &nbsp;<span style={{ color: "#63b3ed" }}>"{k}"</span>
                <span style={{ color: "#718096" }}>: </span>
                <span style={{ color: "#68d391" }}>"{v}"</span>
              </div>
            ))}
            <div style={{ color: "#4a5568" }}>{"}"}</div>
            <div style={{ marginTop: 4 }}>
              <span style={{ color: "#68d391" }}>❯ </span>
              <span style={{ display: "inline-block", width: 7, height: 14, background: "#63b3ed", verticalAlign: "text-bottom", animation: "blink 1.2s infinite" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
