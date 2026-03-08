import { Card, CardContent } from "@/components/ui/card"
import { Users, CalendarClock, AlertTriangle, Euro, TrendingDown, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { cn } from "@/lib/utils"

const kpis = [
  {
    label: "Clients actifs",
    value: "247",
    change: "+12",
    changeLabel: "ce mois",
    changePercent: "+5.1%",
    icon: Users,
    trend: "up" as const,
    color: "emerald",
  },
  {
    label: "Échéances à 30j",
    value: "34",
    change: "18",
    changeLabel: "cette semaine",
    icon: CalendarClock,
    trend: "neutral" as const,
    color: "blue",
  },
  {
    label: "Paiements en retard",
    value: "8",
    change: "-3",
    changeLabel: "vs. mois dernier",
    changePercent: "-27%",
    icon: AlertTriangle,
    trend: "down" as const,
    color: "red",
  },
  {
    label: "Revenu mensuel récurrent",
    value: "42 850 €",
    change: "+8.2%",
    changeLabel: "vs. mois dernier",
    icon: Euro,
    trend: "up" as const,
    color: "emerald",
  },
  {
    label: "Revenus à risque",
    value: "6 420 €",
    change: "3 clients",
    changeLabel: "concernés",
    icon: TrendingDown,
    trend: "warning" as const,
    color: "amber",
  },
]

const colorStyles = {
  emerald: "bg-emerald-50 text-emerald-600",
  blue: "bg-blue-50 text-blue-600",
  red: "bg-red-50 text-red-600",
  amber: "bg-amber-50 text-amber-600",
}

export function KpiCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {kpis.map((kpi) => (
        <Card 
          key={kpi.label} 
          className="group relative overflow-hidden border-border/60 bg-card shadow-sm transition-all duration-200 hover:shadow-md"
        >
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-[13px] font-medium text-muted-foreground">
                  {kpi.label}
                </p>
                <p className="text-2xl font-bold tracking-tight text-foreground lg:text-[28px]">
                  {kpi.value}
                </p>
              </div>
              <div className={cn("flex h-11 w-11 items-center justify-center rounded-xl", colorStyles[kpi.color])}>
                <kpi.icon className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-[13px]">
              {kpi.trend === "up" ? (
                <span className="flex items-center gap-0.5 font-semibold text-emerald-600">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                  {kpi.changePercent || kpi.change}
                </span>
              ) : kpi.trend === "down" ? (
                <span className="flex items-center gap-0.5 font-semibold text-emerald-600">
                  <ArrowDownRight className="h-3.5 w-3.5" />
                  {kpi.changePercent || kpi.change}
                </span>
              ) : kpi.trend === "warning" ? (
                <span className="font-semibold text-amber-600">
                  {kpi.change}
                </span>
              ) : (
                <span className="font-medium text-foreground">
                  {kpi.change}
                </span>
              )}
              <span className="text-muted-foreground">{kpi.changeLabel}</span>
            </div>
          </CardContent>
          {/* Subtle gradient overlay on hover */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-foreground/[0.02] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        </Card>
      ))}
    </div>
  )
}
