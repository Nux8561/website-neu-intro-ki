"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function MovingBorder({
  children,
  duration = 2000,
  rx = 16,
  ry = 16,
  className,
}: {
  children: React.ReactNode
  duration?: number
  rx?: number
  ry?: number
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-attio-subtle bg-white",
        className,
      )}
      style={{
        background: `
          linear-gradient(to right, transparent, transparent),
          linear-gradient(to right, transparent, transparent),
          conic-gradient(from 0deg at 50% 50%, transparent 0deg, #3B82F6 10deg, transparent 20deg, transparent 360deg)
        `,
        backgroundSize: "100% 100%, 100% 100%, 200% 200%",
        backgroundPosition: "center center, center center, 0% 0%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            conic-gradient(from 0deg at 50% 50%, transparent 0deg, #3B82F6 10deg, transparent 20deg, transparent 360deg)
          `,
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative z-10 h-full w-full rounded-lg bg-white">
        {children}
      </div>
    </div>
  )
}

