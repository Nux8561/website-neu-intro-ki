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
    subtle: 0.4,
    medium: 0.6,
    strong: 0.8
  }

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Smart Verbindungslinien - Horizontal - GRAU */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, 
            transparent 0%, 
            rgba(71, 85, 105, ${opacityMap[intensity] * 0.8}) 10%, 
            rgba(51, 65, 85, ${opacityMap[intensity]}) 30%,
            rgba(51, 65, 85, ${opacityMap[intensity]}) 70%,
            rgba(71, 85, 105, ${opacityMap[intensity] * 0.8}) 90%, 
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
            rgba(71, 85, 105, ${opacityMap[intensity] * 0.8}) 10%, 
            rgba(51, 65, 85, ${opacityMap[intensity]}) 30%,
            rgba(51, 65, 85, ${opacityMap[intensity]}) 70%,
            rgba(71, 85, 105, ${opacityMap[intensity] * 0.8}) 90%, 
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

      {/* Network Nodes - Kleine Verbindungspunkte */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(148, 163, 184, ${opacityMap[intensity] * 0.6}) 2px, transparent 2px),
            radial-gradient(circle at 80% 20%, rgba(148, 163, 184, ${opacityMap[intensity] * 0.6}) 2px, transparent 2px),
            radial-gradient(circle at 20% 80%, rgba(148, 163, 184, ${opacityMap[intensity] * 0.6}) 2px, transparent 2px),
            radial-gradient(circle at 80% 80%, rgba(148, 163, 184, ${opacityMap[intensity] * 0.6}) 2px, transparent 2px),
            radial-gradient(circle at 50% 50%, rgba(148, 163, 184, ${opacityMap[intensity] * 0.4}) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "300px 300px",
          backgroundPosition: "center",
        }}
      />
    </div>
  )
}

