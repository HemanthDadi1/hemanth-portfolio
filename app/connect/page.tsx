"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Mail, MessageSquare, Briefcase, Globe, Download, Share2, Check, QrCode } from "lucide-react";

export default function ConnectPage() {
  const [activeQr, setActiveQr] = useState<"card" | "vcard">("card");
  const [copied, setCopied] = useState(false);

  const handleShareOrCopy = () => {
    if (navigator.share) {
      navigator.share({
        title: "Hemanth Dadi — AI Systems Architect",
        text: "Portfolio, LinkedIn, and Direct Contact for Hemanth Dadi",
        url: "https://hemanth-portfolio-beryl.vercel.app/connect",
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText("https://hemanth-portfolio-beryl.vercel.app/connect");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main className="min-h-screen bg-[#101114] text-[#D8CBB3] selection:bg-[#2F6BFF]/30 selection:text-[#F5EFE6] py-12 px-4 sm:px-6 relative overflow-x-hidden">
      {/* Background Micro-Grids & Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,rgba(216,203,179,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(216,203,179,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-60"></div>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#2F6BFF]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-xl mx-auto space-y-6 relative z-10">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between font-mono text-xs pb-2 border-b border-[rgba(216,203,179,0.1)]">
          <Link
            href="/"
            className="inline-flex items-center space-x-1.5 text-[#A39985] hover:text-[#2F6BFF] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO PORTFOLIO</span>
          </Link>
          <button
            onClick={handleShareOrCopy}
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-[#181A20] border border-[rgba(216,203,179,0.14)] text-[#D8CBB3] hover:text-white hover:border-[#2F6BFF]/50 transition-all"
          >
            <Share2 className="w-3.5 h-3.5 text-[#2F6BFF]" />
            <span>{copied ? "LINK COPIED" : "SHARE CARD"}</span>
          </button>
        </div>

        {/* Founder Monogram & Identity Block */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#181A20] border border-[rgba(216,203,179,0.16)] shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-5 text-center">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-2xl bg-[#101114] border-2 border-[rgba(216,203,179,0.2)] flex items-center justify-center font-mono text-xl font-bold text-[#2F6BFF] shadow-[0_0_20px_rgba(47,107,255,0.25)]">
              HD
            </div>
          </div>

          <div className="space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-[#F5EFE6] tracking-tight">
              Hemanth Dadi
            </h1>
            <p className="text-xs sm:text-sm font-mono text-[#2F6BFF] font-semibold tracking-wide">
              AI SYSTEMS ARCHITECT &bull; INDUSTRIAL TECH FOUNDER
            </p>
            <div className="flex items-center justify-center space-x-1.5 font-mono text-[11px] text-[#A39985] pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
              <span>HYDERABAD, IN (17.3850° N, 78.4867° E)</span>
              <span className="text-[rgba(216,203,179,0.3)]">//</span>
              <span className="text-[#10B981]">ONLINE</span>
            </div>
          </div>

          {/* Core Axiom Badge */}
          <div className="p-3 rounded-xl bg-[#101114] border border-[rgba(216,203,179,0.12)] font-mono text-xs text-[#D8CBB3]">
            <div className="text-[10px] text-[#2F6BFF] font-semibold uppercase tracking-wider pb-0.5">Core Axiom</div>
            &ldquo;AI reads. People confirm. Rules decide.&rdquo;
          </div>

          {/* QR Code Presentation Box */}
          <div className="p-5 rounded-2xl bg-[#101114] border border-[rgba(216,203,179,0.14)] space-y-4">
            <div className="flex items-center justify-center space-x-2 font-mono text-xs">
              <button
                onClick={() => setActiveQr("card")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeQr === "card"
                    ? "bg-[#2F6BFF] text-white font-semibold shadow-[0_0_12px_rgba(47,107,255,0.4)]"
                    : "bg-[#181A20] text-[#A39985] hover:text-white"
                }`}
              >
                Digital Hub QR
              </button>
              <button
                onClick={() => setActiveQr("vcard")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeQr === "vcard"
                    ? "bg-[#2F6BFF] text-white font-semibold shadow-[0_0_12px_rgba(47,107,255,0.4)]"
                    : "bg-[#181A20] text-[#A39985] hover:text-white"
                }`}
              >
                Add-to-Contacts vCard
              </button>
            </div>

            <div className="flex justify-center py-2">
              <div className="p-3 rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.6)] border-4 border-[#2F6BFF]/20 inline-block">
                <img
                  src={activeQr === "card" ? "/qr/hemanth_connect_qr.png" : "/qr/hemanth_vcard_qr.png"}
                  alt="Hemanth Dadi QR Code"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="text-xs font-mono text-[#A39985] space-y-1">
              <p className="text-[#F5EFE6] font-medium">
                {activeQr === "card"
                  ? "Scan with any smartphone camera to open this digital executive card"
                  : "Scan with any smartphone camera to save Hemanth Dadi directly to your phone contacts"}
              </p>
              <div className="flex items-center justify-center space-x-3 pt-2">
                <a
                  href={activeQr === "card" ? "/qr/hemanth_connect_qr.png" : "/qr/hemanth_vcard_qr.png"}
                  download={activeQr === "card" ? "hemanth_dadi_qr.png" : "hemanth_dadi_vcard_qr.png"}
                  className="inline-flex items-center space-x-1 text-[11px] text-[#2F6BFF] hover:underline"
                >
                  <Download className="w-3 h-3" />
                  <span>Download PNG</span>
                </a>
                <span className="text-[rgba(216,203,179,0.3)]">&bull;</span>
                <a
                  href={activeQr === "card" ? "/qr/hemanth_connect_qr.svg" : "/qr/hemanth_vcard_qr.svg"}
                  download={activeQr === "card" ? "hemanth_dadi_qr.svg" : "hemanth_dadi_vcard_qr.svg"}
                  className="inline-flex items-center space-x-1 text-[11px] text-[#2F6BFF] hover:underline"
                >
                  <Download className="w-3 h-3" />
                  <span>Download Vector SVG</span>
                </a>
              </div>
            </div>
          </div>

          {/* Action Links List */}
          <div className="space-y-2.5 font-mono text-xs pt-1">
            {/* 1. Main Portfolio */}
            <Link
              href="/"
              className="p-3.5 rounded-xl bg-[#101114] border border-[rgba(216,203,179,0.14)] hover:border-[#2F6BFF] flex items-center justify-between text-left transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-[#181A20] text-[#2F6BFF] group-hover:bg-[#2F6BFF] group-hover:text-white transition-colors">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[#F5EFE6] font-bold text-sm group-hover:text-[#2F6BFF] transition-colors">
                    Official Portfolio & Systems
                  </div>
                  <div className="text-[11px] text-[#A39985]">hemanth-portfolio-beryl.vercel.app</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#A39985] group-hover:text-[#2F6BFF]" />
            </Link>

            {/* 2. LinkedIn */}
            <a
              href="https://www.linkedin.com/in/hemanth-d-0b95a5201/"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-xl bg-[#101114] border border-[rgba(216,203,179,0.14)] hover:border-[#2F6BFF] flex items-center justify-between text-left transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-[#181A20] text-[#2F6BFF] group-hover:bg-[#2F6BFF] group-hover:text-white transition-colors">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[#F5EFE6] font-bold text-sm group-hover:text-[#2F6BFF] transition-colors">
                    LinkedIn Profile
                  </div>
                  <div className="text-[11px] text-[#A39985]">linkedin.com/in/hemanth-d-0b95a5201</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#A39985] group-hover:text-[#2F6BFF]" />
            </a>

            {/* 3. WhatsApp Direct */}
            <a
              href="https://wa.me/917780370182"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-xl bg-[#101114] border border-[rgba(216,203,179,0.14)] hover:border-[#10B981] flex items-center justify-between text-left transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-[#181A20] text-[#10B981] group-hover:bg-[#10B981] group-hover:text-white transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[#F5EFE6] font-bold text-sm group-hover:text-[#10B981] transition-colors">
                    WhatsApp Direct Chat
                  </div>
                  <div className="text-[11px] text-[#A39985]">@hemanth_dadi &bull; Fast Founder Response</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/30">ACTIVE</span>
                <ExternalLink className="w-4 h-4 text-[#A39985] group-hover:text-[#10B981]" />
              </div>
            </a>

            {/* 4. Direct Email */}
            <a
              href="mailto:hemanthdadi3@gmail.com"
              className="p-3.5 rounded-xl bg-[#101114] border border-[rgba(216,203,179,0.14)] hover:border-[#2F6BFF] flex items-center justify-between text-left transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-[#181A20] text-[#2F6BFF] group-hover:bg-[#2F6BFF] group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[#F5EFE6] font-bold text-sm group-hover:text-[#2F6BFF] transition-colors">
                    Direct Founder Email
                  </div>
                  <div className="text-[11px] text-[#A39985]">hemanthdadi3@gmail.com</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#A39985] group-hover:text-[#2F6BFF]" />
            </a>

            {/* 5. 1-Click Save vCard to Phone */}
            <a
              href="/hemanth_dadi.vcf"
              download="hemanth_dadi.vcf"
              className="p-3.5 rounded-xl bg-[#2F6BFF] hover:bg-[#4D82FF] text-white flex items-center justify-center space-x-2 font-bold transition-all shadow-[0_0_20px_rgba(47,107,255,0.4)] text-sm"
            >
              <Download className="w-4 h-4" />
              <span>SAVE CONTACT TO PHONE (.VCF)</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center font-mono text-[11px] text-[#A39985] pt-2">
          &copy; 2026 Hemanth Dadi &bull; Deterministic AI & Industrial Operations
        </div>
      </div>
    </main>
  );
}
