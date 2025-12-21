"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { ENTERPRISE_SPRING } from "@/lib/animations"

/**
 * Code Snippet Component
 * 
 * Industrial Tool Style Code Block
 * - Monospace Font
 * - Copy Button
 * - Brutal Borders
 */
interface CodeSnippetProps {
  /**
   * Code Content
   */
  code: string
  
  /**
   * Language (für Syntax Highlighting)
   */
  language?: string
  
  /**
   * Zusätzliche CSS-Klassen
   */
  className?: string
  
  /**
   * Ob Copy Button angezeigt werden soll
   */
  showCopy?: boolean
}

export function CodeSnippet({
  code,
  language = "typescript",
  className,
  showCopy = true,
}: CodeSnippetProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
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
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-black/20 bg-black/80 px-4 py-2">
        <span className="font-mono text-xs font-medium text-white/80">
          {language}
        </span>
        {showCopy && (
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded border border-white/20 bg-white/5 px-2 py-1 font-mono text-xs text-white/80 transition-all hover:bg-white/10 hover:text-white"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Code Content */}
      <div className="overflow-auto bg-black p-4">
        <pre className="font-mono text-sm leading-relaxed text-white/90">
          <code>{code}</code>
        </pre>
      </div>
    </motion.div>
  )
}

