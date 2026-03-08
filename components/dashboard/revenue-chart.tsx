"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"
import { TrendingUp, ArrowUpRight } from "lucide-react"

const data = [
  { month: "Jan", revenue: 38500, projected: 38500 },
  { month: "Fév", revenue: 41200, projected: 41200 },
  { month: "Mar", revenue: 42850, projected: 44000 },
  { month: "Avr", revenue: null, projected: 45500 },
  { month: "Mai", revenue: null, projected: 47200 },
  { month: "Juin", revenue: null, projected: 48900 },
]

export function RevenueChart() {
  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader className="flex flex-row items-start justify-between border-b border-border/60 pb-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
            <TrendingUp className="h-5 w-5 text-emerald-600" />
          </div>
          <div>
            <CardTitle className="text-base font-semibold">Prévision de revenus</CardTitle>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Évolution du MRR sur 6 mois
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-foreground" />
              <span className="text-xs text-muted-foreground">Réalisé</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full border-2 border-foreground/30 bg-transparent" />
              <span className="text-xs text-muted-foreground">Prévisionnel</span>
            </div>
          </div>
          <Button variant="outline" size="sm" className="text-xs">
            Exporter
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        {/* Summary Stats */}
        <div className="mb-6 grid grid-cols-3 gap-4">
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              MRR actuel
            </p>
            <p className="mt-1 text-2xl font-bold tracking-tight">42 850 €</p>
            <div className="mt-1 flex items-center gap-1 text-xs font-medium text-emerald-600">
              <ArrowUpRight className="h-3 w-3" />
              +8.2% vs mois dernier
            </div>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Prévision Q2
            </p>
            <p className="mt-1 text-2xl font-bold tracking-tight">141 600 €</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Avr - Juin 2026
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Croissance annuelle
            </p>
            <p className="mt-1 text-2xl font-bold tracking-tight">+27%</p>
            <p className="mt-1 text-xs text-muted-foreground">
              vs année précédente
            </p>
          </div>
        </div>

        {/* Chart */}
        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--foreground))" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="hsl(var(--foreground))" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--foreground))" stopOpacity={0.05} />
                  <stop offset="95%" stopColor="hsl(var(--foreground))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="hsl(var(--border))" 
                vertical={false}
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12, fontWeight: 500 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12, fontWeight: 500 }}
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}k€`}
                dx={-10}
                width={50}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-xl border border-border/60 bg-card p-3 shadow-lg">
                        <p className="text-sm font-semibold">
                          {payload[0]?.payload?.month} 2026
                        </p>
                        {payload[0]?.payload?.revenue && (
                          <p className="mt-1 text-sm text-muted-foreground">
                            Réalisé:{" "}
                            <span className="font-semibold text-foreground">
                              {payload[0].payload.revenue.toLocaleString("fr-FR")} €
                            </span>
                          </p>
                        )}
                        <p className="text-sm text-muted-foreground">
                          Prévisionnel:{" "}
                          <span className="font-semibold text-foreground">
                            {payload[0]?.payload?.projected?.toLocaleString("fr-FR")} €
                          </span>
                        </p>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Area
                type="monotone"
                dataKey="projected"
                stroke="hsl(var(--foreground))"
                strokeWidth={2}
                strokeDasharray="6 6"
                fill="url(#colorProjected)"
                strokeOpacity={0.4}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--foreground))"
                strokeWidth={2.5}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
