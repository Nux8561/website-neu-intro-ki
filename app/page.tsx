import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { WorkflowSection } from "@/components/sections/workflow-section"
import { SocialProof } from "@/components/sections/social-proof"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <FeatureGrid />
      <WorkflowSection />
    </main>
  )
}

