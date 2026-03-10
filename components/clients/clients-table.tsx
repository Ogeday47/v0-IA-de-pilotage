"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import {
  MoreHorizontal,
  Eye,
  Pencil,
  Mail,
  Trash2,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

interface Client {
  id: string
  name: string
  email: string
  company: string
  product: string
  subscription: "mensuel" | "annuel" | "trimestriel"
  amount: number
  nextDeadline: string
  status: "actif" | "en_attente" | "a_risque" | "resilie"
}

const clients: Client[] = [
  {
    id: "1",
    name: "Sophie Martin",
    email: "sophie.martin@techvision.fr",
    company: "TechVision SAS",
    product: "Suite Enterprise",
    subscription: "annuel",
    amount: 4800,
    nextDeadline: "15 mars 2026",
    status: "actif",
  },
  {
    id: "2",
    name: "Pierre Dubois",
    email: "p.dubois@greenlogistics.fr",
    company: "GreenLogistics",
    product: "Plan Pro",
    subscription: "mensuel",
    amount: 299,
    nextDeadline: "22 mars 2026",
    status: "actif",
  },
  {
    id: "3",
    name: "Marie Lefèvre",
    email: "m.lefevre@digitalagency.fr",
    company: "Digital Agency Paris",
    product: "Suite Enterprise",
    subscription: "annuel",
    amount: 5400,
    nextDeadline: "28 mars 2026",
    status: "a_risque",
  },
  {
    id: "4",
    name: "Jean-Claude Mercier",
    email: "jc.mercier@buildpro.fr",
    company: "BuildPro Construction",
    product: "Plan Starter",
    subscription: "mensuel",
    amount: 99,
    nextDeadline: "01 avr. 2026",
    status: "actif",
  },
  {
    id: "5",
    name: "Isabelle Moreau",
    email: "i.moreau@cuisineplus.fr",
    company: "Cuisine Plus",
    product: "Plan Pro",
    subscription: "trimestriel",
    amount: 799,
    nextDeadline: "05 avr. 2026",
    status: "en_attente",
  },
  {
    id: "6",
    name: "François Bernard",
    email: "f.bernard@autoservice.fr",
    company: "AutoService Lyon",
    product: "Suite Enterprise",
    subscription: "annuel",
    amount: 4200,
    nextDeadline: "10 avr. 2026",
    status: "actif",
  },
  {
    id: "7",
    name: "Claire Petit",
    email: "c.petit@mediasante.fr",
    company: "MédiaSanté",
    product: "Plan Pro",
    subscription: "mensuel",
    amount: 349,
    nextDeadline: "12 avr. 2026",
    status: "actif",
  },
  {
    id: "8",
    name: "Antoine Richard",
    email: "a.richard@sportclub.fr",
    company: "Sport Club Premium",
    product: "Plan Starter",
    subscription: "annuel",
    amount: 990,
    nextDeadline: "18 avr. 2026",
    status: "a_risque",
  },
  {
    id: "9",
    name: "Nathalie Girard",
    email: "n.girard@beautylab.fr",
    company: "Beauty Lab Paris",
    product: "Plan Pro",
    subscription: "mensuel",
    amount: 249,
    nextDeadline: "20 avr. 2026",
    status: "resilie",
  },
  {
    id: "10",
    name: "Philippe Laurent",
    email: "p.laurent@consultinggroup.fr",
    company: "Consulting Group",
    product: "Suite Enterprise",
    subscription: "annuel",
    amount: 7200,
    nextDeadline: "25 avr. 2026",
    status: "actif",
  },
]

const statusConfig = {
  actif: { label: "Actif", variant: "default" as const, className: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" },
  en_attente: { label: "En attente", variant: "secondary" as const, className: "bg-amber-500/10 text-amber-600 border-amber-500/20" },
  a_risque: { label: "À risque", variant: "destructive" as const, className: "bg-red-500/10 text-red-600 border-red-500/20" },
  resilie: { label: "Résilié", variant: "outline" as const, className: "bg-muted text-muted-foreground border-border" },
}

const subscriptionLabels = {
  mensuel: "Mensuel",
  annuel: "Annuel",
  trimestriel: "Trimestriel",
}

export function ClientsTable() {
  const [selectedClients, setSelectedClients] = useState<string[]>([])

  const toggleClient = (id: string) => {
    setSelectedClients((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    setSelectedClients((prev) =>
      prev.length === clients.length ? [] : clients.map((c) => c.id)
    )
  }

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div className="space-y-4">
      {/* Table */}
      <div className="rounded-xl border border-border/60 bg-card shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedClients.length === clients.length && clients.length > 0}
                  onCheckedChange={toggleAll}
                  aria-label="Sélectionner tout"
                />
              </TableHead>
              <TableHead className="min-w-[200px]">
                <Button variant="ghost" size="sm" className="-ml-3 h-8 gap-1 text-xs font-semibold">
                  Client
                  <ArrowUpDown className="h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="min-w-[160px]">
                <Button variant="ghost" size="sm" className="-ml-3 h-8 gap-1 text-xs font-semibold">
                  Entreprise
                  <ArrowUpDown className="h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="min-w-[140px]">Produit</TableHead>
              <TableHead className="min-w-[100px]">Abonnement</TableHead>
              <TableHead className="min-w-[100px] text-right">
                <Button variant="ghost" size="sm" className="-mr-3 h-8 gap-1 text-xs font-semibold">
                  Montant
                  <ArrowUpDown className="h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="min-w-[130px]">Prochaine échéance</TableHead>
              <TableHead className="min-w-[100px]">Statut</TableHead>
              <TableHead className="w-12">
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => {
              const status = statusConfig[client.status]
              return (
                <TableRow
                  key={client.id}
                  className="group"
                  data-state={selectedClients.includes(client.id) ? "selected" : undefined}
                >
                  <TableCell>
                    <Checkbox
                      checked={selectedClients.includes(client.id)}
                      onCheckedChange={() => toggleClient(client.id)}
                      aria-label={`Sélectionner ${client.name}`}
                    />
                  </TableCell>
                  <TableCell>
                    <Link href={`/clients/${client.id}`} className="flex items-center gap-3 group/link">
                      <Avatar className="h-9 w-9 border border-border/60">
                        <AvatarFallback className="bg-muted text-xs font-semibold text-muted-foreground">
                          {getInitials(client.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-medium text-foreground group-hover/link:underline">{client.name}</span>
                        <span className="text-xs text-muted-foreground">{client.email}</span>
                      </div>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium text-foreground">{client.company}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-muted-foreground">{client.product}</span>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-normal">
                      {subscriptionLabels[client.subscription]}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="font-semibold tabular-nums text-foreground">
                      {formatAmount(client.amount)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-muted-foreground">{client.nextDeadline}</span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={status.variant} className={status.className}>
                      {status.label}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 opacity-0 group-hover:opacity-100 data-[state=open]:opacity-100"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem asChild className="gap-2">
                          <Link href={`/clients/${client.id}`}>
                            <Eye className="h-4 w-4 text-muted-foreground" />
                            Voir les détails
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Pencil className="h-4 w-4 text-muted-foreground" />
                          Modifier
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          Envoyer une relance
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="gap-2 text-destructive focus:text-destructive">
                          <Trash2 className="h-4 w-4" />
                          Supprimer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {selectedClients.length > 0 ? (
            <span>{selectedClients.length} client(s) sélectionné(s)</span>
          ) : (
            <span>Affichage de 1 à 10 sur 247 clients</span>
          )}
        </p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <ChevronLeft className="h-4 w-4" />
            Précédent
          </Button>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="sm" className="h-8 w-8 bg-foreground text-background hover:bg-foreground/90 hover:text-background">
              1
            </Button>
            <Button variant="outline" size="sm" className="h-8 w-8">
              2
            </Button>
            <Button variant="outline" size="sm" className="h-8 w-8">
              3
            </Button>
            <span className="px-2 text-muted-foreground">...</span>
            <Button variant="outline" size="sm" className="h-8 w-8">
              25
            </Button>
          </div>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            Suivant
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
