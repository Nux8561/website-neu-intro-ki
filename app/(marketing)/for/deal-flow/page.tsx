"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, GitBranch, Zap, TrendingUp, Target, Users, BarChart3 } from "lucide-react"

const features = [
  { icon: GitBranch, title: "Deal Flow Management", description: "Verwalte deinen gesamten Deal Flow in einem intuitiven Kanban-Board. Von der ersten Kontaktaufnahme bis zum Abschluss." },
  { icon: Target, title: "AI-gestützte Priorisierung", description: "Nutze unsere Predictive Lead Scoring, um die vielversprechendsten Deals zu identifizieren und zu priorisieren." },
  { icon: BarChart3, title: "Deal Analytics", description: "Erhalte tiefe Einblicke in deinen Deal Flow. Verstehe, wo Deals hängen bleiben und wie du sie beschleunigen kannst." },
  { icon: Zap, title: "Automatisierung", description: "Automatisiere wiederkehrende Aufgaben im Deal Flow. Fokussiere dich auf das, was wirklich wichtig ist." },
]

const benefits = [
  "Pipeline-Übersicht in Echtzeit",
  "Deal-Stage-Tracking",
  "Automatische Deal-Updates",
  "Team-Kollaboration",
  "Deal-Forecasting",
  "Performance-Analytics",
]

export default function ForDealFlowPage() {
  const heroRef = React.useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-white">
      <section ref={heroRef} className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6">
              Verwalte deinen Deal Flow
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">mit IntroKI</span>
            </h1>
            <p className="text-xl text-[#0B0C0E]/70 font-inter mb-12 max-w-3xl mx-auto">
              Von der ersten Kontaktaufnahme bis zum Abschluss – verwalte deinen gesamten Deal Flow in einem intuitiven System.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-[#0B0C0E] text-white hover:bg-[#0B0C0E]/90 font-semibold rounded-full px-8 py-6">
                Kostenlos starten <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-[#0B0C0E]/20 text-[#0B0C0E] rounded-full px-8 py-6">
                Demo buchen
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0B0C0E]/2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl border border-[#0B0C0E]/10 bg-white/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-jakarta font-semibold mb-2">{feature.title}</h3>
                      <p className="text-[#0B0C0E]/70 font-inter">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-jakarta font-medium mb-12 text-center">Deal Flow Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-[#0B0C0E]/10"
                >
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="font-inter text-[#0B0C0E]/80">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B0C0E]/2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-jakarta font-medium mb-8">Bereit loszulegen?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-[#0B0C0E] text-white rounded-full px-8 py-6">
                Kostenlos starten <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-[#0B0C0E]/20 rounded-full px-8 py-6">
                Demo buchen
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
