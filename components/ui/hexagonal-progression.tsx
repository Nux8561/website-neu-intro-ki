/**
 * Hexagonal Progression Visual
 * Fünf hexagonale Formen in isometrischer 3D-Ansicht, wie bei Attio
 */

"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { attioTransition } from "@/lib/animations"

export function HexagonalProgression() {
  const hexagons = [
    { id: 1, hasPattern: false, delay: 0 },
    { id: 2, hasPattern: false, delay: 0.1 },
    { id: 3, hasPattern: true, delay: 0.2 },
    { id: 4, hasPattern: false, delay: 0.3 },
    { id: 5, hasPattern: false, delay: 0.4 },
  ]

  return (
    <div className="relative w-full h-full flex items-center justify-center py-8">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 600 180"
        className="overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Pattern für das gefüllte Hexagon */}
          <pattern
            id="diagonalHatch"
            patternUnits="userSpaceOnUse"
            width="6"
            height="6"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="6"
              stroke="#9CA3AF"
              strokeWidth="0.8"
              opacity="0.5"
            />
          </pattern>
        </defs>

        {hexagons.map((hex, index) => {
          const x = 60 + index * 120
          const y = 90
          const size = 45
          const offset = 12 // Offset für 3D-Effekt

          // Hexagon-Punkte berechnen (isometrisch - vordere Fläche)
          const frontPoints = [
            { x: x, y: y - size },
            { x: x + size * 0.866, y: y - size * 0.5 },
            { x: x + size * 0.866, y: y + size * 0.5 },
            { x: x, y: y + size },
            { x: x - size * 0.866, y: y + size * 0.5 },
            { x: x - size * 0.866, y: y - size * 0.5 },
          ]

          const frontPointsString = frontPoints.map((p) => `${p.x},${p.y}`).join(" ")

          // Hintere Fläche (verschoben für 3D-Effekt)
          const backPoints = [
            { x: x + offset, y: y - size - offset * 0.5 },
            { x: x + size * 0.866 + offset, y: y - size * 0.5 - offset * 0.5 },
            { x: x + size * 0.866 + offset, y: y + size * 0.5 - offset * 0.5 },
            { x: x + offset, y: y + size - offset * 0.5 },
          ]

          const backPointsString = backPoints.map((p) => `${p.x},${p.y}`).join(" ")

          return (
            <g key={hex.id}>
              {/* Hintere Fläche (versteckte Kanten) - gestrichelt */}
              <motion.polygon
                points={backPointsString}
                fill="none"
                stroke="#9CA3AF"
                strokeWidth="1"
                strokeDasharray="3 3"
                opacity="0.4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: hex.delay, ...attioTransition }}
              />

              {/* Verbindungslinien zur hinteren Fläche (für 3D-Effekt) */}
              <motion.line
                x1={frontPoints[1].x}
                y1={frontPoints[1].y}
                x2={backPoints[1].x}
                y2={backPoints[1].y}
                stroke="#9CA3AF"
                strokeWidth="1"
                strokeDasharray="3 3"
                opacity="0.4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: hex.delay + 0.05, ...attioTransition }}
              />
              <motion.line
                x1={frontPoints[2].x}
                y1={frontPoints[2].y}
                x2={backPoints[2].x}
                y2={backPoints[2].y}
                stroke="#9CA3AF"
                strokeWidth="1"
                strokeDasharray="3 3"
                opacity="0.4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: hex.delay + 0.1, ...attioTransition }}
              />

              {/* Vordere Fläche */}
              <motion.polygon
                points={frontPointsString}
                fill={hex.hasPattern ? "url(#diagonalHatch)" : "none"}
                stroke="#1F2937"
                strokeWidth="1.5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: hex.delay, ...attioTransition }}
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}

