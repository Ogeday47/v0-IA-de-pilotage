import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Eye, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const deadlines = [
  {
    client: "Atelier Dubois & Fils",
    product: "Pack Pro Mensuel",
    amount: "890 €",
    date: "12 mars 2026",
    frequency: "Mensuel",
    status: "upcoming" as const,
  },
  {
    client: "Garage Martin",
    product: "Abonnement Premium",
    amount: "1 450 €",
    date: "14 mars 2026",
    frequency: "Trimestriel",
    status: "upcoming" as const,
  },
  {
    client: "Cabinet Leroy Avocats",
    product: "Suite Entreprise",
    amount: "2 200 €",
    date: "15 mars 2026",
    frequency: "Annuel",
    status: "paid" as const,
  },
  {
    client: "Boulangerie Rousseau",
    product: "Pack Starter",
    amount: "290 €",
    date: "18 mars 2026",
    frequency: "Mensuel",
    status: "upcoming" as const,
  },
  {
    client: "SCI Les Oliviers",
    product: "Gestion Immobilière",
    amount: "3 600 €",
    date: "20 mars 2026",
    frequency: "Annuel",
    status: "at-risk" as const,
  },
  {
    client: "Pharmacie Centrale",
    product: "Pack Pro Mensuel",
    amount: "890 €",
    date: "22 mars 2026",
    frequency: "Mensuel",
    status: "upcoming" as const,
  },
]

const statusConfig = {
  upcoming: { label: "À venir", variant: "secondary" as const },
  paid: { label: "Payé", variant: "default" as const },
  "at-risk": { label: "À risque", variant: "destructive" as const },
}

export function UpcomingDeadlines() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-lg font-semibold">Prochaines échéances</CardTitle>
        <Button variant="outline" size="sm">
          Voir tout
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="pl-6">Client</TableHead>
              <TableHead>Produit</TableHead>
              <TableHead>Montant</TableHead>
              <TableHead>Date d&apos;échéance</TableHead>
              <TableHead>Fréquence</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="pr-6 text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deadlines.map((deadline, index) => (
              <TableRow key={index}>
                <TableCell className="pl-6 font-medium">{deadline.client}</TableCell>
                <TableCell className="text-muted-foreground">{deadline.product}</TableCell>
                <TableCell className="font-medium">{deadline.amount}</TableCell>
                <TableCell>{deadline.date}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="font-normal">
                    {deadline.frequency}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={statusConfig[deadline.status].variant}>
                    {statusConfig[deadline.status].label}
                  </Badge>
                </TableCell>
                <TableCell className="pr-6 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">Voir</span>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Plus</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Voir les détails</DropdownMenuItem>
                        <DropdownMenuItem>Envoyer une relance</DropdownMenuItem>
                        <DropdownMenuItem>Marquer comme payé</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
