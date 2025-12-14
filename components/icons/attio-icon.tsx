/**
 * Attio Icon Component
 * Rendert extrahierte Attio SVGs mit Tailwind-Farben
 */

"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AttioIconProps {
  name: string
  className?: string
  size?: number
  color?: string
}

// Mapping von Feature-Namen zu SVG-Dateinamen
const iconMap: Record<string, string> = {
  workflow: "icon_workflow",
  automation: "icon_automation",
  data: "icon_data",
  analytics: "icon_analytics",
  ai: "icon_ai",
  sync: "icon_sync",
  email: "icon_email",
  calendar: "icon_calendar",
  // Füge weitere Mappings hinzu basierend auf extrahierten Assets
}

export function AttioIcon({ 
  name, 
  className, 
  size = 24,
  color = "currentColor"
}: AttioIconProps) {
  const iconPath = iconMap[name] || name
  
  // Falls SVG-Datei existiert, lade sie
  // Ansonsten nutze Lucide-Icons als Fallback
  const [svgContent, setSvgContent] = React.useState<string | null>(null)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    // Versuche, SVG aus public/icons/ zu laden
    fetch(`/icons/${iconPath}.svg`)
      .then(res => res.text())
      .then(text => {
        // Ersetze fill/stroke mit currentColor für Tailwind-Kontrolle
        const modified = text
          .replace(/fill="[^"]*"/g, `fill="${color}"`)
          .replace(/stroke="[^"]*"/g, `stroke="${color}"`)
        setSvgContent(modified)
      })
      .catch(() => setError(true))
  }, [iconPath, color])

  if (error || !svgContent) {
    // Fallback zu Lucide Icon
    return (
      <div 
        className={cn("flex items-center justify-center", className)}
        style={{ width: size, height: size }}
      >
        <div className="w-full h-full bg-gray-200 rounded" />
      </div>
    )
  }

  return (
    <div
      className={cn("inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  )
}

