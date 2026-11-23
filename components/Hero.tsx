"use client";

import React from "react";
import { ArrowUpRight, ShieldCheck, ArrowDown } from "lucide-react";
import TelemetryWidget from "./TelemetryWidget";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center">
      {/* Background CAD Lines & Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2F6BFF]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#D8CBB3]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Mission, Headline & Direct Axiom */}
        <div className="lg:col-span-7 space-y-6">
          {/* Top HUD Pill */}
          <div className="inline-flex items-center space-x-2.5 px-3 py-1 rounded-full bg-[#262623] border border-[rgba(216,203,179,0.18)] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#2F6BFF] animate-pulse" />
            <span className="text-[#D8CBB3]">FORWARD DEPLOYED AI SYSTEMS ARCHITECT</span>
            <span className="text-[rgba(216,203,179,0.3)]">|</span>
            <span className="text-[#2F6BFF] font-semibold">HYDERABAD, IN</span>
          </div>

          {/* Kinetic Industrial Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-[#EFE8DC] leading-[1.08]">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F6BFF] via-[#EFE8DC] to-[#D8CBB3]">Deterministic AI</span> for Heavy Industry & Global Trade.
          </h1>

          {/* Signature Axiom Callout */}
          <div className="p-4 rounded-md bg-[#242421] border-l-2 border-l-[#2F6BFF] border-y border-r border-[rgba(216,203,179,0.14)] space-y-1.5">
            <div className="font-mono text-xs font-semibold text-[#2F6BFF] tracking-wider uppercase flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Core Engineering Axiom</span>
            </div>
            <p className="text-lg font-mono font-medium text-[#EFE8DC] tracking-tight">
              &ldquo;AI reads. People confirm. Rules decide.&rdquo;
            </p>
            <p className="text-xs text-[#AFA38C] font-sans leading-relaxed">
              Eliminating probabilistic hallucinations in high-stakes environments. Replacing unbounded LLM outputs with multimodal extraction, sovereign human verification, and 100% auditable stoichiometric and mixed-integer code.
            </p>
          </div>

          {/* Key Metric HUD Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono">
            <div className="p-2.5 rounded bg-[#262623] border border-[rgba(216,203,179,0.14)]">
              <div className="text-[10px] text-[#AFA38C] uppercase">Math Accuracy</div>
              <div className="text-base font-bold text-[#2F6BFF]">100%</div>
              <div className="text-[10px] text-[#AFA38C]">Deterministic Annex V</div>
            </div>
            <div className="p-2.5 rounded bg-[#262623] border border-[rgba(216,203,179,0.14)]">
              <div className="text-[10px] text-[#AFA38C] uppercase">Tariff Saved</div>
              <div className="text-base font-bold text-[#EFE8DC]">€849K+</div>
              <div className="text-[10px] text-[#AFA38C]">Per 1,000t steel batch</div>
            </div>
            <div className="p-2.5 rounded bg-[#262623] border border-[rgba(216,203,179,0.14)]">
              <div className="text-[10px] text-[#AFA38C] uppercase">UQ Coverage</div>
              <div className="text-base font-bold text-[#2F6BFF]">91–92%</div>
              <div className="text-[10px] text-[#AFA38C]">Conformal CQR Bounds</div>
            </div>
            <div className="p-2.5 rounded bg-[#262623] border border-[rgba(216,203,179,0.14)]">
              <div className="text-[10px] text-[#AFA38C] uppercase">Coordinates</div>
              <div className="text-xs font-bold text-[#EFE8DC] pt-1">17.385° N</div>
              <div className="text-[10px] text-[#AFA38C]">78.486° E (HYD)</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#flagship"
              className="px-6 py-3 rounded-sm bg-[#2F6BFF] text-white font-mono font-semibold text-xs tracking-wider uppercase hover:bg-[#4A7FFF] transition-all flex items-center space-x-2 shadow-[0_0_20px_rgba(47,107,255,0.4)]"
            >
              <span>EXPLORE FLAGSHIP BUILD (CIMEX)</span>
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-sm bg-[#262623] border border-[rgba(216,203,179,0.22)] text-[#EFE8DC] font-mono font-medium text-xs tracking-wider uppercase hover:border-[#2F6BFF]/60 hover:text-white transition-all flex items-center space-x-2"
            >
              <span>INITIATE TRANSMISSION</span>
              <ArrowUpRight className="w-4 h-4 text-[#AFA38C]" />
            </a>
          </div>
        </div>

        {/* Right Column: Live Telemetry Widget */}
        <div className="lg:col-span-5">
          <TelemetryWidget />
        </div>
      </div>
    </section>
  );
}
