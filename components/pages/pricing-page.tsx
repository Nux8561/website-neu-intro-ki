"use client"

import * as React from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Check, ArrowRight, Sparkles, Zap, Shield, Users, Building2, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Types
import type { LucideIcon } from "lucide-react"

interface Plan {
  name: string
  price: { monthly: number | string; yearly: number | string }
  description: string
  features: string[]
  cta: string
  popular?: boolean
  badge?: string
  icon: LucideIcon
}

// Data
const plans: Plan[] = [
  {
    name: "Starter",
    price: { monthly: 0, yearly: 0 },
    description: "Perfekt für Einzelpersonen und kleine Teams",
    icon: Zap,
    features: [
      "Bis zu 1.000 Kontakte",
      "Basis-Automatisierung",
      "E-Mail Support",
      "5 Integrationen",
      "Standard Analytics",
    ],
    cta: "Kostenlos starten",
  },
  {
    name: "Professional",
    price: { monthly: 79, yearly: 790 },
    description: "Für wachsende Teams mit erweiterten Anforderungen",
    icon: Users,
    features: [
      "Unbegrenzte Kontakte",
      "Erweiterte Automatisierung",
      "AI-gestützte Insights",
      "Priority Support",
      "Alle Integrationen",
      "Custom Fields",
      "API-Zugang",
      "Team Collaboration",
    ],
    cta: "14 Tage kostenlos testen",
    popular: true,
    badge: "Beliebtester Plan",
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", yearly: "Custom" },
    description: "Für große Organisationen mit spezifischen Anforderungen",
    icon: Building2,
    features: [
      "Alles aus Professional",
      "Dedicated Account Manager",
      "Custom Integrationen",
      "SSO & erweiterte Sicherheit",
      "SLA-Garantie",
      "On-Premise Option",
      "Custom Training",
      "White-Label Option",
    ],
    cta: "Kontakt aufnehmen",
  },
]

const trustLogos = [
  { name: "TechCorp", logo: "T" },
  { name: "Innovate", logo: "I" },
  { name: "DataFlow", logo: "D" },
  { name: "CloudNine", logo: "C" },
  { name: "ScaleUp", logo: "S" },
]

// Animation variants
const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
}

// Components
function PricingToggle({
  isYearly,
  onToggle,
}: {
  isYearly: boolean
  onToggle: () => void
}) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span
        className={cn(
          "text-sm font-inter transition-colors",
          !isYearly ? "text-text-primary" : "text-text-muted"
        )}
      >
        Monatlich
      </span>
      <button
        onClick={onToggle}
        className="relative w-14 h-7 rounded-full bg-surface border border-border-subtle p-0.5 transition-colors hover:border-border-active"
      >
        <motion.div
          className="absolute top-0.5 w-6 h-6 rounded-full bg-text-primary"
          animate={{ left: isYearly ? "calc(100% - 26px)" : "2px" }}
          transition={springTransition}
        />
      </button>
      <span
        className={cn(
          "text-sm font-inter transition-colors flex items-center gap-2",
          isYearly ? "text-text-primary" : "text-text-muted"
        )}
      >
        Jährlich
        <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
          -17%
        </span>
      </span>
    </div>
  )
}

function PricingCard({
  plan,
  isYearly,
  index,
}: {
  plan: Plan
  isYearly: boolean
  index: number
}) {
  const [isHovered, setIsHovered] = React.useState(false)
  const Icon = plan.icon
  const price = isYearly ? plan.price.yearly : plan.price.monthly
  const isCustom = typeof price === "string"

  return (
    <motion.div
      variants={itemVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      {/* Popular Glow */}
      {plan.popular && (
        <motion.div
          className="absolute -inset-px rounded-2xl bg-gradient-to-b from-blue-500/30 via-purple-500/20 to-transparent blur-xl"
          animate={{
            opacity: isHovered ? 0.8 : 0.4,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={springTransition}
        />
      )}

      <motion.div
        className={cn(
          "relative h-full rounded-2xl border p-8 transition-all",
          plan.popular
            ? "bg-surface border-blue-500/30 shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)]"
            : "bg-surface border-border-subtle hover:border-border-active"
        )}
        animate={{
          scale: isHovered ? 1.02 : 1,
          y: isHovered ? -4 : 0,
        }}
        transition={springTransition}
      >
        {/* Badge */}
        {plan.badge && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Badge className="bg-blue-500 text-white border-0 px-4 py-1 text-xs font-inter shadow-lg shadow-blue-500/25">
              <Sparkles className="h-3 w-3 mr-1" />
              {plan.badge}
            </Badge>
          </div>
        )}

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div
              className={cn(
                "p-2.5 rounded-xl border transition-colors",
                plan.popular
                  ? "bg-blue-500/10 border-blue-500/30"
                  : "bg-white/5 border-border-subtle"
              )}
            >
              <Icon
                className={cn(
                  "h-5 w-5",
                  plan.popular ? "text-blue-400" : "text-text-secondary"
                )}
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-xl font-jakarta font-medium tracking-tight text-text-primary">
              {plan.name}
            </h3>
          </div>

          <p className="text-text-muted font-inter text-sm mb-6">
            {plan.description}
          </p>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            {isCustom ? (
              <span className="text-4xl font-jakarta font-semibold text-text-primary">
                {price}
              </span>
            ) : (
              <>
                <span className="text-4xl font-jakarta font-semibold text-text-primary">
                  €{price}
                </span>
                <span className="text-text-muted font-inter text-sm">
                  /{isYearly ? "Jahr" : "Monat"}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...springTransition, delay: index * 0.1 + i * 0.03 }}
            >
              <div
                className={cn(
                  "mt-0.5 p-0.5 rounded-full",
                  plan.popular ? "bg-blue-500/20" : "bg-white/10"
                )}
              >
                <Check
                  className={cn(
                    "h-3.5 w-3.5",
                    plan.popular ? "text-blue-400" : "text-text-muted"
                  )}
                  strokeWidth={2.5}
                />
              </div>
              <span className="text-text-secondary font-inter text-sm">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          size="lg"
          className={cn(
            "w-full rounded-xl font-semibold transition-all",
            plan.popular
              ? "bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/25"
              : "bg-white/5 text-text-primary hover:bg-white/10 border border-border-subtle"
          )}
          asChild
        >
          <Link
            href={plan.name === "Enterprise" ? "/kontakt" : "/pricing"}
          >
            {plan.cta}
            <motion.div
              animate={{ x: isHovered ? 4 : 0 }}
              transition={springTransition}
            >
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.div>
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  )
}

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string
  answer: string
  index: number
}) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ...springTransition, delay: index * 0.05 }}
      className="border border-border-subtle rounded-xl overflow-hidden bg-surface hover:border-border-active transition-colors"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <h3 className="text-text-primary font-jakarta font-medium pr-4">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={springTransition}
          className="flex-shrink-0"
        >
          <ArrowRight
            className="h-5 w-5 text-text-muted rotate-90"
            strokeWidth={1.5}
          />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="px-6 pb-6 text-text-muted font-inter text-sm leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Main Component
export function PricingPage() {
  const [isYearly, setIsYearly] = React.useState(false)
  const heroRef = React.useRef<HTMLDivElement>(null)
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" })

  const faqs = [
    {
      q: "Kann ich meinen Plan später ändern?",
      a: "Ja, Sie können Ihren Plan jederzeit upgraden oder downgraden. Änderungen werden anteilig berechnet und in Ihrem nächsten Abrechnungszyklus berücksichtigt.",
    },
    {
      q: "Gibt es eine kostenlose Testphase?",
      a: "Ja, alle Professional-Pläne beinhalten eine 14-tägige kostenlose Testphase. Keine Kreditkarte erforderlich.",
    },
    {
      q: "Was passiert nach der Testphase?",
      a: "Nach Ablauf Ihrer Testphase können Sie einen kostenpflichtigen Plan wählen oder Ihr Konto pausieren. Ihre Daten werden 30 Tage lang gespeichert.",
    },
    {
      q: "Bieten Sie Rückerstattungen an?",
      a: "Ja, wir bieten eine 30-tägige Geld-zurück-Garantie für alle Jahrespläne. Monatliche Pläne können jederzeit gekündigt werden.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-border-subtle text-sm font-inter text-text-secondary">
                <Star className="h-4 w-4 text-yellow-400" strokeWidth={1.5} />
                Über 500+ Teams vertrauen uns
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-jakarta font-medium tracking-tight text-text-primary mb-6"
              style={{ textWrap: "balance" }}
            >
              Einfache, transparente Preise
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-text-secondary font-inter mb-10 max-w-2xl mx-auto"
            >
              Starten Sie mit einer 14-tägigen kostenlosen Testphase. Keine
              Kreditkarte erforderlich. Jederzeit kündbar.
            </motion.p>

            {/* Toggle */}
            <motion.div variants={itemVariants} className="mb-16">
              <PricingToggle
                isYearly={isYearly}
                onToggle={() => setIsYearly(!isYearly)}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {plans.map((plan, index) => (
              <PricingCard
                key={plan.name}
                plan={plan}
                isYearly={isYearly}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 border-y border-border-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="text-center"
          >
            <p className="text-text-muted font-inter text-sm mb-8">
              Vertraut von führenden Unternehmen weltweit
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {trustLogos.map((company, i) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-border-subtle flex items-center justify-center"
                >
                  <span className="text-text-muted font-jakarta font-semibold text-lg">
                    {company.logo}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-jakarta font-medium tracking-tight text-text-primary mb-4">
              Alle Features im Vergleich
            </h2>
            <p className="text-text-secondary font-inter">
              Finden Sie den perfekten Plan für Ihre Anforderungen
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...springTransition, delay: 0.2 }}
            className="max-w-4xl mx-auto border border-border-subtle rounded-2xl overflow-hidden bg-surface"
          >
            <div className="grid grid-cols-4 gap-px bg-border-subtle">
              {/* Header */}
              <div className="bg-background p-6" />
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={cn(
                    "p-6 text-center",
                    plan.popular ? "bg-blue-500/5" : "bg-background"
                  )}
                >
                  <span className="text-text-primary font-jakarta font-medium">
                    {plan.name}
                  </span>
                </div>
              ))}

              {/* Features */}
              {[
                { name: "Kontakte", values: ["1.000", "Unbegrenzt", "Unbegrenzt"] },
                { name: "Team-Mitglieder", values: ["1", "10", "Unbegrenzt"] },
                { name: "Integrationen", values: ["5", "Alle", "Custom"] },
                { name: "API-Zugang", values: [false, true, true] },
                { name: "SSO", values: [false, false, true] },
                { name: "Support", values: ["Email", "Priority", "Dedicated"] },
              ].map((feature, i) => (
                <React.Fragment key={feature.name}>
                  <div className="bg-background p-4 flex items-center">
                    <span className="text-text-secondary font-inter text-sm">
                      {feature.name}
                    </span>
                  </div>
                  {feature.values.map((value, j) => (
                    <div
                      key={j}
                      className={cn(
                        "p-4 flex items-center justify-center",
                        plans[j].popular ? "bg-blue-500/5" : "bg-background"
                      )}
                    >
                      {typeof value === "boolean" ? (
                        value ? (
                          <Check className="h-5 w-5 text-green-400" />
                        ) : (
                          <span className="text-text-muted">—</span>
                        )
                      ) : (
                        <span className="text-text-primary font-inter text-sm">
                          {value}
                        </span>
                      )}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 border-t border-border-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={springTransition}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-jakarta font-medium tracking-tight text-text-primary mb-4">
                Häufig gestellte Fragen
              </h2>
              <p className="text-text-secondary font-inter">
                Haben Sie weitere Fragen?{" "}
                <Link
                  href="/kontakt"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Kontaktieren Sie uns
                </Link>
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  question={faq.q}
                  answer={faq.a}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="relative rounded-3xl border border-border-subtle bg-surface p-12 md:p-16 overflow-hidden">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />

              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-jakarta font-medium tracking-tight text-text-primary mb-4">
                  Bereit loszulegen?
                </h2>
                <p className="text-text-secondary font-inter mb-8 max-w-xl mx-auto">
                  Starten Sie heute mit Ihrer 14-tägigen kostenlosen Testphase
                  und entdecken Sie, wie IntroKI Ihren Vertrieb transformieren
                  kann.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-text-primary text-background hover:bg-text-primary/90 rounded-xl px-8"
                    asChild
                  >
                    <Link href="/pricing">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Kostenlos starten
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-border-subtle text-text-primary hover:bg-white/5 rounded-xl px-8"
                    asChild
                  >
                    <Link href="/kontakt">Demo vereinbaren</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
