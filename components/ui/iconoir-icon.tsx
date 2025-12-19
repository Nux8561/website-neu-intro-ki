"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Iconoir Icon Wrapper
 * Nutzt iconoir-react für professionelle Icons
 */
interface IconoirIconProps {
  name: string
  className?: string
  size?: number
}

export function IconoirIcon({ name, className, size = 24 }: IconoirIconProps) {
  // Dynamischer Import von Iconoir
  const IconComponent = React.useMemo(() => {
    try {
      // @ts-ignore - Dynamic import
      const iconModule = require(`iconoir-react/${name}`)
      return iconModule.default || iconModule[name]
    } catch {
      return null
    }
  }, [name])

  if (!IconComponent) {
    // Fallback: Einfache geometrische Form
    return (
      <div 
        className={cn("border border-slate-300 rounded", className)}
        style={{ width: size, height: size }}
      />
    )
  }

  return (
    <IconComponent 
      className={className}
      width={size}
      height={size}
    />
  )
}

