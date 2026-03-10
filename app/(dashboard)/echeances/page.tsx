import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { TopNavbar } from "@/components/dashboard/top-navbar"
import { EcheancesTable } from "@/components/echeances/echeances-table"
import { OverduePanel } from "@/components/echeances/overdue-panel"
import { CalendarView } from "@/components/echeances/calendar-view"
import { AIInsights } from "@/components/echeances/ai-insights"
import { AddEcheanceSheet } from "@/components/echeances/add-echeance-sheet"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Search,
  Download,
  CalendarClock,
  Clock,
  AlertTriangle,
  Banknote,
  TrendingUp,
} from "lucide-react"

export const metadata = {
  title: "Échéances | RenewFlow",
  description: "Suivez toutes les échéances de paiement, les renouvellements et les retards.",
}

export default function EcheancesPage() {
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
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground shadow-sm">
                  <CalendarClock className="h-5 w-5 text-background" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                    Échéances
                  </h1>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Suivez toutes les échéances de paiement, les renouvellements et les retards.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-9 gap-2">
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Exporter</span>
                </Button>
                <AddEcheanceSheet />
              </div>
            </div>
          </div>

          {/* KPI Summary Cards */}
          <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border/60 bg-card p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100">
                  <Clock className="h-4 w-4 text-sky-600" />
                </div>
                <Badge variant="outline" className="bg-sky-500/10 text-sky-600 border-sky-500/20">
                  Cette semaine
                </Badge>
              </div>
              <p className="mt-3 text-2xl font-bold tabular-nums text-foreground">12</p>
              <p className="mt-0.5 text-sm text-muted-foreground">Échéances cette semaine</p>
            </div>

            <div className="rounded-xl border border-border/60 bg-card p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100">
                  <CalendarClock className="h-4 w-4 text-emerald-600" />
                </div>
                <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                  Ce mois
                </Badge>
              </div>
              <p className="mt-3 text-2xl font-bold tabular-nums text-foreground">34</p>
              <p className="mt-0.5 text-sm text-muted-foreground">Échéances ce mois-ci</p>
            </div>

            <div className="rounded-xl border border-border/60 bg-card p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-100">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                </div>
                <Badge variant="outline" className="bg-red-500/10 text-red-600 border-red-500/20">
                  Urgent
                </Badge>
              </div>
              <p className="mt-3 text-2xl font-bold tabular-nums text-foreground">4</p>
              <p className="mt-0.5 text-sm text-muted-foreground">Paiements en retard</p>
            </div>

            <div className="rounded-xl border border-border/60 bg-card p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100">
                  <Banknote className="h-4 w-4 text-amber-600" />
                </div>
                <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +8%
                </Badge>
              </div>
              <p className="mt-3 text-2xl font-bold tabular-nums text-foreground">42 850 EUR</p>
              <p className="mt-0.5 text-sm text-muted-foreground">Montant total à encaisser</p>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
              {/* Search */}
              <div className="relative w-full sm:max-w-xs">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Rechercher un client ou un produit"
                  className="h-10 w-full border-border/60 bg-card pl-10 shadow-sm"
                />
              </div>

              {/* Status Filter */}
              <Select>
                <SelectTrigger className="h-10 w-full border-border/60 bg-card shadow-sm sm:w-[140px]">
                  <SelectValue placeholder="Statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les statuts</SelectItem>
                  <SelectItem value="paye">Payé</SelectItem>
                  <SelectItem value="a_venir">À venir</SelectItem>
                  <SelectItem value="en_retard">En retard</SelectItem>
                  <SelectItem value="a_risque">À risque</SelectItem>
                </SelectContent>
              </Select>

              {/* Frequency Filter */}
              <Select>
                <SelectTrigger className="h-10 w-full border-border/60 bg-card shadow-sm sm:w-[140px]">
                  <SelectValue placeholder="Fréquence" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes</SelectItem>
                  <SelectItem value="mensuel">Mensuel</SelectItem>
                  <SelectItem value="trimestriel">Trimestriel</SelectItem>
                  <SelectItem value="annuel">Annuel</SelectItem>
                </SelectContent>
              </Select>

              {/* Period Filter */}
              <Select>
                <SelectTrigger className="h-10 w-full border-border/60 bg-card shadow-sm sm:w-[140px]">
                  <SelectValue placeholder="Période" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes</SelectItem>
                  <SelectItem value="week">Cette semaine</SelectItem>
                  <SelectItem value="month">Ce mois</SelectItem>
                  <SelectItem value="quarter">Ce trimestre</SelectItem>
                  <SelectItem value="year">Cette année</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-6 xl:grid-cols-3">
            {/* Left Column - Table & Overdue */}
            <div className="space-y-6 xl:col-span-2">
              {/* Main Table */}
              <EcheancesTable />

              {/* Overdue Section */}
              <OverduePanel />
            </div>

            {/* Right Column - Calendar & AI */}
            <div className="space-y-6">
              {/* Calendar View */}
              <CalendarView />

              {/* AI Insights */}
              <AIInsights />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
