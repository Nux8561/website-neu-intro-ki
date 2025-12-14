"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Calendar, Trophy, ArrowUp, ArrowDown } from "lucide-react"
import { attioTransition, snappySpring, snappyStaggerContainer, snappyStaggerItem } from "@/lib/animations"

// Realistic chart data with ups and downs (good months, bad months, normal months)
const chartData = [
  { month: "Jan", value: 12 },   // Normal start
  { month: "Feb", value: 18 },   // Good month
  { month: "Mär", value: 15 },   // Slight dip
  { month: "Apr", value: 22 },   // Good month
  { month: "Mai", value: 28 },   // Very good month
  { month: "Jun", value: 25 },   // Slight dip
  { month: "Jul", value: 32 },   // Excellent month
  { month: "Aug", value: 20 },   // Bad month (vacation period)
  { month: "Sep", value: 35 },   // Recovery - very good
  { month: "Okt", value: 38 },   // Excellent month
  { month: "Nov", value: 42 },   // Peak month
  { month: "Dez", value: 45 },   // Strong finish
]

export function ReportingVisual() {
  const [chartProgress, setChartProgress] = React.useState(0)
  const [chartDrawn, setChartDrawn] = React.useState(false)

  // Calculate current chart value based on progress
  const getCurrentChartValue = React.useCallback((progress: number) => {
    const totalPoints = chartData.length
    const segmentIndex = Math.floor(progress * (totalPoints - 1))
    const segmentProgress = (progress * (totalPoints - 1)) % 1

    if (segmentIndex >= totalPoints - 1) {
      return chartData[totalPoints - 1].value
    }

    const point1 = chartData[segmentIndex]
    const point2 = chartData[segmentIndex + 1]

    return point1.value + (point2.value - point1.value) * segmentProgress
  }, [])

  const currentChartValue = React.useMemo(() => {
    return getCurrentChartValue(chartProgress)
  }, [chartProgress, getCurrentChartValue])

  // Realistic activity card values - proportional to chart performance
  // Realistic B2B conversion rates
  const activityValues = [
    { label: "Wählversuche", maxValue: 128, subtitle: "Anrufe im Zeitraum", color: "bg-white" },
    { label: "Termin vereinbart", maxValue: 2, subtitle: "Termine geplant", color: "bg-white" }, // ~1.5% conversion
    { label: "Erstgespräche", maxValue: 1, subtitle: "Erste Kontakte", color: "bg-white" }, // ~50% of meetings
    { label: "Zweitgespräche", maxValue: 1, subtitle: "Follow-up Calls", color: "bg-white" }, // ~50% of first meetings
    { label: "Abschlüsse", maxValue: 0, subtitle: "Geschlossene Deals", color: "bg-blue-600 text-white" }, // 0 for realistic day
  ]

  // Calculate current activity values based on chart progress
  // Scale based on current chart value (0-45 range)
  const getCurrentActivityValue = React.useCallback((maxValue: number) => {
    // Map current chart value (0-45) to activity value (0-maxValue)
    const maxChartValue = 45
    return Math.round((currentChartValue / maxChartValue) * maxValue)
  }, [currentChartValue])

  // Realistic rate values - should improve as sales improve
  const rateValues = [
    { label: "Terminrate", maxValue: 1.56, trend: "up" }, // 2/128 = 1.56% (realistic)
    { label: "Qualifikationsrate", maxValue: 68.5, trend: "up" }, // Realistic
    { label: "Abschlussrate", maxValue: 18.2, trend: "up" }, // Realistic
    { label: "Nicht erschienen Rate", maxValue: 3.8, trend: "down" }, // Decreasing (good)
  ]

  const getCurrentRateValue = React.useCallback((maxValue: number) => {
    const maxChartValue = 45
    return Number(((currentChartValue / maxChartValue) * maxValue).toFixed(2))
  }, [currentChartValue])

  // Realistic revenue values - proportional to chart
  const revenueValues = [
    { label: "Umsatz", maxValue: 142000 },
    { label: "Umsatz pro Kunde", maxValue: 5071 },
    { label: "Umsatz pro Wählversuch", maxValue: 910 },
  ]

  const getCurrentRevenueValue = React.useCallback((maxValue: number) => {
    const maxChartValue = 45
    return Math.round((currentChartValue / maxChartValue) * maxValue)
  }, [currentChartValue])

  React.useEffect(() => {
    // Animate chart progress from 0 to 1 over 2.5 seconds
    const startTime = Date.now()
    const duration = 2500

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      setChartProgress(progress)
      setChartDrawn(progress >= 1)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    const timer = setTimeout(() => {
      animate()
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Generate SVG path for chart with realistic curve
  const chartPath = React.useMemo(() => {
    const width = 600
    const height = 200
    const maxValue = 50 // Slightly higher than max for visual space
    const padding = 40

    const points = chartData.map((point, index) => {
      const x = padding + (index / (chartData.length - 1)) * (width - padding * 2)
      const y = height - padding - (point.value / maxValue) * (height - padding * 2)
      return { x, y, value: point.value }
    })

    // Create smooth curve using quadratic bezier
    let path = `M ${points[0].x},${points[0].y}`
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1]
      const curr = points[i]
      const midX = (prev.x + curr.x) / 2
      path += ` Q ${prev.x},${prev.y} ${midX},${(prev.y + curr.y) / 2}`
      if (i === points.length - 1) {
        path += ` T ${curr.x},${curr.y}`
      }
    }

    return path
  }, [])

  // Area path for gradient
  const areaPath = React.useMemo(() => {
    const width = 600
    const height = 200
    const maxValue = 50
    const padding = 40

    const points = chartData.map((point, index) => {
      const x = padding + (index / (chartData.length - 1)) * (width - padding * 2)
      const y = height - padding - (point.value / maxValue) * (height - padding * 2)
      return { x, y }
    })

    let path = `M ${points[0].x},${points[0].y}`
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1]
      const curr = points[i]
      const midX = (prev.x + curr.x) / 2
      path += ` Q ${prev.x},${prev.y} ${midX},${(prev.y + curr.y) / 2}`
      if (i === points.length - 1) {
        path += ` T ${curr.x},${curr.y}`
      }
    }

    const firstX = points[0].x
    const lastX = points[points.length - 1].x
    const bottomY = height - padding

    return `${path} L ${lastX} ${bottomY} L ${firstX} ${bottomY} Z`
  }, [])

  // Get current point position along path
  const getCurrentPointPosition = React.useCallback(() => {
    const width = 600
    const height = 200
    const maxValue = 50
    const padding = 40

    const totalPoints = chartData.length
    const segmentIndex = Math.floor(chartProgress * (totalPoints - 1))
    const segmentProgress = (chartProgress * (totalPoints - 1)) % 1

    if (segmentIndex >= totalPoints - 1) {
      const lastPoint = chartData[totalPoints - 1]
      const x = padding + ((totalPoints - 1) / (totalPoints - 1)) * (width - padding * 2)
      const y = height - padding - (lastPoint.value / maxValue) * (height - padding * 2)
      return { x, y }
    }

    const point1 = chartData[segmentIndex]
    const point2 = chartData[segmentIndex + 1]

    const x1 = padding + (segmentIndex / (totalPoints - 1)) * (width - padding * 2)
    const y1 = height - padding - (point1.value / maxValue) * (height - padding * 2)
    const x2 = padding + ((segmentIndex + 1) / (totalPoints - 1)) * (width - padding * 2)
    const y2 = height - padding - (point2.value / maxValue) * (height - padding * 2)

    return {
      x: x1 + (x2 - x1) * segmentProgress,
      y: y1 + (y2 - y1) * segmentProgress,
    }
  }, [chartProgress])

  const currentPointPosition = getCurrentPointPosition()

  return (
    <div className="h-full w-full bg-[#F5F5F5] p-6 overflow-auto">
      <motion.div
        variants={snappyStaggerContainer}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        {/* Top Section: Activity Cards */}
        <motion.div variants={snappyStaggerItem} className="grid grid-cols-5 gap-3">
          {activityValues.map((card, index) => {
            const Icon = card.label === "Wählversuche" || card.label === "Erstgespräche" || card.label === "Zweitgespräche" 
              ? Phone 
              : card.label === "Termin vereinbart" 
              ? Calendar 
              : Trophy
            const currentValue = getCurrentActivityValue(card.maxValue)
            
            return (
              <motion.div
                key={card.label}
                variants={snappyStaggerItem}
                className={`${card.color} rounded-lg p-4 border border-attio-subtle shadow-sm`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`h-5 w-5 ${card.color === "bg-blue-600" ? "text-white" : "text-gray-400"}`} />
                </div>
                <div className={`text-2xl font-bold font-inter mb-1 ${card.color === "bg-blue-600" ? "text-white" : "text-gray-900"}`}>
                  {currentValue}
                </div>
                <div className={`text-xs font-inter ${card.color === "bg-blue-600" ? "text-blue-100" : "text-gray-500"}`}>
                  {card.label}
                </div>
                <div className={`text-[10px] font-inter mt-1 ${card.color === "bg-blue-600" ? "text-blue-200" : "text-gray-400"}`}>
                  {card.subtitle}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Middle Section: Chart and Rates */}
        <div className="grid grid-cols-3 gap-4">
          {/* Chart Section */}
          <motion.div variants={snappyStaggerItem} className="col-span-2 bg-white rounded-lg p-4 border border-attio-subtle shadow-sm">
            <h3 className="text-sm font-inter font-semibold text-gray-900 mb-4">Übersicht Umsatz</h3>
            <div className="relative h-48">
              <svg
                viewBox="0 0 600 200"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="chart-gradient-reporting" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Y-axis labels */}
                <g className="text-[8px] font-inter fill-gray-500">
                  {[0, 10, 20, 30, 40, 50].map((value) => {
                    const y = 200 - 40 - (value / 50) * 120
                    return (
                      <text key={value} x="5" y={y + 3} textAnchor="start">
                        {value}
                      </text>
                    )
                  })}
                </g>

                {/* Grid lines */}
                <g opacity={0.2}>
                  {[0, 10, 20, 30, 40, 50].map((value) => {
                    const y = 200 - 40 - (value / 50) * 120
                    return (
                      <line
                        key={value}
                        x1="40"
                        y1={y}
                        x2="560"
                        y2={y}
                        stroke="#9CA3AF"
                        strokeWidth="0.5"
                      />
                    )
                  })}
                </g>

                {/* X-axis labels */}
                <g className="text-[8px] font-inter fill-gray-500">
                  {chartData.map((point, index) => {
                    const x = 40 + (index / (chartData.length - 1)) * 520
                    return (
                      <text key={point.month} x={x} y="195" textAnchor="middle">
                        {point.month}
                      </text>
                    )
                  })}
                </g>

                {/* Gradient Area */}
                <motion.path
                  d={areaPath}
                  fill="url(#chart-gradient-reporting)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: chartDrawn ? 1 : 0 }}
                  transition={attioTransition}
                />

                {/* Chart Line - animated pathLength */}
                <motion.path
                  d={chartPath}
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: chartProgress }}
                  transition={{
                    duration: 0.1,
                    ease: "linear",
                  }}
                />

                {/* Traveling Point */}
                <AnimatePresence>
                  {chartProgress > 0 && chartProgress < 1 && (
                    <motion.circle
                      key="traveling-point"
                      cx={currentPointPosition.x}
                      cy={currentPointPosition.y}
                      r="4"
                      fill="#10B981"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={attioTransition}
                    />
                  )}
                </AnimatePresence>
              </svg>
            </div>
          </motion.div>

          {/* Rate Metrics */}
          <motion.div variants={snappyStaggerItem} className="space-y-3">
            {rateValues.map((rate, index) => {
              const currentValue = getCurrentRateValue(rate.maxValue)
              return (
                <motion.div
                  key={rate.label}
                  variants={snappyStaggerItem}
                  className="bg-white rounded-lg p-3 border border-attio-subtle shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-inter text-gray-600">{rate.label}</span>
                    {rate.trend === "down" ? (
                      <ArrowDown className="h-3 w-3 text-red-500" />
                    ) : (
                      <ArrowUp className="h-3 w-3 text-green-500" />
                    )}
                  </div>
                  <div className="text-lg font-bold font-inter text-gray-900 mt-1">
                    {currentValue.toFixed(2)}
                    <span className="text-sm font-normal text-gray-500">%</span>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Bottom Section: Revenue Metrics */}
        <motion.div variants={snappyStaggerItem} className="grid grid-cols-3 gap-3">
          {revenueValues.map((metric, index) => {
            const currentValue = getCurrentRevenueValue(metric.maxValue)
            return (
              <motion.div
                key={metric.label}
                variants={snappyStaggerItem}
                className="bg-white rounded-lg p-4 border border-attio-subtle shadow-sm"
              >
                <div className="text-xs font-inter text-gray-500 mb-2">{metric.label}</div>
                <div className="text-xl font-bold font-inter text-gray-900">
                  {currentValue.toLocaleString('de-DE')} €
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}
