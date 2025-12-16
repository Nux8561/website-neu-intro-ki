/**
 * CTA Section im Attio-Stil
 * Mit hexagonalem SVG-Visual rechts
 */

"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { HexagonalProgression } from "@/components/ui/hexagonal-progression"
import { attioTransition } from "@/lib/animations"

export function CTAAttioStyle() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative section-spacing overflow-hidden bg-white border-y border-gray-200"
    >
      {/* Subtiles Grid-Pattern im Hintergrund */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="container-responsive max-w-7xl mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={attioTransition}
        >
          {/* Left: Text & Buttons */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1, ...attioTransition }}
              className="text-3xl sm:text-4xl md:text-5xl font-inter-display font-semibold tracking-tight text-[#0A0A0A] mb-6"
            >
              Start with a 14-day free trial of Pro.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, ...attioTransition }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                className="rounded-lg bg-[#0A0A0A] text-white hover:bg-[#0A0A0A]/90 px-8 py-3.5 font-inter font-medium text-base transition-all duration-attio ease-attio-ease-out hover:scale-[1.02]"
              >
                Start for free
              </Button>
              <Button
                variant="outline"
                className="rounded-lg border-gray-300 text-[#0A0A0A] hover:bg-gray-50 px-8 py-3.5 font-inter font-medium text-base transition-all duration-attio ease-attio-ease-out hover:scale-[1.02]"
              >
                See our plans
              </Button>
            </motion.div>
          </div>

          {/* Right: Hexagonal Progression SVG */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.3, ...attioTransition }}
            className="relative w-full h-full min-h-[200px] flex items-center justify-center"
          >
            <HexagonalProgression />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

