"use client"

import * as React from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Zap, Search, TrendingUp, Phone, Mail, LayoutDashboard, Briefcase, List, BarChart3, Clock, Users, Activity, CheckCircle2, AlertCircle, Target, Sparkles } from "lucide-react"
import { ENTERPRISE_SPRING, snappySpring } from "@/lib/animations"
import { ParallaxContainer } from "@/components/ui/parallax-container"
import { NumberTicker } from "@/components/ui/number-ticker"
import { MagneticButton } from "@/components/ui/magnetic-button"

/**
 * Layer 2: Focus Content - 100.000€ VERSION
 * 
 * Multi-Panel Dashboard mit Sidebar, Tabs, Right Panel
 * 6+ Deal-Cards mit Micro-Content
 * Quantifizierbare Value Props
 */
export function Layer2FocusContent() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = React.useState<"today" | "week" | "pipeline">("today")
  const [animationPhase, setAnimationPhase] = React.useState<number>(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  // Auto-Play Video-Loop Animation (10s Loop)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 5) // 0-4 für 5 Phasen
    }, 2000) // Alle 2 Sekunden nächste Phase

    return () => clearInterval(interval)
  }, [])

  // Value Proposition - Quantifizierbare Benefits
  const headline = "Reduziere deine Qualifizierungszeit um 70%"
  const subline = "Von 60 Minuten Recherche auf 60 Sekunden. Automatisiert. DSGVO-konform."

  return (
    <motion.div
      ref={containerRef}
      style={{ y, opacity, scale }}
      className="relative z-20 mx-auto flex max-w-[1400px] flex-col gap-24 px-4 pt-32 pb-40 md:pt-40 md:pb-48"
    >
      {/* Hero Content - Perfekt animiert */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...ENTERPRISE_SPRING, delay: 0.2 }}
        className="mx-auto max-w-5xl text-center"
      >
        {/* Badge - Premium */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...snappySpring, delay: 0.1 }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-4 py-2 text-xs font-space-grotesk font-medium text-white/90 shadow-lg">
            <motion.span
              className="relative flex h-2 w-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
            </motion.span>
            Live • Intelligence Engine v2.0
          </div>
        </motion.div>

        {/* Headline - Zeichenweise Animation - RESPONSIVE für bessere Lesbarkeit */}
        <motion.h1
          initial="hidden"
          animate="visible"
          className="mb-8 text-[32px] leading-[40px] -tracking-[0.03em] font-medium text-white sm:text-[48px] sm:leading-[56px] md:text-[64px] md:leading-[72px] lg:text-[80px] lg:leading-[88px] xl:text-[96px] xl:leading-[104px] font-space-grotesk"
        >
          {headline.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { ...snappySpring, delay: 0.3 + i * 0.02 },
                },
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <br className="hidden sm:block" />
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...snappySpring, delay: 0.8 }}
            className="block mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white/70 font-space-grotesk font-medium -tracking-[0.01em]"
          >
            {subline}
          </motion.span>
        </motion.h1>

        {/* Subline - Quantifizierbare Benefits */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...snappySpring, delay: 0.9 }}
          className="mx-auto mb-8 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed font-inter"
        >
          {subline}
        </motion.p>

        {/* Benefit Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...snappySpring, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {[
            { label: "60 Sek. Research", icon: Clock, color: "text-[#3B82F6]" },
            { label: "3x mehr Deals", icon: TrendingUp, color: "text-[#10B981]" },
            { label: "100% DSGVO", icon: CheckCircle2, color: "text-white/90" },
          ].map((badge, i) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...snappySpring, delay: 1.1 + i * 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-4 py-2 text-sm font-space-grotesk font-medium text-white/90 shadow-sm"
              >
                <Icon className={`h-4 w-4 ${badge.color || "text-white/90"}`} />
                <span>{badge.label}</span>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Buttons - Premium mit Magnetic Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...snappySpring, delay: 1.0 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link href="/demo" className="group">
            <MagneticButton
              variant="primary"
              className="bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 shadow-[0_8px_32px_rgba(59,130,246,0.2)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.3)] transition-all"
            >
              Demo buchen
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </Link>
          <Link
            href="#product"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("product")
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            }}
          >
            <MagneticButton
              variant="secondary"
              className="border border-white/20 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 shadow-[0_4px_16px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_24px_rgba(255,255,255,0.15)] transition-all"
            >
              Wie es funktioniert
            </MagneticButton>
          </Link>
        </motion.div>
      </motion.div>

      {/* MULTI-PANEL DASHBOARD - Enterprise-Level */}
      <ParallaxContainer speed={0.6}>
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ...snappySpring }}
          className="relative mx-auto w-full max-w-[90vw] xl:max-w-[1400px]"
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] min-h-[60vh]">
            <div className="bg-gradient-to-br from-[#0B0E14] via-[#0F1419] to-[#0B0E14] min-h-[60vh] flex">
              {/* SIDEBAR NAVIGATION */}
              <motion.aside
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...snappySpring, delay: 1.4 }}
                className="w-64 border-r border-white/10 bg-white/5 backdrop-blur-xl p-4 flex flex-col"
              >
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] shadow-lg">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-space-grotesk font-semibold text-white">Intro KI</h3>
                      <p className="text-xs text-white/60 font-inter">Dashboard</p>
                    </div>
                  </div>
                </div>

                <nav className="space-y-1 flex-1">
                  {[
                    { label: "Dashboard", icon: LayoutDashboard, active: true },
                    { label: "Deals", icon: Briefcase, badge: "6" },
                    { label: "Tasks", icon: List, badge: "12" },
                    { label: "Analytics", icon: BarChart3 },
                  ].map((item, i) => {
                    const Icon = item.icon
                    return (
                      <motion.button
                        key={item.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...snappySpring, delay: 1.5 + i * 0.1 }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-inter transition-all mb-1 ${
                          item.active
                            ? "bg-white/10 text-white border border-white/20"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                        whileHover={{ scale: 1.02, x: 2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className="text-xs font-mono font-bold bg-white/10 text-white px-2 py-0.5 rounded">
                            {item.badge}
                          </span>
                        )}
                      </motion.button>
                    )
                  })}
                </nav>

                <div className="mt-auto pt-4 border-t border-white/10">
                  <div className="px-3 py-2 rounded-lg bg-[#10B981]/10 border border-[#10B981]/30">
                    <div className="flex items-center gap-2 mb-1">
                      <Activity className="h-3.5 w-3.5 text-[#10B981]" />
                      <span className="text-xs font-space-grotesk font-semibold text-[#10B981]">AI aktiv</span>
                    </div>
                    <p className="text-xs text-[#10B981]/80 font-inter">3 Researchs laufen</p>
                  </div>
                </div>
              </motion.aside>

              {/* MAIN CONTENT AREA */}
              <div className="flex-1 flex flex-col relative">
                {/* Auto-Play Animation Overlay - Phase 1: Cursor tippt Firmennamen */}
                {animationPhase === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
                  >
                    <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-8 shadow-2xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-6 w-6 rounded bg-[#3B82F6] flex items-center justify-center">
                          <motion.div
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="h-3 w-0.5 bg-white"
                          />
                        </div>
                        <motion.span
                          initial={{ width: 0 }}
                          animate={{ width: "auto" }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                          className="text-lg font-mono font-bold text-white overflow-hidden"
                        >
                          Acme Corp
                        </motion.span>
                      </div>
                      <p className="text-sm text-white/60 font-inter">Research wird gestartet...</p>
                    </div>
                  </motion.div>
                )}

                {/* Phase 2-3: Dashboard füllt sich, Deal-Cards erscheinen */}
                {animationPhase >= 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute top-4 right-4 z-40"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="rounded-lg bg-[#10B981]/20 border border-[#10B981]/30 backdrop-blur-xl px-4 py-2 shadow-lg"
                    >
                      <span className="text-xs font-space-grotesk font-semibold text-[#10B981]">
                        {animationPhase === 1 ? "Daten werden geladen..." : "6 Deals gefunden"}
                      </span>
                    </motion.div>
                  </motion.div>
                )}

                {/* Phase 4: Email wird automatisch gesendet */}
                {animationPhase === 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-20 right-4 z-40 bg-white/10 backdrop-blur-xl rounded-xl border border-[#3B82F6]/30 p-4 shadow-xl"
                  >
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-[#3B82F6]" />
                      <div>
                        <p className="text-sm font-space-grotesk font-semibold text-white">Email gesendet</p>
                        <p className="text-xs text-white/60 font-inter">An Acme Corp</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Phase 5: Deal Won Banner */}
                {animationPhase === 4 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-x-4 top-4 z-40 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl border-2 border-emerald-700 p-6 shadow-2xl"
                  >
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="h-8 w-8 text-white" />
                      <div>
                        <p className="text-lg font-space-grotesk font-bold text-white">Deal Won!</p>
                        <p className="text-sm text-white/90 font-inter">Acme Corp • €50K • Geschlossen</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Header with Tabs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...snappySpring, delay: 1.5 }}
                  className="border-b border-white/10 bg-white/5 backdrop-blur-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-space-grotesk font-semibold text-white mb-1">Top Prioritäten</h3>
                      <p className="text-sm text-white/60 font-inter">6 Deals brauchen deine Aufmerksamkeit</p>
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ ...snappySpring, delay: 1.6 }}
                      className="rounded-full bg-[#10B981]/20 border border-[#10B981]/30 px-4 py-2 shadow-sm"
                    >
                      <span className="text-sm font-space-grotesk font-semibold text-[#10B981]">6 Neu</span>
                    </motion.div>
                  </div>

                  {/* Tabs */}
                  <div className="flex gap-2">
                    {[
                      { id: "today" as const, label: "Heute", count: 6 },
                      { id: "week" as const, label: "Diese Woche", count: 23 },
                      { id: "pipeline" as const, label: "Pipeline", count: 89 },
                    ].map((tab) => (
                      <motion.button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-inter transition-all ${
                          activeTab === tab.id
                            ? "bg-white/10 text-white border border-white/20"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {tab.label}
                        <span className="ml-2 text-xs opacity-70">({tab.count})</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Deal Cards Grid - 6+ Cards */}
                <div className="flex-1 p-6 overflow-y-auto">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {[
                      { name: "Acme Corp", value: "€50K", signal: "Strong Buy", time: "2 Min", priority: 1, progress: 85, tags: ["High Value", "Warm Lead"], aiInsight: "Budget freigegeben" },
                      { name: "TechStart GmbH", value: "€25K", signal: "Warm Lead", time: "15 Min", priority: 2, progress: 65, tags: ["Tech", "Startup"], aiInsight: "Entscheider identifiziert" },
                      { name: "DataFlow Inc", value: "€15K", signal: "Follow-up", time: "1 Std", priority: 3, progress: 45, tags: ["SaaS", "B2B"], aiInsight: "Nächster Call geplant" },
                      { name: "CloudSync AG", value: "€75K", signal: "Hot Lead", time: "5 Min", priority: 4, progress: 92, tags: ["Enterprise", "High Value"], aiInsight: "Vertragsentwurf vorbereitet" },
                      { name: "InnovateLab", value: "€30K", signal: "Qualified", time: "30 Min", priority: 5, progress: 55, tags: ["Innovation", "Growth"], aiInsight: "Demo-Termin bestätigt" },
                      { name: "ScaleUp Solutions", value: "€40K", signal: "Strong Buy", time: "45 Min", priority: 6, progress: 70, tags: ["Scale", "B2B"], aiInsight: "ROI-Berechnung erstellt" },
                    ].map((deal, i) => (
                      <motion.div
                        key={deal.name}
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ ...snappySpring, delay: 1.7 + i * 0.1 }}
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] transition-all hover:shadow-[0_25px_50px_-10px_rgba(59,130,246,0.2)] hover:border-white/20 cursor-pointer"
                      >
                        {/* Priority Badge & Header */}
                        <div className="mb-4 flex items-start justify-between">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#3B82F6] text-xs font-mono font-bold text-white tabular-nums">
                              #{deal.priority}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-base font-space-grotesk font-semibold text-white mb-1">{deal.name}</h4>
                              <p className="text-xs text-white/60 font-inter">{deal.signal}</p>
                            </div>
                          </div>
                          <div className="rounded-full bg-white/10 border border-white/20 px-3 py-1.5">
                            <span className="text-sm font-mono font-bold text-white tabular-nums">{deal.value}</span>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-white/60 font-inter">Fortschritt</span>
                            <span className="text-xs font-mono font-bold text-white tabular-nums">{deal.progress}%</span>
                          </div>
                          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${deal.progress}%` }}
                              transition={{ ...snappySpring, delay: 1.8 + i * 0.1 }}
                              className="h-full bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full"
                            />
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {deal.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 rounded-md bg-white/10 border border-white/20 text-xs font-inter text-white/70"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* AI Insight */}
                        <div className="mb-4 p-3 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/30">
                          <div className="flex items-start gap-2">
                            <Sparkles className="h-3.5 w-3.5 text-[#3B82F6] mt-0.5 flex-shrink-0" />
                            <p className="text-xs text-[#3B82F6] font-inter">{deal.aiInsight}</p>
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-3 border-t border-white/10">
                          <div className="flex items-center gap-2 text-xs text-white/60">
                            <Search className="h-3.5 w-3.5" />
                            <span className="font-inter">Research vor {deal.time}</span>
                          </div>
                          <Clock className="h-3.5 w-3.5 text-white/40" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Status Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...snappySpring, delay: 2.2 }}
                  className="border-t border-white/10 bg-white/5 backdrop-blur-xl px-6 py-3 flex items-center justify-between"
                >
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
                      <span className="text-xs text-white/60 font-inter">Last Sync: vor 2 Min</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-3.5 w-3.5 text-white/40" />
                      <span className="text-xs text-white/60 font-inter">3 aktive Nutzer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="h-3.5 w-3.5 text-[#3B82F6]" />
                      <span className="text-xs text-white/60 font-inter">System: Online</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-3.5 w-3.5 text-white/40" />
                    <span className="text-xs font-mono font-bold text-white tabular-nums">89 Deals aktiv</span>
                  </div>
                </motion.div>
              </div>

              {/* RIGHT PANEL - Live Metrics */}
              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...snappySpring, delay: 1.6 }}
                className="w-80 border-l border-white/10 bg-white/5 backdrop-blur-xl p-6"
              >
                <h4 className="text-sm font-space-grotesk font-semibold text-white mb-4">Live Metrics</h4>
                
                <div className="space-y-4">
                  {[
                    { label: "Deals Won Today", value: 3, icon: CheckCircle2, color: "emerald" },
                    { label: "Calls Scheduled", value: 12, icon: Phone, color: "blue" },
                    { label: "Research Active", value: 3, icon: Search, color: "purple" },
                    { label: "Tasks Completed", value: 24, icon: List, color: "orange" },
                  ].map((metric, i) => {
                    const Icon = metric.icon
                    return (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ ...snappySpring, delay: 1.7 + i * 0.1 }}
                        className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className={`p-2 rounded-lg ${
                              metric.color === "emerald" ? "bg-[#10B981]/20" :
                              metric.color === "blue" ? "bg-[#3B82F6]/20" :
                              metric.color === "purple" ? "bg-purple-500/20" :
                              "bg-orange-500/20"
                            }`}>
                              <Icon className={`h-4 w-4 ${
                                metric.color === "emerald" ? "text-[#10B981]" :
                                metric.color === "blue" ? "text-[#3B82F6]" :
                                metric.color === "purple" ? "text-purple-400" :
                                "text-orange-400"
                              }`} />
                            </div>
                            <span className="text-xs text-white/60 font-inter">{metric.label}</span>
                          </div>
                        </div>
                        <div className="text-2xl font-space-grotesk font-bold text-white tabular-nums">
                          <NumberTicker value={metric.value} delay={2000 + i * 200} />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* AI Activity Feed */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h5 className="text-xs font-space-grotesk font-semibold text-white mb-3">AI Activity</h5>
                  <div className="space-y-2">
                    {[
                      { text: "Research für Acme Corp abgeschlossen", time: "2 Min" },
                      { text: "Email-Sequenz für TechStart gestartet", time: "5 Min" },
                      { text: "Call-Coaching für DataFlow vorbereitet", time: "8 Min" },
                    ].map((activity, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...snappySpring, delay: 2.0 + i * 0.1 }}
                        className="p-2 rounded-lg bg-white/5 border border-white/10 text-xs font-inter text-white/70"
                      >
                        <p>{activity.text}</p>
                        <p className="text-white/40 mt-1">vor {activity.time}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>

          {/* Floating Action Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...snappySpring, delay: 2.3 }}
            className="absolute bottom-8 right-8 flex flex-col gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-lg flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <Phone className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full bg-[#10B981]/20 backdrop-blur-xl border border-[#10B981]/30 text-[#10B981] shadow-lg flex items-center justify-center hover:bg-[#10B981]/30 transition-all"
            >
              <Mail className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </ParallaxContainer>
    </motion.div>
  )
}
