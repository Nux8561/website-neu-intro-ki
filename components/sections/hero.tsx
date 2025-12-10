"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BackgroundPaths } from "@/components/ui/background-paths"
import { ArrowRight } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
    },
  },
}

export function Hero() {
  const headline = "Customer relationship magic."
  const words = headline.split(" ")

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Paths Animation */}
      <BackgroundPaths />
      
      {/* Mesh Gradient Background - Attio Style */}
      <div className="absolute inset-0 bg-[#0B0C0E]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15), transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15), transparent 50%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Pill Button - Attio Style */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <button className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-sm text-white/70 hover:text-white font-inter">
              Explore our integration with Granola
              <span className="text-white/50">→</span>
            </button>
          </motion.div>

          {/* Headline with Staggered Text Reveal - Attio Style */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-jakarta font-medium tracking-tight text-white mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Description - Attio Style */}
          <motion.p
            className="text-lg md:text-xl text-white/70 font-inter mb-12 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 400, damping: 17 }}
          >
            Attio is the AI-native CRM for GTM builders.
          </motion.p>

          {/* Search Input - Intro KI Style */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, type: "spring", stiffness: 400, damping: 17 }}
          >
            <input
              type="text"
              placeholder="KI Vertrieb für Ihr Unternehmen"
              className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all font-inter"
            />
            <Button
              size="lg"
              className="bg-accent text-white hover:bg-accent-light font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 border-0 whitespace-nowrap"
            >
              Research starten
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Mode Buttons - Intro KI Style */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, type: "spring", stiffness: 400, damping: 17 }}
          >
            {["Schnell-Modus", "Tiefen-Modus", "Ultra-Modus"].map((mode, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-sm text-white/70 hover:text-white transition-all font-inter"
              >
                {mode}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </section>
  )
}

