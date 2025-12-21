import { NextResponse } from "next/server"
import { navigationItems } from "@/components/navbar/nav-items"

function getAllUrls(): string[] {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://introki.app"
  const urls: string[] = [baseUrl]

  // Add all navigation items
  navigationItems.forEach((item) => {
    if (item.href !== "#") {
      urls.push(`${baseUrl}${item.href}`)
    }
    item.children?.forEach((child) => {
      urls.push(`${baseUrl}${child.href}`)
    })
  })

  // Add additional important pages
  const additionalPages = [
    "/sitemap",
    "/demo",
  ]

  additionalPages.forEach((page) => {
    urls.push(`${baseUrl}${page}`)
  })

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

