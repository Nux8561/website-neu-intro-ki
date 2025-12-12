"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BackgroundPaths } from "@/components/ui/background-paths"
import { AuroraBackground } from "@/components/ui/aurora-background"
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

interface HeroProps {
  backgroundType?: "paths" | "aurora" | "none"
}

export function Hero({ backgroundType = "paths" }: HeroProps) {
  const headline = "Das AI-gestützte CRM, das Sales-Teams von manueller Recherche befreit"
  const words = headline.split(" ")

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-white">
      {/* Background Animation */}
      {backgroundType === "paths" && <BackgroundPaths />}
      {backgroundType === "aurora" && (
        <AuroraBackground intensity="subtle" variant="blue-purple" />
      )}
      
      {/* Subtle Background - Light Theme */}
      <div className="absolute inset-0 bg-white" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Pill Button - IntroKI Style */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <button className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0B0C0E]/10 bg-[#0B0C0E]/5 hover:bg-[#0B0C0E]/10 hover:border-[#0B0C0E]/20 transition-all text-sm text-[#0B0C0E]/70 hover:text-[#0B0C0E] font-inter">
              Neu: Multi-Agent Research System
              <span className="text-[#0B0C0E]/50">→</span>
            </button>
          </motion.div>

          {/* Headline with Staggered Text Reveal - IntroKI Style */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-8"
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

          {/* Description - IntroKI Style */}
          <motion.p
            className="text-lg md:text-xl text-[#0B0C0E]/70 font-inter mb-12 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 400, damping: 17 }}
          >
            Enterprise-grade Sales CRM mit Multi-Agent AI-Orchestrierung, Echtzeit-Recherche und automatisiertem Call-Coaching – alles in einer Plattform.
          </motion.p>

          {/* CTA Buttons - IntroKI Style */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="lg"
              className="bg-[#0B0C0E] text-white hover:bg-[#0B0C0E]/90 font-semibold rounded-full px-8 py-4 h-auto"
            >
              Kostenlos starten
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#0B0C0E]/20 text-[#0B0C0E] hover:bg-[#0B0C0E]/5 font-semibold rounded-full px-8 py-4 h-auto"
            >
              Demo buchen
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(11, 12, 14, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(11, 12, 14, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </section>
  )
}

