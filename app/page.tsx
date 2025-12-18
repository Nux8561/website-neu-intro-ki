"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/sections/footer"
import { CookieConsent } from "@/components/ui/cookie-consent"
import { Database, Workflow, Target, ArrowRight, CheckCircle2 } from "lucide-react"

// Attio Spring Physics
const attioTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 17,
}

export default function Home() {
  const heroRef = React.useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

  const valuePropRef = React.useRef(null)
  const valuePropInView = useInView(valuePropRef, { once: true, margin: "-100px" })

  const featuresRef = React.useRef(null)
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" })

  const ctaRef = React.useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  // Customer Logos (grayscale, opacity-50)
  const customerLogos = [
    { name: "Stripe", logo: "/logos/stripe.svg" },
    { name: "Linear", logo: "/logos/linear.svg" },
    { name: "Notion", logo: "/logos/notion.svg" },
    { name: "Slack", logo: "/logos/slack.svg" },
    { name: "HubSpot", logo: "/logos/hubspot.svg" },
  ]

  // Feature Preview Items
  const featureItems = [
    {
      icon: Database,
      title: "Datenmodell",
      description: "Flexibel wie eine Tabelle.",
      link: "/product/data-model",
      items: [
        "Passt sich Ihrem Prozess an",
        "Keine starren CRM-Strukturen",
        "Importieren Sie Ihre Excel-Logik",
      ],
    },
    {
      icon: Workflow,
      title: "Workflows",
      description: "Automatisierung, die sich natürlich anfühlt.",
      link: "/product/workflows",
      items: [
        "Einfacher als Excel",
        "Keine technischen Kenntnisse nötig",
        "Sofortiger Mehrwert",
      ],
    },
    {
      icon: Target,
      title: "Führung",
      description: "Tägliche Briefings statt Listen-Suchen.",
      link: "/product/priorities",
      items: [
        "Morgenbriefing mit Prioritäten",
        "Keine Tabellensuchen mehr",
        "Proaktive Steuerung",
      ],
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-24 md:py-32 border-b border-gray-200">
          <div className="max-w-[1200px] mx-auto px-4">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={attioTransition}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl leading-[1.1] tracking-tight font-medium text-gray-900 mb-6">
                Das CRM, das Ihnen sagt, was zu tun ist.
              </h1>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-8">
                Verabschieden Sie sich von passiven Datenfriedhöfen und Excel-Chaos. IntroKI passt sich Ihrem Geschäftsmodell an und führt Ihr Team proaktiv durch den Tag.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-black text-white hover:bg-gray-800 rounded-md px-6 py-3 text-sm font-medium transition-all duration-attio ease-attio-ease-out hover:scale-[1.02]"
                >
                  Demo buchen
                </Link>
                <Link
                  href="/developers"
                  className="inline-flex items-center justify-center bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 rounded-md px-6 py-3 text-sm font-medium transition-all duration-attio ease-attio-ease-out"
                >
                  Dokumentation ansehen
                </Link>
              </div>

              {/* Hero Visual - Daily Briefing Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ ...attioTransition, delay: 0.2 }}
                className="relative w-full h-[400px] md:h-[500px] rounded-lg border border-gray-200 bg-gray-50 overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" strokeWidth={1.5} />
                    <p className="text-sm text-gray-500">Tägliches Briefing Vorschau</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Social Proof - Trusted By */}
        <section className="py-12 md:py-16 border-b border-gray-200 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={attioTransition}
              className="text-center"
            >
              <p className="text-sm text-gray-500 mb-8">
                Vertraut von modernen Vertriebsteams
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {customerLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="h-8 md:h-10 w-auto opacity-50 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-attio"
                  >
                    {logo.logo ? (
                      <Image
                        src={logo.logo}
                        alt={logo.name}
                        width={120}
                        height={40}
                        className="h-full w-auto object-contain"
                      />
                    ) : (
                      <div className="h-full w-24 bg-gray-300 rounded" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section ref={valuePropRef} className="py-24 md:py-32 border-b border-gray-200">
          <div className="max-w-[1200px] mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuePropInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={attioTransition}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-gray-900 mb-6">
                Die Flexibilität von Excel. Die Struktur eines Enterprise-Systems.
              </h2>
              <p className="text-[16px] leading-[24px] text-gray-600 mb-8">
                Warum nutzen Teams Excel? Weil es flexibel ist. Warum hassen Chefs Excel? Weil es unübersichtlich ist. IntroKI vereint beides: Bauen Sie Ihr System so, wie Sie Geld verdienen – ohne die Kontrolle zu verlieren.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-12">
                <div className="p-6 border border-gray-200 rounded-lg bg-white">
                  <h3 className="text-[20px] leading-[28px] -tracking-[0.01em] font-medium text-gray-900 mb-3">
                    Die Excel-Flexibilität
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-[16px] leading-[24px] text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <span>Passt sich Ihrem Prozess an, nicht umgekehrt</span>
                    </li>
                    <li className="flex items-start gap-3 text-[16px] leading-[24px] text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <span>Keine starren Strukturen oder Limitierungen</span>
                    </li>
                    <li className="flex items-start gap-3 text-[16px] leading-[24px] text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <span>Importieren Sie bestehende Excel-Logik</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 border border-gray-200 rounded-lg bg-white">
                  <h3 className="text-[20px] leading-[28px] -tracking-[0.01em] font-medium text-gray-900 mb-3">
                    Enterprise-Struktur
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-[16px] leading-[24px] text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <span>Vollständige Übersicht und Transparenz</span>
                    </li>
                    <li className="flex items-start gap-3 text-[16px] leading-[24px] text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <span>Automatisierte Workflows und Prozesse</span>
                    </li>
                    <li className="flex items-start gap-3 text-[16px] leading-[24px] text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <span>Proaktive Führung statt passive Datenspeicherung</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Preview - Bento Grid */}
        <section ref={featuresRef} className="py-24 md:py-32 border-b border-gray-200 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={attioTransition}
              className="mb-12 text-center"
            >
              <h2 className="text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-gray-900 mb-4">
                Die drei Säulen von IntroKI
              </h2>
              <p className="text-[16px] leading-[24px] text-gray-600 max-w-2xl mx-auto">
                Entdecken Sie, wie IntroKI die Flexibilität von Excel mit der Struktur eines Enterprise-Systems vereint.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {featureItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ ...attioTransition, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.link}
                      className="block p-6 md:p-8 border border-gray-200 rounded-lg bg-white hover:border-gray-300 transition-colors duration-attio h-full"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-[20px] leading-[28px] -tracking-[0.01em] font-medium text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[16px] leading-[24px] text-gray-600 mb-4">
                        {item.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {item.items.map((listItem, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-[14px] leading-[20px] text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                            <span>{listItem}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center text-[14px] font-medium text-gray-900 hover:text-gray-700 transition-colors">
                        Mehr erfahren
                        <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section ref={ctaRef} className="py-24 md:py-32">
          <div className="max-w-[1200px] mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={attioTransition}
              className="text-center"
            >
              <h2 className="text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-gray-900 mb-4">
                Bereit für den digitalen Wandel?
              </h2>
              <p className="text-[16px] leading-[24px] text-gray-600 mb-8 max-w-2xl mx-auto">
                Ersetzen Sie Ihre Schatten-Tabellen durch ein System, das Ihr Team liebt.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-black text-white hover:bg-gray-800 rounded-md px-8 py-3.5 text-sm font-medium transition-all duration-attio ease-attio-ease-out hover:scale-[1.02]"
              >
                Demo buchen
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}
