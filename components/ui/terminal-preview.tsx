"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ENTERPRISE_SPRING } from "@/lib/animations"

/**
 * Terminal Preview Component
 * 
 * Industrial Tool Style Terminal/Code Editor
 * - Monospace Font (JetBrains Mono)
 * - Monochrome Design
 * - Brutal Borders
 */
interface TerminalPreviewProps {
  /**
   * Terminal Commands/Output
   */
  lines?: Array<{
    text: string
    type?: "command" | "output" | "error" | "success"
    prompt?: string
  }>
  
  /**
   * Zusätzliche CSS-Klassen
   */
  className?: string
  
  /**
   * Höhe des Terminals
   */
  height?: string | number
  
  /**
   * Titel des Terminals
   */
  title?: string
}

export function TerminalPreview({
  lines = [
    { text: "introki@server:~$ npm run build", type: "command", prompt: "$" },
    { text: "✓ Compiled successfully", type: "success" },
    { text: "✓ Linting and checking validity of types", type: "success" },
    { text: "✓ Build completed in 2.3s", type: "success" },
  ],
  className,
  height = "400px",
  title = "Terminal",
}: TerminalPreviewProps) {
  const getLineColor = (type?: string) => {
    switch (type) {
      case "command":
        return "text-black"
      case "output":
        return "text-black/70"
      case "error":
        return "text-red-600"
      case "success":
        return "text-emerald-600"
      default:
        return "text-black/70"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={ENTERPRISE_SPRING}
      className={cn(
        "relative w-full overflow-hidden rounded-lg border-2 border-black bg-black shadow-[8px_8px_0_0_rgba(0,0,0,1)]",
        className
      )}
      style={{ height: typeof height === "number" ? `${height}px` : height }}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b-2 border-black/20 bg-black/80 px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
          </div>
          <span className="font-mono text-xs font-medium text-white/80">
            {title}
          </span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="overflow-auto bg-black p-4 font-mono text-sm leading-relaxed">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...ENTERPRISE_SPRING, delay: index * 0.05 }}
            className={cn("mb-1", getLineColor(line.type))}
          >
            {line.prompt && (
              <span className="text-emerald-400">{line.prompt} </span>
            )}
            {line.text}
          </motion.div>
        ))}
        {/* Cursor */}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="ml-1 inline-block h-4 w-0.5 bg-white"
        />
      </div>
    </motion.div>
  )
}

