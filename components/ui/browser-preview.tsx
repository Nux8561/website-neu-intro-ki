"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { X, Minus, Square, Lock, Shield } from "lucide-react"
import { cn } from "@/lib/utils"
import { ENTERPRISE_SPRING } from "@/lib/animations"

/**
 * Browser Preview Component
 * 
 * Industrial Tool Style Browser-Fenster
 * - Monochrome, brutal borders
 * - Space Grotesk für Headlines
 * - Inter für Body
 * - JetBrains Mono für URLs/Technisches
 */
interface BrowserPreviewProps {
  /**
   * URL die angezeigt wird
   */
  url?: string
  
  /**
   * Titel des Browser-Tabs
   */
  title?: string
  
  /**
   * Ob HTTPS angezeigt werden soll
   */
  isSecure?: boolean
  
  /**
   * Content der im Browser angezeigt wird
   */
  children?: React.ReactNode
  
  /**
   * Zusätzliche CSS-Klassen
   */
  className?: string
  
  /**
   * Höhe des Browser-Fensters
   */
  height?: string | number
  
  /**
   * Ob Window Controls angezeigt werden sollen
   */
  showWindowControls?: boolean
}

export function BrowserPreview({
  url = "https://introki.app",
  title = "Intro KI",
  isSecure = true,
  children,
  className,
  height = "600px",
  showWindowControls = false,
}: BrowserPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={ENTERPRISE_SPRING}
      className={cn(
        "relative w-full overflow-hidden rounded-lg border-2 border-black bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]",
        className
      )}
      style={{ height: typeof height === "number" ? `${height}px` : height }}
    >
      {/* Window Controls (optional) */}
      {showWindowControls && (
        <div className="flex items-center gap-2 border-b-2 border-black bg-black/5 px-4 py-2">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
        </div>
      )}

      {/* Browser Header */}
      <div className="flex items-center justify-between border-b-2 border-black bg-white px-4 py-3">
        {/* Navigation Controls */}
        <div className="flex items-center gap-2">
          <button
            className="flex h-8 w-8 items-center justify-center rounded border border-black/20 bg-white transition-all hover:bg-black/5 hover:border-black/40"
            aria-label="Zurück"
          >
            <svg
              className="h-4 w-4 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="flex h-8 w-8 items-center justify-center rounded border border-black/20 bg-white transition-all hover:bg-black/5 hover:border-black/40"
            aria-label="Vor"
            disabled
          >
            <svg
              className="h-4 w-4 text-black/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <button
            className="flex h-8 w-8 items-center justify-center rounded border border-black/20 bg-white transition-all hover:bg-black/5 hover:border-black/40"
            aria-label="Aktualisieren"
          >
            <svg
              className="h-4 w-4 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>

        {/* Address Bar */}
        <div className="flex flex-1 items-center gap-2 px-4">
          <div className="flex items-center gap-2">
            {isSecure ? (
              <Lock className="h-4 w-4 text-emerald-600" />
            ) : (
              <Shield className="h-4 w-4 text-black/40" />
            )}
          </div>
          <div className="flex flex-1 items-center rounded border-2 border-black bg-white px-3 py-1.5">
            <span className="font-mono text-sm text-black/80">{url}</span>
          </div>
        </div>

        {/* Window Actions */}
        <div className="flex items-center gap-1">
          <button
            className="flex h-8 w-8 items-center justify-center rounded border border-black/20 bg-white transition-all hover:bg-black/5"
            aria-label="Minimieren"
          >
            <Minus className="h-4 w-4 text-black" />
          </button>
          <button
            className="flex h-8 w-8 items-center justify-center rounded border border-black/20 bg-white transition-all hover:bg-black/5"
            aria-label="Maximieren"
          >
            <Square className="h-4 w-4 text-black" />
          </button>
          <button
            className="flex h-8 w-8 items-center justify-center rounded border border-black/20 bg-white transition-all hover:bg-red-500 hover:text-white"
            aria-label="Schließen"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Browser Content */}
      <div className="relative h-full overflow-auto bg-white">
        {children || (
          <div className="flex h-full items-center justify-center p-8">
            <div className="text-center">
              <p className="font-space-grotesk text-lg font-medium text-black">
                {title}
              </p>
              <p className="mt-2 font-inter text-sm text-black/60">
                Browser Preview Content
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

