"use client";

import React, { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, Copy, Check, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ContactDrawer() {
  const [copied, setCopied] = useState(false);
  const [inquiryType, setInquiryType] = useState<string>("cbam");
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hemanthdadi3@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Direct Transmissions & Coordinates */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#00F0FF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
              <span>DIRECT TRANSMISSION // FOUNDER CONTACT</span>
            </div>
            <h2 className="text-3xl font-sans font-bold text-white tracking-tight">
              Initiate Direct Line
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
              Whether you are an Indian steel/aluminum exporter navigating the EU CBAM cliff, an industrial manufacturing enterprise requiring zero-hallucination ERP automation, or an engineering team looking for forward-deployed AI architecture:
            </p>
          </div>

          {/* Contact Direct Cards */}
          <div className="space-y-3 font-mono text-xs">
            {/* Email */}
            <div className="p-3.5 rounded bg-[#0D1017] border border-white/10 flex items-center justify-between group hover:border-[#00F0FF]/40 transition-colors">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#00F0FF]" />
                <div>
                  <div className="text-[10px] text-slate-400">DIRECT EMAIL</div>
                  <a
                    href="mailto:hemanthdadi3@gmail.com"
                    className="text-white hover:text-[#00F0FF] transition-colors"
                  >
                    hemanthdadi3@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="p-1.5 rounded bg-white/5 text-slate-400 hover:text-white"
                title="Copy email"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone */}
            <div className="p-3.5 rounded bg-[#0D1017] border border-white/10 flex items-center justify-between group hover:border-[#00F0FF]/40 transition-colors">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-400" />
                <div>
                  <div className="text-[10px] text-slate-400">WHATSAPP DIRECT</div>
                  <a
                    href="https://wa.me/917780370182"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-emerald-400 transition-colors"
                  >
                    hemanth_dadi ↗
                  </a>
                </div>
              </div>
              <span className="text-[10px] text-emerald-400">ACTIVE</span>
            </div>

            {/* LinkedIn & GitHub */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://www.linkedin.com/in/hemanth-d-0b95a5201/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded bg-[#0D1017] border border-white/10 hover:border-[#00F0FF]/40 transition-colors flex items-center space-x-2 text-slate-300 hover:text-white"
              >
                <Linkedin className="w-4 h-4 text-[#00F0FF]" />
                <span className="text-xs">LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com/HemanthDadi1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded bg-[#0D1017] border border-white/10 hover:border-[#00F0FF]/40 transition-colors flex items-center space-x-2 text-slate-300 hover:text-white"
              >
                <Github className="w-4 h-4 text-[#00F0FF]" />
                <span className="text-xs">GitHub Repos</span>
              </a>
            </div>
          </div>

          {/* Sovereign Base Info */}
          <div className="p-4 rounded bg-black/40 border border-white/5 font-mono text-[11px] text-slate-400 space-y-1">
            <div className="flex justify-between">
              <span>LOCATION:</span>
              <span className="text-white">Hyderabad, Telangana, India</span>
            </div>
            <div className="flex justify-between">
              <span>GEOLOCATION:</span>
              <span className="text-[#00F0FF]">17.3850° N, 78.4867° E</span>
            </div>
            <div className="flex justify-between">
              <span>SECURITY PROTOCOL:</span>
              <span className="text-emerald-400">SOVEREIGN AIR-GAPPED READY</span>
            </div>
          </div>
        </div>

        {/* Right: Interactive Inquiry Console */}
        <div className="lg:col-span-7 rounded-xl bg-[#0D1017]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
            <div className="font-mono text-xs text-white font-semibold flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#00F0FF]" />
              <span>PROJECT INQUIRY DISPATCH // DIRECT TO FOUNDER</span>
            </div>
            <span className="font-mono text-[10px] text-slate-400">RESPONSE: &lt; 12 HRS</span>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4 font-mono">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Transmission Received</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Your dispatch has been queued to Hemanth Dadi&apos;s direct priority stream. An encrypted response will follow within 12 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 rounded bg-white/5 border border-white/10 text-xs text-slate-300 hover:text-white"
              >
                Send Another Dispatch
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              {/* Engagement Type Selector */}
              <div className="space-y-2">
                <label className="text-slate-400 text-[11px]">ENGAGEMENT SCOPE</label>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <button
                    type="button"
                    onClick={() => setInquiryType("cbam")}
                    className={`p-2.5 rounded text-left transition-all border ${
                      inquiryType === "cbam"
                        ? "bg-[#00F0FF]/15 border-[#00F0FF]/50 text-white font-semibold"
                        : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    EU CBAM Compliance (CImEx)
                  </button>
                  <button
                    type="button"
                    onClick={() => setInquiryType("erp")}
                    className={`p-2.5 rounded text-left transition-all border ${
                      inquiryType === "erp"
                        ? "bg-[#00F0FF]/15 border-[#00F0FF]/50 text-white font-semibold"
                        : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    Custom Multimodal ERP Pipeline
                  </button>
                  <button
                    type="button"
                    onClick={() => setInquiryType("pred_maint")}
                    className={`p-2.5 rounded text-left transition-all border ${
                      inquiryType === "pred_maint"
                        ? "bg-[#00F0FF]/15 border-[#00F0FF]/50 text-white font-semibold"
                        : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    Predictive Maintenance / MILP
                  </button>
                  <button
                    type="button"
                    onClick={() => setInquiryType("advisory")}
                    className={`p-2.5 rounded text-left transition-all border ${
                      inquiryType === "advisory"
                        ? "bg-[#00F0FF]/15 border-[#00F0FF]/50 text-white font-semibold"
                        : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    Founder / Architecture Advisory
                  </button>
                </div>
              </div>

              {/* Name & Org */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-400 text-[11px]">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Vikram Sharma"
                    className="w-full px-3 py-2 rounded bg-black/60 border border-white/10 text-white focus:outline-none focus:border-[#00F0FF]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-slate-400 text-[11px]">ORGANIZATION / STEEL MILL</label>
                  <input
                    type="text"
                    required
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Apex Steels & Forgings Ltd."
                    className="w-full px-3 py-2 rounded bg-black/60 border border-white/10 text-white focus:outline-none focus:border-[#00F0FF]"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-slate-400 text-[11px]">CORPORATE EMAIL</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="v.sharma@apexsteels.in"
                  className="w-full px-3 py-2 rounded bg-black/60 border border-white/10 text-white focus:outline-none focus:border-[#00F0FF]"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-slate-400 text-[11px]">PROJECT CONSTRAINTS & REQUIREMENTS</label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Details regarding your mill capacity, trade route, current ERP (SAP/Oracle), or target deployment timeline..."
                  className="w-full px-3 py-2 rounded bg-black/60 border border-white/10 text-white focus:outline-none focus:border-[#00F0FF] resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-sm bg-[#00F0FF] text-black font-bold tracking-wider uppercase hover:bg-[#00F0FF]/90 transition-all flex items-center justify-center space-x-2 shadow-[0_0_25px_rgba(0,240,255,0.3)]"
              >
                <span>TRANSMIT DISPATCH</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
