// Type definitions for portfolio projects and subpages
export interface Project {
  slug: string;
  title: string;
  role: string;
  period: string;
  category: "Industrial AI" | "Operations Research" | "Research & UQ" | "Enterprise Systems";
  summary: string;
  keyMetrics: { label: string; value: string }[];
  stack: string[];
  externalUrl?: string;
  githubUrl?: string;
  deepDive: {
    problem: string;
    architecture: string;
    axiomsApplied: string[];
    results: string;
    codeSnippet?: string;
  };
}

export const PROJECTS: Project[] = [
  {
    slug: "waylosa",
    title: "Waylosa Travel Intelligence",
    role: "Founding AI Engineer",
    period: "Aug 2026 – Present",
    category: "Industrial AI",
    summary:
      "Designed the core synthesis engine as 'model proposes, code verifies': language models recommend destinations while deterministic dynamic programming algorithms validate, schedule, and repair itineraries.",
    keyMetrics: [
      { label: "Solver Speed", value: "30 ms (Exact DP)" },
      { label: "Token Reduction", value: "-71% Prompt Overhead" },
      { label: "CI Test Suite", value: "949 Automated Tests" },
    ],
    stack: ["FastAPI", "PostgreSQL / PostGIS", "Dynamic Programming", "Python", "CI/CD"],
    externalUrl: "https://www.waylosa.com/",
    githubUrl: "https://github.com/HemanthDadi1",
    deepDive: {
      problem:
        "Standard generative travel planning relies on unstructured LLM generation, which frequently hallucinates impossible opening hours, ignores travel fatigue, violates opening day constraints, and inflates prompt token costs.",
      architecture:
        "Formulated multi-destination leave planning as a weighted interval scheduling problem with custom boundary constraints. Solved exactly with dynamic programming in 30ms, completely offloading scheduling logic from the LLM prompt.",
      axiomsApplied: [
        "AI reads/proposes: LLM surfaces places and preferences.",
        "Rules decide: Dynamic programming calculates optimal route and timing.",
        "Grounded data: opening hours and travel distances come from PostGIS, not the model.",
      ],
      results:
        "Cut estimated prompt tokens by 71%. All benchmark trips produced valid plans with zero repair calls. Built backend in FastAPI and PostGIS, maintaining 949 automated regression tests.",
      codeSnippet: `def solve_weighted_intervals(intervals, daily_limit=8):
    # Dynamic programming exact solver in 30ms
    intervals.sort(key=lambda x: x.end_time)
    n = len(intervals)
    dp = [0] * (n + 1)
    for i in range(1, n + 1):
        prev = find_latest_compatible(intervals, i - 1)
        dp[i] = max(dp[i - 1], intervals[i - 1].weight + dp[prev + 1])
    return dp[n]`,
    },
  },
  {
    slug: "nasa-fleet",
    title: "NASA Fleet Maintenance Optimizer",
    role: "Independent Researcher & Systems Architect",
    period: "Mar – May 2026",
    category: "Operations Research",
    summary:
      "Combined a BiLSTM-attention remaining-useful-life (RUL) neural model with a Mixed-Integer Linear Program (PuLP) to schedule commercial aircraft engines under strict 3-bay hangar capacity.",
    keyMetrics: [
      { label: "Failures Slashed", value: "11 → 0 Failures" },
      { label: "RUL Accuracy", value: "RMSE 15.90 cycles" },
      { label: "Hangar Capacity", value: "3 Bays / Cycle" },
    ],
    stack: ["PyTorch", "BiLSTM", "PuLP (MILP)", "Mixed-Integer Optimization", "C-MAPSS"],
    githubUrl: "https://github.com/HemanthDadi1/fd001-fleet-optimizer",
    deepDive: {
      problem:
        "Scheduling maintenance purely on point predictions (without safety buffers) caused 11 turbofan engines to suffer catastrophic in-flight failures before reaching their overhaul slot.",
      architecture:
        "Engineered a two-stage 'predict-then-optimize' framework. BiLSTM-attention model predicts remaining useful life (RUL), then an asymmetric cost model with tiered safety buffers feeds a Mixed-Integer Linear Program (PuLP).",
      axiomsApplied: [
        "AI reads: Neural network estimates degradation curve.",
        "People confirm: Maintenance safety margins set by fleet engineers.",
        "Rules decide: PuLP MILP solver enforces hangar bay constraints.",
      ],
      results:
        "Eliminated all in-flight failures (11 to 0) under a strict 3-bay-per-cycle hangar limit, optimizing the cost-versus-reliability trade-off.",
    },
  },
  {
    slug: "conformal-rul",
    title: "Balanced Engine Conformal UQ (CQR)",
    role: "Independent Researcher",
    period: "May 2026 – Present",
    category: "Research & UQ",
    summary:
      "Formulated Balanced Engine CQR, establishing unit-level conformal prediction intervals for remaining useful life under severe operating-condition distribution shifts on NASA turbofan datasets.",
    keyMetrics: [
      { label: "Calibrated Coverage", value: "91–92%" },
      { label: "Under-Covered Cut", value: "23 → 7 Engines" },
      { label: "Status", value: "Part I under review" },
    ],
    stack: ["Conformal Prediction", "CQR", "Quantile Regression", "PyTorch", "Statistical Design"],
    githubUrl: "https://github.com/HemanthDadi1/fd004-degradation-aware-rul",
    deepDive: {
      problem:
        "Pooled conformal prediction coverage conceals severe individual unit failures: an 82% pooled coverage metric hid the fact that 10 out of 24 test engines fell far below target (worst engine at 45%).",
      architecture:
        "Designed a calibration rule applied engine-by-engine (Balanced Engine CQR) evaluated on NASA C-MAPSS FD004 across 5 random seeds with leakage-safe splits.",
      axiomsApplied: [
        "Rigorous verification: Audited earlier results, reported corrected estimates.",
        "Calibrated bounds: Calibrated intervals, with coverage measured engine by engine.",
      ],
      results:
        "Maintained 91–92% coverage across operating shifts, reducing under-covered engines from 23 down to 7. Two manuscripts: Part I is under review and Part II is in preparation.",
    },
  },
  {
    slug: "cimex",
    title: "CImEx Compliance",
    role: "Founder & Architect",
    period: "2026",
    category: "Enterprise Systems",
    summary:
      "AI-powered EU CBAM trade compliance & verified sovereign carbon ledger for Indian steel and fastener exporters facing EU tariff liabilities.",
    keyMetrics: [
      { label: "Sample Plant", value: "4.38 → 2.25 tCO₂/t" },
      { label: "Tests", value: "12 suites passing" },
      { label: "Math Engine", value: "Deterministic, unit-tested" },
    ],
    stack: ["Next.js", "Python / Pyodide Wasm", "Gemini Multimodal", "GCP asia-south1", "FastAPI"],
    externalUrl: "https://cimex-compliance.vercel.app",
    githubUrl: "https://github.com/HemanthDadi1/CImEx-Compliance",
    deepDive: {
      problem:
        "Starting 2026, the EU CBAM penalizes non-compliant steel exporters with default benchmark tariffs. LLMs alone hallucinate formulas and numbers, resulting in multi-million euro penalties.",
      architecture:
        "Multimodal PDF parsing for mill test certificates, routed through a human officer verification gate, feeding into an isolated deterministic Python stoichiometric engine.",
      axiomsApplied: [
        "AI reads: Multimodal vision parses messy mill reports.",
        "People confirm: A plant clerk confirms every extracted value, logged in an audit trail.",
        "Rules decide: Exact Annex V stoichiometry calculates carbon and tariff fees.",
      ],
      results:
        "Enables Indian steel exporters to verify actual scrap EAF emission levels, cutting estimated emissions on a sample plant from 4.38 to 2.25 tCO₂/t. A modelled estimate puts the avoided EU liability near €849K per 1,000 t of exports over the 2026–2034 phase-in.",
    },
  },
  {
    slug: "cloudserve",
    title: "CloudServe Verified AI Copilot",
    role: "Forward Deployed AI Engineer (Capstone)",
    period: "Oct – Nov 2026",
    category: "Enterprise Systems",
    summary:
      "Designed a verified customer support pipeline that executes 5 automated safety and grounding checks, automating 16% of high-confidence tickets with no private-data answers in validation runs.",
    keyMetrics: [
      { label: "Grounding Accuracy", value: "95.0%" },
      { label: "Safety Pipeline", value: "5 Grounding Checks" },
      { label: "Private-Data Answers", value: "0 in validation runs" },
    ],
    stack: ["LLM Workflows", "Grouped Cross-Validation", "Fairness Auditing", "Python", "FastAPI"],
    githubUrl: "https://github.com/HemanthDadi1",
    deepDive: {
      problem:
        "Client sought to automate customer support tickets, but standard LLM chatbots frequently leaked private client credentials and hallucinated inaccurate policy terms.",
      architecture:
        "Reframed the chatbot request as a deterministic service-delivery problem. Built a pipeline that responds only after 5 strict safety checks and routes everything else to human agents.",
      axiomsApplied: [
        "Safety over volume: Chose safety over volume: 16% automated against a 65% target.",
        "Fairness auditing: Audited and closed performance gaps for non-fluent customers.",
      ],
      results:
        "Reached 95% topic accuracy on unseen phrasing, with no private-data answers in any validation run (a simulated client, not production traffic).",
    },
  },
];
