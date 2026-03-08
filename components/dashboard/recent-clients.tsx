import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

const recentClients = [
  {
    company: "Tech Solutions Paris",
    contact: "Jean-Pierre Moreau",
    email: "jp.moreau@techsolutions.fr",
    plan: "Suite Entreprise",
    mrr: "2 200 €",
    nextPayment: "15 avril 2026",
    status: "active" as const,
    initials: "TS",
    joinedDaysAgo: 3,
  },
  {
    company: "Fleuriste Les Jardins",
    contact: "Sophie Bernard",
    email: "s.bernard@lesjardins.fr",
    plan: "Pack Starter",
    mrr: "290 €",
    nextPayment: "28 mars 2026",
    status: "active" as const,
    initials: "FJ",
    joinedDaysAgo: 7,
  },
  {
    company: "Cabinet Comptable Ouest",
    contact: "Marc Lefèvre",
    email: "m.lefevre@ccompta.fr",
    plan: "Pack Pro Mensuel",
    mrr: "890 €",
    nextPayment: "10 mars 2026",
    status: "pending" as const,
    initials: "CC",
    joinedDaysAgo: 12,
  },
  {
    company: "Menuiserie Artisanale Dupont",
    contact: "Pierre Dupont",
    email: "contact@menuiserie-dupont.fr",
    plan: "Pack Pro Mensuel",
    mrr: "890 €",
    nextPayment: "5 avril 2026",
    status: "active" as const,
    initials: "MA",
    joinedDaysAgo: 14,
  },
]

const statusConfig = {
  active: { label: "Actif", className: "bg-emerald-50 text-emerald-700 border-emerald-200/60" },
  pending: { label: "En attente", className: "bg-amber-50 text-amber-700 border-amber-200/60" },
}

export function RecentClients() {
  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between border-b border-border/60 pb-4">
        <div>
          <CardTitle className="text-lg font-semibold">Clients récents</CardTitle>
          <p className="mt-0.5 text-sm text-muted-foreground">
            12 nouveaux clients ce mois-ci
          </p>
        </div>
        <Button variant="outline" size="sm" className="gap-1.5 text-sm">
          Tous les clients
          <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid gap-0 divide-y divide-border/40 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {recentClients.map((client, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-5 transition-colors hover:bg-muted/40"
            >
              <Avatar className="h-11 w-11 border border-border/60">
                <AvatarFallback className="bg-foreground text-xs font-semibold text-background">
                  {client.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1.5">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-foreground">{client.company}</p>
                      <Badge variant="outline" className={cn("border text-[10px] font-semibold", statusConfig[client.status].className)}>
                        {statusConfig[client.status].label}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{client.contact}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-muted-foreground">{client.plan}</span>
                  <span className="font-semibold text-foreground">{client.mrr}/mois</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">
                    Ajouté il y a {client.joinedDaysAgo} jours
                  </span>
                  <Button variant="ghost" size="sm" className="h-6 gap-1 px-2 text-xs text-muted-foreground hover:text-foreground">
                    Voir la fiche
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
