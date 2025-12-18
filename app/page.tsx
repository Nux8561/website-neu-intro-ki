"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/sections/footer"
import { CookieConsent } from "@/components/ui/cookie-consent"
import { HeroSimulation } from "@/components/hero-simulation"
import { RichFeatureCard } from "@/components/feature-card-rich"
import {
  ExcelChaosVisualization,
  SearchVisualization,
  AutomationVisualization,
  DashboardPreviewVisualization,
} from "@/components/ui/why-section-visualizations"
import { 
  ArrowRight, 
  Shield, 
  GitBranch, 
  Database, 
  CheckCircle2
} from "lucide-react"
import { ENTERPRISE_SPRING } from "@/lib/animations"

export default function Home() {
  const heroRef = React.useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

  const socialProofRef = React.useRef(null)
  const socialProofInView = useInView(socialProofRef, { once: true, margin: "-100px" })

  const whyRef = React.useRef(null)
  const whyInView = useInView(whyRef, { once: true, margin: "-100px" })

  const productHubRef = React.useRef(null)
  const productHubInView = useInView(productHubRef, { once: true, margin: "-100px" })

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

  return (
    <>
      <Navbar />
      {/* Globales Grid-Pattern für die gesamte Seite - zeigt Automatisierung und Verbindung */}
      <main className="min-h-screen bg-background relative overflow-x-hidden w-full attio-grid-pattern">
        {/* Hero Section */}
        <section ref={heroRef} className="py-24 md:py-32 border-b border-gray-200">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Content (Left) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={ENTERPRISE_SPRING}
              >
                <h1 className="text-5xl md:text-6xl leading-[1.1] tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 mb-6">
                  Das CRM, das Ihnen sagt, was zu tun ist.
                </h1>
                <p className="text-xl text-gray-500 max-w-2xl leading-relaxed mb-8">
                  Verabschieden Sie sich von passiven Datenfriedhöfen. Intro KI analysiert Ihre Pipeline und liefert proaktive Handlungsempfehlungen, damit Sie Excel endlich abschalten können.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link
                    href="/demo"
                    className="inline-flex items-center justify-center bg-black text-white hover:bg-gray-800 rounded-md px-6 py-3 text-sm font-medium transition-all duration-attio ease-attio-ease-out hover:scale-[1.02]"
                  >
                    Demo buchen
                  </Link>
                  <Link
                    href="/developers"
                    className="inline-flex items-center justify-center bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 rounded-md px-6 py-3 text-sm font-medium transition-all duration-attio ease-attio-ease-out"
                  >
                    Dokumentation
                  </Link>
                </div>
              </motion.div>

              {/* Hero Simulation (Right) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ ...ENTERPRISE_SPRING, delay: 0.2 }}
                className="relative"
              >
                <HeroSimulation />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section ref={socialProofRef} className="py-12 md:py-16 border-b border-gray-200 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={socialProofInView ? { opacity: 1 } : { opacity: 0 }}
              transition={ENTERPRISE_SPRING}
              className="text-center"
            >
              <p className="text-sm text-gray-500 mb-8">
                Vertraut von modernen Vertriebsteams
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {customerLogos.map((logo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={socialProofInView ? { opacity: 0.5 } : { opacity: 0 }}
                    transition={{ ...ENTERPRISE_SPRING, delay: index * 0.1 }}
                    className="h-8 md:h-10 w-auto grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-attio"
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
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* The "Why" Section - Problem/Solution */}
        <section ref={whyRef} className="py-24 md:py-32 border-b border-gray-200">
          <div className="max-w-[1200px] mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={ENTERPRISE_SPRING}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl tracking-tight font-medium text-gray-900 mb-6">
                Die Flexibilität von Excel. Die Führung eines Enterprise-Systems.
              </h2>
              <p className="text-[16px] leading-[24px] text-gray-600">
                Warum nutzen Teams Excel? Weil es flexibel ist. Warum hassen Chefs Excel? Weil es unübersichtlich ist. IntroKI vereint beides: Bauen Sie Ihr System so, wie Sie Geld verdienen – ohne die Kontrolle zu verlieren.
              </p>
            </motion.div>

            {/* Grid: Problem -> Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Problem Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={whyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ ...ENTERPRISE_SPRING, delay: 0.2 }}
                className="p-8 rounded-lg bg-white/50 backdrop-blur-xl border border-white/60 shadow-attio-diffuse flex flex-col"
              >
                {/* Fake UI Visualization - Top */}
                <div className="mb-6">
                  <ExcelChaosVisualization />
                </div>
                <div className="mb-4">
                  <SearchVisualization />
                </div>

                {/* Text Content - Bottom */}
                <h3 className="text-[20px] leading-[28px] -tracking-[0.01em] font-medium text-gray-900 mb-4">
                  Das Problem: &ldquo;Suchen&rdquo; statt &ldquo;Finden&rdquo;
                </h3>
                <ul className="space-y-2.5">
                  <li className="text-[16px] leading-[24px] text-gray-600">
                    Mitarbeiter suchen stundenlang in Excel-Tabellen
                  </li>
                  <li className="text-[16px] leading-[24px] text-gray-600">
                    Chefs verwalten statt zu automatisieren
                  </li>
                  <li className="text-[16px] leading-[24px] text-gray-600">
                    Passive Datenspeicherung statt aktiver Führung
                  </li>
                </ul>
              </motion.div>

              {/* Solution Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={whyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ ...ENTERPRISE_SPRING, delay: 0.3 }}
                className="p-8 rounded-lg bg-white/50 backdrop-blur-xl border border-white/60 shadow-attio-diffuse flex flex-col"
              >
                {/* Fake UI Visualization - Top */}
                <div className="mb-6">
                  <DashboardPreviewVisualization />
                </div>
                <div className="mb-4">
                  <AutomationVisualization />
                </div>

                {/* Text Content - Bottom */}
                <h3 className="text-[20px] leading-[28px] -tracking-[0.01em] font-medium text-gray-900 mb-4">
                  Die Lösung: &ldquo;Finden&rdquo; und &ldquo;Automatisieren&rdquo;
                </h3>
                <ul className="space-y-2.5">
                  <li className="text-[16px] leading-[24px] text-gray-600">
                    IntroKI findet automatisch, was zu tun ist
                  </li>
                  <li className="text-[16px] leading-[24px] text-gray-600">
                    Automatisierung ersetzt manuelle Verwaltung
                  </li>
                  <li className="text-[16px] leading-[24px] text-gray-600">
                    Proaktive Führung statt passiver Datensammlung
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Hub - Bento Grid */}
        <section ref={productHubRef} className="py-24 md:py-32 border-b border-gray-200 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={productHubInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={ENTERPRISE_SPRING}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl tracking-tight font-medium text-gray-900 mb-4">
                Die Säulen von IntroKI
              </h2>
              <p className="text-[16px] leading-[24px] text-gray-600 max-w-2xl mx-auto">
                Entdecken Sie, wie IntroKI die Flexibilität von Excel mit der Struktur eines Enterprise-Systems vereint.
              </p>
            </motion.div>

            {/* Bento Grid - Rich Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <RichFeatureCard
                title="Datenmodell"
                description="Bauen Sie Ihr System so, wie Sie Geld verdienen."
                href="/product/data-model"
                size="large"
                variant="data-model"
                index={0}
                isInView={productHubInView}
              />
              <RichFeatureCard
                title="Workflows"
                description="Automatisierung ohne Code."
                href="/product/workflows"
                size="small"
                variant="workflows"
                index={1}
                isInView={productHubInView}
              />
              <RichFeatureCard
                title="Security"
                description="SOC2 & DSGVO bereit."
                href="/security"
                size="small"
                variant="security"
                index={2}
                isInView={productHubInView}
              />
              <RichFeatureCard
                title="API Sync"
                description="Echtzeit-Synchronisation mit Ihren Tools."
                href="/product/api"
                size="small"
                variant="api-sync"
                index={3}
                isInView={productHubInView}
              />
              <RichFeatureCard
                title="Audit Logs"
                description="Vollständige Transparenz über alle Aktivitäten."
                href="/product/audit"
                size="small"
                variant="audit-logs"
                index={4}
                isInView={productHubInView}
              />
              <RichFeatureCard
                title="Permissions"
                description="Granulare Berechtigungen für jedes Team."
                href="/product/permissions"
                size="small"
                variant="permissions"
                index={5}
                isInView={productHubInView}
              />
              <RichFeatureCard
                title="Integrations"
                description="Verbinden Sie IntroKI mit Ihrer Tech-Stack."
                href="/integrations"
                size="small"
                variant="integrations"
                index={6}
                isInView={productHubInView}
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section ref={ctaRef} className="py-24 md:py-32">
          <div className="max-w-[1200px] mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={ENTERPRISE_SPRING}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl tracking-tight font-medium text-gray-900 mb-4">
                Bereit für den digitalen Wandel?
              </h2>
              <p className="text-[16px] leading-[24px] text-gray-600 mb-8 max-w-2xl mx-auto">
                Ersetzen Sie Ihre Schatten-Tabellen durch ein System, das Ihr Team liebt.
              </p>
              <Link
                href="/demo"
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
