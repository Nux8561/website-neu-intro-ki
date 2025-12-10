import { EmptyState } from "@/components/crm/empty-state"

export default function DashboardPage() {
  return (
    <div className="p-6 md:p-8">
      <EmptyState
        title="Willkommen bei IntroKI"
        description="Erstellen Sie Ihren ersten Lead, um zu beginnen."
        actionLabel="Lead erstellen"
        actionHref="/dashboard/leads/new"
      />
    </div>
  )
}

