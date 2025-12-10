"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const faqCategories = [
  { id: "general", label: "Allgemein" },
  { id: "pricing", label: "Preise & Abrechnung" },
  { id: "features", label: "Features" },
  { id: "technical", label: "Technisch" },
]

const faqs = {
  general: [
    {
      q: "Was ist IntroKI?",
      a: "IntroKI ist ein KI-gestütztes CRM-System, das Deep Research, Live Coaching, Lead Scoring und Automation in einer Plattform vereint. Es hilft Vertriebsteams, effizienter zu arbeiten und bessere Ergebnisse zu erzielen.",
    },
    {
      q: "Wie unterscheidet sich IntroKI von anderen CRMs?",
      a: "IntroKI kombiniert klassische CRM-Funktionalität mit KI-gestützten Features wie automatischer Research, Live Call Coaching und intelligenter Lead-Priorisierung. Alles in einer modernen, benutzerfreundlichen Oberfläche.",
    },
    {
      q: "Gibt es eine kostenlose Testphase?",
      a: "Ja, alle Pläne enthalten eine 14-tägige kostenlose Testphase. Keine Kreditkarte erforderlich.",
    },
  ],
  pricing: [
    {
      q: "Wie funktioniert die Abrechnung?",
      a: "Die Abrechnung erfolgt monatlich im Voraus. Sie können jederzeit kündigen oder Ihren Plan ändern.",
    },
    {
      q: "Kann ich meinen Plan später ändern?",
      a: "Ja, Sie können jederzeit zwischen den Plänen wechseln. Upgrades werden anteilig berechnet.",
    },
    {
      q: "Gibt es Rabatte für Jahreszahlungen?",
      a: "Ja, bei Jahreszahlung erhalten Sie 20% Rabatt auf alle Pläne.",
    },
  ],
  features: [
    {
      q: "Wie funktioniert die Deep Research?",
      a: "Geben Sie einfach einen Firmennamen oder eine Domain ein. Unsere KI recherchiert automatisch Informationen zu Unternehmen, Kontakten, Tech Stack, Funding und News in unter 60 Sekunden.",
    },
    {
      q: "Was ist Live Call Coaching?",
      a: "Während eines Gesprächs erhalten Sie in Echtzeit KI-gestützte Talking Points, Sentiment-Analyse und Objection-Handling-Tipps direkt auf Ihrem Bildschirm.",
    },
    {
      q: "Wie funktioniert das Lead Scoring?",
      a: "Unser KI-Algorithmus bewertet Leads basierend auf ICP-Fit, Engagement, Purchase Probability und anderen Faktoren. Die Scores werden kontinuierlich aktualisiert.",
    },
  ],
  technical: [
    {
      q: "Welche Integrationen werden unterstützt?",
      a: "IntroKI unterstützt Integrationen mit HubSpot, Salesforce, Gmail, Outlook, Google Calendar und vielen weiteren Tools über unsere API.",
    },
    {
      q: "Wo werden meine Daten gespeichert?",
      a: "Ihre Daten werden sicher in EU-Rechenzentren gespeichert und sind GDPR-konform. Enterprise-Kunden können auch On-Premise-Hosting wählen.",
    },
    {
      q: "Wie sicher ist IntroKI?",
      a: "Wir verwenden Enterprise-Grade Security mit SSO, 2FA, Verschlüsselung und regelmäßigen Security-Audits. Wir sind SOC 2 und ISO 27001 zertifiziert.",
    },
  ],
}

export function FAQPage() {
  const [activeCategory, setActiveCategory] = React.useState("general")
  const [openItems, setOpenItems] = React.useState<Set<number>>(new Set())
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const toggleItem = (index: number) => {
    const newOpen = new Set(openItems)
    if (newOpen.has(index)) {
      newOpen.delete(index)
    } else {
      newOpen.add(index)
    }
    setOpenItems(newOpen)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-[#0B0C0E]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <Badge
                variant="outline"
                className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-6"
              >
                FAQ
              </Badge>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6"
            >
              Häufig gestellte Fragen
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-[#0B0C0E]/70 font-inter mb-8 max-w-2xl mx-auto"
            >
              Finden Sie Antworten auf die häufigsten Fragen zu IntroKI.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-[#0B0C0E]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar py-4">
            {faqCategories.map((category) => {
              const isActive = activeCategory === category.id
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-inter transition-all touch-manipulation min-h-[44px] whitespace-nowrap ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "bg-[#0B0C0E]/5 text-[#0B0C0E]/70 hover:bg-[#0B0C0E]/10 hover:text-[#0B0C0E] border border-[#0B0C0E]/10 hover:border-[#0B0C0E]/20"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category.label}
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <AnimatePresence mode="wait">
              {faqs[activeCategory as keyof typeof faqs].map((faq, index) => {
                const isOpen = openItems.has(index)
                return (
                  <motion.div
                    key={`${activeCategory}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    className="bg-[#0B0C0E]/5 border border-[#0B0C0E]/10 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full p-6 flex items-center justify-between text-left hover:bg-[#0B0C0E]/5 transition-colors"
                    >
                      <h3 className="text-[#0B0C0E] font-jakarta font-medium pr-4">
                        {faq.q}
                      </h3>
                      <ChevronDown
                        className={`h-5 w-5 text-[#0B0C0E]/50 flex-shrink-0 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                        >
                          <div className="px-6 pb-6">
                            <p className="text-[#0B0C0E]/70 font-inter text-sm">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  )
}

