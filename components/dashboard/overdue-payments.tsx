import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { AlertTriangle, Send, ArrowRight, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

const overduePayments = [
  {
    client: "Transport Express Lyon",
    initials: "TE",
    amount: "2 450 €",
    daysLate: 15,
    lastContact: "Il y a 3 jours",
    priority: "high" as const,
  },
  {
    client: "Restaurant Le Provençal",
    initials: "RP",
    amount: "890 €",
    daysLate: 8,
    lastContact: "Il y a 5 jours",
    priority: "medium" as const,
  },
  {
    client: "Imprimerie Moderne",
    initials: "IM",
    amount: "1 200 €",
    daysLate: 5,
    lastContact: "Jamais contacté",
    priority: "low" as const,
  },
  {
    client: "Studio Photo Lumière",
    initials: "SP",
    amount: "450 €",
    daysLate: 3,
    lastContact: "Hier",
    priority: "low" as const,
  },
]

const priorityConfig = {
  high: { 
    label: "Urgent", 
    className: "bg-red-50 text-red-700 border-red-200/60",
    dotClass: "bg-red-500"
  },
  medium: { 
    label: "Moyen", 
    className: "bg-amber-50 text-amber-700 border-amber-200/60",
    dotClass: "bg-amber-500"
  },
  low: { 
    label: "Faible", 
    className: "bg-slate-100 text-slate-700 border-slate-200/60",
    dotClass: "bg-slate-400"
  },
}

export function OverduePayments() {
  const totalOverdue = overduePayments.reduce((acc, p) => {
    const amount = parseInt(p.amount.replace(/[^\d]/g, ""))
    return acc + amount
  }, 0)

  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader className="flex flex-row items-start justify-between pb-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
            <AlertTriangle className="h-5 w-5 text-red-600" />
          </div>
          <div>
            <CardTitle className="text-base font-semibold">Paiements en retard</CardTitle>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {totalOverdue.toLocaleString("fr-FR")} € en attente
            </p>
          </div>
        </div>
        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200/60 font-semibold">
          {overduePayments.length}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-3">
        {overduePayments.map((payment, index) => (
          <div
            key={index}
            className="group flex items-center justify-between rounded-xl border border-border/60 bg-muted/20 p-4 transition-colors hover:bg-muted/40"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="h-10 w-10 border border-border/60">
                  <AvatarFallback className="bg-background text-xs font-semibold">
                    {payment.initials}
                  </AvatarFallback>
                </Avatar>
                <span className={cn("absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card", priorityConfig[payment.priority].dotClass)} />
              </div>
              <div>
                <p className="font-medium text-foreground">{payment.client}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">{payment.amount}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {payment.daysLate}j de retard
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className={cn("border font-medium", priorityConfig[payment.priority].className)}>
                {priorityConfig[payment.priority].label}
              </Badge>
              <Button 
                size="sm" 
                variant="ghost" 
                className="h-8 w-8 p-0 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Relancer</span>
              </Button>
            </div>
          </div>
        ))}
        <Button variant="outline" className="w-full gap-1.5 text-sm" size="sm">
          Tout relancer
          <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </CardContent>
    </Card>
  )
}
