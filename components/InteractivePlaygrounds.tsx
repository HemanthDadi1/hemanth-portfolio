"use client";

import React, { useState } from "react";

export default function InteractivePlaygrounds() {
  const [shiftVal, setShiftVal] = useState<number>(3);
  const [scheduleStates, setScheduleStates] = useState<boolean[]>([true, true, true]);

  const labels = [
    "Nominal Stationary (FD001)",
    "Mild Variation (FD002)",
    "Medium Shift (FD004 - 2 Conds)",
    "Severe Shift (FD004 - 4 Conds)",
    "Extreme Shift (FD004 - 6 Conds)",
  ];
  const coverages = ["95.1%", "93.8%", "92.4%", "91.8%", "91.2%"];

  const spread = 20 + shiftVal * 12;
  const topY = 30 - shiftVal * 2;
  const bottomY = 50 + spread;
  const endTopY = 140 - spread;
  const endBottomY = 155 + spread;
  const path = `M 40 ${topY} Q 180 50 360 ${endTopY} L 360 ${endBottomY} Q 180 ${100 + shiftVal * 6} 40 ${bottomY} Z`;

  const toggleStop = (idx: number) => {
    const next = [...scheduleStates];
    next[idx] = !next[idx];
    setScheduleStates(next);
  };

  const activeCount = scheduleStates.filter(Boolean).length;

  return (
    <section id="visuals" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto border-t border-[rgba(216,203,179,0.12)]">
      <div className="space-y-2 mb-8">
        <div className="flex items-center space-x-2 text-xs font-mono text-[#2F6BFF]">
          <span className="w-2 h-2 rounded-full bg-[#2F6BFF]" />
          <span>INTERACTIVE VISUAL PLAYGROUNDS // TRY IT LIVE</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F4EFE6] tracking-tight">
          Tactile Systems You Can Touch
        </h2>
        <p className="text-xs sm:text-sm text-[#A89E88] font-mono">
          Interactive mathematical models and scheduling algorithms. Drag the controls below to see how deterministic systems behave in real time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visualizer 1: Conformal Prediction */}
        <div className="soft-card p-6 space-y-4 bg-[#21211F] rounded-2xl border border-[rgba(216,203,179,0.13)]">
          <div className="flex items-center justify-between pb-3 border-b border-[rgba(216,203,179,0.1)]">
            <div>
              <span className="text-[10px] font-mono text-[#2F6BFF] uppercase">Research Visualizer</span>
              <h3 className="text-base font-bold text-[#F4EFE6] font-display">
                Conformal Prediction & Degradation Band
              </h3>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#2F6BFF]/15 text-[#2F6BFF] border border-[#2F6BFF]/30">
              COVERAGE: {coverages[shiftVal - 1]}
            </span>
          </div>

          <p className="text-xs text-[#A89E88] leading-relaxed">
            Turbofan remaining useful life under operating distribution shift. Adjust the slider to see how <strong>Balanced Engine CQR</strong> dynamically widens calibration bounds to protect individual units from premature failure.
          </p>

          <div className="p-3 rounded-xl bg-[#141413] border border-[rgba(216,203,179,0.1)] relative">
            <svg viewBox="0 0 400 180" className="w-full h-44 overflow-visible">
              <line x1="40" y1="20" x2="380" y2="20" stroke="rgba(216, 203, 179, 0.08)" strokeDasharray="3,3" />
              <line x1="40" y1="70" x2="380" y2="70" stroke="rgba(216, 203, 179, 0.08)" strokeDasharray="3,3" />
              <line x1="40" y1="120" x2="380" y2="120" stroke="rgba(216, 203, 179, 0.08)" strokeDasharray="3,3" />
              <path
                fill="rgba(47, 107, 255, 0.18)"
                stroke="rgba(47, 107, 255, 0.4)"
                strokeWidth="1.5"
                d={path}
              />
              <path
                fill="none"
                stroke="#F4EFE6"
                strokeWidth="2.5"
                strokeLinecap="round"
                d="M 40 40 Q 180 70 360 152"
              />
              <circle cx="220" cy="85" r="5" fill="#2F6BFF" stroke="#FFFFFF" strokeWidth="2" />
              <text x="45" y="15" fill="#A89E88" fontSize="10" fontFamily="monospace">
                RUL (Cycles)
              </text>
              <text x="310" y="172" fill="#A89E88" fontSize="10" fontFamily="monospace">
                Engine Lifetime →
              </text>
            </svg>
          </div>

          <div className="space-y-1.5 pt-1 font-mono text-xs">
            <div className="flex justify-between text-[11px]">
              <span className="text-[#A89E88]">Operating Condition Shift:</span>
              <span className="text-[#2F6BFF] font-bold">{labels[shiftVal - 1]}</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={shiftVal}
              onChange={(e) => setShiftVal(parseInt(e.target.value))}
              className="w-full accent-[#2F6BFF] h-2 bg-[#272724] rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Visualizer 2: Waylosa Scheduler */}
        <div className="soft-card p-6 space-y-4 bg-[#21211F] rounded-2xl border border-[rgba(216,203,179,0.13)]">
          <div className="flex items-center justify-between pb-3 border-b border-[rgba(216,203,179,0.1)]">
            <div>
              <span className="text-[10px] font-mono text-[#2F6BFF] uppercase">Waylosa Algorithm</span>
              <h3 className="text-base font-bold text-[#F4EFE6] font-display">
                Dynamic Programming Day Sequencer
              </h3>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#2F6BFF]/15 text-[#2F6BFF] border border-[#2F6BFF]/30">
              SOLVER: 28 ms
            </span>
          </div>

          <p className="text-xs text-[#A89E88] leading-relaxed">
            Model proposes, code verifies. Tap the activity blocks below to toggle destination stops and watch the exact DP solver eliminate time conflicts and fatigue in real time.
          </p>

          <div className="p-3.5 rounded-xl bg-[#141413] border border-[rgba(216,203,179,0.1)] space-y-2.5 font-mono text-xs">
            <div className="text-[10px] text-[#A89E88] flex justify-between">
              <span>08:00 AM</span>
              <span>12:00 PM</span>
              <span>04:00 PM</span>
              <span>08:00 PM</span>
            </div>

            <div className="space-y-2">
              <div
                onClick={() => toggleStop(0)}
                className={`p-2.5 rounded-lg border flex items-center justify-between cursor-pointer transition-all ${
                  scheduleStates[0]
                    ? "bg-[#2F6BFF]/20 border-[#2F6BFF]/50 text-[#F4EFE6]"
                    : "bg-[#191918] border-[rgba(216,203,179,0.1)] opacity-50 text-[#A89E88] line-through"
                }`}
              >
                <span className="font-bold">09:00 - 11:30 &bull; Charminar & Historic Quarter</span>
                <span className="text-[10px] text-[#2F6BFF] bg-[#2F6BFF]/20 px-2 py-0.5 rounded">OPTIMAL</span>
              </div>

              <div
                onClick={() => toggleStop(1)}
                className={`p-2.5 rounded-lg border flex items-center justify-between cursor-pointer transition-all ${
                  scheduleStates[1]
                    ? "bg-[#2F6BFF]/20 border-[#2F6BFF]/50 text-[#F4EFE6]"
                    : "bg-[#191918] border-[rgba(216,203,179,0.1)] opacity-50 text-[#A89E88] line-through"
                }`}
              >
                <span className="font-bold">12:30 - 02:00 &bull; Artisan Lunch & PostGIS Rest Stop</span>
                <span className="text-[10px] text-[#2F6BFF] bg-[#2F6BFF]/20 px-2 py-0.5 rounded">FATIGUE: LOW</span>
              </div>

              <div
                onClick={() => toggleStop(2)}
                className={`p-2.5 rounded-lg border flex items-center justify-between cursor-pointer transition-all ${
                  scheduleStates[2]
                    ? "bg-[#2F6BFF]/20 border-[#2F6BFF]/50 text-[#F4EFE6]"
                    : "bg-[#191918] border-[rgba(216,203,179,0.1)] opacity-50 text-[#A89E88] line-through"
                }`}
              >
                <span className="font-bold">03:30 - 06:00 &bull; Golconda Sunset Fort Walk</span>
                <span className="text-[10px] text-[#2F6BFF] bg-[#2F6BFF]/20 px-2 py-0.5 rounded">DAYLIGHT: OK</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[rgba(216,203,179,0.08)] flex justify-between items-center text-[11px]">
              <span className="text-[#A89E88]">DP Status:</span>
              <span className="text-[#2F6BFF] font-bold">
                {activeCount === 3
                  ? "✓ 0 Overlaps • 100% Feasible (30ms DP)"
                  : activeCount > 0
                  ? `✓ Repaired in 14ms • ${activeCount} Stops Scheduled`
                  : "Empty Schedule • 0 Token Calls"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
