"use client";

import React from "react";

export default function MammutHero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen w-full flex flex-col justify-between px-4 sm:px-8 max-w-6xl mx-auto snap-start relative box-border pt-24 pb-8 sm:pb-12"
    >
      {/* Top Block: Eyebrow + Large Commanding Headline + Lead Paragraph */}
      <div className="space-y-4 sm:space-y-6">
        <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#181A20] border border-[rgba(216,203,179,0.16)] text-xs font-mono w-fit">
          <span className="w-2 h-2 rounded-full bg-[#2F6BFF] animate-pulse"></span>
          <span className="text-[#D8CBB3]">FOUNDING AI ENGINEER & RESEARCHER</span>
          <span className="text-[rgba(216,203,179,0.3)]">//</span>
          <span className="text-[#2F6BFF] font-semibold">17.3850° N, 78.4867° E</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-[#F5EFE6] leading-[1.02]">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F6BFF] via-[#F5EFE6] to-[#D8CBB3]">Deterministic AI</span> for Heavy Industry.
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl text-[#D8CBB3] font-normal leading-relaxed max-w-4xl">
            I engineer zero-hallucination inference pipelines, mathematical operations research, and sovereign human-verified systems for physical manufacturing, supply chains, and travel.
          </p>
        </div>
      </div>

      {/* Middle Block: 3 Generously Spaced Highlight Pillar Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 font-mono text-xs my-4 sm:my-6">
        <div className="p-5 sm:p-6 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] space-y-2 hover:border-[#2F6BFF]/60 hover:shadow-[0_10px_30px_rgba(47,107,255,0.12)] transition-all">
          <div className="text-[11px] text-[#A39985] uppercase tracking-wider">Active Engagement</div>
          <div className="text-base sm:text-lg font-display font-bold text-[#F5EFE6]">Founding AI Engineer</div>
          <div className="text-sm text-[#2F6BFF] font-semibold">Waylosa (Travel AI Engine)</div>
          <p className="text-xs text-[#A39985] font-sans pt-1">
            Replaced LLM hallucinations with 30ms exact dynamic programming scheduling.
          </p>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] space-y-2 hover:border-[#2F6BFF]/60 hover:shadow-[0_10px_30px_rgba(47,107,255,0.12)] transition-all">
          <div className="text-[11px] text-[#A39985] uppercase tracking-wider">Peer-Reviewed Research</div>
          <div className="text-base sm:text-lg font-display font-bold text-[#F5EFE6]">Conformal UQ (CQR)</div>
          <div className="text-sm text-[#D8CBB3] font-semibold">NASA C-MAPSS / IOP 2026</div>
          <p className="text-xs text-[#A39985] font-sans pt-1">
            Engine-level statistical coverage guarantees under severe operating shifts.
          </p>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] space-y-2 hover:border-[#2F6BFF]/60 hover:shadow-[0_10px_30px_rgba(47,107,255,0.12)] transition-all">
          <div className="text-[11px] text-[#A39985] uppercase tracking-wider">Sovereign Build</div>
          <div className="text-base sm:text-lg font-display font-bold text-[#F5EFE6]">CImEx Compliance</div>
          <div className="text-sm text-[#D8CBB3] font-semibold">EU CBAM Sovereign Ledger</div>
          <p className="text-xs text-[#A39985] font-sans pt-1">
            Saved €849,075 per 1,000t steel batch using 100% deterministic Annex V math.
          </p>
        </div>
      </div>

      {/* Bottom Block: Quick Action Buttons & Telemetry Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-[rgba(216,203,179,0.1)]">
        <div className="flex items-center space-x-3 font-mono text-xs">
          <button
            onClick={() => scrollTo("work")}
            className="px-6 py-3 rounded-xl bg-[#2F6BFF] hover:bg-[#4D82FF] text-white font-semibold transition-all shadow-[0_0_20px_rgba(47,107,255,0.4)] flex items-center space-x-2 text-sm"
          >
            <span>Explore Deployments</span>
            <span>↓</span>
          </button>
          <button
            onClick={() => scrollTo("thesis")}
            className="px-6 py-3 rounded-xl bg-[#181A20] hover:bg-[#22242C] text-[#D8CBB3] hover:text-white border border-[rgba(216,203,179,0.14)] font-medium transition-all text-sm"
          >
            Read Core Thesis
          </button>
        </div>

        <div className="flex items-center space-x-3 font-mono text-xs text-[#A39985]">
          <span>PAGE 01 / 06</span>
          <span className="text-[rgba(216,203,179,0.3)]">//</span>
          <span>HYDERABAD NODE</span>
          <span className="text-[rgba(216,203,179,0.3)]">//</span>
          <span className="text-[#2F6BFF] font-semibold animate-pulse">SCROLL DOWN ↓</span>
        </div>
      </div>
    </section>
  );
}
