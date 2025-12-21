"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ENTERPRISE_SPRING } from "@/lib/animations"

interface TagProps {
  variant?: "default" | "feature" | "use-case"
  children: React.ReactNode
  className?: string
  onClose?: () => void
  closable?: boolean
}

const variantStyles = {
  default: "bg-black/5 text-black/70",
  feature: "bg-blue-50 text-blue-700 border border-blue-200/50",
  "use-case": "bg-slate-50 text-slate-700 border border-slate-200/50",
}

export function Tag({ variant = "default", children, className, onClose, closable = false }: TagProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={ENTERPRISE_SPRING}
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-inter",
        variantStyles[variant],
        className
      )}
    >
      {children}
      {closable && onClose && (
        <button
          onClick={onClose}
          className="ml-1 -mr-1 p-0.5 rounded hover:bg-black/10 transition-colors"
          aria-label="Remove tag"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </motion.span>
  )
}

