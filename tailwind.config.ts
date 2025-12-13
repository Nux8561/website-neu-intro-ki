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
        // Light Mode (Attio-Style) - DEFAULT
        background: "#FFFFFF",
        surface: "#FAFAFA",
        "surface-elevated": "#F5F5F5",
        
        // Primary Brand Color
        brand: {
          DEFAULT: "#0B0C0E",
          light: "#374151",
          muted: "#6B7280",
        },
        
        // Text Colors
        text: {
          primary: "#0B0C0E",
          secondary: "rgba(11, 12, 14, 0.70)",
          muted: "#64748B",
          inverse: "#FFFFFF",
        },
        
        // Border Colors
        border: {
          subtle: "rgba(11, 12, 14, 0.08)",
          DEFAULT: "rgba(11, 12, 14, 0.12)",
          active: "rgba(11, 12, 14, 0.20)",
        },
        
        // Accent Colors (for highlights)
        accent: {
          blue: "#2563EB",
          purple: "#7C3AED",
          green: "#059669",
          orange: "#EA580C",
          pink: "#DB2777",
        },
        
        // Agent Colors (for AI features)
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
        "2xl": "16px",
        "3xl": "24px",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.8)',
        'glass': '0 4px 24px rgba(0, 0, 0, 0.08)',
        'card': '0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 0 0 1px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
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
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
