"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import Link from "next/link"
import { CheckCircle2, X, ChevronDown, Zap, Users, Building2, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ENTERPRISE_SPRING } from "@/lib/animations"
import { cn } from "@/lib/utils"

/**
 * Pricing Page - "Value Metric Pricing"
 * 
 * Strategy: We don't charge for "Contacts" (commoditized).
 * We charge for "Automation & Control".
 */

interface PricingTier {
  name: string
  price: { monthly: number | "Custom"; yearly: number | "Custom" }
  description: string
  hook: string
  features: string[]
  cta: string
  ctaHref: string
  ctaVariant: "primary" | "secondary" | "outline"
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  popular?: boolean
  badge?: string
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: { monthly: 0, yearly: 0 },
    description: "Für Einzelkämpfer, die Excel entkommen wollen.",
    hook: "Für Einzelkämpfer, die Excel entkommen wollen.",
    icon: Zap,
    features: [
      "Bis zu 500 Records",
      "Basis-Automation",
      "Community Support",
      "E-Mail Integration",
      "5 Custom Fields",
    ],
    cta: "Kostenlos starten",
    ctaHref: "/demo",
    ctaVariant: "secondary",
  },
  {
    name: "Growth",
    price: { monthly: 49, yearly: 470 }, // -20% yearly = 39€/month
    description: "Für Teams, die Prozesse standardisieren.",
    hook: "Für Teams, die Prozesse standardisieren.",
    icon: Users,
    popular: true,
    badge: "Beliebt",
    features: [
      "Unbegrenzte Records",
      "Advanced Workflows",
      "E-Mail Integration (alle Provider)",
      "Priority Support",
      "Unbegrenzte Custom Fields",
      "API-Zugang",
      "Team Collaboration (bis zu 10 Nutzer)",
      "Advanced Analytics",
    ],
    cta: "Trial starten",
    ctaHref: "/demo",
    ctaVariant: "primary",
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", yearly: "Custom" },
    description: "Für Organisationen, die Sicherheit & Kontrolle brauchen.",
    hook: "Für Organisationen, die Sicherheit & Kontrolle brauchen.",
    icon: Building2,
    features: [
      "Alles aus Growth",
      "SSO & SAML",
      "Audit Logs",
      "Dedicated Success Manager",
      "SLA-Garantie (99.9% Uptime)",
      "Custom Integrations",
      "Unbegrenzte Team-Mitglieder",
      "White-Label Option",
      "On-Premise Deployment (optional)",
    ],
    cta: "Sales kontaktieren",
    ctaHref: "/demo",
    ctaVariant: "outline",
  },
]

const comparisonFeatures = [
  {
    category: "Datenmodell",
    features: [
      { name: "Records", starter: "500", growth: "Unbegrenzt", enterprise: "Unbegrenzt" },
      { name: "Custom Fields", starter: "5", growth: "Unbegrenzt", enterprise: "Unbegrenzt" },
      { name: "Relationships", starter: "✓", growth: "✓", enterprise: "✓" },
      { name: "API-Zugang", starter: "—", growth: "✓", enterprise: "✓" },
    ],
  },
  {
    category: "Automation",
    features: [
      { name: "Basis Workflows", starter: "✓", growth: "✓", enterprise: "✓" },
      { name: "Advanced Workflows", starter: "—", growth: "✓", enterprise: "✓" },
      { name: "Conditional Logic", starter: "—", growth: "✓", enterprise: "✓" },
      { name: "Custom Integrations", starter: "—", growth: "—", enterprise: "✓" },
    ],
  },
  {
    category: "Security",
    features: [
      { name: "DSGVO/GDPR", starter: "✓", growth: "✓", enterprise: "✓" },
      { name: "SSO & SAML", starter: "—", growth: "—", enterprise: "✓" },
      { name: "Audit Logs", starter: "—", growth: "—", enterprise: "✓" },
      { name: "On-Premise", starter: "—", growth: "—", enterprise: "Optional" },
    ],
  },
  {
    category: "Support",
    features: [
      { name: "Community Support", starter: "✓", growth: "—", enterprise: "—" },
      { name: "Priority Support", starter: "—", growth: "✓", enterprise: "—" },
      { name: "Dedicated Manager", starter: "—", growth: "—", enterprise: "✓" },
      { name: "SLA-Garantie", starter: "—", growth: "—", enterprise: "✓" },
    ],
  },
]

const faqs = [
  {
    question: "Kann ich Intro KI selbst hosten?",
    answer:
      "Nein, Intro KI wird als SaaS-Lösung betrieben. Alle Daten werden auf Servern in Frankfurt (AWS eu-central-1) gehostet und sind DSGVO-konform. Für Enterprise-Kunden bieten wir optional eine On-Premise-Lösung an.",
  },
  {
    question: "Gibt es Rabatte für Startups?",
    answer:
      "Ja, wir bieten spezielle Startup-Programme mit reduzierten Preisen und zusätzlichen Benefits. Kontaktieren Sie uns für weitere Informationen über unser Startup-Programm.",
  },
  {
    question: "Was passiert, wenn ich mein Limit überschreite?",
    answer:
      "Bei Starter: Sie erhalten eine Benachrichtigung und können entweder upgraden oder einige Records archivieren. Bei Growth und Enterprise gibt es keine Limits.",
  },
  {
    question: "Kann ich jederzeit upgraden oder downgraden?",
    answer:
      "Ja, Sie können jederzeit zwischen den Plänen wechseln. Bei Upgrades wird der Unterschied anteilig berechnet. Bei Downgrades wird der Betrag als Gutschrift gutgeschrieben.",
  },
]

function PricingCard({
  tier,
  isYearly,
  index,
}: {
  tier: PricingTier
  isYearly: boolean
  index: number
}) {
  const [isHovered, setIsHovered] = React.useState(false)
  const Icon = tier.icon

  const displayPrice =
    tier.price.monthly === "Custom"
      ? "Custom"
      : isYearly
        ? tier.price.yearly === "Custom"
          ? "Custom"
          : tier.price.yearly
        : tier.price.monthly

  const pricePerMonth =
    tier.price.monthly !== "Custom" && isYearly && tier.price.yearly !== "Custom"
      ? Math.round(tier.price.yearly / 12)
      : tier.price.monthly !== "Custom"
        ? tier.price.monthly
        : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...ENTERPRISE_SPRING, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative bg-white border rounded-lg p-8 transition-all duration-200",
        tier.popular
          ? "border-gray-900 shadow-lg scale-105"
          : "border-gray-200 hover:border-gray-300 hover:shadow-md"
      )}
      whileHover={{ scale: tier.popular ? 1.05 : 1.02 }}
    >
      {tier.popular && tier.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-black text-white text-[12px] leading-[16px] tracking-[0.01em] font-medium px-3 py-1 rounded-full">
            {tier.badge}
          </span>
        </div>
      )}

      {/* Icon & Name */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
          <Icon className="h-5 w-5 text-gray-900" strokeWidth={1.5} />
        </div>
        <h3 className="text-[24px] leading-[32px] -tracking-[0.02em] font-medium text-gray-900">
          {tier.name}
        </h3>
      </div>

      {/* Hook */}
      <p className="text-[14px] leading-[20px] text-gray-500 mb-6">{tier.hook}</p>

      {/* Price */}
      <div className="mb-8">
        {displayPrice === "Custom" ? (
          <div className="text-[40px] leading-[48px] -tracking-[0.02em] font-medium text-gray-900">
            Custom
          </div>
        ) : (
          <>
            <div className="flex items-baseline gap-2">
              <span className="text-[40px] leading-[48px] -tracking-[0.02em] font-medium text-gray-900 tabular-nums">
                {displayPrice}€
              </span>
              {isYearly && pricePerMonth !== null && (
                <span className="text-[16px] leading-[24px] text-gray-500 tabular-nums">
                  / Monat
                </span>
              )}
            </div>
            {isYearly && pricePerMonth !== null && displayPrice !== pricePerMonth && (
              <p className="text-[14px] leading-[20px] text-gray-500 mt-1">
                Abgerechnet jährlich ({pricePerMonth}€/Monat)
              </p>
            )}
            {!isYearly && (
              <p className="text-[14px] leading-[20px] text-gray-500 mt-1">pro Monat</p>
            )}
          </>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {tier.features.map((feature, i) => (
          <motion.li
            key={i}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...ENTERPRISE_SPRING, delay: index * 0.1 + i * 0.03 }}
          >
            <CheckCircle2
              className={cn(
                "h-5 w-5 flex-shrink-0 mt-0.5",
                tier.popular ? "text-gray-900" : "text-gray-400"
              )}
              strokeWidth={1.5}
            />
            <span className="text-[16px] leading-[24px] text-gray-600">{feature}</span>
          </motion.li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        size="lg"
        variant={tier.ctaVariant === "primary" ? "default" : tier.ctaVariant}
        className={cn(
          "w-full rounded-md text-[16px] font-medium",
          tier.ctaVariant === "primary"
            ? "bg-black text-white hover:bg-gray-800"
            : tier.ctaVariant === "secondary"
              ? "bg-white border border-gray-200 text-gray-900 hover:bg-gray-50"
              : "bg-white border border-gray-200 text-gray-900 hover:bg-gray-50"
        )}
        asChild
      >
        <Link href={tier.ctaHref}>
          {tier.cta}
          <ArrowRight className="ml-2 h-5 w-5" strokeWidth={1.5} />
        </Link>
      </Button>
    </motion.div>
  )
}

function ComparisonTable() {
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-[20px] leading-[28px] -tracking-[0.01em] font-medium text-gray-900">
          Feature-Vergleich
        </h3>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-gray-500 transition-transform",
            isExpanded && "rotate-180"
          )}
          strokeWidth={1.5}
        />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={ENTERPRISE_SPRING}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0">
              {comparisonFeatures.map((category, categoryIndex) => (
                <div key={category.category} className={cn(categoryIndex > 0 && "mt-8")}>
                  <h4 className="text-[14px] leading-[20px] font-medium text-gray-900 mb-4 uppercase tracking-[0.05em]">
                    {category.category}
                  </h4>
                  <div className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <div
                        key={feature.name}
                        className="grid grid-cols-4 gap-4 py-3 border-b border-gray-100 last:border-0"
                      >
                        <div className="text-[14px] leading-[20px] text-gray-600">
                          {feature.name}
                        </div>
                        <div className="text-center text-[14px] leading-[20px] text-gray-900 font-medium">
                          {feature.starter === "✓" ? (
                            <Check className="h-5 w-5 text-green-600 mx-auto" strokeWidth={2} />
                          ) : feature.starter === "—" ? (
                            <X className="h-5 w-5 text-gray-300 mx-auto" strokeWidth={2} />
                          ) : (
                            feature.starter
                          )}
                        </div>
                        <div className="text-center text-[14px] leading-[20px] text-gray-900 font-medium">
                          {feature.growth === "✓" ? (
                            <Check className="h-5 w-5 text-green-600 mx-auto" strokeWidth={2} />
                          ) : feature.growth === "—" ? (
                            <X className="h-5 w-5 text-gray-300 mx-auto" strokeWidth={2} />
                          ) : (
                            feature.growth
                          )}
                        </div>
                        <div className="text-center text-[14px] leading-[20px] text-gray-900 font-medium">
                          {feature.enterprise === "✓" ? (
                            <Check className="h-5 w-5 text-green-600 mx-auto" strokeWidth={2} />
                          ) : feature.enterprise === "—" ? (
                            <X className="h-5 w-5 text-gray-300 mx-auto" strokeWidth={2} />
                          ) : (
                            feature.enterprise
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...ENTERPRISE_SPRING, delay: index * 0.1 }}
      className="border border-gray-200 rounded-lg overflow-hidden bg-white"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors text-left"
      >
        <h3 className="text-[18px] leading-[26px] -tracking-[0.01em] font-medium text-gray-900 pr-4">
          {question}
        </h3>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-gray-500 flex-shrink-0 transition-transform",
            isExpanded && "rotate-180"
          )}
          strokeWidth={1.5}
        />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={ENTERPRISE_SPRING}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-[16px] leading-[24px] text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function PricingPage() {
  const heroRef = React.useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

  const [isYearly, setIsYearly] = React.useState(false)

  return (
    <main className="min-h-screen bg-white attio-grid-pattern relative overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 md:py-32 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={ENTERPRISE_SPRING}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl leading-[1.1] tracking-tight font-medium text-gray-900 mb-6">
              Faire Preise, die mit Ihrem Erfolg skalieren.
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-8">
              Starten Sie kostenlos und upgraden Sie, wenn Ihr Prozess an Komplexität gewinnt.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span
                className={cn(
                  "text-[16px] leading-[24px] font-medium transition-colors",
                  !isYearly ? "text-gray-900" : "text-gray-400"
                )}
              >
                Monatlich
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={cn(
                  "relative w-14 h-8 rounded-full transition-colors",
                  isYearly ? "bg-black" : "bg-gray-200"
                )}
                role="switch"
                aria-checked={isYearly}
              >
                <motion.div
                  className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-sm"
                  animate={{ x: isYearly ? 24 : 0 }}
                  transition={ENTERPRISE_SPRING}
                />
              </button>
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "text-[16px] leading-[24px] font-medium transition-colors",
                    isYearly ? "text-gray-900" : "text-gray-400"
                  )}
                >
                  Jährlich
                </span>
                {isYearly && (
                  <span className="text-[12px] leading-[16px] tracking-[0.01em] font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">
                    -20%
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            {pricingTiers.map((tier, index) => (
              <PricingCard key={tier.name} tier={tier} isYearly={isYearly} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 md:py-32 border-b border-gray-200 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={ENTERPRISE_SPRING}
          >
            <ComparisonTable />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-[800px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={ENTERPRISE_SPRING}
            className="text-center mb-12"
          >
            <h2 className="text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-gray-900 mb-4">
              Häufige Fragen
            </h2>
            <p className="text-[16px] leading-[24px] text-gray-600">
              Noch Fragen? Kontaktieren Sie uns für weitere Informationen.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 border-t border-gray-200 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={ENTERPRISE_SPRING}
          >
            <h2 className="text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-gray-900 mb-4">
              Bereit, Excel abzuschalten?
            </h2>
            <p className="text-[16px] leading-[24px] text-gray-600 mb-8">
              Starten Sie kostenlos oder buchen Sie eine Demo, um zu sehen, wie Intro KI zu Ihrem Team passt.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 rounded-md px-6 py-3 text-[16px] font-medium"
                asChild
              >
                <Link href="/demo">
                  Demo buchen
                  <ArrowRight className="ml-2 h-5 w-5" strokeWidth={1.5} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 rounded-md px-6 py-3 text-[16px] font-medium"
                asChild
              >
                <Link href="/demo">Kostenlos starten</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}