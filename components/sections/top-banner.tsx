"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import Link from "next/link"

export function TopBanner() {
  const [isVisible, setIsVisible] = React.useState(false) // Standardmäßig ausgeblendet

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="bg-black border-b border-black/10 relative z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <Link
            href="/features"
            className="text-white/70 hover:text-white text-sm font-inter transition-colors flex items-center gap-2"
          >
            Neue Features verfügbar - Jetzt entdecken
            <span className="text-white/50">→</span>
          </Link>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/50 hover:text-white transition-colors p-1"
            aria-label="Close banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

