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
        background: "#0B0C0E", // App Background (Attio Standard)
        surface: "#15171B", // Card/Surface
        "surface-elevated": "#1C1E23", // Elevated surfaces
        accent: {
          DEFAULT: "#FFFFFF",
          light: "#E5E7EB",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.05)",
          DEFAULT: "rgba(255, 255, 255, 0.10)",
          active: "rgba(255, 255, 255, 0.20)",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "rgba(255, 255, 255, 0.70)",
          muted: "#94A3B8", // slate-400 (cool/blueish, never pure gray)
        },
        agent: {
          company: '#3b82f6',
          people: '#a855f7',
          ai: '#10b981',
          validation: '#f97316',
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
        'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        'glass-elevated': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 4px 24px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

