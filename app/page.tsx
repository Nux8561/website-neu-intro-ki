"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/sections/footer"
import { CookieConsent } from "@/components/ui/cookie-consent"
import { TopBanner } from "@/components/sections/top-banner"
import { Hero } from "@/components/sections/hero"
import { FeatureNav } from "@/components/sections/feature-nav"
import { DashboardPreview } from "@/components/sections/dashboard-preview"
import { PowerfulPlatformSection } from "@/components/sections/powerful-platform-section"
import { AdaptiveModelSection } from "@/components/sections/adaptive-model-section"
import { DataEnrichmentSection } from "@/components/sections/data-enrichment-section"
import { BuiltForScaleSection } from "@/components/sections/built-for-scale-section"

// Lazy load heavy components
const VideoSection = dynamic(() => import("@/components/sections/video-section").then(mod => ({ default: mod.VideoSection })), { ssr: true })
const FeaturesSection = dynamic(() => import("@/components/sections/features-section").then(mod => ({ default: mod.FeaturesSection })), { ssr: true })
const TestimonialSection = dynamic(() => import("@/components/sections/testimonial-section").then(mod => ({ default: mod.TestimonialSection })), { ssr: true })
const SocialProof = dynamic(() => import("@/components/sections/social-proof").then(mod => ({ default: mod.SocialProof })), { ssr: true })
const FeatureGrid = dynamic(() => import("@/components/sections/feature-grid").then(mod => ({ default: mod.FeatureGrid })), { ssr: true })
const WorkflowSection = dynamic(() => import("@/components/sections/workflow-section").then(mod => ({ default: mod.WorkflowSection })), { ssr: true })
const CTASection = dynamic(() => import("@/components/sections/cta-section").then(mod => ({ default: mod.CTASection })), { ssr: true })

export default function Home() {
  const [activeFeature, setActiveFeature] = React.useState("data")

  return (
    <>
      <Navbar />
      <TopBanner />
      <main className="min-h-screen bg-white relative">
        <Hero />
        <FeatureNav activeFeature={activeFeature} onFeatureChange={setActiveFeature} />
        <DashboardPreview activeFeature={activeFeature} />
        <PowerfulPlatformSection />
        <AdaptiveModelSection />
        <DataEnrichmentSection />
        <BuiltForScaleSection />
        <FeaturesSection />
        <TestimonialSection />
        <SocialProof />
        <FeatureGrid />
        <WorkflowSection />
        <CTASection />
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}

