"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Check, ArrowRight, PhoneCall } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    price: "€49",
    period: "pro Monat",
    description: "Perfekt für kleine Teams",
    features: [
      "Bis zu 5 Benutzer",
      "Deep Research (100/Monat)",
      "Lead Scoring",
      "Pipeline Management",
      "Email Support",
      "Basic Analytics",
    ],
    cta: "Jetzt starten",
    popular: false,
  },
  {
    name: "Professional",
    price: "€149",
    period: "pro Monat",
    description: "Für wachsende Unternehmen",
    features: [
      "Bis zu 25 Benutzer",
      "Unbegrenzte Research",
      "Live Call Coaching",
      "Advanced Lead Scoring",
      "Workflow Automation",
      "Priority Support",
      "Custom Reports",
      "API Access",
    ],
    cta: "Jetzt starten",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Für große Organisationen",
    features: [
      "Unbegrenzte Benutzer",
      "Alles aus Professional",
      "Dedicated Account Manager",
      "Custom Integrations",
      "SSO & Advanced Security",
      "On-Premise Option",
      "SLA Garantie",
      "Custom Training",
    ],
    cta: "Kontakt aufnehmen",
    popular: false,
  },
]

export function PricingPage() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="min-h-screen bg-[#0B0C0E]">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-white/5">
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
                Pricing
              </Badge>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-jakarta font-medium tracking-tight text-white mb-6"
            >
              Einfache, transparente Preise
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/70 font-inter mb-8 max-w-2xl mx-auto"
            >
              Wählen Sie den Plan, der zu Ihrem Unternehmen passt. Alle Pläne
              enthalten eine 14-tägige kostenlose Testphase.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
                className={`relative bg-white/5 border rounded-2xl p-8 ${
                  plan.popular
                    ? "border-blue-500/50 bg-blue-500/5 scale-105"
                    : "border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white border-0">
                      Beliebt
                    </Badge>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-jakarta font-medium tracking-tight text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-white/70 font-inter text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-jakarta font-medium text-white">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-white/50 font-inter">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-white/70 font-inter text-sm"
                    >
                      <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className={`w-full rounded-full ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                  }`}
                  asChild
                >
                  {plan.name === "Enterprise" ? (
                    <Link href="/kontakt">
                      {plan.cta}
                      <PhoneCall className="ml-2 h-4 w-4" />
                    </Link>
                  ) : (
                    <Link href="/dashboard">
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  )}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-jakarta font-medium tracking-tight text-white mb-12 text-center">
              Häufige Fragen
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Kann ich meinen Plan später ändern?",
                  a: "Ja, Sie können jederzeit zwischen den Plänen wechseln. Upgrades werden anteilig berechnet, Downgrades werden am Ende des Abrechnungszeitraums wirksam.",
                },
                {
                  q: "Gibt es eine kostenlose Testphase?",
                  a: "Ja, alle Pläne enthalten eine 14-tägige kostenlose Testphase. Keine Kreditkarte erforderlich.",
                },
                {
                  q: "Was passiert nach der Testphase?",
                  a: "Nach der Testphase können Sie einen kostenpflichtigen Plan wählen oder Ihr Konto pausieren. Ihre Daten bleiben 30 Tage lang gespeichert.",
                },
                {
                  q: "Bietet IntroKI Support?",
                  a: "Ja, alle Pläne enthalten E-Mail-Support. Professional und Enterprise erhalten zusätzlich Priority Support und einen dedizierten Account Manager.",
                },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-white font-jakarta font-medium mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-white/70 font-inter text-sm">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

