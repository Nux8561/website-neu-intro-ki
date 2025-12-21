"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ParallaxContainer } from "@/components/ui/parallax-container"
import { Search, TrendingUp, Activity, Zap } from "lucide-react"

/**
 * Layer 1: Comic Scene
 * 
 * "The Comic Scene" - Storytelling-Elemente mit Parallax
 * - Orthogonales Grid (1px, #E5E7EB, 64px Grid-Size)
 * - Floating UI-Schnipsel (Mini-Cards, Badges, Metrics, Search-Bars)
 * - Code-Blöcke (Railway-Style, Monospaced)
 * - Orthogonale Verbindungslinien mit pulsierenden Dots
 * 
 * Parallax: 0.5x Scroll-Geschwindigkeit
 * Scroll-basierte Opacity-Transitions für sichtbare Layer-Animationen
 */
export function Layer1ComicScene() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Scroll-basierte Opacity für Layer 1
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.4])
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  // Floating UI-Schnipsel Daten
  const uiSnippets = [
    {
      id: 1,
      type: "card",
      content: "Acme Corp",
      x: "10%",
      y: "20%",
      delay: 0,
    },
    {
      id: 2,
      type: "badge",
      content: "Strong Signal",
      x: "75%",
      y: "15%",
      delay: 0.5,
    },
    {
      id: 3,
      type: "metric",
      content: "1,247",
      x: "85%",
      y: "60%",
      delay: 1,
    },
    {
      id: 4,
      type: "search",
      content: "Search...",
      x: "20%",
      y: "70%",
      delay: 1.5,
    },
    {
      id: 5,
      type: "badge",
      content: "New Deal",
      x: "60%",
      y: "80%",
      delay: 2,
    },
    {
      id: 6,
      type: "metric",
      content: "89",
      x: "5%",
      y: "50%",
      delay: 2.5,
    },
  ]

  // Code-Blöcke (Railway-Style)
  const codeBlocks = [
    { id: 1, code: "research.signals.filter()", x: "5%", y: "10%", delay: 0 },
    { id: 2, code: "deals.priority.sort()", x: "90%", y: "30%", delay: 1 },
    { id: 3, code: "ai.analyze()", x: "8%", y: "85%", delay: 2 },
  ]

  return (
    <motion.div 
      ref={containerRef}
      style={{ opacity, y }}
      className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
    >
      {/* Orthogonales Grid */}
      <ParallaxContainer speed={0.5}>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, #E5E7EB 1px, transparent 1px),
              linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
      </ParallaxContainer>

      {/* Floating UI-Schnipsel */}
      <ParallaxContainer speed={0.6}>
        {uiSnippets.map((snippet) => (
          <motion.div
            key={snippet.id}
            className="absolute"
            style={{
              left: snippet.x,
              top: snippet.y,
            }}
            initial={{ opacity: 0, y: 20, rotate: -5 }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 0.6,
              delay: snippet.delay,
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            {snippet.type === "card" && (
              <div className="rounded-lg border border-white/40 bg-white/30 backdrop-blur-xl p-2 shadow-attio-sm">
                <div className="text-xs font-medium text-slate-700">{snippet.content}</div>
                <div className="text-[10px] text-slate-500">€50K</div>
              </div>
            )}
            {snippet.type === "badge" && (
              <div className="rounded-full border border-emerald-200/50 bg-emerald-50/30 backdrop-blur-xl px-2 py-1 text-[10px] font-medium text-emerald-700 shadow-attio-sm">
                {snippet.content}
              </div>
            )}
            {snippet.type === "metric" && (
              <div className="rounded-lg border border-slate-200/50 bg-slate-900/80 backdrop-blur-xl p-2 font-mono text-xs font-medium text-white tabular-nums shadow-attio-sm">
                {snippet.content}
              </div>
            )}
            {snippet.type === "search" && (
              <div className="flex items-center gap-1.5 rounded-md border border-white/40 bg-white/30 backdrop-blur-xl px-2 py-1 shadow-attio-sm">
                <Search className="h-3 w-3 text-slate-400" />
                <span className="text-[10px] text-slate-500">{snippet.content}</span>
              </div>
            )}
          </motion.div>
        ))}
      </ParallaxContainer>

      {/* Code-Blöcke (Railway-Style) */}
      <ParallaxContainer speed={0.5}>
        {codeBlocks.map((block) => (
          <motion.div
            key={block.id}
            className="absolute font-mono text-xs text-slate-400/20"
            style={{
              left: block.x,
              top: block.y,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{
              duration: 1,
              delay: block.delay,
            }}
          >
            {block.code}
          </motion.div>
        ))}
      </ParallaxContainer>

      {/* Orthogonale Verbindungslinien mit pulsierenden Dots */}
      <ParallaxContainer speed={0.5}>
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
          {/* Horizontale Linie */}
          <motion.line
            x1="20%"
            y1="30%"
            x2="60%"
            y2="30%"
            stroke="#E5E7EB"
            strokeWidth="1"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          {/* Vertikale Linie */}
          <motion.line
            x1="60%"
            y1="30%"
            x2="60%"
            y2="70%"
            stroke="#E5E7EB"
            strokeWidth="1"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          />
          {/* Pulsierende Dots entlang der Linien */}
          <motion.circle
            cx="40%"
            cy="30%"
            r="3"
            fill="#3B82F6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              cx: ["20%", "60%", "20%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>
      </ParallaxContainer>
    </motion.div>
  )
}

