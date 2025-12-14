"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Calendar, Trophy, ArrowUp, ArrowDown } from "lucide-react"
import { NumberTicker } from "@/components/ui/number-ticker"
import { attioTransition, snappySpring, snappyStaggerContainer, snappyStaggerItem } from "@/lib/animations"

// Chart data points for revenue over months
const chartData = [
  { month: "Jan", value: 0 },
  { month: "Feb", value: 5 },
  { month: "Mär", value: 12 },
  { month: "Apr", value: 18 },
  { month: "Mai", value: 25 },
  { month: "Jun", value: 35 },
  { month: "Jul", value: 45 },
  { month: "Aug", value: 52 },
  { month: "Sep", value: 58 },
  { month: "Okt", value: 62 },
  { month: "Nov", value: 65 },
  { month: "Dez", value: 70 },
]

export function ReportingVisual() {
  const [chartDrawn, setChartDrawn] = React.useState(false)
  const [showMetrics, setShowMetrics] = React.useState(false)
  const [animationStarted, setAnimationStarted] = React.useState(false)

  React.useEffect(() => {
    // Start animation sequence
    const timer = setTimeout(() => {
      setAnimationStarted(true)
      // Animate chart drawing
      setTimeout(() => {
        setChartDrawn(true)
        setTimeout(() => {
          setShowMetrics(true)
        }, 500)
      }, 800)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Generate SVG path for chart
  const chartPath = React.useMemo(() => {
    const width = 600
    const height = 200
    const maxValue = 70
    const padding = 40

    const points = chartData.map((point, index) => {
      const x = padding + (index / (chartData.length - 1)) * (width - padding * 2)
      const y = height - padding - (point.value / maxValue) * (height - padding * 2)
      return `${x},${y}`
    })

    return `M ${points[0]} ${points.slice(1).map(p => `L ${p}`).join(' ')}`
  }, [])

  // Area path for gradient
  const areaPath = React.useMemo(() => {
    const width = 600
    const height = 200
    const maxValue = 70
    const padding = 40

    const linePath = chartData.map((point, index) => {
      const x = padding + (index / (chartData.length - 1)) * (width - padding * 2)
      const y = height - padding - (point.value / maxValue) * (height - padding * 2)
      return index === 0 ? `M ${x} ${y}` : `L ${x} ${y}`
    }).join(' ')

    const firstX = padding
    const lastX = padding + ((chartData.length - 1) / (chartData.length - 1)) * (width - padding * 2)
    const bottomY = height - padding

    return `${linePath} L ${lastX} ${bottomY} L ${firstX} ${bottomY} Z`
  }, [])

  // Activity card values - these will animate from 0 to target
  const activityValues = [
    { label: "Wählversuche", value: 245, subtitle: "Anrufe im Zeitraum", color: "bg-white" },
    { label: "Termin vereinbart", value: 128, subtitle: "Termine geplant", color: "bg-white" },
    { label: "Erstgespräche", value: 89, subtitle: "Erste Kontakte", color: "bg-white" },
    { label: "Zweitgespräche", value: 56, subtitle: "Follow-up Calls", color: "bg-white" },
    { label: "Abschlüsse", value: 23, subtitle: "Geschlossene Deals", color: "bg-blue-600 text-white" },
  ]

  // Rate values
  const rateValues = [
    { label: "Terminrate", value: 52.2, trend: "down" },
    { label: "Qualifikationsrate", value: 69.5, trend: "down" },
    { label: "Abschlussrate", value: 41.1, trend: "down" },
    { label: "Nicht erschienen Rate", value: 8.3, trend: "up" },
  ]

  // Revenue values
  const revenueValues = [
    { label: "Umsatz", value: 125000 },
    { label: "Umsatz pro Kunde", value: 5435 },
    { label: "Umsatz pro Wählversuch", value: 510 },
  ]

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
                  {animationStarted ? (
                    <NumberTicker 
                      value={card.value} 
                      direction="up" 
                      delay={index * 150 + 300} 
                    />
                  ) : (
                    "0"
                  )}
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
                  {[0, 10, 20, 30, 40, 50, 60, 70].map((value) => {
                    const y = 200 - 40 - (value / 70) * 120
                    return (
                      <text key={value} x="5" y={y + 3} textAnchor="start">
                        {value}
                      </text>
                    )
                  })}
                </g>

                {/* Grid lines */}
                <g opacity={0.2}>
                  {[0, 10, 20, 30, 40, 50, 60, 70].map((value) => {
                    const y = 200 - 40 - (value / 70) * 120
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

                {/* Chart Line */}
                <motion.path
                  d={chartPath}
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: chartDrawn ? 1 : 0 }}
                  transition={{
                    duration: 2,
                    ease: "easeOut",
                  }}
                />
              </svg>
            </div>
          </motion.div>

          {/* Rate Metrics */}
          <motion.div variants={snappyStaggerItem} className="space-y-3">
            {rateValues.map((rate, index) => (
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
                  {animationStarted ? (
                    <NumberTicker 
                      value={rate.value} 
                      direction="up" 
                      delay={index * 100 + 1200} 
                      decimals={2} 
                    />
                  ) : (
                    "0.00"
                  )}
                  <span className="text-sm font-normal text-gray-500">%</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section: Revenue Metrics */}
        <motion.div variants={snappyStaggerItem} className="grid grid-cols-3 gap-3">
          {revenueValues.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={snappyStaggerItem}
              className="bg-white rounded-lg p-4 border border-attio-subtle shadow-sm"
            >
              <div className="text-xs font-inter text-gray-500 mb-2">{metric.label}</div>
              <div className="text-xl font-bold font-inter text-gray-900">
                {animationStarted ? (
                  <>
                    <NumberTicker 
                      value={metric.value} 
                      direction="up" 
                      delay={index * 150 + 1800} 
                    />
                    <span className="text-sm font-normal"> €</span>
                  </>
                ) : (
                  "0 €"
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
