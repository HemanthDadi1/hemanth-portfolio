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
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 max-w-6xl mx-auto snap-start relative box-border pt-20 pb-8"
    >
      <div className="space-y-4 sm:space-y-5 my-auto">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center space-x-2.5 px-3 py-1 rounded-full bg-[#181A20] border border-[rgba(216,203,179,0.16)] text-xs font-mono w-fit">
          <span className="w-2 h-2 rounded-full bg-[#2F6BFF] animate-pulse"></span>
          <span className="text-[#D8CBB3]">FOUNDING AI ENGINEER & RESEARCHER</span>
          <span className="text-[rgba(216,203,179,0.3)]">//</span>
          <span className="text-[#2F6BFF] font-semibold">17.3850° N, 78.4867° E</span>
        </div>

        {/* Editorial Title */}
        <div className="space-y-2.5">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-[#F5EFE6] leading-[1.08]">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F6BFF] via-[#F5EFE6] to-[#D8CBB3]">Deterministic AI</span> for Heavy Industry.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#D8CBB3] font-normal leading-relaxed max-w-2xl">
            I engineer zero-hallucination inference pipelines, mathematical operations research, and sovereign human-verified systems for physical manufacturing, supply chains, and travel.
          </p>
        </div>

        {/* 3 Highlight Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs pt-1">
          <div className="p-3.5 rounded-xl bg-[#181A20] border border-[rgba(216,203,179,0.12)] space-y-1 hover:border-[#2F6BFF]/40 transition-colors">
            <div className="text-[10px] text-[#A39985] uppercase">Active Engagement</div>
            <div className="text-xs sm:text-sm font-bold text-[#F5EFE6]">Founding AI Engineer</div>
            <div className="text-[#2F6BFF]">Waylosa (Travel AI Engine)</div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#181A20] border border-[rgba(216,203,179,0.12)] space-y-1 hover:border-[#2F6BFF]/40 transition-colors">
            <div className="text-[10px] text-[#A39985] uppercase">Peer-Reviewed Research</div>
            <div className="text-xs sm:text-sm font-bold text-[#F5EFE6]">Conformal UQ (CQR)</div>
            <div className="text-[#D8CBB3]">NASA C-MAPSS / IOP 2026</div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#181A20] border border-[rgba(216,203,179,0.12)] space-y-1 hover:border-[#2F6BFF]/40 transition-colors">
            <div className="text-[10px] text-[#A39985] uppercase">Sovereign Build</div>
            <div className="text-xs sm:text-sm font-bold text-[#F5EFE6]">CImEx Compliance</div>
            <div className="text-[#D8CBB3]">EU CBAM Sovereign Ledger</div>
          </div>
        </div>

        {/* Quick Action Row */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center space-x-3 font-mono text-xs">
            <button
              onClick={() => scrollTo("work")}
              className="px-4 py-2 rounded-xl bg-[#2F6BFF] hover:bg-[#4D82FF] text-white font-semibold transition-all shadow-[0_0_20px_rgba(47,107,255,0.4)] flex items-center space-x-2"
            >
              <span>Explore Deployments</span>
              <span>↓</span>
            </button>
            <button
              onClick={() => scrollTo("thesis")}
              className="px-4 py-2 rounded-xl bg-[#181A20] hover:bg-[#22242C] text-[#D8CBB3] hover:text-white border border-[rgba(216,203,179,0.14)] font-medium transition-all"
            >
              Read Core Thesis
            </button>
          </div>

          <div className="hidden sm:flex items-center space-x-2 font-mono text-[11px] text-[#A39985]">
            <span>PAGE 01 / 06</span>
            <span className="text-[rgba(216,203,179,0.3)]">•</span>
            <span className="text-[#2F6BFF] font-semibold">SCROLL DOWN ↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
