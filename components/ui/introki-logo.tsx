"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface IntroKILogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "default" | "monochrome" | "gradient" | "light"
  showText?: boolean
  animated?: boolean
}

const sizeMap = {
  sm: { icon: 20, text: "text-base", square: 20 },
  md: { icon: 24, text: "text-lg", square: 24 },
  lg: { icon: 32, text: "text-xl", square: 32 },
}

export function IntroKILogo({
  className,
  size = "md",
  variant = "default",
  showText = true,
  animated = true,
}: IntroKILogoProps) {
  const { icon: iconSize, text: textSize, square: squareSize } = sizeMap[size]

  const isLight = variant === "light"
  const squareColor = isLight ? "#FFFFFF" : "#000000"
  const symbolColor = isLight ? "#000000" : "#FFFFFF"

  return (
    <motion.div
      className={cn("flex items-center gap-2", className)}
      whileHover={animated ? { scale: 1.02 } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Logo Icon - Black square with rounded corners and white symbol */}
      <motion.div
        className="relative flex-shrink-0"
        animate={animated ? {
          rotate: [0, 2, -2, 0],
        } : undefined}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <svg
          width={squareSize}
          height={squareSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Black square with rounded corners */}
          <rect
            x="0"
            y="0"
            width="100"
            height="100"
            rx="20"
            ry="20"
            fill={squareColor}
          />
          
          {/* White abstract symbol - flowing heart/infinity loop with dots */}
          <g fill={symbolColor} stroke={symbolColor} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
            {/* Main flowing line - organic heart/infinity shape that crosses itself */}
            <path
              d="M35 25 Q25 20, 30 35 Q28 45, 40 50 Q50 48, 60 50 Q72 45, 70 35 Q75 20, 65 25 Q60 15, 50 20 Q40 15, 35 25 Z"
              fill="none"
              strokeWidth="4.5"
            />
            
            {/* Three dots positioned along the line */}
            <circle cx="32" cy="28" r="3.5" fill={symbolColor} />
            <circle cx="42" cy="48" r="3.5" fill={symbolColor} />
            <circle cx="68" cy="48" r="3.5" fill={symbolColor} />
          </g>
        </svg>
      </motion.div>

      {/* Logo Text */}
      {showText && (
        <motion.span
          className={cn(
            "font-jakarta font-semibold tracking-tight lowercase",
            textSize,
            variant === "gradient"
              ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
              : variant === "light"
              ? "text-white"
              : "text-text-primary"
          )}
          initial={animated ? { opacity: 0, x: -10 } : undefined}
          animate={animated ? { opacity: 1, x: 0 } : undefined}
          transition={{ delay: 0.1 }}
        >
          intro.ki
        </motion.span>
      )}
    </motion.div>
  )
}

