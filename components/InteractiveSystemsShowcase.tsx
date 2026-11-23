"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";

export default function InteractiveSystemsShowcase() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const startXRef = useRef<number>(0);
  const totalSlides = PROJECTS.length;
  const activeProject = PROJECTS[currentIndex] || PROJECTS[0];

  const goToSlide = useCallback((index: number) => {
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;
    setCurrentIndex(index);
    setDragOffset(0);
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
    setDragOffset(0);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
    setDragOffset(0);
  }, [totalSlides]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target && ["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) return;
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Pointer Drag Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startXRef.current;
    // Edge resistance
    if ((currentIndex === 0 && diff > 0) || (currentIndex === totalSlides - 1 && diff < 0)) {
      setDragOffset(diff * 0.3);
    } else {
      setDragOffset(diff);
    }
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -60) {
      nextSlide();
    } else if (dragOffset > 60) {
      prevSlide();
    } else {
      setDragOffset(0);
    }
  };

  return (
    <section id="work" className="h-screen min-h-[680px] flex flex-col justify-center px-4 sm:px-6 max-w-6xl mx-auto snap-start snap-always relative box-border py-12 border-t border-[rgba(216,203,179,0.08)]">
      <div className="space-y-4 my-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#2F6BFF]">
            <span className="w-2 h-2 rounded-full bg-[#2F6BFF]"></span>
            <span>01. FEATURED SYSTEMS & PRODUCTION DEPLOYMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F5EFE6] tracking-tight">
            Selected Work
          </h2>
          <p className="text-sm text-[#A39985] font-mono max-w-xl">
            Swipe or click any system to inspect its live simulated software interface, operational metrics, and architecture case study.
          </p>
        </div>

        {/* System Selector Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] font-mono text-xs">
          {PROJECTS.map((proj, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={proj.slug}
                onClick={() => goToSlide(idx)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? "bg-[#2F6BFF] text-white font-semibold shadow-[0_0_15px_rgba(47,107,255,0.35)]"
                    : "text-[#D8CBB3] hover:text-white hover:bg-[#101114]"
                }`}
              >
                {proj.slug === "waylosa"
                  ? "WAYLOSA"
                  : proj.slug === "nasa-fleet"
                  ? "NASA FLEET"
                  : proj.slug === "conformal-rul"
                  ? "CONFORMAL UQ"
                  : proj.slug === "cimex"
                  ? "CIMEX CBAM"
                  : "CLOUDSERVE"}
              </button>
            );
          })}
        </div>
      </div>

      {/* INTERACTIVE SOFTWARE MOCKUP FRAME (Mammut Studios Visual Window with Swipe Track) */}
      <div className="rounded-2xl overflow-hidden bg-[#181A20] border border-[rgba(216,203,179,0.16)] shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative group">
        {/* Window Title Bar */}
        <div className="px-4 py-3 bg-[#13151A] border-b border-[rgba(216,203,179,0.1)] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block"></span>
            </div>
            <span className="font-mono text-xs text-[#A39985] hidden sm:inline-block">
              system://{activeProject.slug}.engine/runtime
            </span>
          </div>

          {/* Center Indicator */}
          <div className="flex items-center space-x-3 font-mono text-xs">
            <span className="px-2 py-0.5 rounded bg-[#101114] text-[#2F6BFF] text-[11px] font-semibold border border-[rgba(216,203,179,0.12)]">
              0{currentIndex + 1} / 0{totalSlides}
            </span>
            <div className="hidden md:flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-[#101114] text-[#A39985] text-[10px] border border-[rgba(216,203,179,0.1)]">
              <span>←</span>
              <span>DRAG OR SWIPE</span>
              <span>→</span>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-2 font-mono text-xs">
            <div className="flex items-center space-x-1">
              <button
                onClick={prevSlide}
                aria-label="Previous System"
                className="w-7 h-7 rounded-lg bg-[#101114] border border-[rgba(216,203,179,0.18)] hover:border-[#2F6BFF] text-[#D8CBB3] hover:text-white flex items-center justify-center transition-all"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next System"
                className="w-7 h-7 rounded-lg bg-[#101114] border border-[rgba(216,203,179,0.18)] hover:border-[#2F6BFF] text-[#D8CBB3] hover:text-white flex items-center justify-center transition-all"
              >
                ›
              </button>
            </div>

            <Link
              href={`/work/${activeProject.slug}`}
              className="hidden sm:flex text-[#F5EFE6] hover:text-[#2F6BFF] items-center space-x-1 font-semibold ml-2 transition-colors"
            >
              <span>Case Study</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Viewport & Sliding Flex Track */}
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
        >
          {/* Floating Left / Right Chevrons */}
          <button
            onClick={prevSlide}
            aria-label="Previous System"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#101114]/90 backdrop-blur border border-[rgba(216,203,179,0.2)] text-[#D8CBB3] hover:text-[#2F6BFF] hover:border-[#2F6BFF] flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-xl hidden sm:flex text-lg"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next System"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#101114]/90 backdrop-blur border border-[rgba(216,203,179,0.2)] text-[#D8CBB3] hover:text-[#2F6BFF] hover:border-[#2F6BFF] flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-xl hidden sm:flex text-lg"
          >
            ›
          </button>

          {/* Sliding Track */}
          <div
            className="flex transition-transform ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              width: `${totalSlides * 100}%`,
              transform: `translateX(calc(-${(currentIndex * 100) / totalSlides}% + ${dragOffset}px))`,
              transitionDuration: isDragging ? "0ms" : "450ms",
            }}
          >
            {PROJECTS.map((proj, idx) => (
              <div
                key={proj.slug}
                className="p-6 sm:p-8 space-y-6 shrink-0"
                style={{ width: `${100 / totalSlides}%` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="inline-block px-2.5 py-0.5 rounded bg-[#2F6BFF]/15 text-[#2F6BFF] font-mono text-xs border border-[#2F6BFF]/30">
                      {proj.category.toUpperCase()} &bull; {proj.period}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-[#F5EFE6]">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-[#D8CBB3] font-sans leading-relaxed">
                      {proj.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 font-mono text-xs pt-1">
                      {proj.stack.map((stk, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded bg-[#101114] text-[#A39985] border border-[rgba(216,203,179,0.08)]"
                        >
                          {stk}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Simulated Interface Card */}
                  <div className="lg:col-span-5 p-4 rounded-xl bg-[#101114] border border-[rgba(216,203,179,0.14)] space-y-3 font-mono text-xs">
                    <div className="text-[11px] text-[#A39985] flex justify-between border-b border-[rgba(216,203,179,0.08)] pb-2">
                      <span>SYSTEM_TELEMETRY</span>
                      <span className="text-[#2F6BFF]">STATUS: ONLINE</span>
                    </div>
                    <div className="space-y-1.5 text-[11px]">
                      {proj.keyMetrics.map((met, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-2.5 rounded bg-[#181A20] text-[#F5EFE6] flex justify-between items-center border border-[rgba(216,203,179,0.06)]"
                        >
                          <span className="text-[#A39985]">{met.label}</span>
                          <span className="text-[#2F6BFF] font-bold">{met.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-2 text-[10px] text-[#A39985] flex justify-between border-t border-[rgba(216,203,179,0.08)]">
                      <span>Deterministic Math</span>
                      <span className="text-[#2F6BFF]">Zero Hallucination</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Swipe Indicator & Interactive Navigation Strip */}
        <div className="px-4 sm:px-6 py-3 bg-[#13151A] border-t border-[rgba(216,203,179,0.1)] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs">
          {/* 5-segment interactive pill indicators */}
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            {PROJECTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 bg-[#2F6BFF]"
                    : "w-2.5 bg-[rgba(216,203,179,0.2)] hover:bg-[#2F6BFF]/60"
                }`}
                title={`System 0${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center space-x-4 text-[11px] text-[#A39985]">
            <span className="hidden md:inline">Touch swipe, drag, or use ← / → keys</span>
            <Link
              href={`/work/${activeProject.slug}`}
              className="text-[#2F6BFF] hover:underline flex items-center space-x-1"
            >
              <span>Inspect Full Case Study</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}
