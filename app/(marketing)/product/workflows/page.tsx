"use client"

import * as React from "react"
import { FeaturePageTemplate, FeatureItem, BentoGridItem } from "@/components/templates/feature-page-template"
import { Workflow, GitBranch, Zap, Bell, Mail, Database } from "lucide-react"

export default function WorkflowsPage() {
  // Zig-Zag Features
  const features: FeatureItem[] = [
    {
      kicker: "VISUAL BUILDER",
      title: "Visual builder",
      description: "Design complex workflows with an intuitive drag-and-drop interface. No code required. Connect triggers, actions, and conditions visually. See your automation logic at a glance and iterate quickly.",
      items: [
        "Drag-and-drop workflow canvas",
        "Pre-built templates for common automations",
        "Real-time workflow validation and testing",
        "Version history and rollback capabilities",
      ],
      image: "/images/workflows-visual-builder.png",
      imagePosition: "left",
    },
    {
      kicker: "LOGIC",
      title: "Conditional logic",
      description: "Build intelligent workflows that adapt to your data. Use conditional branches, loops, and filters to handle complex business rules. Route records based on criteria, update fields conditionally, and create dynamic paths through your automation.",
      items: [
        "If/else branching and multi-condition logic",
        "Filter and transform data on the fly",
        "Loop through collections and batch operations",
        "Error handling and retry mechanisms",
      ],
      image: "/images/workflows-conditional-logic.png",
      imagePosition: "right",
    },
    {
      kicker: "TRIGGERS",
      title: "Instant triggers",
      description: "Workflows run automatically when data changes. Trigger on record creation, field updates, status changes, or external webhooks. Keep your CRM in sync and your team informed—instantly and reliably.",
      items: [
        "Event-based triggers (create, update, delete)",
        "Field-level change detection",
        "Webhook triggers for external integrations",
        "Scheduled and recurring workflows",
      ],
      image: "/images/workflows-triggers.png",
      imagePosition: "left",
    },
  ]

  // Bento Grid Items
  const bentoGridItems: BentoGridItem[] = [
    {
      icon: Bell,
      title: "Slack notifications",
      description: "Automatically notify your team in Slack when deals move, leads are assigned, or milestones are reached. Keep everyone in sync without manual updates.",
    },
    {
      icon: Mail,
      title: "Email sequences",
      description: "Trigger personalized email sequences based on lead behavior, deal stages, or custom events. Send the right message at the right time, automatically.",
    },
    {
      icon: Database,
      title: "Data enrichment",
      description: "Automatically enrich records with external data sources. Update company information, verify email addresses, and append missing fields as records are created or updated.",
    },
  ]

  // Hero Image Placeholder
  const heroImagePlaceholder = (
    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="text-center">
        <Workflow className="w-16 h-16 text-gray-400 mx-auto mb-4" strokeWidth={1.5} />
        <p className="text-sm text-gray-500">Workflow Automation Preview</p>
      </div>
    </div>
  )

  return (
    <FeaturePageTemplate
      title="Automate your revenue engine"
      subtitle="Build powerful workflows that trigger on data changes. Eliminate manual tasks and keep your team focused on selling."
      heroImage={heroImagePlaceholder}
      documentationLink="/developers/workflows"
      features={features}
      bentoGridItems={bentoGridItems}
      ctaTitle="Ready to automate your sales process?"
      ctaSubtitle="Book a demo to see how workflow automation can eliminate hours of manual work and accelerate your revenue operations."
    />
  )
}

