"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Send, AlertCircle, Calendar, TrendingDown, ArrowRight } from "lucide-react"

interface Insight {
  id: string
  icon: typeof AlertCircle
  message: string
  type: "warning" | "info" | "alert"
}

const insights: Insight[] = [
  {
    id: "1",
    icon: Send,
    message: "5 clients doivent être relancés cette semaine",
    type: "warning",
  },
  {
    id: "2",
    icon: Calendar,
    message: "2 échéances annuelles importantes arrivent dans 3 jours",
    type: "info",
  },
  {
    id: "3",
    icon: TrendingDown,
    message: "1 client présente un risque élevé de non-renouvellement",
    type: "alert",
  },
  {
    id: "4",
    icon: AlertCircle,
    message: "Le taux de recouvrement peut être amélioré de 12%",
    type: "info",
  },
]

const typeStyles = {
  warning: "text-amber-600",
  info: "text-sky-600",
  alert: "text-red-600",
}

const typeBgStyles = {
  warning: "bg-amber-100",
  info: "bg-sky-100",
  alert: "bg-red-100",
}

export function AIInsights() {
  return (
    <div className="rounded-xl border border-border/60 bg-gradient-to-br from-card to-muted/30 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground">
            <Sparkles className="h-5 w-5 text-background" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">Suggestions IA</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Actions recommandées pour optimiser vos recouvrements
            </p>
          </div>
        </div>
      </div>

      {/* Insights List */}
      <div className="divide-y divide-border/60 px-5">
        {insights.map((insight) => {
          const Icon = insight.icon
          return (
            <div key={insight.id} className="flex items-start gap-3 py-4">
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${typeBgStyles[insight.type]}`}>
                <Icon className={`h-4 w-4 ${typeStyles[insight.type]}`} />
              </div>
              <p className="flex-1 pt-1 text-sm leading-relaxed text-foreground">
                {insight.message}
              </p>
              <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          )
        })}
      </div>

      {/* CTA */}
      <div className="border-t border-border/60 p-5">
        <Button className="w-full gap-2">
          <Sparkles className="h-4 w-4" />
          Générer les relances automatiques
        </Button>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          L&apos;IA génère des emails personnalisés pour chaque client
        </p>
      </div>
    </div>
  )
}
