"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ENTERPRISE_SPRING } from "@/lib/animations"

interface ProgressBarProps {
  value: number // 0-100
  label?: string
  showPercentage?: boolean
  className?: string
  color?: "default" | "emerald" | "blue" | "orange" | "purple"
  animated?: boolean
}

const colorStyles = {
  default: "bg-gradient-to-r from-slate-500 to-slate-600",
  emerald: "bg-gradient-to-r from-emerald-500 to-emerald-600",
  blue: "bg-gradient-to-r from-blue-500 to-blue-600",
  orange: "bg-gradient-to-r from-orange-500 to-orange-600",
  purple: "bg-gradient-to-r from-purple-500 to-purple-600",
}

export function ProgressBar({
  value,
  label,
  showPercentage = true,
  className,
  color = "emerald",
  animated = true,
}: ProgressBarProps) {
  const clampedValue = Math.min(Math.max(value, 0), 100)

  return (
    <div className={cn("w-full", className)}>
      {(label || showPercentage) && (
        <div className="flex items-center justify-between mb-1">
          {label && <span className="text-xs text-black/60 font-inter">{label}</span>}
          {showPercentage && (
            <span className="text-xs font-mono font-bold text-black tabular-nums">
              {clampedValue}%
            </span>
          )}
        </div>
      )}
      <div className="h-2 rounded-full bg-black/5 overflow-hidden">
        <motion.div
          initial={animated ? { width: 0 } : { width: `${clampedValue}%` }}
          animate={{ width: `${clampedValue}%` }}
          transition={animated ? { ...ENTERPRISE_SPRING, delay: 0.2 } : { duration: 0 }}
          className={cn("h-full rounded-full", colorStyles[color])}
        />
      </div>
    </div>
  )
}

