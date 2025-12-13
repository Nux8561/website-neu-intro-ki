"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Shield, Lock, Eye, FileCheck, Server, Globe } from "lucide-react"

const features = [
  { icon: Shield, title: "SOC 2 Type II zertifiziert", description: "IntroKI ist SOC 2 Type II zertifiziert und erfüllt die höchsten Sicherheitsstandards der Branche." },
  { icon: Lock, title: "End-to-End Verschlüsselung", description: "Alle Daten werden mit AES-256 verschlüsselt – sowohl im Transit als auch im Ruhezustand." },
  { icon: Eye, title: "GDPR-konform", description: "Vollständige GDPR-Compliance. Deine Daten gehören dir – wir respektieren deine Privatsphäre." },
  { icon: Server, title: "Sichere Infrastruktur", description: "Hosted auf Enterprise-Grade-Servern mit regelmäßigen Security-Audits und Penetration-Tests." },
]

const certifications = [
  "SOC 2 Type II",
  "GDPR",
  "CCPA",
  "ISO 27001",
  "HIPAA-ready",
]

const securityFeatures = [
  "Zwei-Faktor-Authentifizierung (2FA)",
  "Single Sign-On (SSO)",
  "Rollenbasierte Zugriffskontrolle",
  "Audit-Logs für alle Aktionen",
  "Regelmäßige Security-Updates",
  "24/7 Security-Monitoring",
]

export default function SecurityPage() {
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
              Sicherheit steht an
              <br />
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">erster Stelle</span>
            </h1>
            <p className="text-xl text-text-secondary font-inter mb-12 max-w-3xl mx-auto">
              Erfahre mehr über IntroKIs Sicherheitspraktiken und Compliance. Deine Daten sind bei uns sicher.
            </p>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-jakarta font-medium mb-12 text-center">Zertifizierungen & Compliance</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-border-subtle text-center"
                >
                  <div className="text-sm font-jakarta font-semibold text-text-primary">{cert}</div>
                </motion.div>
              ))}
            </div>

            <h2 className="text-4xl font-jakarta font-medium mb-12 text-center">Security Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-border-subtle"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="font-inter text-text-secondary">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-jakarta font-medium mb-8">Fragen zur Sicherheit?</h2>
            <p className="text-xl text-text-secondary font-inter mb-8">
              Kontaktiere unser Security-Team für weitere Informationen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-text-primary text-white rounded-full px-8 py-6">
                Security-Whitepaper anfordern <ArrowRight className="ml-2 h-5 w-5" />
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
