"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function MammutThesisBlock() {
  return (
    <section
      id="thesis"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 max-w-6xl mx-auto snap-start relative box-border pt-20 pb-8 border-t border-[rgba(216,203,179,0.08)]"
    >
      <div className="space-y-4 sm:space-y-5 my-auto">
        {/* Section Eyebrow */}
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#2F6BFF]">
            <span className="w-2 h-2 rounded-full bg-[#2F6BFF]"></span>
            <span>02. OPERATIONAL THESIS & FIRST PRINCIPLES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#F5EFE6] tracking-tight">
            The Deterministic AI Axiom
          </h2>
          <p className="text-xs sm:text-sm text-[#A39985] font-mono max-w-2xl">
            Moving from unpredictable generative probabilistic hype to mathematically provable, human-verified industrial computation.
          </p>
        </div>

        {/* Signature Axiom Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] border-l-4 border-l-[#2F6BFF] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
          <div className="space-y-1.5">
            <div className="font-mono text-xs font-semibold text-[#2F6BFF] tracking-wider uppercase flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Core Operational Axiom</span>
            </div>
            <p className="text-xl sm:text-3xl font-display font-extrabold text-[#F5EFE6]">
              &ldquo;AI reads. People confirm. Rules decide.&rdquo;
            </p>
            <p className="text-xs text-[#A39985] font-sans">
              Replacing generative LLM hallucinations with multimodal vision extraction, domain-expert signoffs, and exact mathematical code.
            </p>
          </div>

          <div className="flex items-center space-x-2.5 shrink-0 font-mono text-xs">
            <span className="px-2.5 py-1 rounded-lg bg-[#101114] text-[#D8CBB3] border border-[rgba(216,203,179,0.12)]">
              ZERO HALLUCINATION
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-[#2F6BFF]/15 text-[#2F6BFF] border border-[#2F6BFF]/30 font-semibold">
              SOVEREIGN LEDGERS
            </span>
          </div>
        </div>

        {/* Bento Grid: The 3 Operational Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 font-mono text-xs">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.12)] space-y-1.5 hover:border-[#2F6BFF]/40 transition-colors">
            <div className="text-[#2F6BFF] font-bold text-xs">01. AI READS</div>
            <h3 className="text-sm sm:text-base font-display font-bold text-[#F5EFE6]">Multimodal Vision Schemas</h3>
            <p className="font-sans text-xs text-[#D8CBB3] leading-relaxed">
              Extracts unstructured mill certificates, receipts, and bills into strictly typed Pydantic models with zero hallucination.
            </p>
            <div className="pt-1.5 text-[10px] text-[#A39985]">Gemini Multimodal • Pydantic • OCR Ingestion</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.12)] space-y-1.5 hover:border-[#2F6BFF]/40 transition-colors">
            <div className="text-[#2F6BFF] font-bold text-xs">02. PEOPLE CONFIRM</div>
            <h3 className="text-sm sm:text-base font-display font-bold text-[#F5EFE6]">Sovereign Human Interlocks</h3>
            <p className="font-sans text-xs text-[#D8CBB3] leading-relaxed">
              Human officers retain absolute veto before irreversible customs filings. Authenticated with SHA-256 cryptographic audit logs.
            </p>
            <div className="pt-1.5 text-[10px] text-[#A39985]">Cryptographic Audits • Sovereign Cloud</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.12)] space-y-1.5 hover:border-[#2F6BFF]/40 transition-colors">
            <div className="text-[#2F6BFF] font-bold text-xs">03. RULES DECIDE</div>
            <h3 className="text-sm sm:text-base font-display font-bold text-[#F5EFE6]">Deterministic Math Code</h3>
            <p className="font-sans text-xs text-[#D8CBB3] leading-relaxed">
              Formulas and scheduling run in isolated Python sandboxes, PuLP MILP, and Wasm dynamic programming—never generative text.
            </p>
            <div className="pt-1.5 text-[10px] text-[#A39985]">Exact Math • PuLP MILP • Python Sandboxes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
