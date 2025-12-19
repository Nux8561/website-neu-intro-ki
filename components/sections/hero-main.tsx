import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Search, Command, CheckCircle2 } from "lucide-react"
import { ENTERPRISE_SPRING } from "@/lib/animations"

export function HeroMain() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 pt-20 pb-24 md:pt-24 md:pb-32 border-b border-slate-200">
      {/* Subtiles technisches Grid im Hintergrund */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-[1120px] flex-col gap-12 px-4 md:gap-16">
        {/* Linke Spalte: Badge, Headline, Subline, CTAs */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={ENTERPRISE_SPRING}
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="uppercase tracking-[0.12em] text-[10px] text-slate-500">
              Research Orchestrator
            </span>
            <span className="rounded-full bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600">
              Von passivem CRM zu aktiver Führung
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[32px] leading-[40px] -tracking-[0.02em] font-semibold text-slate-900 sm:text-[40px] sm:leading-[44px] md:text-[48px] md:leading-[52px]">
            Das erste CRM, das Ihre{" "}
            <span className="text-slate-500">Research-Pipeline orchestriert.</span>
          </h1>

          {/* Subline */}
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500 md:text-base">
            Intro KI analysiert Signale aus Datenräumen, News und CRM – und übersetzt sie in konkrete
            &ldquo;Next Best Actions&ldquo; für Vertrieb und Investor Relations. Kein Suchen mehr, nur noch
            Finden und Automatisieren.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-transform duration-attio-fast ease-attio-ease-out hover:scale-[1.02] hover:bg-slate-800"
            >
              Demo buchen
              <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link
              href="/research"
              className="inline-flex items-center text-xs font-medium text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline"
            >
              Architektur des Research Orchestrators ansehen
            </Link>
          </div>

          {/* Meta-Info Reihe */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-medium text-slate-500">
            <div className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>DSGVO-ready</span>
            </div>
            <div className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              <span>Built on Attio + Supabase</span>
            </div>
            <div className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span>Designed für Research &amp; Deal-Teams</span>
            </div>
          </div>
        </motion.div>

        {/* Rechte Spalte: Fake UI Window */}
        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...ENTERPRISE_SPRING, delay: 0.1 }}
        >
          {/* Subtiler Farbverlauf hinter dem Fenster */}
          <div
            className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-tr from-slate-100 via-sky-100/60 to-emerald-50/70 blur-2xl"
            aria-hidden="true"
          />

          {/* App-Fenster */}
          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            {/* Fenster-Header */}
            <div className="flex h-10 items-center justify-between border-b border-slate-200/80 bg-slate-50/60 px-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              </div>
              <div className="hidden items-center gap-2 rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] text-slate-400 shadow-sm sm:flex">
                <Search className="h-3 w-3" />
                <span>Research Entities durchsuchen...</span>
                <span className="ml-auto inline-flex items-center gap-0.5 text-[10px] text-slate-300">
                  <Command className="h-2.5 w-2.5" />
                  K
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <span className="hidden rounded-full border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700 md:inline">
                  Live-Orchestrierung aktiv
                </span>
              </div>
            </div>

            {/* Layout: Sidebar + Content */}
            <div className="flex h-[320px] text-left">
              {/* Sidebar */}
              <aside className="hidden w-52 border-r border-slate-200/80 bg-slate-50/60 p-3 text-xs font-medium text-slate-600 sm:flex sm:flex-col sm:gap-1.5">
                <span className="mb-1 text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  Orchestrierungen
                </span>
                {[
                  "News → Warm Leads",
                  "Funding Runden Monitor",
                  "Tech Signals Tracker",
                  "Account Deep-Dives",
                ].map((item, index) => (
                  <button
                    key={item}
                    className={`flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-[11px] ${
                      index === 1
                        ? "bg-slate-900 text-slate-50"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                    type="button"
                  >
                    <span>{item}</span>
                    {index === 1 && (
                      <span className="rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[9px] font-medium text-emerald-100">
                        live
                      </span>
                    )}
                  </button>
                ))}

                <div className="mt-3 rounded-md border border-dashed border-slate-200 bg-slate-50/80 px-2 py-1.5 text-[11px] text-slate-500">
                  <span className="block">+ Neue Orchestrierung</span>
                  <span className="text-[10px] text-slate-400">z. B. &ldquo;Konferenz Leads&ldquo;</span>
                </div>
              </aside>

              {/* Content-Bereich */}
              <div className="relative flex-1 bg-slate-50/40 p-4">
                {/* Grid-Hintergrund im Content */}
                <div
                  className="pointer-events-none absolute inset-0 -z-10 opacity-60"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Obere Zeile: KPI-Leiste */}
                <div className="mb-3 grid grid-cols-3 gap-3">
                  {[
                    { label: "Aktive Research-Läufe", value: "12", tone: "default" },
                    { label: "Identifizierte Chancen", value: "37", tone: "accent" },
                    { label: "Blocker", value: "3", tone: "muted" },
                  ].map((kpi) => (
                    <div
                      key={kpi.label}
                      className={`rounded-lg border border-slate-200 bg-white px-3 py-2 ${
                        kpi.tone === "accent"
                          ? "border-emerald-200 bg-emerald-50/40"
                          : kpi.tone === "muted"
                          ? "border-amber-100 bg-amber-50/40"
                          : ""
                      }`}
                    >
                      <div className="text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400">
                        {kpi.label}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-slate-900 tabular-nums">
                        {kpi.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mittelbereich: Node-ähnliche Karten (orthogonale Verbindungen) */}
                <div className="relative mt-2 grid grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)] gap-3">
                  {/* Linke "Node"-Liste */}
                  <div className="space-y-2">
                    {[
                      {
                        title: "Neu: Series-B Funding",
                        source: "News • 12 Quellen",
                        status: "Qualifiziert",
                        tone: "success",
                      },
                      {
                        title: "Hiring Push in DACH",
                        source: "LinkedIn Jobs • 34 Signale",
                        status: "Zu prüfen",
                        tone: "neutral",
                      },
                      {
                        title: "Technologie-Stack Wechsel",
                        source: "Tech Signals • 5 Integrationen",
                        status: "Sofort handeln",
                        tone: "alert",
                      },
                    ].map((item, index) => (
                      <div
                        key={item.title}
                        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 shadow-[0_1px_0_rgba(15,23,42,0.03)]"
                      >
                        <div className="mb-1 flex items-center justify-between gap-2">
                          <span className="truncate font-medium text-slate-900">{item.title}</span>
                          <span
                            className={`whitespace-nowrap rounded-full px-1.5 py-0.5 text-[10px] font-medium ${
                              item.tone === "success"
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                                : item.tone === "alert"
                                ? "bg-amber-50 text-amber-800 border border-amber-100"
                                : "bg-slate-50 text-slate-600 border border-slate-100"
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-slate-500">
                          <span>{item.source}</span>
                          <span className="inline-flex items-center gap-1 text-[10px] text-slate-400">
                            <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                            Score aktualisiert
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Rechte Spalte: Timeline / Action-Queue */}
                  <div className="flex flex-col gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[11px] text-slate-600">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
                        Nächste Aktionen
                      </span>
                      <span className="rounded-full bg-slate-50 px-1.5 py-0.5 text-[9px] font-medium text-slate-500">
                        Automatisiert
                      </span>
                    </div>

                    {[
                      {
                        label: "Top 5 Accounts mit Funding-Event an SDR-Team routen",
                        time: "in 12 Min",
                      },
                      {
                        label: "IC-Briefing für Q2-Investor-Update vorbereiten",
                        time: "heute, 16:00",
                      },
                      {
                        label: "Signals aus Konferenz &ldquo;NOAH&ldquo; clustern",
                        time: "wartet auf Daten",
                      },
                    ].map((action, index) => (
                      <div
                        key={action.label}
                        className="flex gap-2 rounded-md border border-slate-100/80 bg-slate-50/60 px-2 py-1.5"
                      >
                        <div className="mt-0.5 h-6 w-0.5 rounded-full bg-slate-200" />
                        <div className="flex-1">
                          <div className="text-[11px] text-slate-700">{action.label}</div>
                          <div className="mt-0.5 text-[10px] text-slate-400">{action.time}</div>
                        </div>
                      </div>
                    ))}

                    <div className="mt-1 flex items-center justify-between border-t border-dashed border-slate-200 pt-1.5 text-[10px] text-slate-400">
                      <span>Alle Aktionen werden im CRM protokolliert.</span>
                      <span className="hidden rounded-full border border-slate-200 px-2 py-0.5 text-[9px] font-medium text-slate-500 sm:inline">
                        Kein Excel mehr
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


