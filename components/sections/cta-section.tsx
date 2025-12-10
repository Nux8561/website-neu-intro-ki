"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useInView } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function CTASection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const headline = "Start with a 14-day free trial of Pro."
  const words = headline.split(" ")

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-white"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Headline with Staggered Text Reveal */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-8"
            variants={containerVariants}
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
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div variants={wordVariants} className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#0B0C0E] text-white hover:bg-[#0B0C0E]/90 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 border-0"
            >
              Start for free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#0B0C0E]/20 text-[#0B0C0E] hover:bg-[#0B0C0E]/5 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Send me a demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#0B0C0E]/20 text-[#0B0C0E] hover:bg-[#0B0C0E]/5 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              See our plans
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


