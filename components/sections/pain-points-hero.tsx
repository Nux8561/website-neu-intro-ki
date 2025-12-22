"use client"

import * as React from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { AlertCircle, CheckCircle2, ArrowRight, X, Settings, MousePointerClick, Zap } from "lucide-react"
import { ENTERPRISE_SPRING, snappySpring, snappyStaggerContainer, snappyStaggerItem } from "@/lib/animations"

interface PainPoint {
  id: string
  problem: string
  solution: string
  beforeVisual: React.ReactNode
  afterVisual: React.ReactNode
}

export function PainPointsHero() {
  const sectionRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const [activePainPoint, setActivePainPoint] = React.useState<string | null>(null)

  const painPoints: PainPoint[] = [
    {
      id: "expensive",
      problem: "Zu teuer",
      solution: "Transparente Preise, ab €X/Monat. Keine versteckten Kosten.",
      beforeVisual: (
        <div className="p-6 bg-red-50 rounded-xl border-2 border-red-200">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-red-300">
              <span className="text-sm font-inter text-red-900">Enterprise Plan</span>
              <span className="text-lg font-mono font-bold text-red-900 tabular-nums">€299/Monat</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-red-300">
              <span className="text-sm font-inter text-red-900">Setup Fee</span>
              <span className="text-lg font-mono font-bold text-red-900 tabular-nums">€5.000</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-red-300">
              <span className="text-sm font-inter text-red-900">Hidden Costs</span>
              <span className="text-lg font-mono font-bold text-red-900 tabular-nums">???</span>
            </div>
          </div>
        </div>
      ),
      afterVisual: (
        <div className="p-6 bg-emerald-50 rounded-xl border-2 border-emerald-200">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-emerald-300">
              <span className="text-sm font-inter text-emerald-900">Growth Plan</span>
              <span className="text-lg font-mono font-bold text-emerald-900 tabular-nums">€99/Monat</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-emerald-300">
              <span className="text-sm font-inter text-emerald-900">Setup Fee</span>
              <span className="text-lg font-mono font-bold text-emerald-900 tabular-nums">€0</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-emerald-300">
              <span className="text-sm font-inter text-emerald-900">Alles inklusive</span>
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "complex",
      problem: "Zu komplex",
      solution: "Out-of-the-box funktionsfähig. Keine monatelange Konfiguration.",
      beforeVisual: (
        <div className="p-6 bg-red-50 rounded-xl border-2 border-red-200">
          <div className="space-y-2">
            <div className="p-2 bg-white rounded border border-red-300">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="h-4 w-4 text-red-600" />
                <span className="text-xs font-inter text-red-900">Einstellungen: 247 Optionen</span>
              </div>
              <div className="space-y-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-2 bg-red-200 rounded" style={{ width: `${60 + i * 5}%` }} />
                ))}
              </div>
            </div>
            <div className="p-2 bg-white rounded border border-red-300">
              <span className="text-xs font-inter text-red-900">Setup-Zeit: 3-6 Monate</span>
            </div>
          </div>
        </div>
      ),
      afterVisual: (
        <div className="p-6 bg-emerald-50 rounded-xl border-2 border-emerald-200">
          <div className="space-y-2">
            <div className="p-2 bg-white rounded border border-emerald-300">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-4 w-4 text-emerald-600" />
                <span className="text-xs font-inter text-emerald-900">Sofort einsatzbereit</span>
              </div>
              <div className="h-2 bg-emerald-500 rounded-full" style={{ width: "100%" }} />
            </div>
            <div className="p-2 bg-white rounded border border-emerald-300">
              <span className="text-xs font-inter text-emerald-900">Setup-Zeit: 5 Minuten</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "chaotic",
      problem: "Chaotisch, nicht intuitiv",
      solution: "Intuitive UI, sofort verständlich. Keine Schulung nötig.",
      beforeVisual: (
        <div className="p-6 bg-red-50 rounded-xl border-2 border-red-200">
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="h-12 bg-red-200 rounded border border-red-300 flex items-center justify-center">
                  <span className="text-xs text-red-900 font-mono">{i + 1}</span>
                </div>
              ))}
            </div>
            <div className="p-2 bg-white rounded border border-red-300">
              <span className="text-xs font-inter text-red-900">Unübersichtlich • Viele Menüs • Verwirrend</span>
            </div>
          </div>
        </div>
      ),
      afterVisual: (
        <div className="p-6 bg-emerald-50 rounded-xl border-2 border-emerald-200">
          <div className="space-y-2">
            <div className="p-4 bg-white rounded-lg border border-emerald-300">
              <div className="mb-2 h-3 bg-emerald-200 rounded" style={{ width: "80%" }} />
              <div className="mb-2 h-3 bg-emerald-200 rounded" style={{ width: "60%" }} />
              <div className="h-3 bg-emerald-200 rounded" style={{ width: "70%" }} />
            </div>
            <div className="p-2 bg-white rounded border border-emerald-300">
              <span className="text-xs font-inter text-emerald-900">Clean • Intuitiv • Sofort verständlich</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "manual",
      problem: "Zu viele manuelle Schritte",
      solution: "100% automatisiert. Follow-ups, Priorisierungen, Research – alles automatisch.",
      beforeVisual: (
        <div className="p-6 bg-red-50 rounded-xl border-2 border-red-200">
          <div className="space-y-2">
            {[
              "Follow-up eintragen",
              "Priorität setzen",
              "Research starten",
              "Daten eingeben",
              "Email schreiben",
              "Termin planen",
              "Status aktualisieren",
              "Notizen hinzufügen",
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-2 p-2 bg-white rounded border border-red-300">
                <div className="h-4 w-4 rounded border-2 border-red-400" />
                <span className="text-xs font-inter text-red-900">{step}</span>
                <MousePointerClick className="h-3 w-3 text-red-600 ml-auto" />
              </div>
            ))}
            <div className="p-2 bg-white rounded border border-red-300">
              <span className="text-xs font-inter text-red-900 font-bold">8+ manuelle Schritte pro Lead</span>
            </div>
          </div>
        </div>
      ),
      afterVisual: (
        <div className="p-6 bg-emerald-50 rounded-xl border-2 border-emerald-200">
          <div className="space-y-2">
            <div className="p-4 bg-white rounded-lg border border-emerald-300">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-4 w-4 text-emerald-600 animate-pulse" />
                <span className="text-xs font-inter text-emerald-900 font-semibold">Automatisierung aktiv</span>
              </div>
              <div className="space-y-1">
                {[
                  "✓ Follow-up automatisch geplant",
                  "✓ Priorität automatisch gesetzt",
                  "✓ Research automatisch gestartet",
                  "✓ Daten automatisch eingetragen",
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                    <span className="text-xs font-inter text-emerald-900">{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="p-2 bg-white rounded border border-emerald-300">
              <span className="text-xs font-inter text-emerald-900 font-bold">1 Klick, alles automatisch</span>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="pain-points"
      className="relative bg-[#0B0E14] py-24 md:py-32 overflow-hidden border-b border-white/10"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...snappySpring, delay: 0.3 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-[32px] leading-[40px] -tracking-[0.03em] font-medium text-white md:text-[48px] md:leading-[56px] lg:text-[64px] lg:leading-[72px] font-space-grotesk">
            Die größten Pain Points. Gelöst.
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-white/80 font-inter leading-relaxed">
            Wir kennen die Probleme. Wir haben die Lösungen.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <motion.div
          variants={snappyStaggerContainer}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid gap-8 md:grid-cols-2"
        >
          {painPoints.map((painPoint, i) => (
            <motion.div
              key={painPoint.id}
              variants={snappyStaggerItem}
              onMouseEnter={() => setActivePainPoint(painPoint.id)}
              onMouseLeave={() => setActivePainPoint(null)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] transition-all hover:shadow-[0_25px_50px_-10px_rgba(59,130,246,0.2)] hover:border-white/20 cursor-pointer"
            >
              {/* Problem Badge */}
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/20 border border-red-500/30">
                  <AlertCircle className="h-4 w-4 text-red-400" />
                </div>
                <span className="px-2 py-1 rounded-md bg-red-500/20 border border-red-500/30 text-xs font-inter font-medium text-red-400">
                  Problem
                </span>
              </div>

              {/* Problem Text */}
              <h3 className="mb-4 text-2xl font-space-grotesk font-semibold text-white">
                {painPoint.problem}
              </h3>

              {/* Before/After Visual - Premium Smooth Transition */}
              <div className="relative h-64 mb-6 overflow-hidden rounded-xl border border-white/10">
                <motion.div
                  initial={false}
                  animate={{
                    opacity: activePainPoint === painPoint.id ? 0 : 1,
                    scale: activePainPoint === painPoint.id ? 0.98 : 1,
                    y: activePainPoint === painPoint.id ? -10 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 0.5,
                  }}
                  className="absolute inset-0"
                >
                  {painPoint.beforeVisual}
                </motion.div>
                <motion.div
                  initial={false}
                  animate={{
                    opacity: activePainPoint === painPoint.id ? 1 : 0,
                    scale: activePainPoint === painPoint.id ? 1 : 0.98,
                    y: activePainPoint === painPoint.id ? 0 : 10,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 0.5,
                  }}
                  className="absolute inset-0"
                >
                  {painPoint.afterVisual}
                </motion.div>
              </div>

              {/* Solution */}
              <div className="flex items-start gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#10B981]/20 border border-[#10B981]/30 flex-shrink-0">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                </div>
                <div>
                  <span className="block mb-1 text-xs font-inter font-medium text-[#10B981]">Lösung</span>
                  <p className="text-base text-white/80 font-inter leading-relaxed">{painPoint.solution}</p>
                </div>
              </div>

              {/* Arrow Indicator */}
              <motion.div
                animate={{
                  x: activePainPoint === painPoint.id ? [0, 4, 0] : 0,
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-6 right-6"
              >
                <ArrowRight className="h-5 w-5 text-white/40" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

