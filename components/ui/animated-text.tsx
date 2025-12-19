"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
  variant?: "fade" | "slide" | "shimmer"
}

export function AnimatedText({ 
  children, 
  className, 
  delay = 0,
  variant = "fade" 
}: AnimatedTextProps) {
  const variants = {
    fade: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
    },
    slide: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
    },
    shimmer: {
      initial: { opacity: 0, backgroundPosition: "200% 0" },
      animate: { 
        opacity: 1, 
        backgroundPosition: "0% 0",
      },
    },
  }

  const currentVariant = variants[variant]

  return (
    <motion.span
      className={cn(
        variant === "shimmer" && "bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-[length:200%_100%]",
        className
      )}
      initial={currentVariant.initial}
      whileInView={currentVariant.animate}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
        ...(variant === "shimmer" && {
          backgroundPosition: {
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          },
        }),
      }}
    >
      {children}
    </motion.span>
  )
}

