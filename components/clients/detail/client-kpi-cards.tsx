import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Receipt, AlertTriangle, CalendarClock, TrendingUp } from "lucide-react"

const kpis = [
  {
    label: "Total facturé",
    value: "32 400 EUR",
    badge: "Depuis 2024",
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    icon: Receipt,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    label: "Paiements en retard",
    value: "2",
    badge: "1 080 EUR",
    badgeColor: "bg-red-500/10 text-red-600 border-red-500/20",
    icon: AlertTriangle,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    label: "Prochaine échéance",
    value: "15 janv. 2027",
    badge: "Dans 304 jours",
    badgeColor: "bg-sky-500/10 text-sky-600 border-sky-500/20",
    icon: CalendarClock,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    label: "Revenus annuels estimés",
    value: "5 400 EUR",
    badge: "+8% vs. année précédente",
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    icon: TrendingUp,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
]

export function ClientKpiCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => (
        <Card
          key={kpi.label}
          className="border-border/60 bg-card shadow-sm transition-all duration-200 hover:shadow-md"
        >
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${kpi.iconBg}`}>
                <kpi.icon className={`h-5 w-5 ${kpi.iconColor}`} />
              </div>
              <Badge variant="outline" className={kpi.badgeColor}>
                {kpi.badge}
              </Badge>
            </div>
            <p className="mt-4 text-2xl font-bold tabular-nums text-foreground">
              {kpi.value}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{kpi.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
