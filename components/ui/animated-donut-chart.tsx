"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts"
import { cn } from "@/lib/utils"

interface DonutChartData {
  name: string
  value: number
  color?: string
}

interface AnimatedDonutChartProps {
  data: DonutChartData[]
  height?: number
  className?: string
  showAnimation?: boolean
  colorScheme?: "blue-purple" | "blue-pink" | "purple-pink"
  innerRadius?: number
  outerRadius?: number
}

const defaultColors = {
  "blue-purple": ["#3B82F6", "#8B5CF6", "#6366F1", "#A855F7", "#818CF8"],
  "blue-pink": ["#3B82F6", "#EC4899", "#6366F1", "#F472B6", "#93C5FD"],
  "purple-pink": ["#8B5CF6", "#EC4899", "#A855F7", "#F472B6", "#C084FC"],
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-white/90 backdrop-blur-md border border-black/10 rounded-lg p-3 shadow-lg">
        <p className="text-sm font-jakarta font-medium text-black mb-1">
          {data.name}
        </p>
        <p className="text-xs font-inter text-black/70">
          Wert: <span className="font-semibold">{data.value}</span>
        </p>
        <p className="text-xs font-inter text-black/70">
          Prozent:{" "}
          <span className="font-semibold">
            {((data.value / data.total) * 100).toFixed(1)}%
          </span>
        </p>
      </div>
    )
  }
  return null
}

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const RADIAN = Math.PI / 180
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  if (percent < 0.05) return null // Don't show labels for small slices

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={12}
      fontFamily="Inter"
      fontWeight={500}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export function AnimatedDonutChart({
  data,
  height = 300,
  className,
  showAnimation = true,
  colorScheme = "blue-purple",
  innerRadius = 60,
  outerRadius = 100,
}: AnimatedDonutChartProps) {
  const [mounted, setMounted] = React.useState(false)
  const colors = defaultColors[colorScheme]

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Calculate total for percentage
  const total = data.reduce((sum, item) => sum + item.value, 0)
  const dataWithTotal = data.map((item) => ({ ...item, total }))

  return (
    <div className={cn("w-full", className)}>
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={dataWithTotal}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={CustomLabel}
            outerRadius={outerRadius}
            innerRadius={innerRadius}
            fill="#8884d8"
            dataKey="value"
            animationDuration={showAnimation ? 1000 : 0}
            animationBegin={showAnimation ? 200 : 0}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color || colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

