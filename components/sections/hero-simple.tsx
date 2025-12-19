"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "iconoir-react"
import { ENTERPRISE_SPRING } from "@/lib/animations"
import { ExpensiveCard } from "@/components/ui/3d-card"
import { ConnectionWeb } from "@/components/ui/connection-web"

/**
 * HERO SECTION - Attio-Style
 * Großes Dashboard-Mockup mit detaillierter UI
 */
export function HeroSimple() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 pt-32 pb-40 md:pt-40 md:pb-48 border-b border-slate-200 attio-grid-pattern attio-connection-lines attio-network-nodes">
      {/* Hintergrund: Subtiler Gradient für Tiefe */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-slate-50 via-white to-slate-50/50" />
      
      {/* Connection Web - Animierte Vernetzungslinien */}
      <ConnectionWeb intensity="subtle" />

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col gap-16 px-4">
        {/* TEXT TEIL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...ENTERPRISE_SPRING, delay: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...ENTERPRISE_SPRING, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-slate-500">Neu:</span>
            <span className="font-semibold text-slate-800">Research Orchestrator 2.0</span>
          </motion.div>

          {/* Headline - Attio-Style */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...ENTERPRISE_SPRING, delay: 0.3 }}
            className="mb-6 text-5xl font-semibold tracking-tighter text-slate-900 sm:text-7xl"
          >
            Customer relationship magic.
          </motion.h1>

          {/* Subline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...ENTERPRISE_SPRING, delay: 0.4 }}
            className="mx-auto mb-10 max-w-2xl text-sm md:text-lg text-slate-500 leading-relaxed"
          >
            Intro KI sorgt für Clarity. Immer wissen, was zu tun ist. Die ersten 20 Calls sind immer die mit dem besten Potential.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...ENTERPRISE_SPRING, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
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
          </motion.div>
        </motion.div>

        {/* GROSSES DASHBOARD-MOCKUP - Attio-Style */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative mx-auto w-full max-w-6xl"
        >
          {/* Ambient Glow */}
          <motion.div 
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-tr from-blue-100/40 via-purple-100/40 to-emerald-100/40 blur-3xl" 
          />

          {/* Dashboard Container mit 3D-Card */}
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

            {/* Dashboard Body - Split View */}
            <div className="flex h-[600px] text-left">
              {/* Sidebar */}
              <div className="hidden w-64 border-r border-slate-200/50 bg-slate-50/40 backdrop-blur-sm p-4 md:block">
                <div className="mb-6 space-y-1">
                  <div className="px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Workspace
                  </div>
                  {[
                    { name: "Focus of the Day", count: 3, active: true },
                    { name: "Top Opportunities", count: 12 },
                    { name: "Deal Flow", count: 24 },
                    { name: "Research", count: 8 },
                  ].map((item, i) => (
                    <div
                      key={item.name}
                      className={`flex items-center rounded-md px-2 py-1.5 text-xs font-medium ${
                        item.active ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {item.active && <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500" />}
                      {item.name}
                      {item.count && <span className="ml-auto text-slate-400">{item.count}</span>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Canvas - Detailliertes Dashboard */}
              <div className="relative flex-1 bg-slate-50/30 backdrop-blur-sm p-6 md:p-8 overflow-y-auto">
                {/* Hintergrund Grid */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]" />

                {/* Top Section: Focus of the Day */}
                <div className="relative mb-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-900">Focus of the Day</h3>
                    <span className="text-xs text-slate-500">3 Prioritäten</span>
                  </div>
                  
                  {/* Priority Cards */}
                  <div className="space-y-3">
                    {[
                      { name: "Acme Corp", type: "Strong Buy Signal", value: "€50K", priority: 1, status: "Call today 14:00" },
                      { name: "TechStart GmbH", type: "Warm Lead", value: "€25K", priority: 2, status: "Follow-up email" },
                      { name: "DataFlow Inc", type: "New", value: "€15K", priority: 3, status: "Research complete" },
                    ].map((deal, i) => (
                      <motion.div
                        key={deal.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
                        className="flex items-center gap-4 rounded-lg border border-slate-200/60 bg-white/90 backdrop-blur-sm p-4 shadow-attio-sm hover:shadow-attio-md transition-shadow"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-600">
                          #{deal.priority}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-sm font-semibold text-slate-900">{deal.name}</span>
                            <span className="text-xs px-2 py-0.5 bg-slate-100 rounded text-slate-700">{deal.type}</span>
                          </div>
                          <div className="text-xs text-slate-500">{deal.status}</div>
                        </div>
                        <div className="text-sm font-medium text-slate-700">{deal.value}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section: Recent Activity */}
                <div className="relative mt-8 pt-6 border-t border-slate-200">
                  <h3 className="text-sm font-semibold text-slate-900 mb-4">Recent Activity</h3>
                  <div className="space-y-2">
                    {[
                      { action: "New signal detected", company: "Acme Corp", time: "2 min ago" },
                      { action: "Research completed", company: "TechStart GmbH", time: "15 min ago" },
                      { action: "Deal updated", company: "DataFlow Inc", time: "1 hour ago" },
                    ].map((activity, i) => (
                      <div key={i} className="flex items-center gap-3 rounded-lg border border-slate-200/60 bg-white/80 backdrop-blur-sm p-3 text-xs">
                        <div className="h-2 w-2 rounded-full bg-emerald-500" />
                        <div className="flex-1">
                          <span className="font-medium text-slate-900">{activity.action}</span>
                          <span className="text-slate-500"> • {activity.company}</span>
                        </div>
                        <span className="text-slate-400">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ExpensiveCard>
        </motion.div>
      </div>
    </section>
  )
}
