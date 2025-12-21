"use client"

import * as React from "react"
import Image from "next/image"

/**
 * Custom Feature Icons
 * 
 * Statt Lucide Icons verwenden wir Custom Icons aus dem Projekt
 * oder erstellen bessere Visuals
 */

interface CustomFeatureIconProps {
  type: "research" | "signals" | "priorities" | "email" | "call" | "tasks" | "pipeline" | "team"
  className?: string
}

export function CustomFeatureIcon({ type, className }: CustomFeatureIconProps) {
  // Verwende Custom Icons aus dem Projekt oder erstelle bessere Visuals
  const iconMap: Record<string, { src: string; alt: string }> = {
    research: {
      src: "/icons/36sqgTUvKBZA1JLLMmc7bB8mRPx.svg", // Workflow Icon
      alt: "Research",
    },
    signals: {
      src: "/icons/36sqgV3rx2qhmrqPtQLDlmShaLn.svg", // Data Flow Icon
      alt: "Signals",
    },
    priorities: {
      src: "/icons/36sqgVvEAAXqPFSPh6wTWwhDTWO.svg", // Analytics Icon
      alt: "Priorities",
    },
    email: {
      src: "/icons/36sqgaezcFoCL9oiNjNnMN1Vwc2.svg", // Integration Icon
      alt: "Email",
    },
    call: {
      src: "/icons/36sqgb7bTiVpXlBcLjHqsP2VzH2.svg", // Connectivity Icon
      alt: "Call",
    },
    tasks: {
      src: "/icons/36sqgceKKAyoLaIweHRXuo1DWsj.svg", // Platform Icon
      alt: "Tasks",
    },
    pipeline: {
      src: "/icons/36sqgckrsg2tNukSZukCCJY7YBc.svg", // Infrastructure Icon
      alt: "Pipeline",
    },
    team: {
      src: "/icons/36sqgdOZTLlGUYzIQcGo1rk2qOR.svg", // Feature Icon
      alt: "Team",
    },
  }

  const icon = iconMap[type]

  if (!icon) return null

  return (
    <div className={`relative ${className}`}>
      <Image
        src={icon.src}
        alt={icon.alt}
        width={64}
        height={64}
        className="object-contain"
      />
    </div>
  )
}

