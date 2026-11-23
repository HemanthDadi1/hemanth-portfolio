"use client";

import React, { useState } from "react";

interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: "01",
    title: "Multimodal Vision-to-ERP Ingestion",
    description:
      "Transforming unstructured physical-world artifacts—scanned mill test certificates, weighbridge receipts, bill of ladings, and handwritten dispatch records—into strongly typed Pydantic models with zero hallucination. Directly integrating into enterprise SAP FI/CO, Procure-to-Pay (P2P), and PostgreSQL ledgers.",
    tags: ["Gemini Multimodal", "Pydantic Schemas", "SAP FI/CO Integration"],
  },
  {
    id: "02",
    title: "Sovereign Human-in-the-Loop Interlocks",
    description:
      "Autonomous systems must never submit regulatory declarations or trigger irreversible factory downtime without sovereign oversight. I build air-gapped verification gates where human officers retain absolute veto power, authenticated by SHA-256 cryptographic audit logs.",
    tags: ["Cryptographic Audits", "Role-Based Gates", "Sovereign Cloud (asia-south1)"],
  },
  {
    id: "03",
    title: "Exact Mathematical Operations Research",
    description:
      "Eliminating LLM math hallucinations completely. All scheduling constraints, fleet overhaul allocations, and stoichiometric carbon math run in isolated Python sandboxes, Mixed-Integer Linear Programming (PuLP), and exact dynamic programming.",
    tags: ["PuLP (MILP)", "Exact Dynamic Programming", "Pyodide (Wasm)"],
  },
  {
    id: "04",
    title: "Calibrated Uncertainty Quantification (UQ)",
    description:
      "Point predictions fail catastrophically under non-stationary operating shifts. I develop calibrated conformal prediction intervals (CQR) that provide statistical coverage guarantees engine-by-engine, mitigating critical downtime.",
    tags: ["Conformal Prediction (CQR)", "Distribution Shift Modeling", "NASA C-MAPSS FD004"],
  },
];

export default function CapabilitiesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="capabilities"
      className="min-h-screen w-full flex flex-col justify-between px-4 sm:px-8 max-w-6xl mx-auto snap-start relative box-border pt-24 pb-8 sm:pb-12 border-t border-[rgba(216,203,179,0.08)]"
    >
      {/* Top Header */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-xs font-mono text-[#2F6BFF]">
          <span className="w-2 h-2 rounded-full bg-[#2F6BFF]"></span>
          <span>04. ARCHITECTURAL CAPABILITIES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[#F5EFE6] tracking-tight">
          How I Architect Systems
        </h2>
        <p className="text-sm sm:text-base text-[#A39985] font-mono">
          Click each capability to expand the engineering specifications and applied tech stack.
        </p>
      </div>

      {/* Middle Block: Spacious Expandable Accordion List */}
      <div className="space-y-3.5 font-mono my-4 sm:my-6">
        {CAPABILITIES.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={item.id}
              onClick={() => toggle(idx)}
              className={`p-5 sm:p-6 rounded-2xl bg-[#181A20] border transition-all cursor-pointer select-none ${
                isOpen
                  ? "border-[#2F6BFF]/60 shadow-[0_10px_30px_rgba(47,107,255,0.12)]"
                  : "border-[rgba(216,203,179,0.14)] hover:border-[rgba(216,203,179,0.25)]"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-[#2F6BFF] font-bold text-base sm:text-lg">{item.id}</span>
                  <h3 className="text-base sm:text-xl font-display font-bold text-[#F5EFE6]">
                    {item.title}
                  </h3>
                </div>
                <span
                  className={`text-xl text-[#A39985] transition-transform duration-200 inline-block ${
                    isOpen ? "rotate-90 text-[#2F6BFF]" : ""
                  }`}
                >
                  →
                </span>
              </div>

              {isOpen && (
                <div className="pt-4 space-y-3 font-sans text-sm text-[#D8CBB3] animate-fadeIn">
                  <p className="leading-relaxed text-sm sm:text-base">{item.description}</p>
                  <div className="flex flex-wrap gap-2.5 pt-2 font-mono text-xs">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1.5 rounded-lg bg-[#101114] text-[#A39985] border border-[rgba(216,203,179,0.1)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Footer Telemetry Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-[rgba(216,203,179,0.1)] font-mono text-xs">
        <div className="flex items-center space-x-3 text-[#A39985]">
          <span>PAGE 04 / 06</span>
          <span className="text-[rgba(216,203,179,0.3)]">//</span>
          <span>DETERMINISTIC SYSTEMS ARCHITECTURE</span>
        </div>

        <div className="text-[#2F6BFF] font-semibold">
          4 PILLARS &bull; 100% MATHEMATICAL VERIFICATION
        </div>
      </div>
    </section>
  );
}
