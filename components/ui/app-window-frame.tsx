"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Share2, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface AppWindowFrameProps {
  children: React.ReactNode
  withSidebar?: boolean
  title?: string
  className?: string
}

export function AppWindowFrame({
  children,
  withSidebar = false,
  title = "IntroKI",
  className,
}: AppWindowFrameProps) {
  return (
    <div
      className={cn(
        "bg-white border border-attio-subtle rounded-xl shadow-2xl overflow-hidden",
        className
      )}
    >
      {/* Header Bar */}
      <div className="h-10 border-b border-attio-subtle bg-attio-gray/50 flex items-center justify-between px-4 flex-shrink-0">
        {/* Left: Traffic Lights / Breadcrumb */}
        <div className="flex items-center gap-3">
          {/* Mac Traffic Lights */}
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          {/* Breadcrumb */}
          {title && (
            <div className="flex items-center gap-1.5 text-xs font-inter font-medium text-text-muted">
              <span>{title}</span>
            </div>
          )}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <button className="p-1.5 hover:bg-white/50 rounded transition-colors">
            <Share2 className="h-3.5 w-3.5 text-text-muted" />
          </button>
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <User className="h-3 w-3 text-white" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex" style={{ height: "calc(100% - 2.5rem)" }}>
        {/* Sidebar (Optional) */}
        {withSidebar && (
          <div className="w-[200px] border-r border-attio-subtle bg-attio-gray p-4 flex-shrink-0">
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-8 bg-gray-200 rounded"
                />
              ))}
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className="flex-1 bg-white relative overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  )
}

