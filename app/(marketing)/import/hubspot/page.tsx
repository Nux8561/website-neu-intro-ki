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
  FileCheck,
  RefreshCw,
  TrendingUp,
} from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Schnelle HubSpot-Migration",
    description: "Alle deine HubSpot-Daten werden nahtlos in IntroKI übertragen. Kontakte, Deals, Tickets und mehr – alles in einem Durchgang.",
  },
  {
    icon: Shield,
    title: "Sichere Datenübertragung",
    description: "Deine Daten werden verschlüsselt übertragen und sicher in IntroKI gespeichert. GDPR-konform und sicher.",
  },
  {
    icon: FileCheck,
    title: "Intelligentes Mapping",
    description: "Automatische Feldzuordnung zwischen HubSpot und IntroKI. Custom Properties werden automatisch erkannt.",
  },
  {
    icon: RefreshCw,
    title: "Kontinuierliche Synchronisation",
    description: "Optimiere deine Migration mit bidirektionaler Sync-Option für eine reibungslose Übergangsphase.",
  },
]

const steps = [
  {
    number: "01",
    title: "HubSpot API-Schlüssel einrichten",
    description: "Erstelle einen API-Schlüssel in deinem HubSpot-Konto. Wir führen dich Schritt für Schritt durch den Prozess.",
  },
  {
    number: "02",
    title: "Datenquellen auswählen",
    description: "Wähle aus, welche HubSpot-Objekte migriert werden sollen: Contacts, Companies, Deals, Tickets, Engagements.",
  },
  {
    number: "03",
    title: "Feldzuordnungen prüfen",
    description: "Unser intelligenter Mapper zeigt dir alle Feldzuordnungen. Passe sie bei Bedarf an deine Bedürfnisse an.",
  },
  {
    number: "04",
    title: "Migration durchführen",
    description: "Starte die Migration mit einem Klick. Du siehst den Fortschritt in Echtzeit und erhältst Benachrichtigungen.",
  },
  {
    number: "05",
    title: "Ergebnisse validieren",
    description: "Überprüfe alle migrierten Daten in unserer Vorschau. Alles korrekt? Deine Migration ist abgeschlossen.",
  },
]

const migratedData = [
  "Contacts & Companies",
  "Deals & Pipelines",
  "Tickets & Support",
  "Engagements & Activities",
  "Custom Properties",
  "Workflows & Automations",
  "Email Templates",
  "Forms & Landing Pages",
]

export default function ImportHubspotPage() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-sm mb-8"
            >
              <TrendingUp className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-inter text-[#0B0C0E]/70">
                Migration von HubSpot
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6">
              Übertrage deine HubSpot-Daten
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                nahtlos zu IntroKI
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#0B0C0E]/70 font-inter mb-12 max-w-3xl mx-auto leading-relaxed">
              Die einfachste Art, von HubSpot zu IntroKI zu migrieren. Alle deine Kontakte, Deals, Tickets und Automatisierungen werden intelligent übertragen und gemappt.
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
              Die professionellste HubSpot-Migration auf dem Markt
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
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                      <Icon className="h-6 w-6 text-orange-600" />
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
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-jakarta font-bold text-xl group-hover:scale-110 transition-transform duration-300">
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
              {migratedData.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-[#0B0C0E]/10"
                >
                  <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <span className="font-inter text-[#0B0C0E]/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-orange-500/10 via-purple-500/10 to-pink-500/10">
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
              Starte jetzt deine kostenlose Migration von HubSpot zu IntroKI. Keine Kreditkarte erforderlich.
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
