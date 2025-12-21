"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ENTERPRISE_SPRING } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "ghost"
  className?: string
  magneticStrength?: number
}

/**
 * Magnetic Button Component
 * 
 * Button mit Cursor-Follower-Effekt (Magnetic Pull)
 * Nutzt useMotionValue und useSpring für smooth Cursor-Tracking
 */
export function MagneticButton({
  children,
  variant = "primary",
  className,
  magneticStrength = 0.3,
  ...props
}: MagneticButtonProps) {
  const ref = React.useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const smoothX = useSpring(x, { stiffness: 150, damping: 15 })
  const smoothY = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY

    x.set(deltaX * magneticStrength)
    y.set(deltaY * magneticStrength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const variantClasses = {
    primary: "bg-black text-white hover:bg-black/90",
    secondary: "bg-white border-2 border-black text-black hover:bg-black hover:text-white",
    ghost: "bg-transparent text-black hover:bg-black/5",
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: smoothX,
        y: smoothY,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={ENTERPRISE_SPRING}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-space-grotesk font-semibold transition-colors",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}

