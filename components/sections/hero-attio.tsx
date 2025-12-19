"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Search, Command, CheckCircle2, Zap } from "lucide-react"
import { ENTERPRISE_SPRING } from "@/lib/animations"

export function HeroAttio() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 pt-20 pb-24 md:pt-32 md:pb-32 border-b border-slate-200 attio-grid-pattern">
      {/* Hintergrund: Subtiler Gradient für Tiefe */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-slate-50 via-white to-slate-50/50" />

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col gap-16 px-4">
        {/* TEXT TEIL */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-slate-500">Neu:</span>
            <span className="font-semibold text-slate-800">Research Orchestrator 2.0</span>
          </div>

          {/* Headline - Tight & Heavy */}
          <h1 className="mb-6 text-5xl font-semibold tracking-tighter text-slate-900 sm:text-7xl">
            Dein CRM ist blind. <br className="hidden sm:block" />
            <span className="text-slate-400">Intro KI sieht alles.</span>
          </h1>

          {/* Subline */}
          <p className="mx-auto mb-10 max-w-2xl text-sm md:text-lg text-slate-500 leading-relaxed">
            Schluss mit manueller Dateneingabe. Intro KI überwacht Deals, News und Signale automatisch – und
            sagt deinem Team proaktiv, was zu tun ist.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-attio-md transition-all hover:scale-[1.02] hover:bg-slate-800 hover:shadow-attio-lg"
            >
              Demo buchen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#features"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('features')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white/80 backdrop-blur-sm px-6 py-3 text-sm font-medium text-slate-700 hover:bg-white hover:border-slate-300 transition-all shadow-attio-sm hover:shadow-attio-md hover:scale-[1.02]"
            >
              Wie es funktioniert
            </Link>
          </div>
        </div>

        {/* FAKE UI TEIL (Der "Attio Look") */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={ENTERPRISE_SPRING}
          className="relative mx-auto w-full max-w-5xl"
        >
          {/* Glow hinter der UI */}
          <div className="absolute -inset-1 -z-10 rounded-[3rem] bg-gradient-to-tr from-blue-100/40 via-purple-100/40 to-emerald-100/40 blur-2xl" />

          {/* Das Fenster mit Glassmorphism */}
          <div className="overflow-hidden rounded-xl border border-white/60 bg-white/80 backdrop-blur-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)]">
            {/* Window Header */}
            <div className="flex h-11 items-center justify-between border-b border-slate-200/50 bg-white/60 backdrop-blur-sm px-4">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-slate-200/80" />
                <div className="h-3 w-3 rounded-full bg-slate-200/80" />
              </div>
              {/* Fake Search Bar */}
              <div className="mx-auto flex w-full max-w-sm items-center rounded-md border border-slate-200 bg-white px-3 py-1 text-xs text-slate-400 shadow-sm">
                <Search className="mr-2 h-3.5 w-3.5 text-slate-400" />
                <span>Search leads & signals...</span>
                <span className="ml-auto flex items-center gap-1 rounded border border-slate-100 bg-slate-50 px-1.5 py-0.5 text-[10px] text-slate-400">
                  <Command className="h-2 w-2" /> K
                </span>
              </div>
              <div className="w-10" />
            </div>

            {/* Window Body (Split View) */}
            <div className="flex h-[450px] text-left">
              {/* Sidebar */}
              <div className="hidden w-60 border-r border-slate-200/50 bg-slate-50/40 backdrop-blur-sm p-4 md:block">
                <div className="mb-6 space-y-1">
                  <div className="px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Workspace
                  </div>
                  {["Inbox", "Prioritized Leads", "Deal Flow", "Research"].map((item, i) => (
                    <div
                      key={item}
                      className={`flex items-center rounded-md px-2 py-1.5 text-xs font-medium ${
                        i === 1 ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {i === 1 && <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500" />}
                      {item}
                      {i === 0 && <span className="ml-auto text-slate-400">4</span>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Canvas */}
              <div className="relative flex-1 bg-slate-50/30 backdrop-blur-sm p-6 md:p-8">
                {/* Hintergrund Grid im Canvas */}
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]" />

                {/* Card 1: Lead Signal */}
                <div className="relative mb-4 flex items-start gap-4 rounded-lg border border-slate-200/60 bg-white/90 backdrop-blur-sm p-4 text-xs text-slate-700 shadow-attio-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                    AC
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">Acme Corp</h3>
                        <p className="text-[11px] text-slate-500">SaaS • Berlin • Series B</p>
                      </div>
                      <span className="rounded-full border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                        Strong Buy Signal
                      </span>
                    </div>
                    <div className="mt-3 flex gap-3 rounded border border-slate-100 bg-slate-50 p-2 text-[11px] text-slate-500">
                      <Zap className="h-3.5 w-3.5 text-amber-500" />
                      <span>CTO sucht nach &ldquo;AI Sales Tools&ldquo; auf LinkedIn.</span>
                    </div>
                  </div>
                </div>

                {/* Card 2: Action Suggestion (Skeleton-Style) */}
                <div className="relative flex items-center gap-4 rounded-lg border border-slate-200/60 bg-white/80 backdrop-blur-sm p-2 text-xs text-slate-600 shadow-attio-sm">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-purple-100">
                    <div className="h-2 w-2 rounded-full bg-purple-500" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="h-2 w-24 rounded bg-slate-100" />
                    <div className="h-1.5 w-12 rounded bg-slate-100" />
                  </div>
                  <div className="rounded bg-slate-900 px-3 py-1.5 text-xs font-medium text-white">
                    Generieren
                  </div>
                </div>

                {/* Floating Metrics */}
                <div className="absolute right-8 top-1/2 w-40 rounded-lg border border-slate-200/60 bg-white/90 backdrop-blur-sm p-3 text-[11px] text-slate-600 shadow-attio-md">
                  <div className="mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span className="font-semibold text-slate-700">Enrichment</span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1.5 w-full overflow-hidden rounded bg-slate-100">
                      <div className="h-full w-[80%] bg-emerald-500" />
                    </div>
                    <div className="flex justify-between text-[9px] text-slate-400">
                      <span>Datenquellen</span>
                      <span>12/15</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
