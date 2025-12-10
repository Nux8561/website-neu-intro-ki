"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { List, LayoutGrid, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

type ViewType = "list" | "board" | "calendar"

interface ViewSwitcherProps {
  activeView: ViewType
  onViewChange: (view: ViewType) => void
  className?: string
}

const views: Array<{ id: ViewType; label: string; icon: React.ComponentType<{ className?: string }> }> = [
  { id: "list", label: "List", icon: List },
  { id: "board", label: "Board", icon: LayoutGrid },
  { id: "calendar", label: "Calendar", icon: Calendar },
]

export function ViewSwitcher({ activeView, onViewChange, className }: ViewSwitcherProps) {
  return (
    <div className={cn("flex items-center gap-1 p-1 bg-[#0B0C0E]/5 rounded-lg border border-[#0B0C0E]/10", className)}>
      {views.map((view) => {
        const Icon = view.icon
        const isActive = activeView === view.id
        
        return (
          <motion.button
            key={view.id}
            onClick={() => onViewChange(view.id)}
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-inter transition-all relative",
              isActive
                ? "bg-white text-[#0B0C0E] shadow-sm"
                : "text-[#0B0C0E]/70 hover:text-[#0B0C0E] hover:bg-white/50"
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
          >
            <Icon className="h-4 w-4" />
            <span>{view.label}</span>
          </motion.button>
        )
      })}
    </div>
  )
}

