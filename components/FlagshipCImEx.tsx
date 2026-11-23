"use client";

import React from "react";
import { ExternalLink, Github, Shield, Server, Cpu, Flame } from "lucide-react";
import CBAMCalculator from "./CBAMCalculator";

export default function FlagshipCImEx() {
  return (
    <section id="flagship" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#2F6BFF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F6BFF]" />
            <span>02. FEATURED FLAGSHIP BUILD // PRODUCTION PLATFORM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#EFE8DC] tracking-tight">
            CImEx Compliance
          </h2>
          <p className="text-sm text-[#AFA38C] font-mono max-w-2xl">
            AI-powered EU CBAM trade compliance & verified sovereign carbon ledger for Indian steel and fastener exporters.
          </p>
        </div>

        {/* Live Links */}
        <div className="flex items-center space-x-3 font-mono text-xs">
          <a
            href="https://cimex-compliance.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-sm bg-[#2F6BFF] text-white font-semibold hover:bg-[#4A7FFF] transition-all flex items-center space-x-1.5 shadow-[0_0_15px_rgba(47,107,255,0.4)]"
          >
            <span>LAUNCH APP</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://github.com/HemanthDadi1/CImEx-Compliance"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-sm bg-[#262623] border border-[rgba(216,203,179,0.18)] text-[#D8CBB3] hover:border-[#2F6BFF]/50 hover:text-white transition-all flex items-center space-x-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>REPOSITORY</span>
          </a>
        </div>
      </div>

      {/* Main Flagship Showcase Card */}
      <div className="rounded-xl bg-[#242421] border border-[rgba(216,203,179,0.16)] p-6 sm:p-8 space-y-8 backdrop-blur-xl relative overflow-hidden">
        {/* 4 HUD Stat Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-[#1A1A18] border border-[rgba(216,203,179,0.14)] relative overflow-hidden group hover:border-[#2F6BFF]/50 transition-colors">
            <div className="text-xs font-mono text-[#AFA38C] mb-1 flex items-center justify-between">
              <span>EMISSIONS DROP</span>
              <Flame className="w-3.5 h-3.5 text-[#2F6BFF]" />
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-[#2F6BFF]">
              -59%
            </div>
            <div className="text-[11px] font-mono text-[#AFA38C] mt-1">
              4.38 → 2.254 tCO₂ / tonne verified via scrap EAF optimization
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[#1A1A18] border border-[rgba(216,203,179,0.14)] relative overflow-hidden group hover:border-[#2F6BFF]/50 transition-colors">
            <div className="text-xs font-mono text-[#AFA38C] mb-1 flex items-center justify-between">
              <span>TARIFF LIABILITY SAVED</span>
              <Shield className="w-3.5 h-3.5 text-[#D8CBB3]" />
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-[#EFE8DC]">
              €849,075
            </div>
            <div className="text-[11px] font-mono text-[#AFA38C] mt-1">
              Saved per 1,000t exported steel batch against default EU penalty
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[#1A1A18] border border-[rgba(216,203,179,0.14)] relative overflow-hidden group hover:border-[#2F6BFF]/50 transition-colors">
            <div className="text-xs font-mono text-[#AFA38C] mb-1 flex items-center justify-between">
              <span>CALCULATION ENGINE</span>
              <Cpu className="w-3.5 h-3.5 text-[#2F6BFF]" />
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-[#2F6BFF]">
              100%
            </div>
            <div className="text-[11px] font-mono text-[#AFA38C] mt-1">
              Deterministic Annex V stoichiometry in isolated Python/Wasm
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[#1A1A18] border border-[rgba(216,203,179,0.14)] relative overflow-hidden group hover:border-[#2F6BFF]/50 transition-colors">
            <div className="text-xs font-mono text-[#AFA38C] mb-1 flex items-center justify-between">
              <span>SOVEREIGN ARCHITECTURE</span>
              <Server className="w-3.5 h-3.5 text-[#D8CBB3]" />
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-[#D8CBB3]">
              asia-south1
            </div>
            <div className="text-[11px] font-mono text-[#AFA38C] mt-1">
              GCP Mumbai cloud residency compliant with Indian export data laws
            </div>
          </div>
        </div>

        {/* Narrative & Industrial Problem Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-sans font-bold text-[#EFE8DC]">
              The €10 Billion EU CBAM Cliff for Indian Heavy Industry
            </h3>
            <p className="text-xs sm:text-sm text-[#D8CBB3] leading-relaxed font-sans">
              Starting January 2026, the European Union Carbon Border Adjustment Mechanism (CBAM) imposes severe financial penalties on imports of iron, steel, aluminum, and fertilizers. Exporters who cannot provide auditable, primary mill emission ledgers are slapped with default European benchmark penalties—crushing operating margins by up to 35%.
            </p>
            <p className="text-xs sm:text-sm text-[#AFA38C] leading-relaxed font-sans">
              Generic LLM wrappers fail catastrophically: they hallucinate stoichiometric coefficients, invent fictional heat numbers, and violate EU Annex V regulatory guidelines.
            </p>
          </div>

          {/* Right: Embedded Interactive CBAM Calculator */}
          <div className="lg:col-span-7">
            <CBAMCalculator />
          </div>
        </div>
      </div>
    </section>
  );
}
