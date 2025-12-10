import { TopBanner } from "@/components/sections/top-banner"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { FeatureNav } from "@/components/sections/feature-nav"
import { DashboardPreview } from "@/components/sections/dashboard-preview"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { WorkflowSection } from "@/components/sections/workflow-section"
import { SocialProof } from "@/components/sections/social-proof"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0C0E] relative">
      <TopBanner />
      <Navbar />
      <Hero />
      <FeatureNav />
      <DashboardPreview />
      <SocialProof />
      <FeatureGrid />
      <WorkflowSection />
    </main>
  )
}

