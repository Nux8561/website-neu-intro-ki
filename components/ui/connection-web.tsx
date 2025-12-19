"use client"

import * as React from "react"
import { motion } from "framer-motion"

/**
 * CONNECTION WEB - Attio-Style
 * Animierte Verbindungslinien zwischen Elementen
 * Zeigt "Vernetzung" und "technische Hochwertigkeit"
 */
interface ConnectionWebProps {
  className?: string
  intensity?: "subtle" | "medium" | "strong"
}

export function ConnectionWeb({ className = "", intensity = "subtle" }: ConnectionWebProps) {
  const opacityMap = {
    subtle: 0.15,
    medium: 0.25,
    strong: 0.35
  }

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Smart Verbindungslinien - Horizontal - GRAU */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, 
            transparent 0%, 
            rgba(148, 163, 184, ${opacityMap[intensity] * 0.8}) 20%, 
            rgba(148, 163, 184, ${opacityMap[intensity]}) 40%,
            rgba(148, 163, 184, ${opacityMap[intensity]}) 60%,
            rgba(148, 163, 184, ${opacityMap[intensity] * 0.8}) 80%, 
            transparent 100%)`,
          backgroundSize: "600px 1px",
          backgroundRepeat: "repeat-y",
          backgroundPosition: "center",
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

      {/* Smart Verbindungslinien - Vertical - GRAU */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, 
            transparent 0%, 
            rgba(148, 163, 184, ${opacityMap[intensity] * 0.8}) 20%, 
            rgba(148, 163, 184, ${opacityMap[intensity]}) 40%,
            rgba(148, 163, 184, ${opacityMap[intensity]}) 60%,
            rgba(148, 163, 184, ${opacityMap[intensity] * 0.8}) 80%, 
            transparent 100%)`,
          backgroundSize: "1px 600px",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center",
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

    </div>
  )
}

