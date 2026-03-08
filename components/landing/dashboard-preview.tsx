import { Users, CalendarDays, AlertCircle, Euro, TrendingUp, Bell, Settings, Search, ChevronRight, MoreHorizontal, ArrowUpRight, ArrowDownRight } from "lucide-react"

const stats = [
  { label: "Clients actifs", value: "247", icon: Users, trend: "+12%", trendUp: true },
  { label: "Échéances ce mois", value: "38", icon: CalendarDays, trend: null, trendUp: null },
  { label: "Paiements en retard", value: "5", icon: AlertCircle, trend: "-23%", trendUp: false },
  { label: "Revenu attendu", value: "48 500", suffix: "€", icon: Euro, trend: "+8%", trendUp: true },
]

const upcomingRenewals = [
  { client: "Agence Digitale Pro", email: "contact@agencedigitale.fr", date: "12 mars 2026", amount: "1 200€", status: "À relancer", avatar: "ADP" },
  { client: "Tech Solutions SAS", email: "admin@techsolutions.com", date: "15 mars 2026", amount: "890€", status: "Confirmé", avatar: "TS" },
  { client: "Marketing Plus", email: "hello@marketingplus.fr", date: "18 mars 2026", amount: "2 400€", status: "En attente", avatar: "MP" },
  { client: "Studio Créatif", email: "info@studiocréatif.fr", date: "22 mars 2026", amount: "750€", status: "Confirmé", avatar: "SC" },
]

const riskClients = [
  { name: "WebAgency Corp", risk: "Élevé", revenue: "3 200€/mois", reason: "2 factures impayées", score: 85 },
  { name: "Digital First", risk: "Moyen", revenue: "1 800€/mois", reason: "Pas de réponse aux relances", score: 62 },
  { name: "StartUp Vision", risk: "Faible", revenue: "950€/mois", reason: "Retard habituel", score: 35 },
]

export function DashboardPreview() {
  return (
    <section id="apercu" className="py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Aperçu du produit
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">
            Tout votre business en un coup d'œil
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un tableau de bord conçu pour vous faire gagner du temps et ne rien manquer.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-b from-accent/5 via-accent/10 to-transparent rounded-3xl blur-2xl" />
          
          <div className="relative rounded-2xl lg:rounded-3xl border border-border bg-card shadow-2xl shadow-foreground/5 overflow-hidden">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/30">
              <div className="flex items-center gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent">
                  <span className="text-sm font-bold text-accent-foreground">R</span>
                </div>
                <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-background border border-border">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Rechercher...</span>
                  <span className="ml-8 text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">⌘K</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
                  <Bell className="h-5 w-5 text-muted-foreground" />
                  <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-accent rounded-full" />
                </button>
                <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                  <Settings className="h-5 w-5 text-muted-foreground" />
                </button>
                <div className="h-9 w-9 rounded-full bg-foreground flex items-center justify-center">
                  <span className="text-xs font-medium text-background">JD</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Date indicator */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Vue d'ensemble</h3>
                  <p className="text-sm text-muted-foreground">Mars 2026</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Dernière mise à jour: il y a 2 min</span>
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="p-5 rounded-xl bg-background border border-border hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-lg bg-muted">
                        <stat.icon className="h-4 w-4 text-muted-foreground" />
                      </div>
                      {stat.trend && (
                        <div className={`flex items-center gap-1 text-xs font-medium ${stat.trendUp ? 'text-accent' : 'text-destructive'}`}>
                          {stat.trendUp ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                          {stat.trend}
                        </div>
                      )}
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-foreground">
                      {stat.value}{stat.suffix && <span className="text-lg font-semibold text-muted-foreground">{stat.suffix}</span>}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Main Dashboard Grid */}
              <div className="grid lg:grid-cols-5 gap-6">
                {/* Upcoming Renewals - Wider */}
                <div className="lg:col-span-3 rounded-xl border border-border bg-background p-5">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-accent" />
                      <h3 className="font-semibold text-foreground">Échéances des 30 prochains jours</h3>
                    </div>
                    <button className="text-sm text-accent hover:underline flex items-center gap-1">
                      Voir tout <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="space-y-3">
                    {upcomingRenewals.map((renewal, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-foreground/10 flex items-center justify-center">
                            <span className="text-xs font-semibold text-foreground">{renewal.avatar}</span>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{renewal.client}</p>
                            <p className="text-sm text-muted-foreground">{renewal.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-right hidden sm:block">
                            <p className="font-semibold text-foreground">{renewal.amount}</p>
                            <p className="text-sm text-muted-foreground">{renewal.date}</p>
                          </div>
                          <span className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                            renewal.status === 'Confirmé' 
                              ? 'bg-accent/10 text-accent' 
                              : renewal.status === 'À relancer'
                              ? 'bg-destructive/10 text-destructive'
                              : 'bg-chart-4/10 text-chart-4'
                          }`}>
                            {renewal.status}
                          </span>
                          <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1">
                            <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Risk Clients */}
                <div className="lg:col-span-2 rounded-xl border border-border bg-background p-5">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-destructive" />
                      <h3 className="font-semibold text-foreground">Clients à risque</h3>
                    </div>
                    <span className="text-xs bg-destructive/10 text-destructive px-2 py-1 rounded-full font-medium">3 alertes</span>
                  </div>
                  <div className="space-y-4">
                    {riskClients.map((client, index) => (
                      <div key={index} className="p-4 rounded-xl bg-muted/50">
                        <div className="flex items-center justify-between mb-3">
                          <p className="font-medium text-foreground">{client.name}</p>
                          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                            client.risk === 'Élevé' 
                              ? 'bg-destructive/10 text-destructive' 
                              : client.risk === 'Moyen'
                              ? 'bg-chart-4/10 text-chart-4'
                              : 'bg-accent/10 text-accent'
                          }`}>
                            {client.risk}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{client.reason}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">{client.revenue}</span>
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-20 bg-muted rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full ${
                                  client.score > 70 ? 'bg-destructive' : client.score > 50 ? 'bg-chart-4' : 'bg-accent'
                                }`}
                                style={{ width: `${client.score}%` }}
                              />
                            </div>
                            <span className="text-xs text-muted-foreground">{client.score}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
