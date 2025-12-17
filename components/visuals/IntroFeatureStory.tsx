"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { attioTransition, snappySpring } from "@/lib/animations"
import { Zap, Database, Shield } from "lucide-react"

export type IntroFeatureKey = "integration" | "realtime" | "control"

const FEATURE_CONFIG: Record<
  IntroFeatureKey,
  {
    label: string
    subtitle: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    bgFrom: string
    bgTo: string
  }
> = {
  integration: {
    label: "Schnelle Integration",
    subtitle: "Vom ersten Klick bis zum Live-Gang",
    icon: Zap,
    bgFrom: "from-blue-500/15",
    bgTo: "to-sky-500/5",
  },
  realtime: {
    label: "Echtzeit Daten",
    subtitle: "Daten fließen kontinuierlich durch dein System",
    icon: Database,
    bgFrom: "from-indigo-500/15",
    bgTo: "to-purple-500/5",
  },
  control: {
    label: "Volle Kontrolle",
    subtitle: "Du bestimmst, was passiert – und wann",
    icon: Shield,
    bgFrom: "from-emerald-500/15",
    bgTo: "to-teal-500/5",
  },
}

interface IntroFeatureStoryProps {
  active: IntroFeatureKey
}

export function IntroFeatureStory({ active }: IntroFeatureStoryProps) {
  const config = FEATURE_CONFIG[active]

  return (
    <motion.div
      className="relative w-full h-full min-h-[260px] md:min-h-[280px] overflow-hidden rounded-2xl border border-attio-subtle bg-white shadow-attio-card"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={attioTransition}
    >
      {/* Ambient Gradient Background + feine Linien im Hintergrund */}
      <motion.div
        key={active}
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Weicher Farbverlauf */}
        <div
          className={`absolute -inset-24 bg-gradient-to-br ${config.bgFrom} ${config.bgTo} blur-3xl`}
        />
        {/* Attio-artige Grid / Border Lines */}
        <div className="absolute inset-0 opacity-[0.55]">
          <div
            className="absolute inset-[-1px] bg-[linear-gradient(to_right,rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.14)_1px,transparent_1px)] bg-[length:32px_32px]"
            style={{ maskImage: "radial-gradient(circle at top, black, transparent 70%)" }}
          />
        </div>
        {/* Pulsierende Diagonal-Linie */}
        <motion.div
          className="absolute -inset-x-40 top-1/2 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.7, 0.3], y: [-8, 8, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative h-full w-full grid grid-cols-1 md:grid-cols-[220px,1fr]">
        {/* Left rail: timeline / legend */}
        <div className="border-b md:border-b-0 md:border-r border-attio-subtle/70 bg-white/80 backdrop-blur-sm p-4 md:p-5 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-attio-subtle/80 bg-white/80 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-inter text-gray-600">
              Live-Vorschau deiner Datenreise
            </span>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-inter text-gray-500 uppercase tracking-[0.16em]">
              {config.label}
            </p>
            <p className="text-sm font-inter text-gray-700 leading-snug">
              {config.subtitle}
            </p>
          </div>

          {/* Mini timeline dots that react to active feature */}
          <div className="mt-1 flex flex-col gap-3">
            {(["integration", "realtime", "control"] as IntroFeatureKey[]).map(
              (key) => {
                const isActive = key === active
                const item = FEATURE_CONFIG[key]
                const Icon = item.icon
                return (
                  <motion.div
                    key={key}
                    layout
                    transition={snappySpring}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      className="relative flex items-center justify-center"
                    >
                      <motion.div
                        className="h-7 w-7 rounded-full border border-attio-subtle bg-white flex items-center justify-center"
                        animate={{
                          borderColor: isActive
                            ? "rgba(56, 189, 248, 0.8)"
                            : "rgba(226, 232, 240, 1)",
                          boxShadow: isActive
                            ? "0 0 0 1px rgba(56, 189, 248, 0.25)"
                            : "none",
                        }}
                        transition={attioTransition}
                      >
                        <Icon
                          className={`h-3.5 w-3.5 ${
                            isActive ? "text-sky-500" : "text-gray-400"
                          }`}
                          strokeWidth={1.6}
                        />
                      </motion.div>
                      {isActive && (
                        <motion.div
                          layoutId="intro-feature-pulse"
                          className="absolute inset-0 rounded-full border border-sky-400/40"
                          initial={false}
                          animate={{ scale: [1, 1.15, 1], opacity: [1, 0, 1] }}
                          transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                    </motion.div>
                    <div className="flex-1">
                      <p
                        className={`text-xs font-inter ${
                          isActive ? "text-gray-900 font-medium" : "text-gray-500"
                        }`}
                      >
                        {item.label}
                      </p>
                      <p className="text-[11px] font-inter text-gray-400 line-clamp-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </motion.div>
                )
              }
            )}
          </div>
        </div>

        {/* Right: animated diagram that changes per feature */}
        <div className="relative p-4 md:p-6 overflow-hidden">
          <AnimatePresence mode="wait">
            {active === "integration" && (
              <motion.div
                key="integration-scene"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={attioTransition}
                className="h-full flex flex-col justify-between"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <p className="text-xs font-inter text-gray-500 uppercase tracking-[0.18em]">
                      Setup in Minuten
                    </p>
                    <p className="text-sm font-inter text-gray-800">
                      Verbinde CRM, E-Mail und Kalender ohne Code.
                    </p>
                  </div>
                  <motion.div
                    className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/40 text-[11px] font-inter text-emerald-600"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={snappySpring}
                  >
                    Schritt 1 von 3
                  </motion.div>
                </div>

                {/* three-step integration line */}
                <div className="flex flex-col gap-4">
                  <motion.div
                    className="relative h-2 rounded-full bg-white/70 border border-attio-subtle/70 overflow-hidden"
                    initial={false}
                  >
                    <motion.div
                      className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500"
                      animate={{ x: ["0%", "200%"] }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                  <div className="grid grid-cols-3 gap-3 text-[11px] font-inter text-gray-600">
                    <div className="rounded-xl bg-white/85 border border-attio-subtle px-3 py-2">
                      <p className="text-[11px] text-gray-500 mb-0.5">
                        1. Quelle wählen
                      </p>
                      <p className="text-xs text-gray-900">HubSpot / Pipedrive</p>
                    </div>
                    <div className="rounded-xl bg-white/85 border border-attio-subtle px-3 py-2">
                      <p className="text-[11px] text-gray-500 mb-0.5">
                        2. Felder mappen
                      </p>
                      <p className="text-xs text-gray-900">
                        Kontakte, Deals, Aktivitäten
                      </p>
                    </div>
                    <div className="rounded-xl bg-white/85 border border-attio-subtle px-3 py-2">
                      <p className="text-[11px] text-gray-500 mb-0.5">
                        3. Sync starten
                      </p>
                      <p className="text-xs text-emerald-600">Läuft im Hintergrund</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {active === "realtime" && (
              <motion.div
                key="realtime-scene"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={attioTransition}
                className="h-full flex flex-col justify-between"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <p className="text-xs font-inter text-gray-500 uppercase tracking-[0.18em]">
                      Live-Streams
                    </p>
                    <p className="text-sm font-inter text-gray-800">
                      Jede Änderung wandert in Sekunden durch alle Systeme.
                    </p>
                  </div>
                  <motion.div
                    className="px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/40 text-[11px] font-inter text-sky-600"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={snappySpring}
                  >
                    Events pro Minute
                  </motion.div>
                </div>

                <div className="relative flex-1 flex items-center justify-center">
                  {/* three stacked lanes */}
                  <div className="w-full max-w-md space-y-3">
                    {[0, 1, 2].map((lane) => (
                      <motion.div
                        key={lane}
                        className="relative h-8 rounded-full bg-white/90 border border-attio-subtle overflow-hidden"
                      >
                        <motion.div
                          className="absolute inset-y-1 left-0 rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500"
                          style={{ width: "30%" }}
                          animate={{
                            x: ["-20%", "110%"],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 3.2 + lane * 0.4,
                            ease: "easeInOut",
                          }}
                        />
                        <div className="relative z-10 flex items-center justify-between px-3 text-[11px] font-inter text-gray-600">
                          <span>
                            {lane === 0
                              ? "Neue Mail eingetroffen"
                              : lane === 1
                              ? "Kontakt aktualisiert"
                              : "Deal-Status geändert"}
                          </span>
                          <span className="text-gray-400">
                            {lane === 0 ? "→ CRM" : lane === 1 ? "→ Outreach" : "→ Report"}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {active === "control" && (
              <motion.div
                key="control-scene"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={attioTransition}
                className="h-full flex flex-col justify-between"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <p className="text-xs font-inter text-gray-500 uppercase tracking-[0.18em]">
                      Regeln & Governance
                    </p>
                    <p className="text-sm font-inter text-gray-800">
                      Lege fest, welche Daten wohin dürfen – und welche nicht.
                    </p>
                  </div>
                  <motion.div
                    className="px-2.5 py-1 rounded-full bg-slate-900 text-white text-[11px] font-inter"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={snappySpring}
                  >
                    Deine Regeln, dein Stack
                  </motion.div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-[11px] font-inter">
                  <motion.div
                    className="rounded-xl bg-white/90 border border-attio-subtle px-3 py-2 space-y-1"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...attioTransition, delay: 0.05 }}
                  >
                    <p className="text-[11px] text-gray-500">Zugriffslevel</p>
                    <p className="text-xs text-gray-900">Sales sieht nur Deals</p>
                    <p className="text-[11px] text-emerald-600">Rollenbasiert</p>
                  </motion.div>
                  <motion.div
                    className="rounded-xl bg-white/90 border border-attio-subtle px-3 py-2 space-y-1"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...attioTransition, delay: 0.12 }}
                  >
                    <p className="text-[11px] text-gray-500">Datenspeicher</p>
                    <p className="text-xs text-gray-900">EU-Region erzwungen</p>
                    <p className="text-[11px] text-emerald-600">DSGVO-konform</p>
                  </motion.div>
                  <motion.div
                    className="rounded-xl bg-white/90 border border-attio-subtle px-3 py-2 space-y-1"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...attioTransition, delay: 0.18 }}
                  >
                    <p className="text-[11px] text-gray-500">Audit Trail</p>
                    <p className="text-xs text-gray-900">Jede Änderung nachvollziehbar</p>
                    <p className="text-[11px] text-emerald-600">Exportierbar</p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}


