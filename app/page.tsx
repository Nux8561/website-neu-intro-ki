"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/sections/footer"
import { CookieConsent } from "@/components/ui/cookie-consent"
import { TopBanner } from "@/components/sections/top-banner"
import { Hero } from "@/components/sections/hero"
import { FeaturesBentoGrid } from "@/components/sections/features-bento-grid"
import { ResearchOrchestratorSection } from "@/components/sections/research-orchestrator-section"
import { PipelineManagementSection } from "@/components/sections/pipeline-management-section"
import { CallCoachingSection } from "@/components/sections/call-coaching-section"

// Lazy load heavy components
const VideoSection = dynamic(() => import("@/components/sections/video-section").then(mod => ({ default: mod.VideoSection })), { ssr: true })
const TestimonialSectionEnhanced = dynamic(() => import("@/components/sections/testimonial-section-enhanced").then(mod => ({ default: mod.TestimonialSectionEnhanced })), { ssr: true })
const SocialProof = dynamic(() => import("@/components/sections/social-proof").then(mod => ({ default: mod.SocialProof })), { ssr: true })
const CTASection = dynamic(() => import("@/components/sections/cta-section").then(mod => ({ default: mod.CTASection })), { ssr: true })
// Lazy load 3D component for better performance
const Hero3DElement = dynamic(() => import("@/components/ui/hero-3d-element").then(mod => ({ default: mod.Hero3DElement })), { ssr: false })

export default function Home() {
  return (
    <>
      <Navbar />
      <TopBanner />
      <main className="min-h-screen bg-background relative">
        <Hero />
        <VideoSection />
        <FeaturesBentoGrid />
        <ResearchOrchestratorSection />
        <PipelineManagementSection />
        <CallCoachingSection />
        <SocialProof />
        <TestimonialSectionEnhanced />
        <CTASection />
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}

