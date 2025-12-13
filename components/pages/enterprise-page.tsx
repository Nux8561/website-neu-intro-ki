"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Shield, Users, Zap, Globe, Lock, HeadphonesIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const enterpriseFeatures = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SSO, SAML, 2FA, Audit Logs und Compliance mit GDPR, SOC 2 und ISO 27001.",
  },
  {
    icon: Users,
    title: "Dedicated Account Manager",
    description:
      "Persönlicher Ansprechpartner für strategische Beratung und Support.",
  },
  {
    icon: Zap,
    title: "Custom Integrations",
    description:
      "Maßgeschneiderte Integrationen mit Ihren bestehenden Systemen und Tools.",
  },
  {
    icon: Globe,
    title: "On-Premise Option",
    description:
      "Hosting in Ihrer eigenen Infrastruktur für maximale Kontrolle und Compliance.",
  },
  {
    icon: Lock,
    title: "Advanced Permissions",
    description:
      "Granulare Berechtigungen und Rollen für komplexe Organisationsstrukturen.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Priority Support",
    description:
      "Rund-um-die-Uhr Support mit garantierten Response-Zeiten und SLA.",
  },
]

export function EnterprisePage() {
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-border-subtle">
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
                Enterprise
              </Badge>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-jakarta font-medium tracking-tight text-text-primary mb-6"
            >
              Enterprise-Lösungen
              <br />
              für große Organisationen
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-text-secondary font-inter mb-8 max-w-2xl mx-auto"
            >
              Maßgeschneiderte CRM-Lösungen mit Enterprise-Security, Custom
              Integrations und dediziertem Support.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-8"
                asChild
              >
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border-active text-text-primary hover:bg-surface rounded-full px-8"
                asChild
              >
                <Link href="/pricing">Preise ansehen</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {enterpriseFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  className="bg-surface border border-border-subtle rounded-2xl p-8 hover:bg-white/10 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-surface border border-border-subtle w-fit mb-4">
                    <Icon className="h-6 w-6 text-text-secondary" />
                  </div>
                  <h3 className="text-xl font-jakarta font-medium tracking-tight text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary font-inter text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center bg-surface border border-border-subtle rounded-2xl p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
          >
            <h2 className="text-3xl md:text-4xl font-jakarta font-medium tracking-tight text-text-primary mb-4">
              Bereit für Enterprise?
            </h2>
            <p className="text-text-secondary font-inter mb-8">
              Lassen Sie uns gemeinsam die perfekte Lösung für Ihr Unternehmen
              entwickeln.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-8"
              asChild
            >
              <Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

