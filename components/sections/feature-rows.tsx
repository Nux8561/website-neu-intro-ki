"use client"

import * as React from "react";
import { ArrowRight } from "iconoir-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ExpensiveCard } from "@/components/ui/3d-card";
import { ENTERPRISE_SPRING } from "@/lib/animations";
import { motion } from "framer-motion";

export function FeatureRows() {
  return (
    <section className="space-y-40 py-40 md:py-48 bg-white attio-grid-pattern attio-connection-lines">
      <div className="mx-auto max-w-[1200px] px-4">
        
        {/* ROW 1: CLARITY & FOCUS */}
        <ScrollReveal direction="up" distance={80}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-6">
                Immer wissen, was zu tun ist
              </h3>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Top Opportunities heute, was zu tun ist, worauf du dich heute fokussieren musst. 
                Keine 100 zufälligen Calls – die ersten 20 sind immer die mit dem besten Potential.
              </p>
            </div>
            <ExpensiveCard intensity={6} className="p-10">
              {/* Fake UI: Focus Dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-sm font-semibold text-slate-900">Heute</h4>
                  <div className="text-xs text-slate-500">3 Prioritäten</div>
                </div>
                {[
                  { name: "Acme Corp", type: "Strong Buy Signal", value: "€50K", priority: 1 },
                  { name: "TechStart GmbH", type: "Warm Lead", value: "€25K", priority: 2 },
                  { name: "DataFlow Inc", type: "Follow-up", value: "€15K", priority: 3 },
                ].map((deal, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-600">
                        #{deal.priority}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-slate-900">{deal.name}</div>
                        <div className="text-xs text-slate-500">{deal.type}</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-slate-700">{deal.value}</div>
                  </div>
                ))}
              </div>
            </ExpensiveCard>
          </div>
        </ScrollReveal>

        {/* ROW 2: PROJECT MANAGEMENT & AUTOMATION */}
        <ScrollReveal direction="up" distance={80}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ExpensiveCard intensity={6} className="p-8 order-2 md:order-1">
              {/* Fake UI: Sequence Flow */}
              <div className="space-y-4">
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">Smart Automation</h4>
                  <p className="text-xs text-slate-500">Wenn Lead nicht erreicht wird...</p>
                </div>
                <div className="space-y-3">
                  {[
                    { step: "1", action: "Lead called", status: "Not reached", icon: "📞" },
                    { step: "2", action: "Email sent", status: "Tracking link", icon: "📧" },
                    { step: "3", action: "Link opened", status: "Task created", icon: "✅" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-600">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-slate-900">{item.action}</div>
                        <div className="text-xs text-slate-500">{item.status}</div>
                      </div>
                      {i < 2 && (
                        <div className="h-8 w-0.5 bg-slate-200" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <div className="text-xs font-medium text-slate-700">Automatisch • Kein manueller Input</div>
                </div>
              </div>
            </ExpensiveCard>
                    <div className="order-1 md:order-2">
                      <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-6">
                        Project Management mit Sequences
                      </h3>
                      <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Für jedes Project kannst du Goals definieren, viele Sources splitten und Sequences geben. 
                Beispiel: Lead called, nicht erreicht → Email mit Tracking-Link wird automatisch gesendet. 
                Person öffnet Link → Task {'"'}Call again{'"'} wird automatisch erstellt.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ROW 3: DEAL MANAGEMENT */}
        <ScrollReveal direction="up" distance={80}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                      <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-6">
                        Deal Management für Bestandskunden
                      </h3>
                      <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Auch für Menschen mit vielen Bestandskunden: Finde die Next Steps, damit du bestehende Kunden nicht ignorierst. 
                Egal ob Deal oder Pipeline, neuer Kunde oder Bestandskunde – du weißt immer, was los ist.
              </p>
            </div>
            <ExpensiveCard intensity={6} className="p-10">
              {/* Fake UI: Deal Cards */}
              <div className="space-y-4">
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">Inaktive Bestandskunden</h4>
                  <p className="text-xs text-slate-500">6 Monate keine Aktivität</p>
                </div>
                {[
                  { name: "Acme Corp", deal: "€50K", nextStep: "Q1 Review Call", days: "180 Tage" },
                  { name: "TechStart GmbH", deal: "€25K", nextStep: "Upsell Opportunity", days: "120 Tage" },
                ].map((deal, i) => (
                  <div key={i} className="rounded-lg border border-slate-200 bg-white p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="text-sm font-semibold text-slate-900">{deal.name}</div>
                        <div className="text-xs text-slate-500">{deal.days} inaktiv</div>
                      </div>
                      <div className="text-sm font-medium text-slate-700">{deal.deal}</div>
                    </div>
                    <div className="pt-3 border-t border-slate-100">
                      <div className="text-xs text-slate-500 mb-1">Next Step</div>
                      <div className="text-sm font-medium text-slate-900">{deal.nextStep}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ExpensiveCard>
          </div>
        </ScrollReveal>

        {/* ROW 4: RESEARCH & DATA HUB */}
        <ScrollReveal direction="up" distance={80}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ExpensiveCard intensity={6} className="p-10 order-2 md:order-1">
              {/* Fake UI: Research Results */}
              <div className="space-y-4">
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">Research Results</h4>
                  <p className="text-xs text-slate-500">Kontaktpersonen & Insider-Infos</p>
                </div>
                {[
                  { type: "CEO gefunden", source: "LinkedIn", detail: "Email verfügbar" },
                  { type: "Funding News", source: "Crunchbase", detail: "Series B • €5M" },
                  { type: "Tech Stack", source: "BuiltWith", detail: "React, AWS, Stripe" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3">
                    <div className="h-8 w-8 rounded bg-slate-200" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-900">{item.type}</div>
                      <div className="text-xs text-slate-500">{item.source} • {item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ExpensiveCard>
                    <div className="order-1 md:order-2">
                      <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-6">
                        Research & Data Hub
                      </h3>
                      <p className="text-xl text-slate-600 mb-8 leading-relaxed">
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
