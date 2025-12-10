"use client"

import * as React from "react"
import { motion } from "framer-motion"

const features = [
  { id: "data", label: "Data" },
  { id: "workflows", label: "Workflows" },
  { id: "reporting", label: "Reporting", active: true },
  { id: "pipeline", label: "Pipeline" },
]

export function FeatureNav() {
  const [activeFeature, setActiveFeature] = React.useState("reporting")

  return (
    <div className="border-b border-white/5 bg-[#0B0C0E] sticky top-16 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8 overflow-x-auto hide-scrollbar">
          {features.map((feature) => {
            const isActive = activeFeature === feature.id
            return (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className="relative py-4 text-sm font-inter transition-colors whitespace-nowrap"
              >
                <span
                  className={`transition-colors ${
                    isActive ? "text-white" : "text-white/50 hover:text-white/70"
                  }`}
                >
                  {feature.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeFeature"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-white"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

