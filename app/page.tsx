import { Navbar } from "@/components/navbar"
import { CookieConsent } from "@/components/ui/cookie-consent"
import { HeroSimple } from "@/components/sections/hero-simple"
import { FeaturesBento } from "@/components/sections/features-bento"
import { FeatureRows } from "@/components/sections/feature-rows"
import { VideoDemoSection } from "@/components/sections/video-demo-section"
import { TrustSection } from "@/components/sections/trust-section"
import { CTAFooter } from "@/components/sections/cta-footer"
import { SiteFooter } from "@/components/layout/site-footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
        <HeroSimple />
        <FeaturesBento />
        <VideoDemoSection videoSrc="/videos/demo.mp4" />
        <FeatureRows />
        <TrustSection />
        <CTAFooter />
        <SiteFooter />
      </main>
      <CookieConsent />
    </>
  )
}
