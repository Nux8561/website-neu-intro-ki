"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ENTERPRISE_SPRING } from "@/lib/animations"

interface StatusBadgeProps {
  variant?: "active" | "automated" | "high-priority" | "success" | "warning" | "info"
  children: React.ReactNode
  className?: string
  icon?: React.ReactNode
}

const variantStyles = {
  active: "bg-emerald-100 text-emerald-700 border-emerald-200/50",
  automated: "bg-blue-100 text-blue-700 border-blue-200/50",
  "high-priority": "bg-orange-100 text-orange-700 border-orange-200/50",
  success: "bg-emerald-100 text-emerald-700 border-emerald-200/50",
  warning: "bg-amber-100 text-amber-700 border-amber-200/50",
  info: "bg-slate-100 text-slate-700 border-slate-200/50",
}

export function StatusBadge({ variant = "active", children, className, icon }: StatusBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={ENTERPRISE_SPRING}
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-inter font-medium border",
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </motion.span>
  )
}

