"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Shield, 
  Clock,
  Database,
  Users,
  TrendingUp,
  FileCheck,
  ArrowDown,
  RefreshCw,
} from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Blitzschnelle Migration",
    description: "Deine gesamten Salesforce-Daten werden in unter 30 Minuten migriert. Keine Downtime, keine Datenverluste.",
  },
  {
    icon: Shield,
    title: "100% Datensicherheit",
    description: "End-to-End Verschlüsselung während des gesamten Migrationsprozesses. Deine Daten sind bei uns sicher.",
  },
  {
    icon: FileCheck,
    title: "Automatische Validierung",
    description: "Intelligente Datenvalidierung stellt sicher, dass alle Kontakte, Leads und Deals korrekt übertragen werden.",
  },
  {
    icon: RefreshCw,
    title: "Bidirektionale Sync",
    description: "Optional: Synchronisiere weiterhin mit Salesforce für eine nahtlose Übergangsphase.",
  },
]

const steps = [
  {
    number: "01",
    title: "Salesforce-Verbindung herstellen",
    description: "Verbinde dich sicher mit deinem Salesforce-Konto über OAuth 2.0. Keine Passwörter erforderlich.",
  },
  {
    number: "02",
    title: "Daten auswählen",
    description: "Wähle aus, welche Objekte migriert werden sollen: Kontakte, Leads, Accounts, Deals, Aktivitäten und mehr.",
  },
  {
    number: "03",
    title: "Mapping konfigurieren",
    description: "Unser intelligenter Mapper erkennt automatisch Feldzuordnungen. Passe bei Bedarf an.",
  },
  {
    number: "04",
    title: "Migration starten",
    description: "Starte die Migration mit einem Klick. Du erhältst Echtzeit-Updates über den Fortschritt.",
  },
  {
    number: "05",
    title: "Validierung & Review",
    description: "Überprüfe die migrierten Daten in unserer Vorschau. Alles korrekt? Finalisiere die Migration.",
  },
]

const stats = [
  { value: "50K+", label: "Erfolgreiche Migrationen", icon: Users },
  { value: "<30 Min", label: "Durchschnittliche Dauer", icon: Clock },
  { value: "99.9%", label: "Datenintegrität", icon: Database },
  { value: "24/7", label: "Support verfügbar", icon: Shield },
]

export default function ImportSalesforcePage() {
  const heroRef = React.useRef(null)
  const featuresRef = React.useRef(null)
  const stepsRef = React.useRef(null)
  
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" })
  const stepsInView = useInView(stepsRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-32 pb-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm mb-8"
            >
              <ArrowDown className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-inter text-[#0B0C0E]/70">
                Migration von Salesforce
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6">
              Migriere deine Daten von
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Salesforce zu IntroKI
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#0B0C0E]/70 font-inter mb-12 max-w-3xl mx-auto leading-relaxed">
              Nahtlose Migration aller deiner Salesforce-Daten in unter 30 Minuten. Kontakte, Leads, Deals, Aktivitäten – alles wird automatisch übertragen und intelligent gemappt.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button 
                size="lg" 
                className="bg-[#0B0C0E] text-white hover:bg-[#0B0C0E]/90 font-semibold rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Migration starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[#0B0C0E]/20 text-[#0B0C0E] hover:bg-[#0B0C0E]/5 font-semibold rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Demo buchen
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-3xl font-jakarta font-semibold text-[#0B0C0E] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#0B0C0E]/60 font-inter">
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 bg-[#0B0C0E]/2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-4">
              Warum IntroKI?
            </h2>
            <p className="text-xl text-[#0B0C0E]/70 font-inter max-w-2xl mx-auto">
              Die einfachste und sicherste Art, von Salesforce zu migrieren
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 400, damping: 17 }}
                  className="group relative p-8 rounded-2xl border border-[#0B0C0E]/10 bg-white/50 backdrop-blur-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-jakarta font-semibold tracking-tight mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-[#0B0C0E]/70 font-inter leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section ref={stepsRef} className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-4">
              So einfach geht's
            </h2>
            <p className="text-xl text-[#0B0C0E]/70 font-inter max-w-2xl mx-auto">
              In 5 einfachen Schritten zu IntroKI
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={stepsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 400, damping: 17 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-jakarta font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-jakarta font-semibold tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#0B0C0E]/70 font-inter leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Gets Migrated */}
      <section className="py-24 bg-[#0B0C0E]/2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-12 text-center">
              Was wird migriert?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Kontakte & Leads",
                "Accounts & Unternehmen",
                "Opportunities & Deals",
                "Aktivitäten & Tasks",
                "Notizen & Anhänge",
                "Custom Fields",
                "Workflows & Automatisierungen",
                "Reports & Dashboards",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-[#0B0C0E]/10"
                >
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="font-inter text-[#0B0C0E]/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6">
              Bereit für die Migration?
            </h2>
            <p className="text-xl text-[#0B0C0E]/70 font-inter mb-8">
              Starte jetzt deine kostenlose Migration von Salesforce zu IntroKI. Keine Kreditkarte erforderlich.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-[#0B0C0E] text-white hover:bg-[#0B0C0E]/90 font-semibold rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Migration starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[#0B0C0E]/20 text-[#0B0C0E] hover:bg-[#0B0C0E]/5 font-semibold rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Demo buchen
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
