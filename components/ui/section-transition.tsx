"use client"

import { useState, useEffect, useRef } from 'react'
import ImageLoader from './image-loading'

/**
 * Section Transition Component
 * 
 * Nutzt ImageLoader für elegante Übergänge zwischen Sections
 * Kann als Border/Edge-Effekt oder als vollständiger Übergang verwendet werden
 */
interface SectionTransitionProps {
  /**
   * Position des Übergangs
   * - "top": Oben (als oberer Rand)
   * - "bottom": Unten (als unterer Rand)
   * - "full": Vollständiger Übergang
   */
  position?: "top" | "bottom" | "full"
  
  /**
   * Bildquelle für den Übergang
   */
  imageSrc?: string
  
  /**
   * Höhe des Übergangs (nur für top/bottom)
   */
  height?: number
  
  /**
   * Grid-Größe für die Animation
   */
  gridSize?: number
  
  /**
   * Zusätzliche CSS-Klassen
   */
  className?: string
}

export function SectionTransition({
  position = "bottom",
  imageSrc,
  height = 200,
  gridSize = 15,
  className = ""
}: SectionTransitionProps) {
  // Wenn kein Bild, nutze einen Gradient als Fallback
  const defaultImage = imageSrc || "data:image/svg+xml,%3Csvg width='800' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ffffff;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f3f4f6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='200' fill='url(%23grad)'/%3E%3C/svg%3E"

  if (position === "full") {
    return (
      <div className={`w-full ${className}`}>
        <ImageLoader
          src={defaultImage}
          alt="Section transition"
          width="100%"
          height={height}
          gridSize={gridSize}
          cellGap={gridSize}
          cellShape="square"
          cellColor="#e5e7eb"
          blinkSpeed={2000}
          transitionDuration={500}
          fadeOutDuration={600}
          loadingDelay={500}
          className="w-full"
        />
      </div>
    )
  }

  return (
    <div 
      className={`relative w-full ${position === "top" ? "top-0" : "bottom-0"} ${className}`}
      style={{ height: `${height}px` }}
    >
      <ImageLoader
        src={defaultImage}
        alt="Section transition"
        width="100%"
        height={height}
        gridSize={gridSize}
        cellGap={gridSize}
        cellShape="square"
        cellColor="#e5e7eb"
        blinkSpeed={2000}
        transitionDuration={500}
        fadeOutDuration={600}
        loadingDelay={500}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
}

/**
 * Border Effect Component
 * 
 * Nutzt ImageLoader für animierte Ränder um Sections
 */
interface BorderEffectProps {
  /**
   * Seiten, an denen der Border erscheinen soll
   */
  sides?: ("top" | "right" | "bottom" | "left")[]
  
  /**
   * Breite des Borders
   */
  width?: number
  
  /**
   * Grid-Größe
   */
  gridSize?: number
  
  /**
   * Bildquelle (optional)
   */
  imageSrc?: string
}

export function BorderEffect({
  sides = ["bottom"],
  width = 4,
  gridSize = 8,
  imageSrc
}: BorderEffectProps) {
  const defaultImage = imageSrc || "data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='%23e5e7eb'/%3E%3C/svg%3E"

  return (
    <>
      {sides.map((side) => {
        const isVertical = side === "left" || side === "right"
        const dimension = isVertical ? "height" : "width"
        
        return (
          <div
            key={side}
            className={`absolute ${side === "top" ? "top-0 left-0 right-0" : ""} ${side === "bottom" ? "bottom-0 left-0 right-0" : ""} ${side === "left" ? "left-0 top-0 bottom-0" : ""} ${side === "right" ? "right-0 top-0 bottom-0" : ""}`}
            style={{
              [dimension]: `${width}px`,
              [isVertical ? "width" : "height"]: "100%"
            }}
          >
            <ImageLoader
              src={defaultImage}
              alt={`Border ${side}`}
              width={isVertical ? width : "100%"}
              height={isVertical ? "100%" : width}
              gridSize={gridSize}
              cellGap={gridSize}
              cellShape="square"
              cellColor="#e5e7eb"
              blinkSpeed={1500}
              transitionDuration={400}
              fadeOutDuration={500}
              loadingDelay={300}
              className="w-full h-full"
            />
          </div>
        )
      })}
    </>
  )
}

