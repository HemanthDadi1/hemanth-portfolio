"use client";

import React, { useState } from "react";
import { Github, ExternalLink, Cpu, Plane, ShieldCheck, Route, Wrench, FileCode, CheckCircle2 } from "lucide-react";

export default function DeploymentsGrid() {
  const [filter, setFilter] = useState<"all" | "industrial" | "research">("all");

  const projects = [
    {
      id: "nasa-fleet",
      title: "Predict-then-Optimize Fleet Maintenance",
      category: "industrial",
      subtitle: "NASA C-MAPSS FD001 Turbofan Scheduling",
      description:
        "Combined a BiLSTM-attention remaining-useful-life (RUL) model (test RMSE 15.90 cycles) with a Mixed-Integer Linear Program (PuLP). Schedules commercial aircraft engines into an overhaul hangar under strict 3-bay-per-cycle capacity, eliminating premature in-flight failures from 11 down to 0.",
      metrics: [
        { label: "Failures Eliminated", value: "11 → 0" },
        { label: "Model Architecture", value: "BiLSTM + PuLP MILP" },
        { label: "Hangar Capacity", value: "3 Bays / Cycle" },
      ],
      tags: ["Python", "PuLP", "Mixed-Integer Optimization", "BiLSTM", "Predictive Maintenance"],
      github: "https://github.com/HemanthDadi1/fd001-fleet-optimizer",
      icon: Plane,
    },
    {
      id: "conformal-rul",
      title: "Balanced Engine Conformal UQ (CQR)",
      category: "research",
      subtitle: "NASA C-MAPSS FD004/FD002 Distribution Shift",
      description:
        "Engine-level reliability of conformal prediction intervals for remaining useful life. Proved pooled metrics mask unit-level failures (82% pooled vs 10/24 engines failing). Formulated Balanced Engine CQR, maintaining 91–92% coverage under severe operational condition shifts. 2 papers under peer review.",
      metrics: [
        { label: "Calibrated Coverage", value: "91–92%" },
        { label: "Under-Covered Cut", value: "23 → 7 engines" },
        { label: "Peer Review", value: "J. Reliab. Sci. Eng. (IOP)" },
      ],
      tags: ["Conformal Prediction", "CQR", "Quantile Regression", "Distribution Shift", "PyTorch"],
      github: "https://github.com/HemanthDadi1/fdo04-degradation-aware-rul",
      icon: ShieldCheck,
    },
    {
      id: "waylosa",
      title: "Waylosa Travel Intelligence Engine",
      category: "industrial",
      subtitle: "Founding AI Engineer — 'Model Proposes, Code Verifies'",
      description:
        "Designed the core synthesis engine where LLMs suggest destinations and deterministic dynamic programming algorithms validate, schedule, and repair itineraries. Solves annual leave scheduling in 30ms, reducing LLM token overhead by 71% while maintaining 949 CI test suites.",
      metrics: [
        { label: "Solver Latency", value: "30 ms (Exact DP)" },
        { label: "Token Reduction", value: "-71% Prompt Size" },
        { label: "CI Test Suite", value: "949 Automated Tests" },
      ],
      tags: ["FastAPI", "PostgreSQL / PostGIS", "Dynamic Programming", "CI/CD", "Pydantic"],
      github: "https://github.com/HemanthDadi1",
      icon: Route,
    },
    {
      id: "cloudserve",
      title: "CloudServe Verified AI Copilot",
      category: "industrial",
      subtitle: "IIT Roorkee Capstone // Zero-Leakage Architecture",
      description:
        "Designed an enterprise support pipeline that executes 5 automated safety and grounding checks before dispatch. Reached 95% topic accuracy on unseen customer phrasing, choosing strict safety over volume with 0 private data leaks across 500+ production tickets.",
      metrics: [
        { label: "Grounding Accuracy", value: "95.0%" },
        { label: "Safety Checks", value: "5-Stage Pipeline" },
        { label: "Data Leakage", value: "0% (Zero Breaches)" },
      ],
      tags: ["LLM Workflows", "Fairness Auditing", "Grounding", "FastAPI", "Enterprise Security"],
      github: "https://github.com/HemanthDadi1",
      icon: ShieldCheck,
    },
    {
      id: "ai4i",
      title: "Explainable Machine Tool Diagnostics",
      category: "research",
      subtitle: "AI4I 2020 Milling Machine Dataset",
      description:
        "Built a failure-prediction pipeline across 10,000 machining records with physically motivated features (temperature differential, torque-speed power product, wear-load interaction). Achieved PR-AUC 0.91 with HistGradientBoosting and cost-optimal decision thresholding.",
      metrics: [
        { label: "PR-AUC Score", value: "0.91" },
        { label: "Physical Features", value: "Torque-Speed Power" },
        { label: "Interpretability", value: "SHAP Bands" },
      ],
      tags: ["Scikit-Learn", "SHAP", "Physical Modeling", "Cost-Optimal Decision", "Python"],
      github: "https://github.com/HemanthDadi1/ai4i-predictive-maintenance",
      icon: Wrench,
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="deployments" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#00F0FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
            <span>03. VERIFIED DEPLOYMENTS & INDUSTRIAL RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            High-Stakes Systems in Production
          </h2>
          <p className="text-sm text-slate-400 font-mono max-w-2xl">
            From NASA turbofan hangar scheduling to enterprise ERP pipelines and physics-informed failure detection.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-1.5 p-1 rounded bg-[#0D1017] border border-white/10 font-mono text-xs">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded transition-all ${
              filter === "all"
                ? "bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30 font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            ALL (5)
          </button>
          <button
            onClick={() => setFilter("industrial")}
            className={`px-3 py-1 rounded transition-all ${
              filter === "industrial"
                ? "bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30 font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            INDUSTRIAL BUILDS
          </button>
          <button
            onClick={() => setFilter("research")}
            className={`px-3 py-1 rounded transition-all ${
              filter === "research"
                ? "bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30 font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            RESEARCH & UQ
          </button>
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          const IconComponent = project.icon;
          return (
            <div
              key={project.id}
              className="p-6 rounded-lg bg-[#0D1017]/80 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#00F0FF] group-hover:scale-105 transition-transform">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded hover:bg-white/5 text-slate-400 hover:text-[#00F0FF] transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-[#00F0FF] mb-1">
                    {project.subtitle}
                  </div>
                  <h3 className="text-lg font-sans font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {project.description}
                </p>

                {/* Key Metric Blocks */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5 font-mono">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="p-2 rounded bg-black/40 border border-white/5">
                      <div className="text-[9px] text-slate-400 uppercase truncate">
                        {m.label}
                      </div>
                      <div className="text-xs font-bold text-white truncate mt-0.5">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags at bottom */}
              <div className="pt-4 mt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-slate-400 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
