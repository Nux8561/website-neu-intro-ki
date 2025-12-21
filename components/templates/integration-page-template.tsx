"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Zap, Shield, Link2 } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { ENTERPRISE_SPRING, snappySpring } from "@/lib/animations"
import { MagneticButton } from "@/components/ui/magnetic-button"

interface IntegrationPageProps {
  name: string
  description: string
  icon?: React.ReactNode
  features: string[]
  benefits: Array<{ title: string; description: string }>
  setupSteps?: Array<{ step: number; title: string; description: string }>
  ctaText?: string
  ctaHref?: string
}

export function IntegrationPageTemplate({
  name,
  description,
  icon,
  features,
  benefits,
  setupSteps,
  ctaText = "Jetzt integrieren",
  ctaHref = "/demo",
}: IntegrationPageProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title={`${name} Integration`}
        description={description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Integrations", href: "/integrations" },
          { label: name, href: `#` },
        ]}
      />

      {/* Features Section */}
      <section ref={ref} className="py-32 md:py-48 border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...snappySpring, delay: 0.2 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-black md:text-[48px] md:leading-[56px] font-space-grotesk">
              Was du bekommst
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...snappySpring, delay: 0.3 + index * 0.1 }}
                className="rounded-2xl border-2 border-black/10 bg-white/50 backdrop-blur-xl p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.15)] transition-all"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-base text-black/80 font-inter leading-relaxed">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 md:py-48 border-b-2 border-black bg-gradient-to-br from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...snappySpring, delay: 0.2 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-black md:text-[48px] md:leading-[56px] font-space-grotesk">
              Vorteile
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...snappySpring, delay: 0.3 + index * 0.1 }}
                className="rounded-2xl border-2 border-black/10 bg-white/50 backdrop-blur-xl p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)]"
              >
                <h3 className="mb-3 text-xl font-space-grotesk font-semibold text-black">
                  {benefit.title}
                </h3>
                <p className="text-base text-black/80 font-inter leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Steps (if provided) */}
      {setupSteps && setupSteps.length > 0 && (
        <section className="py-32 md:py-48 border-b-2 border-black">
          <div className="mx-auto max-w-7xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...snappySpring, delay: 0.2 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-6 text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-black md:text-[48px] md:leading-[56px] font-space-grotesk">
                So einfach geht&apos;s
              </h2>
            </motion.div>

            <div className="space-y-6">
              {setupSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...snappySpring, delay: 0.3 + index * 0.1 }}
                  className="flex gap-6 rounded-2xl border-2 border-black/10 bg-white/50 backdrop-blur-xl p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white font-mono font-bold text-lg flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-space-grotesk font-semibold text-black">
                      {step.title}
                    </h3>
                    <p className="text-base text-black/80 font-inter leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-32 md:py-48 bg-black">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...snappySpring, delay: 0.2 }}
          >
            <h2 className="mb-6 text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-white md:text-[48px] md:leading-[56px] font-space-grotesk">
              Bereit für die Integration?
            </h2>
            <p className="mb-8 text-xl text-white/80 font-inter leading-relaxed">
              Starte jetzt mit {name} und steigere deine Produktivität.
            </p>
            <Link href={ctaHref}>
              <MagneticButton
                variant="primary"
                className="bg-white text-black hover:bg-white/90 shadow-[8px_8px_0_0_rgba(255,255,255,0.2)]"
              >
                {ctaText}
                <ArrowRight className="ml-3 h-5 w-5" />
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

