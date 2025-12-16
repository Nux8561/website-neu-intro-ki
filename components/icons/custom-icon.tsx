/**
 * CustomIcon Component
 * Verwendet die eigenen SVG-Icons für einen einzigartigen USP
 * Attio-Style: Animierte Icons mit Feature-Container
 */

"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CustomIconProps {
  name: string
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  animated?: boolean
  variant?: "default" | "feature" | "decorative"
}

// Mapping der SVG-Dateien zu semantischen Namen
const iconMap: Record<string, string> = {
  // Workflow & Automation
  workflow: "/icons/36sqgTUvKBZA1JLLMmc7bB8mRPx.svg",
  automation: "/icons/36sqgUEMnMVjKuYrr2V9vf2RfLm.svg",
  
  // Data & Analytics
  dataFlow: "/icons/36sqgV3rx2qhmrqPtQLDlmShaLn.svg",
  analytics: "/icons/36sqgVvEAAXqPFSPh6wTWwhDTWO.svg",
  
  // AI & Intelligence
  aiBrain: "/icons/36sqgW3on5GiLSMsds7qkWk0ZAm.svg",
  intelligence: "/icons/36sqgZZACucE1FAPRIdrkqFLQrC.svg",
  
  // Integration & Connectivity
  integration: "/icons/36sqgaezcFoCL9oiNjNnMN1Vwc2.svg",
  connectivity: "/icons/36sqgb7bTiVpXlBcLjHqsP2VzH2.svg",
  
  // Platform & Infrastructure
  platform: "/icons/36sqgceKKAyoLaIweHRXuo1DWsj.svg",
  infrastructure: "/icons/36sqgckrsg2tNukSZukCCJY7YBc.svg",
  
  // Features
  feature1: "/icons/36sqgdOZTLlGUYzIQcGo1rk2qOR.svg",
  feature2: "/icons/36sqge9Yk3zF1l3jstyaTkVoUip.svg",
  feature3: "/icons/36sqgeeyw7s0GRi5vP1WzTc4Ues.svg",
  feature4: "/icons/36sqgfIJ8tliiq5ZuK7U0RaJJn4.svg",
  feature5: "/icons/36sqgTFeotZGECs1KjRmX7Bx97g.svg",
  feature6: "/icons/36sqgTfXspWH1hUlB2gpZWcHODC.svg",
}

const sizeMap = {
  sm: { container: "w-6 h-6 sm:w-8 sm:h-8", icon: 32 },
  md: { container: "w-10 h-10 sm:w-12 sm:h-12", icon: 48 },
  lg: { container: "w-14 h-14 sm:w-16 sm:h-16", icon: 64 },
  xl: { container: "w-20 h-20 sm:w-24 sm:h-24", icon: 96 },
}

export function CustomIcon({
  name,
  className,
  size = "md",
  animated = true,
  variant = "default",
}: CustomIconProps) {
  const iconPath = iconMap[name] || `/icons/${name}.svg`
  
  const containerClasses = cn(
    sizeMap[size].container,
    variant === "feature" && "rounded-xl bg-white border border-gray-200 shadow-sm p-2 sm:p-3",
    variant === "decorative" && "opacity-60",
    "flex items-center justify-center",
    className
  )

  const IconContent = (
    <Image
      src={iconPath}
      alt={name}
      width={sizeMap[size].icon}
      height={sizeMap[size].icon}
      className="object-contain"
      priority={size === "xl"}
    />
  )

  if (animated) {
    return (
      <motion.div
        className={containerClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
      >
        {IconContent}
      </motion.div>
    )
  }

  return <div className={containerClasses}>{IconContent}</div>
}

