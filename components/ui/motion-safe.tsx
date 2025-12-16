/**
 * Motion Safe Wrapper
 * Verhindert Layout-Shifts bei Animationen
 */

"use client"

import * as React from "react"
import { motion, MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface MotionSafeProps extends Omit<MotionProps, "initial" | "animate"> {
  children: React.ReactNode
  className?: string
  initial?: { opacity?: number }
  animate?: { opacity?: number }
  // y animation wird zu opacity-only, um Layout-Shifts zu vermeiden
  fadeIn?: boolean
}

export function MotionSafe({
  children,
  className,
  initial,
  animate,
  fadeIn = false,
  ...props
}: MotionSafeProps) {
  const safeInitial = fadeIn
    ? { opacity: 0 }
    : initial || { opacity: 0 }
  
  const safeAnimate = fadeIn
    ? { opacity: 1 }
    : animate || { opacity: 1 }

  return (
    <motion.div
      className={cn("motion-safe", className)}
      initial={safeInitial}
      animate={safeAnimate}
      style={{
        willChange: "opacity",
        transform: "translateZ(0)", // GPU acceleration
        backfaceVisibility: "hidden",
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

