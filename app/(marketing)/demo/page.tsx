"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import Link from "next/link"
import { Calendar, CheckCircle2, Clock, Zap, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ENTERPRISE_SPRING } from "@/lib/animations"
import { cn } from "@/lib/utils"

/**
 * Demo Booking Page - High-Velocity Conversion Funnel
 * 
 * Strategy (from Research Report):
 * 1. Frictionless Form: Only Email & Intent
 * 2. Instant Scheduling: Calendar immediately after qualification
 * 3. No Dead Ends: Fallback for Trial
 */

const demoBenefits = [
  {
    icon: Zap,
    title: "Live-Demo in 15 Minuten",
    description: "Wir zeigen Ihnen, wie Intro KI Ihre Excel-Listen ersetzt und Ihnen sagt, was zu tun ist.",
  },
  {
    icon: CheckCircle2,
    title: "Angepasst an Ihr Geschäftsmodell",
    description: "Keine generische Präsentation. Wir passen die Demo an Ihre spezifischen Prozesse an.",
  },
  {
    icon: Clock,
    title: "Sofortige Qualifizierung",
    description: "Nach der Demo wissen Sie genau, ob Intro KI zu Ihrem Team passt. Keine Wartezeit.",
  },
]

const intentOptions = [
  { value: "evaluation", label: "Produkt evaluieren" },
  { value: "replacement", label: "Excel/Tool ersetzen" },
  { value: "automation", label: "Workflows automatisieren" },
  { value: "enterprise", label: "Enterprise-Lösung" },
  { value: "other", label: "Anderes Anliegen" },
]

export default function DemoPage() {
  const heroRef = React.useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

  const [email, setEmail] = React.useState("")
  const [intent, setIntent] = React.useState("")
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Basic validation
    if (!email || !intent) {
      return
    }

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-white attio-grid-pattern relative overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-24 md:py-32 border-b border-gray-200"
      >
        <div className="max-w-[1400px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={ENTERPRISE_SPRING}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl leading-[1.1] tracking-tight font-medium text-gray-900 mb-6">
              Demo buchen
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Erleben Sie, wie Intro KI Ihr Team von Excel-Tabellen befreit und Ihnen täglich sagt, was zu tun ist.
            </p>
          </motion.div>

          {/* Split Screen Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: What to Expect */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ ...ENTERPRISE_SPRING, delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-gray-900 mb-4">
                  Was Sie in der Demo erwartet
                </h2>
                <p className="text-[16px] leading-[24px] text-gray-600 mb-8">
                  In 15 Minuten zeigen wir Ihnen, wie Intro KI zu Ihrem Geschäftsmodell passt und welche Vorteile es für Ihr Team bringt.
                </p>
              </div>

              <div className="space-y-6">
                {demoBenefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ ...ENTERPRISE_SPRING, delay: 0.2 + index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-gray-900" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[20px] leading-[28px] -tracking-[0.01em] font-medium text-gray-900 mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-[16px] leading-[24px] text-gray-600">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Right: Booking Form / Calendar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ ...ENTERPRISE_SPRING, delay: 0.2 }}
              className="lg:sticky lg:top-24"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={ENTERPRISE_SPRING}
                    className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm"
                  >
                    <div className="mb-8">
                      <h2 className="text-[24px] leading-[32px] -tracking-[0.02em] font-medium text-gray-900 mb-2">
                        Demo-Termin vereinbaren
                      </h2>
                      <p className="text-[14px] leading-[20px] text-gray-500">
                        Nur 2 Felder. Keine Wartezeit.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Email Input */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-[14px] font-medium text-gray-700 mb-2"
                        >
                          E-Mail-Adresse
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="ihre@email.de"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          size="lg"
                          className="w-full bg-white border-gray-200 focus:border-gray-400 focus:ring-gray-400"
                        />
                      </div>

                      {/* Intent Select */}
                      <div>
                        <label
                          htmlFor="intent"
                          className="block text-[14px] font-medium text-gray-700 mb-2"
                        >
                          Ihr Anliegen
                        </label>
                        <select
                          id="intent"
                          value={intent}
                          onChange={(e) => setIntent(e.target.value)}
                          required
                          className={cn(
                            "w-full h-12 px-4 rounded-md border border-gray-200",
                            "bg-white text-gray-900 text-[16px]",
                            "focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent",
                            "transition-all duration-200",
                            "appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23666%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Cpath d=%22M6 9l6 6 6-6%22/%3E%3C/svg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-10"
                          )}
                        >
                          <option value="">Bitte wählen...</option>
                          {intentOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isLoading || !email || !intent}
                        size="lg"
                        className="w-full bg-black text-white hover:bg-gray-800 rounded-md h-12 text-[16px] font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        {isLoading ? (
                          <span className="flex items-center justify-center gap-2">
                            <motion.div
                              className="h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            Wird gesendet...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            Termin buchen
                            <ArrowRight className="h-5 w-5" />
                          </span>
                        )}
                      </Button>

                      <p className="text-[12px] leading-[16px] text-gray-500 text-center">
                        Durch das Absenden stimmen Sie unseren{" "}
                        <Link href="/datenschutz" className="text-gray-900 underline hover:text-gray-700">
                          Datenschutzbestimmungen
                        </Link>{" "}
                        zu.
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="calendar"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={ENTERPRISE_SPRING}
                    className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm"
                  >
                    <div className="text-center mb-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ ...ENTERPRISE_SPRING, delay: 0.2 }}
                        className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4"
                      >
                        <CheckCircle2 className="h-8 w-8 text-green-600" strokeWidth={1.5} />
                      </motion.div>
                      <h2 className="text-[24px] leading-[32px] -tracking-[0.02em] font-medium text-gray-900 mb-2">
                        Fast geschafft!
                      </h2>
                      <p className="text-[16px] leading-[24px] text-gray-600">
                        Wählen Sie einen passenden Termin aus:
                      </p>
                    </div>

                    {/* Calendar Placeholder */}
                    <div className="border border-gray-200 rounded-lg p-8 bg-gray-50 min-h-[400px] flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <Calendar className="h-12 w-12 text-gray-400 mx-auto" strokeWidth={1.5} />
                        <div>
                          <p className="text-[16px] leading-[24px] font-medium text-gray-900 mb-2">
                            Kalender-Integration
                          </p>
                          <p className="text-[14px] leading-[20px] text-gray-500 max-w-xs mx-auto">
                            Hier wird die Kalender-Integration (z. B. Calendly, Cal.com) eingebunden.
                          </p>
                        </div>
                        <Button
                          asChild
                          size="lg"
                          className="bg-black text-white hover:bg-gray-800 rounded-md"
                        >
                          <Link href="/kontakt">
                            Alternative: Kontakt aufnehmen
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Fallback CTA */}
                    <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">
                      <p className="text-[14px] leading-[20px] text-gray-600 text-center">
                        Kein passender Termin?{" "}
                        <Link href="/kontakt" className="text-gray-900 font-medium underline hover:text-gray-700">
                          Kontaktieren Sie uns direkt
                        </Link>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 md:py-32 border-b border-gray-200 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={ENTERPRISE_SPRING}
            className="text-center"
          >
            <h2 className="text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-gray-900 mb-4">
              Keine Verpflichtungen. Nur Ergebnisse.
            </h2>
            <p className="text-[16px] leading-[24px] text-gray-600 max-w-2xl mx-auto mb-8">
              Die Demo ist kostenlos und unverbindlich. Nach 15 Minuten wissen Sie genau, ob Intro KI zu Ihrem Team passt.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-[14px] leading-[20px] text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" strokeWidth={1.5} />
                <span>Kostenlos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" strokeWidth={1.5} />
                <span>Unverbindlich</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" strokeWidth={1.5} />
                <span>15 Minuten</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" strokeWidth={1.5} />
                <span>Angepasst an Ihr Team</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
