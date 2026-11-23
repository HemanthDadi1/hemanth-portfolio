import React from "react";
import MammutNavbar from "@/components/MammutNavbar";
import MammutHero from "@/components/MammutHero";
import MammutThesisBlock from "@/components/MammutThesisBlock";
import InteractiveSystemsShowcase from "@/components/InteractiveSystemsShowcase";
import CapabilitiesAccordion from "@/components/CapabilitiesAccordion";
import ResearchLineageSection from "@/components/ResearchLineageSection";
import MammutContactSection from "@/components/MammutContactSection";
import ScrollHudRail from "@/components/ScrollHudRail";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden bg-[#101114] text-[#D8CBB3] selection:bg-[#2F6BFF]/30 selection:text-[#F5EFE6]">
      {/* Background Micro-Grids & Ambient Blue Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,rgba(216,203,179,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(216,203,179,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60"></div>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#2F6BFF]/8 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Floating Minimal HUD Navigation */}
      <MammutNavbar />

      {/* Floating Right-Side HUD Scroll Indicator Rail */}
      <ScrollHudRail />

      {/* Full-Page Snap Scroll Container */}
      <div id="scroll-container" className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth relative z-10">
        <MammutHero />
        <MammutThesisBlock />
        <InteractiveSystemsShowcase />
        <CapabilitiesAccordion />
        <ResearchLineageSection />
        <MammutContactSection />
      </div>
    </main>
  );
}
