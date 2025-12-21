"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ENTERPRISE_SPRING } from "@/lib/animations"

/**
 * Industrial Data Flow Visualization
 * 
 * Custom SVG Illustration für "Industrial Tool" Vibe
 * Zeigt Datenströme, Verbindungen und Netzwerke
 * Geometrische Formen, Linien, Punkte - alles per Code
 */
export function IndustrialDataFlow() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Partikel-Positionen (animiert)
  const particles = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    x: (i * 8) % 100,
    y: 20 + (i * 15) % 60,
    delay: i * 0.2,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Grid Background (Raster) */}
        <defs>
          <pattern
            id="grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Verbindungslinien (orthogonal, 1px) */}
        <motion.path
          d="M 50 50 L 150 50 L 150 150 L 250 150"
          fill="none"
          stroke="#111827"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 0.5, ...ENTERPRISE_SPRING }}
        />

        <motion.path
          d="M 100 100 L 200 100 L 200 200 L 300 200"
          fill="none"
          stroke="#111827"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 0.8, ...ENTERPRISE_SPRING }}
        />

        {/* Nodes (Punkte) */}
        {[
          { x: 50, y: 50 },
          { x: 150, y: 50 },
          { x: 150, y: 150 },
          { x: 250, y: 150 },
          { x: 100, y: 100 },
          { x: 200, y: 100 },
          { x: 200, y: 200 },
          { x: 300, y: 200 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="3"
            fill="#111827"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ ...ENTERPRISE_SPRING, delay: 1 + i * 0.1 }}
          />
        ))}

        {/* Animierte Partikel (Datenfluss) */}
        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            cx={`${particle.x}%`}
            cy={`${particle.y}%`}
            r="2"
            fill="#111827"
            initial={{ x: 0, opacity: 0 }}
            animate={{
              x: [0, 400],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

/**
 * Industrial Blueprint Background
 * Technische Diagramme, Blueprints, Raster
 */
export function IndustrialBlueprint() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Dense Grid (Blueprint Style) */}
        <defs>
          <pattern
            id="blueprint-grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="#111827"
              strokeWidth="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-grid)" />

        {/* Technical Diagram Lines */}
        <motion.path
          d="M 20 20 L 380 20 M 20 20 L 20 280 M 380 20 L 380 280 M 20 280 L 380 280"
          fill="none"
          stroke="#111827"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />

        {/* Dimension Lines (Blueprint Style) */}
        <motion.path
          d="M 50 40 L 50 60 M 45 50 L 55 50 M 350 40 L 350 60 M 345 50 L 355 50 M 50 50 L 350 50"
          fill="none"
          stroke="#111827"
          strokeWidth="0.5"
          strokeDasharray="2 2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
      </svg>
    </div>
  )
}

