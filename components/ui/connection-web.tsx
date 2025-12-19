"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * CONNECTION WEB - Attio-Style
 * Animierte Verbindungslinien zwischen Elementen
 * Zeigt "Vernetzung" und "technische Hochwertigkeit"
 * Jetzt mit Scroll-basierten Animationen
 */
interface ConnectionWebProps {
  className?: string
  intensity?: "subtle" | "medium" | "strong"
}

export function ConnectionWeb({ className = "", intensity = "subtle" }: ConnectionWebProps) {
  const { scrollYProgress } = useScroll()
  const opacityMap = {
    subtle: 0.3,
    medium: 0.5,
    strong: 0.7
  }

  // Scroll-basierte Transformationen
  const horizontalOffset = useTransform(scrollYProgress, [0, 1], [0, 100])
  const verticalOffset = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      {/* Smart Verbindungslinien - Horizontal - Mit Scroll-Animation */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, 
            transparent 0%, 
            rgba(148, 163, 184, ${opacityMap[intensity] * 0.6}) 15%, 
            rgba(148, 163, 184, ${opacityMap[intensity] * 0.8}) 30%,
            rgba(148, 163, 184, ${opacityMap[intensity] * 0.8}) 70%,
            rgba(148, 163, 184, ${opacityMap[intensity] * 0.6}) 85%, 
            transparent 100%)`,
          backgroundSize: "600px 1px",
          backgroundRepeat: "repeat-y",
          x: horizontalOffset,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "0% 100%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Smart Verbindungslinien - Vertical - Mit Scroll-Animation */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, 
            transparent 0%, 
            rgba(148, 163, 184, ${opacityMap[intensity] * 0.6}) 15%, 
            rgba(148, 163, 184, ${opacityMap[intensity] * 0.8}) 30%,
            rgba(148, 163, 184, ${opacityMap[intensity] * 0.8}) 70%,
            rgba(148, 163, 184, ${opacityMap[intensity] * 0.6}) 85%, 
            transparent 100%)`,
          backgroundSize: "1px 600px",
          backgroundRepeat: "repeat-x",
          y: verticalOffset,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Diagonale Verbindungslinien - 45° */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 3rem,
              rgba(148, 163, 184, ${opacityMap[intensity] * 0.4}) 3rem,
              rgba(148, 163, 184, ${opacityMap[intensity] * 0.4}) 3.1rem
            )
          `,
          backgroundSize: "8rem 8rem",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Network Nodes - Kleine Verbindungspunkte */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(148, 163, 184, ${opacityMap[intensity] * 0.5}) 2px, transparent 2px),
            radial-gradient(circle at 80% 20%, rgba(148, 163, 184, ${opacityMap[intensity] * 0.5}) 2px, transparent 2px),
            radial-gradient(circle at 20% 80%, rgba(148, 163, 184, ${opacityMap[intensity] * 0.5}) 2px, transparent 2px),
            radial-gradient(circle at 80% 80%, rgba(148, 163, 184, ${opacityMap[intensity] * 0.5}) 2px, transparent 2px),
            radial-gradient(circle at 50% 50%, rgba(148, 163, 184, ${opacityMap[intensity] * 0.3}) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "300px 300px",
          backgroundPosition: "center",
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
