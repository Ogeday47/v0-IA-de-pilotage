"use client"

import { useState } from "react"
import Link from "next/link"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { TopNavbar } from "@/components/dashboard/top-navbar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  ArrowLeft,
  Pencil,
  CalendarPlus,
  Send,
  Download,
  Building2,
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Package,
  Calendar,
  Euro,
  AlertTriangle,
  TrendingUp,
  Clock,
  Sparkles,
  FileText,
  Receipt,
  MoreHorizontal,
  Eye,
  CheckCircle,
  XCircle,
  MessageSquare,
  Plus,
} from "lucide-react"

// Sample client data
const clientData = {
  id: "1",
  name: "Atelier Dubois & Fils",
  contact: "Jean-Pierre Dubois",
  email: "contact@dubois-fils.fr",
  phone: "+33 1 45 67 89 00",
  address: "45 Rue de la République, 69002 Lyon",
  subscriptionType: "Annuel",
  product: "Suite Enterprise",
  amount: 4800,
  startDate: "15 mars 2024",
  nextDeadline: "15 mars 2026",
  status: "actif" as const,
}

const kpiData = [
  { label: "Total facturé", value: "14 400 €", icon: Euro, trend: "+12%", trendUp: true },
  { label: "Paiements en retard", value: "0 €", icon: AlertTriangle, trend: "Aucun", trendUp: true },
  { label: "Prochaine échéance", value: "15 mars", icon: Calendar, trend: "Dans 7j", trendUp: null },
  { label: "Revenus annuels", value: "4 800 €", icon: TrendingUp, trend: "+8%", trendUp: true },
]

const echeances = [
  { id: 1, date: "15 mars 2026", amount: 4800, frequency: "Annuel", status: "a_venir", paymentDate: "-", },
  { id: 2, date: "15 mars 2025", amount: 4800, frequency: "Annuel", status: "paye", paymentDate: "10 mars 2025", },
  { id: 3, date: "15 mars 2024", amount: 4200, frequency: "Annuel", status: "paye", paymentDate: "15 mars 2024", },
  { id: 4, date: "15 mars 2023", amount: 4200, frequency: "Annuel", status: "paye", paymentDate: "18 mars 2023", },
]

const relances = [
  { id: 1, date: "08 mars 2026", type: "Renouvellement", channel: "Email", subject: "Rappel avant échéance", status: "envoyee", response: "En attente" },
  { id: 2, date: "01 mars 2025", type: "Rappel avant échéance", channel: "Email", subject: "Votre abonnement arrive à échéance", status: "reponse_recue", response: "Confirmé" },
  { id: 3, date: "20 févr. 2024", type: "Renouvellement", channel: "Téléphone", subject: "Appel de renouvellement", status: "envoyee", response: "Confirmé" },
]

const historique = [
  { id: 1, date: "08 mars 2026", event: "Relance envoyée", description: "Rappel de renouvellement envoyé par email", type: "relance" },
  { id: 2, date: "10 mars 2025", event: "Paiement reçu", description: "Paiement de 4 800 € reçu", type: "paiement" },
  { id: 3, date: "01 mars 2025", event: "Relance envoyée", description: "Email de rappel avant échéance", type: "relance" },
  { id: 4, date: "15 mars 2024", event: "Abonnement renouvelé", description: "Passage à Suite Enterprise", type: "abonnement" },
  { id: 5, date: "15 mars 2024", event: "Paiement reçu", description: "Paiement de 4 200 € reçu", type: "paiement" },
  { id: 6, date: "01 janv. 2024", event: "Note ajoutée", description: "Client très satisfait, potentiel upsell", type: "note" },
  { id: 7, date: "15 mars 2023", event: "Client créé", description: "Création du compte client", type: "creation" },
]

const notes = [
  { id: 1, author: "Marie Dupont", date: "08 mars 2026", content: "Client contacté pour le renouvellement. Très intéressé par les nouvelles fonctionnalités." },
  { id: 2, author: "Thomas Bernard", date: "01 janv. 2024", content: "Client très satisfait du service. Potentiel pour upsell vers Enterprise Plus." },
  { id: 3, author: "Marie Dupont", date: "15 mars 2023", content: "Premier contact excellent. Client provenant d'une recommandation de TechVision SAS." },
]

const statusConfig = {
  actif: { label: "Actif", className: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" },
  a_risque: { label: "À risque", className: "bg-amber-500/10 text-amber-600 border-amber-500/20" },
  en_retard: { label: "En retard", className: "bg-red-500/10 text-red-600 border-red-500/20" },
  resilie: { label: "Résilié", className: "bg-muted text-muted-foreground border-border" },
}

const echeanceStatusConfig = {
  paye: { label: "Payé", className: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" },
  a_venir: { label: "À venir", className: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
  en_retard: { label: "En retard", className: "bg-red-500/10 text-red-600 border-red-500/20" },
  annule: { label: "Annulé", className: "bg-muted text-muted-foreground border-border" },
}

const relanceStatusConfig = {
  envoyee: { label: "Envoyée", className: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" },
  a_envoyer: { label: "À envoyer", className: "bg-amber-500/10 text-amber-600 border-amber-500/20" },
  reponse_recue: { label: "Réponse reçue", className: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
  automatique: { label: "Automatique", className: "bg-purple-500/10 text-purple-600 border-purple-500/20" },
}

const eventTypeIcons = {
  relance: Send,
  paiement: CheckCircle,
  abonnement: Package,
  note: MessageSquare,
  creation: Plus,
}

export default function ClientDetailPage() {
  const [newNote, setNewNote] = useState("")
  const status = statusConfig[clientData.status]

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar />

      <div className="flex-1 lg:pl-[260px]">
        <TopNavbar />

        <main className="px-4 py-6 pb-24 lg:px-8 lg:pb-8">
          {/* Back Button */}
          <div className="mb-4">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground" asChild>
              <Link href="/clients">
                <ArrowLeft className="h-4 w-4" />
                Retour aux clients
              </Link>
            </Button>
          </div>

          {/* Page Header */}
          <div className="mb-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-4">
                <Avatar className="h-14 w-14 border-2 border-border/60">
                  <AvatarFallback className="bg-foreground text-lg font-semibold text-background">
                    AD
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                      {clientData.name}
                    </h1>
                    <Badge variant="outline" className={status.className}>
                      {status.label}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground lg:text-base">
                    Consultez les informations du client, ses échéances, ses relances et son historique.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Pencil className="h-4 w-4" />
                  <span className="hidden sm:inline">Modifier</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <CalendarPlus className="h-4 w-4" />
                  <span className="hidden sm:inline">Ajouter une échéance</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Send className="h-4 w-4" />
                  <span className="hidden sm:inline">Générer une relance</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Exporter</span>
                </Button>
              </div>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {kpiData.map((kpi, index) => (
              <Card key={index} className="border-border/60 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <kpi.icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    {kpi.trendUp !== null && (
                      <Badge variant="outline" className={kpi.trendUp ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : "bg-red-500/10 text-red-600 border-red-500/20"}>
                        {kpi.trend}
                      </Badge>
                    )}
                    {kpi.trendUp === null && (
                      <span className="text-xs text-muted-foreground">{kpi.trend}</span>
                    )}
                  </div>
                  <p className="mt-3 text-2xl font-bold tabular-nums text-foreground">{kpi.value}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{kpi.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {/* Main Content - 2/3 width */}
            <div className="space-y-6 xl:col-span-2">
              {/* Customer Summary Card */}
              <Card className="border-border/60 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                    Informations client
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <User className="mt-0.5 h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Contact principal</p>
                          <p className="font-medium text-foreground">{clientData.contact}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="mt-0.5 h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Email</p>
                          <p className="font-medium text-foreground">{clientData.email}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="mt-0.5 h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Téléphone</p>
                          <p className="font-medium text-foreground">{clientData.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Adresse</p>
                          <p className="font-medium text-foreground">{clientData.address}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Package className="mt-0.5 h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Produit / Offre</p>
                          <p className="font-medium text-foreground">{clientData.product}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CreditCard className="mt-0.5 h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Type d{"'"}abonnement</p>
                          <p className="font-medium text-foreground">{clientData.subscriptionType}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Euro className="mt-0.5 h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Montant</p>
                          <p className="font-medium text-foreground">{formatAmount(clientData.amount)}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className="mt-0.5 h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Prochaine échéance</p>
                          <p className="font-medium text-foreground">{clientData.nextDeadline}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tabs */}
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start overflow-x-auto border-b bg-transparent p-0">
                  <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none">
                    Vue d{"'"}ensemble
                  </TabsTrigger>
                  <TabsTrigger value="echeances" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none">
                    Échéances
                  </TabsTrigger>
                  <TabsTrigger value="relances" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none">
                    Relances
                  </TabsTrigger>
                  <TabsTrigger value="historique" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none">
                    Historique
                  </TabsTrigger>
                  <TabsTrigger value="notes" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none">
                    Notes
                  </TabsTrigger>
                </TabsList>

                {/* Vue d'ensemble Tab */}
                <TabsContent value="overview" className="mt-6 space-y-4">
                  <Card className="border-border/60 shadow-sm">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Résumé du compte</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-sm text-muted-foreground">Dernière interaction</p>
                        <p className="font-medium text-foreground">08 mars 2026 - Relance envoyée</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Niveau de risque</p>
                        <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">Faible</Badge>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Fréquence de facturation</p>
                        <p className="font-medium text-foreground">Annuelle</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Revenu généré</p>
                        <p className="font-medium text-foreground">14 400 € (3 ans)</p>
                      </div>
                      <div className="sm:col-span-2">
                        <p className="text-sm text-muted-foreground">Commentaire interne</p>
                        <p className="font-medium text-foreground">Client fidèle, très satisfait. Potentiel upsell vers Enterprise Plus.</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-border/60 shadow-sm">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Actions rapides</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                      <Button size="sm" variant="outline" className="gap-2">
                        <Send className="h-4 w-4" />
                        Envoyer un email
                      </Button>
                      <Button size="sm" variant="outline" className="gap-2">
                        <Phone className="h-4 w-4" />
                        Planifier un appel
                      </Button>
                      <Button size="sm" variant="outline" className="gap-2">
                        <FileText className="h-4 w-4" />
                        Générer un devis
                      </Button>
                      <Button size="sm" variant="outline" className="gap-2">
                        <Receipt className="h-4 w-4" />
                        Voir les factures
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Échéances Tab */}
                <TabsContent value="echeances" className="mt-6">
                  <Card className="border-border/60 shadow-sm">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Historique des échéances</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Date d{"'"}échéance</TableHead>
                              <TableHead>Montant</TableHead>
                              <TableHead>Fréquence</TableHead>
                              <TableHead>Statut</TableHead>
                              <TableHead>Date de paiement</TableHead>
                              <TableHead className="w-12">
                                <span className="sr-only">Actions</span>
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {echeances.map((echeance) => {
                              const echeanceStatus = echeanceStatusConfig[echeance.status as keyof typeof echeanceStatusConfig]
                              return (
                                <TableRow key={echeance.id}>
                                  <TableCell className="font-medium">{echeance.date}</TableCell>
                                  <TableCell className="font-semibold tabular-nums">{formatAmount(echeance.amount)}</TableCell>
                                  <TableCell>{echeance.frequency}</TableCell>
                                  <TableCell>
                                    <Badge variant="outline" className={echeanceStatus.className}>
                                      {echeanceStatus.label}
                                    </Badge>
                                  </TableCell>
                                  <TableCell className="text-muted-foreground">{echeance.paymentDate}</TableCell>
                                  <TableCell>
                                    <DropdownMenu>
                                      <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                          <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent align="end">
                                        <DropdownMenuItem className="gap-2">
                                          <Eye className="h-4 w-4" />
                                          Voir
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="gap-2">
                                          <Pencil className="h-4 w-4" />
                                          Modifier
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="gap-2">
                                          <CheckCircle className="h-4 w-4" />
                                          Marquer comme payé
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="gap-2">
                                          <Send className="h-4 w-4" />
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
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Relances Tab */}
                <TabsContent value="relances" className="mt-6">
                  <Card className="border-border/60 shadow-sm">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Historique des relances</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Date</TableHead>
                              <TableHead>Type</TableHead>
                              <TableHead>Canal</TableHead>
                              <TableHead>Objet</TableHead>
                              <TableHead>Statut</TableHead>
                              <TableHead>Réponse</TableHead>
                              <TableHead className="w-12">
                                <span className="sr-only">Actions</span>
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {relances.map((relance) => {
                              const relanceStatus = relanceStatusConfig[relance.status as keyof typeof relanceStatusConfig]
                              return (
                                <TableRow key={relance.id}>
                                  <TableCell className="font-medium">{relance.date}</TableCell>
                                  <TableCell>{relance.type}</TableCell>
                                  <TableCell>
                                    <Badge variant="outline">{relance.channel}</Badge>
                                  </TableCell>
                                  <TableCell className="text-muted-foreground">{relance.subject}</TableCell>
                                  <TableCell>
                                    <Badge variant="outline" className={relanceStatus.className}>
                                      {relanceStatus.label}
                                    </Badge>
                                  </TableCell>
                                  <TableCell className="text-muted-foreground">{relance.response}</TableCell>
                                  <TableCell>
                                    <DropdownMenu>
                                      <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                          <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent align="end">
                                        <DropdownMenuItem className="gap-2">
                                          <Eye className="h-4 w-4" />
                                          Voir le message
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="gap-2">
                                          <Send className="h-4 w-4" />
                                          Renvoyer
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="gap-2">
                                          <Pencil className="h-4 w-4" />
                                          Modifier
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
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Historique Tab */}
                <TabsContent value="historique" className="mt-6">
                  <Card className="border-border/60 shadow-sm">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Chronologie des activités</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="relative space-y-6 before:absolute before:left-[15px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-border">
                        {historique.map((event) => {
                          const EventIcon = eventTypeIcons[event.type as keyof typeof eventTypeIcons] || Clock
                          return (
                            <div key={event.id} className="relative flex gap-4 pl-10">
                              <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-card border border-border">
                                <EventIcon className="h-4 w-4 text-muted-foreground" />
                              </div>
                              <div className="flex-1 pt-0.5">
                                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                  <p className="font-medium text-foreground">{event.event}</p>
                                  <span className="text-xs text-muted-foreground">{event.date}</span>
                                </div>
                                <p className="mt-0.5 text-sm text-muted-foreground">{event.description}</p>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Notes Tab */}
                <TabsContent value="notes" className="mt-6 space-y-4">
                  <Card className="border-border/60 shadow-sm">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Ajouter une note</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Textarea
                        placeholder="Écrivez votre note ici..."
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        className="min-h-24 resize-none"
                      />
                      <Button size="sm" className="gap-2">
                        <Plus className="h-4 w-4" />
                        Ajouter la note
                      </Button>
                    </CardContent>
                  </Card>

                  {notes.map((note) => (
                    <Card key={note.id} className="border-border/60 shadow-sm">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-7 w-7">
                              <AvatarFallback className="bg-muted text-xs font-medium">
                                {note.author.split(" ").map(n => n[0]).join("")}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium text-sm text-foreground">{note.author}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{note.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{note.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Column - 1/3 width */}
            <div className="space-y-6">
              {/* AI Assistant Card */}
              <Card className="border-border/60 shadow-sm overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-foreground to-foreground/90 text-background pb-4">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Sparkles className="h-4 w-4" />
                    Assistant IA
                  </CardTitle>
                  <CardDescription className="text-background/70">
                    Suggestions intelligentes
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-3">
                    <p className="text-sm text-amber-700">Un renouvellement annuel arrive dans 7 jours</p>
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm text-muted-foreground">Une relance personnalisée est recommandée</p>
                  </div>
                  <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-3">
                    <p className="text-sm text-emerald-700">Risque faible de non-renouvellement</p>
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <Button size="sm" className="w-full gap-2">
                      <Send className="h-4 w-4" />
                      Générer une relance
                    </Button>
                    <Button size="sm" variant="outline" className="w-full gap-2">
                      <FileText className="h-4 w-4" />
                      Résumer le compte
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Abonnement actuel */}
              <Card className="border-border/60 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Package className="h-4 w-4 text-muted-foreground" />
                    Abonnement actuel
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Offre</span>
                    <span className="text-sm font-medium text-foreground">{clientData.product}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Montant</span>
                    <span className="text-sm font-medium text-foreground">{formatAmount(clientData.amount)}/an</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Début</span>
                    <span className="text-sm font-medium text-foreground">{clientData.startDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Prochaine échéance</span>
                    <span className="text-sm font-medium text-foreground">{clientData.nextDeadline}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Coordonnées de facturation */}
              <Card className="border-border/60 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Receipt className="h-4 w-4 text-muted-foreground" />
                    Coordonnées de facturation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="font-medium text-foreground">{clientData.name}</p>
                  <p className="text-muted-foreground">{clientData.address}</p>
                  <p className="text-muted-foreground">SIRET: 123 456 789 00012</p>
                  <p className="text-muted-foreground">TVA: FR12345678901</p>
                </CardContent>
              </Card>

              {/* Documents associés */}
              <Card className="border-border/60 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    Documents associés
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground">
                    <FileText className="h-4 w-4" />
                    Contrat_2024.pdf
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground">
                    <FileText className="h-4 w-4" />
                    Facture_2025_03.pdf
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground">
                    <FileText className="h-4 w-4" />
                    Devis_upgrade_2025.pdf
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
