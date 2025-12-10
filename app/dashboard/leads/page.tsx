import { LeadsTable } from "@/components/crm/leads-table"

export default function LeadsPage() {
  return (
    <div className="p-6 md:p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-jakarta font-medium tracking-tight text-white mb-2">
          Leads
        </h1>
        <p className="text-white/70 font-inter">
          Verwalten Sie Ihre Leads und Kontakte
        </p>
      </div>
      <LeadsTable />
    </div>
  )
}

