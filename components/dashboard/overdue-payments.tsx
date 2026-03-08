import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Send } from "lucide-react"

const overduePayments = [
  {
    client: "Transport Express Lyon",
    amount: "2 450 €",
    daysLate: 15,
    priority: "high" as const,
  },
  {
    client: "Restaurant Le Provençal",
    amount: "890 €",
    daysLate: 8,
    priority: "medium" as const,
  },
  {
    client: "Imprimerie Moderne",
    amount: "1 200 €",
    daysLate: 5,
    priority: "low" as const,
  },
  {
    client: "Studio Photo Lumière",
    amount: "450 €",
    daysLate: 3,
    priority: "low" as const,
  },
]

const priorityConfig = {
  high: { label: "Urgent", className: "bg-red-100 text-red-700 border-red-200" },
  medium: { label: "Moyen", className: "bg-amber-100 text-amber-700 border-amber-200" },
  low: { label: "Faible", className: "bg-slate-100 text-slate-700 border-slate-200" },
}

export function OverduePayments() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <CardTitle className="text-lg font-semibold">Paiements en retard</CardTitle>
        </div>
        <Badge variant="destructive" className="font-semibold">
          {overduePayments.length}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-3">
        {overduePayments.map((payment, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4"
          >
            <div className="space-y-1">
              <p className="font-medium">{payment.client}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{payment.amount}</span>
                <span>•</span>
                <span>{payment.daysLate} jours de retard</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className={priorityConfig[payment.priority].className}>
                {priorityConfig[payment.priority].label}
              </Badge>
              <Button size="sm" variant="outline" className="gap-1.5">
                <Send className="h-3.5 w-3.5" />
                Relancer
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
