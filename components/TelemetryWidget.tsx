"use client";

import React, { useState } from "react";
import { ShieldCheck, Play, RefreshCw, Lock } from "lucide-react";

export default function TelemetryWidget() {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(2);
  const [humanApproved, setHumanApproved] = useState(true);
  const [isSimulating, setIsSimulating] = useState(false);
  const [telemetryLog, setTelemetryLog] = useState<string[]>([
    "[08:42:01.104] INGEST: Mill_Cert_Heat_88421.pdf (6.4 MB)",
    "[08:42:01.320] OCR: Gemini-2.0-Flash multi-region extraction",
    "[08:42:01.550] BOUNDING_BOX: Direct emissions = 1.840 tCO2/t (99.4% conf)",
    "[08:42:01.710] GATE: Human-in-the-loop audit signoff REQUIRED",
    "[08:42:01.890] SIGN-OFF: Sovereign Officer (ID: HD-HYD-01) CONFIRMED",
    "[08:42:02.012] DET_ENGINE: Annex V Article 3(1) formula executed",
    "[08:42:02.045] OUTPUT: Tariff liability = €148,250.00 [ZERO_HALLUCINATION]"
  ]);

  const runSimulation = () => {
    setIsSimulating(true);
    setActiveStep(1);
    setTelemetryLog([
      `[${new Date().toLocaleTimeString()}] INGEST: Multimodal scan initiated (GCP asia-south1)...`,
      `[${new Date().toLocaleTimeString()}] PARSER: Extracting metallurgical parameters & energy bills...`
    ]);

    setTimeout(() => {
      setActiveStep(2);
      setTelemetryLog((prev) => [
        ...prev,
        `[${new Date().toLocaleTimeString()}] OCR_CONFIDENCE: 98.7% on Scope 1 Direct Fuel Mass`,
        `[${new Date().toLocaleTimeString()}] GATE: Dispatched to verification queue [STATION_HYD]`
      ]);
    }, 1200);

    setTimeout(() => {
      setActiveStep(3);
      setIsSimulating(false);
      setTelemetryLog((prev) => [
        ...prev,
        `[${new Date().toLocaleTimeString()}] VERIFIED: Human signature confirmed [SHA256: 9b2d...4f1e]`,
        `[${new Date().toLocaleTimeString()}] DETERMINISTIC_CORE: Executing strict Annex V math in Wasm/Python`,
        `[${new Date().toLocaleTimeString()}] RESULT: 100% auditable carbon ledger entry created.`
      ]);
    }, 2600);
  };

  return (
    <div className="relative rounded-lg bg-[#242421] border border-[rgba(216,203,179,0.16)] shadow-[0_12px_40px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-xl">
      {/* Top HUD Status Header */}
      <div className="px-4 py-2.5 bg-[#1C1C1A] border-b border-[rgba(216,203,179,0.12)] flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#AFA38C]/40 inline-block" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#AFA38C]/60 inline-block" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#2F6BFF] inline-block" />
          <span className="font-mono text-[11px] text-[#D8CBB3] pl-2">
            TELEMETRY // VERIFIED_INFERENCE_PIPELINE
          </span>
        </div>
        <div className="flex items-center space-x-2 font-mono text-[10px]">
          <span className="text-[#2F6BFF] bg-[#2F6BFF]/10 px-2 py-0.5 rounded border border-[#2F6BFF]/30">
            SOVEREIGN NODE: HYD-01
          </span>
        </div>
      </div>

      {/* Interactive 3-Stage Pipeline Bar */}
      <div className="grid grid-cols-3 border-b border-[rgba(216,203,179,0.12)] font-mono text-xs">
        {/* Stage 1 */}
        <button
          onClick={() => setActiveStep(1)}
          className={`px-3 py-2.5 text-left transition-all border-r border-[rgba(216,203,179,0.12)] flex items-center justify-between ${
            activeStep === 1
              ? "bg-[#2F6BFF]/15 text-[#2F6BFF] border-b-2 border-b-[#2F6BFF]"
              : "text-[#AFA38C] hover:text-white hover:bg-[#262623]"
          }`}
        >
          <div className="flex items-center space-x-1.5">
            <span className="w-4 h-4 rounded-full bg-[#262623] border border-[rgba(216,203,179,0.2)] flex items-center justify-center text-[10px]">
              1
            </span>
            <span className="font-semibold">AI READS</span>
          </div>
          <span className="text-[10px] text-[#AFA38C]">99.1%</span>
        </button>

        {/* Stage 2 */}
        <button
          onClick={() => setActiveStep(2)}
          className={`px-3 py-2.5 text-left transition-all border-r border-[rgba(216,203,179,0.12)] flex items-center justify-between ${
            activeStep === 2
              ? "bg-[#2F6BFF]/15 text-[#2F6BFF] border-b-2 border-b-[#2F6BFF]"
              : "text-[#AFA38C] hover:text-white hover:bg-[#262623]"
          }`}
        >
          <div className="flex items-center space-x-1.5">
            <span className="w-4 h-4 rounded-full bg-[#262623] border border-[rgba(216,203,179,0.2)] flex items-center justify-center text-[10px]">
              2
            </span>
            <span className="font-semibold">CONFIRM</span>
          </div>
          <span className="text-[10px] text-[#D8CBB3]">GATE</span>
        </button>

        {/* Stage 3 */}
        <button
          onClick={() => setActiveStep(3)}
          className={`px-3 py-2.5 text-left transition-all flex items-center justify-between ${
            activeStep === 3
              ? "bg-[#2F6BFF]/15 text-[#2F6BFF] border-b-2 border-b-[#2F6BFF]"
              : "text-[#AFA38C] hover:text-white hover:bg-[#262623]"
          }`}
        >
          <div className="flex items-center space-x-1.5">
            <span className="w-4 h-4 rounded-full bg-[#262623] border border-[rgba(216,203,179,0.2)] flex items-center justify-center text-[10px]">
              3
            </span>
            <span className="font-semibold">DECIDE</span>
          </div>
          <span className="text-[10px] text-[#2F6BFF]">MATH</span>
        </button>
      </div>

      {/* Main Terminal Viewport */}
      <div className="p-4 space-y-3 font-mono text-xs">
        {/* Step 1 Visualizer: OCR & Multimodal Extraction */}
        {activeStep === 1 && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-[#AFA38C] text-[11px]">
              <span>TARGET: RAW MILL TEST REPORT (PDF)</span>
              <span className="text-[#2F6BFF]">PARSER: GEMINI-2.0 MULTIMODAL</span>
            </div>
            <div className="p-3 rounded bg-[#1A1A18] border border-[rgba(216,203,179,0.14)] space-y-2 relative overflow-hidden">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[#AFA38C]">Heat Number:</span>
                <span className="text-[#EFE8DC] font-semibold">#IN-JSR-88421</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[#AFA38C]">Blast Furnace Direct Coke:</span>
                <span className="text-[#2F6BFF]">1,420 kg / t hot metal</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[#AFA38C]">Extraction Bounding Box:</span>
                <span className="text-[#EFE8DC]">CONFIDENCE: 0.994 [LOCKED]</span>
              </div>
              <div className="text-[10px] text-[#AFA38C] border-t border-[rgba(216,203,179,0.08)] pt-2">
                &gt; Multimodal vision extracts unstructured tables and converts to typed Pydantic schema. Zero hallucination guarantee passed to Gate 2.
              </div>
            </div>
          </div>
        )}

        {/* Step 2 Visualizer: Human Verification Gate */}
        {activeStep === 2 && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-[#AFA38C] text-[11px]">
              <span>AUDIT STATION: SOVEREIGN OPERATOR GATE</span>
              <span className="text-[#2F6BFF]">MANDATORY INTERLOCK</span>
            </div>
            <div className="p-3 rounded bg-[#1A1A18] border border-[rgba(47,107,255,0.3)] space-y-2.5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#EFE8DC] font-semibold">Boundary Condition Audit</div>
                  <div className="text-[10px] text-[#AFA38C]">Pre-combustion carbon balance & tariff code 7208.51</div>
                </div>
                <button
                  onClick={() => setHumanApproved(!humanApproved)}
                  className={`px-3 py-1 rounded text-[11px] font-mono font-semibold transition-all flex items-center space-x-1.5 ${
                    humanApproved
                      ? "bg-[#2F6BFF]/20 text-[#2F6BFF] border border-[#2F6BFF]/50"
                      : "bg-[#AFA38C]/20 text-[#AFA38C] border border-[rgba(216,203,179,0.3)]"
                  }`}
                >
                  {humanApproved ? (
                    <>
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>SIGN-OFF CONFIRMED</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-3.5 h-3.5" />
                      <span>HOLD IN REVIEW</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-[10px] text-[#AFA38C] border-t border-[rgba(216,203,179,0.08)] pt-2 flex items-center justify-between">
                <span>VERIFIER: Hemanth Dadi (Founder & System Architect)</span>
                <span className="text-[#D8CBB3] font-mono">LATENCY: 1.4s</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 3 Visualizer: 100% Deterministic Rule Engine */}
        {activeStep === 3 && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-[#AFA38C] text-[11px]">
              <span>EXECUTION: PYTHON (PYODIDE WASM / CLOUD RUN)</span>
              <span className="text-[#2F6BFF]">EU REGULATION 2023/956</span>
            </div>
            <div className="p-3 rounded bg-[#1A1A18] border border-[rgba(216,203,179,0.18)] space-y-2 font-mono text-[11px]">
              <div className="text-[#AFA38C] font-mono text-[10px]">
                def compute_annex_v(attr_em_dir, attr_em_indir, activity_level):
              </div>
              <div className="text-[#2F6BFF] pl-3">
                see_total = (attr_em_dir + attr_em_indir) / activity_level
              </div>
              <div className="text-[#AFA38C] pl-3">
                cbam_cert_liability = max(0.0, (see_total - eu_benchmark)) * ets_price
              </div>
              <div className="flex justify-between items-center border-t border-[rgba(216,203,179,0.1)] pt-2 text-xs">
                <span className="text-[#D8CBB3]">Deterministic Annex V Output:</span>
                <span className="text-[#2F6BFF] font-bold">2.254 tCO₂ / tonne</span>
              </div>
            </div>
          </div>
        )}

        {/* Console Log Feed */}
        <div className="p-2.5 rounded bg-[#141413] border border-[rgba(216,203,179,0.08)] space-y-1 font-mono text-[10.5px] max-h-24 overflow-y-auto">
          {telemetryLog.slice(-4).map((log, i) => (
            <div key={i} className="text-[#AFA38C] hover:text-[#D8CBB3] transition-colors">
              {log}
            </div>
          ))}
        </div>

        {/* Interactive Bottom Trigger */}
        <div className="flex items-center justify-between pt-1 border-t border-[rgba(216,203,179,0.08)]">
          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className="px-3 py-1.5 rounded bg-[#2F6BFF] text-white text-xs font-mono font-semibold hover:bg-[#4A7FFF] transition-all flex items-center space-x-1.5 disabled:opacity-50 shadow-[0_0_12px_rgba(47,107,255,0.3)]"
          >
            {isSimulating ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>EXECUTING STREAM...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>SIMULATE LIVE PIPELINE</span>
              </>
            )}
          </button>
          <span className="text-[10px] text-[#AFA38C] font-mono">
            ZERO HALLUCINATION CODESPACED
          </span>
        </div>
      </div>
    </div>
  );
}
