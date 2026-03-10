import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Zap, AlertTriangle, CalendarClock, Send, TrendingDown, ArrowRight, FileText } from "lucide-react"

const suggestions = [
  {
    icon: AlertTriangle,
    text: "Ce client a 2 paiements en retard",
    priority: "high",
  },
  {
    icon: CalendarClock,
    text: "Un renouvellement annuel arrive dans 7 jours",
    priority: "medium",
  },
  {
    icon: Send,
    text: "Une relance personnalisée est recommandée",
    priority: "medium",
  },
  {
    icon: TrendingDown,
    text: "Risque moyen de non-renouvellement",
    priority: "low",
  },
]

const priorityStyles = {
  high: "border-red-200/60 bg-red-50/50",
  medium: "border-amber-200/60 bg-amber-50/50",
  low: "border-emerald-200/60 bg-emerald-50/50",
}

export function ClientAiAssistant() {
  return (
    <Card className="border-foreground/10 bg-gradient-to-br from-foreground/[0.03] to-transparent shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground">
              <Sparkles className="h-4 w-4 text-background" />
            </div>
            <div>
              <CardTitle className="text-base font-semibold">Assistant IA</CardTitle>
              <p className="text-xs text-muted-foreground">Analyse du client</p>
            </div>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5">
            <Zap className="h-3 w-3 text-emerald-600" />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
              Actif
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className={`group flex items-center justify-between rounded-xl border p-3 transition-colors hover:bg-background ${priorityStyles[suggestion.priority as keyof typeof priorityStyles]}`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-background shadow-sm">
                <suggestion.icon className="h-4 w-4 text-foreground" />
              </div>
              <p className="text-sm font-medium">{suggestion.text}</p>
            </div>
          </div>
        ))}

        <div className="space-y-2 pt-2">
          <Button className="w-full gap-2 shadow-sm">
            <Send className="h-4 w-4" />
            Générer une relance
          </Button>
          <Button variant="outline" className="w-full gap-2">
            <FileText className="h-4 w-4" />
            Résumer le compte
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
