import dynamic from "next/dynamic"
import { TopBanner } from "@/components/sections/top-banner"
import { Hero } from "@/components/sections/hero"

// Lazy load heavy components
const VideoSection = dynamic(() => import("@/components/sections/video-section").then(mod => ({ default: mod.VideoSection })), { ssr: true })
const FeatureNav = dynamic(() => import("@/components/sections/feature-nav").then(mod => ({ default: mod.FeatureNav })), { ssr: true })
const DashboardPreview = dynamic(() => import("@/components/sections/dashboard-preview").then(mod => ({ default: mod.DashboardPreview })), { ssr: true })
const FeaturesSection = dynamic(() => import("@/components/sections/features-section").then(mod => ({ default: mod.FeaturesSection })), { ssr: true })
const TestimonialSection = dynamic(() => import("@/components/sections/testimonial-section").then(mod => ({ default: mod.TestimonialSection })), { ssr: true })
const SocialProof = dynamic(() => import("@/components/sections/social-proof").then(mod => ({ default: mod.SocialProof })), { ssr: true })
const FeatureGrid = dynamic(() => import("@/components/sections/feature-grid").then(mod => ({ default: mod.FeatureGrid })), { ssr: true })
const WorkflowSection = dynamic(() => import("@/components/sections/workflow-section").then(mod => ({ default: mod.WorkflowSection })), { ssr: true })
const CTASection = dynamic(() => import("@/components/sections/cta-section").then(mod => ({ default: mod.CTASection })), { ssr: true })

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0C0E] relative">
      <TopBanner />
      <Hero />
      <VideoSection />
      <FeatureNav />
      <DashboardPreview />
      <FeaturesSection />
      <TestimonialSection />
      <SocialProof />
      <FeatureGrid />
      <WorkflowSection />
      <CTASection />
    </main>
  )
}

