"use client";

import React from "react";
import { Eye, ShieldCheck, Binary } from "lucide-react";

export default function CoreThesisSection() {
  const pillars = [
    {
      step: "01",
      title: "AI Reads Reality",
      category: "MULTIMODAL EXTRACTION",
      desc: "Transforming unstructured industrial artifacts—scanned mill certificates, weighbridge receipts, and raw telemetry—into verified, typed Pydantic data schemas.",
      tag: "Gemini Multimodal / OCR",
      icon: Eye,
    },
    {
      step: "02",
      title: "People Confirm",
      category: "SOVEREIGN INTERLOCK",
      desc: "Human domain experts retain sovereign authority and cryptographic sign-off. High-value transactions and edge cases route to verification queues with immutable audit trails.",
      tag: "Human-in-the-Loop",
      icon: ShieldCheck,
    },
    {
      step: "03",
      title: "Rules Decide",
      category: "DETERMINISTIC CODE",
      desc: "Offloading math and logic from LLMs to isolated Python/Wasm sandboxes, exact dynamic programming, and mixed-integer linear programming (PuLP) for zero hallucination.",
      tag: "Exact Optimization",
      icon: Binary,
    },
  ];

  return (
    <section id="thesis" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[rgba(216,203,179,0.12)]">
      <div className="space-y-2 mb-10">
        <div className="flex items-center space-x-2 text-xs font-mono text-[#2F6BFF]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2F6BFF]" />
          <span>ENGINEERING THESIS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#EFE8DC] tracking-tight">
          How High-Stakes AI Must Be Built
        </h2>
        <p className="text-xs sm:text-sm text-[#AFA38C] font-mono">
          Replacing probabilistic guessing with mathematically bounded, human-verified pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {pillars.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-lg bg-[#242421] border border-[rgba(216,203,179,0.14)] hover:border-[#2F6BFF]/40 transition-all space-y-4 group"
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-[#2F6BFF] font-bold">{p.step}</span>
                <span className="text-[10px] text-[#AFA38C] bg-[#1E1E1C] px-2 py-0.5 rounded border border-[rgba(216,203,179,0.1)]">
                  {p.category}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-sans font-bold text-[#EFE8DC] group-hover:text-[#2F6BFF] transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-[#AFA38C] leading-relaxed font-sans mt-2">
                  {p.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[rgba(216,203,179,0.08)] font-mono text-[10px] text-[#2F6BFF]">
                {p.tag}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
