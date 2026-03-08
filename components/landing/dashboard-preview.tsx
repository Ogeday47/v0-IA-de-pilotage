import { Users, CalendarDays, AlertCircle, Euro, TrendingUp } from "lucide-react"

const stats = [
  { label: "Clients actifs", value: "247", icon: Users, trend: "+12%" },
  { label: "Échéances ce mois", value: "38", icon: CalendarDays, trend: null },
  { label: "Paiements en retard", value: "5", icon: AlertCircle, trend: "-23%" },
  { label: "Revenu attendu", value: "48 500€", icon: Euro, trend: "+8%" },
]

const upcomingRenewals = [
  { client: "Agence Digitale Pro", date: "12 mars 2026", amount: "1 200€", status: "À relancer" },
  { client: "Tech Solutions SAS", date: "15 mars 2026", amount: "890€", status: "Confirmé" },
  { client: "Marketing Plus", date: "18 mars 2026", amount: "2 400€", status: "En attente" },
  { client: "Studio Créatif", date: "22 mars 2026", amount: "750€", status: "Confirmé" },
]

const riskClients = [
  { name: "WebAgency Corp", risk: "Élevé", revenue: "3 200€/mois", reason: "2 factures impayées" },
  { name: "Digital First", risk: "Moyen", revenue: "1 800€/mois", reason: "Pas de réponse aux relances" },
  { name: "StartUp Vision", risk: "Faible", revenue: "950€/mois", reason: "Retard habituel" },
]

export function DashboardPreview() {
  return (
    <section id="apercu" className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Aperçu du produit
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Tout votre business en un coup d'œil
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Un tableau de bord conçu pour vous faire gagner du temps et ne rien manquer.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none h-full" />
          
          <div className="rounded-2xl border border-border bg-card p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <span className="text-xs font-bold text-primary-foreground">R</span>
                </div>
                <span className="font-semibold text-foreground">RenewFlow</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground">Mars 2026</span>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{stat.label}</span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                    {stat.trend && (
                      <span className={`text-xs font-medium ${stat.trend.startsWith('+') ? 'text-accent' : 'text-destructive'}`}>
                        {stat.trend}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Échéances des 30 prochains jours</h3>
                  <TrendingUp className="h-4 w-4 text-accent" />
                </div>
                <div className="space-y-3">
                  {upcomingRenewals.map((renewal, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                      <div>
                        <p className="font-medium text-sm text-foreground">{renewal.client}</p>
                        <p className="text-xs text-muted-foreground">{renewal.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sm text-foreground">{renewal.amount}</p>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          renewal.status === 'Confirmé' 
                            ? 'bg-accent/10 text-accent' 
                            : renewal.status === 'À relancer'
                            ? 'bg-destructive/10 text-destructive'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {renewal.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Clients à risque</h3>
                  <AlertCircle className="h-4 w-4 text-destructive" />
                </div>
                <div className="space-y-3">
                  {riskClients.map((client, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                      <div>
                        <p className="font-medium text-sm text-foreground">{client.name}</p>
                        <p className="text-xs text-muted-foreground">{client.reason}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sm text-foreground">{client.revenue}</p>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          client.risk === 'Élevé' 
                            ? 'bg-destructive/10 text-destructive' 
                            : client.risk === 'Moyen'
                            ? 'bg-chart-4/20 text-chart-4'
                            : 'bg-accent/10 text-accent'
                        }`}>
                          Risque {client.risk}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
