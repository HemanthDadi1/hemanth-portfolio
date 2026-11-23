"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function MammutThesisBlock() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="thesis"
      className="min-h-screen lg:h-screen lg:max-h-screen w-full flex flex-col justify-between [&>*:not(:first-child):not(:last-child)]:my-auto px-5 sm:px-10 max-w-7xl mx-auto snap-start relative box-border pt-24 pb-8 sm:pb-10 border-t border-[rgba(216,203,179,0.08)]"
    >
      {/* Top Header */}
      <div className="space-y-1.5 sm:space-y-2">
        <div className="flex items-center space-x-2 text-xs font-mono text-[#2F6BFF]">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
          <span>02. OPERATIONAL THESIS & FIRST PRINCIPLES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F5EFE6] tracking-tight">
          The Deterministic AI Axiom
        </h2>
        <p className="text-xs sm:text-sm text-[#A39985] font-mono max-w-3xl">
          Moving from unpredictable probabilistic generative hype to mathematically provable, human-verified industrial computation.
        </p>
      </div>

      {/* Middle Block 1: Signature Axiom Banner (Large & Impactful) */}
      <div className="p-4 sm:p-6 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.16)] border-l-4 border-l-[#2F6BFF] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)] my-1.5 sm:my-2">
        <div className="space-y-1.5">
          <div className="font-mono text-xs font-semibold text-[#2F6BFF] tracking-wider uppercase flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Core Operational Axiom</span>
          </div>
          <p className="text-xl sm:text-3xl lg:text-4xl font-display font-extrabold text-[#F5EFE6] leading-tight">
            &ldquo;AI reads. People confirm. Rules decide.&rdquo;
          </p>
          <p className="text-xs sm:text-sm text-[#A39985] font-sans max-w-3xl">
            Replacing generative LLM hallucinations with multimodal vision extraction, domain-expert signoffs, and exact mathematical code.
          </p>
        </div>

        <div className="flex items-center space-x-3 shrink-0 font-mono text-xs">
          <span className="px-3 py-1.5 rounded-lg bg-[#101114] text-[#D8CBB3] border border-[rgba(216,203,179,0.12)]">
            GROUNDED OUTPUTS
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-[#2F6BFF]/15 text-[#2F6BFF] border border-[#2F6BFF]/30 font-semibold">
            SOVEREIGN LEDGERS
          </span>
        </div>
      </div>

      {/* Middle Block 2: Bento Grid (Spacious & Detailed) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5 font-mono text-xs my-1 sm:my-2">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] space-y-2 hover:border-[#2F6BFF]/60 hover:shadow-[0_10px_30px_rgba(47,107,255,0.12)] transition-all">
          <div className="text-[#2F6BFF] font-bold text-xs">01. AI READS</div>
          <h3 className="text-sm sm:text-base font-display font-bold text-[#F5EFE6]">Multimodal Vision Schemas</h3>
          <p className="font-sans text-xs text-[#D8CBB3] leading-relaxed">
            Extracts unstructured mill certificates, receipts, and bills into strictly typed Pydantic models with schema validation.
          </p>
          <div className="pt-1.5 text-[11px] text-[#A39985] border-t border-[rgba(216,203,179,0.08)]">
            Gemini Multimodal • Pydantic • OCR Ingestion
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] space-y-2 hover:border-[#2F6BFF]/60 hover:shadow-[0_10px_30px_rgba(47,107,255,0.12)] transition-all">
          <div className="text-[#2F6BFF] font-bold text-xs">02. PEOPLE CONFIRM</div>
          <h3 className="text-sm sm:text-base font-display font-bold text-[#F5EFE6]">Sovereign Human Interlocks</h3>
          <p className="font-sans text-xs text-[#D8CBB3] leading-relaxed">
            Human officers retain absolute veto before irreversible customs filings. Authenticated with SHA-256 cryptographic audit logs.
          </p>
          <div className="pt-1.5 text-[11px] text-[#A39985] border-t border-[rgba(216,203,179,0.08)]">
            Cryptographic Audits • Sovereign Cloud (asia-south1)
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] space-y-2 hover:border-[#2F6BFF]/60 hover:shadow-[0_10px_30px_rgba(47,107,255,0.12)] transition-all">
          <div className="text-[#2F6BFF] font-bold text-xs">03. RULES DECIDE</div>
          <h3 className="text-sm sm:text-base font-display font-bold text-[#F5EFE6]">Deterministic Math Code</h3>
          <p className="font-sans text-xs text-[#D8CBB3] leading-relaxed">
            Formulas and scheduling run in isolated Python sandboxes, PuLP MILP, and Wasm dynamic programming—never generative text.
          </p>
          <div className="pt-1.5 text-[11px] text-[#A39985] border-t border-[rgba(216,203,179,0.08)]">
            Exact Math • PuLP MILP • Python Sandboxes
          </div>
        </div>
      </div>

      {/* Bottom Footer Telemetry Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 pb-1 border-t border-[rgba(216,203,179,0.1)] font-mono text-xs">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => scrollTo("work")}
            className="px-4 py-2 rounded-lg bg-[#181A20] hover:bg-[#22242C] text-[#2F6BFF] hover:text-white border border-[rgba(216,203,179,0.14)] font-medium transition-all flex items-center space-x-1.5 text-xs"
          >
            <span>Proceed to Deployments</span>
            <span>↓</span>
          </button>
        </div>

        <div className="flex items-center space-x-3 text-[#A39985]">
          <span>PAGE 02 / 06</span>
          <span className="text-[rgba(216,203,179,0.3)]">//</span>
          <span>CORE AXIOM</span>
          <span className="text-[rgba(216,203,179,0.3)]">//</span>
          <button
            onClick={() => scrollTo("work")}
            className="text-[#2F6BFF] font-semibold animate-pulse hover:underline flex items-center space-x-1"
          >
            <span>SCROLL DOWN ↓</span>
          </button>
        </div>
      </div>
    </section>
  );
}
