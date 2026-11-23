"use client";

import React, { useState } from "react";
import { Scan, ShieldCheck, Binary, Lock, Unlock } from "lucide-react";

export default function PhilosophyBento() {
  const [locked, setLocked] = useState(true);
  const [ocrRegion, setOcrRegion] = useState<"heat" | "cev" | "emissions">("emissions");
  const [calcInput, setCalcInput] = useState<number>(2.254);

  // Mouse spotlight tracker
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="thesis" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="flex items-center space-x-2 text-xs font-mono text-[#2F6BFF]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2F6BFF]" />
          <span>01. PHILOSOPHICAL FOUNDATION // ARCHITECTURE THESIS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#EFE8DC] tracking-tight">
          AI reads. People confirm. Rules decide.
        </h2>
        <p className="text-sm text-[#AFA38C] font-mono max-w-2xl">
          Deterministic systems over generative hype. How we prevent multi-million euro compliance penalties and factory downtime in high-stakes environments.
        </p>
      </div>

      {/* 3-Card Interactive Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* CARD 01: AI READS */}
        <div
          onMouseMove={handleMouseMove}
          className="spotlight-card p-6 rounded-lg bg-[#242421] border border-[rgba(216,203,179,0.14)] hover:border-[#2F6BFF]/50 transition-all flex flex-col justify-between group"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-[#2F6BFF] font-bold">STAGE 01</span>
              <span className="px-2 py-0.5 rounded bg-[#1E1E1C] border border-[rgba(216,203,179,0.14)] text-[#D8CBB3] text-[10px]">
                MULTIMODAL EXTRACTION
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl font-sans font-bold text-[#EFE8DC] group-hover:text-[#2F6BFF] transition-colors">
                AI Reads Unstructured Reality
              </h3>
              <p className="text-xs text-[#AFA38C] leading-relaxed font-sans">
                Industrial plants run on messy paperwork: handwritten heat logs, scanned PDF mill test certificates, weighbridge tickets, and ERP invoices. Multimodal LLMs excel at vision-to-structured parsing—extracting numbers without hallucinating ungrounded keys.
              </p>
            </div>

            {/* Interactive OCR Scanner Visualizer */}
            <div className="p-3.5 rounded bg-[#1A1A18] border border-[rgba(216,203,179,0.12)] space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px] text-[#AFA38C] pb-1 border-b border-[rgba(216,203,179,0.08)]">
                <span className="flex items-center space-x-1">
                  <Scan className="w-3.5 h-3.5 text-[#2F6BFF]" />
                  <span>OCR SCANNER HUD</span>
                </span>
                <span className="text-[#2F6BFF]">STATUS: CALIBRATED</span>
              </div>

              {/* Selector Tabs */}
              <div className="grid grid-cols-3 gap-1.5 text-[10px]">
                <button
                  onClick={() => setOcrRegion("emissions")}
                  className={`py-1 rounded text-center transition-all ${
                    ocrRegion === "emissions"
                      ? "bg-[#2F6BFF]/20 text-[#2F6BFF] border border-[#2F6BFF]/50"
                      : "bg-[#262623] text-[#AFA38C] hover:text-white"
                  }`}
                >
                  Direct CO₂
                </button>
                <button
                  onClick={() => setOcrRegion("cev")}
                  className={`py-1 rounded text-center transition-all ${
                    ocrRegion === "cev"
                      ? "bg-[#2F6BFF]/20 text-[#2F6BFF] border border-[#2F6BFF]/50"
                      : "bg-[#262623] text-[#AFA38C] hover:text-white"
                  }`}
                >
                  Steel CEV
                </button>
                <button
                  onClick={() => setOcrRegion("heat")}
                  className={`py-1 rounded text-center transition-all ${
                    ocrRegion === "heat"
                      ? "bg-[#2F6BFF]/20 text-[#2F6BFF] border border-[#2F6BFF]/50"
                      : "bg-[#262623] text-[#AFA38C] hover:text-white"
                  }`}
                >
                  Heat Batch
                </button>
              </div>

              {/* Dynamic Region Output */}
              <div className="p-2.5 rounded bg-[#242421] border border-[rgba(216,203,179,0.1)] space-y-1 text-[11px]">
                {ocrRegion === "emissions" && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-[#AFA38C]">Extracted Scope 1:</span>
                      <span className="text-[#2F6BFF] font-semibold">2,254 kg CO₂/t</span>
                    </div>
                    <div className="flex justify-between text-[10px] text-[#AFA38C]">
                      <span>Bounding Box:</span>
                      <span className="text-[#D8CBB3]">[x: 124, y: 840, w: 210, h: 42] (99.4%)</span>
                    </div>
                  </>
                )}
                {ocrRegion === "cev" && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-[#AFA38C]">Carbon Equivalent:</span>
                      <span className="text-[#2F6BFF] font-semibold">0.42% (CEV Formula)</span>
                    </div>
                    <div className="flex justify-between text-[10px] text-[#AFA38C]">
                      <span>Spectrometer Bounding:</span>
                      <span className="text-[#D8CBB3]">C:0.18%, Mn:1.24%, Cr:0.15% (99.8%)</span>
                    </div>
                  </>
                )}
                {ocrRegion === "heat" && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-[#AFA38C]">Ladle Heat Stamp:</span>
                      <span className="text-[#2F6BFF] font-semibold">#IN-HYD-7731-EAF</span>
                    </div>
                    <div className="flex justify-between text-[10px] text-[#AFA38C]">
                      <span>Weighbridge Slip:</span>
                      <span className="text-[#D8CBB3]">Gross: 32,450 kg (99.1%)</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[rgba(216,203,179,0.08)] font-mono text-[11px] text-[#AFA38C] flex items-center justify-between">
            <span>Model: Gemini Multimodal Vision</span>
            <span className="text-[#2F6BFF]">Pydantic Guard</span>
          </div>
        </div>

        {/* CARD 02: PEOPLE CONFIRM */}
        <div
          onMouseMove={handleMouseMove}
          className="spotlight-card p-6 rounded-lg bg-[#242421] border border-[rgba(216,203,179,0.14)] hover:border-[#2F6BFF]/50 transition-all flex flex-col justify-between group"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-[#2F6BFF] font-bold">STAGE 02</span>
              <span className="px-2 py-0.5 rounded bg-[#1E1E1C] border border-[rgba(216,203,179,0.14)] text-[#D8CBB3] text-[10px]">
                HUMAN-IN-THE-LOOP
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl font-sans font-bold text-[#EFE8DC] group-hover:text-[#2F6BFF] transition-colors">
                People Hold Sovereign Authority
              </h3>
              <p className="text-xs text-[#AFA38C] leading-relaxed font-sans">
                Never let an automated system submit customs declarations or declare zero carbon liability autonomously. Every extraction routes through a calibrated review portal where human engineers retain absolute veto power.
              </p>
            </div>

            {/* Interactive Verification Toggle Lock */}
            <div className="p-3.5 rounded bg-[#1A1A18] border border-[rgba(216,203,179,0.12)] space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px] text-[#AFA38C] pb-1 border-b border-[rgba(216,203,179,0.08)]">
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2F6BFF]" />
                  <span>SECURITY INTERLOCK</span>
                </span>
                <span className={locked ? "text-[#D8CBB3]" : "text-[#2F6BFF]"}>
                  {locked ? "GATE: CLOSED" : "GATE: SIGNED"}
                </span>
              </div>

              <div className="p-3 rounded bg-[#242421] border border-[rgba(216,203,179,0.1)] flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#EFE8DC] font-semibold">Regulatory Sign-Off Gate</div>
                  <div className="text-[10px] text-[#AFA38C]">EU CBAM Article 14 Verified Declaration</div>
                </div>

                <button
                  onClick={() => setLocked(!locked)}
                  className={`p-2 rounded transition-all flex items-center space-x-1.5 ${
                    locked
                      ? "bg-[#262623] text-[#D8CBB3] border border-[rgba(216,203,179,0.2)] hover:border-[#2F6BFF]/40"
                      : "bg-[#2F6BFF]/20 text-[#2F6BFF] border border-[#2F6BFF]/50"
                  }`}
                >
                  {locked ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
                </button>
              </div>

              <div className="text-[10px] text-[#AFA38C] space-y-1">
                <div className="flex justify-between">
                  <span>Cryptographic Signer:</span>
                  <span className="text-[#EFE8DC]">HD-OFFICER-HYD-01</span>
                </div>
                <div className="flex justify-between">
                  <span>Audit Trail Hash:</span>
                  <span className="text-[#2F6BFF] truncate max-w-[140px]">
                    0x7f4e8912cb90...3a1
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[rgba(216,203,179,0.08)] font-mono text-[11px] text-[#AFA38C] flex items-center justify-between">
            <span>Protocol: Sovereign Review Gate</span>
            <span className="text-[#2F6BFF]">Zero Unsupervised Drift</span>
          </div>
        </div>

        {/* CARD 03: RULES DECIDE */}
        <div
          onMouseMove={handleMouseMove}
          className="spotlight-card p-6 rounded-lg bg-[#242421] border border-[rgba(216,203,179,0.14)] hover:border-[#2F6BFF]/50 transition-all flex flex-col justify-between group"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-[#2F6BFF] font-bold">STAGE 03</span>
              <span className="px-2 py-0.5 rounded bg-[#1E1E1C] border border-[rgba(216,203,179,0.14)] text-[#D8CBB3] text-[10px]">
                DETERMINISTIC MATH
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl font-sans font-bold text-[#EFE8DC] group-hover:text-[#2F6BFF] transition-colors">
                Rules Decide with 100% Math
              </h3>
              <p className="text-xs text-[#AFA38C] leading-relaxed font-sans">
                Never ask an LLM to add up carbon emissions or compute tariffs. Mathematical formulas, Mixed-Integer Linear Programs (PuLP), and stoichiometric equations execute in sandboxed Python or Pyodide WebAssembly with zero floating-point hallucination.
              </p>
            </div>

            {/* Interactive Live Formula Calculator */}
            <div className="p-3.5 rounded bg-[#1A1A18] border border-[rgba(216,203,179,0.12)] space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px] text-[#AFA38C] pb-1 border-b border-[rgba(216,203,179,0.08)]">
                <span className="flex items-center space-x-1">
                  <Binary className="w-3.5 h-3.5 text-[#2F6BFF]" />
                  <span>ANNEX V MATH CORE</span>
                </span>
                <span className="text-[#2F6BFF]">SANDBOX: ISOLATED</span>
              </div>

              <div className="p-2 rounded bg-[#242421] border border-[rgba(216,203,179,0.1)] space-y-2">
                <div className="text-[10px] text-[#AFA38C] flex justify-between">
                  <span>Specific Embedded Carbon:</span>
                  <span className="text-[#EFE8DC] font-bold">{calcInput.toFixed(3)} tCO₂/t</span>
                </div>
                <input
                  type="range"
                  min="0.800"
                  max="4.500"
                  step="0.05"
                  value={calcInput}
                  onChange={(e) => setCalcInput(parseFloat(e.target.value))}
                  className="w-full accent-[#2F6BFF] h-1 bg-[#1E1E1C] rounded cursor-pointer"
                />
                <div className="flex justify-between items-center text-[10px] text-[#AFA38C] pt-1 border-t border-[rgba(216,203,179,0.08)]">
                  <span>EU ETS Free Allowance Delta:</span>
                  <span className="text-[#2F6BFF] font-mono font-bold">
                    €{(Math.max(0, calcInput - 1.34) * 85 * 1000).toLocaleString(undefined, { maximumFractionDigits: 0 })} / 1,000t
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[rgba(216,203,179,0.08)] font-mono text-[11px] text-[#AFA38C] flex items-center justify-between">
            <span>Runtime: Pyodide Wasm / Cloud Run</span>
            <span className="text-[#2F6BFF]">Deterministic Annex V</span>
          </div>
        </div>
      </div>
    </section>
  );
}
