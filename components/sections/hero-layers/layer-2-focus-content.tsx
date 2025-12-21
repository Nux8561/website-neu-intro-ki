"use client"

import * as React from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Zap, Search, TrendingUp, Phone, Mail } from "lucide-react"
import { ENTERPRISE_SPRING, snappySpring } from "@/lib/animations"
import { ParallaxContainer } from "@/components/ui/parallax-container"
import { NumberTicker } from "@/components/ui/number-ticker"

/**
 * Layer 2: Focus Content - 100.000€ VERSION
 * 
 * Perfekte Animationen
 * Hochwertige Visuals
 * Professionelles Design
 * Scroll-basierte Animationen wie ein Video
 */
export function Layer2FocusContent() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  // Headline Animation - Zeichenweise
  const headline = "Dein CRM denkt mit."
  const subline = "60 Sekunden statt 60 Minuten Recherche."

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
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 backdrop-blur-md px-4 py-2 text-xs font-jakarta font-medium text-black/80 shadow-lg">
            <motion.span
              className="relative flex h-2 w-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </motion.span>
            Live • Research Orchestrator v2.0
          </div>
        </motion.div>

        {/* Headline - Zeichenweise Animation */}
        <motion.h1
          initial="hidden"
          animate="visible"
          className="mb-8 text-5xl font-jakarta font-semibold tracking-tight text-black sm:text-6xl md:text-7xl lg:text-8xl"
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
            className="block mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black/60 font-jakarta font-medium"
          >
            {subline}
          </motion.span>
        </motion.h1>

        {/* Subline - Minimal */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...snappySpring, delay: 0.9 }}
          className="mx-auto mb-12 max-w-2xl text-lg md:text-xl text-black/80 leading-relaxed font-inter"
        >
          Automatische Recherche. Proaktive Signale. Klare Prioritäten.
        </motion.p>

        {/* CTA Buttons - Premium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...snappySpring, delay: 1.0 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={snappySpring}>
            <Link
              href="/demo"
              className="group inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-jakarta font-semibold text-white shadow-xl transition-all hover:shadow-2xl"
            >
              Demo buchen
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={snappySpring}>
            <Link
              href="#product"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById("product")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }}
              className="inline-flex items-center justify-center rounded-full border-2 border-black bg-white px-8 py-4 text-sm font-jakarta font-semibold text-black transition-all hover:bg-black hover:text-white shadow-lg"
            >
              Wie es funktioniert
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* VISUELLE PRODUKT-DARSTELLUNG - Hochwertig */}
      <ParallaxContainer speed={0.6}>
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ...snappySpring }}
          className="relative mx-auto w-full max-w-6xl"
        >
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl">
            {/* Dashboard Preview - ECHTE UI */}
            <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 p-8 md:p-12">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="mb-8 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-black to-slate-800 shadow-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-jakarta font-semibold text-black">Top Prioritäten heute</h3>
                    <p className="text-sm text-black/60 font-inter">3 Deals brauchen deine Aufmerksamkeit</p>
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ ...snappySpring, delay: 1.5 }}
                  className="rounded-full bg-emerald-100 px-4 py-2 shadow-sm"
                >
                  <span className="text-sm font-jakarta font-semibold text-emerald-700">3 Neu</span>
                </motion.div>
              </motion.div>

              {/* Deal Cards - Staggered Animation */}
              <div className="grid gap-4 md:grid-cols-3 mb-8">
                {[
                  { name: "Acme Corp", value: "€50K", signal: "Strong Buy", time: "2 Min", priority: 1 },
                  { name: "TechStart GmbH", value: "€25K", signal: "Warm Lead", time: "15 Min", priority: 2 },
                  { name: "DataFlow Inc", value: "€15K", signal: "Follow-up", time: "1 Std", priority: 3 },
                ].map((deal, i) => (
                  <motion.div
                    key={deal.name}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ ...snappySpring, delay: 1.6 + i * 0.15 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="group rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
                  >
                    <div className="mb-3 flex items-start justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-xs font-mono font-bold text-white">
                          #{deal.priority}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base font-jakarta font-semibold text-black mb-1">{deal.name}</h4>
                          <p className="text-xs text-black/60 font-inter">{deal.signal}</p>
                        </div>
                      </div>
                      <div className="rounded-full bg-black/5 px-3 py-1.5">
                        <span className="text-sm font-mono font-bold text-black">{deal.value}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-black/60">
                      <Search className="h-3.5 w-3.5" />
                      <span className="font-inter">Research vor {deal.time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Stats - Animated */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0 }}
                className="flex items-center justify-center gap-12 border-t border-black/10 pt-8"
              >
                {[
                  { label: "Signals", value: 1247, icon: TrendingUp, bgColor: "bg-emerald-100", iconColor: "text-emerald-600" },
                  { label: "Deals", value: 89, icon: Zap, bgColor: "bg-blue-100", iconColor: "text-blue-600" },
                  { label: "Research", value: "2.4K", icon: Search, bgColor: "bg-purple-100", iconColor: "text-purple-600" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ...snappySpring, delay: 2.1 + i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bgColor}`}>
                      <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
                    </div>
                    <div>
                      <div className="text-3xl font-jakarta font-bold text-black">
                        {typeof stat.value === "number" ? (
                          <NumberTicker value={stat.value} delay={2500 + i * 200} />
                        ) : (
                          stat.value
                        )}
                      </div>
                      <div className="text-xs text-black/60 font-inter">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </ParallaxContainer>
    </motion.div>
  )
}
