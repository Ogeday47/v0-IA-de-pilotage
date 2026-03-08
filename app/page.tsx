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
import { CalendarDays } from "lucide-react"

export default function DashboardPage() {
  const today = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 lg:pl-[260px]">
        <TopNavbar />

        <main className="px-4 py-6 pb-24 lg:px-8 lg:pb-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                  Tableau de bord
                </h1>
                <p className="mt-1 text-sm text-muted-foreground lg:text-base">
                  Suivez vos échéances, relances et revenus récurrents en un coup d{"'"}œil.
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-card px-3 py-2 text-sm text-muted-foreground shadow-sm">
                <CalendarDays className="h-4 w-4" />
                <span className="capitalize">{today}</span>
              </div>
            </div>
          </div>

          {/* KPI Cards */}
          <section className="mb-6">
            <KpiCards />
          </section>

          {/* Quick Actions */}
          <section className="mb-6">
            <QuickActions />
          </section>

          {/* Main Grid */}
          <div className="grid gap-6 xl:grid-cols-3">
            {/* Left Column - 2/3 width */}
            <div className="space-y-6 xl:col-span-2">
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
