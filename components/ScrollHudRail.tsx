"use client";

import React, { useEffect, useState } from "react";

const BLOCKS = [
  { id: "hero", label: "HERO" },
  { id: "thesis", label: "THESIS" },
  { id: "work", label: "WORK" },
  { id: "capabilities", label: "ARCHITECTURE" },
  { id: "research", label: "RESEARCH" },
  { id: "contact", label: "CONTACT" },
];

export default function ScrollHudRail() {
  const [activeId, setActiveId] = useState<string>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    BLOCKS.forEach((b) => {
      const el = document.getElementById(b.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-3 font-mono text-xs">
      {BLOCKS.map((b) => {
        const isActive = b.id === activeId;
        return (
          <button
            key={b.id}
            onClick={() => scrollTo(b.id)}
            className="group flex items-center justify-end space-x-2"
          >
            <span
              className={`text-[10px] transition-opacity bg-[#181A20] px-2 py-0.5 rounded border border-[rgba(216,203,179,0.12)] ${
                isActive
                  ? "text-[#F5EFE6] opacity-100 border-[#2F6BFF]/40"
                  : "text-[#A39985] opacity-0 group-hover:opacity-100"
              }`}
            >
              {b.label}
            </span>
            <span
              className={`rounded-full transition-all ${
                isActive
                  ? "w-3 h-3 bg-[#2F6BFF] shadow-[0_0_12px_rgba(47,107,255,0.7)] ring-2 ring-[#2F6BFF]/40"
                  : "w-2 h-2 bg-[rgba(216,203,179,0.25)] group-hover:bg-[#2F6BFF]"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
