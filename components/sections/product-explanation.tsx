"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { ENTERPRISE_SPRING, snappySpring, snappyStaggerContainer, snappyStaggerItem } from "@/lib/animations"
import Link from "next/link"
import { CustomFeatureIcon } from "@/components/ui/custom-feature-icons"
import { SectionDivider } from "@/components/ui/section-divider"

/**
 * Product Explanation Section - 100.000€ VERSION
 * 
 * VISUELLE Darstellung: Was macht Intro KI?
 * Sofort verständlich ohne viel Text
 * Team Page Fonts (font-jakarta)
 * Klarer Kontrast
 * Perfekte Animationen
 * KEINE 3D ICONS - Custom Icons aus dem Projekt
 */
export function ProductExplanation() {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
      {
        icon: "research",
        title: "60-Sekunden-Research",
        description: "Automatisierte Recherche in Echtzeit",
      },
      {
        icon: "signals",
        title: "Algorithmus-basierte Signale",
        description: "Intelligence-Engine erkennt Prioritäten automatisch",
      },
      {
        icon: "priorities",
        title: "Automatisierte Priorisierung",
        description: "Top 20 Deals basierend auf ICP-Fit und Timing",
      },
  ]

  const workflow = [
    { step: 1, title: "Signal erkannt", icon: CheckCircle2 },
    { step: 2, title: "Research automatisch", icon: CheckCircle2 },
    { step: 3, title: "Priorität gesetzt", icon: CheckCircle2 },
    { step: 4, title: "Du wirst benachrichtigt", icon: CheckCircle2 },
  ]

  return (
    <section id="product" ref={ref} className="bg-white py-24 md:py-32 border-b-2 border-black">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header - MINIMAL TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...snappySpring, delay: 0.2 }}
          className="mb-20 text-center"
        >
              <h2 className="mb-6 text-6xl font-space-grotesk font-bold -tracking-[0.02em] text-black md:text-7xl">
                Was macht Intro KI?
              </h2>
              <p className="mx-auto max-w-2xl text-2xl text-black/80 font-inter leading-relaxed">
                Dein CRM denkt mit. Automatisch.
              </p>
        </motion.div>

        {/* Features - VISUELL mit Custom Icons */}
        <motion.div
          variants={snappyStaggerContainer}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mb-24 grid gap-8 md:grid-cols-3"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={snappyStaggerItem}
              whileHover={{ scale: 1.03, y: -6 }}
              className="group rounded-2xl border-2 border-black/10 bg-white p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.15)]"
            >
              {/* Custom Icon - Monochrome, Premium */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ ...snappySpring, delay: 0.3 + i * 0.1 }}
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl border-2 border-black/10 bg-white/50 backdrop-blur-sm transition-transform group-hover:scale-105 group-hover:border-black/20"
              >
                <CustomFeatureIcon type={feature.icon as any} className="h-8 w-8 text-black" />
              </motion.div>
              <h3 className="mb-3 text-2xl font-space-grotesk font-semibold text-black">{feature.title}</h3>
              <p className="text-base text-black/80 font-inter leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>


        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...snappySpring, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Link
            href="/demo"
            className="group inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-space-grotesk font-semibold text-white shadow-xl transition-all hover:shadow-2xl hover:scale-105"
          >
            Jetzt Demo buchen
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
