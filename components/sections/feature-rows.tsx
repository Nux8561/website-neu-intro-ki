 "use client"

import * as React from "react";
import { ArrowRight } from "lucide-react";

export function FeatureRows() {
  return (
    <section className="space-y-32 py-32 bg-white attio-grid-pattern">
      {/* FEATURE 1: DATA ENRICHMENT (Text Links, Bild Rechts) */}
      <div className="mx-auto grid max-w-[1200px] gap-16 px-4 md:grid-cols-2 md:items-center">
        {/* Text Side */}
        <div className="max-w-md">
          {/* Fake UI: Mini Database Table statt Icon */}
          <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200/50 bg-blue-50/80 backdrop-blur-sm shadow-attio-sm">
            <div className="space-y-0.5">
              <div className="h-1 w-6 bg-blue-600 rounded" />
              <div className="h-1 w-4 bg-blue-400 rounded" />
              <div className="h-1 w-5 bg-blue-500 rounded" />
            </div>
          </div>
          <h2 className="mb-4 text-3xl font-semibold tracking-tighter text-slate-900 md:text-4xl">
            Daten, die sich <br className="hidden lg:block" />
            <span className="text-slate-400">selbst pflegen.</span>
          </h2>
          <p className="mb-8 text-lg text-slate-500 leading-relaxed">
            Intro KI synchronisiert sich mit E-Mail, Kalender und LinkedIn. 
            Jeder Kontakt wird automatisch angereichert – inklusive Jobwechsel, 
            Funding-News und Tech-Stack.
          </p>
          
          <ul className="space-y-4">
            {[
              "Automatische Deduplizierung",
              "DSGVO-konforme Datenanreicherung",
              "Echtzeit-Synchronisation (2-Way)"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Check className="h-3 w-3" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual Side (Fake UI: Data Card) */}
        <div className="relative rounded-2xl border border-white/60 bg-white/80 backdrop-blur-xl p-8 shadow-attio-diffuse">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px)", backgroundSize: "24px 24px" }}
          />
          
          {/* The Card */}
          <div className="relative rounded-xl border border-slate-200/60 bg-white/90 backdrop-blur-sm p-5 shadow-attio-md">
            {/* Header */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-lg font-bold text-slate-500">
                JD
              </div>
              <div>
                <div className="mb-2 h-3 w-32 rounded bg-slate-200" />
                <div className="h-2 w-20 rounded bg-slate-100" />
              </div>
              <div className="ml-auto rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-600">
                Enriched
              </div>
            </div>

            {/* Data Fields */}
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded border border-slate-50 p-2 transition-colors hover:bg-slate-50"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-200/50 bg-blue-50/80 backdrop-blur-sm shadow-attio-sm">
                    <div className="space-y-0.5">
                      <div className="h-0.5 w-3 bg-blue-600 rounded" />
                      <div className="h-0.5 w-2 bg-blue-400 rounded" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex justify-between">
                      <div className="h-2 w-16 rounded bg-slate-200" />
                      <div className="h-2 w-4 rounded bg-slate-100" />
                    </div>
                    <div className="h-1.5 w-24 rounded bg-slate-100" />
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Notification */}
            <div className="absolute -right-6 top-10 flex items-center gap-3 rounded-lg border border-slate-200/60 bg-white/90 backdrop-blur-sm p-3 text-xs shadow-attio-lg">
              <div className="relative h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </div>
              <span className="text-slate-600">Neuer Jobtitel erkannt</span>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE 2: WORKFLOWS (Bild Links, Text Rechts) */}
      <div className="mx-auto grid max-w-[1200px] gap-16 px-4 md:grid-cols-2 md:items-center">
        {/* Visual Side (Fake UI: Workflow Node Graph) */}
        <div className="order-2 md:order-1 group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/95 backdrop-blur-xl p-8 shadow-attio-diffuse">
          {/* Dark Mode Grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
           
          {/* Nodes */}
          <div className="relative z-10 flex flex-col items-center gap-8 py-8">
            {/* Trigger Node */}
            <div className="flex w-48 items-center gap-3 rounded-lg border border-slate-700/50 bg-slate-800/90 backdrop-blur-sm p-3 text-xs text-white shadow-attio-md">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-blue-400" />
              </div>
              <span>New Lead Created</span>
            </div>
             
            {/* Connector Line */}
            <div className="relative h-8 w-0.5 bg-slate-700">
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-600" />
            </div>

            {/* Action Node (Split) */}
            <div className="grid w-full max-w-sm grid-cols-2 gap-4">
              <div className="flex items-center gap-2 rounded-lg border border-slate-700/50 bg-slate-800/60 backdrop-blur-sm p-3 text-xs text-white opacity-50 shadow-attio-sm">
                <div className="flex h-5 w-5 items-center justify-center rounded-lg border border-slate-600 bg-slate-700/50">?</div>
                <span>Check Size</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-emerald-900/50 bg-emerald-900/30 backdrop-blur-sm p-3 text-xs text-emerald-100 shadow-attio-md ring-1 ring-emerald-500/50">
                <div className="flex h-5 w-5 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/20">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
                <span>Enrich Data</span>
              </div>
            </div>
          </div>
        </div>

        {/* Text Side */}
        <div className="order-1 max-w-md md:order-2">
          {/* Fake UI: Mini Workflow Nodes statt Icon */}
          <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-purple-200/50 bg-purple-50/80 backdrop-blur-sm shadow-attio-sm">
            <div className="relative">
              <div className="h-2 w-2 rounded-full bg-purple-600" />
              <div className="absolute left-1 top-2 h-3 w-0.5 bg-purple-400" />
              <div className="absolute left-0.5 top-4 h-2 w-2 rounded-full bg-purple-500" />
            </div>
          </div>
          <h2 className="mb-4 text-3xl font-semibold tracking-tighter text-slate-900 md:text-4xl">
            Workflows ohne <br className="hidden lg:block" />
            <span className="text-slate-400">Ingenieurs-Studium.</span>
          </h2>
          <p className="mb-8 text-lg text-slate-500 leading-relaxed">
            Baue komplexe Automatisierungen per Drag &amp; Drop. 
            &ldquo;Wenn Lead &gt; 50 Mitarbeiter, dann erstelle Deal und benachrichtige Slack.&ldquo; 
            So einfach wie Lego.
          </p>
          <button className="group inline-flex items-center text-sm font-medium text-slate-900">
            Workflow Library ansehen
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}


