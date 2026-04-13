import React from "react";

export default function Footer() {
  return (
    <footer style={{ padding: "2rem 4rem", borderTop: "1px solid rgba(99,179,237,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 2 }}>
      <div style={{ fontFamily: "monospace", fontSize: 12, color: "#4a5568" }}>
        © 2025 Omm Dutta — Built with React
      </div>
      <div style={{ fontFamily: "monospace", fontSize: 12, color: "#4a5568", display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#68d391", animation: "pulse 2s infinite" }} />
        Open to opportunities
      </div>
    </footer>
  );
}
