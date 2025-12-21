"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ENTERPRISE_SPRING } from "@/lib/animations"
import { ParallaxContainer } from "@/components/ui/parallax-container"
import { ExpensiveCard } from "@/components/ui/3d-card"
import { NumberTicker } from "@/components/ui/number-ticker"
import { IndustrialDataFlow, IndustrialBlueprint } from "@/components/ui/industrial-data-flow"

/**
 * Layer 2: Focus Content
 * 
 * Der eigentliche Inhalt: Text, Buttons, Metrics, Bento-Cards
 * - Hero-Text-Container mit Glasmorphismus
 * - Kinetic Typography (Zeichenweise Reveal)
 * - CTA-Buttons
 * - Floating Metrics (Railway-Style)
 * - Bento-Grid-Preview (Miniatur-Dashboard)
 * 
 * Parallax: 1.0x Scroll-Geschwindigkeit (direkte Reaktion)
 */
export function Layer2FocusContent() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Opacity basierend auf Scroll
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  // Neue Storytelling-Headlines (Industrial Tool Vibe)
  // Emotionale Verbindung: Problem → Lösung
  const headline = "60% deiner Zeit für Recherche."
  const subline = "Intro KI macht das in 60 Sekunden."
  const words = headline.split(" ")

  // Metrics Daten
  const metrics = [
    { label: "Signals", value: 1247, suffix: "" },
    { label: "Deals", value: 89, suffix: "" },
    { label: "Research", value: 2400, suffix: "k" },
  ]

  return (
    <motion.div
      ref={containerRef}
      style={{ y, opacity }}
      className="relative z-20 mx-auto flex max-w-[1200px] flex-col gap-16 px-4 pt-32 pb-40 md:pt-40 md:pb-48"
    >
      {/* Industrial Background Visuals */}
      <IndustrialBlueprint />
      <IndustrialDataFlow />
      {/* Hero-Text-Container mit Glasmorphismus */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...ENTERPRISE_SPRING, delay: 0.2 }}
        className="mx-auto max-w-4xl text-center"
      >
        {/* Animated Badge - Industrial Tool Style */}
        <div className="mb-8 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...ENTERPRISE_SPRING, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded border border-black bg-white px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-black"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-20" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-black" />
            </span>
            Research Orchestrator v2.0
          </motion.div>
        </div>

        {/* Kinetic Typography - Zeichenweise Reveal (Industrial Tool: Monospace für Headlines) */}
        <motion.h1
          initial="hidden"
          animate="visible"
          className="mb-6 text-5xl font-bold tracking-tight text-black sm:text-7xl md:text-8xl font-space-grotesk"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    ...ENTERPRISE_SPRING,
                    delay: 0.4 + i * 0.1,
                  },
                },
              }}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
          <br className="hidden sm:block" />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...ENTERPRISE_SPRING, delay: 0.8 }}
            className="text-slate-600 font-mono text-4xl sm:text-5xl md:text-6xl"
          >
            {subline}
          </motion.span>
        </motion.h1>

        {/* Subline - Storytelling: Das Problem erzählen */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...ENTERPRISE_SPRING, delay: 0.9 }}
          className="mx-auto mb-10 max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed font-inter"
        >
          Dein Vertriebsteam verbringt Stunden mit manueller Recherche. Intro KI überwacht Deals, News und Signale automatisch – und sagt deinem Team proaktiv, was zu tun ist.
        </motion.p>

        {/* CTA-Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...ENTERPRISE_SPRING, delay: 1.0 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="/demo"
            className="group inline-flex items-center justify-center rounded border-2 border-black bg-black px-8 py-3 text-sm font-mono font-semibold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-black"
          >
            Demo buchen
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#features"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("features")
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            }}
            className="inline-flex items-center justify-center rounded border-2 border-black bg-white px-8 py-3 text-sm font-mono font-semibold uppercase tracking-wider text-black transition-all hover:bg-black hover:text-white"
          >
            Wie es funktioniert
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating Metrics (Railway-Style) - Desktop */}
      <ParallaxContainer speed={0.8}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...ENTERPRISE_SPRING, delay: 1.2 }}
          className="hidden lg:block absolute top-20 right-8"
        >
          {/* Industrial Tool Style: Schwarz-Weiß, brutal, monospace */}
          <div className="rounded border-2 border-black bg-white p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <div className="space-y-3">
              {metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...ENTERPRISE_SPRING, delay: 1.3 + i * 0.1 }}
                  className="flex items-center justify-between gap-4 border-b border-black/10 pb-2 last:border-0 last:pb-0"
                >
                  <span className="text-xs font-mono uppercase tracking-wider text-black/60">{metric.label}</span>
                  <span className="font-mono text-sm font-bold text-black tabular-nums">
                    <NumberTicker 
                      value={metric.value} 
                      delay={1500 + i * 200}
                      className="tabular-nums"
                    />
                    {metric.suffix}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </ParallaxContainer>

      {/* Floating Metrics (Railway-Style) - Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...ENTERPRISE_SPRING, delay: 1.2 }}
        className="lg:hidden mx-auto w-full max-w-sm"
      >
        {/* Industrial Tool Style: Mobile */}
        <div className="rounded border-2 border-black bg-white p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
          <div className="grid grid-cols-3 gap-4">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...ENTERPRISE_SPRING, delay: 1.3 + i * 0.1 }}
                className="text-center border-r border-black/10 last:border-0 pr-2 last:pr-0"
              >
                <div className="font-mono text-lg font-bold text-black tabular-nums">
                  <NumberTicker 
                    value={metric.value} 
                    delay={1500 + i * 200}
                    className="tabular-nums"
                  />
                  {metric.suffix}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-black/60 mt-1">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bento-Grid-Preview (Miniatur-Dashboard) */}
      <ParallaxContainer speed={0.8}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="relative mx-auto w-full max-w-6xl"
        >
          <ExpensiveCard intensity={5} className="overflow-hidden">
            {/* Window Header */}
            <div className="flex h-12 items-center justify-between border-b border-slate-200/50 bg-white/60 backdrop-blur-sm px-4">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <div className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              <div className="mx-auto flex w-full max-w-md items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-400 shadow-sm">
                <span>Search leads & signals...</span>
                <span className="ml-auto flex items-center gap-1 rounded border border-slate-100 bg-slate-50 px-1.5 py-0.5 text-[10px]">
                  ⌘ K
                </span>
              </div>
              <div className="w-10" />
            </div>

            {/* Dashboard Body - Bento Grid */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-white">
              {/* Card 1: Focus of the Day */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="col-span-2 rounded-lg border border-slate-200/60 bg-white/90 backdrop-blur-sm p-4 shadow-attio-sm"
              >
                <h3 className="text-sm font-semibold text-slate-900 mb-3">Focus of the Day</h3>
                <div className="space-y-2">
                  {[
                    { name: "Acme Corp", value: "€50K", priority: 1 },
                    { name: "TechStart GmbH", value: "€25K", priority: 2 },
                  ].map((deal) => (
                    <div
                      key={deal.name}
                      className="flex items-center gap-3 rounded-md border border-slate-200/60 bg-slate-50/50 p-2 text-xs"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded border border-slate-200 bg-white text-xs font-semibold text-slate-600">
                        #{deal.priority}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-slate-900">{deal.name}</div>
                        <div className="text-slate-500">Strong Buy Signal</div>
                      </div>
                      <div className="font-medium text-slate-700">{deal.value}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Card 2: Recent Activity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 }}
                className="rounded-lg border border-slate-200/60 bg-white/90 backdrop-blur-sm p-4 shadow-attio-sm"
              >
                <h3 className="text-sm font-semibold text-slate-900 mb-3">Recent Activity</h3>
                <div className="space-y-2">
                  {[
                    { action: "New signal", time: "2 min ago" },
                    { action: "Research done", time: "15 min ago" },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] text-slate-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <div className="flex-1">
                        <div className="font-medium text-slate-900">{activity.action}</div>
                        <div className="text-slate-400">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </ExpensiveCard>
        </motion.div>
      </ParallaxContainer>
    </motion.div>
  )
}

