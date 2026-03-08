import { Card, CardContent } from "@/components/ui/card"
import { Users, CalendarClock, AlertTriangle, Euro, TrendingDown } from "lucide-react"

const kpis = [
  {
    label: "Clients actifs",
    value: "247",
    change: "+12",
    changeLabel: "ce mois",
    icon: Users,
    trend: "up" as const,
  },
  {
    label: "Échéances (30j)",
    value: "34",
    change: "18",
    changeLabel: "cette semaine",
    icon: CalendarClock,
    trend: "neutral" as const,
  },
  {
    label: "Paiements en retard",
    value: "8",
    change: "-3",
    changeLabel: "vs. mois dernier",
    icon: AlertTriangle,
    trend: "down" as const,
  },
  {
    label: "Revenu attendu",
    value: "42 850 €",
    change: "+8.2%",
    changeLabel: "vs. mois dernier",
    icon: Euro,
    trend: "up" as const,
  },
  {
    label: "Revenus à risque",
    value: "6 420 €",
    change: "3 clients",
    changeLabel: "concernés",
    icon: TrendingDown,
    trend: "warning" as const,
  },
]

export function KpiCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {kpis.map((kpi) => (
        <Card key={kpi.label} className="relative overflow-hidden">
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">
                  {kpi.label}
                </p>
                <p className="text-2xl font-bold tracking-tight">{kpi.value}</p>
              </div>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                  kpi.trend === "warning"
                    ? "bg-amber-100 text-amber-600"
                    : kpi.trend === "down"
                    ? "bg-emerald-100 text-emerald-600"
                    : "bg-primary/10 text-primary"
                }`}
              >
                <kpi.icon className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1 text-xs">
              <span
                className={`font-medium ${
                  kpi.trend === "up"
                    ? "text-emerald-600"
                    : kpi.trend === "down"
                    ? "text-emerald-600"
                    : kpi.trend === "warning"
                    ? "text-amber-600"
                    : "text-muted-foreground"
                }`}
              >
                {kpi.change}
              </span>
              <span className="text-muted-foreground">{kpi.changeLabel}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
