"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
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
  const { text: textSize, square: squareSize } = sizeMap[size]

  return (
    <motion.div
      className={cn("flex items-center gap-2", className)}
      whileHover={animated ? { scale: 1.02 } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Logo Icon - App Logo Image */}
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
        <Image
          src="/images/app logo.png"
          alt="IntroKI Logo"
          width={squareSize}
          height={squareSize}
          className="rounded-xl"
          style={{ width: squareSize, height: squareSize }}
        />
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

