"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Users, Gift, TrendingUp, Share2 } from "lucide-react"

const benefits = [
  "1 Monat kostenlos für jeden Empfehlung",
  "Dein Team erhält auch 1 Monat kostenlos",
  "Unbegrenzte Empfehlungen",
  "Einfacher Teilen-Link",
  "Tracking in Echtzeit",
  "Sofortige Gutschrift",
]

export default function ReferPage() {
  const heroRef = React.useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-white">
      <section ref={heroRef} className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6">
              Teile IntroKI mit deinem Team
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">und werde belohnt</span>
            </h1>
            <p className="text-xl text-[#0B0C0E]/70 font-inter mb-12 max-w-3xl mx-auto">
              Hilf deinem Netzwerk, IntroKI zu entdecken und verdiene Belohnungen. Für jede erfolgreiche Empfehlung erhältst du 1 Monat kostenlos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-[#0B0C0E] text-white hover:bg-[#0B0C0E]/90 font-semibold rounded-full px-8 py-6">
                Empfehlungslink erstellen <ArrowRight className="ml-2 h-5 w-5" />
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-jakarta font-medium mb-12 text-center">So funktioniert's</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <Share2 className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-jakarta font-semibold mb-2">1. Teilen</h3>
                <p className="text-[#0B0C0E]/70 font-inter">Teile deinen Empfehlungslink mit deinem Netzwerk.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-jakarta font-semibold mb-2">2. Empfehlung</h3>
                <p className="text-[#0B0C0E]/70 font-inter">Dein Kontakt meldet sich mit deinem Link an.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-jakarta font-semibold mb-2">3. Belohnung</h3>
                <p className="text-[#0B0C0E]/70 font-inter">Du erhältst 1 Monat kostenlos – sofort gutgeschrieben.</p>
              </motion.div>
            </div>

            <h2 className="text-4xl font-jakarta font-medium mb-12 text-center">Vorteile</h2>
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
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0" />
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
            <h2 className="text-4xl font-jakarta font-medium mb-8">Bereit zu teilen?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-[#0B0C0E] text-white rounded-full px-8 py-6">
                Empfehlungslink erstellen <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-[#0B0C0E]/20 rounded-full px-8 py-6">
                Mehr erfahren
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
