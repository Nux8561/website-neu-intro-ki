/**
 * Section Wrapper Component
 * Wrappt Sections automatisch mit Connectors und Grid-Pattern Support
 * Vereinfacht die Verwendung im page.tsx
 */

"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  showConnector?: boolean
  connectorPosition?: "top" | "bottom" | "both" | "none"
  showGridPattern?: boolean
}

export function SectionWrapper({
  children,
  className,
  showConnector = true,
  connectorPosition = "top",
  showGridPattern = false,
}: SectionWrapperProps) {
  const connectorClasses = {
    top: showConnector && connectorPosition === "top" ? "attio-section-connector" : "",
    bottom: showConnector && connectorPosition === "bottom" ? "attio-section-connector-bottom" : "",
    both: showConnector && connectorPosition === "both" ? "attio-section-connector-both" : "",
    none: "",
  }

  const connectorClass = connectorClasses[connectorPosition] || ""

  return (
    <div
      className={cn(
        showGridPattern && "attio-grid-pattern",
        connectorClass,
        className
      )}
    >
      {children}
    </div>
  )
}

