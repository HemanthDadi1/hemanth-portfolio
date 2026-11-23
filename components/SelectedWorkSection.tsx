"use client";

import React from "react";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import { ArrowUpRight, Github, ExternalLink, ArrowRight } from "lucide-react";

export default function SelectedWorkSection() {
  return (
    <section id="work" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[rgba(216,203,179,0.12)]">
      <div className="space-y-2 mb-10">
        <div className="flex items-center space-x-2 text-xs font-mono text-[#2F6BFF]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2F6BFF]" />
          <span>SELECTED SYSTEMS & DEPLOYMENTS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#EFE8DC] tracking-tight">
          Architected & Deployed
        </h2>
        <p className="text-xs sm:text-sm text-[#AFA38C] font-mono">
          Core industrial platforms, operations research solvers, and calibrated machine learning models.
        </p>
      </div>

      {/* Balanced System Cards */}
      <div className="space-y-6">
        {PROJECTS.map((project, idx) => (
          <div
            key={project.slug}
            className="p-6 rounded-lg bg-[#242421] border border-[rgba(216,203,179,0.14)] hover:border-[#2F6BFF]/40 transition-all space-y-4 group"
          >
            {/* Header / Category & Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-2 font-mono text-xs">
                <span className="text-[#2F6BFF] font-bold">0{idx + 1}.</span>
                <span className="text-[#EFE8DC] font-bold text-lg font-sans group-hover:text-[#2F6BFF] transition-colors">
                  {project.title}
                </span>
                <span className="text-[10px] text-[#AFA38C] bg-[#1E1E1C] px-2 py-0.5 rounded border border-[rgba(216,203,179,0.1)]">
                  {project.category}
                </span>
              </div>

              <div className="flex items-center space-x-2 font-mono text-xs">
                {project.externalUrl && (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded hover:bg-[#262623] text-[#AFA38C] hover:text-[#2F6BFF] transition-colors"
                    title="Live Platform"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded hover:bg-[#262623] text-[#AFA38C] hover:text-[#2F6BFF] transition-colors"
                    title="Source Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                <Link
                  href={`/work/${project.slug}`}
                  className="px-3 py-1 rounded bg-[#2F6BFF]/10 text-[#2F6BFF] hover:bg-[#2F6BFF]/20 text-xs font-semibold flex items-center space-x-1 transition-all"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Role & Summary */}
            <div className="space-y-1.5">
              <div className="text-xs font-mono text-[#D8CBB3]">
                {project.role} &bull; <span className="text-[#AFA38C]">{project.period}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#AFA38C] font-sans leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Metrics Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
              {project.keyMetrics.map((m, mIdx) => (
                <div
                  key={mIdx}
                  className="p-2.5 rounded bg-[#1A1A18] border border-[rgba(216,203,179,0.1)]"
                >
                  <div className="text-[10px] text-[#AFA38C] uppercase">{m.label}</div>
                  <div className="text-sm font-bold text-[#EFE8DC] mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Tech Stack Tags */}
            <div className="pt-2 border-t border-[rgba(216,203,179,0.08)] flex flex-wrap gap-1.5 font-mono text-[10px]">
              {project.stack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 rounded bg-[#1E1E1C] text-[#AFA38C] border border-[rgba(216,203,179,0.1)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
