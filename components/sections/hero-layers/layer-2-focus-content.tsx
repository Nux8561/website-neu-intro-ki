"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ENTERPRISE_SPRING } from "@/lib/animations"
import { ParallaxContainer } from "@/components/ui/parallax-container"
import { ExpensiveCard } from "@/components/ui/3d-card"
import { AnimatedBadge } from "@/components/ui/animated-badge"
import { NumberTicker } from "@/components/ui/number-ticker"

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

  // Headline für Kinetic Typography
  const headline = "Dein CRM ist blind."
  const subline = "Intro KI sieht alles."
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
      {/* Hero-Text-Container mit Glasmorphismus */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...ENTERPRISE_SPRING, delay: 0.2 }}
        className="mx-auto max-w-4xl text-center"
      >
        {/* Animated Badge */}
        <div className="mb-8 flex justify-center">
          <AnimatedBadge text="Neu: Research Orchestrator 2.0" color="#10b981" />
        </div>

        {/* Kinetic Typography - Zeichenweise Reveal */}
        <motion.h1
          initial="hidden"
          animate="visible"
          className="mb-6 text-5xl font-semibold tracking-tighter text-slate-900 sm:text-7xl md:text-8xl"
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
            className="text-slate-400"
          >
            {subline}
          </motion.span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...ENTERPRISE_SPRING, delay: 0.9 }}
          className="mx-auto mb-10 max-w-2xl text-sm md:text-lg text-slate-500 leading-relaxed"
        >
          Schluss mit manueller Dateneingabe. Intro KI überwacht Deals, News und Signale automatisch – und
          sagt deinem Team proaktiv, was zu tun ist.
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
            className="group inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-attio-md transition-all hover:scale-[1.02] hover:bg-slate-800 hover:shadow-attio-lg"
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
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white/80 backdrop-blur-sm px-6 py-3 text-sm font-medium text-slate-700 hover:bg-white hover:border-slate-300 transition-all shadow-attio-sm hover:shadow-attio-md hover:scale-[1.02]"
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
          <div className="rounded-lg border border-slate-200/60 bg-slate-900/90 backdrop-blur-xl p-4 shadow-attio-diffuse">
            <div className="space-y-3">
              {metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...ENTERPRISE_SPRING, delay: 1.3 + i * 0.1 }}
                  className="flex items-center justify-between gap-4"
                >
                  <span className="text-xs font-medium text-slate-400">{metric.label}</span>
                  <span className="font-mono text-sm font-semibold text-white tabular-nums">
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
        <div className="rounded-lg border border-slate-200/60 bg-slate-900/90 backdrop-blur-xl p-4 shadow-attio-diffuse">
          <div className="grid grid-cols-3 gap-4">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...ENTERPRISE_SPRING, delay: 1.3 + i * 0.1 }}
                className="text-center"
              >
                <div className="font-mono text-lg font-semibold text-white tabular-nums">
                  <NumberTicker 
                    value={metric.value} 
                    delay={1500 + i * 200}
                    className="tabular-nums"
                  />
                  {metric.suffix}
                </div>
                <div className="text-[10px] font-medium text-slate-400 mt-1">{metric.label}</div>
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

