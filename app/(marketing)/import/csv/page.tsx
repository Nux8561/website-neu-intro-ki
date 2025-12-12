"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Upload, Shield, FileText, Zap, RefreshCw } from "lucide-react"

const features = [
  { icon: Upload, title: "CSV-Dateien importieren", description: "Lade deine CSV-Dateien einfach per Drag & Drop hoch. Unterstützt alle gängigen CSV-Formate und Trennzeichen." },
  { icon: FileText, title: "Automatische Format-Erkennung", description: "Unser System erkennt automatisch Trennzeichen, Encoding und Spaltenüberschriften in deiner CSV-Datei." },
  { icon: Zap, title: "Schnelle Verarbeitung", description: "Große CSV-Dateien mit Millionen von Zeilen werden effizient verarbeitet und importiert." },
  { icon: Shield, title: "Datenvalidierung", description: "Automatische Validierung aller Daten vor dem Import. Fehlerhafte Einträge werden markiert und können korrigiert werden." },
]

const steps = [
  { number: "01", title: "CSV-Datei hochladen", description: "Lade deine CSV-Datei per Drag & Drop oder Dateiauswahl hoch. Unterstützt werden alle gängigen CSV-Formate." },
  { number: "02", title: "Format erkennen", description: "Unser System erkennt automatisch Trennzeichen (Komma, Semikolon, Tab) und Encoding (UTF-8, ISO-8859-1)." },
  { number: "03", title: "Spalten zuordnen", description: "Spaltenüberschriften werden automatisch erkannt und zu IntroKI-Feldern gemappt. Passe bei Bedarf an." },
  { number: "04", title: "Daten validieren", description: "Überprüfe die Vorschau der zu importierenden Daten. Fehlerhafte Einträge werden automatisch erkannt." },
  { number: "05", title: "Import starten", description: "Starte den Import mit einem Klick. Du erhältst Echtzeit-Updates über den Fortschritt." },
]

export default function ImportCSVPage() {
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
              Importiere CSV-Dateien
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">zu IntroKI</span>
            </h1>
            <p className="text-xl text-[#0B0C0E]/70 font-inter mb-12 max-w-3xl mx-auto">
              Lade deine CSV-Dateien einfach hoch und importiere alle Daten direkt in IntroKI. Automatische Format-Erkennung und Datenvalidierung inklusive.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-[#0B0C0E] text-white hover:bg-[#0B0C0E]/90 font-semibold rounded-full px-8 py-6">
                Datei hochladen <ArrowRight className="ml-2 h-5 w-5" />
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
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-purple-600" />
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
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
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
            <h2 className="text-4xl font-jakarta font-medium mb-8">Bereit für den Import?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-[#0B0C0E] text-white rounded-full px-8 py-6">
                Datei hochladen <ArrowRight className="ml-2 h-5 w-5" />
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
