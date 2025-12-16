/**
 * Integrations Section
 * Zeigt IntroKI als zentralen Connectivity Hub mit orbitalen Tool-Integrationen
 * Attio-Style: Animierter Datenfluss von Tools zu IntroKI
 */

"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { IntegrationHub } from "@/components/ui/integration-hub"
import { AttioWrapper } from "@/components/ui/attio-wrapper"
import { CustomIcon } from "@/components/icons/custom-icon"

export function IntegrationsSection() {
  return (
    <AttioWrapper variant="section" className="bg-white">
      <div className="container-responsive max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="heading-responsive font-inter-display font-semibold tracking-tight text-[#0A0A0A] mb-4">
            Passt perfekt zu deinem bestehenden System
          </h2>
          <p className="subheading-responsive font-inter text-gray-600 max-w-2xl mx-auto px-4">
            IntroKI ist der zentrale Knotenpunkt für all deine Tools. Daten fließen automatisch – 
            ohne dass dein Team etwas Neues lernen muss.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
            delay: 0.1,
          }}
        >
          <IntegrationHub className="py-8" />
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
            delay: 0.2,
          }}
          className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto"
        >
          {[
            {
              title: "Native Integrationen",
              description: "Direkte Verbindung zu deinen Tools – keine Zwischenschritte",
              icon: <CustomIcon name="connectivity" size="md" variant="feature" />,
            },
            {
              title: "Echtzeit-Synchronisation",
              description: "Daten fließen kontinuierlich – immer aktuell, immer verfügbar",
              icon: <CustomIcon name="dataFlow" size="md" variant="feature" />,
            },
            {
              title: "Zero Learning Curve",
              description: "Dein Team arbeitet wie gewohnt – IntroKI arbeitet im Hintergrund",
              icon: <CustomIcon name="platform" size="md" variant="feature" />,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center card-responsive bg-gray-50 rounded-xl border border-gray-200 flex flex-col items-center"
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                {feature.icon}
              </div>
              <h3 className="font-inter-display font-semibold text-[#0A0A0A] mb-2 text-base sm:text-lg">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm font-inter text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AttioWrapper>
  )
}

