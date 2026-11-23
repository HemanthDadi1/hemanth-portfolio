"use client";

import React from "react";
import { Database, Cpu, Layers, ShieldCheck, Factory, Truck, Workflow, BarChart3 } from "lucide-react";

export default function IndustrialCapabilities() {
  const capabilities = [
    {
      title: "Multimodal-to-ERP Ingestion",
      tag: "PIPELINE ARCHITECTURE",
      description:
        "End-to-end ingestion from unstandardized industrial PDFs, weighbridge printouts, and scanned test certificates directly into SAP FI/CO, PostgreSQL, and enterprise ERPs with Pydantic validation.",
      specs: [
        "Procure-to-Pay (P2P) & Order-to-Cash (O2C) automation",
        "Layout-aware Gemini Multimodal extraction",
        "Zero manual spreadsheet transcription overhead",
      ],
      icon: Database,
    },
    {
      title: "Deterministic Compliance Engines",
      tag: "REGULATORY COMPLIANCE",
      description:
        "Hard-coded regulatory engines for EU CBAM (Annex V), ESG Scope 1/2/3 disclosures, and cross-border customs declarations. Strict mathematical stoichiometry with zero LLM math hallucinations.",
      specs: [
        "Annex V Article 3(1) Specific Embedded Emissions",
        "Cryptographically signed audit trails for EU verifiers",
        "Sovereign cloud data residency (GCP asia-south1)",
      ],
      icon: ShieldCheck,
    },
    {
      title: "Operational Scheduling & MILP",
      tag: "OPERATIONS RESEARCH",
      description:
        "Mathematical optimization engines formulating complex factory constraints, shop-floor dispatch, and maintenance overhaul slots into Mixed-Integer Linear Programs (PuLP) and dynamic programming.",
      specs: [
        "Sub-50ms exact dynamic programming solvers",
        "Predict-then-optimize risk buffer formulation",
        "Hangar, crane, and multi-bay constraint modeling",
      ],
      icon: Workflow,
    },
    {
      title: "Browser-Native Verification (Pyodide Wasm)",
      tag: "EDGE & CLIENT COMPUTING",
      description:
        "Executing sandboxed, offline-capable Python scientific code directly within client web browsers via WebAssembly (Pyodide). Client data never leaves the browser during sensitive mathematical evaluations.",
      specs: [
        "Zero-latency stoichiometric formula execution",
        "Air-gapped and offline industrial site capability",
        "Pydantic and NumPy in-browser runtime",
      ],
      icon: Cpu,
    },
  ];

  return (
    <section id="architecture" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="flex items-center space-x-2 text-xs font-mono text-[#00F0FF]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
          <span>04. ENTERPRISE CAPABILITIES // INDUSTRIAL SYSTEMS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
          Engineered for Heavy Manufacturing & Trade
        </h2>
        <p className="text-sm text-slate-400 font-mono max-w-2xl">
          Deploying custom enterprise pipelines where failure means real-world financial loss, customs impoundment, or physical equipment damage.
        </p>
      </div>

      {/* 4-Box Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilities.map((cap, i) => {
          const Icon = cap.icon;
          return (
            <div
              key={i}
              className="p-6 rounded-lg bg-[#0D1017]/80 border border-white/10 hover:border-[#00F0FF]/30 transition-all space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#00F0FF] group-hover:bg-[#00F0FF]/10 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-0.5 rounded border border-[#00F0FF]/20">
                  {cap.tag}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-sans font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs text-slate-300 font-sans mt-2 leading-relaxed">
                  {cap.description}
                </p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-white/5 font-mono text-xs">
                {cap.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center space-x-2 text-slate-400">
                    <span className="w-1 h-1 rounded-full bg-[#00F0FF]" />
                    <span className="text-[11px]">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
