"use client";

import React, { useState } from "react";

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
    <section id="contact" className="h-screen min-h-[680px] flex flex-col justify-center px-4 sm:px-6 max-w-6xl mx-auto snap-start snap-always relative box-border py-12 border-t border-[rgba(216,203,179,0.08)]">
      <div className="space-y-6 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-[#2F6BFF]">06. DIRECT TRANSMISSION // FOUNDER DESK</div>
            <h2 className="text-3xl font-display font-bold text-[#F5EFE6]">Let&apos;s Architect Systems</h2>
            <p className="text-sm text-[#A39985] leading-relaxed font-sans">
              Whether you are building forward-deployed AI for physical industrial facilities, solving mission-critical operations research problems, or looking for advisory:
            </p>

          <div className="space-y-3 font-mono text-xs pt-2">
            <div className="p-4 rounded-xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] flex items-center justify-between">
              <div>
                <div className="text-[10px] text-[#A39985]">DIRECT EMAIL</div>
                <a href="mailto:hemanthdadi3@gmail.com" className="text-[#F5EFE6] hover:text-[#2F6BFF]">
                  hemanthdadi3@gmail.com
                </a>
              </div>
              <button
                onClick={handleCopy}
                className="p-1 px-2.5 rounded-md bg-[#101114] border border-[rgba(216,203,179,0.16)] text-[#D8CBB3] hover:text-white"
              >
                {copied ? "COPIED" : "COPY"}
              </button>
            </div>

            <div className="p-4 rounded-xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] flex items-center justify-between">
              <div>
                <div className="text-[10px] text-[#A39985]">TELEPHONE / WHATSAPP</div>
                <a href="tel:+917780370182" className="text-[#F5EFE6] hover:text-[#2F6BFF]">
                  +91 7780370182
                </a>
              </div>
              <span className="text-[#2F6BFF] text-[10px]">ACTIVE</span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href="https://www.linkedin.com/in/hemanth-d-0b95a5201/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] hover:border-[#2F6BFF]/60 text-center text-[#D8CBB3] hover:text-white transition-all"
              >
                LinkedIn Profile ↗
              </a>
              <a
                href="https://github.com/HemanthDadi1"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-[#181A20] border border-[rgba(216,203,179,0.14)] hover:border-[#2F6BFF]/60 text-center text-[#D8CBB3] hover:text-white transition-all"
              >
                GitHub Repos ↗
              </a>
            </div>
          </div>
        </div>

        {/* Project Dispatch Box */}
        <div className="lg:col-span-7 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.16)] p-6 sm:p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[rgba(216,203,179,0.12)] font-mono text-xs">
            <span className="text-[#F5EFE6] font-semibold">FOUNDER TRANSMISSION DISPATCH</span>
            <span className="text-[#A39985] text-[10px]">HYDERABAD NODE</span>
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
                    className="w-full px-3 py-2.5 rounded-lg bg-[#101114] border border-[rgba(216,203,179,0.16)] text-[#F5EFE6] focus:outline-none focus:border-[#2F6BFF]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[#A39985] text-[10px]">CORPORATE EMAIL</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full px-3 py-2.5 rounded-lg bg-[#101114] border border-[rgba(216,203,179,0.16)] text-[#F5EFE6] focus:outline-none focus:border-[#2F6BFF]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[#A39985] text-[10px]">SYSTEM REQUIREMENTS & SCOPE</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell me about your industrial facility, operations research problem, or architecture timeline..."
                  className="w-full px-3 py-2.5 rounded-lg bg-[#101114] border border-[rgba(216,203,179,0.16)] text-[#F5EFE6] focus:outline-none focus:border-[#2F6BFF] resize-none"
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

      {/* Bottom Micro Status Strip */}
      <div className="border-t border-[rgba(216,203,179,0.1)] pt-4 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#A39985] gap-2">
        <div>
          <span className="text-[#2F6BFF]">● SYSTEM ONLINE</span> // HEMANTH DADI • HYDERABAD, IN (17.3850° N, 78.4867° E)
        </div>
        <div>
          &copy; 2026 Hemanth Dadi. &ldquo;AI reads. People confirm. Rules decide.&rdquo;
        </div>
      </div>
    </div>
  </section>
);
}
