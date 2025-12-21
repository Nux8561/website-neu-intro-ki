"use client"

import * as React from "react";
import { ArrowRight } from "iconoir-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ExpensiveCard } from "@/components/ui/3d-card";
import { ENTERPRISE_SPRING } from "@/lib/animations";
import { motion } from "framer-motion";

export function FeatureRows() {
  return (
    <section className="space-y-40 py-40 md:py-48 bg-white border-b-2 border-black">
      <div className="mx-auto max-w-full px-4">
        
        {/* ROW 1: CLARITY & FOCUS - Industrial Tool Style */}
        <ScrollReveal direction="up" distance={80}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6 font-space-grotesk">
                Immer wissen, was zu tun ist
              </h3>
              <p className="text-xl text-black/70 mb-8 leading-relaxed font-inter">
                Top Opportunities heute, was zu tun ist, worauf du dich heute fokussieren musst. 
                Keine 100 zufälligen Calls – die ersten 20 sind immer die mit dem besten Potential.
              </p>
            </div>
            <ExpensiveCard intensity={6} className="p-10 border-2 border-black">
              {/* Fake UI: Focus Dashboard - Industrial Tool Style */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-6 border-b-2 border-black pb-2">
                  <h4 className="text-sm font-bold text-black font-space-grotesk uppercase tracking-wider">Heute</h4>
                  <div className="text-xs text-black/60 font-mono">3 Prioritäten</div>
                </div>
                {[
                  { name: "Acme Corp", type: "Strong Buy Signal", value: "€50K", priority: 1 },
                  { name: "TechStart GmbH", type: "Warm Lead", value: "€25K", priority: 2 },
                  { name: "DataFlow Inc", type: "Follow-up", value: "€15K", priority: 3 },
                ].map((deal, i) => (
                  <div key={i} className="flex items-center justify-between rounded border-2 border-black bg-white p-4 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded border-2 border-black bg-black text-xs font-bold text-white font-mono">
                        #{deal.priority}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-black font-space-grotesk">{deal.name}</div>
                        <div className="text-xs text-black/60 font-mono">{deal.type}</div>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-black font-mono">{deal.value}</div>
                  </div>
                ))}
              </div>
            </ExpensiveCard>
          </div>
        </ScrollReveal>

        {/* ROW 2: PROJECT MANAGEMENT & AUTOMATION */}
        <ScrollReveal direction="up" distance={80}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ExpensiveCard intensity={6} className="p-8 order-2 md:order-1 border-2 border-black">
              {/* Fake UI: Sequence Flow - Industrial Tool Style */}
              <div className="space-y-4">
                <div className="mb-6 border-b-2 border-black pb-2">
                  <h4 className="text-sm font-bold text-black mb-2 font-space-grotesk uppercase tracking-wider">Smart Automation</h4>
                  <p className="text-xs text-black/60 font-mono">Wenn Lead nicht erreicht wird...</p>
                </div>
                <div className="space-y-3">
                  {[
                    { step: "1", action: "Lead called", status: "Not reached" },
                    { step: "2", action: "Email sent", status: "Tracking link" },
                    { step: "3", action: "Link opened", status: "Task created" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded border-2 border-black bg-black text-xs font-bold text-white font-mono">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-black font-space-grotesk">{item.action}</div>
                        <div className="text-xs text-black/60 font-mono">{item.status}</div>
                      </div>
                      {i < 2 && (
                        <div className="h-8 w-0.5 bg-black" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t-2 border-black">
                  <div className="text-xs font-bold text-black font-mono uppercase tracking-wider">Automatisch • Kein manueller Input</div>
                </div>
              </div>
            </ExpensiveCard>
                    <div className="order-1 md:order-2">
                      <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6 font-space-grotesk">
                        Project Management mit Sequences
                      </h3>
                      <p className="text-xl text-black/70 mb-8 leading-relaxed font-inter">
                Für jedes Project kannst du Goals definieren, viele Sources splitten und Sequences geben. 
                Beispiel: Lead called, nicht erreicht → Email mit Tracking-Link wird automatisch gesendet. 
                Person öffnet Link → Task {'"'}Call again{'"'} wird automatisch erstellt.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ROW 3: DEAL MANAGEMENT - Industrial Tool Style */}
        <ScrollReveal direction="up" distance={80}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                      <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6 font-space-grotesk">
                        Deal Management für Bestandskunden
                      </h3>
                      <p className="text-xl text-black/70 mb-8 leading-relaxed font-inter">
                Auch für Menschen mit vielen Bestandskunden: Finde die Next Steps, damit du bestehende Kunden nicht ignorierst. 
                Egal ob Deal oder Pipeline, neuer Kunde oder Bestandskunde – du weißt immer, was los ist.
              </p>
            </div>
            <ExpensiveCard intensity={6} className="p-10 border-2 border-black">
              {/* Fake UI: Deal Cards - Industrial Tool Style */}
              <div className="space-y-4">
                <div className="mb-6 border-b-2 border-black pb-2">
                  <h4 className="text-sm font-bold text-black mb-2 font-space-grotesk uppercase tracking-wider">Inaktive Bestandskunden</h4>
                  <p className="text-xs text-black/60 font-mono">6 Monate keine Aktivität</p>
                </div>
                {[
                  { name: "Acme Corp", deal: "€50K", nextStep: "Q1 Review Call", days: "180 Tage" },
                  { name: "TechStart GmbH", deal: "€25K", nextStep: "Upsell Opportunity", days: "120 Tage" },
                ].map((deal, i) => (
                  <div key={i} className="rounded border-2 border-black bg-white p-4 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="text-sm font-bold text-black font-space-grotesk">{deal.name}</div>
                        <div className="text-xs text-black/60 font-mono">{deal.days} inaktiv</div>
                      </div>
                      <div className="text-sm font-bold text-black font-mono">{deal.deal}</div>
                    </div>
                    <div className="pt-3 border-t-2 border-black">
                      <div className="text-xs text-black/60 mb-1 font-mono uppercase tracking-wider">Next Step</div>
                      <div className="text-sm font-bold text-black font-space-grotesk">{deal.nextStep}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ExpensiveCard>
          </div>
        </ScrollReveal>

        {/* ROW 4: RESEARCH & DATA HUB - Industrial Tool Style */}
        <ScrollReveal direction="up" distance={80}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ExpensiveCard intensity={6} className="p-10 order-2 md:order-1 border-2 border-black">
              {/* Fake UI: Research Results - Industrial Tool Style */}
              <div className="space-y-4">
                <div className="mb-6 border-b-2 border-black pb-2">
                  <h4 className="text-sm font-bold text-black mb-2 font-space-grotesk uppercase tracking-wider">Research Results</h4>
                  <p className="text-xs text-black/60 font-mono">Kontaktpersonen & Insider-Infos</p>
                </div>
                {[
                  { type: "CEO gefunden", source: "LinkedIn", detail: "Email verfügbar" },
                  { type: "Funding News", source: "Crunchbase", detail: "Series B • €5M" },
                  { type: "Tech Stack", source: "BuiltWith", detail: "React, AWS, Stripe" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded border-2 border-black bg-white p-3 shadow-[1px_1px_0_0_rgba(0,0,0,1)]">
                    <div className="h-8 w-8 rounded border-2 border-black bg-black" />
                    <div className="flex-1">
                      <div className="text-sm font-bold text-black font-space-grotesk">{item.type}</div>
                      <div className="text-xs text-black/60 font-mono">{item.source} • {item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ExpensiveCard>
                    <div className="order-1 md:order-2">
                      <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6 font-space-grotesk">
                        Research & Data Hub
                      </h3>
                      <p className="text-xl text-black/70 mb-8 leading-relaxed font-inter">
                Finde Kontaktpersonen im Internet, Informationen, Insider-Infos. 
                Data Hub: Alle deine bestehenden Daten – Excel-Tabellen, PDFs, alles kannst du einspeisen. 
                Der smarte Algorithmus im Hintergrund versteht alles.
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
