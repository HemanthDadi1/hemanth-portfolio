"use client";

import React from "react";
import { BookOpen, GraduationCap } from "lucide-react";

export default function ResearchSection() {
  return (
    <section id="research" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[rgba(216,203,179,0.12)]">
      <div className="space-y-2 mb-10">
        <div className="flex items-center space-x-2 text-xs font-mono text-[#2F6BFF]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2F6BFF]" />
          <span>RESEARCH & ACADEMIC LINEAGE</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#EFE8DC] tracking-tight">
          Scientific Rigor & Publications
        </h2>
        <p className="text-xs sm:text-sm text-[#AFA38C] font-mono">
          Operations research, conformal uncertainty quantification, and mechanical engineering fundamentals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Manuscripts */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center space-x-2 font-mono text-xs text-[#2F6BFF]">
            <BookOpen className="w-4 h-4" />
            <span>Manuscripts Under Review</span>
          </div>

          <div className="p-4 rounded-lg bg-[#242421] border border-[rgba(216,203,179,0.14)] space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-[#2F6BFF]">UNDER REVIEW // 2026</span>
              <span className="text-[#AFA38C]">IOP Publishing</span>
            </div>
            <h3 className="text-sm font-bold text-[#EFE8DC]">
              Engine-Level Reliability of Conformal RUL Uncertainty Under Operating-Condition Distribution Shift in C-MAPSS FD004 (Part I)
            </h3>
            <p className="text-xs text-[#AFA38C]">
              <strong>Hemanth Dadi.</strong> Submitted to the <em>Journal of Reliability Science and Engineering</em>. Code: github.com/HemanthDadi1/fdo04-degradation-aware-rul
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#242421] border border-[rgba(216,203,179,0.14)] space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-[#D8CBB3]">IN PREPARATION // 2026</span>
              <span className="text-[#AFA38C]">Reliability Engineering</span>
            </div>
            <h3 className="text-sm font-bold text-[#EFE8DC]">
              Engine-Level Reliability of Conformal RUL Uncertainty Under Operating Shift (Part II): Does a Longer Temporal Context Help?
            </h3>
            <p className="text-xs text-[#AFA38C]">
              <strong>Hemanth Dadi.</strong> Investigates temporal history lengths under severe non-stationary shift.
            </p>
          </div>
        </div>

        {/* Degrees & Honors */}
        <div className="lg:col-span-5 space-y-3 font-mono text-xs">
          <div className="flex items-center space-x-2 font-mono text-xs text-[#2F6BFF] pb-1">
            <GraduationCap className="w-4 h-4" />
            <span>Education</span>
          </div>

          <div className="p-3.5 rounded bg-[#242421] border border-[rgba(216,203,179,0.14)] space-y-1">
            <div className="flex justify-between text-[#EFE8DC] font-bold">
              <span>M.S., Data Science</span>
              <span className="text-[#2F6BFF]">GPA 3.73</span>
            </div>
            <div className="text-[#D8CBB3]">Stevens Institute of Technology, USA</div>
            <div className="text-[10px] text-[#AFA38C]">Stevens Master&apos;s Scholarship &bull; 2023–2024</div>
          </div>

          <div className="p-3.5 rounded bg-[#242421] border border-[rgba(216,203,179,0.14)] space-y-1">
            <div className="flex justify-between text-[#EFE8DC] font-bold">
              <span>Forward Deployed AI</span>
              <span className="text-[#2F6BFF]">PG Cert</span>
            </div>
            <div className="text-[#D8CBB3]">Indian Institute of Technology Roorkee</div>
            <div className="text-[10px] text-[#AFA38C]">Problem Structuring & AI Governance &bull; 2026</div>
          </div>

          <div className="p-3.5 rounded bg-[#242421] border border-[rgba(216,203,179,0.14)] space-y-1">
            <div className="flex justify-between text-[#EFE8DC] font-bold">
              <span>B.Tech., Mechanical Eng.</span>
              <span className="text-[#2F6BFF]">CGPA 8.71</span>
            </div>
            <div className="text-[#D8CBB3]">VRSEC (JNTU Kakinada)</div>
            <div className="text-[10px] text-[#AFA38C]">First Class with Distinction &bull; 2018–2022</div>
          </div>
        </div>
      </div>
    </section>
  );
}
