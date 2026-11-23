"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";

export default function MinimalHero() {
  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="space-y-8">
        {/* Top Status & Geolocation Badge */}
        <div className="inline-flex items-center space-x-2.5 px-3 py-1 rounded-full bg-[#262623] border border-[rgba(216,203,179,0.18)] text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-[#2F6BFF] animate-pulse" />
          <span className="text-[#D8CBB3]">AI SYSTEMS ARCHITECT & INDUSTRIAL TECH FOUNDER</span>
          <span className="text-[rgba(216,203,179,0.3)]">|</span>
          <span className="text-[#2F6BFF] font-semibold">HYDERABAD, IN</span>
        </div>

        {/* Executive Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-sans font-bold tracking-tight text-[#EFE8DC] leading-[1.1]">
            Hemanth Dadi
          </h1>
          <p className="text-xl sm:text-2xl font-sans font-medium text-[#D8CBB3] leading-relaxed max-w-3xl">
            Architecting <span className="text-[#EFE8DC] font-semibold underline decoration-[#2F6BFF] decoration-2 underline-offset-4">deterministic AI systems</span> and mathematical optimization for physical industries, enterprise supply chains, and complex services.
          </p>
        </div>

        {/* Current Roles / Dispatch Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs pt-2">
          <div className="p-3.5 rounded bg-[#242421] border border-[rgba(216,203,179,0.14)] space-y-1">
            <div className="text-[10px] text-[#AFA38C] uppercase">Current Engagement</div>
            <div className="text-sm font-bold text-[#EFE8DC]">Founding AI Engineer</div>
            <div className="text-[#2F6BFF] text-[11px]">Waylosa (Travel Intelligence)</div>
          </div>

          <div className="p-3.5 rounded bg-[#242421] border border-[rgba(216,203,179,0.14)] space-y-1">
            <div className="text-[10px] text-[#AFA38C] uppercase">Research Domain</div>
            <div className="text-sm font-bold text-[#EFE8DC]">Conformal UQ & Prognostics</div>
            <div className="text-[#D8CBB3] text-[11px]">NASA C-MAPSS / IOP 2026</div>
          </div>

          <div className="p-3.5 rounded bg-[#242421] border border-[rgba(216,203,179,0.14)] space-y-1">
            <div className="text-[10px] text-[#AFA38C] uppercase">Sovereign Build</div>
            <div className="text-sm font-bold text-[#EFE8DC]">CImEx Compliance</div>
            <div className="text-[#D8CBB3] text-[11px]">EU CBAM Sovereign Ledger</div>
          </div>
        </div>

        {/* Signature Axiom Box */}
        <div className="p-4 rounded-md bg-[#242421] border-l-2 border-l-[#2F6BFF] border-y border-r border-[rgba(216,203,179,0.14)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-mono text-xs font-semibold text-[#2F6BFF] tracking-wider uppercase flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Signature Engineering Axiom</span>
            </div>
            <p className="text-base sm:text-lg font-mono font-medium text-[#EFE8DC]">
              &ldquo;AI reads. People confirm. Rules decide.&rdquo;
            </p>
          </div>
          <span className="text-[11px] font-mono text-[#AFA38C] bg-[#1E1E1C] px-3 py-1.5 rounded border border-[rgba(216,203,179,0.12)] shrink-0">
            ZERO HALLUCINATION
          </span>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
          <a
            href="#work"
            className="px-5 py-2.5 rounded-sm bg-[#2F6BFF] text-white font-semibold hover:bg-[#4A7FFF] transition-all flex items-center space-x-2 shadow-[0_0_15px_rgba(47,107,255,0.4)]"
          >
            <span>SELECTED SYSTEMS</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-sm bg-[#262623] border border-[rgba(216,203,179,0.2)] text-[#D8CBB3] hover:border-[#2F6BFF]/60 hover:text-white transition-all flex items-center space-x-2"
          >
            <span>INITIATE TRANSMISSION</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
