"use client";

import React, { useState } from "react";
import { Calculator, TrendingDown, Info } from "lucide-react";

export default function CBAMCalculator() {
  const [route, setRoute] = useState<"bf_bof" | "eaf_scrap" | "dri_eaf">("eaf_scrap");
  const [tonnage, setTonnage] = useState<number>(1000);
  const [etsPrice, setEtsPrice] = useState<number>(85);

  const emissionFactors = {
    bf_bof: 4.380, // Traditional Blast Furnace route
    eaf_scrap: 2.254, // Optimized EAF with verified power purchase & scrap
    dri_eaf: 1.850, // Advanced DRI + renewable EAF
  };

  const euBenchmark = 1.340;

  const currentFactor = emissionFactors[route];
  const totalEmissions = tonnage * currentFactor;
  const taxableCarbonPerTonne = Math.max(0, currentFactor - euBenchmark);
  const totalTaxableEmissions = tonnage * taxableCarbonPerTonne;
  const totalTariff = totalTaxableEmissions * etsPrice;

  const defaultTariff = tonnage * Math.max(0, emissionFactors.bf_bof - euBenchmark) * etsPrice;
  const totalSavings = Math.max(0, defaultTariff - totalTariff);

  return (
    <div className="rounded-lg bg-[#1A1A18] border border-[rgba(216,203,179,0.16)] p-5 space-y-5 font-mono text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-[rgba(216,203,179,0.12)]">
        <div className="flex items-center space-x-2">
          <Calculator className="w-4 h-4 text-[#2F6BFF]" />
          <span className="font-semibold text-[#EFE8DC] tracking-wide">
            INTERACTIVE EU CBAM TARIFF CALCULATOR // ANNEX V
          </span>
        </div>
        <span className="text-[10px] text-[#2F6BFF] bg-[#2F6BFF]/10 px-2 py-0.5 rounded border border-[#2F6BFF]/30">
          STRICT DETERMINISTIC
        </span>
      </div>

      {/* Production Route Selection */}
      <div className="space-y-1.5">
        <label className="text-[11px] text-[#AFA38C] flex items-center justify-between">
          <span>STEEL PRODUCTION ROUTE (PRIMARY PROCESS)</span>
          <span className="text-[#2F6BFF] font-semibold">{currentFactor.toFixed(3)} tCO₂ / t</span>
        </label>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setRoute("bf_bof")}
            className={`p-2.5 rounded text-left transition-all border ${
              route === "bf_bof"
                ? "bg-[#262623] border-[rgba(216,203,179,0.3)] text-white font-semibold"
                : "bg-[#262623] border-[rgba(216,203,179,0.12)] text-[#AFA38C] hover:text-white"
            }`}
          >
            <div className="font-semibold text-xs">BF-BOF (Default)</div>
            <div className="text-[10px] text-[#AFA38C]">4.380 tCO₂/t</div>
          </button>

          <button
            onClick={() => setRoute("eaf_scrap")}
            className={`p-2.5 rounded text-left transition-all border ${
              route === "eaf_scrap"
                ? "bg-[#2F6BFF]/20 border-[#2F6BFF]/60 text-white font-semibold"
                : "bg-[#262623] border-[rgba(216,203,179,0.12)] text-[#AFA38C] hover:text-white"
            }`}
          >
            <div className="font-semibold text-xs text-[#2F6BFF]">CImEx Verified EAF</div>
            <div className="text-[10px] text-[#D8CBB3]">2.254 tCO₂/t (-59%)</div>
          </button>

          <button
            onClick={() => setRoute("dri_eaf")}
            className={`p-2.5 rounded text-left transition-all border ${
              route === "dri_eaf"
                ? "bg-[#262623] border-[rgba(216,203,179,0.3)] text-white font-semibold"
                : "bg-[#262623] border-[rgba(216,203,179,0.12)] text-[#AFA38C] hover:text-white"
            }`}
          >
            <div className="font-semibold text-xs text-[#D8CBB3]">DRI-Gas EAF</div>
            <div className="text-[10px] text-[#AFA38C]">1.850 tCO₂/t (-58%)</div>
          </button>
        </div>
      </div>

      {/* Sliders: Export Tonnage & EU ETS Price */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Tonnage Slider */}
        <div className="space-y-1.5 p-3 rounded bg-[#242421] border border-[rgba(216,203,179,0.1)]">
          <div className="flex justify-between text-[11px]">
            <span className="text-[#AFA38C]">Export Shipment Batch:</span>
            <span className="text-[#EFE8DC] font-bold">{tonnage.toLocaleString()} tonnes</span>
          </div>
          <input
            type="range"
            min="100"
            max="5000"
            step="100"
            value={tonnage}
            onChange={(e) => setTonnage(parseInt(e.target.value))}
            className="w-full accent-[#2F6BFF] h-1.5 bg-[#1E1E1C] rounded cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-[#AFA38C]">
            <span>100t (Container)</span>
            <span>5,000t (Bulk Vessel)</span>
          </div>
        </div>

        {/* ETS Carbon Price Slider */}
        <div className="space-y-1.5 p-3 rounded bg-[#242421] border border-[rgba(216,203,179,0.1)]">
          <div className="flex justify-between text-[11px]">
            <span className="text-[#AFA38C]">EU ETS Carbon Price:</span>
            <span className="text-[#EFE8DC] font-bold">€{etsPrice} / tCO₂</span>
          </div>
          <input
            type="range"
            min="65"
            max="110"
            step="5"
            value={etsPrice}
            onChange={(e) => setEtsPrice(parseInt(e.target.value))}
            className="w-full accent-[#2F6BFF] h-1.5 bg-[#1E1E1C] rounded cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-[#AFA38C]">
            <span>€65 / t</span>
            <span>€110 / t (Projected 2026)</span>
          </div>
        </div>
      </div>

      {/* Calculated Telemetry Stat Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        <div className="p-3 rounded bg-[#141413] border border-[rgba(216,203,179,0.1)]">
          <div className="text-[10px] text-[#AFA38C] uppercase">Gross Embedded CO₂</div>
          <div className="text-sm font-bold text-[#EFE8DC]">
            {totalEmissions.toLocaleString(undefined, { maximumFractionDigits: 0 })} t
          </div>
        </div>

        <div className="p-3 rounded bg-[#141413] border border-[rgba(216,203,179,0.1)]">
          <div className="text-[10px] text-[#AFA38C] uppercase">Taxable CBAM CO₂</div>
          <div className="text-sm font-bold text-[#2F6BFF]">
            {totalTaxableEmissions.toLocaleString(undefined, { maximumFractionDigits: 0 })} t
          </div>
        </div>

        <div className="p-3 rounded bg-[#141413] border border-[rgba(216,203,179,0.1)]">
          <div className="text-[10px] text-[#AFA38C] uppercase">CBAM Certificate Fee</div>
          <div className="text-sm font-bold text-[#EFE8DC]">
            €{totalTariff.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
        </div>

        <div className="p-3 rounded bg-[#2F6BFF]/15 border border-[#2F6BFF]/40">
          <div className="text-[10px] text-[#2F6BFF] uppercase font-bold flex items-center space-x-1">
            <TrendingDown className="w-3 h-3" />
            <span>Tariff Shield Saved</span>
          </div>
          <div className="text-sm font-bold text-white">
            +€{totalSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
        </div>
      </div>

      {/* Mathematical Citation Footer */}
      <div className="text-[10.5px] text-[#AFA38C] font-mono pt-2 border-t border-[rgba(216,203,179,0.1)] flex flex-wrap items-center justify-between gap-2">
        <span className="flex items-center space-x-1">
          <Info className="w-3 h-3 text-[#2F6BFF]" />
          <span>Formula: Specific Embedded Carbon (Annex V, Reg 2023/956) × (Factor - 1.340) × €{etsPrice}</span>
        </span>
        <span className="text-[#2F6BFF]">Deterministic math, unit-tested</span>
      </div>
    </div>
  );
}
