"use client";

import React from "react";

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* CAD Micro-Grid Background in Sand */}
      <div className="absolute inset-0 bg-cad-grid opacity-70" />

      {/* Dot Matrix overlay */}
      <div className="absolute inset-0 bg-dot-matrix opacity-40" />

      {/* Top electric blue laser hairline border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2F6BFF]/35 to-transparent" />
    </div>
  );
}
