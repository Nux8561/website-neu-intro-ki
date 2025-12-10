"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { RefreshCw, Plus, Share2, MoreVertical } from "lucide-react"

export function DashboardPreview() {
  return (
    <section className="relative bg-[#0B0C0E] py-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Dashboard Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-jakarta font-medium tracking-tight text-white">
            Business Metrics
          </h2>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all">
              <RefreshCw className="h-4 w-4 text-white/70" />
            </button>
            <button className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all">
              <Plus className="h-4 w-4 text-white/70" />
            </button>
            <button className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all">
              <Share2 className="h-4 w-4 text-white/70" />
            </button>
            <button className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all">
              <MoreVertical className="h-4 w-4 text-white/70" />
            </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bar Chart Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
          >
            <div className="mb-4">
              <h3 className="text-sm font-mono text-white/50 uppercase tracking-wider mb-2">
                Revenue
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-jakarta font-medium tracking-tight text-white">
                  $1.2M
                </span>
                <span className="text-sm text-white/50">May 2024</span>
              </div>
            </div>
            <div className="h-48 flex items-end gap-2">
              {[40, 60, 45, 80, 70, 90, 100].map((height, index) => (
                <motion.div
                  key={index}
                  className="flex-1 bg-gradient-to-t from-accent to-accent-light rounded-t"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Donut Chart Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 17, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
          >
            <h3 className="text-sm font-mono text-white/50 uppercase tracking-wider mb-4">
              Closed-won deals by MQL type
            </h3>
            <div className="flex items-center gap-8">
              {/* Donut Chart Placeholder */}
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="8"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="url(#gradient1)"
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                    whileInView={{ strokeDashoffset: 2 * Math.PI * 40 * 0.3 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* Legend */}
              <div className="flex-1 space-y-2">
                {[
                  { label: "ICP", value: "35%", color: "bg-indigo-500" },
                  { label: "VC", value: "25%", color: "bg-purple-500" },
                  { label: "SP", value: "20%", color: "bg-pink-500" },
                  { label: "TIS", value: "15%", color: "bg-rose-500" },
                  { label: "+3 more", value: "5%", color: "bg-white/20" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="text-sm text-white/70 font-inter">{item.label}</span>
                    <span className="text-sm text-white/50 font-mono ml-auto">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

