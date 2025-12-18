"use client"

import * as React from "react"
import { LazyMotion, motion, domAnimation } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Database, Workflow, BarChart3, Shield } from "lucide-react"
import { ResearchOrchestratorSection } from "@/components/sections/research-orchestrator-section"
import { ScannerCardStream } from "@/components/ui/scanner-card-stream"

// Attio Spring Physics
const attioTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 17,
}

export function FeaturesBentoGrid() {
  return (
    <LazyMotion features={domAnimation}>
      {/* Enterprise Product Showcase Section - Attio Style */}
      <section 
        id="gallery-section" 
        className="relative w-full bg-white py-16 md:py-24 lg:py-32"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={attioTransition}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-gray-900 mb-4">
              Built for enterprise teams
            </h2>
            <p className="text-[16px] leading-[24px] text-gray-600 max-w-2xl mx-auto">
              IntroKI combines powerful CRM capabilities with AI-powered insights 
              to help your sales team close more deals, faster.
            </p>
          </motion.div>

          {/* Feature Grid - Clean B2B Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
            {/* Feature Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...attioTransition, delay: 0.1 }}
              className="p-6 md:p-8 border border-gray-200 rounded-lg bg-white hover:border-gray-300 transition-colors duration-attio"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-[20px] leading-[28px] -tracking-[0.01em] font-medium text-gray-900 mb-3">
                Centralized data hub
              </h3>
              <p className="text-[16px] leading-[24px] text-gray-600 mb-4">
                All your customer data, interactions, and insights in one unified platform.
              </p>
              <Link 
                href="/product" 
                className="inline-flex items-center text-[14px] font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
              </Link>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...attioTransition, delay: 0.2 }}
              className="p-6 md:p-8 border border-gray-200 rounded-lg bg-white hover:border-gray-300 transition-colors duration-attio"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <Workflow className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-[20px] leading-[28px] -tracking-[0.01em] font-medium text-gray-900 mb-3">
                Automated workflows
              </h3>
              <p className="text-[16px] leading-[24px] text-gray-600 mb-4">
                Streamline your sales process with intelligent automation and AI-powered recommendations.
              </p>
              <Link 
                href="/product" 
                className="inline-flex items-center text-[14px] font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
              </Link>
            </motion.div>

            {/* Feature Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...attioTransition, delay: 0.3 }}
              className="p-6 md:p-8 border border-gray-200 rounded-lg bg-white hover:border-gray-300 transition-colors duration-attio"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-[20px] leading-[28px] -tracking-[0.01em] font-medium text-gray-900 mb-3">
                Real-time analytics
              </h3>
              <p className="text-[16px] leading-[24px] text-gray-600 mb-4">
                Make data-driven decisions with comprehensive reporting and forecasting tools.
              </p>
              <Link 
                href="/product" 
                className="inline-flex items-center text-[14px] font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
              </Link>
            </motion.div>

            {/* Feature Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...attioTransition, delay: 0.4 }}
              className="p-6 md:p-8 border border-gray-200 rounded-lg bg-white hover:border-gray-300 transition-colors duration-attio"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-[20px] leading-[28px] -tracking-[0.01em] font-medium text-gray-900 mb-3">
                Enterprise-grade security
              </h3>
              <p className="text-[16px] leading-[24px] text-gray-600 mb-4">
                GDPR compliant with end-to-end encryption and industry-leading security standards.
              </p>
              <Link 
                href="/security" 
                className="inline-flex items-center text-[14px] font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
              </Link>
            </motion.div>

            {/* Feature Card 5 - Spans 2 columns on larger screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...attioTransition, delay: 0.5 }}
              className="p-6 md:p-8 lg:p-10 border border-gray-200 rounded-lg bg-gray-50 md:col-span-2 lg:col-span-1"
            >
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
                </div>
                <h3 className="text-[20px] leading-[28px] -tracking-[0.01em] font-medium text-gray-900 mb-3">
                  Trusted by leading teams
                </h3>
                <p className="text-[16px] leading-[24px] text-gray-600 mb-6 flex-grow">
                  Join enterprise teams who rely on IntroKI to accelerate their sales processes.
                </p>
                <Link 
                  href="/customers" 
                  className="inline-flex items-center text-[14px] font-medium text-gray-900 hover:text-gray-700 transition-colors"
                >
                  View case studies
                  <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
                </Link>
              </div>
            </motion.div>

            {/* Feature Card 6 - Spans 2 columns on larger screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...attioTransition, delay: 0.6 }}
              className="p-6 md:p-8 lg:p-10 border border-gray-200 rounded-lg bg-white md:col-span-2 lg:col-span-1"
            >
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
                </div>
                <h3 className="text-[20px] leading-[28px] -tracking-[0.01em] font-medium text-gray-900 mb-3">
                  AI-powered insights
                </h3>
                <p className="text-[16px] leading-[24px] text-gray-600 mb-6 flex-grow">
                  Leverage advanced AI to identify opportunities, predict outcomes, and guide your team to success.
                </p>
                <Link 
                  href="/product" 
                  className="inline-flex items-center text-[14px] font-medium text-gray-900 hover:text-gray-700 transition-colors"
                >
                  Explore AI features
                  <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* CTA Section - B2B Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...attioTransition, delay: 0.7 }}
            className="text-center pt-8 border-t border-gray-200"
          >
            <p className="text-[16px] leading-[24px] text-gray-600 mb-6">
              Ready to see how IntroKI can transform your sales process?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-black text-white hover:bg-gray-900 px-8 py-3.5 rounded-lg font-medium text-[14px] transition-all duration-attio ease-attio-ease-out hover:scale-[1.02]"
              >
                Book a demo
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-8 py-3.5 rounded-lg font-medium text-[14px] transition-all duration-attio ease-attio-ease-out"
              >
                View pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Orchestrator Section */}
      <ResearchOrchestratorSection />

      {/* Security Scanner Section - Refactored to B2B Style */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Headline Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={attioTransition}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-gray-900 mb-4">
              Enterprise-grade security
            </h2>
            <p className="text-[16px] leading-[24px] text-gray-600 max-w-2xl mx-auto">
              Your data is protected with industry-leading security standards, 
              GDPR compliance, and end-to-end encryption.
            </p>
          </motion.div>

          {/* Security Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {[
              {
                title: "End-to-end encryption",
                description: "All data encrypted in transit and at rest with AES-256 encryption.",
              },
              {
                title: "GDPR compliant",
                description: "Full compliance with EU data protection regulations and privacy standards.",
              },
              {
                title: "SOC 2 certified",
                description: "Regular security audits and compliance certifications for enterprise trust.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...attioTransition, delay: index * 0.1 }}
                className="p-6 border border-gray-200 rounded-lg bg-white"
              >
                <h3 className="text-[20px] leading-[28px] -tracking-[0.01em] font-medium text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-[16px] leading-[24px] text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Scanner Visualization - Simplified for B2B */}
          <div className="relative h-96 md:h-[500px] rounded-lg border border-gray-200 bg-white overflow-hidden">
            <ScannerCardStream
              showControls={false}
              showSpeed={false}
              initialSpeed={150}
              direction={-1}
              repeat={6}
              cardGap={60}
              friction={0.95}
              scanEffect="scramble"
            />
          </div>

          {/* Security CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...attioTransition, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/security"
              className="inline-flex items-center text-[14px] font-medium text-gray-900 hover:text-gray-700 transition-colors"
            >
              Learn more about security
              <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  )
}
