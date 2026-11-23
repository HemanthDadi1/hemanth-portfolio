import React from "react";

export default function ResearchLineageSection() {
  return (
    <section
      id="research"
      className="min-h-screen w-full flex flex-col justify-between px-4 sm:px-8 max-w-6xl mx-auto snap-start relative box-border pt-24 pb-8 sm:pb-12 border-t border-[rgba(216,203,179,0.08)]"
    >
      {/* Top Header */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-xs font-mono text-[#2F6BFF]">
          <span className="w-2 h-2 rounded-full bg-[#2F6BFF]"></span>
          <span>05. SCIENTIFIC PAPERS & CREDENTIALS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[#F5EFE6] tracking-tight">
          Research Lineage
        </h2>
        <p className="text-sm sm:text-base text-[#A39985] font-mono">
          Rigorous academic grounding spanning mechanical engineering, data science, and forward-deployed AI.
        </p>
      </div>

      {/* Middle Grid: Manuscripts & Academic Degrees */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start my-4 sm:my-6">
        {/* Manuscripts Column */}
        <div className="lg:col-span-7 space-y-4">
          <div className="text-xs font-mono text-[#2F6BFF] uppercase tracking-wider font-semibold">
            Manuscripts in Peer Review
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] space-y-3 hover:border-[#2F6BFF]/60 hover:shadow-[0_10px_30px_rgba(47,107,255,0.12)] transition-all">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-[#2F6BFF] bg-[#2F6BFF]/10 px-2.5 py-1 rounded-md border border-[#2F6BFF]/30 font-semibold">
                UNDER REVIEW // 2026
              </span>
              <span className="text-[#A39985]">IOP Publishing</span>
            </div>
            <h3 className="text-base sm:text-lg font-display font-bold text-[#F5EFE6] leading-snug">
              Engine-Level Reliability of Conformal RUL Uncertainty Under Operating-Condition Distribution Shift in C-MAPSS FD004 (Part I)
            </h3>
            <p className="text-xs sm:text-sm text-[#D8CBB3] leading-relaxed">
              <strong>Hemanth Dadi.</strong> Submitted to the <em>Journal of Reliability Science and Engineering</em>. Code repository:{" "}
              <a
                href="https://github.com/HemanthDadi1/fdo04-degradation-aware-rul"
                target="_blank"
                rel="noreferrer"
                className="text-[#2F6BFF] hover:underline font-mono"
              >
                github.com/HemanthDadi1/fdo04-degradation-aware-rul
              </a>
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] space-y-3 hover:border-[#2F6BFF]/60 hover:shadow-[0_10px_30px_rgba(47,107,255,0.12)] transition-all">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-[#D8CBB3] bg-[#222220] px-2.5 py-1 rounded-md border border-[rgba(216,203,179,0.2)] font-semibold">
                IN PREPARATION // 2026
              </span>
              <span className="text-[#A39985]">Reliability Engineering</span>
            </div>
            <h3 className="text-base sm:text-lg font-display font-bold text-[#F5EFE6] leading-snug">
              Engine-Level Reliability of Conformal RUL Uncertainty Under Operating Shift (Part II): Does a Longer Temporal Context Help?
            </h3>
            <p className="text-xs sm:text-sm text-[#D8CBB3] leading-relaxed">
              <strong>Hemanth Dadi.</strong> Investigates temporal history context fixing mid-life failures under operational distribution shifts.
            </p>
          </div>
        </div>

        {/* Academic Degrees Column */}
        <div className="lg:col-span-5 space-y-3.5 font-mono text-xs">
          <div className="text-[#2F6BFF] uppercase tracking-wider font-semibold pb-0.5">
            Academic Pedigree
          </div>

          <div className="p-5 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] space-y-1.5 hover:border-[#2F6BFF]/60 transition-colors">
            <div className="flex justify-between text-[#F5EFE6] font-bold text-sm">
              <span>M.S., Data Science</span>
              <span className="text-[#2F6BFF]">GPA 3.73 / 4.00</span>
            </div>
            <div className="text-xs text-[#D8CBB3]">Stevens Institute of Technology, Hoboken, NJ, USA</div>
            <div className="text-[11px] text-[#A39985]">Stevens Master&apos;s Scholarship &bull; 2023–2024</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] space-y-1.5 hover:border-[#2F6BFF]/60 transition-colors">
            <div className="flex justify-between text-[#F5EFE6] font-bold text-sm">
              <span>Forward Deployed AI Eng.</span>
              <span className="text-[#2F6BFF]">PG Certificate</span>
            </div>
            <div className="text-xs text-[#D8CBB3]">Indian Institute of Technology Roorkee (IIT Roorkee)</div>
            <div className="text-[11px] text-[#A39985]">Problem Structuring, AI Governance, LLM Systems &bull; 2026</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] space-y-1.5 hover:border-[#2F6BFF]/60 transition-colors">
            <div className="flex justify-between text-[#F5EFE6] font-bold text-sm">
              <span>B.Tech., Mechanical Eng.</span>
              <span className="text-[#2F6BFF]">CGPA 8.71 / 10</span>
            </div>
            <div className="text-xs text-[#D8CBB3]">V. R. Siddhartha Engineering College (Autonomous, JNTUK)</div>
            <div className="text-[11px] text-[#A39985]">First Class with Distinction &bull; 2018–2022</div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Telemetry Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-[rgba(216,203,179,0.1)] font-mono text-xs">
        <div className="flex items-center space-x-3 text-[#A39985]">
          <span>PAGE 05 / 06</span>
          <span className="text-[rgba(216,203,179,0.3)]">//</span>
          <span>RESEARCH & ACADEMIC LINEAGE</span>
        </div>

        <div className="text-[#2F6BFF] font-semibold">
          PEER REVIEW: IOP PUBLISHING &bull; NASA C-MAPSS FD004
        </div>
      </div>
    </section>
  );
}
