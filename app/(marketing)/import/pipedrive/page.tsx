"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Zap, Shield, Clock, Database, FileCheck, RefreshCw } from "lucide-react"

const features = [
  { icon: Zap, title: "Schnelle Pipedrive-Migration", description: "Alle deine Pipedrive-Daten werden in unter 20 Minuten übertragen. Deals, Kontakte, Aktivitäten – alles wird nahtlos migriert." },
  { icon: Shield, title: "Sichere Datenübertragung", description: "Verschlüsselte Übertragung aller Daten. Deine Informationen sind während der gesamten Migration geschützt." },
  { icon: FileCheck, title: "Automatische Validierung", description: "Intelligente Datenvalidierung stellt sicher, dass alle Deals, Kontakte und Aktivitäten korrekt übertragen werden." },
  { icon: RefreshCw, title: "Bidirektionale Sync", description: "Optional: Synchronisiere weiterhin mit Pipedrive für eine nahtlose Übergangsphase." },
]

const steps = [
  { number: "01", title: "Pipedrive API verbinden", description: "Verbinde dich sicher mit deinem Pipedrive-Konto über die API. Einfach und sicher." },
  { number: "02", title: "Daten auswählen", description: "Wähle aus, welche Objekte migriert werden sollen: Deals, Personen, Organisationen, Aktivitäten." },
  { number: "03", title: "Mapping konfigurieren", description: "Unser intelligenter Mapper erkennt automatisch Feldzuordnungen zwischen Pipedrive und IntroKI." },
  { number: "04", title: "Migration starten", description: "Starte die Migration mit einem Klick. Du erhältst Echtzeit-Updates über den Fortschritt." },
  { number: "05", title: "Validierung & Review", description: "Überprüfe die migrierten Daten in unserer Vorschau. Alles korrekt? Finalisiere die Migration." },
]

export default function ImportPipedrivePage() {
  const heroRef = React.useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-background">
      <section ref={heroRef} className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-jakarta font-medium tracking-tight text-text-primary mb-6">
              Übertrage deine Pipedrive-Daten
              <br />
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">zu IntroKI</span>
            </h1>
            <p className="text-xl text-text-secondary font-inter mb-12 max-w-3xl mx-auto">
              Nahtlose Migration aller deiner Pipedrive-Daten. Deals, Kontakte, Aktivitäten – alles wird automatisch übertragen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-text-primary text-white hover:bg-text-primary/90 font-semibold rounded-full px-8 py-6">
                Migration starten <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-border-active text-text-primary rounded-full px-8 py-6">
                Demo buchen
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-surface">
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
                  className="p-8 rounded-2xl border border-border-subtle bg-white/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-jakarta font-semibold mb-2">{feature.title}</h3>
                      <p className="text-text-secondary font-inter">{feature.description}</p>
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
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {step.number}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-jakarta font-semibold mb-2">{step.title}</h3>
                  <p className="text-text-secondary font-inter">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-jakarta font-medium mb-8">Bereit für die Migration?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-text-primary text-white rounded-full px-8 py-6">
                Migration starten <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-border-active rounded-full px-8 py-6">
                Demo buchen
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
