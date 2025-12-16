/**
 * Audio Score Visual - Call Assistant & Scoring
 * Zeigt animierte Audio-Wellenlinie und Score, der auf 95 hochzählt
 */

"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { attioTransition } from "@/lib/animations"

export function AudioScoreVisual() {
  const [mounted, setMounted] = React.useState(false)
  const score = useMotionValue(0)
  const springScore = useSpring(score, { stiffness: 100, damping: 20 })
  const displayScore = useTransform(springScore, (value) => Math.round(value))

  React.useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      score.set(95)
    }, 500)
    return () => clearTimeout(timer)
  }, [score])

  // Audio Wave Bars
  const bars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    height: Math.random() * 60 + 20,
    delay: i * 0.05,
  }))

  return (
    <div className="relative w-full h-full min-h-[300px] flex flex-col items-center justify-center p-8 gap-8">
      {/* Audio Wave Visualization */}
      <div className="flex items-end justify-center gap-1 h-32">
        {bars.map((bar) => (
          <motion.div
            key={bar.id}
            initial={{ height: 10 }}
            animate={{
              height: [10, bar.height, 10],
            }}
            transition={{
              duration: 1 + Math.random() * 0.5,
              repeat: Infinity,
              delay: bar.delay,
              ease: "easeInOut",
            }}
            className="w-2 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full"
            style={{ minHeight: 10 }}
          />
        ))}
      </div>

      {/* Score Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, ...attioTransition }}
        className="text-center"
      >
        <div className="flex items-baseline justify-center gap-2">
          <motion.span
            className="text-6xl font-inter-display font-bold text-[#0A0A0A]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {mounted ? displayScore : 0}
          </motion.span>
          <span className="text-2xl font-inter text-gray-500">/100</span>
        </div>
        <p className="text-sm font-inter text-gray-600 mt-2">Call Score</p>
      </motion.div>

      {/* Status Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-200"
      >
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs font-inter font-medium text-green-700">
          Excellent Call Quality
        </span>
      </motion.div>
    </div>
  )
}

