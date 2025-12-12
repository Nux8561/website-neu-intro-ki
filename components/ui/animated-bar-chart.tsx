"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts"
import { cn } from "@/lib/utils"

interface BarChartData {
  name: string
  value: number
  color?: string
}

interface AnimatedBarChartProps {
  data: BarChartData[]
  height?: number
  className?: string
  showAnimation?: boolean
  colorScheme?: "blue-purple" | "blue-pink" | "purple-pink"
}

const defaultColors = {
  "blue-purple": ["#3B82F6", "#8B5CF6", "#6366F1", "#A855F7"],
  "blue-pink": ["#3B82F6", "#EC4899", "#6366F1", "#F472B6"],
  "purple-pink": ["#8B5CF6", "#EC4899", "#A855F7", "#F472B6"],
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-md border border-[#0B0C0E]/10 rounded-lg p-3 shadow-lg">
        <p className="text-sm font-jakarta font-medium text-[#0B0C0E] mb-1">
          {payload[0].payload.name}
        </p>
        <p className="text-xs font-inter text-[#0B0C0E]/70">
          Wert: <span className="font-semibold">{payload[0].value}</span>
        </p>
      </div>
    )
  }
  return null
}

export function AnimatedBarChart({
  data,
  height = 300,
  className,
  showAnimation = true,
  colorScheme = "blue-purple",
}: AnimatedBarChartProps) {
  const [mounted, setMounted] = React.useState(false)
  const colors = defaultColors[colorScheme]

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const maxValue = Math.max(...data.map((d) => d.value))

  return (
    <div className={cn("w-full", className)}>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#0B0C0E", fontSize: 12, fontFamily: "Inter" }}
            className="text-[#0B0C0E]/50"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#0B0C0E", fontSize: 12, fontFamily: "Inter" }}
            className="text-[#0B0C0E]/50"
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="value"
            radius={[8, 8, 0, 0]}
            animationDuration={showAnimation ? 1000 : 0}
            animationBegin={showAnimation ? 200 : 0}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color || colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

