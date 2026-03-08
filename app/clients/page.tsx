import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { TopNavbar } from "@/components/dashboard/top-navbar"
import { ClientsTable } from "@/components/clients/clients-table"
import { AddClientSheet } from "@/components/clients/add-client-sheet"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, SlidersHorizontal, Download, Upload, Users } from "lucide-react"

export const metadata = {
  title: "Clients | RenewFlow",
  description: "Gérez votre portefeuille de clients et suivez leurs abonnements.",
}

export default function ClientsPage() {
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
                  <Users className="h-5 w-5 text-background" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                    Clients
                  </h1>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Gérez votre portefeuille de 247 clients actifs
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-9 gap-2">
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Exporter</span>
                </Button>
                <Button variant="outline" size="sm" className="h-9 gap-2">
                  <Upload className="h-4 w-4" />
                  <span className="hidden sm:inline">Importer</span>
                </Button>
                <AddClientSheet />
              </div>
            </div>
          </div>

          {/* Stats Summary */}
          <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border/60 bg-card p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total clients</span>
                <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                  +12%
                </Badge>
              </div>
              <p className="mt-1 text-2xl font-bold tabular-nums text-foreground">247</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Clients actifs</span>
                <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                  94%
                </Badge>
              </div>
              <p className="mt-1 text-2xl font-bold tabular-nums text-foreground">232</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">À risque</span>
                <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-500/20">
                  Attention
                </Badge>
              </div>
              <p className="mt-1 text-2xl font-bold tabular-nums text-foreground">8</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Résiliés ce mois</span>
                <Badge variant="outline" className="bg-red-500/10 text-red-600 border-red-500/20">
                  -2%
                </Badge>
              </div>
              <p className="mt-1 text-2xl font-bold tabular-nums text-foreground">7</p>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
              {/* Search */}
              <div className="relative w-full sm:max-w-xs">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Rechercher un client..."
                  className="h-10 w-full border-border/60 bg-card pl-10 shadow-sm"
                />
              </div>

              {/* Subscription Type Filter */}
              <Select>
                <SelectTrigger className="h-10 w-full border-border/60 bg-card shadow-sm sm:w-[180px]">
                  <SelectValue placeholder="Type d'abonnement" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les types</SelectItem>
                  <SelectItem value="mensuel">Mensuel</SelectItem>
                  <SelectItem value="trimestriel">Trimestriel</SelectItem>
                  <SelectItem value="annuel">Annuel</SelectItem>
                </SelectContent>
              </Select>

              {/* Status Filter */}
              <Select>
                <SelectTrigger className="h-10 w-full border-border/60 bg-card shadow-sm sm:w-[160px]">
                  <SelectValue placeholder="Statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les statuts</SelectItem>
                  <SelectItem value="actif">Actif</SelectItem>
                  <SelectItem value="en_attente">En attente</SelectItem>
                  <SelectItem value="a_risque">À risque</SelectItem>
                  <SelectItem value="resilie">Résilié</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* More Filters Button */}
            <Button variant="outline" size="sm" className="h-10 gap-2 border-border/60 bg-card shadow-sm">
              <SlidersHorizontal className="h-4 w-4" />
              Plus de filtres
            </Button>
          </div>

          {/* Clients Table */}
          <ClientsTable />
        </main>
      </div>
    </div>
  )
}
