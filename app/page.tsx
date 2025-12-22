import { Navbar } from "@/components/navbar"
import { CookieConsent } from "@/components/ui/cookie-consent"
import { AnimatedGridLines } from "@/components/ui/animated-grid-lines"
import { SectionDivider } from "@/components/ui/section-divider"
import { HeroLayered } from "@/components/sections/hero-layered"
import { PainPointsHero } from "@/components/sections/pain-points-hero"
import { ProductExplanation } from "@/components/sections/product-explanation"
import { PositioningSection } from "@/components/sections/positioning-section"
import { FeaturesBento } from "@/components/sections/features-bento"
import { StorylineSection } from "@/components/sections/storyline-section"
import { TrustSection } from "@/components/sections/trust-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTAFooter } from "@/components/sections/cta-footer"
import { SiteFooter } from "@/components/layout/site-footer"

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Animiertes Grid-System im Hintergrund */}
      <AnimatedGridLines />
      {/* Main Container - Premium Style */}
      <div className="relative z-10 mx-auto max-w-[1400px] bg-[#0B0E14]">
        <main className="min-h-screen bg-[#0B0E14]">
          <HeroLayered />
          <PainPointsHero />
          <ProductExplanation />
          <PositioningSection />
          <FeaturesBento />
          <TestimonialsSection />
          <TrustSection />
          <CTAFooter />
        </main>
        <SiteFooter />
      </div>
      <CookieConsent />
    </>
  )
}
