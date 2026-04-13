"use client";
import React, { useState, useEffect } from "react";

export function TypedText({ words, delay = 5000 }: { words: string[], delay?: number }) {
  const [idx, setIdx] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];

    if (txt === word && !del) {
      const timer = setTimeout(() => setDel(true), delay);
      return () => clearTimeout(timer);
    }

    if (txt === "" && del) {
      setDel(false);
      setIdx((prev) => prev + 1);
      return;
    }

    const nextDelay = del ? 40 : 80;
    const timer = setTimeout(() => {
      setTxt((prev) => {
        if (!del) return word.slice(0, prev.length + 1);
        else return word.slice(0, prev.length - 1);
      });
    }, nextDelay);

    return () => clearTimeout(timer);
  }, [txt, del, idx, words, delay]);
  return (
    <span style={{ color: "#63b3ed" }}>
      {txt}<span style={{ animation: "blink 1s infinite", opacity: 1 }}>|</span>
    </span>
  );
}
