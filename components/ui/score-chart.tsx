"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface ScoreFactor {
  name: string
  weight: number
  value: number
  color: string
}

interface ScoreChartProps {
  factors?: ScoreFactor[]
  overallScore?: number
}

const defaultFactors: ScoreFactor[] = [
  { name: "ICP Fit", weight: 0.3, value: 85, color: "bg-blue-500" },
  { name: "Engagement", weight: 0.25, value: 72, color: "bg-green-500" },
  { name: "Company Size", weight: 0.2, value: 90, color: "bg-purple-500" },
  { name: "Tech Stack", weight: 0.15, value: 65, color: "bg-orange-500" },
  { name: "Funding", weight: 0.1, value: 80, color: "bg-pink-500" },
]

export function ScoreChart({
  factors = defaultFactors,
  overallScore = 78,
}: ScoreChartProps) {
  const [mounted, setMounted] = React.useState(false)
  const [hoveredFactor, setHoveredFactor] = React.useState<string | null>(null)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="h-full w-full p-4 flex flex-col gap-3">
      {/* Overall Score */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-white/70 uppercase tracking-wider">
          Lead Score
        </span>
        <motion.div
          initial={{ scale: 0 }}
          animate={mounted ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 400, damping: 17 }}
          className="text-2xl font-jakarta font-medium text-white"
        >
          {overallScore}
        </motion.div>
      </div>

      {/* Score Factors */}
      <div className="flex-1 space-y-2">
        {factors.map((factor, index) => {
          const isHovered = hoveredFactor === factor.name

          return (
            <motion.div
              key={factor.name}
              initial={{ opacity: 0, x: -10 }}
              animate={mounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              onMouseEnter={() => setHoveredFactor(factor.name)}
              onMouseLeave={() => setHoveredFactor(null)}
              className="space-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-inter text-white/70">
                  {factor.name}
                </span>
                <span className="text-[10px] font-mono text-white/50">
                  {factor.value}%
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className={`h-full ${factor.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={mounted ? { width: `${factor.value}%` } : { width: 0 }}
                  transition={{
                    delay: index * 0.1 + 0.2,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                />
              </div>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1"
                >
                  <Badge
                    variant="outline"
                    className="text-[8px] px-1.5 py-0.5 bg-white/10 border-white/20 text-white/70"
                  >
                    Gewicht: {(factor.weight * 100).toFixed(0)}%
                  </Badge>
                </motion.div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Score Badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8 }}
        className="pt-2 border-t border-white/10"
      >
        <Badge
          variant="outline"
          className={`text-[10px] px-2 py-1 ${
            overallScore >= 80
              ? "bg-green-500/20 border-green-500/30 text-green-400"
              : overallScore >= 60
                ? "bg-blue-500/20 border-blue-500/30 text-blue-400"
                : "bg-yellow-500/20 border-yellow-500/30 text-yellow-400"
          }`}
        >
          {overallScore >= 80 ? "Excellent" : overallScore >= 60 ? "Good" : "Medium"}
        </Badge>
      </motion.div>
    </div>
  )
}

