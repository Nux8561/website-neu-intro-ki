"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
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
  const headline = "Das AI-native CRM für die Zukunft"
  const words = headline.split(" ")

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background opacity-50" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(255, 69, 56, 0.1), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 107, 88, 0.1), transparent 50%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 17 }}
            className="inline-block mb-8"
          >
            <span className="inline-flex items-center rounded-full border border-accent/30 bg-surface px-4 py-1.5 text-xs font-mono text-accent-light">
              Beta
            </span>
          </motion.div>

          {/* Headline with Staggered Text Reveal */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-jakarta font-medium tracking-tight text-white mb-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-slate-400 font-inter mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 400, damping: 17 }}
          >
            Intro KI kombiniert die Macht künstlicher Intelligenz mit einem
            intuitiven Interface, das sich wie eine native App anfühlt.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button size="lg" className="group">
              Jetzt starten
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Demo ansehen
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

