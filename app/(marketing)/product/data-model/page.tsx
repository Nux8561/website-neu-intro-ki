"use client"

import * as React from "react"
import { FeaturePageTemplate, FeatureItem, BentoGridItem } from "@/components/templates/feature-page-template"
import { Database, Share2, Shield, Zap, Search, Layout } from "lucide-react"

export default function DataModelPage() {
  // Zig-Zag Features
  const features: FeatureItem[] = [
    {
      kicker: "CUSTOMIZATION",
      title: "Fully customizable objects",
      description: "Break free from rigid CRM structures. Create custom objects that mirror your unique business processes—whether you're managing properties, projects, or partnerships. Every field, every relationship, every workflow tailored to your needs.",
      items: [
        "Create unlimited custom object types",
        "Define fields and attributes without code",
        "Map complex multi-entity relationships",
        "Inherit and extend existing object schemas",
      ],
      image: "/images/data-model-custom-objects.png",
      imagePosition: "left",
    },
    {
      kicker: "ATTRIBUTES",
      title: "Powerful attribute types",
      description: "Go beyond basic text fields. Use rich attribute types like status enums, currency values, team references, and formula fields. Link related records, create cascading updates, and maintain data integrity across your entire CRM.",
      items: [
        "Status enums and multi-select fields",
        "Currency, number, and date calculations",
        "Team and user reference fields",
        "Formula fields with cross-object references",
      ],
      image: "/images/data-model-attributes.png",
      imagePosition: "right",
    },
    {
      kicker: "RELATIONSHIPS",
      title: "Advanced relationship mapping",
      description: "Connect companies to deals, people to opportunities, and custom entities to everything else. Define one-to-many, many-to-many, and hierarchical relationships with precision. Visualize your data model and understand how everything connects.",
      items: [
        "One-to-many and many-to-many relationships",
        "Hierarchical and parent-child structures",
        "Bi-directional relationship linking",
        "Visual relationship graph and documentation",
      ],
      image: "/images/data-model-relationships.png",
      imagePosition: "left",
    },
  ]

  // Bento Grid Items
  const bentoGridItems: BentoGridItem[] = [
    {
      icon: Zap,
      title: "Real-time sync",
      description: "All changes propagate instantly across your CRM. Update a field in one place, and watch it reflect everywhere it's referenced—without manual sync or refresh.",
    },
    {
      icon: Shield,
      title: "Granular permissions",
      description: "Control access at the object, field, and record level. Define who can view, edit, or delete data with role-based permissions that scale with your team.",
    },
    {
      icon: Search,
      title: "API-first architecture",
      description: "Every custom object and relationship is available through our REST API. Build integrations, sync external data, and automate workflows with full programmatic access.",
    },
  ]

  // Hero Image Placeholder (colored div as fallback)
  const heroImagePlaceholder = (
    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="text-center">
        <Database className="w-16 h-16 text-gray-400 mx-auto mb-4" strokeWidth={1.5} />
        <p className="text-sm text-gray-500">Data Model Preview</p>
      </div>
    </div>
  )

  return (
    <FeaturePageTemplate
      title="A data engine built for relationships"
      subtitle="Mold IntroKI to fit your business. Create custom objects, define rich attributes, and map complex relationships without writing code."
      heroImage={heroImagePlaceholder}
      documentationLink="/developers/data-model"
      features={features}
      bentoGridItems={bentoGridItems}
      ctaTitle="Ready to build your perfect data model?"
      ctaSubtitle="Book a demo to see how flexible data modeling can transform how your team works with customer data."
    />
  )
}

