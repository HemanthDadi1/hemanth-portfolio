"use client";

import React from "react";
import { GraduationCap, BookOpen, Award, FileText, CheckCircle, ExternalLink } from "lucide-react";

export default function ResearchCredentials() {
  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="space-y-2 mb-12">
        <div className="flex items-center space-x-2 text-xs font-mono text-[#00F0FF]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
          <span>05. CREDENTIALS & PEER-REVIEWED RESEARCH</span>
        </div>
        <h2 className="text-3xl font-sans font-bold text-white tracking-tight">
          Scientific Rigor & Mechanical Engineering Core
        </h2>
        <p className="text-sm text-slate-400 font-mono max-w-2xl">
          Bridging classical mechanical systems, operations research, and forward-deployed AI engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Manuscripts & Papers */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center space-x-2 font-mono text-xs text-[#00F0FF] uppercase">
            <BookOpen className="w-4 h-4" />
            <span>Manuscripts & Research Papers</span>
          </div>

          <div className="p-5 rounded-lg bg-[#0D1017]/80 border border-white/10 space-y-3 relative group hover:border-[#00F0FF]/30 transition-all">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                UNDER REVIEW // 2026
              </span>
              <span className="text-slate-400">IOP Publishing</span>
            </div>
            <h3 className="text-base font-sans font-bold text-white group-hover:text-[#00F0FF] transition-colors leading-snug">
              Engine-Level Reliability of Conformal RUL Uncertainty Under Operating-Condition Distribution Shift in C-MAPSS FD004 (Part I)
            </h3>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              <strong>Hemanth Dadi.</strong> Submitted to the <em>Journal of Reliability Science and Engineering</em>. Analyzes unit-level conformal prediction coverage failures in complex multi-operating regimes and proposes Balanced Engine CQR.
            </p>
            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Code: github.com/HemanthDadi1/fdo04-degradation-aware-rul</span>
              <span className="text-[#00F0FF]">Five-Seed Validated</span>
            </div>
          </div>

          <div className="p-5 rounded-lg bg-[#0D1017]/80 border border-white/10 space-y-3 relative group hover:border-white/20 transition-all">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                IN PREPARATION // 2026
              </span>
              <span className="text-slate-400">Reliability Engineering</span>
            </div>
            <h3 className="text-base font-sans font-bold text-white group-hover:text-[#00F0FF] transition-colors leading-snug">
              Engine-Level Reliability of Conformal RUL Uncertainty Under Operating-Condition Distribution Shift (Part II): Does a Longer Temporal Context Help?
            </h3>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              <strong>Hemanth Dadi.</strong> Investigates whether extending historical temporal context alleviates mid-life interval miscalibration under extreme operational distribution shift.
            </p>
          </div>
        </div>

        {/* Right: Academic Lineage & Degrees */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center space-x-2 font-mono text-xs text-[#00F0FF] uppercase">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Degrees & Certifications</span>
          </div>

          <div className="space-y-4">
            {/* Stevens */}
            <div className="p-4 rounded-lg bg-[#0D1017]/80 border border-white/10 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-white">M.S., Data Science</span>
                <span className="text-[#00F0FF]">GPA 3.73 / 4.00</span>
              </div>
              <div className="text-xs text-slate-300">Stevens Institute of Technology, Hoboken, NJ, USA</div>
              <div className="text-[11px] text-slate-400 font-mono">
                Stevens Master&apos;s Scholarship &bull; 2023 – 2024
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                Coursework: Optimization for Data Science, Time Series Analysis, Supply Chain Analytics, Deep Learning.
              </p>
            </div>

            {/* IIT Roorkee */}
            <div className="p-4 rounded-lg bg-[#0D1017]/80 border border-white/10 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-white">Forward Deployed AI Engineering</span>
                <span className="text-emerald-400">PG Certificate</span>
              </div>
              <div className="text-xs text-slate-300">Indian Institute of Technology Roorkee (IIT Roorkee)</div>
              <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                Coursework: Problem Structuring, ML Model Lifecycle, LLM Workflows, AI Governance & Solution Architecture.
              </p>
            </div>

            {/* VRSEC Mechanical */}
            <div className="p-4 rounded-lg bg-[#0D1017]/80 border border-white/10 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-white">B.Tech., Mechanical Engineering</span>
                <span className="text-[#FF6B00]">CGPA 8.71 / 10</span>
              </div>
              <div className="text-xs text-slate-300">V. R. Siddhartha Engineering College (Autonomous, JNTUK)</div>
              <div className="text-[11px] text-slate-400 font-mono">
                First Class with Distinction &bull; 2018 – 2022
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                Coursework: Operations Research, Production Planning & Control, Computer-Aided Manufacturing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
