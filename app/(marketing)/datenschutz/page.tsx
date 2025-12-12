"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Shield, Lock, Eye, FileCheck } from "lucide-react"

const sections = [
  {
    title: "1. Datenerhebung",
    content: "Wir erheben nur die Daten, die für die Bereitstellung unserer Dienste erforderlich sind. Dazu gehören Kontaktinformationen, Nutzungsdaten und technische Informationen.",
  },
  {
    title: "2. Datenverwendung",
    content: "Deine Daten werden ausschließlich für die Bereitstellung und Verbesserung unserer Dienste verwendet. Wir verkaufen deine Daten nicht an Dritte.",
  },
  {
    title: "3. Datenspeicherung",
    content: "Alle Daten werden sicher auf unseren Servern gespeichert, die in der EU gehostet werden. Wir verwenden Verschlüsselung und moderne Sicherheitsmaßnahmen.",
  },
  {
    title: "4. Deine Rechte",
    content: "Du hast das Recht auf Auskunft, Berichtigung, Löschung und Widerspruch bezüglich deiner Daten. Kontaktiere uns jederzeit, um deine Rechte auszuüben.",
  },
  {
    title: "5. Cookies",
    content: "Wir verwenden Cookies, um unsere Website zu verbessern und dir ein besseres Erlebnis zu bieten. Du kannst Cookies in deinen Browser-Einstellungen verwalten.",
  },
  {
    title: "6. Kontakt",
    content: "Bei Fragen zum Datenschutz kontaktiere uns bitte unter datenschutz@intro.ki oder über unser Kontaktformular.",
  },
]

export default function DatenschutzPage() {
  const heroRef = React.useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-white">
      <section ref={heroRef} className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6">
              Datenschutzerklärung
            </h1>
            <p className="text-xl text-[#0B0C0E]/70 font-inter mb-12 max-w-3xl mx-auto">
              Deine Privatsphäre ist uns wichtig. Erfahre, wie wir deine Daten schützen und verwenden.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-[#0B0C0E]/10 bg-white/50 backdrop-blur-sm"
              >
                <h2 className="text-2xl font-jakarta font-semibold mb-4">{section.title}</h2>
                <p className="text-[#0B0C0E]/70 font-inter leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B0C0E]/2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-[#0B0C0E]/10 bg-white/50 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-jakarta font-semibold mb-4">Stand der Datenschutzerklärung</h2>
              <p className="text-[#0B0C0E]/70 font-inter">
                Diese Datenschutzerklärung wurde zuletzt am 15. Dezember 2024 aktualisiert. Wir behalten uns vor, diese Datenschutzerklärung von Zeit zu Zeit zu aktualisieren, um Änderungen in unseren Praktiken oder aus anderen betrieblichen, rechtlichen oder regulatorischen Gründen widerzuspiegeln.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
