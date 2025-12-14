"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { attioTransition } from "@/lib/animations"

// Sample data points for the chart
const dataPoints = [
  { x: 0, y: 100 },    // Start
  { x: 20, y: 95 },
  { x: 40, y: 85 },
  { x: 60, y: 70 },
  { x: 80, y: 45 },
  { x: 100, y: 20 },   // Peak
]

export function ReportingVisual() {
  const [pathDrawn, setPathDrawn] = React.useState(false)
  const [showTooltip, setShowTooltip] = React.useState(false)

  // Generate SVG path from data points
  const pathD = React.useMemo(() => {
    const width = 300
    const height = 120
    const maxY = Math.max(...dataPoints.map(p => p.y))
    const minY = Math.min(...dataPoints.map(p => p.y))
    const rangeY = maxY - minY

    const points = dataPoints.map(point => {
      const x = (point.x / 100) * width
      const y = height - ((point.y - minY) / rangeY) * (height - 20) - 10
      return `${x},${y}`
    })

    return `M ${points[0]} ${points.slice(1).map((p, i) => `L ${p}`).join(' ')}`
  }, [])

  // Area path for gradient fill
  const areaPathD = React.useMemo(() => {
    const width = 300
    const height = 120
    const maxY = Math.max(...dataPoints.map(p => p.y))
    const minY = Math.min(...dataPoints.map(p => p.y))
    const rangeY = maxY - minY

    const firstPoint = dataPoints[0]
    const lastPoint = dataPoints[dataPoints.length - 1]
    const firstX = (firstPoint.x / 100) * width
    const firstY = height - ((firstPoint.y - minY) / rangeY) * (height - 20) - 10
    const lastX = (lastPoint.x / 100) * width
    const lastY = height - ((lastPoint.y - minY) / rangeY) * (height - 20) - 10

    const linePath = dataPoints.map((point, index) => {
      const x = (point.x / 100) * width
      const y = height - ((point.y - minY) / rangeY) * (height - 20) - 10
      return index === 0 ? `M ${x} ${y}` : `L ${x} ${y}`
    }).join(' ')

    return `${linePath} L ${lastX} ${height} L ${firstX} ${height} Z`
  }, [])

  // Get tooltip position (at the peak)
  const tooltipPosition = React.useMemo(() => {
    const width = 300
    const height = 120
    const maxY = Math.max(...dataPoints.map(p => p.y))
    const minY = Math.min(...dataPoints.map(p => p.y))
    const rangeY = maxY - minY

    const peakPoint = dataPoints[dataPoints.length - 1]
    const x = (peakPoint.x / 100) * width
    const y = height - ((peakPoint.y - minY) / rangeY) * (height - 20) - 10

    return { x, y }
  }, [])

  React.useEffect(() => {
    // After path is drawn, show tooltip
    const timer = setTimeout(() => {
      setPathDrawn(true)
      setTimeout(() => {
        setShowTooltip(true)
      }, 200)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-white rounded-xl p-4 border border-attio-subtle shadow-attio-card">
      <div className="relative w-full h-32">
        <svg
          viewBox="0 0 300 120"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Gradient Area */}
          <motion.path
            d={areaPathD}
            fill="url(#chart-gradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: pathDrawn ? 1 : 0 }}
            transition={attioTransition}
          />

          {/* Chart Line */}
          <motion.path
            d={pathD}
            fill="none"
            stroke="#3B82F6"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: pathDrawn ? 1 : 0 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
          />
        </svg>

        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: tooltipPosition.y - 10 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: tooltipPosition.y,
                x: [0, -2, 0],
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                ...attioTransition,
                y: {
                  ...attioTransition,
                },
                x: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute left-0 -translate-x-1/2 -translate-y-1/2 px-2 py-1 bg-text-primary text-white text-[10px] font-inter font-medium rounded whitespace-nowrap shadow-lg"
              style={{ 
                left: `${(tooltipPosition.x / 300) * 100}%`,
              }}
            >
              +124% Growth
              {/* Tooltip Arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-text-primary" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

