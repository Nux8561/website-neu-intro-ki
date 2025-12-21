import { Navbar } from "@/components/navbar"
import { CookieConsent } from "@/components/ui/cookie-consent"
import { AnimatedGridLines } from "@/components/ui/animated-grid-lines"
import { HeroLayered } from "@/components/sections/hero-layered"
import { FeaturesBento } from "@/components/sections/features-bento"
import { WorkspacesInterfaceSection } from "@/components/sections/workspaces-interface-section"
import { FeatureRows } from "@/components/sections/feature-rows"
import { VideoDemoSection } from "@/components/sections/video-demo-section"
import { TrustSection } from "@/components/sections/trust-section"
import { CTAFooter } from "@/components/sections/cta-footer"
import { SiteFooter } from "@/components/layout/site-footer"

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Animiertes Grid-System im Hintergrund */}
      <AnimatedGridLines />
      {/* Main Container - Industrial Tool Style (Schwarz-Weiß, brutal) */}
      <div className="relative z-10 mx-auto max-w-[1200px] border-x-2 border-black bg-white">
        <main className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
          <HeroLayered />
          <FeaturesBento />
          <WorkspacesInterfaceSection />
          <VideoDemoSection videoSrc="/videos/demo.mp4" />
          <FeatureRows />
          <TrustSection />
          <CTAFooter />
        </main>
        <SiteFooter />
      </div>
      <CookieConsent />
    </>
  )
}
