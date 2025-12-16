/**
 * Attio Grid Background Component
 * SVG-basierte Grid-Pattern Komponente für mehr Kontrolle über das Design
 */

"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AttioGridBackgroundProps {
  className?: string
  opacity?: number
  size?: number
  color?: string
  strokeWidth?: number
}

export function AttioGridBackground({
  className = "",
  opacity = 0.03,
  size = 40,
  color = "rgba(0, 0, 0, 0.08)",
  strokeWidth = 1
}: AttioGridBackgroundProps) {
  // Generiere eine eindeutige ID für das Pattern (für mehrere Instanzen)
  const patternId = React.useMemo(() => `attio-grid-${Math.random().toString(36).substr(2, 9)}`, [])

  return (
    <div 
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{ opacity, zIndex: 0 }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={patternId}
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${size} 0 L 0 0 0 ${size}`}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  )
}

/**
 * Attio Grid Background mit Dots (wie auf Attio.com)
 * Alternative Variante mit Punkten statt Linien
 */
interface AttioGridDotsProps {
  className?: string
  opacity?: number
  size?: number
  color?: string
  dotSize?: number
}

export function AttioGridDots({
  className = "",
  opacity = 0.03,
  size = 40,
  color = "rgba(0, 0, 0, 0.08)",
  dotSize = 1
}: AttioGridDotsProps) {
  const patternId = React.useMemo(() => `attio-dots-${Math.random().toString(36).substr(2, 9)}`, [])

  return (
    <div 
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{ opacity, zIndex: 0 }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={patternId}
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx={size / 2}
              cy={size / 2}
              r={dotSize}
              fill={color}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  )
}

