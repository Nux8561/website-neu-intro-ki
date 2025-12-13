"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Rocket, DollarSign, Users, Zap, Gift } from "lucide-react"

const benefits = [
  "Bis zu 50% Rabatt auf alle Pläne",
  "Dedizierter Startup-Support",
  "Early-Access zu neuen Features",
  "Community-Zugang",
  "Startup-spezifische Templates",
  "Flexible Zahlungspläne",
]

const requirements = [
  "Unter 5 Jahre alt",
  "Weniger als 50 Mitarbeiter",
  "Weniger als $10M Funding",
  "Tech-Startup",
]

export default function StartupProgramPage() {
  const heroRef = React.useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-background">
      <section ref={heroRef} className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-jakarta font-medium tracking-tight text-text-primary mb-6">
              Startup-Programm
            </h1>
            <p className="text-xl text-text-secondary font-inter mb-12 max-w-3xl mx-auto">
              Spezielle Preise und Vorteile für Startups. Skaliere mit IntroKI und spare dabei.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-text-primary text-white hover:bg-text-primary/90 font-semibold rounded-full px-8 py-6">
                Jetzt bewerben <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-border-active text-text-primary rounded-full px-8 py-6">
                Mehr erfahren
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-jakarta font-medium mb-12 text-center">Programm-Vorteile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-border-subtle"
                >
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="font-inter text-text-secondary">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <h2 className="text-4xl font-jakarta font-medium mb-12 text-center">Voraussetzungen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <motion.div
                  key={requirement}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-border-subtle"
                >
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="font-inter text-text-secondary">{requirement}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-jakarta font-medium mb-8">Bereit für das Programm?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-text-primary text-white rounded-full px-8 py-6">
                Jetzt bewerben <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-border-active rounded-full px-8 py-6">
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
