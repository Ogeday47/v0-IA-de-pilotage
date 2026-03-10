import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Package,
  Euro,
  Calendar,
  CalendarClock,
  CheckCircle2,
} from "lucide-react"

const clientData = {
  company: "Atelier Dubois & Fils",
  contact: "Jean-Pierre Dubois",
  email: "jp.dubois@atelierdubois.fr",
  phone: "+33 1 42 56 78 90",
  address: "45 Rue de l'Industrie, 75011 Paris",
  subscriptionType: "Annuel",
  product: "Suite Enterprise",
  amount: "5 400 EUR",
  startDate: "15 janvier 2024",
  nextDeadline: "15 janvier 2027",
  status: "Actif" as const,
}

const statusConfig = {
  Actif: { className: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" },
  "À risque": { className: "bg-amber-500/10 text-amber-600 border-amber-500/20" },
  "En retard": { className: "bg-red-500/10 text-red-600 border-red-500/20" },
  Résilié: { className: "bg-muted text-muted-foreground border-border" },
}

export function ClientSummaryCard() {
  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Informations client</CardTitle>
          <Badge className={statusConfig[clientData.status].className}>
            {clientData.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                <User className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Contact principal
                </p>
                <p className="mt-0.5 font-medium text-foreground">{clientData.contact}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                <Mail className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Email
                </p>
                <p className="mt-0.5 font-medium text-foreground">{clientData.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                <Phone className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Téléphone
                </p>
                <p className="mt-0.5 font-medium text-foreground">{clientData.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                <MapPin className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Adresse
                </p>
                <p className="mt-0.5 font-medium text-foreground">{clientData.address}</p>
              </div>
            </div>
          </div>

          {/* Subscription Info */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Type d{"'"}abonnement
                </p>
                <p className="mt-0.5 font-medium text-foreground">{clientData.subscriptionType}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                <Package className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Produit / Offre souscrite
                </p>
                <p className="mt-0.5 font-medium text-foreground">{clientData.product}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                <Euro className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Montant
                </p>
                <p className="mt-0.5 text-lg font-bold text-foreground">{clientData.amount}</p>
              </div>
            </div>
          </div>

          {/* Dates Info */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                <Calendar className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Date de début
                </p>
                <p className="mt-0.5 font-medium text-foreground">{clientData.startDate}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                <CalendarClock className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Prochaine échéance
                </p>
                <p className="mt-0.5 font-medium text-foreground">{clientData.nextDeadline}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Statut client
                </p>
                <Badge className={statusConfig[clientData.status].className}>
                  {clientData.status}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
