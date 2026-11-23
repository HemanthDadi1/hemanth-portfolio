"use client";

import React, { useState, useEffect } from "react";
import { Copy, Check, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("hemanthdadi3@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1E1E1C]/90 backdrop-blur-md border-b border-[rgba(216,203,179,0.14)] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Live Status */}
        <div className="flex items-center space-x-3">
          <a
            href="#"
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-sm bg-[#262623] border border-[rgba(216,203,179,0.18)] flex items-center justify-center group-hover:border-[#2F6BFF]/60 transition-colors">
              <span className="font-mono text-xs font-bold text-[#2F6BFF]">HD</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-sm tracking-tight text-[#EFE8DC] group-hover:text-[#2F6BFF] transition-colors">
                HEMANTH DADI
              </span>
              <div className="flex items-center space-x-1.5 font-mono text-[10px] text-[#AFA38C]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2F6BFF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#2F6BFF]"></span>
                </span>
                <span>SYSTEM ONLINE</span>
                <span className="text-[rgba(216,203,179,0.25)]">//</span>
                <span className="hidden sm:inline">HYD [17.3850° N, 78.4867° E]</span>
              </div>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 text-xs font-mono">
          <a
            href="#thesis"
            className="px-3 py-1.5 text-[#D8CBB3] hover:text-[#2F6BFF] hover:bg-[#262623] rounded transition-all"
          >
            THESIS
          </a>
          <a
            href="#flagship"
            className="px-3 py-1.5 text-[#D8CBB3] hover:text-[#2F6BFF] hover:bg-[#262623] rounded transition-all"
          >
            CIMEX
          </a>
          <a
            href="#deployments"
            className="px-3 py-1.5 text-[#D8CBB3] hover:text-[#2F6BFF] hover:bg-[#262623] rounded transition-all"
          >
            DEPLOYMENTS
          </a>
          <a
            href="#architecture"
            className="px-3 py-1.5 text-[#D8CBB3] hover:text-[#2F6BFF] hover:bg-[#262623] rounded transition-all"
          >
            ARCHITECTURE
          </a>
          <a
            href="#research"
            className="px-3 py-1.5 text-[#D8CBB3] hover:text-[#2F6BFF] hover:bg-[#262623] rounded transition-all"
          >
            RESEARCH
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center space-x-2">
          {/* Quick Copy Email Button */}
          <button
            onClick={copyEmail}
            className="relative px-3 py-1.5 rounded-sm bg-[#262623] border border-[rgba(216,203,179,0.18)] hover:border-[#2F6BFF]/50 text-xs font-mono text-[#D8CBB3] hover:text-white flex items-center space-x-1.5 transition-all group"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#2F6BFF]" />
                <span className="text-[#2F6BFF] font-semibold">COPIED</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#AFA38C] group-hover:text-[#2F6BFF] transition-colors" />
                <span className="hidden sm:inline">hemanthdadi3@gmail.com</span>
                <span className="sm:hidden">EMAIL</span>
              </>
            )}
          </button>

          {/* Contact / Inquire Action */}
          <a
            href="#contact"
            className="hidden lg:flex items-center space-x-1 px-3.5 py-1.5 rounded-sm bg-[#2F6BFF] hover:bg-[#4A7FFF] text-white text-xs font-mono font-medium transition-all shadow-[0_0_15px_rgba(47,107,255,0.35)]"
          >
            <span>TRANSMIT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-sm bg-[#262623] border border-[rgba(216,203,179,0.18)] text-[#D8CBB3] hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1E1E1C]/95 border-b border-[rgba(216,203,179,0.14)] px-4 py-4 space-y-3 font-mono text-sm">
          <div className="text-[11px] text-[#AFA38C] pb-2 border-b border-[rgba(216,203,179,0.08)] flex items-center justify-between">
            <span>COORDINATES: 17.3850° N, 78.4867° E</span>
            <span className="text-[#2F6BFF]">STATUS: ACTIVE</span>
          </div>
          <a
            href="#thesis"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-[#D8CBB3] hover:text-[#2F6BFF]"
          >
            THESIS
          </a>
          <a
            href="#flagship"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-[#D8CBB3] hover:text-[#2F6BFF]"
          >
            CIMEX COMPLIANCE
          </a>
          <a
            href="#deployments"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-[#D8CBB3] hover:text-[#2F6BFF]"
          >
            DEPLOYMENTS
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-[#D8CBB3] hover:text-[#2F6BFF]"
          >
            ARCHITECTURE
          </a>
          <a
            href="#research"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-[#D8CBB3] hover:text-[#2F6BFF]"
          >
            RESEARCH & PAPERS
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-center rounded bg-[#2F6BFF] text-white font-semibold shadow-[0_0_15px_rgba(47,107,255,0.4)]"
          >
            INITIATE TRANSMISSION
          </a>
        </div>
      )}
    </header>
  );
}
