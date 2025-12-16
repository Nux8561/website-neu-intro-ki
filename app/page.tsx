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
import { FeaturesBentoGridAttio } from "@/components/sections/features-bento-grid-attio"
import { IntegrationsSection } from "@/components/sections/integrations-section"

// Lazy load heavy components for better performance
const FeaturesBentoGrid = dynamic(() => import("@/components/sections/features-bento-grid").then(mod => ({ default: mod.FeaturesBentoGrid })), { ssr: true })
const ResearchOrchestratorSection = dynamic(() => import("@/components/sections/research-orchestrator-section").then(mod => ({ default: mod.ResearchOrchestratorSection })), { ssr: true })
const SmartTargetingSection = dynamic(() => import("@/components/sections/smart-targeting-section").then(mod => ({ default: mod.SmartTargetingSection })), { ssr: true })
const PipelineManagementSection = dynamic(() => import("@/components/sections/pipeline-management-section").then(mod => ({ default: mod.PipelineManagementSection })), { ssr: true })
const CallCoachingSection = dynamic(() => import("@/components/sections/call-coaching-section").then(mod => ({ default: mod.CallCoachingSection })), { ssr: true })
const CTASection = dynamic(() => import("@/components/sections/cta-section").then(mod => ({ default: mod.CTASection })), { ssr: true })

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Globales Grid-Pattern für die gesamte Seite */}
            <main className="min-h-screen bg-background attio-grid-pattern relative overflow-x-hidden w-full">
        {/* Premium Hero with Product Demo (Attio-Style) */}
        <HeroAttio 
          videoUrl="/videos/demo.mp4"
          showVideo={true}
        />
        
        {/* Features Bento Grid - Attio Style */}
        <FeaturesBentoGridAttio />
        
        {/* Integrations Section */}
        <IntegrationsSection />
        
        {/* Video Demo Section */}
        <VideoDemoSection 
          videoSrc="/videos/demo.mp4"
          posterSrc="/images/video-poster.svg"
          title="Sieh IntroKI in Aktion"
          description="Entdecke, wie IntroKI dein Sales-Team in nur wenigen Minuten transformiert."
        />
        
        {/* Legacy Features Bento Grid */}
        <FeaturesBentoGrid />
        
        {/* Deep Dive Sections - 4-Step Journey */}
        <ResearchOrchestratorSection />
        <SmartTargetingSection />
        <PipelineManagementSection />
        <CallCoachingSection />
        
        {/* Premium Testimonials */}
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
