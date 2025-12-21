"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Zap, Search, TrendingUp } from "lucide-react"
import { ENTERPRISE_SPRING } from "@/lib/animations"
import { ParallaxContainer } from "@/components/ui/parallax-container"
import { ExpensiveCard } from "@/components/ui/3d-card"
import { NumberTicker } from "@/components/ui/number-ticker"

/**
 * Layer 2: Focus Content - PREMIUM VERSION
 * 
 * Visuelle Story statt Text
 * Team Page Fonts (font-jakarta)
 * Klare Produkt-Darstellung
 * Bessere Animationen
 * Mehr Kontrast
 * Weniger Text
 */
export function Layer2FocusContent() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  // VISUELLE STORY: Weniger Text, mehr Impact
  const headline = "Dein CRM denkt mit."
  const subline = "60 Sekunden statt 60 Minuten Recherche."

  return (
    <motion.div
      ref={containerRef}
      style={{ y, opacity }}
      className="relative z-20 mx-auto flex max-w-[1400px] flex-col gap-20 px-4 pt-24 pb-32 md:pt-32 md:pb-40"
    >
      {/* Hero Content - Zentriert, visuell */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...ENTERPRISE_SPRING, delay: 0.2 }}
        className="mx-auto max-w-5xl text-center"
      >
        {/* Badge - Premium Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...ENTERPRISE_SPRING, delay: 0.1 }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/80 backdrop-blur-sm px-4 py-1.5 text-xs font-jakarta font-medium text-black/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Live • Research Orchestrator v2.0
          </div>
        </motion.div>

        {/* Headline - Team Page Font (font-jakarta) */}
        <motion.h1
          initial="hidden"
          animate="visible"
          className="mb-8 text-5xl font-jakarta font-semibold tracking-tight text-black sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { ...ENTERPRISE_SPRING, delay: 0.3 },
              },
            }}
            className="block"
          >
            {headline}
          </motion.span>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { ...ENTERPRISE_SPRING, delay: 0.5 },
              },
            }}
            className="block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black/60 font-jakarta font-medium"
          >
            {subline}
          </motion.span>
        </motion.h1>

        {/* Subline - MINIMAL TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...ENTERPRISE_SPRING, delay: 0.7 }}
          className="mx-auto mb-12 max-w-2xl text-lg md:text-xl text-black/70 leading-relaxed font-inter"
        >
          Automatische Recherche. Proaktive Signale. Klare Prioritäten.
        </motion.p>

        {/* CTA Buttons - Premium Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...ENTERPRISE_SPRING, delay: 0.9 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="/demo"
            className="group inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-jakarta font-semibold text-white transition-all hover:bg-black/90 hover:scale-105 shadow-lg"
          >
            Demo buchen
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
            className="inline-flex items-center justify-center rounded-full border-2 border-black bg-white px-8 py-4 text-sm font-jakarta font-semibold text-black transition-all hover:bg-black hover:text-white hover:scale-105"
          >
            Wie es funktioniert
          </Link>
        </motion.div>
      </motion.div>

      {/* VISUELLE PRODUKT-DARSTELLUNG - Sofort verständlich */}
      <ParallaxContainer speed={0.6}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="relative mx-auto w-full max-w-5xl"
        >
          <ExpensiveCard intensity={8} className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl">
            {/* Dashboard Preview - KLARE PRODUKT-DARSTELLUNG */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 md:p-12">
              {/* Header */}
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-jakarta font-semibold text-black">Top Prioritäten heute</h3>
                    <p className="text-sm text-black/60 font-inter">3 Deals brauchen deine Aufmerksamkeit</p>
                  </div>
                </div>
                <div className="rounded-full bg-emerald-100 px-4 py-2">
                  <span className="text-sm font-jakarta font-semibold text-emerald-700">3 Neu</span>
                </div>
              </div>

              {/* Deal Cards - VISUELL KLAR */}
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { name: "Acme Corp", value: "€50K", signal: "Strong Buy", time: "2 Min" },
                  { name: "TechStart GmbH", value: "€25K", signal: "Warm Lead", time: "15 Min" },
                  { name: "DataFlow Inc", value: "€15K", signal: "Follow-up", time: "1 Std" },
                ].map((deal, i) => (
                  <motion.div
                    key={deal.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...ENTERPRISE_SPRING, delay: 1.3 + i * 0.1 }}
                    className="group rounded-xl border border-black/10 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-black/20"
                  >
                    <div className="mb-3 flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-base font-jakarta font-semibold text-black mb-1">{deal.name}</h4>
                        <p className="text-xs text-black/50 font-inter">{deal.signal}</p>
                      </div>
                      <div className="rounded-full bg-black/5 px-2 py-1">
                        <span className="text-xs font-mono font-bold text-black">{deal.value}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-black/60">
                      <Search className="h-3 w-3" />
                      <span className="font-inter">Research vor {deal.time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Stats - VISUELL */}
              <div className="mt-8 flex items-center justify-center gap-8 border-t border-black/10 pt-8">
                {[
                  { label: "Signals", value: 1247, icon: TrendingUp },
                  { label: "Deals", value: 89, icon: Zap },
                  { label: "Research", value: "2.4K", icon: Search },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ...ENTERPRISE_SPRING, delay: 1.6 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/5">
                      <stat.icon className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <div className="text-2xl font-jakarta font-bold text-black">
                        {typeof stat.value === "number" ? (
                          <NumberTicker value={stat.value} delay={2000 + i * 200} />
                        ) : (
                          stat.value
                        )}
                      </div>
                      <div className="text-xs text-black/60 font-inter">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ExpensiveCard>
        </motion.div>
      </ParallaxContainer>
    </motion.div>
  )
}
