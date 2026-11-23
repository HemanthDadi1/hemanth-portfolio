"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[rgba(216,203,179,0.12)] bg-[#141413] py-12 px-4 sm:px-6 lg:px-8 font-mono text-xs">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[rgba(216,203,179,0.08)]">
          {/* Left Brand & Coordinates */}
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#2F6BFF] inline-block animate-pulse" />
              <span className="font-bold text-[#EFE8DC] text-sm">HEMANTH DADI</span>
              <span className="text-[rgba(216,203,179,0.25)]">//</span>
              <span className="text-[#2F6BFF]">AI SYSTEMS ARCHITECT</span>
            </div>
            <div className="text-[11px] text-[#AFA38C]">
              HYDERABAD, INDIA &bull; 17.3850° N, 78.4867° E &bull; SOVEREIGN NODE
            </div>
            <div className="text-[11px] text-[#D8CBB3] italic">
              &ldquo;AI reads. People confirm. Rules decide.&rdquo;
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/HemanthDadi1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-[#242421] text-[#AFA38C] hover:text-[#2F6BFF] hover:bg-[#2A2A27] transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/hemanth-d-0b95a5201/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-[#242421] text-[#AFA38C] hover:text-[#2F6BFF] hover:bg-[#2A2A27] transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:hemanthdadi3@gmail.com"
              className="p-2 rounded bg-[#242421] text-[#AFA38C] hover:text-[#2F6BFF] hover:bg-[#2A2A27] transition-colors"
              title="Email Founder"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-[#242421] text-[#AFA38C] hover:text-white hover:bg-[#2A2A27] transition-colors flex items-center space-x-1"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#AFA38C] gap-4">
          <div>
            &copy; {new Date().getFullYear()} Hemanth Dadi. Engineered for heavy industry & sovereign global trade.
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-[#2F6BFF]">LATENCY: 14ms</span>
            <span>&bull;</span>
            <span>DETERMINISTIC MATH // UNIT-TESTED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
