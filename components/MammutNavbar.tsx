"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function MammutNavbar() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hemanthdadi3@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#101114]/85 backdrop-blur-md border-b border-[rgba(216,203,179,0.1)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Founder Brand */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 rounded-lg bg-[#181A20] border border-[rgba(216,203,179,0.2)] flex items-center justify-center font-mono text-xs font-bold text-[#2F6BFF] group-hover:border-[#2F6BFF] transition-all">
            HD
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-[#F5EFE6] group-hover:text-[#2F6BFF] transition-colors">
              HEMANTH DADI
            </span>
            <div className="flex items-center space-x-1.5 font-mono text-[10px] text-[#A39985]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F6BFF] animate-pulse"></span>
              <span>HYDERABAD, IN</span>
              <span className="text-[rgba(216,203,179,0.3)]">//</span>
              <span>AI SYSTEMS ARCHITECT</span>
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 text-xs font-mono">
          <a
            href="#hero"
            className="px-2.5 py-1.5 text-[#D8CBB3] hover:text-[#2F6BFF] hover:bg-[#181A20] rounded-lg transition-all"
          >
            HERO
          </a>
          <a
            href="#thesis"
            className="px-2.5 py-1.5 text-[#D8CBB3] hover:text-[#2F6BFF] hover:bg-[#181A20] rounded-lg transition-all"
          >
            THESIS
          </a>
          <a
            href="#work"
            className="px-2.5 py-1.5 text-[#D8CBB3] hover:text-[#2F6BFF] hover:bg-[#181A20] rounded-lg transition-all"
          >
            WORK
          </a>
          <a
            href="#capabilities"
            className="px-2.5 py-1.5 text-[#D8CBB3] hover:text-[#2F6BFF] hover:bg-[#181A20] rounded-lg transition-all"
          >
            ARCHITECTURE
          </a>
          <a
            href="#research"
            className="px-2.5 py-1.5 text-[#D8CBB3] hover:text-[#2F6BFF] hover:bg-[#181A20] rounded-lg transition-all"
          >
            RESEARCH
          </a>
          <a
            href="#contact"
            className="px-2.5 py-1.5 text-[#D8CBB3] hover:text-[#2F6BFF] hover:bg-[#181A20] rounded-lg transition-all"
          >
            CONTACT
          </a>
        </nav>

        {/* Quick Copy & Transmit */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-lg bg-[#181A20] border border-[rgba(216,203,179,0.18)] hover:border-[#2F6BFF]/60 text-xs font-mono text-[#D8CBB3] hover:text-white flex items-center space-x-1.5 transition-all"
          >
            <svg
              className="w-3.5 h-3.5 text-[#A39985]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              ></path>
            </svg>
            <span className="hidden sm:inline">
              {copied ? "COPIED!" : "hemanthdadi3@gmail.com"}
            </span>
            <span className="sm:hidden">{copied ? "COPIED" : "EMAIL"}</span>
          </button>
          <a
            href="#contact"
            className="hidden sm:flex items-center space-x-1 px-3.5 py-1.5 rounded-lg bg-[#2F6BFF] hover:bg-[#4D82FF] text-white text-xs font-mono font-medium transition-all shadow-[0_0_15px_rgba(47,107,255,0.35)]"
          >
            <span>TRANSMIT</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
