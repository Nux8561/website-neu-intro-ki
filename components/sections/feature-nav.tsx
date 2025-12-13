"use client"

import * as React from "react"
import { motion } from "framer-motion"

const features = [
  { id: "data", label: "Data" },
  { id: "workflows", label: "Workflows" },
  { id: "reporting", label: "Reporting" },
  { id: "pipeline", label: "Pipeline" },
]

interface FeatureNavProps {
  activeFeature: string
  onFeatureChange: (feature: string) => void
}

export function FeatureNav({ activeFeature, onFeatureChange }: FeatureNavProps) {
  return (
    <div className="sticky top-16 z-40 border-b border-border-subtle bg-white/95 backdrop-blur-xl relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8 overflow-x-auto hide-scrollbar">
          {features.map((feature) => {
            const isActive = activeFeature === feature.id
            return (
              <button
                key={feature.id}
                onClick={() => onFeatureChange(feature.id)}
                className="relative py-4 text-sm font-inter transition-colors whitespace-nowrap touch-manipulation min-h-[44px]"
              >
                <span
                  className={`transition-colors ${
                    isActive ? "text-text-primary" : "text-text-muted hover:text-text-secondary"
                  }`}
                >
                  {feature.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeFeature"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-text-primary"
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
