import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { TopNavbar } from "@/components/dashboard/top-navbar"
import { ClientHeader } from "@/components/clients/detail/client-header"
import { ClientSummaryCard } from "@/components/clients/detail/client-summary-card"
import { ClientKpiCards } from "@/components/clients/detail/client-kpi-cards"
import { ClientTabs } from "@/components/clients/detail/client-tabs"
import { ClientAiAssistant } from "@/components/clients/detail/client-ai-assistant"
import { ClientSideCards } from "@/components/clients/detail/client-side-cards"

export const metadata = {
  title: "Fiche Client | RenewFlow",
  description: "Consultez les informations du client, ses échéances, ses relances et son historique.",
}

export default function ClientDetailPage() {
  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 lg:pl-[260px]">
        <TopNavbar />

        <main className="px-4 py-6 pb-24 lg:px-8 lg:pb-8">
          {/* Page Header */}
          <ClientHeader />

          {/* Main Grid Layout */}
          <div className="grid gap-6 xl:grid-cols-3">
            {/* Left Column - Main Content */}
            <div className="space-y-6 xl:col-span-2">
              {/* Client Summary Card */}
              <ClientSummaryCard />

              {/* KPI Cards */}
              <ClientKpiCards />

              {/* Tabbed Content */}
              <ClientTabs />
            </div>

            {/* Right Column - AI Assistant & Side Cards */}
            <div className="space-y-6">
              {/* AI Assistant */}
              <ClientAiAssistant />

              {/* Side Cards */}
              <ClientSideCards />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
