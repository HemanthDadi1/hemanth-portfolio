"use client";

import React, { useState } from "react";
import { Terminal, Code, Cpu, Server, Database, Sparkles, Check } from "lucide-react";

export default function TechMatrix() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "FULL MATRIX" },
    { id: "ai", label: "AI & MULTIMODAL" },
    { id: "deterministic", label: "DETERMINISTIC & OR" },
    { id: "backend", label: "BACKEND & CLOUD" },
    { id: "frontend", label: "INDUSTRIAL UI" },
  ];

  const technologies = [
    {
      name: "Python 3.12+",
      role: "Scientific computing, numerical pipelines, Pydantic data schemas",
      category: "deterministic",
      level: "Core Runtime",
      color: "#00F0FF",
    },
    {
      name: "GCP Vertex AI (Gemini Multimodal)",
      role: "Layout-aware vision OCR, extraction from messy industrial PDFs",
      category: "ai",
      level: "Vision Ingestion",
      color: "#00F0FF",
    },
    {
      name: "PuLP (Mixed-Integer Linear Programming)",
      role: "Exact mathematical optimization for hangar & dispatch scheduling",
      category: "deterministic",
      level: "Mathematical Optimization",
      color: "#FF6B00",
    },
    {
      name: "Conformal Prediction (CQR)",
      role: "Balanced Engine coverage, distribution shift calibration",
      category: "ai",
      level: "Uncertainty Quantification",
      color: "#FF6B00",
    },
    {
      name: "Pyodide (WebAssembly Python)",
      role: "In-browser deterministic mathematical formulas with zero latency",
      category: "deterministic",
      level: "Edge Sandbox",
      color: "#10B981",
    },
    {
      name: "FastAPI & Cloud Run (asia-south1)",
      role: "High-throughput asynchronous APIs hosted in GCP Mumbai",
      category: "backend",
      level: "Sovereign Cloud",
      color: "#00F0FF",
    },
    {
      name: "PostgreSQL & PostGIS",
      role: "Relational trade records & geospatial routing queries",
      category: "backend",
      level: "Persistence",
      color: "#10B981",
    },
    {
      name: "SAP FI/CO & P2P / O2C",
      role: "Enterprise ERP integration, inventory valuation & ledger postings",
      category: "backend",
      level: "Enterprise ERP",
      color: "#FF6B00",
    },
    {
      name: "Next.js 14/15 & TypeScript",
      role: "Server components, high-density industrial telemetry frontends",
      category: "frontend",
      level: "Web Application",
      color: "#00F0FF",
    },
    {
      name: "Tailwind CSS & Framer Motion",
      role: "Neo-industrial styling, zero-layout-shift micro-interactions",
      category: "frontend",
      level: "Industrial UI",
      color: "#00F0FF",
    },
    {
      name: "PyTorch & Scikit-Learn",
      role: "BiLSTM-attention architectures, gradient boosting, SHAP explainability",
      category: "ai",
      level: "Machine Learning",
      color: "#FF6B00",
    },
    {
      name: "Docker & GitHub Actions CI",
      role: "Reproducible microservices with 900+ automated regression tests",
      category: "backend",
      level: "DevOps & Safety",
      color: "#10B981",
    },
  ];

  const filtered =
    activeCategory === "all"
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="space-y-2 mb-10">
        <div className="flex items-center space-x-2 text-xs font-mono text-[#00F0FF]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
          <span>TECH STACK // ENGINEERING MATRIX</span>
        </div>
        <h2 className="text-3xl font-sans font-bold text-white tracking-tight">
          Deterministic Tooling & Frameworks
        </h2>
        <p className="text-sm text-slate-400 font-mono">
          Hand-picked stacks prioritizing reproducible math, auditability, and sovereign low-latency execution.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCategory(c.id)}
            className={`px-3.5 py-1.5 rounded-sm transition-all ${
              activeCategory === c.id
                ? "bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/40 font-semibold"
                : "bg-[#0D1017] border border-white/10 text-slate-400 hover:text-white hover:border-white/20"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Pill Matrix Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg bg-[#0D1017]/70 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-3 group"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                {item.name}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                {item.level}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              {item.role}
            </p>
            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span className="capitalize">{item.category}</span>
              <span className="text-emerald-400">PRODUCTION READY</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
