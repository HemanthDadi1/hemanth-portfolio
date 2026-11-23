import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 60% Main Color: Charcoal
        charcoal: {
          DEFAULT: "#1E1E1C",
          50: "#363632",
          100: "#2B2B28",
          200: "#242422",
          300: "#1E1E1C",
          400: "#171715",
          900: "#10100F",
        },
        // 30% Secondary Color: Sand
        sand: {
          DEFAULT: "#D8CBB3",
          light: "#EAE2D3",
          muted: "#B8AA91",
          dark: "#7A6F5B",
          border: "rgba(216, 203, 179, 0.14)",
          borderBright: "rgba(216, 203, 179, 0.28)",
          glass: "rgba(216, 203, 179, 0.04)",
        },
        // 10% Accent: Electric Blue
        electric: {
          DEFAULT: "#2F6BFF",
          glow: "rgba(47, 107, 255, 0.25)",
          hover: "#4D82FF",
          subtle: "rgba(47, 107, 255, 0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(216, 203, 179, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(216, 203, 179, 0.04) 1px, transparent 1px)",
        "dot-pattern": "radial-gradient(rgba(216, 203, 179, 0.09) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
