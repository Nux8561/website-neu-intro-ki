"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Zap, FileText, Sparkles, Rocket } from "lucide-react"

const templates = [
  { icon: Zap, title: "Lead-Qualifizierung", description: "Automatisiere die Lead-Qualifizierung mit vorgefertigten Workflows. Spare Zeit und fokussiere dich auf die besten Leads." },
  { icon: FileText, title: "Follow-up-Automatisierung", description: "Automatische Follow-up-E-Mails und Reminder. Halte den Kontakt zu deinen Leads aufrecht." },
  { icon: Sparkles, title: "Deal-Stage-Updates", description: "Automatische Deal-Stage-Updates basierend auf Aktivitäten. Deine Pipeline bleibt immer aktuell." },
  { icon: Rocket, title: "Onboarding-Automatisierung", description: "Automatisiere das Onboarding neuer Kunden. Willkommens-E-Mails, Setup-Checks und mehr." },
]

export default function TemplatesPage() {
  const heroRef = React.useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-background">
      <section ref={heroRef} className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-jakarta font-medium tracking-tight text-text-primary mb-6">
              Automatisierungsvorlagen
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">für IntroKI</span>
            </h1>
            <p className="text-xl text-text-secondary font-inter mb-12 max-w-3xl mx-auto">
              Vorgefertigte Automatisierungsvorlagen für IntroKI. Starte sofort mit bewährten Workflows.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-text-primary text-white hover:bg-text-primary/90 font-semibold rounded-full px-8 py-6">
                Vorlagen durchsuchen <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-border-active text-text-primary rounded-full px-8 py-6">
                Eigene erstellen
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {templates.map((template, index) => {
              const Icon = template.icon
              return (
                <motion.div
                  key={template.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl border border-border-subtle bg-white/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-jakarta font-semibold mb-2">{template.title}</h3>
                      <p className="text-text-secondary font-inter">{template.description}</p>
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
            <h2 className="text-4xl font-jakarta font-medium mb-8">Bereit zu automatisieren?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-text-primary text-white rounded-full px-8 py-6">
                Vorlagen durchsuchen <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-border-active rounded-full px-8 py-6">
                Eigene erstellen
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
