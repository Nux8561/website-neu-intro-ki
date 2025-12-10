import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: "rgba(11, 12, 14, 0.05)",
        accent: {
          DEFAULT: "#FF4538",
          light: "#FF6B58",
        },
        border: {
          subtle: "rgba(11, 12, 14, 0.08)",
          active: "rgba(11, 12, 14, 0.15)",
        },
      },
      fontFamily: {
        jakarta: ["var(--font-jakarta)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        squircle: "24px",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        'inner-glow': 'inset 0 1px 0 0 rgba(11, 12, 14, 0.05)',
      },
    },
  },
  plugins: [],
};

export default config;

