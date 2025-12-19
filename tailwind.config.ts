import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      spacing: {
        '3': '12px',
        '4': '16px',
      },
      colors: {
        // CSS Variables (for shadcn/ui compatibility)
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        
        // Attio Enterprise Farben (Slate statt Gray für Premium-Look)
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        
        // Blue nur für Primary Actions (sparsam!)
        blue: {
          500: "#2563EB",
          600: "#1D4ED8",
        },
        
        // Legacy Support (behalten für Kompatibilität)
        surface: "#FAFAFA",
        "surface-elevated": "#F5F5F5",
        "attio-gray": "#FAFAFB",
        "attio-border": "#E2E8F0",
        "attio-text": "#0F172A",
        brand: {
          DEFAULT: "#0F172A",
          light: "#334155",
          muted: "#64748B",
        },
        text: {
          primary: "#0F172A",
          secondary: "rgba(15, 23, 42, 0.70)",
          muted: "#64748B",
          inverse: "#FFFFFF",
        },
        border: {
          DEFAULT: "hsl(var(--border))",
          subtle: "rgba(15, 23, 42, 0.08)",
          active: "rgba(15, 23, 42, 0.20)",
          "attio-subtle": "#E2E8F0",
        },
        agent: {
          company: '#3b82f6',
          people: '#a855f7',
          ai: '#10b981',
          validation: '#f97316',
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans], // Ensure you have Inter or Plus Jakarta Sans loaded
        jakarta: ["var(--font-jakarta)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        "inter-display": ["var(--font-inter-display)", "sans-serif"],
        tiempos: ["Georgia", "serif"], // Fallback für Tiempos Text
        mono: ["var(--font-mono)", "monospace"],
      },
      // Strict Typography Mapping from "Mastering Mobile UI" PDF
      fontSize: {
        // Headline 32pt -> 32px font / 40px line-height / -2% tracking
        'h1': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '500' }],
        
        // Headline 24pt -> 24px font / 32px line-height / -2% tracking
        'h2': ['24px', { lineHeight: '32px', letterSpacing: '-0.02em', fontWeight: '500' }],
        
        // Headline 20pt -> 20px font / 28px line-height / -1% tracking
        'h3': ['20px', { lineHeight: '28px', letterSpacing: '-0.01em', fontWeight: '500' }],
        
        // Headline 18pt -> 18px font / 26px line-height / -1% tracking
        'h4': ['18px', { lineHeight: '26px', letterSpacing: '-0.01em', fontWeight: '500' }],

        // Body 16pt -> 16px font / 24px line-height / 0% tracking
        'body': ['16px', { lineHeight: '24px', letterSpacing: '0', fontWeight: '400' }],
        
        // Numbers: Same as body, use with .tabular-nums class for data tables and metrics
        'number': ['16px', { lineHeight: '24px', letterSpacing: '0', fontWeight: '400' }],
        
        // Body 14pt -> 14px font / 20px line-height / 0% tracking
        'body-sm': ['14px', { lineHeight: '20px', letterSpacing: '0', fontWeight: '400' }],

        // Caption 12pt -> 12px font / 16px line-height / 1% tracking
        'caption': ['12px', { lineHeight: '16px', letterSpacing: '0.01em', fontWeight: '500' }],

        // Legacy sizes (kept for compatibility)
        "xs": ["0.75rem", { lineHeight: "1.2" }],
        "sm": ["0.8125rem", { lineHeight: "1.4" }],
        "base": ["0.9375rem", { lineHeight: "1.5" }],
        "lg": ["1.0625rem", { lineHeight: "1.5" }],
        "xl": ["1.25rem", { lineHeight: "1.4" }],
        "2xl": ["1.5rem", { lineHeight: "1.3" }],
        "3xl": ["1.875rem", { lineHeight: "1.2" }],
        "4xl": ["2.25rem", { lineHeight: "1.1" }],
        "5xl": ["3rem", { lineHeight: "1.05" }],
        "6xl": ["3.75rem", { lineHeight: "1.02" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        squircle: "24px",
        "2xl": "16px",
        "3xl": "24px",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        // Attio Enterprise Shadows (scharfe, feine Schatten)
        'attio-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'attio-md': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'attio-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
        'attio-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
        // Attio Diffuse Shadow (für schwebende Cards)
        'attio-diffuse': '0 20px 40px -10px rgba(0, 0, 0, 0.05)',
        'attio-diffuse-hover': '0 24px 48px -12px rgba(0, 0, 0, 0.08)',
        // Glassmorphism Shadow
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        // Legacy Support
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'attio-card': '0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 6px 0 rgba(28, 40, 64, 0.06)',
        'attio-card-hover': '0 0 0 1px rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(28, 40, 64, 0.08)',
      },
      transitionDuration: {
        'attio': '300ms', // Attio Standard (am häufigsten: 622x verwendet)
        'attio-fast': '150ms', // Zweithäufigste (138x)
        'attio-slow': '400ms', // Für langsamere Animationen (49x)
        'attio-instant': '50ms', // Für schnelle Feedback (88x)
      },
      transitionTimingFunction: {
        'attio-ease': 'cubic-bezier(0.32, 0.72, 0, 1)', // Attio Standard (am häufigsten)
        'attio-ease-alt': 'cubic-bezier(0.33, 0.00, 0.00, 1.00)', // Alternative
        'attio-smooth': 'cubic-bezier(0.45, 0, 0.2, 1)',
        'attio-ease-out': 'ease-out', // Sehr häufig (620x)
        'attio-ease-in': 'ease-in', // Häufig (92x)
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Attio Animationen (basierend auf Analyse)
        'attio-fade-in': 'fadeIn 300ms ease-out', // duration-300 + ease-out (häufigste Kombination)
        'attio-fade-out': 'fadeOut 300ms ease-out',
        'attio-slide-up': 'slideFromBottom 300ms ease-out',
        'attio-slide-down': 'slideToBottom 300ms ease-out',
        // Legacy (behalten für Kompatibilität)
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        // Line Shadow Text Animation
        'line-shadow': 'line-shadow 15s linear infinite',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Attio Keyframes (basierend auf Analyse)
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideFromBottom: {
          '0%': { transform: 'translate3d(0, 100%, 0)', opacity: '0' },
          '100%': { transform: 'translate3d(0, 0, 0)', opacity: '1' },
        },
        slideToBottom: {
          '0%': { transform: 'translate3d(0, 0, 0)', opacity: '1' },
          '100%': { transform: 'translate3d(0, 100%, 0)', opacity: '0' },
        },
        slideFromTop: {
          '0%': { transform: 'translate3d(0, -100%, 0)', opacity: '0' },
          '100%': { transform: 'translate3d(0, 0, 0)', opacity: '1' },
        },
        slideToTop: {
          '0%': { transform: 'translate3d(0, 0, 0)', opacity: '1' },
          '100%': { transform: 'translate3d(0, -100%, 0)', opacity: '0' },
        },
        // Legacy (behalten für Kompatibilität)
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
        // Line Shadow Text Keyframes
        'line-shadow': {
          '0%': { 'background-position': '0 0' },
          '100%': { 'background-position': '100% -100%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
