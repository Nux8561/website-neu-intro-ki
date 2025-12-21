"use client"

import ImageLoader from './image-loading'

/**
 * Section Divider Component
 * 
 * Einfacher Divider zwischen Sections mit ImageLoader-Animation
 * Perfekt für elegante Übergänge
 */
interface SectionDividerProps {
  /**
   * Bildquelle (optional - nutzt Gradient als Fallback)
   */
  imageSrc?: string
  
  /**
   * Höhe des Dividers
   */
  height?: number
  
  /**
   * Grid-Größe
   */
  gridSize?: number
  
  /**
   * Zusätzliche CSS-Klassen
   */
  className?: string
}

export function SectionDivider({
  imageSrc,
  height = 120,
  gridSize = 12,
  className = ""
}: SectionDividerProps) {
  // Gradient als Fallback
  const defaultImage = imageSrc || "data:image/svg+xml,%3Csvg width='1200' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ffffff;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23f9fafb;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ffffff;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='120' fill='url(%23grad)'/%3E%3C/svg%3E"

  return (
    <div className={`w-full ${className}`}>
      <ImageLoader
        src={defaultImage}
        alt="Section divider"
        width="100%"
        height={height}
        gridSize={gridSize}
        cellGap={gridSize}
        cellShape="square"
        cellColor="#e5e7eb"
        blinkSpeed={2000}
        transitionDuration={600}
        fadeOutDuration={700}
        loadingDelay={800}
        className="w-full"
      />
    </div>
  )
}

