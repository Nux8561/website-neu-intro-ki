"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { attioTransition } from "@/lib/animations"

interface TechBeamDividerProps {
  className?: string
  color?: "green" | "blue" | "purple"
}

const colorConfig = {
  green: {
    beam: "#22c55e",
    glow: "rgba(34, 197, 94, 0.4)",
    node: "#10b981",
  },
  blue: {
    beam: "#3b82f6",
    glow: "rgba(59, 130, 246, 0.4)",
    node: "#2563eb",
  },
  purple: {
    beam: "#a855f7",
    glow: "rgba(168, 85, 247, 0.4)",
    node: "#7c3aed",
  },
}

export function TechBeamDivider({ 
  className,
  color = "green" 
}: TechBeamDividerProps) {
  const [beamPosition, setBeamPosition] = React.useState(0)
  const [activeNode, setActiveNode] = React.useState<number | null>(null)

  const config = colorConfig[color]
  const nodeCount = 8 // Anzahl der Knotenpunkte
  const nodeSpacing = 100 // Abstand zwischen Knoten in px

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Reset
      setBeamPosition(0)
      setActiveNode(null)

      // Animation: Beam bewegt sich von 0% zu 100%
      const duration = 3000 // 3 Sekunden für einen Durchlauf
      const steps = 100
      const stepDuration = duration / steps

      let currentStep = 0
      const animation = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        const position = progress * 100
        setBeamPosition(position)

        // Berechne, welcher Knoten aktiv sein sollte
        const nodeIndex = Math.floor((position / 100) * (nodeCount - 1))
        if (nodeIndex >= 0 && nodeIndex < nodeCount) {
          setActiveNode(nodeIndex)
        } else {
          setActiveNode(null)
        }

        if (currentStep >= steps) {
          clearInterval(animation)
          setBeamPosition(0)
          setActiveNode(null)
        }
      }, stepDuration)

      return () => clearInterval(animation)
    }, 4000) // Loop alle 4 Sekunden (3s Animation + 1s Pause)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative w-full h-16 flex items-center justify-center overflow-hidden ${className || ""}`}>
      {/* Basis-Linie */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-[1px] bg-gray-200" />
      </div>

      {/* Knotenpunkte */}
      {Array.from({ length: nodeCount }).map((_, index) => {
        const leftPosition = (index / (nodeCount - 1)) * 100
        const isActive = activeNode === index

        return (
          <motion.div
            key={index}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
            style={{ left: `${leftPosition}%` }}
            animate={{
              scale: isActive ? 1.5 : 1,
              borderColor: isActive ? config.node : "#d1d5db",
              backgroundColor: isActive ? config.node : "white",
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            <div className="w-2 h-2 rounded-full border-2 bg-white" />
          </motion.div>
        )
      })}

      {/* Licht-Paket (Beam) */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
        style={{
          left: `${beamPosition}%`,
          width: "60px",
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${config.beam}, transparent)`,
          boxShadow: `0 0 10px ${config.glow}, 0 0 20px ${config.glow}`,
        }}
        animate={{
          opacity: beamPosition > 0 && beamPosition < 100 ? 1 : 0,
        }}
        transition={{
          duration: 0.1,
        }}
      />
    </div>
  )
}

