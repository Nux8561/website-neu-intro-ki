import { NextResponse } from "next/server"

function getAllUrls(): string[] {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://introki.app"
  const urls: string[] = [baseUrl]

  // Navigation items (server-safe, without icons)
  const navigationData = [
    {
      href: "#",
      children: [
        { href: "/features" },
        { href: "/platform" },
        { href: "/pricing" },
        { href: "/security" },
      ],
    },
    {
      href: "#",
      children: [
        { href: "/for/startups" },
        { href: "/enterprise" },
        { href: "/for/deal-flow" },
      ],
    },
    {
      href: "#",
      children: [
        { href: "/blog" },
        { href: "/help" },
        { href: "/faq" },
        { href: "/changelog" },
        { href: "/roadmap" },
        { href: "/templates" },
      ],
    },
    {
      href: "#",
      children: [
        { href: "/about" },
        { href: "/team" },
        { href: "/careers" },
        { href: "/partners" },
        { href: "/kontakt" },
      ],
    },
  ]

  // Add all navigation items
  for (const item of navigationData) {
    if (item.href !== "#") {
      urls.push(`${baseUrl}${item.href}`)
    }
    if (item.children) {
      for (const child of item.children) {
        urls.push(`${baseUrl}${child.href}`)
      }
    }
  }

  // Add additional important pages
  const additionalPages = [
    "/sitemap",
    "/demo",
  ]

  for (const page of additionalPages) {
    urls.push(`${baseUrl}${page}`)
  }

  return urls
}

function generateSitemapXml(): string {
  const urls = getAllUrls()
  const currentDate = new Date().toISOString()

  const urlEntries = urls
    .map(
      (url) => `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("\n")

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`
}

export async function GET() {
  const sitemap = generateSitemapXml()

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}

