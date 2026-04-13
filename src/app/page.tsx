"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ParticleField } from "@/components/ui/ParticleField";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouse = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

  useEffect(() => {
    const sections = ["projects", "skills", "about", "contact"];
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { threshold: 0.4 });
    sections.forEach(s => { const el = document.getElementById(s); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const styles = {
    root: {
      background: "#050810",
      minHeight: "100vh",
      fontFamily: "'Syne', sans-serif",
      color: "#e2e8f0",
      overflowX: "hidden" as const,
    },
  };

  return (
    <div style={styles.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600&family=Syne:wght@400;600;800&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes scanline { 0% { top: -2px; } 100% { top: 100%; } }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #050810; }
        ::-webkit-scrollbar-thumb { background: #63b3ed40; border-radius: 2px; }
      `}</style>

      <ParticleField />

      {/* Cursor glow */}
      <div style={{ position: "fixed", left: mousePos.x - 200, top: mousePos.y - 200, width: 400, height: 400, background: "radial-gradient(circle, rgba(99,179,237,0.04), transparent 70%)", borderRadius: "50%", pointerEvents: "none", zIndex: 1, transition: "left 0.1s, top 0.1s" }} />

      {/* Grid */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(99,179,237,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,0.03) 1px, transparent 1px)", backgroundSize: "50px 50px", zIndex: 0, pointerEvents: "none" }} />

      <Navbar active={activeSection} />
      
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
