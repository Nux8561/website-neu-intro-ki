"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "iconoir-react"
import { ENTERPRISE_SPRING } from "@/lib/animations"

/**
 * EINFACHE, FUNKTIONIERENDE HERO-SEKTION
 * Keine komplexen Dependencies, nur das was funktioniert
 */
export function HeroSimple() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Subtiler animierter Hintergrund */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        {/* Badge - Sofort sichtbar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-sm font-medium text-slate-700">Research Orchestrator 2.0 verfügbar</span>
        </motion.div>

        {/* Headline - Große, klare Typografie */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Dein CRM ist blind.
          <br />
          <span className="text-slate-500">Intro KI sieht alles.</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Schluss mit manueller Dateneingabe. Intro KI überwacht Deals, News und Signale automatisch – 
          und sagt deinem Team proaktiv, was zu tun ist.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={ENTERPRISE_SPRING}
          >
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-lg font-medium text-lg shadow-lg hover:bg-slate-800 transition-colors"
            >
              Demo buchen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={ENTERPRISE_SPRING}
          >
            <Link
              href="#features"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center px-8 py-4 bg-white text-slate-900 rounded-lg font-medium text-lg border-2 border-slate-200 hover:border-slate-300 transition-colors shadow-sm"
            >
              Wie es funktioniert
            </Link>
          </motion.div>
        </motion.div>

        {/* Fake UI Preview - Einfach aber effektiv */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Window Header */}
            <div className="h-12 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4 h-8 bg-white rounded border border-slate-200 flex items-center px-3 text-sm text-slate-400">
                Search leads & signals...
              </div>
            </div>

            {/* Content - Professionelle UI wie echte Software */}
            <div className="p-8 bg-white min-h-[500px]">
              {/* Table Header */}
              <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-4">
                  <h3 className="text-sm font-semibold text-slate-900">Companies</h3>
                  <span className="text-xs text-slate-500">24 active</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-24 bg-slate-100 rounded border border-slate-200" />
                  <div className="h-8 w-8 bg-slate-100 rounded border border-slate-200" />
                </div>
              </div>

              {/* Table Rows - Professionell */}
              <div className="space-y-2">
                {[
                  { name: "Acme Corp", domain: "acme.com", status: "Strong Signal", revenue: "$10M-$50M" },
                  { name: "TechStart GmbH", domain: "techstart.de", status: "Warm Lead", revenue: "$5M-$10M" },
                  { name: "DataFlow Inc", domain: "dataflow.io", status: "New", revenue: "$1M-$5M" },
                ].map((company, i) => (
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-white transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center text-slate-600 font-semibold text-sm">
                      {company.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-sm font-semibold text-slate-900">{company.name}</span>
                        <span className="text-xs text-slate-500">{company.domain}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-0.5 bg-slate-200 rounded text-slate-700">{company.status}</span>
                        <span className="text-xs text-slate-500">{company.revenue}</span>
                      </div>
                    </div>
                    <div className="h-8 w-20 bg-slate-200 rounded" />
                  </motion.div>
                ))}
              </div>

              {/* Bottom Action Bar */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.6 }}
                className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 bg-slate-200 rounded" />
                  <span className="text-xs text-slate-500">3 neue Signale erkannt</span>
                </div>
                <div className="h-8 w-24 bg-slate-900 rounded text-white text-xs font-medium flex items-center justify-center">
                  Actions
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

