import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Eye, MoreHorizontal, ArrowRight, Send, CheckCircle2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const deadlines = [
  {
    client: "Atelier Dubois & Fils",
    initials: "AD",
    product: "Pack Pro Mensuel",
    amount: "890 €",
    date: "12 mars 2026",
    daysUntil: 4,
    frequency: "Mensuel",
    status: "upcoming" as const,
  },
  {
    client: "Garage Martin SARL",
    initials: "GM",
    product: "Abonnement Premium",
    amount: "1 450 €",
    date: "14 mars 2026",
    daysUntil: 6,
    frequency: "Trimestriel",
    status: "upcoming" as const,
  },
  {
    client: "Cabinet Leroy Avocats",
    initials: "CL",
    product: "Suite Entreprise",
    amount: "2 200 €",
    date: "15 mars 2026",
    daysUntil: 7,
    frequency: "Annuel",
    status: "paid" as const,
  },
  {
    client: "Boulangerie Rousseau",
    initials: "BR",
    product: "Pack Starter",
    amount: "290 €",
    date: "18 mars 2026",
    daysUntil: 10,
    frequency: "Mensuel",
    status: "upcoming" as const,
  },
  {
    client: "SCI Les Oliviers",
    initials: "SO",
    product: "Gestion Immobilière",
    amount: "3 600 €",
    date: "20 mars 2026",
    daysUntil: 12,
    frequency: "Annuel",
    status: "at-risk" as const,
  },
  {
    client: "Pharmacie Centrale",
    initials: "PC",
    product: "Pack Pro Mensuel",
    amount: "890 €",
    date: "22 mars 2026",
    daysUntil: 14,
    frequency: "Mensuel",
    status: "upcoming" as const,
  },
]

const statusConfig = {
  upcoming: { 
    label: "À venir", 
    className: "bg-blue-50 text-blue-700 border-blue-200/60" 
  },
  paid: { 
    label: "Payé", 
    className: "bg-emerald-50 text-emerald-700 border-emerald-200/60" 
  },
  "at-risk": { 
    label: "À risque", 
    className: "bg-red-50 text-red-700 border-red-200/60" 
  },
}

const frequencyColors: Record<string, string> = {
  "Mensuel": "bg-muted text-muted-foreground",
  "Trimestriel": "bg-blue-50 text-blue-700",
  "Annuel": "bg-amber-50 text-amber-700",
}

export function UpcomingDeadlines() {
  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between border-b border-border/60 pb-4">
        <div>
          <CardTitle className="text-lg font-semibold">Prochaines échéances</CardTitle>
          <p className="mt-0.5 text-sm text-muted-foreground">
            34 échéances dans les 30 prochains jours
          </p>
        </div>
        <Button variant="outline" size="sm" className="gap-1.5 text-sm">
          Voir tout
          <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border/60 hover:bg-transparent">
                <TableHead className="h-11 pl-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Client</TableHead>
                <TableHead className="h-11 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Produit</TableHead>
                <TableHead className="h-11 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Montant</TableHead>
                <TableHead className="h-11 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Échéance</TableHead>
                <TableHead className="h-11 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Fréquence</TableHead>
                <TableHead className="h-11 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Statut</TableHead>
                <TableHead className="h-11 pr-6 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deadlines.map((deadline, index) => (
                <TableRow 
                  key={index} 
                  className="group border-border/40 transition-colors hover:bg-muted/40"
                >
                  <TableCell className="py-4 pl-6">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9 border border-border/60">
                        <AvatarFallback className="bg-muted text-xs font-semibold text-foreground">
                          {deadline.initials}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-foreground">{deadline.client}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 text-muted-foreground">{deadline.product}</TableCell>
                  <TableCell className="py-4">
                    <span className="font-semibold text-foreground">{deadline.amount}</span>
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex flex-col">
                      <span className="text-foreground">{deadline.date}</span>
                      <span className="text-xs text-muted-foreground">
                        Dans {deadline.daysUntil} jours
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <Badge variant="outline" className={cn("border font-medium", frequencyColors[deadline.frequency])}>
                      {deadline.frequency}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4">
                    <Badge variant="outline" className={cn("border font-medium", statusConfig[deadline.status].className)}>
                      {deadline.status === "paid" && <CheckCircle2 className="mr-1 h-3 w-3" />}
                      {statusConfig[deadline.status].label}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4 pr-6 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">Voir</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Send className="h-4 w-4" />
                        <span className="sr-only">Relancer</span>
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Plus</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuItem className="gap-2">
                            <Eye className="h-4 w-4 text-muted-foreground" />
                            Voir les détails
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2">
                            <Send className="h-4 w-4 text-muted-foreground" />
                            Envoyer une relance
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="gap-2">
                            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                            Marquer comme payé
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
