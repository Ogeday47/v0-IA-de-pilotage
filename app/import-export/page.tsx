"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { TopNavbar } from "@/components/dashboard/top-navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
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
  FileUp,
  Upload,
  Download,
  FileSpreadsheet,
  Users,
  CalendarClock,
  Bell,
  TrendingUp,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Clock,
  RefreshCw,
  Eye,
  Calendar,
  Mail,
  ArrowRight,
} from "lucide-react"

const recentImports = [
  {
    id: 1,
    filename: "clients_mars_2024.csv",
    date: "12 mars 2024",
    type: "Clients",
    rows: 156,
    status: "Terminé",
  },
  {
    id: 2,
    filename: "echeances_q1.xlsx",
    date: "10 mars 2024",
    type: "Échéances",
    rows: 423,
    status: "Terminé",
  },
  {
    id: 3,
    filename: "abonnements_fevrier.csv",
    date: "8 mars 2024",
    type: "Abonnements",
    rows: 89,
    status: "En cours",
  },
  {
    id: 4,
    filename: "clients_export_crm.xlsx",
    date: "5 mars 2024",
    type: "Clients",
    rows: 0,
    status: "Erreur",
  },
]

const mappingFields = [
  { field: "Nom du client", mapped: "nom_client", status: "ok" },
  { field: "Entreprise", mapped: "entreprise", status: "ok" },
  { field: "Email", mapped: "email", status: "ok" },
  { field: "Produit", mapped: "produit_id", status: "ok" },
  { field: "Montant", mapped: "montant_mensuel", status: "ok" },
  { field: "Date de début", mapped: "date_debut", status: "warning" },
  { field: "Fréquence", mapped: "frequence", status: "ok" },
  { field: "Statut", mapped: "statut", status: "ok" },
]

const scheduledExports = [
  {
    id: 1,
    title: "Rapport hebdomadaire des échéances",
    frequency: "Chaque lundi à 8h",
    destination: "marie.dupont@entreprise.fr",
    lastExport: "11 mars 2024",
    active: true,
  },
  {
    id: 2,
    title: "Export mensuel des revenus",
    frequency: "Le 1er de chaque mois",
    destination: "compta@entreprise.fr",
    lastExport: "1 mars 2024",
    active: true,
  },
  {
    id: 3,
    title: "Export CRM des clients actifs",
    frequency: "Tous les 15 jours",
    destination: "Intégration Salesforce",
    lastExport: "28 février 2024",
    active: false,
  },
]

export default function ImportExportPage() {
  const [isDragging, setIsDragging] = useState(false)
  const [createMissing, setCreateMissing] = useState(true)
  const [updateExisting, setUpdateExisting] = useState(true)
  const [generateDeadlines, setGenerateDeadlines] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

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
                  <FileUp className="h-5 w-5 text-background" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                    Import / Export
                  </h1>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Importez vos données clients et exportez vos échéances en quelques clics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main 2-Column Layout */}
          <div className="grid gap-6 xl:grid-cols-2">
            {/* Left Column - Import */}
            <div className="space-y-6">
              {/* Import Section */}
              <Card className="border-border/60 shadow-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2">
                    <Upload className="h-5 w-5 text-muted-foreground" />
                    <CardTitle className="text-lg">Importer des données</CardTitle>
                  </div>
                  <CardDescription>
                    Importez vos clients, abonnements et échéances depuis un fichier CSV ou Excel.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Upload Area */}
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 transition-all ${
                      isDragging
                        ? "border-foreground bg-foreground/5"
                        : "border-border/60 bg-muted/30 hover:border-muted-foreground/50 hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                      <FileSpreadsheet className="h-7 w-7 text-muted-foreground" />
                    </div>
                    <p className="mt-4 text-sm font-medium text-foreground">
                      Glissez-déposez votre fichier ici
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      ou cliquez pour parcourir
                    </p>
                    <Button variant="outline" size="sm" className="mt-4 gap-2">
                      <Upload className="h-4 w-4" />
                      Choisir un fichier
                    </Button>
                    <p className="mt-3 text-xs text-muted-foreground">
                      Formats acceptés : CSV, XLSX (max. 10 Mo)
                    </p>
                  </div>

                  {/* Import Options */}
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-foreground">Options d{"'"}import</p>
                    <div className="space-y-3 rounded-lg border border-border/60 bg-muted/20 p-4">
                      <div className="flex items-center space-x-3">
                        <Checkbox 
                          id="create-missing" 
                          checked={createMissing}
                          onCheckedChange={(checked) => setCreateMissing(checked as boolean)}
                        />
                        <Label htmlFor="create-missing" className="text-sm text-muted-foreground cursor-pointer">
                          Créer les clients manquants
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox 
                          id="update-existing" 
                          checked={updateExisting}
                          onCheckedChange={(checked) => setUpdateExisting(checked as boolean)}
                        />
                        <Label htmlFor="update-existing" className="text-sm text-muted-foreground cursor-pointer">
                          Mettre à jour les clients existants
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox 
                          id="generate-deadlines" 
                          checked={generateDeadlines}
                          onCheckedChange={(checked) => setGenerateDeadlines(checked as boolean)}
                        />
                        <Label htmlFor="generate-deadlines" className="text-sm text-muted-foreground cursor-pointer">
                          Générer automatiquement les échéances
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Mapping Preview */}
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-foreground">Aperçu du mapping</p>
                    <div className="rounded-lg border border-border/60 overflow-hidden">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-muted/50 hover:bg-muted/50">
                            <TableHead className="text-xs font-semibold">Colonne fichier</TableHead>
                            <TableHead className="text-xs font-semibold">Champ RenewFlow</TableHead>
                            <TableHead className="text-xs font-semibold w-16">État</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {mappingFields.map((field) => (
                            <TableRow key={field.field} className="text-sm">
                              <TableCell className="font-medium">{field.field}</TableCell>
                              <TableCell className="text-muted-foreground font-mono text-xs">
                                {field.mapped}
                              </TableCell>
                              <TableCell>
                                {field.status === "ok" ? (
                                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                                ) : (
                                  <AlertCircle className="h-4 w-4 text-amber-500" />
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  <Button className="w-full gap-2">
                    <Upload className="h-4 w-4" />
                    Lancer l{"'"}import
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Imports */}
              <Card className="border-border/60 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Imports récents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg border border-border/60 overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50 hover:bg-muted/50">
                          <TableHead className="text-xs font-semibold">Fichier</TableHead>
                          <TableHead className="text-xs font-semibold">Date</TableHead>
                          <TableHead className="text-xs font-semibold">Type</TableHead>
                          <TableHead className="text-xs font-semibold text-right">Lignes</TableHead>
                          <TableHead className="text-xs font-semibold">Statut</TableHead>
                          <TableHead className="text-xs font-semibold text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentImports.map((item) => (
                          <TableRow key={item.id} className="text-sm">
                            <TableCell className="font-medium">
                              <div className="flex items-center gap-2">
                                <FileSpreadsheet className="h-4 w-4 text-muted-foreground" />
                                <span className="truncate max-w-[140px]">{item.filename}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-muted-foreground text-xs">
                              {item.date}
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="text-xs">
                                {item.type}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right tabular-nums">
                              {item.rows > 0 ? item.rows : "—"}
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={`text-xs ${
                                  item.status === "Terminé"
                                    ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                                    : item.status === "En cours"
                                    ? "bg-blue-500/10 text-blue-600 border-blue-500/20"
                                    : "bg-red-500/10 text-red-600 border-red-500/20"
                                }`}
                              >
                                {item.status === "Terminé" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                                {item.status === "En cours" && <Clock className="h-3 w-3 mr-1" />}
                                {item.status === "Erreur" && <AlertCircle className="h-3 w-3 mr-1" />}
                                {item.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex items-center justify-end gap-1">
                                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                                  <Eye className="h-3 w-3 mr-1" />
                                  Rapport
                                </Button>
                                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                                  <RefreshCw className="h-3 w-3" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Export */}
            <div className="space-y-6">
              {/* Export Section */}
              <Card className="border-border/60 shadow-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2">
                    <Download className="h-5 w-5 text-muted-foreground" />
                    <CardTitle className="text-lg">Exporter les données</CardTitle>
                  </div>
                  <CardDescription>
                    Téléchargez vos données pour vos rapports ou migrations CRM.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Export Cards */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Clients Export */}
                    <div className="rounded-xl border border-border/60 bg-muted/20 p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10">
                          <Users className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Clients</p>
                          <p className="text-xs text-muted-foreground">247 entrées</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Export complet de votre base clients avec coordonnées et abonnements.
                      </p>
                      <div className="flex items-center gap-2">
                        <Select defaultValue="csv">
                          <SelectTrigger className="h-8 text-xs flex-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="csv">CSV</SelectItem>
                            <SelectItem value="xlsx">XLSX</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button size="sm" className="h-8 gap-1 text-xs">
                          <Download className="h-3 w-3" />
                          Exporter
                        </Button>
                      </div>
                    </div>

                    {/* Échéances Export */}
                    <div className="rounded-xl border border-border/60 bg-muted/20 p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10">
                          <CalendarClock className="h-4 w-4 text-amber-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Échéances</p>
                          <p className="text-xs text-muted-foreground">156 à venir</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Liste des échéances avec dates, montants et statuts de paiement.
                      </p>
                      <div className="flex items-center gap-2">
                        <Select defaultValue="csv">
                          <SelectTrigger className="h-8 text-xs flex-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="csv">CSV</SelectItem>
                            <SelectItem value="xlsx">XLSX</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button size="sm" className="h-8 gap-1 text-xs">
                          <Download className="h-3 w-3" />
                          Exporter
                        </Button>
                      </div>
                    </div>

                    {/* Relances Export */}
                    <div className="rounded-xl border border-border/60 bg-muted/20 p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/10">
                          <Bell className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Relances</p>
                          <p className="text-xs text-muted-foreground">34 envoyées</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Historique des relances envoyées avec dates et résultats.
                      </p>
                      <div className="flex items-center gap-2">
                        <Select defaultValue="csv">
                          <SelectTrigger className="h-8 text-xs flex-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="csv">CSV</SelectItem>
                            <SelectItem value="xlsx">XLSX</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button size="sm" className="h-8 gap-1 text-xs">
                          <Download className="h-3 w-3" />
                          Exporter
                        </Button>
                      </div>
                    </div>

                    {/* Revenus Export */}
                    <div className="rounded-xl border border-border/60 bg-muted/20 p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10">
                          <TrendingUp className="h-4 w-4 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Revenus</p>
                          <p className="text-xs text-muted-foreground">12 derniers mois</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Rapport financier avec MRR, ARR et évolution des revenus.
                      </p>
                      <div className="flex items-center gap-2">
                        <Select defaultValue="xlsx">
                          <SelectTrigger className="h-8 text-xs flex-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="csv">CSV</SelectItem>
                            <SelectItem value="xlsx">XLSX</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button size="sm" className="h-8 gap-1 text-xs">
                          <Download className="h-3 w-3" />
                          Exporter
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Date Range Selector */}
                  <div className="rounded-lg border border-border/60 bg-muted/20 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-foreground font-medium">Période d{"'"}export</span>
                      </div>
                      <Select defaultValue="30">
                        <SelectTrigger className="h-8 w-[180px] text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="7">7 derniers jours</SelectItem>
                          <SelectItem value="30">30 derniers jours</SelectItem>
                          <SelectItem value="90">90 derniers jours</SelectItem>
                          <SelectItem value="365">12 derniers mois</SelectItem>
                          <SelectItem value="all">Toutes les données</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Scheduled Exports */}
              <Card className="border-border/60 shadow-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Exports planifiés</CardTitle>
                    <Button variant="outline" size="sm" className="h-8 gap-1 text-xs">
                      <Calendar className="h-3 w-3" />
                      Planifier
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {scheduledExports.map((export_) => (
                    <div
                      key={export_.id}
                      className={`rounded-xl border p-4 transition-all ${
                        export_.active
                          ? "border-border/60 bg-card"
                          : "border-border/40 bg-muted/30 opacity-60"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium text-foreground">{export_.title}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {export_.frequency}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Mail className="h-3 w-3" />
                            {export_.destination}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Dernier export : {export_.lastExport}
                          </p>
                        </div>
                        <Switch checked={export_.active} />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* AI Helper Panel */}
              <Card className="border-border/60 shadow-sm bg-gradient-to-br from-card to-muted/30">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
                      <Sparkles className="h-4 w-4 text-background" />
                    </div>
                    <CardTitle className="text-base">Assistant IA</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3">
                      <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                      <p className="text-xs text-muted-foreground">
                        Le dernier import contient <span className="font-medium text-foreground">12 doublons potentiels</span> à vérifier.
                      </p>
                    </div>
                    <div className="flex items-start gap-2 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3">
                      <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                      <p className="text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">3 colonnes</span> semblent mal associées dans le mapping.
                      </p>
                    </div>
                    <div className="flex items-start gap-2 rounded-lg border border-blue-500/20 bg-blue-500/5 p-3">
                      <Sparkles className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                      <p className="text-xs text-muted-foreground">
                        Vous pouvez <span className="font-medium text-foreground">générer automatiquement les échéances</span> après import.
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full gap-2 text-sm">
                    <Sparkles className="h-4 w-4" />
                    Analyser le fichier
                    <ArrowRight className="h-3 w-3 ml-auto" />
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
