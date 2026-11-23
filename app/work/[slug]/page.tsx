import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/projects";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";
import CBAMCalculator from "@/components/CBAMCalculator";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default function ProjectSubpage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#1E1E1C] text-[#D8CBB3] selection:bg-[#2F6BFF]/30 selection:text-[#EFE8DC] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-mono text-[#AFA38C] hover:text-[#2F6BFF] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO PORTFOLIO INDEX</span>
        </Link>

        {/* Header Block */}
        <div className="space-y-4 border-b border-[rgba(216,203,179,0.14)] pb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
            <span className="text-[#2F6BFF] bg-[#2F6BFF]/10 px-2.5 py-0.5 rounded border border-[#2F6BFF]/30">
              {project.category}
            </span>
            <span className="text-[#AFA38C]">{project.period}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-sans font-bold text-[#EFE8DC] tracking-tight">
            {project.title}
          </h1>

          <div className="text-sm font-mono text-[#D8CBB3]">
            {project.role}
          </div>

          <p className="text-base sm:text-lg text-[#D8CBB3] font-sans leading-relaxed">
            {project.summary}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded bg-[#2F6BFF] text-white font-semibold hover:bg-[#4A7FFF] transition-all flex items-center space-x-1.5 shadow-[0_0_15px_rgba(47,107,255,0.4)]"
              >
                <span>VISIT PLATFORM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded bg-[#262623] border border-[rgba(216,203,179,0.18)] text-[#D8CBB3] hover:border-[#2F6BFF]/50 hover:text-white transition-all flex items-center space-x-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>SOURCE REPOSITORY</span>
              </a>
            )}
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
          {project.keyMetrics.map((m, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-[#242421] border border-[rgba(216,203,179,0.14)]"
            >
              <div className="text-[10px] text-[#AFA38C] uppercase">{m.label}</div>
              <div className="text-xl font-bold text-[#2F6BFF] mt-1">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Deep Dive Case Study Content */}
        <div className="space-y-8 font-sans">
          {/* Problem Statement */}
          <div className="p-6 rounded-lg bg-[#242421] border border-[rgba(216,203,179,0.14)] space-y-3">
            <h2 className="text-lg font-mono font-bold text-[#EFE8DC] flex items-center space-x-2">
              <span className="text-[#2F6BFF]">01.</span>
              <span>The Industrial / Systems Problem</span>
            </h2>
            <p className="text-sm text-[#D8CBB3] leading-relaxed">
              {project.deepDive.problem}
            </p>
          </div>

          {/* Architecture & Engineering Thesis */}
          <div className="p-6 rounded-lg bg-[#242421] border border-[rgba(216,203,179,0.14)] space-y-3">
            <h2 className="text-lg font-mono font-bold text-[#EFE8DC] flex items-center space-x-2">
              <span className="text-[#2F6BFF]">02.</span>
              <span>Deterministic Architecture & Axioms</span>
            </h2>
            <p className="text-sm text-[#D8CBB3] leading-relaxed">
              {project.deepDive.architecture}
            </p>
            <div className="space-y-2 pt-2">
              {project.deepDive.axiomsApplied.map((axiom, aIdx) => (
                <div key={aIdx} className="flex items-start space-x-2.5 text-xs font-mono text-[#D8CBB3]">
                  <CheckCircle2 className="w-4 h-4 text-[#2F6BFF] shrink-0 mt-0.5" />
                  <span>{axiom}</span>
                </div>
              ))}
            </div>
          </div>

          {/* If CImEx, embed the live interactive CBAM calculator right here */}
          {project.slug === "cimex" && (
            <div className="space-y-3">
              <h2 className="text-lg font-mono font-bold text-[#EFE8DC] flex items-center space-x-2">
                <span className="text-[#2F6BFF]">03.</span>
                <span>Interactive Annex V Stoichiometric Engine</span>
              </h2>
              <CBAMCalculator />
            </div>
          )}

          {/* Code Snippet if present */}
          {project.deepDive.codeSnippet && (
            <div className="p-6 rounded-lg bg-[#141413] border border-[rgba(216,203,179,0.14)] space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center text-[#AFA38C] pb-2 border-b border-[rgba(216,203,179,0.1)]">
                <span>DETERMINISTIC SOLVER IMPLEMENTATION</span>
                <span className="text-[#2F6BFF]">EXACT DP</span>
              </div>
              <pre className="text-[#2F6BFF] overflow-x-auto p-2">
                <code>{project.deepDive.codeSnippet}</code>
              </pre>
            </div>
          )}

          {/* Verified Results */}
          <div className="p-6 rounded-lg bg-[#242421] border border-[rgba(216,203,179,0.14)] space-y-3">
            <h2 className="text-lg font-mono font-bold text-[#EFE8DC] flex items-center space-x-2">
              <span className="text-[#2F6BFF]">04.</span>
              <span>Verified Production & Experimental Outcomes</span>
            </h2>
            <p className="text-sm text-[#D8CBB3] leading-relaxed">
              {project.deepDive.results}
            </p>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-[rgba(216,203,179,0.14)] flex justify-between items-center font-mono text-xs">
          <Link
            href="/"
            className="text-[#AFA38C] hover:text-[#2F6BFF] flex items-center space-x-1"
          >
            <span>← Back to Index</span>
          </Link>
          <a
            href="mailto:hemanthdadi3@gmail.com"
            className="text-[#2F6BFF] hover:underline"
          >
            Discuss this architecture →
          </a>
        </div>
      </div>
    </main>
  );
}
