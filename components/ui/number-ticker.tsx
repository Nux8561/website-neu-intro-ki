"use client"

import * as React from "react"
import { motion, useSpring, useTransform } from "framer-motion"

interface NumberTickerProps {
  value: number
  direction?: "up" | "down"
  delay?: number
  className?: string
  decimals?: number
}

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  decimals = 0,
}: NumberTickerProps) {
  const spring = useSpring(value, {
    damping: 60,
    stiffness: 100,
    mass: 1,
  })

  const display = useTransform(spring, (current) => {
    return direction === "down"
      ? (value - current).toFixed(decimals)
      : current.toFixed(decimals)
  })

  React.useEffect(() => {
    const timer = setTimeout(() => {
      spring.set(value)
    }, delay)

    return () => clearTimeout(timer)
  }, [spring, value, delay])

  return <motion.span className={className}>{display}</motion.span>
}

