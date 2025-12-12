"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Zap, Shield, Clock, Database, FileCheck, RefreshCw } from "lucide-react"

const features = [
  { icon: Zap, title: "Zoho CRM Migration", description: "Alle deine Zoho CRM-Daten werden sicher und schnell zu IntroKI übertragen. Kontakte, Deals, Module – alles wird migriert." },
  { icon: Shield, title: "Sichere Datenübertragung", description: "Verschlüsselte Übertragung aller Daten. Deine Informationen sind während der gesamten Migration geschützt." },
  { icon: FileCheck, title: "Modul-Mapping", description: "Intelligente Zuordnung aller Zoho-Module zu IntroKI. Custom Fields werden automatisch erkannt und übertragen." },
  { icon: RefreshCw, title: "Kontinuierliche Sync", description: "Optional: Synchronisiere weiterhin mit Zoho für eine nahtlose Übergangsphase." },
]

const steps = [
  { number: "01", title: "Zoho API verbinden", description: "Verbinde dich sicher mit deinem Zoho CRM-Konto über OAuth. Einfach und sicher." },
  { number: "02", title: "Module auswählen", description: "Wähle aus, welche Zoho-Module migriert werden sollen: Leads, Kontakte, Deals, Accounts, Custom Modules." },
  { number: "03", title: "Feldzuordnungen prüfen", description: "Unser intelligenter Mapper zeigt dir alle Feldzuordnungen zwischen Zoho und IntroKI." },
  { number: "04", title: "Migration starten", description: "Starte die Migration mit einem Klick. Du erhältst Echtzeit-Updates über den Fortschritt." },
  { number: "05", title: "Validierung & Review", description: "Überprüfe die migrierten Daten in unserer Vorschau. Alles korrekt? Finalisiere die Migration." },
]

export default function ImportZohoPage() {
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
              Importiere deine Zoho CRM-Daten
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">in IntroKI</span>
            </h1>
            <p className="text-xl text-[#0B0C0E]/70 font-inter mb-12 max-w-3xl mx-auto">
              Nahtlose Migration aller deiner Zoho CRM-Daten. Leads, Kontakte, Deals, Custom Modules – alles wird automatisch übertragen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-[#0B0C0E] text-white hover:bg-[#0B0C0E]/90 font-semibold rounded-full px-8 py-6">
                Migration starten <ArrowRight className="ml-2 h-5 w-5" />
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
          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {step.number}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-jakarta font-semibold mb-2">{step.title}</h3>
                  <p className="text-[#0B0C0E]/70 font-inter">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B0C0E]/2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-jakarta font-medium mb-8">Bereit für die Migration?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-[#0B0C0E] text-white rounded-full px-8 py-6">
                Migration starten <ArrowRight className="ml-2 h-5 w-5" />
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
