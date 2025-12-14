/**
 * Attio Theme Provider
 * Wrapper Component für die gesamte App
 * Stellt sicher, dass alle Attio-Design-Tokens konsistent angewendet werden
 */

"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AttioThemeProviderProps {
  children: React.ReactNode
  className?: string
}

export function AttioThemeProvider({ children, className }: AttioThemeProviderProps) {
  return (
    <div
      className={cn(
        // Base Attio Styling
        "min-h-screen",
        "bg-attio-gray", // #FAFAFB
        "antialiased",
        // Typography defaults
        "font-inter",
        "text-attio-text", // #0A0A0A
        className
      )}
    >
      {children}
    </div>
  )
}

/**
 * Attio Container
 * Standard-Container für alle Sections
 */
interface AttioContainerProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "full"
}

export function AttioContainer({ 
  children, 
  className,
  size = "xl"
}: AttioContainerProps) {
  const sizeClasses = {
    sm: "max-w-4xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  }

  return (
    <div
      className={cn(
        "container mx-auto px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  )
}

/**
 * Attio Section
 * Standard-Section Wrapper mit konsistentem Spacing
 */
interface AttioSectionProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "spacious" | "compact"
  background?: "white" | "attio-gray" | "transparent"
}

export function AttioSection({ 
  children, 
  className,
  variant = "default",
  background = "white"
}: AttioSectionProps) {
  const variantClasses = {
    default: "py-24 md:py-32",
    spacious: "py-32 md:py-40",
    compact: "py-16 md:py-24",
  }

  const backgroundClasses = {
    white: "bg-white",
    "attio-gray": "bg-attio-gray",
    transparent: "bg-transparent",
  }

  return (
    <section
      className={cn(
        variantClasses[variant],
        backgroundClasses[background],
        className
      )}
    >
      {children}
    </section>
  )
}

/**
 * Attio Typography Utilities
 */
export const AttioTypography = {
  h1: "text-5xl sm:text-6xl md:text-7xl font-inter-display font-bold tracking-tighter text-attio-text",
  h2: "text-4xl md:text-5xl font-inter-display font-semibold tracking-tight text-attio-text",
  h3: "text-2xl md:text-3xl font-inter-display font-semibold tracking-tight text-attio-text",
  h4: "text-xl md:text-2xl font-inter-display font-semibold tracking-tight text-attio-text",
  body: "text-base font-inter text-gray-600",
  bodySmall: "text-sm font-inter text-gray-500",
  label: "text-xs font-inter font-medium text-gray-500 uppercase tracking-wider",
}

/**
 * Attio Button Variants
 */
export const AttioButton = {
  primary: "bg-black text-white hover:bg-gray-900 px-8 py-3.5 rounded-lg font-medium text-base transition-all duration-attio ease-attio-ease-out hover:scale-[1.02] font-inter",
  secondary: "bg-white border border-attio-subtle text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-8 py-3.5 rounded-lg font-medium text-base transition-all duration-attio ease-attio-ease-out font-inter",
  ghost: "text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-attio ease-attio-ease-out font-inter",
}

