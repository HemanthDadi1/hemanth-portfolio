"use client";

import React, { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, Copy, Check, CheckCircle2 } from "lucide-react";

export default function DirectContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText("hemanthdadi3@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[rgba(216,203,179,0.12)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Direct Transmissions */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-mono text-[#2F6BFF]">DIRECT TRANSMISSION // CONTACT</div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#EFE8DC]">Initiate Line</h2>
          <p className="text-xs sm:text-sm text-[#AFA38C] leading-relaxed">
            For technical advisory, forward-deployed AI engineering, or discussions on deterministic operations research:
          </p>

          <div className="space-y-2.5 font-mono text-xs pt-1">
            <div className="p-3 rounded bg-[#242421] border border-[rgba(216,203,179,0.14)] flex items-center justify-between">
              <div>
                <div className="text-[10px] text-[#AFA38C]">DIRECT EMAIL</div>
                <a href="mailto:hemanthdadi3@gmail.com" className="text-[#EFE8DC] hover:text-[#2F6BFF]">
                  hemanthdadi3@gmail.com
                </a>
              </div>
              <button
                onClick={copyEmail}
                className="p-1 px-2 rounded bg-[#1E1E1C] border border-[rgba(216,203,179,0.14)] text-[#D8CBB3] hover:text-white"
              >
                {copied ? "COPIED" : "COPY"}
              </button>
            </div>

            <div className="p-3 rounded bg-[#242421] border border-[rgba(216,203,179,0.14)] flex items-center justify-between">
              <div>
                <div className="text-[10px] text-[#AFA38C]">WHATSAPP DIRECT</div>
                <a href="https://wa.me/917780370182" target="_blank" rel="noreferrer" className="text-[#EFE8DC] hover:text-[#2F6BFF]">
                  hemanth_dadi ↗
                </a>
              </div>
              <span className="text-[#2F6BFF] text-[10px]">ACTIVE</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="https://www.linkedin.com/in/hemanth-d-0b95a5201/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded bg-[#242421] border border-[rgba(216,203,179,0.14)] hover:border-[#2F6BFF]/50 text-center text-[#D8CBB3] hover:text-white"
              >
                LinkedIn Profile ↗
              </a>
              <a
                href="https://github.com/HemanthDadi1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded bg-[#242421] border border-[rgba(216,203,179,0.14)] hover:border-[#2F6BFF]/50 text-center text-[#D8CBB3] hover:text-white"
              >
                GitHub Repos ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right: Dispatch Box */}
        <div className="lg:col-span-7 rounded-xl bg-[#242421] border border-[rgba(216,203,179,0.16)] p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[rgba(216,203,179,0.12)] font-mono text-xs">
            <span className="text-[#EFE8DC] font-semibold">PROJECT DISPATCH</span>
            <span className="text-[#AFA38C] text-[10px]">HYDERABAD NODE</span>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-2 font-mono">
              <div className="text-[#2F6BFF] text-sm font-bold flex items-center justify-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>DISPATCH QUEUED TO FOUNDER</span>
              </div>
              <div className="text-[#AFA38C] text-xs">Direct response stream active within 12 hours.</div>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-3 px-3 py-1 text-xs text-[#D8CBB3] hover:text-white underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[#AFA38C] text-[10px]">NAME</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 rounded bg-[#1A1A18] border border-[rgba(216,203,179,0.14)] text-[#EFE8DC] focus:outline-none focus:border-[#2F6BFF]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[#AFA38C] text-[10px]">EMAIL</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@org.com"
                    className="w-full px-3 py-2 rounded bg-[#1A1A18] border border-[rgba(216,203,179,0.14)] text-[#EFE8DC] focus:outline-none focus:border-[#2F6BFF]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[#AFA38C] text-[10px]">INQUIRY / BRIEF</label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="System requirements, engineering collaboration, or advisory details..."
                  className="w-full px-3 py-2 rounded bg-[#1A1A18] border border-[rgba(216,203,179,0.14)] text-[#EFE8DC] focus:outline-none focus:border-[#2F6BFF] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-sm bg-[#2F6BFF] text-white font-bold tracking-wider uppercase hover:bg-[#4A7FFF] transition-all shadow-[0_0_15px_rgba(47,107,255,0.4)] flex items-center justify-center space-x-1.5"
              >
                <span>TRANSMIT DISPATCH</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
