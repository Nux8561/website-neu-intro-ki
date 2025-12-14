/**
 * Attio-Style Wrapper Component
 * Wrappt Komponenten mit Attio-Design-System
 */

"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AttioWrapperProps {
  children: React.ReactNode
  className?: string
  variant?: "section" | "card" | "container"
}

export function AttioWrapper({ 
  children, 
  className,
  variant = "section"
}: AttioWrapperProps) {
  const variants = {
    section: "py-24 md:py-32 bg-attio-gray",
    card: "bg-white border border-attio-border rounded-xl p-6 shadow-attio-card hover:shadow-attio-card-hover transition-all duration-attio ease-attio-ease-out",
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  }

  return (
    <div className={cn(variants[variant], className)}>
      {children}
    </div>
  )
}

/**
 * Attio Grid Container
 * Für Bento-Grid Layouts mit 1px Gaps
 */
interface AttioGridProps {
  children: React.ReactNode
  className?: string
  columns?: 12 | 6 | 4
}

export function AttioGrid({ 
  children, 
  className,
  columns = 12 
}: AttioGridProps) {
  return (
    <div 
      className={cn(
        "grid gap-px bg-attio-border border border-attio-border",
        columns === 12 && "grid-cols-1 md:grid-cols-12",
        columns === 6 && "grid-cols-1 md:grid-cols-6",
        columns === 4 && "grid-cols-1 md:grid-cols-4",
        className
      )}
    >
      {children}
    </div>
  )
}

/**
 * Attio Grid Cell
 * Einzelne Zelle im Bento-Grid
 */
interface AttioGridCellProps {
  children: React.ReactNode
  className?: string
  colSpan?: number
  rowSpan?: number
}

export function AttioGridCell({ 
  children, 
  className,
  colSpan = 1,
  rowSpan = 1
}: AttioGridCellProps) {
  return (
    <div
      className={cn(
        "bg-white p-6 hover:bg-gray-50/50 transition-all duration-attio ease-attio-ease-out",
        className
      )}
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
      }}
    >
      {children}
    </div>
  )
}

