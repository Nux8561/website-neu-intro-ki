"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { createSimpleOrthogonalPath, ENTERPRISE_LINE_STYLE } from "@/lib/orthogonal-connector"

interface OrthogonalConnectorLineProps {
  startX: number
  startY: number
  endX: number
  endY: number
  color?: string
  strokeWidth?: number
  animated?: boolean
}

export function OrthogonalConnectorLine({
  startX,
  startY,
  endX,
  endY,
  color = ENTERPRISE_LINE_STYLE.stroke,
  strokeWidth = ENTERPRISE_LINE_STYLE.strokeWidth,
  animated = false,
}: OrthogonalConnectorLineProps) {
  const { path } = createSimpleOrthogonalPath(startX, startY, endX, endY)

  return (
    <motion.svg
      className="absolute pointer-events-none"
      style={{
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        overflow: "visible",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.path
        d={path}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={animated ? { pathLength: 1 } : { pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </motion.svg>
  )
}

