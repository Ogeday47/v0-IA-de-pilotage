import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const recentClients = [
  {
    company: "Tech Solutions Paris",
    contact: "Jean-Pierre Moreau",
    plan: "Suite Entreprise",
    nextPayment: "15 avril 2026",
    status: "active" as const,
    initials: "TS",
  },
  {
    company: "Fleuriste Les Jardins",
    contact: "Sophie Bernard",
    plan: "Pack Starter",
    nextPayment: "28 mars 2026",
    status: "active" as const,
    initials: "FJ",
  },
  {
    company: "Cabinet Comptable Ouest",
    contact: "Marc Lefèvre",
    plan: "Pack Pro Mensuel",
    nextPayment: "10 mars 2026",
    status: "pending" as const,
    initials: "CC",
  },
]

const statusConfig = {
  active: { label: "Actif", className: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  pending: { label: "En attente", className: "bg-amber-100 text-amber-700 border-amber-200" },
}

export function RecentClients() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-lg font-semibold">Fiches clients récentes</CardTitle>
        <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
          Voir tout
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentClients.map((client, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-muted/50"
          >
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                {client.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <p className="font-medium">{client.company}</p>
                <Badge variant="outline" className={statusConfig[client.status].className}>
                  {statusConfig[client.status].label}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{client.contact}</p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>{client.plan}</span>
                <span>•</span>
                <span>Prochain paiement: {client.nextPayment}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
