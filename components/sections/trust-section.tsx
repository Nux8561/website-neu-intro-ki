"use client"

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ENTERPRISE_SPRING } from "@/lib/animations";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Database, Clock, Users, TrendingUp, Shield, Zap, MapPin, Server } from "lucide-react";

export function TrustSection() {
  return (
    <section id="trust" className="border-b-2 border-black bg-white py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Headline - Premium Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={ENTERPRISE_SPRING}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-space-grotesk font-bold -tracking-[0.02em] text-black md:text-5xl">
            Vertrauen durch Zahlen
          </h2>
          <p className="text-lg text-black/80 font-inter">
            Intro KI im Einsatz: Echte Metriken, echte Ergebnisse
          </p>
        </motion.div>

        {/* Quantitative Metriken Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...ENTERPRISE_SPRING, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {[
            { 
              icon: Database, 
              value: 1240500, 
              label: "Recherchierte Datenpunkte", 
              sublabel: "diese Woche",
              color: "blue"
            },
            { 
              icon: Clock, 
              value: 34000, 
              label: "Gesparte Arbeitsstunden", 
              sublabel: "für unsere Kunden",
              color: "emerald"
            },
            { 
              icon: Users, 
              value: 89, 
              label: "Aktive Teams", 
              sublabel: "nutzen Intro KI",
              color: "purple"
            },
            { 
              icon: TrendingUp, 
              value: 3, 
              label: "x mehr Deals", 
              sublabel: "durch AI-Priorisierung",
              color: "orange"
            },
            { 
              icon: Shield, 
              value: 100, 
              label: "% DSGVO-konform", 
              sublabel: "Server in Frankfurt",
              color: "indigo"
            },
            { 
              icon: Zap, 
              value: 60, 
              label: "Sekunden Research", 
              sublabel: "statt 60 Minuten",
              color: "amber"
            },
          ].map((metric, index) => {
            const Icon = metric.icon
            const colorMap = {
              blue: { bg: "bg-blue-100", text: "text-blue-600" },
              emerald: { bg: "bg-emerald-100", text: "text-emerald-600" },
              purple: { bg: "bg-purple-100", text: "text-purple-600" },
              orange: { bg: "bg-orange-100", text: "text-orange-600" },
              indigo: { bg: "bg-indigo-100", text: "text-indigo-600" },
              amber: { bg: "bg-amber-100", text: "text-amber-600" },
            } as const
            const colors = colorMap[metric.color as keyof typeof colorMap] || colorMap.blue
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...ENTERPRISE_SPRING, delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-black/10 bg-white/50 backdrop-blur-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.15)] transition-all"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg} mb-4`}>
                  <Icon className={`h-6 w-6 ${colors.text}`} />
                </div>
                <div className="text-4xl font-space-grotesk font-bold text-black mb-2 tabular-nums">
                  {metric.value < 1000 ? (
                    <>
                      {metric.value}
                      {metric.label.includes("x") && "x"}
                      {metric.label.includes("%") && "%"}
                    </>
                  ) : (
                    <NumberTicker value={metric.value} delay={1000 + index * 200} />
                  )}
                </div>
                <h3 className="text-lg font-space-grotesk font-semibold text-black mb-1">
                  {metric.label}
                </h3>
                <p className="text-sm text-black/60 font-inter">
                  {metric.sublabel}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* DSGVO-Visualisierung - Data Sovereignty */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...ENTERPRISE_SPRING, delay: 0.2 }}
          className="mb-20"
        >
          <div className="rounded-3xl border-2 border-black/10 bg-white/50 backdrop-blur-xl p-10 md:p-14 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-space-grotesk font-semibold text-black mb-4 md:text-4xl">
                Ihre Daten bleiben zu Hause
              </h3>
              <p className="text-lg text-black/80 font-inter max-w-2xl mx-auto">
                Gehostet auf ISO 27001 zertifizierten High-Security Servern in Frankfurt am Main. 
                Kein Datentransfer in Drittstaaten ohne explizite Zustimmung.
              </p>
            </div>

            {/* Karte von Deutschland/Europa mit Server-Standort */}
            <div className="relative h-64 md:h-80 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-black/10 overflow-hidden">
              {/* Stilisierte Karte */}
              <svg
                viewBox="0 0 800 400"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Deutschland Umriss (vereinfacht) */}
                <path
                  d="M 300 150 L 350 140 L 380 160 L 400 180 L 420 200 L 400 220 L 380 240 L 350 250 L 300 260 L 280 240 L 270 200 L 280 160 Z"
                  fill="rgba(59, 130, 246, 0.1)"
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth="2"
                />
                
                {/* Frankfurt - Pulsierender Punkt */}
                <motion.circle
                  cx="350"
                  cy="200"
                  r="8"
                  fill="#10B981"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.circle
                  cx="350"
                  cy="200"
                  r="20"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Verbindungslinien zu anderen Städten (orthogonal) */}
                {[
                  { x: 280, y: 180, label: "Berlin" },
                  { x: 400, y: 220, label: "München" },
                  { x: 320, y: 240, label: "Stuttgart" },
                ].map((city, i) => (
                  <React.Fragment key={i}>
                    {/* Orthogonale Verbindungslinie */}
                    <motion.path
                      d={`M 350 200 L ${city.x} ${city.y}`}
                      stroke="#E5E7EB"
                      strokeWidth="1"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: i * 0.2, duration: 1 }}
                    />
                    {/* Stadt-Punkt */}
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r="4"
                      fill="#3B82F6"
                      opacity="0.6"
                    />
                    {/* Label */}
                    <text
                      x={city.x}
                      y={city.y - 10}
                      fontSize="12"
                      fill="#4B5563"
                      textAnchor="middle"
                      className="font-inter"
                    >
                      {city.label}
                    </text>
                  </React.Fragment>
                ))}
              </svg>

              {/* Server-Standort Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg border border-black/10 p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                      <Server className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm font-space-grotesk font-semibold text-black">
                        Server-Standort: Frankfurt am Main
                      </p>
                      <p className="text-xs text-black/60 font-inter">
                        ISO 27001 zertifiziert • DSGVO-konform • Keine Datenübertragung außerhalb EU
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Founder Credibility - Erweitert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...ENTERPRISE_SPRING, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-block p-8 rounded-2xl border border-black/10 bg-white/50 backdrop-blur-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)]">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-black to-slate-800 mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">IK</span>
            </div>
            <blockquote className="text-lg font-inter text-black/80 italic mb-4 max-w-2xl mx-auto">
              &quot;Wir haben Intro KI gebaut, weil wir keine Lust mehr hatten, Vertriebsdaten manuell zu pflegen. 
              Jetzt sparen unsere Kunden durchschnittlich 20 Stunden pro Woche.&quot;
            </blockquote>
            <p className="text-sm font-space-grotesk font-semibold text-black">
              Intro KI Team
            </p>
            <p className="text-xs text-black/60 font-inter mt-1">
              Entwickelt für moderne Vertriebsteams
            </p>
            
            {/* Made in Germany Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...ENTERPRISE_SPRING, delay: 0.4 }}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10"
            >
              <MapPin className="h-4 w-4 text-black/60" />
              <span className="text-xs font-space-grotesk font-semibold text-black">
                Made in Germany
              </span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

