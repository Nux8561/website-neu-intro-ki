import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/sections/footer"
import { CookieConsent } from "@/components/ui/cookie-consent"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <CookieConsent />
    </>
  )
}

