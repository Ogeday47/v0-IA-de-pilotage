"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  LayoutDashboard,
  CalendarClock,
  Bell,
  History,
  FileText,
  MoreHorizontal,
  Eye,
  Pencil,
  CheckCircle2,
  Send,
  RefreshCw,
  User,
  CreditCard,
  MessageSquare,
  Mail,
  Phone,
  Plus,
  Clock,
  AlertCircle,
  ArrowRight,
} from "lucide-react"

// Échéances data
const echeances = [
  {
    id: "1",
    date: "15 janvier 2027",
    amount: "5 400 EUR",
    frequency: "Annuel",
    status: "À venir",
    paymentDate: "-",
  },
  {
    id: "2",
    date: "15 janvier 2026",
    amount: "5 400 EUR",
    frequency: "Annuel",
    status: "Payé",
    paymentDate: "12 janvier 2026",
  },
  {
    id: "3",
    date: "15 janvier 2025",
    amount: "5 400 EUR",
    frequency: "Annuel",
    status: "Payé",
    paymentDate: "14 janvier 2025",
  },
  {
    id: "4",
    date: "15 janvier 2024",
    amount: "5 400 EUR",
    frequency: "Annuel",
    status: "Payé",
    paymentDate: "15 janvier 2024",
  },
  {
    id: "5",
    date: "15 octobre 2023",
    amount: "540 EUR",
    frequency: "Mensuel",
    status: "En retard",
    paymentDate: "-",
  },
  {
    id: "6",
    date: "15 septembre 2023",
    amount: "540 EUR",
    frequency: "Mensuel",
    status: "Annulé",
    paymentDate: "-",
  },
]

const echeanceStatusConfig = {
  "Payé": { className: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" },
  "À venir": { className: "bg-sky-500/10 text-sky-600 border-sky-500/20" },
  "En retard": { className: "bg-red-500/10 text-red-600 border-red-500/20" },
  "Annulé": { className: "bg-muted text-muted-foreground border-border" },
}

// Relances data
const relances = [
  {
    id: "1",
    date: "10 mars 2026",
    type: "Renouvellement",
    channel: "Email",
    subject: "Rappel de renouvellement annuel",
    status: "Envoyée",
    response: "Réponse reçue",
  },
  {
    id: "2",
    date: "5 mars 2026",
    type: "Rappel avant échéance",
    channel: "Email",
    subject: "Votre échéance approche",
    status: "Envoyée",
    response: "-",
  },
  {
    id: "3",
    date: "20 février 2026",
    type: "Paiement en retard",
    channel: "Téléphone",
    subject: "Appel de suivi paiement",
    status: "Réponse reçue",
    response: "Promesse de paiement",
  },
  {
    id: "4",
    date: "15 février 2026",
    type: "Paiement en retard",
    channel: "Email",
    subject: "Relance paiement échéance",
    status: "Envoyée",
    response: "-",
  },
  {
    id: "5",
    date: "1 février 2026",
    type: "Rappel avant échéance",
    channel: "SMS",
    subject: "Rappel échéance J-14",
    status: "Automatique",
    response: "-",
  },
  {
    id: "6",
    date: "25 janvier 2026",
    type: "Renouvellement",
    channel: "Email",
    subject: "Offre de renouvellement anticipé",
    status: "À envoyer",
    response: "-",
  },
]

const relanceStatusConfig = {
  "Envoyée": { className: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" },
  "À envoyer": { className: "bg-amber-500/10 text-amber-600 border-amber-500/20" },
  "Réponse reçue": { className: "bg-sky-500/10 text-sky-600 border-sky-500/20" },
  "Automatique": { className: "bg-muted text-muted-foreground border-border" },
}

const channelIcons = {
  "Email": Mail,
  "Téléphone": Phone,
  "SMS": MessageSquare,
}

// Historique data
const historique = [
  {
    id: "1",
    date: "10 mars 2026",
    time: "14:32",
    event: "Relance envoyée",
    description: "Email de rappel de renouvellement envoyé",
    icon: Send,
    color: "bg-sky-100 text-sky-600",
  },
  {
    id: "2",
    date: "5 mars 2026",
    time: "09:15",
    event: "Note ajoutée",
    description: "Commentaire interne ajouté par Marie Dupont",
    icon: MessageSquare,
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: "3",
    date: "12 janvier 2026",
    time: "11:45",
    event: "Paiement reçu",
    description: "Paiement de 5 400 EUR reçu par virement",
    icon: CreditCard,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    id: "4",
    date: "15 janvier 2025",
    time: "10:00",
    event: "Abonnement renouvelé",
    description: "Renouvellement automatique Suite Enterprise",
    icon: RefreshCw,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    id: "5",
    date: "14 janvier 2025",
    time: "16:20",
    event: "Paiement reçu",
    description: "Paiement de 5 400 EUR reçu par carte",
    icon: CreditCard,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    id: "6",
    date: "10 décembre 2024",
    time: "09:00",
    event: "Changement de statut",
    description: "Statut passé de \"À risque\" à \"Actif\"",
    icon: AlertCircle,
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: "7",
    date: "15 janvier 2024",
    time: "08:30",
    event: "Client créé",
    description: "Fiche client créée par Sophie Martin",
    icon: User,
    color: "bg-foreground text-background",
  },
]

// Notes data
const notes = [
  {
    id: "1",
    author: "Marie Dupont",
    date: "5 mars 2026",
    content: "Client très satisfait des services. A mentionné une possible extension de leur abonnement vers une offre personnalisée. À suivre lors du prochain renouvellement.",
  },
  {
    id: "2",
    author: "Sophie Martin",
    date: "20 février 2026",
    content: "Appel téléphonique concernant le retard de paiement. Le client a confirmé un problème temporaire de trésorerie. Paiement prévu pour fin février.",
  },
  {
    id: "3",
    author: "Pierre Lambert",
    date: "15 janvier 2024",
    content: "Nouveau client référé par TechVision SAS. Entreprise familiale spécialisée dans l'artisanat haut de gamme. Potentiel de croissance important.",
  },
]

export function ClientTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="mb-6 h-auto w-full justify-start gap-1 overflow-x-auto rounded-xl bg-muted/50 p-1.5">
        <TabsTrigger
          value="overview"
          className="gap-2 rounded-lg px-4 py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm"
        >
          <LayoutDashboard className="h-4 w-4" />
          <span className="hidden sm:inline">Vue d{"'"}ensemble</span>
          <span className="sm:hidden">Vue</span>
        </TabsTrigger>
        <TabsTrigger
          value="echeances"
          className="gap-2 rounded-lg px-4 py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm"
        >
          <CalendarClock className="h-4 w-4" />
          Échéances
        </TabsTrigger>
        <TabsTrigger
          value="relances"
          className="gap-2 rounded-lg px-4 py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm"
        >
          <Bell className="h-4 w-4" />
          Relances
        </TabsTrigger>
        <TabsTrigger
          value="historique"
          className="gap-2 rounded-lg px-4 py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm"
        >
          <History className="h-4 w-4" />
          Historique
        </TabsTrigger>
        <TabsTrigger
          value="notes"
          className="gap-2 rounded-lg px-4 py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm"
        >
          <FileText className="h-4 w-4" />
          Notes
        </TabsTrigger>
      </TabsList>

      {/* Vue d'ensemble Tab */}
      <TabsContent value="overview" className="mt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Account Summary */}
          <Card className="border-border/60 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold">Résumé du compte</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <span className="text-sm text-muted-foreground">Dernière interaction</span>
                <span className="font-medium text-foreground">10 mars 2026</span>
              </div>
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <span className="text-sm text-muted-foreground">Niveau de risque</span>
                <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                  Faible
                </Badge>
              </div>
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <span className="text-sm text-muted-foreground">Fréquence de facturation</span>
                <span className="font-medium text-foreground">Annuelle</span>
              </div>
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <span className="text-sm text-muted-foreground">Revenu total généré</span>
                <span className="font-bold text-foreground">32 400 EUR</span>
              </div>
              <div className="pt-1">
                <span className="text-sm text-muted-foreground">Commentaire interne</span>
                <p className="mt-2 text-sm text-foreground">
                  Client fidèle depuis 2024. Historique de paiement excellent. Potentiel d{"'"}upsell vers offre personnalisée. Relation commerciale à soigner.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-border/60 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold">Actions rapides</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                <Send className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Envoyer une relance</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                <CalendarClock className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Ajouter une échéance</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Ajouter une note</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                <RefreshCw className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Renouveler l{"'"}abonnement</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      {/* Échéances Tab */}
      <TabsContent value="echeances" className="mt-0">
        <Card className="border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <CardTitle className="text-base font-semibold">Historique des échéances</CardTitle>
            <Button size="sm" className="h-9 gap-2">
              <Plus className="h-4 w-4" />
              Nouvelle échéance
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="min-w-[140px]">Date d{"'"}échéance</TableHead>
                    <TableHead className="min-w-[120px]">Montant</TableHead>
                    <TableHead className="min-w-[100px]">Fréquence</TableHead>
                    <TableHead className="min-w-[100px]">Statut</TableHead>
                    <TableHead className="min-w-[140px]">Date de paiement</TableHead>
                    <TableHead className="w-12">
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {echeances.map((echeance) => {
                    const status = echeanceStatusConfig[echeance.status as keyof typeof echeanceStatusConfig]
                    return (
                      <TableRow key={echeance.id} className="group">
                        <TableCell className="font-medium">{echeance.date}</TableCell>
                        <TableCell className="font-semibold tabular-nums">{echeance.amount}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="font-normal">
                            {echeance.frequency}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={status.className}>{echeance.status}</Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{echeance.paymentDate}</TableCell>
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
                              <DropdownMenuItem className="gap-2">
                                <Eye className="h-4 w-4 text-muted-foreground" />
                                Voir
                              </DropdownMenuItem>
                              <DropdownMenuItem className="gap-2">
                                <Pencil className="h-4 w-4 text-muted-foreground" />
                                Modifier
                              </DropdownMenuItem>
                              <DropdownMenuItem className="gap-2">
                                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
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
          </CardContent>
        </Card>
      </TabsContent>

      {/* Relances Tab */}
      <TabsContent value="relances" className="mt-0">
        <Card className="border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <CardTitle className="text-base font-semibold">Historique des relances</CardTitle>
            <Button size="sm" className="h-9 gap-2">
              <Plus className="h-4 w-4" />
              Nouvelle relance
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="min-w-[120px]">Date</TableHead>
                    <TableHead className="min-w-[140px]">Type</TableHead>
                    <TableHead className="min-w-[100px]">Canal</TableHead>
                    <TableHead className="min-w-[200px]">Objet</TableHead>
                    <TableHead className="min-w-[120px]">Statut</TableHead>
                    <TableHead className="min-w-[140px]">Réponse</TableHead>
                    <TableHead className="w-12">
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {relances.map((relance) => {
                    const status = relanceStatusConfig[relance.status as keyof typeof relanceStatusConfig]
                    const ChannelIcon = channelIcons[relance.channel as keyof typeof channelIcons]
                    return (
                      <TableRow key={relance.id} className="group">
                        <TableCell className="font-medium">{relance.date}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="font-normal">
                            {relance.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <ChannelIcon className="h-4 w-4 text-muted-foreground" />
                            <span>{relance.channel}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{relance.subject}</TableCell>
                        <TableCell>
                          <Badge className={status.className}>{relance.status}</Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{relance.response}</TableCell>
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
                              <DropdownMenuItem className="gap-2">
                                <Eye className="h-4 w-4 text-muted-foreground" />
                                Voir le message
                              </DropdownMenuItem>
                              <DropdownMenuItem className="gap-2">
                                <RefreshCw className="h-4 w-4 text-muted-foreground" />
                                Renvoyer
                              </DropdownMenuItem>
                              <DropdownMenuItem className="gap-2">
                                <Pencil className="h-4 w-4 text-muted-foreground" />
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
      <TabsContent value="historique" className="mt-0">
        <Card className="border-border/60 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-base font-semibold">Chronologie des activités</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative space-y-0">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 h-full w-px bg-border" />

              {historique.map((item, index) => (
                <div key={item.id} className="relative flex gap-4 pb-8 last:pb-0">
                  {/* Timeline dot */}
                  <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.color}`}>
                    <item.icon className="h-4 w-4" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-foreground">{item.event}</span>
                      <span className="text-sm text-muted-foreground">
                        {item.date} à {item.time}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Notes Tab */}
      <TabsContent value="notes" className="mt-0">
        <div className="space-y-6">
          {/* Add Note */}
          <Card className="border-border/60 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold">Ajouter une note</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Écrivez votre note ici..."
                className="min-h-[100px] resize-none border-border/60"
              />
              <div className="mt-3 flex justify-end">
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Ajouter la note
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Notes List */}
          <Card className="border-border/60 shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-base font-semibold">Notes internes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="rounded-xl border border-border/60 bg-muted/30 p-4"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-foreground text-[10px] font-semibold text-background">
                        {note.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-foreground">{note.author}</p>
                      <p className="text-xs text-muted-foreground">{note.date}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground">{note.content}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}
