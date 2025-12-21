"use client"

import * as React from "react"
import { motion, useScroll, useTransform, UseScrollOptions } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParallaxContainerProps {
  children: React.ReactNode
  speed?: number
  className?: string
  offset?: UseScrollOptions["offset"]
}

/**
 * ParallaxContainer - Wrapper für scroll-basierte Parallax-Effekte
 * 
 * Nutzt Framer Motion's useScroll und useTransform für performante
 * Parallax-Animationen basierend auf Scroll-Position.
 * 
 * @param speed - Parallax-Geschwindigkeit (0.2 = langsam, 1.0 = normal, 1.2 = schnell)
 * @param offset - Scroll-Offset für Animation-Trigger ["start end", "end start"]
 */
export function ParallaxContainer({
  children,
  speed = 1.0,
  className,
  offset = ["start end", "end start"],
}: ParallaxContainerProps) {
  const ref = React.useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  })

  // Transformiere Scroll-Progress in Y-Translation
  // Negative Werte = bewegt sich langsamer als Scroll (hinter dem Content)
  // Positive Werte = bewegt sich schneller als Scroll (vor dem Content)
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        willChange: "transform",
      }}
      className={cn("relative", className)}
    >
      {children}
    </motion.div>
  )
}

