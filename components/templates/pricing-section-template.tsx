/**
 * Pricing Section Template
 * Beispiel-Komponente für neue Sections im Attio-Style
 * Nutze dies als Vorlage für Pricing, About, Blog, etc.
 */

"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { AttioSection, AttioContainer } from "@/components/providers/attio-theme-provider"
import { AttioTypography, AttioButton } from "@/components/providers/attio-theme-provider"
import { FeatureIcon } from "@/components/ui/feature-icon"
import { TiltedCardVisual } from "@/components/ui/tilted-card-visual"
import { snappySpring, snappyStaggerContainer, snappyStaggerItem } from "@/lib/animations"
import { Check, Zap, Users, Building2 } from "lucide-react"

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  icon: typeof Check
  color: "blue" | "purple" | "green" | "orange"
  popular?: boolean
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for individuals",
    features: [
      "Up to 100 contacts",
      "Basic automation",
      "Email support",
      "API access",
    ],
    icon: Zap,
    color: "blue",
  },
  {
    name: "Professional",
    price: "$99",
    description: "For growing teams",
    features: [
      "Unlimited contacts",
      "Advanced automation",
      "Priority support",
      "Custom integrations",
      "Team collaboration",
    ],
    icon: Users,
    color: "purple",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Professional",
      "Dedicated support",
      "Custom SLA",
      "On-premise deployment",
      "Advanced security",
    ],
    icon: Building2,
    color: "green",
  },
]

export function PricingSection() {
  return (
    <AttioSection variant="spacious" background="white">
      <AttioContainer size="xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={snappySpring}
          className="text-center mb-16"
        >
          <h1 className={AttioTypography.h1}>
            Simple, Transparent Pricing
          </h1>
          <p className={AttioTypography.body + " mt-4 max-w-2xl mx-auto"}>
            Choose the plan that fits your needs. All plans include our core features.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={snappyStaggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              variants={snappyStaggerItem}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={snappySpring}
              className={`
                relative p-8 bg-white border border-attio-subtle rounded-xl
                ${tier.popular ? "border-2 border-purple-300 shadow-attio-card-hover" : "shadow-attio-card"}
                hover:shadow-attio-card-hover
                transition-all duration-attio ease-attio-ease-out
              `}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-purple-500 text-white text-xs font-inter font-medium rounded-full">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className="mb-6">
                <FeatureIcon icon={tier.icon} size="lg" color={tier.color} />
              </div>

              {/* Title & Price */}
              <h3 className={AttioTypography.h3 + " mb-2"}>{tier.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-inter-display font-bold text-attio-text">
                  {tier.price}
                </span>
                {tier.price !== "Custom" && (
                  <span className="text-gray-500 font-inter">/month</span>
                )}
              </div>
              <p className={AttioTypography.bodySmall + " mb-6"}>{tier.description}</p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <FeatureIcon icon={Check} size="sm" color="green" />
                    <span className={AttioTypography.bodySmall}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={snappySpring}
                className={`
                  w-full ${AttioButton.primary}
                  ${tier.popular ? "bg-purple-600 hover:bg-purple-700" : ""}
                `}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Visual Demo (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...snappySpring, delay: 0.3 }}
          className="mt-24"
        >
          <TiltedCardVisual variant="dashboard" />
        </motion.div>
      </AttioContainer>
    </AttioSection>
  )
}

