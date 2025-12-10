"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useScroll, useMotionValueEvent } from "framer-motion"

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
  const [isSticky, setIsSticky] = React.useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Sticky wird aktiviert wenn Hero-Section verlassen wird
    setIsSticky(latest > 400)
  })

  return (
    <motion.div
      className={`border-b border-white/5 bg-[#0B0C0E] z-40 ${
        isSticky ? "sticky top-16" : "relative"
      }`}
      initial={false}
      animate={{
        backgroundColor: isSticky ? "rgba(11, 12, 14, 0.95)" : "rgba(11, 12, 14, 1)",
        backdropFilter: isSticky ? "blur(20px)" : "none",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
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
    </motion.div>
  )
}
