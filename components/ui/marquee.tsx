/**
 * Marquee Component - Attio-Style
 * Endlose horizontale Scroll-Animation für Testimonials, Logos, etc.
 */

"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "left" | "right"
  pauseOnHover?: boolean
  repeat?: number
}

export function Marquee({
  children,
  className,
  speed = 50,
  direction = "left",
  pauseOnHover = true,
  repeat = 2,
}: MarqueeProps) {
  const childrenArray = React.Children.toArray(children)
  
  // Dupliziere Children für nahtlose Loop
  const duplicatedChildren = Array.from({ length: repeat }, () => childrenArray).flat()
  
  const [isPaused, setIsPaused] = React.useState(false)

  return (
    <div
      className={cn(
        "relative flex w-full overflow-hidden",
        className
      )}
      onMouseEnter={pauseOnHover ? () => setIsPaused(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setIsPaused(false) : undefined}
    >
      <motion.div
        className="flex"
        animate={{
          x: direction === "left" ? `-50%` : `50%`,
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
          ...(isPaused && { duration: 0 }),
        }}
        style={{
          width: "fit-content",
        }}
      >
        {/* Erste Reihe */}
        <div className="flex shrink-0 gap-4">
          {duplicatedChildren.map((child, i) => (
            <div key={`first-${i}`} className="shrink-0">
              {child}
            </div>
          ))}
        </div>
        {/* Zweite Reihe (für nahtlose Loop) */}
        <div className="flex shrink-0 gap-4">
          {duplicatedChildren.map((child, i) => (
            <div key={`second-${i}`} className="shrink-0">
              {child}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
