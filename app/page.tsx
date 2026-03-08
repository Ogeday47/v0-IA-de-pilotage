import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { TopNavbar } from "@/components/dashboard/top-navbar"
import { KpiCards } from "@/components/dashboard/kpi-cards"
import { UpcomingDeadlines } from "@/components/dashboard/upcoming-deadlines"
import { OverduePayments } from "@/components/dashboard/overdue-payments"
import { ClientsAtRisk } from "@/components/dashboard/clients-at-risk"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { RecentClients } from "@/components/dashboard/recent-clients"
import { AiAssistant } from "@/components/dashboard/ai-assistant"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 pl-64">
        <TopNavbar />

        <main className="p-6">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight">Tableau de bord</h1>
            <p className="mt-1 text-muted-foreground">
              Suivez vos échéances, vos retards et vos renouvellements clients en un coup d&apos;œil.
            </p>
          </div>

          {/* KPI Cards */}
          <section className="mb-8">
            <KpiCards />
          </section>

          {/* Quick Actions */}
          <section className="mb-8">
            <QuickActions />
          </section>

          {/* Main Grid */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left Column - 2/3 width */}
            <div className="space-y-6 lg:col-span-2">
              <UpcomingDeadlines />
              <RevenueChart />
            </div>

            {/* Right Column - 1/3 width */}
            <div className="space-y-6">
              <AiAssistant />
              <OverduePayments />
              <ClientsAtRisk />
            </div>
          </div>

          {/* Bottom Section */}
          <section className="mt-6">
            <RecentClients />
          </section>
        </main>
      </div>
    </div>
  )
}
