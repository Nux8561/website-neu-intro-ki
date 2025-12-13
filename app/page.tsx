"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/sections/footer"
import { CookieConsent } from "@/components/ui/cookie-consent"

// New Premium Sections
import { HeroAttio } from "@/components/sections/hero-attio"
import { VideoDemoSection } from "@/components/sections/video-demo-section"
import { TestimonialsPremium } from "@/components/sections/testimonials-premium"
import { TeamSection } from "@/components/sections/team-section"

// Lazy load heavy components for better performance
const FeaturesBentoGrid = dynamic(() => import("@/components/sections/features-bento-grid").then(mod => ({ default: mod.FeaturesBentoGrid })), { ssr: true })
const ResearchOrchestratorSection = dynamic(() => import("@/components/sections/research-orchestrator-section").then(mod => ({ default: mod.ResearchOrchestratorSection })), { ssr: true })
const PipelineManagementSection = dynamic(() => import("@/components/sections/pipeline-management-section").then(mod => ({ default: mod.PipelineManagementSection })), { ssr: true })
const CallCoachingSection = dynamic(() => import("@/components/sections/call-coaching-section").then(mod => ({ default: mod.CallCoachingSection })), { ssr: true })
const CTASection = dynamic(() => import("@/components/sections/cta-section").then(mod => ({ default: mod.CTASection })), { ssr: true })

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Premium Hero with Product Demo (Attio-Style) */}
        <HeroAttio 
          videoUrl="/revision (1).MP4"
          showVideo={true}
        />
        
        {/* Video Demo Section */}
        <VideoDemoSection 
          videoSrc="/revision (1).MP4"
          title="Sieh IntroKI in Aktion"
          description="Entdecke, wie IntroKI dein Sales-Team in nur wenigen Minuten transformiert."
        />
        
        {/* Features Bento Grid */}
        <FeaturesBentoGrid />
        
        {/* Deep Dive Sections */}
        <ResearchOrchestratorSection />
        <PipelineManagementSection />
        <CallCoachingSection />
        
        {/* Premium Testimonials with Photos */}
        <TestimonialsPremium />
        
        {/* Team/Founder Section */}
        <TeamSection />
        
        {/* Final CTA */}
        <CTASection />
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}
