"use client"

import { useState } from "react"
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
  CheckCircle2,
  Send,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

interface Echeance {
  id: string
  clientName: string
  clientEmail: string
  company: string
  product: string
  amount: number
  dueDate: string
  frequency: "mensuel" | "trimestriel" | "annuel"
  status: "paye" | "a_venir" | "en_retard" | "a_risque"
  priority: "haute" | "moyenne" | "faible"
}

const echeances: Echeance[] = [
  {
    id: "1",
    clientName: "Sophie Martin",
    clientEmail: "sophie.martin@techvision.fr",
    company: "TechVision SAS",
    product: "Suite Enterprise",
    amount: 4800,
    dueDate: "10 mars 2026",
    frequency: "annuel",
    status: "a_venir",
    priority: "haute",
  },
  {
    id: "2",
    clientName: "Pierre Dubois",
    clientEmail: "p.dubois@greenlogistics.fr",
    company: "GreenLogistics",
    product: "Plan Pro",
    amount: 299,
    dueDate: "08 mars 2026",
    frequency: "mensuel",
    status: "en_retard",
    priority: "haute",
  },
  {
    id: "3",
    clientName: "Marie Lefèvre",
    clientEmail: "m.lefevre@digitalagency.fr",
    company: "Digital Agency Paris",
    product: "Suite Enterprise",
    amount: 5400,
    dueDate: "12 mars 2026",
    frequency: "annuel",
    status: "a_risque",
    priority: "haute",
  },
  {
    id: "4",
    clientName: "Jean-Claude Mercier",
    clientEmail: "jc.mercier@buildpro.fr",
    company: "BuildPro Construction",
    product: "Plan Starter",
    amount: 99,
    dueDate: "15 mars 2026",
    frequency: "mensuel",
    status: "a_venir",
    priority: "moyenne",
  },
  {
    id: "5",
    clientName: "Isabelle Moreau",
    clientEmail: "i.moreau@cuisineplus.fr",
    company: "Cuisine Plus",
    product: "Plan Pro",
    amount: 799,
    dueDate: "05 mars 2026",
    frequency: "trimestriel",
    status: "en_retard",
    priority: "haute",
  },
  {
    id: "6",
    clientName: "François Bernard",
    clientEmail: "f.bernard@autoservice.fr",
    company: "AutoService Lyon",
    product: "Suite Enterprise",
    amount: 4200,
    dueDate: "18 mars 2026",
    frequency: "annuel",
    status: "a_venir",
    priority: "moyenne",
  },
  {
    id: "7",
    clientName: "Claire Petit",
    clientEmail: "c.petit@mediasante.fr",
    company: "MédiaSanté",
    product: "Plan Pro",
    amount: 349,
    dueDate: "01 mars 2026",
    frequency: "mensuel",
    status: "paye",
    priority: "faible",
  },
  {
    id: "8",
    clientName: "Antoine Richard",
    clientEmail: "a.richard@sportclub.fr",
    company: "Sport Club Premium",
    product: "Plan Starter",
    amount: 990,
    dueDate: "20 mars 2026",
    frequency: "annuel",
    status: "a_risque",
    priority: "moyenne",
  },
  {
    id: "9",
    clientName: "Nathalie Girard",
    clientEmail: "n.girard@beautylab.fr",
    company: "Beauty Lab Paris",
    product: "Plan Pro",
    amount: 249,
    dueDate: "22 mars 2026",
    frequency: "mensuel",
    status: "a_venir",
    priority: "faible",
  },
  {
    id: "10",
    clientName: "Philippe Laurent",
    clientEmail: "p.laurent@consultinggroup.fr",
    company: "Consulting Group",
    product: "Suite Enterprise",
    amount: 7200,
    dueDate: "25 mars 2026",
    frequency: "annuel",
    status: "a_venir",
    priority: "haute",
  },
  {
    id: "11",
    clientName: "Émilie Rousseau",
    clientEmail: "e.rousseau@mediafrance.fr",
    company: "Média France",
    product: "Plan Pro",
    amount: 299,
    dueDate: "02 mars 2026",
    frequency: "mensuel",
    status: "en_retard",
    priority: "moyenne",
  },
  {
    id: "12",
    clientName: "Marc Fontaine",
    clientEmail: "m.fontaine@logistiquepro.fr",
    company: "Logistique Pro",
    product: "Suite Enterprise",
    amount: 3600,
    dueDate: "28 mars 2026",
    frequency: "annuel",
    status: "a_venir",
    priority: "faible",
  },
]

const statusConfig = {
  paye: { label: "Payé", className: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" },
  a_venir: { label: "À venir", className: "bg-sky-500/10 text-sky-600 border-sky-500/20" },
  en_retard: { label: "En retard", className: "bg-red-500/10 text-red-600 border-red-500/20" },
  a_risque: { label: "À risque", className: "bg-amber-500/10 text-amber-600 border-amber-500/20" },
}

const priorityConfig = {
  haute: { label: "Haute", className: "bg-red-500/10 text-red-600 border-red-500/20" },
  moyenne: { label: "Moyenne", className: "bg-amber-500/10 text-amber-600 border-amber-500/20" },
  faible: { label: "Faible", className: "bg-slate-500/10 text-slate-600 border-slate-500/20" },
}

const frequencyLabels = {
  mensuel: "Mensuel",
  trimestriel: "Trimestriel",
  annuel: "Annuel",
}

export function EcheancesTable() {
  const [selectedEcheances, setSelectedEcheances] = useState<string[]>([])

  const toggleEcheance = (id: string) => {
    setSelectedEcheances((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    setSelectedEcheances((prev) =>
      prev.length === echeances.length ? [] : echeances.map((e) => e.id)
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
      {/* Table Card */}
      <div className="rounded-xl border border-border/60 bg-card shadow-sm">
        <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
          <div>
            <h3 className="text-base font-semibold text-foreground">Liste des échéances</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {echeances.length} échéances au total
            </p>
          </div>
          {selectedEcheances.length > 0 && (
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8 gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Marquer comme payé
              </Button>
              <Button variant="outline" size="sm" className="h-8 gap-1.5">
                <Send className="h-3.5 w-3.5" />
                Relancer
              </Button>
            </div>
          )}
        </div>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-12 pl-5">
                <Checkbox
                  checked={selectedEcheances.length === echeances.length && echeances.length > 0}
                  onCheckedChange={toggleAll}
                  aria-label="Sélectionner tout"
                />
              </TableHead>
              <TableHead className="min-w-[180px]">
                <Button variant="ghost" size="sm" className="-ml-3 h-8 gap-1 text-xs font-semibold">
                  Client
                  <ArrowUpDown className="h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="min-w-[150px]">
                <Button variant="ghost" size="sm" className="-ml-3 h-8 gap-1 text-xs font-semibold">
                  Entreprise
                  <ArrowUpDown className="h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="min-w-[130px]">Produit</TableHead>
              <TableHead className="min-w-[100px] text-right">
                <Button variant="ghost" size="sm" className="-mr-3 h-8 gap-1 text-xs font-semibold">
                  Montant
                  <ArrowUpDown className="h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="min-w-[120px]">
                <Button variant="ghost" size="sm" className="-ml-3 h-8 gap-1 text-xs font-semibold">
                  Date d&apos;échéance
                  <ArrowUpDown className="h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="min-w-[100px]">Fréquence</TableHead>
              <TableHead className="min-w-[90px]">Statut</TableHead>
              <TableHead className="min-w-[80px]">Priorité</TableHead>
              <TableHead className="w-12 pr-5">
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {echeances.map((echeance) => {
              const status = statusConfig[echeance.status]
              const priority = priorityConfig[echeance.priority]
              return (
                <TableRow
                  key={echeance.id}
                  className="group"
                  data-state={selectedEcheances.includes(echeance.id) ? "selected" : undefined}
                >
                  <TableCell className="pl-5">
                    <Checkbox
                      checked={selectedEcheances.includes(echeance.id)}
                      onCheckedChange={() => toggleEcheance(echeance.id)}
                      aria-label={`Sélectionner ${echeance.clientName}`}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8 border border-border/60">
                        <AvatarFallback className="bg-muted text-[10px] font-semibold text-muted-foreground">
                          {getInitials(echeance.clientName)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">{echeance.clientName}</span>
                        <span className="text-xs text-muted-foreground">{echeance.clientEmail}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm font-medium text-foreground">{echeance.company}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-muted-foreground">{echeance.product}</span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="text-sm font-semibold tabular-nums text-foreground">
                      {formatAmount(echeance.amount)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-muted-foreground">{echeance.dueDate}</span>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs font-normal">
                      {frequencyLabels[echeance.frequency]}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={status.className}>
                      {status.label}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={priority.className}>
                      {priority.label}
                    </Badge>
                  </TableCell>
                  <TableCell className="pr-5">
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
                        <DropdownMenuItem className="gap-2">
                          <Eye className="h-4 w-4 text-muted-foreground" />
                          Voir
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Pencil className="h-4 w-4 text-muted-foreground" />
                          Modifier
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          Marquer comme payé
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Send className="h-4 w-4 text-muted-foreground" />
                          Relancer
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
          {selectedEcheances.length > 0 ? (
            <span>{selectedEcheances.length} échéance(s) sélectionnée(s)</span>
          ) : (
            <span>Affichage de 1 à 12 sur 34 échéances</span>
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
