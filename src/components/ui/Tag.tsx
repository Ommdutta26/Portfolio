import React from "react";

const TAG_COLORS: Record<string, { bg: string; border: string; color: string }> = {
  blue: { bg: "rgba(99,179,237,0.08)", border: "rgba(99,179,237,0.3)", color: "#90cdf4" },
  green: { bg: "rgba(104,211,145,0.08)", border: "rgba(104,211,145,0.3)", color: "#9ae6b4" },
  amber: { bg: "rgba(246,173,85,0.08)", border: "rgba(246,173,85,0.3)", color: "#fbd38d" },
  teal: { bg: "rgba(79,209,197,0.08)", border: "rgba(79,209,197,0.3)", color: "#81e6d9" },
};
export function Tag({ label, color = "blue" }: { label: string; color?: string }) {
  const c = TAG_COLORS[color] || TAG_COLORS.blue;
  return (
    <span style={{ ...c, fontFamily: "monospace", fontSize: 11, padding: "3px 10px", borderRadius: 3, border: `1px solid ${c.border}`, letterSpacing: "0.06em" }}>
      {label}
    </span>
  );
}
