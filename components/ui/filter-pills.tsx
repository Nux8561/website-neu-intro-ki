"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface FilterPill {
  id: string
  label: string
  count?: number
}

interface FilterPillsProps {
  filters: FilterPill[]
  onRemove?: (id: string) => void
  className?: string
}

export function FilterPills({ filters, onRemove, className }: FilterPillsProps) {
  if (filters.length === 0) return null

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <AnimatePresence mode="popLayout">
        {filters.map((filter) => (
          <motion.div
            key={filter.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#0B0C0E]/10 text-sm font-inter text-[#0B0C0E] hover:border-[#0B0C0E]/20 transition-all"
          >
            <span>{filter.label}</span>
            {filter.count !== undefined && (
              <span className="text-xs font-mono text-[#0B0C0E]/50 bg-[#0B0C0E]/5 px-1.5 py-0.5 rounded">
                {filter.count}
              </span>
            )}
            {onRemove && (
              <button
                onClick={() => onRemove(filter.id)}
                className="ml-1 p-0.5 rounded-full hover:bg-[#0B0C0E]/10 transition-colors"
                aria-label={`Remove ${filter.label} filter`}
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

