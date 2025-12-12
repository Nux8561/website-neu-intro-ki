import { MarketingPageTemplate } from "@/components/templates/marketing-page-template"

export default function ReferPage() {
  return (
    <MarketingPageTemplate
      title="Refer a team"
      description="Hilf deinem Netzwerk, IntroKI zu entdecken und verdiene Belohnungen."
    >
      <div className="space-y-6 text-[#0B0C0E]/70 font-inter">
        <p>Teile IntroKI mit deinem Team und werde belohnt.</p>
      </div>
    </MarketingPageTemplate>
  )
}

