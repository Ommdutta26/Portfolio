"use client";
import React, { useState } from "react";
import { Reveal } from "./ui/Reveal";
import { PROFILE } from "@/data/portfolio";

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 16, padding: "1.2rem 1.5rem", background: hov ? "rgba(99,179,237,0.06)" : "#0b1120", border: "1px solid", borderColor: hov ? "rgba(99,179,237,0.3)" : "rgba(99,179,237,0.1)", borderRadius: 2, transition: "all 0.25s", cursor: "pointer" }}>
      <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(99,179,237,0.1)", border: "1px solid rgba(99,179,237,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        <div style={{ fontFamily: "monospace", fontSize: 10, color: "#4a5568", letterSpacing: "0.1em", marginBottom: 2 }}>{label.toUpperCase()}</div>
        <div style={{ fontSize: 14, color: hov ? "#90cdf4" : "#e2e8f0", fontWeight: 600, transition: "color 0.2s" }}>{value}</div>
      </div>
      <div style={{ marginLeft: "auto", fontSize: 18, transition: "transform 0.2s, color 0.2s", transform: hov ? "translateX(4px)" : "none", color: hov ? "#63b3ed" : "#4a5568" }}>→</div>
    </a>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%",
    background: "#0b1120",
    border: `1px solid ${focused === field ? "rgba(99,179,237,0.4)" : "rgba(99,179,237,0.1)"}`,
    borderRadius: 2,
    padding: "12px 14px",
    color: "#e2e8f0",
    fontFamily: "monospace",
    fontSize: 13,
    outline: "none",
    transition: "border-color 0.2s",
    resize: "none",
  });

  const handleSubmit = () => {
    if (form.name && form.email && form.message) setSent(true);
  };

  if (sent) return (
    <div style={{ background: "rgba(104,211,145,0.06)", border: "1px solid rgba(104,211,145,0.2)", borderRadius: 2, padding: "2rem", textAlign: "center" }}>
      <div style={{ fontSize: 32, marginBottom: 8 }}>✓</div>
      <div style={{ fontSize: 16, fontWeight: 700, color: "#68d391", marginBottom: 6 }}>Message sent!</div>
      <div style={{ fontFamily: "monospace", fontSize: 12, color: "#718096" }}>I'll get back to you soon.</div>
    </div>
  );

  return (
    <div style={{ background: "#0b1120", border: "1px solid rgba(99,179,237,0.1)", borderRadius: 2, padding: "2rem" }}>
      <div style={{ fontFamily: "monospace", fontSize: 10, color: "#63b3ed", letterSpacing: "0.15em", marginBottom: 20 }}>// SEND A MESSAGE</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div>
          <div style={{ fontFamily: "monospace", fontSize: 10, color: "#4a5568", letterSpacing: "0.1em", marginBottom: 6 }}>NAME</div>
          <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} placeholder="Your name" style={inputStyle("name")} />
        </div>
        <div>
          <div style={{ fontFamily: "monospace", fontSize: 10, color: "#4a5568", letterSpacing: "0.1em", marginBottom: 6 }}>EMAIL</div>
          <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} placeholder="your@email.com" style={inputStyle("email")} />
        </div>
        <div>
          <div style={{ fontFamily: "monospace", fontSize: 10, color: "#4a5568", letterSpacing: "0.1em", marginBottom: 6 }}>MESSAGE</div>
          <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} onFocus={() => setFocused("msg")} onBlur={() => setFocused(null)} placeholder="Let's build something together..." rows={4} style={{ ...inputStyle("msg"), display: "block" }} />
        </div>
        <button onClick={handleSubmit}
          style={{ background: "#63b3ed", color: "#050810", border: "none", padding: "13px 28px", fontFamily: "monospace", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", cursor: "pointer", clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)", transition: "all 0.2s", marginTop: 4 }}
          onMouseEnter={e => { e.currentTarget.style.background = "#90cdf4"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#63b3ed"; e.currentTarget.style.transform = "none"; }}>
          SEND MESSAGE →
        </button>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "6rem 4rem", maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
      <Reveal>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
          <span style={{ fontFamily: "monospace", fontSize: 12, color: "#63b3ed" }}>04.</span>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>Contact</h2>
          <div style={{ flex: 1, height: 1, background: "rgba(99,179,237,0.12)" }} />
        </div>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, alignItems: "start" }}>
        <Reveal delay={0}>
          <h3 style={{ fontSize: 28, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 12 }}>Let's Build<br />Something.</h3>
          <p style={{ fontSize: 15, color: "#718096", lineHeight: 1.8, marginBottom: 32, fontWeight: 400 }}>
            I'm actively looking for ML/AI and Full Stack placement opportunities. If you're working on something interesting — a startup, a research project, or a production AI system — let's talk.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <ContactItem
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#63b3ed" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>}
              label="Email" value={PROFILE.email} href={`mailto:${PROFILE.email}`}
            />
            <ContactItem
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#63b3ed" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>}
              label="Phone" value={PROFILE.phone} href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
            />
            <ContactItem
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="#63b3ed"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>}
              label="GitHub" value={`@${PROFILE.github}`} href={`https://github.com/${PROFILE.github}`}
            />
            <ContactItem
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#63b3ed" strokeWidth="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>}
              label="LinkedIn" value={PROFILE.linkedin} href={`https://linkedin.com`}
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
