"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

export function DatenschutzPage() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const sections = [
    {
      title: "1. Datenerhebung und -speicherung",
      content:
        "Wir erheben und speichern personenbezogene Daten nur, soweit dies für die Erbringung unserer Dienstleistungen erforderlich ist. Dies umfasst insbesondere Name, E-Mail-Adresse, Firmenname und Kontaktdaten.",
    },
    {
      title: "2. Verwendung Ihrer Daten",
      content:
        "Ihre Daten werden ausschließlich zur Bereitstellung unserer CRM-Dienstleistungen, zur Kommunikation mit Ihnen und zur Verbesserung unserer Services verwendet. Eine Weitergabe an Dritte erfolgt nur mit Ihrer ausdrücklichen Einwilligung oder gesetzlicher Verpflichtung.",
    },
    {
      title: "3. Datensicherheit",
      content:
        "Wir verwenden moderne Sicherheitstechnologien, um Ihre Daten vor unbefugtem Zugriff zu schützen. Alle Daten werden verschlüsselt übertragen und gespeichert.",
    },
    {
      title: "4. Ihre Rechte",
      content:
        "Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Kontaktieren Sie uns hierfür unter datenschutz@introki.app.",
    },
    {
      title: "5. Cookies",
      content:
        "Wir verwenden Cookies, um unsere Website zu optimieren. Sie können der Verwendung von Cookies jederzeit widersprechen.",
    },
    {
      title: "6. Kontakt",
      content:
        "Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter datenschutz@introki.app oder nutzen Sie unser Kontaktformular.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0C0E]">
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
          >
            <h1 className="text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-white mb-8">
              Datenschutzerklärung
            </h1>
            <div className="space-y-8">
              <p className="text-white/70 font-inter">
                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes
                Anliegen. In dieser Datenschutzerklärung informieren wir Sie
                über die Verarbeitung personenbezogener Daten bei der Nutzung
                unserer Website und unserer Services.
              </p>
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <h2 className="text-xl font-jakarta font-medium text-white mb-4">
                    {section.title}
                  </h2>
                  <p className="text-white/70 font-inter">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

