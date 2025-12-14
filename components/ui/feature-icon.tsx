/**
 * Feature Icon Component
 * Attio/Linear-Style Icon System
 * Icons sitzen immer in edlen Containern, nie nackt
 */

"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { snappySpring } from "@/lib/animations"

interface FeatureIconProps {
  icon: LucideIcon
  size?: "sm" | "md" | "lg"
  color?: "blue" | "purple" | "green" | "orange" | "pink" | "gray"
  className?: string
  glowOnHover?: boolean
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
}

const iconSizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
}

const glowColors = {
  blue: "hover:shadow-blue-500/20",
  purple: "hover:shadow-purple-500/20",
  green: "hover:shadow-green-500/20",
  orange: "hover:shadow-orange-500/20",
  pink: "hover:shadow-pink-500/20",
  gray: "hover:shadow-gray-500/20",
}

const iconColors = {
  blue: "text-blue-600",
  purple: "text-purple-600",
  green: "text-green-600",
  orange: "text-orange-600",
  pink: "text-pink-600",
  gray: "text-gray-600",
}

export function FeatureIcon({
  icon: Icon,
  size = "md",
  color = "gray",
  className,
  glowOnHover = true,
}: FeatureIconProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={snappySpring}
      className={cn(
        // Container
        sizeClasses[size],
        "rounded-lg",
        "bg-white",
        "border border-gray-200",
        "shadow-sm",
        "flex items-center justify-center",
        // Subtiler Gradient-Hintergrund (weiß zu fast-weiß)
        "bg-gradient-to-br from-white to-gray-50/50",
        // Glow-Effekt bei Hover
        glowOnHover && glowColors[color],
        glowOnHover && "hover:shadow-lg",
        "transition-all duration-attio ease-attio-ease-out",
        className
      )}
    >
      <Icon
        className={cn(
          iconSizes[size],
          iconColors[color],
          "transition-colors duration-attio"
        )}
        strokeWidth={1.5}
      />
    </motion.div>
  )
}

/**
 * Feature Icon Grid
 * Für mehrere Icons nebeneinander
 */
interface FeatureIconGridProps {
  icons: Array<{
    icon: LucideIcon
    color?: FeatureIconProps["color"]
  }>
  size?: FeatureIconProps["size"]
  className?: string
}

export function FeatureIconGrid({
  icons,
  size = "md",
  className,
}: FeatureIconGridProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {icons.map((item, index) => (
        <FeatureIcon
          key={index}
          icon={item.icon}
          size={size}
          color={item.color || "gray"}
        />
      ))}
    </div>
  )
}

