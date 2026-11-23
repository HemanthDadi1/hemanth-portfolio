# Hemanth Dadi — AI Systems Architect & Industrial Tech Founder
> *"AI reads. People confirm. Rules decide."*

Personal portfolio and founder website for **Hemanth Dadi** (Hyderabad, India — 17.3850° N, 78.4867° E).

Designed in the **Mammut Studios Editorial Aesthetic** with full-page viewport snap scrolling, hardware-accelerated swipe transitions, and an eye-comfort palette:
- **60% Obsidian Charcoal Canvas (`#101114` / `#181A20`)**: Deep matte backdrop with micro-grids and diffuse ambient glow.
- **30% Sand Typography (`#F5EFE6` titles / `#D8CBB3` body / `#A39985` metadata)**: Warm editorial contrast engineered for reading comfort.
- **10% Electric Blue (`#2F6BFF`)**: Precise focal accents for system statuses, active tabs, and deterministic telemetry kernels.

---

## 🏗 Architecture & Core Sections

1. **Floating Minimal HUD Navbar (`components/MammutNavbar.tsx`)**:
   - Status telemetry indicator: `● SYSTEM ONLINE // HYDERABAD, IN [17.3850° N, 78.4867° E]`
   - Quick navigation links across all 6 full-page blocks: `01. HERO`, `02. THESIS`, `03. WORK`, `04. ARCHITECTURE`, `05. RESEARCH`, `06. CONTACT`
   - Quick-copy email button (`hemanthdadi3@gmail.com`) with visual feedback.

2. **Full-Page Viewport Snap Scroller (`components/ScrollHudRail.tsx`)**:
   - Pinned vertical HUD indicator rail tracking active sections in real time via `IntersectionObserver`.
   - Keyboard navigation (`ArrowDown` / `ArrowUp` / `PageDown` / `PageUp`) and smooth scroll transitions between full-page blocks.

3. **Page 01: Hero & Strategic Focus (`components/MammutHero.tsx`)**:
   - Headline: *Architecting Deterministic AI for Heavy Industry.*
   - Highlight cards for Active Role (**Waylosa**), Peer-Reviewed Research (**NASA C-MAPSS / IOP 2026**), and Sovereign Build (**CImEx EU CBAM**).

4. **Page 02: Operational Thesis & Axiom Bento (`components/MammutThesisBlock.tsx`)**:
   - Prominently anchors the signature axiom: **"AI reads. People confirm. Rules decide."**
   - Bento breakdown: *AI Reads Reality* (Multimodal vision schemas), *People Confirm* (Sovereign human interlocks & SHA-256 logs), *Rules Decide* (Deterministic math code in Python/Wasm/PuLP).

5. **Page 03: Selected Work with Swipe Engine (`components/InteractiveSystemsShowcase.tsx`)**:
   - macOS-style software window frame with hardware-accelerated 5-slide horizontal track (`cubic-bezier(0.16, 1, 0.3, 1)`).
   - Touch/mouse drag gestures with elastic boundary resistance and momentum flick snapping.
   - Systems featured: **Waylosa**, **NASA Fleet Maintenance Optimizer**, **Balanced Engine Conformal UQ (CQR)**, **CImEx Compliance (EU CBAM)**, and **CloudServe AI Copilot**.

6. **Page 04: Architectural Capabilities Accordion (`components/CapabilitiesAccordion.tsx`)**:
   - 4-item interactive accordion for Multimodal Ingestion, Sovereign Interlocks, Exact Operations Research, and Calibrated Uncertainty Quantification.

7. **Page 05: Research Lineage & Scientific Credentials (`components/ResearchLineageSection.tsx`)**:
   - Peer-reviewed manuscripts under review at the *Journal of Reliability Science and Engineering* (IOP Publishing) on C-MAPSS FD004 degradation-aware conformal prediction.
   - Academic pedigree: Stevens Institute of Technology (M.S. Data Science, GPA 3.73), IIT Roorkee, and VRSEC.

8. **Page 06: Founder Transmission & Contact Desk (`components/MammutContactSection.tsx`)**:
   - Direct transmission dispatch box, direct email (`hemanthdadi3@gmail.com`), WhatsApp (`hemanth_dadi`), LinkedIn, and GitHub links.

---

## 🚀 Running Locally

```bash
# Option A: Zero-Dependency Standalone Preview (Recommended for instant testing)
cd preview
python3 -m http.server 3000
# Open http://localhost:3000 in your browser

# Option B: Run with Next.js App Router
npm install
npm run dev
# Open http://localhost:3000 in your browser
```

---

## 📜 License & Copyright

© 2026 Hemanth Dadi. All rights reserved.
*"AI reads. People confirm. Rules decide."*
