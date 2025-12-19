"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ExpensiveCard } from "@/components/ui/3d-card"
import { ENTERPRISE_SPRING } from "@/lib/animations"

/**
 * WORKSPACES INTERFACE SECTION - Attio-Style
 * Detailliertes Tabellen-Interface wie im Attio-Design
 */
export function WorkspacesInterfaceSection() {
  const workspaces = [
    { name: "Stripe", domain: "stripe.com", seats: 51, billed: 80 },
    { name: "Linear", domain: "linear.com", seats: 25, billed: 27 },
    { name: "OpenAI", domain: "openai.io", seats: 31, billed: 31 },
    { name: "Retool", domain: "retool.com", seats: 82, billed: 60 },
    { name: "DigitalOcean", domain: "digitalocean.com", seats: 60, billed: 82 },
    { name: "Gong", domain: "gong.com", seats: 38, billed: 10 },
    { name: "Dropbox", domain: "dropbox.com", seats: 10, billed: 30 },
    { name: "Miro", domain: "miro.com", seats: 29, billed: 12 },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden attio-grid-pattern attio-connection-lines">
      <div className="mx-auto max-w-[1200px] px-4">
        <ScrollReveal direction="up" distance={50}>
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tighter text-slate-900 sm:text-4xl mb-4">
              Always connected to your data.
            </h2>
            <p className="text-lg text-slate-500">
              Continually sync your product, billing, and relationship data into your workspace.
            </p>
          </div>
        </ScrollReveal>

        {/* Interface Mockup */}
        <ScrollReveal direction="up" distance={80}>
          <ExpensiveCard intensity={5} className="overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded border border-slate-300" />
                <span className="text-sm font-medium text-slate-900">Workspaces</span>
              </div>
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-slate-200 border border-slate-300" />
                ))}
              </div>
            </div>

            {/* Control Bar */}
            <div className="flex items-center gap-3 border-b border-slate-200 bg-white px-6 py-3">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50">
                <div className="h-4 w-4 rounded bg-slate-200" />
                All workspaces
                <div className="h-3 w-3 border border-slate-300" />
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50">
                <div className="h-4 w-4 rounded bg-slate-200" />
                Filter
                <span className="h-5 w-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">2</span>
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50">
                <div className="h-4 w-4 rounded bg-slate-200" />
                Sort
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50">
                <div className="h-4 w-4 rounded bg-slate-200" />
                View settings
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 ml-auto">
                <div className="h-4 w-4 rounded bg-slate-200" />
                Export
              </button>
            </div>

            {/* Table */}
            <div className="bg-white">
              {/* Table Header */}
              <div className="grid grid-cols-5 gap-4 px-6 py-3 border-b border-slate-200 bg-slate-50/50">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Workspace</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Recent</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Domain</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider"># Seats</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider"># Billed</div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-slate-100">
                {workspaces.map((workspace, i) => (
                  <motion.div
                    key={workspace.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...ENTERPRISE_SPRING, delay: i * 0.05 }}
                    className="grid grid-cols-5 gap-4 px-6 py-4 hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full border border-slate-300" />
                      <div className="h-6 w-6 rounded bg-slate-200" />
                      <span className="text-sm font-medium text-slate-900">{workspace.name}</span>
                    </div>
                    <div className="text-sm text-slate-500">—</div>
                    <div>
                      <span className="inline-block px-2 py-1 rounded text-xs font-medium text-slate-700 bg-purple-50 border border-purple-100">
                        {workspace.domain}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-slate-900">{workspace.seats}</div>
                    <div className="text-sm font-medium text-slate-900">{workspace.billed}</div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Actions */}
              <div className="border-t border-slate-200 bg-slate-50/50 px-6 py-3">
                <button className="text-sm font-medium text-slate-700 hover:text-slate-900">
                  + Add Calculation Field
                </button>
              </div>
            </div>
          </ExpensiveCard>
        </ScrollReveal>
      </div>
    </section>
  )
}

