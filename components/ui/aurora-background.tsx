"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AuroraBackgroundProps {
  className?: string
  intensity?: "subtle" | "medium" | "strong"
  variant?: "blue-purple" | "blue-pink" | "purple-pink"
}

export function AuroraBackground({
  className,
  intensity = "medium",
  variant = "blue-purple",
}: AuroraBackgroundProps) {
  const intensityMap = {
    subtle: { opacity: 0.2, blur: 100 },
    medium: { opacity: 0.3, blur: 120 },
    strong: { opacity: 0.4, blur: 140 },
  }

  const variantMap = {
    "blue-purple": {
      color1: "rgba(59, 130, 246, 0.25)", // Blue-500 - stärker für Dark Mode
      color2: "rgba(139, 92, 246, 0.25)", // Purple-500 - stärker für Dark Mode
      color3: "rgba(59, 130, 246, 0.25)", // Blue-500 - stärker für Dark Mode
    },
    "blue-pink": {
      color1: "rgba(59, 130, 246, 0.25)",
      color2: "rgba(236, 72, 153, 0.25)", // Pink-500 - stärker für Dark Mode
      color3: "rgba(59, 130, 246, 0.25)",
    },
    "purple-pink": {
      color1: "rgba(139, 92, 246, 0.25)",
      color2: "rgba(236, 72, 153, 0.25)",
      color3: "rgba(139, 92, 246, 0.25)",
    },
  }

  const { opacity, blur } = intensityMap[intensity]
  const colors = variantMap[variant]

  return (
    <div className={cn("fixed inset-0 -z-10 overflow-hidden pointer-events-none", className)}>
      {/* Animated Aurora Gradients */}
      <motion.div
        className="absolute inset-0"
        style={{
          willChange: "transform",
        }}
        animate={{
          background: [
            `radial-gradient(circle at 20% 50%, ${colors.color1}, transparent 50%)`,
            `radial-gradient(circle at 80% 50%, ${colors.color2}, transparent 50%)`,
            `radial-gradient(circle at 50% 20%, ${colors.color3}, transparent 50%)`,
            `radial-gradient(circle at 20% 50%, ${colors.color1}, transparent 50%)`,
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Secondary Layer for Depth */}
      <motion.div
        className="absolute inset-0"
        style={{
          willChange: "transform",
        }}
        animate={{
          background: [
            `radial-gradient(circle at 80% 80%, ${colors.color2}, transparent 60%)`,
            `radial-gradient(circle at 20% 20%, ${colors.color1}, transparent 60%)`,
            `radial-gradient(circle at 50% 50%, ${colors.color3}, transparent 60%)`,
            `radial-gradient(circle at 80% 80%, ${colors.color2}, transparent 60%)`,
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      />

      {/* Blend Mode Overlay for Subtle Effect - entfernt für Dark Mode */}

      {/* Additional Glow Effect */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colors.color1}, transparent 70%)`,
          filter: `blur(${blur}px)`,
          opacity: opacity * 0.5,
        }}
      />
    </div>
  )
}

