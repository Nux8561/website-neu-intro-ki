"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Mail, Zap, Shield, Users, TrendingUp } from "lucide-react"

const features = [
  { icon: Mail, title: "Mailchimp-Integration", description: "Verbinde IntroKI mit Mailchimp und synchronisiere automatisch alle Kontakte, Listen und Campaign-Daten." },
  { icon: Zap, title: "Bidirektionale Synchronisation", description: "Synchronisiere Kontakte zwischen IntroKI und Mailchimp. Änderungen werden automatisch in beide Richtungen übertragen." },
  { icon: Users, title: "List-Management", description: "Verwalte deine Mailchimp-Listen direkt aus IntroKI heraus. Füge Kontakte hinzu oder entferne sie automatisch." },
  { icon: Shield, title: "Sichere Verbindung", description: "OAuth 2.0-Authentifizierung für maximale Sicherheit. Deine Marketing-Daten bleiben geschützt." },
]

export default function AppMailchimpPage() {
  const heroRef = React.useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-background">
      <section ref={heroRef} className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-jakarta font-medium tracking-tight text-text-primary mb-6">
              Verbinde IntroKI mit
              <br />
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">Mailchimp</span>
            </h1>
            <p className="text-xl text-text-secondary font-inter mb-12 max-w-3xl mx-auto">
              Synchronisiere deine Mailchimp-Kontakte und Listen mit IntroKI. Verwalte alle Marketing-Daten an einem Ort.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-text-primary text-white hover:bg-text-primary/90 font-semibold rounded-full px-8 py-6">
                Jetzt verbinden <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-border-active text-text-primary rounded-full px-8 py-6">
                Mehr erfahren
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
                    <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-yellow-600" />
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

      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-jakarta font-medium mb-8">Bereit für die Integration?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-text-primary text-white rounded-full px-8 py-6">
                Jetzt verbinden <ArrowRight className="ml-2 h-5 w-5" />
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
