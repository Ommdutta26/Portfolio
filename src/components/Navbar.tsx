"use client";
import React, { useState, useEffect } from "react";

export default function Navbar({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = ["projects", "skills", "about", "contact"];
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.1rem 4rem", background: scrolled ? "rgba(5,8,16,0.85)" : "transparent", backdropFilter: scrolled ? "blur(16px)" : "none", borderBottom: scrolled ? "1px solid rgba(99,179,237,0.1)" : "none", transition: "all 0.3s" }}>
      <div style={{ fontFamily: "monospace", fontSize: 15, color: "#63b3ed", letterSpacing: "0.04em" }}>
        omm<span style={{ color: "#68d391" }}>.dev</span>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#68d391", display: "inline-block", marginLeft: 8, animation: "pulse 2s infinite" }} />
      </div>
      <div style={{ display: "flex", gap: "2.5rem" }}>
        {links.map(l => (
          <a key={l} href={`#${l}`} style={{ fontFamily: "monospace", fontSize: 12, color: active === l ? "#63b3ed" : "#718096", textDecoration: "none", letterSpacing: "0.08em", transition: "color 0.2s" }}>
            {l}
          </a>
        ))}
      </div>
    </nav>
  );
}
