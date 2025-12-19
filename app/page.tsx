import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/sections/footer"
import { CookieConsent } from "@/components/ui/cookie-consent"
import { HeroAttio } from "@/components/sections/hero-attio"
import { FeaturesBento } from "@/components/sections/features-bento"
import { FeatureRows } from "@/components/sections/feature-rows"
import { TrustSection } from "@/components/sections/trust-section"
import { CTAFooter } from "@/components/sections/cta-footer"

export default function Home() {

  return (
    <>
      <Navbar />
      {/* Globales Grid-Pattern für die gesamte Seite - zeigt Automatisierung und Verbindung */}
      <main className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
        {/* 1. Der Wow-Effekt */}
        <HeroAttio />
        
        {/* 2. Die Übersicht */}
        <FeaturesBento />
        
        {/* 3. Der Deep Dive */}
        <FeatureRows />
        
        {/* 4. Der Beweis */}
        <TrustSection />
        
        {/* 5. Der Abschluss */}
        <CTAFooter />
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}
