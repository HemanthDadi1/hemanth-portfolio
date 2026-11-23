import React from "react";

export default function ResearchLineageSection() {
  return (
    <section id="research" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 max-w-6xl mx-auto snap-start relative box-border pt-20 pb-8 border-t border-[rgba(216,203,179,0.08)]">
      <div className="space-y-6 my-auto">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#2F6BFF]">
            <span className="w-2 h-2 rounded-full bg-[#2F6BFF]"></span>
            <span>05. SCIENTIFIC PAPERS & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F5EFE6] tracking-tight">
            Research Lineage
          </h2>
          <p className="text-sm text-[#A39985] font-mono">
            Rigorous academic grounding spanning mechanical engineering, data science, and forward-deployed AI.
          </p>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Manuscripts Column */}
        <div className="lg:col-span-7 space-y-4">
          <div className="text-xs font-mono text-[#2F6BFF] uppercase">Manuscripts in Peer Review</div>

          <div className="p-6 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] space-y-2.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-[#2F6BFF] bg-[#2F6BFF]/10 px-2 py-0.5 rounded border border-[#2F6BFF]/30">
                UNDER REVIEW // 2026
              </span>
              <span className="text-[#A39985]">IOP Publishing</span>
            </div>
            <h3 className="text-base font-display font-bold text-[#F5EFE6]">
              Engine-Level Reliability of Conformal RUL Uncertainty Under Operating-Condition Distribution Shift in C-MAPSS FD004 (Part I)
            </h3>
            <p className="text-xs text-[#D8CBB3] leading-relaxed">
              <strong>Hemanth Dadi.</strong> Submitted to the <em>Journal of Reliability Science and Engineering</em>. Code:{" "}
              <a
                href="https://github.com/HemanthDadi1/fdo04-degradation-aware-rul"
                target="_blank"
                rel="noreferrer"
                className="text-[#2F6BFF] hover:underline"
              >
                github.com/HemanthDadi1/fdo04-degradation-aware-rul
              </a>
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] space-y-2.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-[#D8CBB3] bg-[#222220] px-2 py-0.5 rounded border border-[rgba(216,203,179,0.2)]">
                IN PREPARATION // 2026
              </span>
              <span className="text-[#A39985]">Reliability Engineering</span>
            </div>
            <h3 className="text-base font-display font-bold text-[#F5EFE6]">
              Engine-Level Reliability of Conformal RUL Uncertainty Under Operating Shift (Part II): Does a Longer Temporal Context Help?
            </h3>
            <p className="text-xs text-[#D8CBB3] leading-relaxed">
              <strong>Hemanth Dadi.</strong> Investigates temporal history context fixing mid-life failures under operational distribution shifts.
            </p>
          </div>
        </div>

        {/* Academic Degrees Column */}
        <div className="lg:col-span-5 space-y-3 font-mono text-xs">
          <div className="text-[#2F6BFF] uppercase pb-1">Academic Pedigree</div>

          <div className="p-4 rounded-xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] space-y-1">
            <div className="flex justify-between text-[#F5EFE6] font-bold">
              <span>M.S., Data Science</span>
              <span className="text-[#2F6BFF]">GPA 3.73 / 4.00</span>
            </div>
            <div className="text-[#D8CBB3]">Stevens Institute of Technology, Hoboken, NJ, USA</div>
            <div className="text-[10px] text-[#A39985]">Stevens Master&apos;s Scholarship &bull; 2023–2024</div>
          </div>

          <div className="p-4 rounded-xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] space-y-1">
            <div className="flex justify-between text-[#F5EFE6] font-bold">
              <span>Forward Deployed AI Eng.</span>
              <span className="text-[#2F6BFF]">PG Certificate</span>
            </div>
            <div className="text-[#D8CBB3]">Indian Institute of Technology Roorkee (IIT Roorkee)</div>
            <div className="text-[10px] text-[#A39985]">Problem Structuring, AI Governance, LLM Systems &bull; 2026</div>
          </div>

          <div className="p-4 rounded-xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] space-y-1">
            <div className="flex justify-between text-[#F5EFE6] font-bold">
              <span>B.Tech., Mechanical Eng.</span>
              <span className="text-[#2F6BFF]">CGPA 8.71 / 10</span>
            </div>
            <div className="text-[#D8CBB3]">V. R. Siddhartha Engineering College (Autonomous, JNTUK)</div>
            <div className="text-[10px] text-[#A39985]">First Class with Distinction &bull; 2018–2022</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}
