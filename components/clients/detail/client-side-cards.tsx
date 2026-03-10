import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Download,
  CreditCard,
  Building2,
  MapPin,
  Package,
  Calendar,
  Euro,
  Eye,
} from "lucide-react"

const documents = [
  {
    name: "Contrat_2024.pdf",
    date: "15 janvier 2024",
    size: "245 Ko",
  },
  {
    name: "Facture_2026_001.pdf",
    date: "15 janvier 2026",
    size: "128 Ko",
  },
  {
    name: "Facture_2025_001.pdf",
    date: "15 janvier 2025",
    size: "124 Ko",
  },
  {
    name: "Conditions_generales.pdf",
    date: "15 janvier 2024",
    size: "89 Ko",
  },
]

export function ClientSideCards() {
  return (
    <div className="space-y-6">
      {/* Documents associés */}
      <Card className="border-border/60 shadow-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-semibold">Documents associés</CardTitle>
            <Badge variant="outline">{documents.length}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="group flex items-center justify-between rounded-lg border border-border/60 p-3 transition-colors hover:bg-muted/50"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-100">
                  <FileText className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{doc.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {doc.date} - {doc.size}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Eye className="h-4 w-4" />
                  <span className="sr-only">Voir</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Télécharger</span>
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Coordonnées de facturation */}
      <Card className="border-border/60 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">Coordonnées de facturation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted">
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Raison sociale
              </p>
              <p className="mt-0.5 text-sm font-medium text-foreground">
                Atelier Dubois & Fils SARL
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted">
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Adresse de facturation
              </p>
              <p className="mt-0.5 text-sm font-medium text-foreground">
                45 Rue de l{"'"}Industrie
                <br />
                75011 Paris, France
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted">
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                SIRET
              </p>
              <p className="mt-0.5 text-sm font-medium tabular-nums text-foreground">
                123 456 789 00012
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted">
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                N° TVA
              </p>
              <p className="mt-0.5 text-sm font-medium tabular-nums text-foreground">
                FR12345678901
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Abonnement actuel */}
      <Card className="border-border/60 shadow-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-semibold">Abonnement actuel</CardTitle>
            <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
              Actif
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-foreground">
              <Package className="h-4 w-4 text-background" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Offre
              </p>
              <p className="mt-0.5 text-sm font-semibold text-foreground">Suite Enterprise</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted">
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Période
              </p>
              <p className="mt-0.5 text-sm font-medium text-foreground">
                15 janv. 2026 - 15 janv. 2027
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted">
              <Euro className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Montant annuel
              </p>
              <p className="mt-0.5 text-lg font-bold text-foreground">5 400 EUR</p>
            </div>
          </div>

          <div className="rounded-lg border border-amber-200/60 bg-amber-50/50 p-3">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-amber-600" />
              <p className="text-sm font-medium text-amber-700">
                Renouvellement dans 304 jours
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
