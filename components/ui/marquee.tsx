"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  duration?: number
}

export function Marquee({ children, className, duration = 20 }: MarqueeProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="flex gap-12"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
        style={{
          width: "fit-content",
        }}
      >
        {/* First set */}
        <div className="flex gap-12 shrink-0">{children}</div>
        {/* Duplicate set for seamless loop */}
        <div className="flex gap-12 shrink-0">{children}</div>
      </motion.div>
      {/* Gradient masks */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      />
    </div>
  )
}

