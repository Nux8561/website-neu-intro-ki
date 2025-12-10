"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Plus",
    price: "Free",
    description: "Perfect for individuals",
    features: [
      "Up to 10,000 records",
      "Basic automation",
      "Email support",
      "Core integrations",
    ],
    cta: "Start for free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    description: "For growing teams",
    features: [
      "Unlimited records",
      "Advanced automation",
      "AI-powered insights",
      "Priority support",
      "Advanced integrations",
      "Custom fields",
      "API access",
    ],
    cta: "Start for free",
    popular: true,
    badge: "14-day free trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Custom integrations",
      "SSO & advanced security",
      "SLA guarantee",
      "On-premise option",
      "Custom training",
    ],
    cta: "Talk to sales",
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-[#0B0C0E]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6"
            >
              Start with a 14-day free trial of Pro.
            </motion.h1>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center mb-8"
            >
              <Button className="bg-[#0B0C0E] text-white rounded-full px-8 py-4">
                Start for free
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-4">
                Send me a demo
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-4">
                See our plans
              </Button>
            </motion.div>
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
                className={`relative bg-[#0B0C0E]/5 border rounded-2xl p-8 ${
                  plan.popular
                    ? "border-[#0B0C0E]/20 bg-white scale-105 shadow-lg"
                    : "border-[#0B0C0E]/10"
                }`}
              >
                {plan.popular && plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-[#0B0C0E] text-white border-0 text-xs">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-[#0B0C0E]/70 font-inter text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-jakarta font-medium text-[#0B0C0E]">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-[#0B0C0E]/50 font-inter">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[#0B0C0E]/70 font-inter text-sm"
                    >
                      <Check className="h-5 w-5 text-[#0B0C0E] flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className={`w-full rounded-full ${
                    plan.popular
                      ? "bg-[#0B0C0E] text-white hover:bg-[#0B0C0E]/90"
                      : "bg-[#0B0C0E]/10 text-[#0B0C0E] hover:bg-[#0B0C0E]/20 border border-[#0B0C0E]/10"
                  }`}
                  asChild
                >
                  <Link href={plan.name === "Enterprise" ? "/kontakt" : "/dashboard"}>
                    {plan.cta}
                    {plan.name !== "Enterprise" && (
                      <ArrowRight className="ml-2 h-4 w-4" />
                    )}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 border-t border-[#0B0C0E]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-12 text-center">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can I change my plan later?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
                },
                {
                  q: "Is there a free trial?",
                  a: "Yes, all Pro plans include a 14-day free trial. No credit card required to start.",
                },
                {
                  q: "What happens after the trial?",
                  a: "After your trial ends, you can choose to continue with a paid plan or pause your account. Your data will be saved for 30 days.",
                },
                {
                  q: "Do you offer refunds?",
                  a: "Yes, we offer a 30-day money-back guarantee on all annual plans. Monthly plans can be cancelled at any time.",
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
                  className="bg-[#0B0C0E]/5 border border-[#0B0C0E]/10 rounded-xl p-6"
                >
                  <h3 className="text-[#0B0C0E] font-jakarta font-medium mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-[#0B0C0E]/70 font-inter text-sm">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
