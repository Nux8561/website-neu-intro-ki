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
    <section className="py-32 md:py-40 bg-white relative overflow-hidden border-b-2 border-black">
      <div className="mx-auto max-w-full px-4">
        <ScrollReveal direction="up" distance={50}>
          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6 font-space-grotesk">
              Always connected to your data.
            </h2>
            <p className="text-xl text-black/70 leading-relaxed font-inter">
              Continually sync your product, billing, and relationship data into your workspace.
            </p>
          </div>
        </ScrollReveal>

        {/* Interface Mockup - Industrial Tool Style */}
        <ScrollReveal direction="up" distance={80}>
          <ExpensiveCard intensity={5} className="overflow-hidden border-2 border-black">
            {/* Top Bar - Industrial Tool Style */}
            <div className="flex items-center justify-between border-b-2 border-black bg-white px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded border-2 border-black bg-black" />
                <span className="text-sm font-bold text-black font-space-grotesk uppercase tracking-wider">Workspaces</span>
              </div>
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-black bg-white" />
                ))}
              </div>
            </div>

            {/* Control Bar - Industrial Tool Style */}
            <div className="flex items-center gap-3 border-b-2 border-black bg-white px-6 py-3">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded border-2 border-black bg-white text-sm font-mono font-bold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all">
                <div className="h-4 w-4 rounded border-2 border-black bg-white" />
                All workspaces
                <div className="h-3 w-3 border-2 border-black" />
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded border-2 border-black bg-white text-sm font-mono font-bold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all">
                <div className="h-4 w-4 rounded border-2 border-black bg-white" />
                Filter
                <span className="h-5 w-5 rounded-full border-2 border-black bg-black text-white text-xs flex items-center justify-center font-mono font-bold">2</span>
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded border-2 border-black bg-white text-sm font-mono font-bold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all">
                <div className="h-4 w-4 rounded border-2 border-black bg-white" />
                Sort
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded border-2 border-black bg-white text-sm font-mono font-bold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all">
                <div className="h-4 w-4 rounded border-2 border-black bg-white" />
                View settings
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded border-2 border-black bg-white text-sm font-mono font-bold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all ml-auto">
                <div className="h-4 w-4 rounded border-2 border-black bg-white" />
                Export
              </button>
            </div>

            {/* Table - Industrial Tool Style */}
            <div className="bg-white">
              {/* Table Header */}
              <div className="grid grid-cols-5 gap-4 px-6 py-3 border-b-2 border-black bg-black/5">
                <div className="text-xs font-mono font-bold text-black uppercase tracking-wider">Workspace</div>
                <div className="text-xs font-mono font-bold text-black uppercase tracking-wider">Recent</div>
                <div className="text-xs font-mono font-bold text-black uppercase tracking-wider">Domain</div>
                <div className="text-xs font-mono font-bold text-black uppercase tracking-wider"># Seats</div>
                <div className="text-xs font-mono font-bold text-black uppercase tracking-wider"># Billed</div>
              </div>

              {/* Table Rows - Industrial Tool Style */}
              <div className="divide-y-2 divide-black/10">
                {workspaces.map((workspace, i) => (
                  <motion.div
                    key={workspace.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...ENTERPRISE_SPRING, delay: i * 0.05 }}
                    className="grid grid-cols-5 gap-4 px-6 py-4 hover:bg-black/5 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full border-2 border-black bg-black" />
                      <div className="h-6 w-6 rounded border-2 border-black bg-white" />
                      <span className="text-sm font-bold text-black font-space-grotesk">{workspace.name}</span>
                    </div>
                    <div className="text-sm text-black/60 font-mono">—</div>
                    <div>
                      <span className="inline-block px-2 py-1 rounded border-2 border-black bg-white text-xs font-mono font-bold text-black uppercase tracking-wider">
                        {workspace.domain}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-black font-mono tabular-nums">{workspace.seats}</div>
                    <div className="text-sm font-bold text-black font-mono tabular-nums">{workspace.billed}</div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Actions - Industrial Tool Style */}
              <div className="border-t-2 border-black bg-black/5 px-6 py-3">
                <button className="text-sm font-mono font-bold uppercase tracking-wider text-black hover:text-black/60 transition-colors">
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

