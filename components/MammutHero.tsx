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
      className="min-h-screen lg:h-screen lg:max-h-screen w-full flex flex-col justify-between px-4 sm:px-8 max-w-6xl mx-auto snap-start relative box-border pt-20 pb-6 sm:pb-8"
    >
      {/* Top Block: Eyebrow + Large Commanding Headline + Lead Paragraph */}
      <div className="space-y-3 sm:space-y-4">
        <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#181A20] border border-[rgba(216,203,179,0.16)] text-xs font-mono w-fit">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
          <span className="text-[#D8CBB3]">FOUNDING AI ENGINEER & RESEARCHER</span>
          <span className="text-[rgba(216,203,179,0.3)]">//</span>
          <span className="text-[#2F6BFF] font-semibold">17.3850° N, 78.4867° E</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-[#F5EFE6] leading-[1.04]">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F6BFF] via-[#F5EFE6] to-[#D8CBB3]">Deterministic AI</span> for Heavy Industry.
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-[#D8CBB3] font-normal leading-relaxed max-w-4xl">
            I engineer grounded inference pipelines, mathematical operations research, and sovereign human-verified systems for physical manufacturing, supply chains, and travel.
          </p>
        </div>
      </div>

      {/* Middle Block: 3 Generously Spaced Highlight Pillar Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 font-mono text-xs my-2 sm:my-3">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] space-y-1.5 hover:border-[#2F6BFF]/60 hover:shadow-[0_10px_30px_rgba(47,107,255,0.12)] transition-all">
          <div className="text-[10px] text-[#A39985] uppercase tracking-wider">Active Engagement</div>
          <div className="text-base sm:text-lg font-display font-bold text-[#F5EFE6]">Founding AI Engineer</div>
          <div className="text-xs sm:text-sm text-[#2F6BFF] font-semibold">Waylosa (Travel AI Engine)</div>
          <p className="text-xs text-[#A39985] font-sans pt-0.5">
            Replaced LLM hallucinations with 30ms exact dynamic programming scheduling.
          </p>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] space-y-1.5 hover:border-[#2F6BFF]/60 hover:shadow-[0_10px_30px_rgba(47,107,255,0.12)] transition-all">
          <div className="text-[10px] text-[#A39985] uppercase tracking-wider">Research Under Review</div>
          <div className="text-base sm:text-lg font-display font-bold text-[#F5EFE6]">Conformal UQ (CQR)</div>
          <div className="text-xs sm:text-sm text-[#D8CBB3] font-semibold">NASA C-MAPSS FD004 / 2026</div>
          <p className="text-xs text-[#A39985] font-sans pt-0.5">
            Engine-level conformal coverage, measured under severe operating shifts.
          </p>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] space-y-1.5 hover:border-[#2F6BFF]/60 hover:shadow-[0_10px_30px_rgba(47,107,255,0.12)] transition-all">
          <div className="text-[10px] text-[#A39985] uppercase tracking-wider">Sovereign Build</div>
          <div className="text-base sm:text-lg font-display font-bold text-[#F5EFE6]">CImEx Compliance</div>
          <div className="text-xs sm:text-sm text-[#D8CBB3] font-semibold">EU CBAM Sovereign Ledger</div>
          <p className="text-xs text-[#A39985] font-sans pt-0.5">
            On a sample plant, verified supplier data cut estimated emissions from 4.38 to 2.25 tCO₂/t.
          </p>
        </div>
      </div>

      {/* Bottom Block: Quick Action Buttons & Telemetry Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 pb-1 border-t border-[rgba(216,203,179,0.1)]">
        <div className="flex items-center space-x-3 font-mono text-xs">
          <button
            onClick={() => scrollTo("work")}
            className="px-5 py-2.5 rounded-xl bg-[#2F6BFF] hover:bg-[#4D82FF] text-white font-semibold transition-all shadow-[0_0_20px_rgba(47,107,255,0.4)] flex items-center space-x-2 text-xs sm:text-sm"
          >
            <span>Explore Deployments</span>
            <span>↓</span>
          </button>
          <button
            onClick={() => scrollTo("thesis")}
            className="px-5 py-2.5 rounded-xl bg-[#181A20] hover:bg-[#22242C] text-[#D8CBB3] hover:text-white border border-[rgba(216,203,179,0.14)] font-medium transition-all text-xs sm:text-sm"
          >
            Read Core Thesis
          </button>
        </div>

        <div className="flex items-center space-x-3 font-mono text-xs text-[#A39985]">
          <span>PAGE 01 / 06</span>
          <span className="text-[rgba(216,203,179,0.3)]">//</span>
          <span>HYDERABAD NODE</span>
          <span className="text-[rgba(216,203,179,0.3)]">//</span>
          <button
            onClick={() => scrollTo("thesis")}
            className="text-[#2F6BFF] font-semibold animate-pulse hover:underline flex items-center space-x-1"
          >
            <span>SCROLL DOWN ↓</span>
          </button>
        </div>
      </div>
    </section>
  );
}
