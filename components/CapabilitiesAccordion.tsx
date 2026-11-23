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
    <section id="capabilities" className="h-screen min-h-[680px] flex flex-col justify-center px-4 sm:px-6 max-w-6xl mx-auto snap-start snap-always relative box-border py-12 border-t border-[rgba(216,203,179,0.08)]">
      <div className="space-y-6 my-auto">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#2F6BFF]">
            <span className="w-2 h-2 rounded-full bg-[#2F6BFF]"></span>
            <span>04. ARCHITECTURAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F5EFE6] tracking-tight">
            How I Architect Systems
          </h2>
          <p className="text-sm text-[#A39985] font-mono">
            Click each capability to expand the engineering specifications and applied tech stack.
          </p>
        </div>

      {/* Expandable Accordion List */}
      <div className="space-y-3 font-mono">
        {CAPABILITIES.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={item.id}
              onClick={() => toggle(idx)}
              className="p-6 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] cursor-pointer transition-all hover:border-[rgba(216,203,179,0.25)] select-none"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-[#2F6BFF] font-bold text-base">{item.id}</span>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#F5EFE6]">
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
                  <p className="leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-[#101114] text-[#A39985] border border-[rgba(216,203,179,0.08)]"
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
    </div>
  </section>
);
}
