"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Handshake, TrendingUp, Users, Gift } from "lucide-react"
import { LogoCarousel, LogoItem } from "@/components/ui/logo-carousel"

const partnerTypes = [
  { icon: Users, title: "Integration Partner", description: "Integriere IntroKI in deine Plattform und biete deinen Kunden mehr Wert." },
  { icon: Handshake, title: "Reseller Partner", description: "Verkaufe IntroKI an deine Kunden und verdiene Provisionen." },
  { icon: TrendingUp, title: "Technology Partner", description: "Arbeite mit uns zusammen, um innovative Lösungen zu entwickeln." },
]

const benefits = [
  "Hohe Provisionen",
  "Marketing-Unterstützung",
  "Dedizierter Partner-Support",
  "Co-Marketing-Möglichkeiten",
  "Early-Access zu Features",
  "Partner-Portal",
]

const partnerLogos: LogoItem[] = [
  {
    name: "Salesforce",
    imagePath: "/logos/salesforce.svg",
    fallbackSvg: (
      <svg viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M15.5 7.5C15.5 11.6 12.1 15 8 15C3.9 15 0.5 11.6 0.5 7.5C0.5 3.4 3.9 0 8 0C12.1 0 15.5 3.4 15.5 7.5Z" fill="#00A1E0"/>
        <text x="20" y="18" fontSize="12" fill="#00A1E0" fontFamily="Arial, sans-serif" fontWeight="bold">Salesforce</text>
      </svg>
    ),
    width: 140,
    height: 35,
  },
  {
    name: "HubSpot",
    imagePath: "/logos/hubspot.svg",
    fallbackSvg: (
      <svg viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="15" cy="15" r="12" fill="#FF7A59"/>
        <text x="30" y="18" fontSize="14" fill="#FF7A59" fontFamily="Arial, sans-serif" fontWeight="bold">HubSpot</text>
      </svg>
    ),
    width: 120,
    height: 30,
  },
  {
    name: "Zapier",
    imagePath: "/logos/zapier.svg",
    fallbackSvg: (
      <svg viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="15" cy="15" r="10" fill="#FF4A00"/>
        <text x="30" y="18" fontSize="14" fill="#FF4A00" fontFamily="Arial, sans-serif" fontWeight="600">Zapier</text>
      </svg>
    ),
    width: 100,
    height: 30,
  },
  {
    name: "Slack",
    imagePath: "/logos/slack.svg",
    fallbackSvg: (
      <svg viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M8 8C8 10.2 6.2 12 4 12C1.8 12 0 10.2 0 8C0 5.8 1.8 4 4 4H8V8Z" fill="#36C5F0"/>
        <text x="25" y="18" fontSize="14" fill="#4A154B" fontFamily="Arial, sans-serif" fontWeight="bold">Slack</text>
      </svg>
    ),
    width: 100,
    height: 30,
  },
  {
    name: "Microsoft",
    imagePath: "/logos/microsoft.svg",
    fallbackSvg: (
      <svg viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="0" y="0" width="12" height="12" fill="#F25022"/>
        <rect x="13" y="0" width="12" height="12" fill="#7FBA00"/>
        <rect x="0" y="13" width="12" height="12" fill="#00A4EF"/>
        <rect x="13" y="13" width="12" height="12" fill="#FFB900"/>
        <text x="30" y="18" fontSize="12" fill="#737373" fontFamily="Arial, sans-serif" fontWeight="600">Microsoft</text>
      </svg>
    ),
    width: 130,
    height: 30,
  },
]

export default function PartnersPage() {
  const heroRef = React.useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-background">
      <section ref={heroRef} className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-jakarta font-medium tracking-tight text-text-primary mb-6">
              Partner werden
            </h1>
            <p className="text-xl text-text-secondary font-inter mb-12 max-w-3xl mx-auto">
              Werde Partner von IntroKI und biete deinen Kunden die beste Sales-Intelligence-Plattform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-text-primary text-white hover:bg-text-primary/90 font-semibold rounded-full px-8 py-6">
                Partner werden <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-border-active text-text-primary rounded-full px-8 py-6">
                Mehr erfahren
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {partnerTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl border border-border-subtle bg-white/50 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-jakarta font-semibold mb-2">{type.title}</h3>
                  <p className="text-text-secondary font-inter">{type.description}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-jakarta font-medium mb-12 text-center">Partner-Vorteile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-border-subtle"
                >
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="font-inter text-text-secondary">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 border-y border-border-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <LogoCarousel
            logos={partnerLogos}
            title="Unsere Partner"
            speed={35}
            speedOnHover={15}
            gap={100}
            grayscale={true}
            showTitle={true}
          />
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-jakarta font-medium mb-8">Bereit Partner zu werden?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-text-primary text-white rounded-full px-8 py-6">
                Partner werden <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-border-active rounded-full px-8 py-6">
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
