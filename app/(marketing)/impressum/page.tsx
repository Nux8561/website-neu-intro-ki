"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Building2, MapPin, Mail, Phone, Globe } from "lucide-react"

const companyInfo = [
  { icon: Building2, label: "Firmenname", value: "IntroKI GmbH" },
  { icon: MapPin, label: "Adresse", value: "Musterstraße 123, 10115 Berlin, Deutschland" },
  { icon: Mail, label: "E-Mail", value: "info@intro.ki" },
  { icon: Phone, label: "Telefon", value: "+49 (0) 30 12345678" },
  { icon: Globe, label: "Website", value: "www.intro.ki" },
]

const legalInfo = [
  { label: "Handelsregister", value: "HRB 123456 B" },
  { label: "Registergericht", value: "Amtsgericht Berlin-Charlottenburg" },
  { label: "Umsatzsteuer-ID", value: "DE123456789" },
  { label: "Geschäftsführer", value: "Max Mustermann" },
]

export default function ImpressumPage() {
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
              Impressum
            </h1>
            <p className="text-xl text-[#0B0C0E]/70 font-inter mb-12 max-w-3xl mx-auto">
              Rechtliche Informationen und Kontaktdaten der IntroKI GmbH.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-[#0B0C0E]/10 bg-white/50 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-jakarta font-semibold mb-6">Kontaktinformationen</h2>
              <div className="space-y-4">
                {companyInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={info.label} className="flex items-start gap-4">
                      <Icon className="h-5 w-5 text-[#0B0C0E]/60 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-inter text-[#0B0C0E]/60 mb-1">{info.label}</div>
                        <div className="font-inter text-[#0B0C0E]">{info.value}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl border border-[#0B0C0E]/10 bg-white/50 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-jakarta font-semibold mb-6">Rechtliche Informationen</h2>
              <div className="space-y-4">
                {legalInfo.map((info) => (
                  <div key={info.label} className="flex justify-between items-start border-b border-[#0B0C0E]/10 pb-3">
                    <div className="text-sm font-inter text-[#0B0C0E]/60">{info.label}</div>
                    <div className="font-inter text-[#0B0C0E]">{info.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl border border-[#0B0C0E]/10 bg-white/50 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-jakarta font-semibold mb-4">Haftungsausschluss</h2>
              <p className="text-[#0B0C0E]/70 font-inter leading-relaxed mb-4">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
              <p className="text-[#0B0C0E]/70 font-inter leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
