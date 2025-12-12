"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Handshake, TrendingUp, Users, Gift } from "lucide-react"

const partnerTypes = [
  { icon: Users, title: "Integration Partner", description: "Integriere IntroKI in deine Plattform und biete deinen Kunden mehr Wert." },
  { icon: Handshake, title: "Reseller Partner", description: "Verkaufe IntroKI an deine Kunden und verdiene Provisionen." },
  { icon: TrendingUp, title: "Technology Partner", description: "Arbeite mit uns zusammen, um innovative Lösungen zu entwickeln." },
]

const benefits = [
  "Hohe Provisionen",
  "Marketing-Unterstützung",
  "Dedizierter Partner-Support",
  "Co-Marketing-Möglichkeiten",
  "Early-Access zu Features",
  "Partner-Portal",
]

export default function PartnersPage() {
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
              Partner werden
            </h1>
            <p className="text-xl text-[#0B0C0E]/70 font-inter mb-12 max-w-3xl mx-auto">
              Werde Partner von IntroKI und biete deinen Kunden die beste Sales-Intelligence-Plattform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-[#0B0C0E] text-white hover:bg-[#0B0C0E]/90 font-semibold rounded-full px-8 py-6">
                Partner werden <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-[#0B0C0E]/20 text-[#0B0C0E] rounded-full px-8 py-6">
                Mehr erfahren
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0B0C0E]/2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {partnerTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl border border-[#0B0C0E]/10 bg-white/50 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-jakarta font-semibold mb-2">{type.title}</h3>
                  <p className="text-[#0B0C0E]/70 font-inter">{type.description}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-jakarta font-medium mb-12 text-center">Partner-Vorteile</h2>
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
            <h2 className="text-4xl font-jakarta font-medium mb-8">Bereit Partner zu werden?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-[#0B0C0E] text-white rounded-full px-8 py-6">
                Partner werden <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-[#0B0C0E]/20 rounded-full px-8 py-6">
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
