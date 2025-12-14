/**
 * Integrations Section
 * Zeigt echte Tool-Integrationen statt Logos
 */

"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { IntegrationsShowcase } from "@/components/ui/integrations-showcase"
import { AttioWrapper } from "@/components/ui/attio-wrapper"

export function IntegrationsSection() {
  return (
    <AttioWrapper variant="section" className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-inter-display font-semibold tracking-tight text-attio-text mb-4">
            Works with the tools you already use
          </h2>
          <p className="text-lg font-inter text-gray-600 max-w-2xl mx-auto">
            Deep integrations that work seamlessly with your existing tech stack.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
            delay: 0.1,
          }}
        >
          <IntegrationsShowcase />
        </motion.div>
      </div>
    </AttioWrapper>
  )
}

