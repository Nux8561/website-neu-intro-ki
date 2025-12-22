import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Produkt",
    links: [
      { label: "Features", href: "/features" },
      { label: "Platform", href: "/platform" },
      { label: "Pricing", href: "/pricing" },
      { label: "Security", href: "/security" },
      { label: "Demo buchen", href: "/demo" },
    ],
  },
  {
    title: "Lösungen",
    links: [
      { label: "Für Startups", href: "/for/startups" },
      { label: "Enterprise", href: "/enterprise" },
      { label: "Deal Flow", href: "/for/deal-flow" },
    ],
  },
  {
    title: "Ressourcen",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Help", href: "/help" },
      { label: "FAQ", href: "/faq" },
      { label: "Changelog", href: "/changelog" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Templates", href: "/templates" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "Impressum", href: "/impressum" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0E14] pt-16 pb-12">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-7">
          {/* LOGO & SOCIALS (Links, breiter) */}
          <div className="col-span-2">
            <Link href="/" className="mb-6 flex items-center gap-2 text-white">
              <Image 
                src="/images/app logo.png" 
                alt="Intro KI Logo" 
                width={32} 
                height={32} 
                className="h-8 w-8 object-contain"
              />
              <span className="text-sm font-medium">Intro KI</span>
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/60">
              Das CRM, das mitdenkt. Entwickelt für moderne Vertriebsteams, die mehr Zeit für Kunden und
              weniger für Datenpflege haben wollen.
            </p>
            <div className="flex gap-4 text-white/60">
              <Link href="#" className="transition-colors hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="transition-colors hover:text-white">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="transition-colors hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* LINK COLUMNS */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-semibold text-white">{group.title}</h3>
              <ul className="space-y-3 text-sm text-white/60">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* COPYRIGHT LINE */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/60 md:flex-row">
          <p>© 2024 Intro KI GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex gap-8">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#10B981]" />
              All Systems Operational
            </span>
            <span>Made in Germany</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


