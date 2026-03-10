"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { TopNavbar } from "@/components/dashboard/top-navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Settings,
  Building2,
  Users,
  Bell,
  CreditCard,
  Shield,
  Plug,
  Mail,
  Phone,
  Globe,
  Clock,
  Euro,
  UserPlus,
  MoreHorizontal,
  Pencil,
  Trash2,
  Send,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Lock,
  Smartphone,
  Monitor,
  RefreshCw,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const settingsTabs = [
  { id: "general", label: "Général", icon: Building2 },
  { id: "equipe", label: "Équipe", icon: Users },
  { id: "relances", label: "Relances", icon: Bell },
  { id: "abonnements", label: "Abonnements", icon: CreditCard },
  { id: "notifications", label: "Notifications", icon: Mail },
  { id: "securite", label: "Sécurité", icon: Shield },
  { id: "integrations", label: "Intégrations", icon: Plug },
]

const teamMembers = [
  {
    id: 1,
    name: "Marie Dupont",
    email: "marie.dupont@entreprise.fr",
    role: "Administrateur",
    status: "Actif",
    avatar: "MD",
  },
  {
    id: 2,
    name: "Pierre Martin",
    email: "pierre.martin@entreprise.fr",
    role: "Gestionnaire",
    status: "Actif",
    avatar: "PM",
  },
  {
    id: 3,
    name: "Sophie Bernard",
    email: "sophie.bernard@entreprise.fr",
    role: "Lecture seule",
    status: "Actif",
    avatar: "SB",
  },
  {
    id: 4,
    name: "Lucas Moreau",
    email: "lucas.moreau@entreprise.fr",
    role: "Gestionnaire",
    status: "En attente",
    avatar: "LM",
  },
]

const integrations = [
  {
    id: "stripe",
    name: "Stripe",
    description: "Synchronisez vos paiements et factures automatiquement.",
    icon: "💳",
    connected: true,
  },
  {
    id: "hubspot",
    name: "HubSpot",
    description: "Connectez votre CRM pour synchroniser les contacts.",
    icon: "🔶",
    connected: false,
  },
  {
    id: "salesforce",
    name: "Salesforce",
    description: "Importez et exportez vos données clients Salesforce.",
    icon: "☁️",
    connected: false,
  },
  {
    id: "google-sheets",
    name: "Google Sheets",
    description: "Exportez vos rapports vers Google Sheets.",
    icon: "📊",
    connected: true,
  },
]

const activeSessions = [
  {
    id: 1,
    device: "MacBook Pro - Chrome",
    location: "Paris, France",
    lastActive: "Maintenant",
    current: true,
  },
  {
    id: 2,
    device: "iPhone 14 - Safari",
    location: "Paris, France",
    lastActive: "Il y a 2 heures",
    current: false,
  },
  {
    id: 3,
    device: "Windows PC - Firefox",
    location: "Lyon, France",
    lastActive: "Il y a 3 jours",
    current: false,
  },
]

export default function ParametresPage() {
  const [activeTab, setActiveTab] = useState("general")
  
  // General settings state
  const [companyName, setCompanyName] = useState("Entreprise SAS")
  const [email, setEmail] = useState("contact@entreprise.fr")
  const [phone, setPhone] = useState("+33 1 23 45 67 89")
  const [currency, setCurrency] = useState("eur")
  const [timezone, setTimezone] = useState("europe-paris")
  const [language, setLanguage] = useState("fr")
  
  // Relances settings state
  const [relanceAvantEcheance, setRelanceAvantEcheance] = useState(true)
  const [relanceApresRetard, setRelanceApresRetard] = useState(true)
  const [relanceRenouvellement, setRelanceRenouvellement] = useState(true)
  const [relanceIA, setRelanceIA] = useState(true)
  
  // Notification settings state
  const [resumeQuotidien, setResumeQuotidien] = useState(true)
  const [alerteRetard, setAlerteRetard] = useState(true)
  const [rapportHebdo, setRapportHebdo] = useState(false)
  const [alerteRisque, setAlerteRisque] = useState(true)
  
  // Security settings state
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar />

      <div className="flex-1 lg:pl-[260px]">
        <TopNavbar />

        <main className="px-4 py-6 pb-24 lg:px-8 lg:pb-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground shadow-sm">
                  <Settings className="h-5 w-5 text-background" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                    Paramètres
                  </h1>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Configurez votre espace de travail, vos relances et vos préférences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Settings Layout */}
          <div className="flex flex-col gap-6 lg:flex-row">
            {/* Settings Navigation */}
            <aside className="w-full shrink-0 lg:w-56">
              <Card className="border-border/60 shadow-sm">
                <CardContent className="p-2">
                  <nav className="space-y-1">
                    {settingsTabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                          activeTab === tab.id
                            ? "bg-foreground text-background"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <tab.icon className={`h-4 w-4 ${activeTab === tab.id ? "text-background" : "text-muted-foreground"}`} />
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </aside>

            {/* Settings Content */}
            <div className="flex-1 space-y-6">
              {/* General Settings */}
              {activeTab === "general" && (
                <Card className="border-border/60 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-muted-foreground" />
                      Général
                    </CardTitle>
                    <CardDescription>
                      Informations de base de votre entreprise et préférences régionales.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="company-name">Nom de l{"'"}entreprise</Label>
                        <Input
                          id="company-name"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="Votre entreprise"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Adresse email principale</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10"
                            placeholder="contact@entreprise.fr"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="pl-10"
                            placeholder="+33 1 23 45 67 89"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currency">Devise</Label>
                        <div className="relative">
                          <Euro className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none z-10" />
                          <Select value={currency} onValueChange={setCurrency}>
                            <SelectTrigger id="currency" className="pl-10">
                              <SelectValue placeholder="Sélectionner" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="eur">Euro (EUR)</SelectItem>
                              <SelectItem value="usd">Dollar (USD)</SelectItem>
                              <SelectItem value="gbp">Livre Sterling (GBP)</SelectItem>
                              <SelectItem value="chf">Franc Suisse (CHF)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Fuseau horaire</Label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none z-10" />
                          <Select value={timezone} onValueChange={setTimezone}>
                            <SelectTrigger id="timezone" className="pl-10">
                              <SelectValue placeholder="Sélectionner" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="europe-paris">Europe/Paris (UTC+1)</SelectItem>
                              <SelectItem value="europe-london">Europe/London (UTC+0)</SelectItem>
                              <SelectItem value="america-new-york">America/New York (UTC-5)</SelectItem>
                              <SelectItem value="asia-tokyo">Asia/Tokyo (UTC+9)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="language">Langue</Label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none z-10" />
                          <Select value={language} onValueChange={setLanguage}>
                            <SelectTrigger id="language" className="pl-10">
                              <SelectValue placeholder="Sélectionner" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fr">Français</SelectItem>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="de">Deutsch</SelectItem>
                              <SelectItem value="es">Español</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end border-t border-border/60 pt-6">
                      <Button className="gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        Enregistrer les modifications
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Team Settings */}
              {activeTab === "equipe" && (
                <Card className="border-border/60 shadow-sm">
                  <CardHeader>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-muted-foreground" />
                          Équipe
                        </CardTitle>
                        <CardDescription>
                          Gérez les membres de votre équipe et leurs permissions.
                        </CardDescription>
                      </div>
                      <Button className="gap-2">
                        <UserPlus className="h-4 w-4" />
                        Inviter un membre
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg border border-border/60 overflow-hidden">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-muted/50 hover:bg-muted/50">
                            <TableHead className="text-xs font-semibold">Membre</TableHead>
                            <TableHead className="text-xs font-semibold">Rôle</TableHead>
                            <TableHead className="text-xs font-semibold">Statut</TableHead>
                            <TableHead className="text-xs font-semibold text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {teamMembers.map((member) => (
                            <TableRow key={member.id} className="text-sm">
                              <TableCell>
                                <div className="flex items-center gap-3">
                                  <Avatar className="h-9 w-9 border border-border/60">
                                    <AvatarFallback className="bg-muted text-xs font-semibold text-muted-foreground">
                                      {member.avatar}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium text-foreground">{member.name}</p>
                                    <p className="text-xs text-muted-foreground">{member.email}</p>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge
                                  variant="outline"
                                  className={`text-xs ${
                                    member.role === "Administrateur"
                                      ? "bg-foreground/5 text-foreground border-foreground/20"
                                      : member.role === "Gestionnaire"
                                      ? "bg-blue-500/10 text-blue-600 border-blue-500/20"
                                      : "bg-muted text-muted-foreground"
                                  }`}
                                >
                                  {member.role}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge
                                  variant="outline"
                                  className={`text-xs ${
                                    member.status === "Actif"
                                      ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                                      : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                                  }`}
                                >
                                  {member.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end" className="w-48">
                                    <DropdownMenuItem className="gap-2">
                                      <Pencil className="h-4 w-4 text-muted-foreground" />
                                      Modifier
                                    </DropdownMenuItem>
                                    {member.status === "En attente" && (
                                      <DropdownMenuItem className="gap-2">
                                        <Send className="h-4 w-4 text-muted-foreground" />
                                        Renvoyer l{"'"}invitation
                                      </DropdownMenuItem>
                                    )}
                                    <DropdownMenuItem className="gap-2 text-red-600">
                                      <Trash2 className="h-4 w-4" />
                                      Retirer
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Relances Settings */}
              {activeTab === "relances" && (
                <Card className="border-border/60 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5 text-muted-foreground" />
                      Relances automatiques
                    </CardTitle>
                    <CardDescription>
                      Configurez les règles d{"'"}envoi automatique de vos relances.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Relance avant échéance */}
                    <div className="flex items-start justify-between gap-4 rounded-xl border border-border/60 bg-muted/20 p-4">
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-foreground">
                            Relances avant échéance
                          </p>
                          <Badge variant="outline" className="text-xs bg-blue-500/10 text-blue-600 border-blue-500/20">
                            Préventif
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Envoyez un rappel avant la date d{"'"}échéance pour éviter les retards.
                        </p>
                        <div className="flex items-center gap-2 pt-2">
                          <span className="text-xs text-muted-foreground">Délai :</span>
                          <Select defaultValue="3">
                            <SelectTrigger className="h-8 w-32 text-xs">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 jour avant</SelectItem>
                              <SelectItem value="3">3 jours avant</SelectItem>
                              <SelectItem value="7">7 jours avant</SelectItem>
                              <SelectItem value="14">14 jours avant</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <Switch
                        checked={relanceAvantEcheance}
                        onCheckedChange={setRelanceAvantEcheance}
                      />
                    </div>

                    {/* Relance après retard */}
                    <div className="flex items-start justify-between gap-4 rounded-xl border border-border/60 bg-muted/20 p-4">
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-foreground">
                            Relances après retard
                          </p>
                          <Badge variant="outline" className="text-xs bg-red-500/10 text-red-600 border-red-500/20">
                            Recouvrement
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Envoyez une relance automatique lorsqu{"'"}un paiement est en retard.
                        </p>
                        <div className="flex items-center gap-2 pt-2">
                          <span className="text-xs text-muted-foreground">Délai :</span>
                          <Select defaultValue="2">
                            <SelectTrigger className="h-8 w-32 text-xs">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 jour après</SelectItem>
                              <SelectItem value="2">2 jours après</SelectItem>
                              <SelectItem value="5">5 jours après</SelectItem>
                              <SelectItem value="7">7 jours après</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <Switch
                        checked={relanceApresRetard}
                        onCheckedChange={setRelanceApresRetard}
                      />
                    </div>

                    {/* Relance renouvellement */}
                    <div className="flex items-start justify-between gap-4 rounded-xl border border-border/60 bg-muted/20 p-4">
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-foreground">
                            Relances de renouvellement
                          </p>
                          <Badge variant="outline" className="text-xs bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                            Rétention
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Rappelez à vos clients que leur abonnement arrive à terme.
                        </p>
                        <div className="flex items-center gap-2 pt-2">
                          <span className="text-xs text-muted-foreground">Délai :</span>
                          <Select defaultValue="7">
                            <SelectTrigger className="h-8 w-32 text-xs">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="7">7 jours avant</SelectItem>
                              <SelectItem value="14">14 jours avant</SelectItem>
                              <SelectItem value="30">30 jours avant</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <Switch
                        checked={relanceRenouvellement}
                        onCheckedChange={setRelanceRenouvellement}
                      />
                    </div>

                    {/* IA */}
                    <div className="flex items-start justify-between gap-4 rounded-xl border border-foreground/10 bg-gradient-to-br from-foreground/5 to-transparent p-4">
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-foreground" />
                          <p className="text-sm font-medium text-foreground">
                            Génération IA des messages
                          </p>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Laissez l{"'"}IA générer des messages personnalisés pour chaque client.
                        </p>
                      </div>
                      <Switch
                        checked={relanceIA}
                        onCheckedChange={setRelanceIA}
                      />
                    </div>

                    <div className="flex justify-end border-t border-border/60 pt-6">
                      <Button className="gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        Enregistrer les modifications
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Abonnements Settings */}
              {activeTab === "abonnements" && (
                <Card className="border-border/60 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-muted-foreground" />
                      Abonnements
                    </CardTitle>
                    <CardDescription>
                      Configurez les paramètres par défaut de vos abonnements.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Fréquences disponibles</Label>
                        <p className="text-xs text-muted-foreground">
                          Sélectionnez les fréquences de paiement disponibles pour vos abonnements.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          <Badge variant="outline" className="cursor-pointer bg-foreground text-background border-foreground">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Mensuel
                          </Badge>
                          <Badge variant="outline" className="cursor-pointer bg-foreground text-background border-foreground">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Trimestriel
                          </Badge>
                          <Badge variant="outline" className="cursor-pointer bg-foreground text-background border-foreground">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Annuel
                          </Badge>
                          <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                            Semestriel
                          </Badge>
                          <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                            Bimensuel
                          </Badge>
                        </div>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2 pt-4">
                        <div className="flex items-start justify-between gap-4 rounded-xl border border-border/60 bg-muted/20 p-4">
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-foreground">
                              Génération automatique des échéances
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Créez automatiquement les prochaines échéances.
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>

                        <div className="space-y-2 rounded-xl border border-border/60 bg-muted/20 p-4">
                          <Label className="text-sm">Mois générés à l{"'"}avance</Label>
                          <Select defaultValue="6">
                            <SelectTrigger className="mt-1">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="3">3 mois</SelectItem>
                              <SelectItem value="6">6 mois</SelectItem>
                              <SelectItem value="12">12 mois</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2 pt-2">
                        <Label>Statut par défaut des nouvelles échéances</Label>
                        <Select defaultValue="a-venir">
                          <SelectTrigger className="max-w-xs">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="a-venir">À venir</SelectItem>
                            <SelectItem value="en-attente">En attente</SelectItem>
                            <SelectItem value="brouillon">Brouillon</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex justify-end border-t border-border/60 pt-6">
                      <Button className="gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        Enregistrer les modifications
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Notifications Settings */}
              {activeTab === "notifications" && (
                <Card className="border-border/60 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      Notifications
                    </CardTitle>
                    <CardDescription>
                      Choisissez quelles notifications vous souhaitez recevoir.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start justify-between gap-4 rounded-xl border border-border/60 bg-muted/20 p-4">
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-foreground">
                          Résumé quotidien
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Recevez chaque matin un récapitulatif des échéances et actions du jour.
                        </p>
                      </div>
                      <Switch
                        checked={resumeQuotidien}
                        onCheckedChange={setResumeQuotidien}
                      />
                    </div>

                    <div className="flex items-start justify-between gap-4 rounded-xl border border-border/60 bg-muted/20 p-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-foreground">
                            Alerte en cas de retard
                          </p>
                          <Badge variant="outline" className="text-xs bg-red-500/10 text-red-600 border-red-500/20">
                            Important
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Soyez notifié immédiatement lorsqu{"'"}un paiement passe en retard.
                        </p>
                      </div>
                      <Switch
                        checked={alerteRetard}
                        onCheckedChange={setAlerteRetard}
                      />
                    </div>

                    <div className="flex items-start justify-between gap-4 rounded-xl border border-border/60 bg-muted/20 p-4">
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-foreground">
                          Rapport hebdomadaire
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Recevez un rapport détaillé chaque lundi avec les statistiques de la semaine.
                        </p>
                      </div>
                      <Switch
                        checked={rapportHebdo}
                        onCheckedChange={setRapportHebdo}
                      />
                    </div>

                    <div className="flex items-start justify-between gap-4 rounded-xl border border-border/60 bg-muted/20 p-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-foreground">
                            Alerte clients à risque
                          </p>
                          <Badge variant="outline" className="text-xs bg-amber-500/10 text-amber-600 border-amber-500/20">
                            IA
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          L{"'"}IA vous alerte lorsqu{"'"}un client présente un risque de churn.
                        </p>
                      </div>
                      <Switch
                        checked={alerteRisque}
                        onCheckedChange={setAlerteRisque}
                      />
                    </div>

                    <div className="flex justify-end border-t border-border/60 pt-6">
                      <Button className="gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        Enregistrer les modifications
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Security Settings */}
              {activeTab === "securite" && (
                <div className="space-y-6">
                  <Card className="border-border/60 shadow-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-muted-foreground" />
                        Sécurité
                      </CardTitle>
                      <CardDescription>
                        Gérez la sécurité de votre compte et vos sessions actives.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Change Password */}
                      <div className="rounded-xl border border-border/60 bg-muted/20 p-4 space-y-4">
                        <div className="flex items-center gap-2">
                          <Lock className="h-4 w-4 text-muted-foreground" />
                          <p className="text-sm font-medium text-foreground">
                            Changer le mot de passe
                          </p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="current-password">Mot de passe actuel</Label>
                            <Input id="current-password" type="password" placeholder="••••••••" />
                          </div>
                          <div />
                          <div className="space-y-2">
                            <Label htmlFor="new-password">Nouveau mot de passe</Label>
                            <Input id="new-password" type="password" placeholder="••••••••" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                            <Input id="confirm-password" type="password" placeholder="••••••••" />
                          </div>
                        </div>
                        <Button variant="outline" className="gap-2">
                          <Lock className="h-4 w-4" />
                          Mettre à jour le mot de passe
                        </Button>
                      </div>

                      {/* Two Factor Auth */}
                      <div className="flex items-start justify-between gap-4 rounded-xl border border-border/60 bg-muted/20 p-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Smartphone className="h-4 w-4 text-muted-foreground" />
                            <p className="text-sm font-medium text-foreground">
                              Double authentification (2FA)
                            </p>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Ajoutez une couche de sécurité supplémentaire avec une application d{"'"}authentification.
                          </p>
                        </div>
                        <Switch
                          checked={twoFactorEnabled}
                          onCheckedChange={setTwoFactorEnabled}
                        />
                      </div>

                      {/* Last Login */}
                      <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <p className="text-sm font-medium text-foreground">
                              Dernière connexion
                            </p>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            11 mars 2024 à 14h32 — Paris, France
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Active Sessions */}
                  <Card className="border-border/60 shadow-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="flex items-center gap-2 text-base">
                            <Monitor className="h-5 w-5 text-muted-foreground" />
                            Sessions actives
                          </CardTitle>
                          <CardDescription>
                            Gérez les appareils connectés à votre compte.
                          </CardDescription>
                        </div>
                        <Button variant="outline" size="sm" className="gap-2 text-red-600 hover:text-red-600 hover:bg-red-500/10">
                          Déconnecter tout
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {activeSessions.map((session) => (
                          <div
                            key={session.id}
                            className={`flex items-center justify-between rounded-lg border p-3 ${
                              session.current
                                ? "border-emerald-500/30 bg-emerald-500/5"
                                : "border-border/60 bg-muted/20"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                                session.current ? "bg-emerald-500/10" : "bg-muted"
                              }`}>
                                {session.device.includes("iPhone") ? (
                                  <Smartphone className={`h-4 w-4 ${session.current ? "text-emerald-600" : "text-muted-foreground"}`} />
                                ) : (
                                  <Monitor className={`h-4 w-4 ${session.current ? "text-emerald-600" : "text-muted-foreground"}`} />
                                )}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <p className="text-sm font-medium text-foreground">{session.device}</p>
                                  {session.current && (
                                    <Badge variant="outline" className="text-xs bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                                      Session actuelle
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  {session.location} · {session.lastActive}
                                </p>
                              </div>
                            </div>
                            {!session.current && (
                              <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-red-600">
                                Déconnecter
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Integrations Settings */}
              {activeTab === "integrations" && (
                <Card className="border-border/60 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plug className="h-5 w-5 text-muted-foreground" />
                      Intégrations
                    </CardTitle>
                    <CardDescription>
                      Connectez RenewFlow à vos outils préférés.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {integrations.map((integration) => (
                        <div
                          key={integration.id}
                          className="rounded-xl border border-border/60 bg-muted/20 p-4 space-y-3"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background border border-border/60 text-lg">
                                {integration.icon}
                              </div>
                              <div>
                                <p className="text-sm font-medium text-foreground">
                                  {integration.name}
                                </p>
                                {integration.connected && (
                                  <Badge variant="outline" className="mt-1 text-xs bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                                    <CheckCircle2 className="h-3 w-3 mr-1" />
                                    Connecté
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {integration.description}
                          </p>
                          <Button
                            variant={integration.connected ? "outline" : "default"}
                            size="sm"
                            className="w-full gap-2"
                          >
                            {integration.connected ? (
                              <>
                                <RefreshCw className="h-3 w-3" />
                                Gérer
                              </>
                            ) : (
                              <>
                                <Plug className="h-3 w-3" />
                                Connecter
                              </>
                            )}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
