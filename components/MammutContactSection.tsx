"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function MammutContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hemanthdadi3@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="min-h-screen lg:h-screen lg:max-h-screen w-full flex flex-col justify-between px-4 sm:px-8 max-w-6xl mx-auto snap-start relative box-border pt-20 pb-6 sm:pb-8 border-t border-[rgba(216,203,179,0.08)]"
    >
      {/* Top Header */}
      <div className="space-y-1.5 sm:space-y-2">
        <div className="flex items-center space-x-2 text-xs font-mono text-[#2F6BFF]">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
          <span>06. DIRECT TRANSMISSION // FOUNDER DESK</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F5EFE6]">
          Let&apos;s Architect Systems
        </h2>
        <p className="text-xs sm:text-sm text-[#A39985] leading-relaxed font-sans max-w-3xl">
          Whether you are building forward-deployed AI for physical industrial facilities, solving mission-critical operations research problems, or exploring executive advisory:
        </p>
      </div>

      {/* Middle Grid: Contact Options & Dispatch Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start my-2 sm:my-3">
        <div className="lg:col-span-5 space-y-4">
          <div className="space-y-3 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] flex items-center justify-between hover:border-[#2F6BFF]/40 transition-colors">
              <div>
                <div className="text-[11px] text-[#A39985]">DIRECT EMAIL</div>
                <a href="mailto:hemanthdadi3@gmail.com" className="text-sm text-[#F5EFE6] hover:text-[#2F6BFF] font-semibold">
                  hemanthdadi3@gmail.com
                </a>
              </div>
              <button
                onClick={handleCopy}
                className="p-1.5 px-3 rounded-md bg-[#101114] border border-[rgba(216,203,179,0.16)] text-[#D8CBB3] hover:text-white"
              >
                {copied ? "COPIED" : "COPY"}
              </button>
            </div>

            <div className="p-4 rounded-xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] flex items-center justify-between hover:border-[#2F6BFF]/40 transition-colors">
              <div>
                <div className="text-[11px] text-[#A39985]">WHATSAPP DIRECT</div>
                <a
                  href="https://wa.me/917780370182"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#F5EFE6] hover:text-[#2F6BFF] font-semibold flex items-center space-x-1"
                >
                  <span>hemanth_dadi</span>
                  <span className="text-xs text-[#2F6BFF]">↗</span>
                </a>
              </div>
              <span className="text-[#2F6BFF] text-xs font-semibold bg-[#2F6BFF]/10 px-2 py-0.5 rounded border border-[#2F6BFF]/30">ACTIVE</span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href="https://www.linkedin.com/in/hemanth-d-0b95a5201/"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] hover:border-[#2F6BFF]/60 text-center text-[#D8CBB3] hover:text-white transition-all text-xs"
              >
                LinkedIn Profile ↗
              </a>
              <a
                href="https://github.com/HemanthDadi1"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] hover:border-[#2F6BFF]/60 text-center text-[#D8CBB3] hover:text-white transition-all text-xs"
              >
                GitHub Repos ↗
              </a>
            </div>

            {/* Featured QR Code / Digital Card Link */}
            <Link
              href="/connect"
              className="p-3.5 rounded-xl bg-[#101114] border border-[#2F6BFF]/40 hover:border-[#2F6BFF] flex items-center justify-between transition-all group cursor-pointer shadow-[0_0_15px_rgba(47,107,255,0.15)]"
            >
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-white p-1 flex items-center justify-center shrink-0">
                  <img src="/qr/hemanth_connect_qr.png" alt="QR" className="w-full h-full object-contain" />
                </div>
                <div className="text-left">
                  <div className="text-[#F5EFE6] font-semibold text-xs group-hover:text-[#2F6BFF] transition-colors flex items-center space-x-1.5">
                    <span>DIGITAL CARD & QR CODE</span>
                    <span className="text-[10px] text-[#10B981] bg-[#10B981]/15 px-1.5 py-0.5 rounded border border-[#10B981]/30">SCAN</span>
                  </div>
                  <div className="text-[10px] text-[#A39985]">hemanth-portfolio-beryl.vercel.app/connect</div>
                </div>
              </div>
              <span className="text-sm text-[#2F6BFF]">→</span>
            </Link>
          </div>
        </div>

        {/* Project Dispatch Box */}
        <div className="lg:col-span-7 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.16)] p-6 sm:p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[rgba(216,203,179,0.12)] font-mono text-xs">
            <span className="text-[#F5EFE6] font-semibold">FOUNDER TRANSMISSION DISPATCH</span>
            <span className="text-[#A39985] text-[11px]">HYDERABAD NODE (17.3850° N, 78.4867° E)</span>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[#A39985] text-[10px]">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Sharma"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#101114] border border-[rgba(216,203,179,0.16)] text-[#F5EFE6] focus:outline-none focus:border-[#2F6BFF]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[#A39985] text-[10px]">CORPORATE EMAIL</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#101114] border border-[rgba(216,203,179,0.16)] text-[#F5EFE6] focus:outline-none focus:border-[#2F6BFF]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[#A39985] text-[10px]">SYSTEM REQUIREMENTS & SCOPE</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell me about your industrial facility, operations research problem, or architecture timeline..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#101114] border border-[rgba(216,203,179,0.16)] text-[#F5EFE6] focus:outline-none focus:border-[#2F6BFF] resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#2F6BFF] text-white font-bold tracking-wider uppercase hover:bg-[#4D82FF] transition-all shadow-[0_0_20px_rgba(47,107,255,0.4)] flex items-center justify-center space-x-2"
              >
                <span>TRANSMIT DISPATCH TO FOUNDER</span>
                <span>↗</span>
              </button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-2 font-mono">
              <div className="text-[#2F6BFF] text-sm font-bold">✓ DISPATCH QUEUED TO FOUNDER STREAM</div>
              <div className="text-[#A39985] text-xs">
                Direct response channel active within 12 hours from Hyderabad node.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Footer Telemetry Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 pb-1 border-t border-[rgba(216,203,179,0.1)] font-mono text-xs">
        <div className="flex items-center space-x-3 text-[#A39985]">
          <span>PAGE 06 / 06</span>
          <span className="text-[rgba(216,203,179,0.3)]">//</span>
          <span>FOUNDER TRANSMISSION</span>
          <span className="text-[rgba(216,203,179,0.3)]">//</span>
          <button
            onClick={() => {
              const el = document.getElementById("hero");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-[#2F6BFF] font-semibold animate-pulse hover:underline flex items-center space-x-1"
          >
            <span>BACK TO TOP ↑</span>
          </button>
        </div>

        <div className="flex items-center space-x-2 text-[#A39985]">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse inline-block"></span>
          <span className="text-[#10B981] font-semibold">HYDERABAD NODE ONLINE</span>
          <span className="text-[rgba(216,203,179,0.3)]">//</span>
          <span>&copy; 2026 Hemanth Dadi</span>
        </div>
      </div>
    </section>
  );
}
