"use client";
import React, { useState, useEffect } from "react";

export function GitHubStats({ username }: { username: string }) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, [username]);

  if (loading) return <p style={{ color: "#4a5568", fontFamily: "monospace", fontSize: 13 }}>fetching github data...</p>;
  if (!data || data.message) return null;

  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
      {[
        { label: "Public Repos", val: data.public_repos },
        { label: "Followers", val: data.followers },
        { label: "Following", val: data.following },
      ].map(s => (
        <div key={s.label} style={{ background: "rgba(99,179,237,0.07)", border: "1px solid rgba(99,179,237,0.2)", borderRadius: 6, padding: "10px 18px", textAlign: "center" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#63b3ed", fontFamily: "'Syne', sans-serif" }}>{s.val}</div>
          <div style={{ fontSize: 10, color: "#718096", letterSpacing: "0.1em", fontFamily: "monospace", marginTop: 2 }}>{s.label.toUpperCase()}</div>
        </div>
      ))}
    </div>
  );
}
