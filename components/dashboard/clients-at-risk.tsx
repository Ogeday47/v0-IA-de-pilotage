import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { AlertCircle, ArrowRight, Phone, Mail, Calendar } from "lucide-react"

const clientsAtRisk = [
  {
    client: "Agence Digitale Nord",
    initials: "AD",
    reason: "2 retards de paiement consécutifs",
    reasonIcon: Calendar,
    subscription: "Suite Entreprise",
    amountAtRisk: "26 400 €/an",
    riskScore: 85,
    action: "Appeler",
    actionIcon: Phone,
  },
  {
    client: "Clinique Vétérinaire Pasteur",
    initials: "CV",
    reason: "Demande de résiliation en cours",
    reasonIcon: Mail,
    subscription: "Pack Pro Mensuel",
    amountAtRisk: "10 680 €/an",
    riskScore: 72,
    action: "Proposer offre",
    actionIcon: Mail,
  },
  {
    client: "Coiffure & Spa Élégance",
    initials: "CS",
    reason: "Aucune connexion depuis 60 jours",
    reasonIcon: Calendar,
    subscription: "Pack Starter",
    amountAtRisk: "3 480 €/an",
    riskScore: 58,
    action: "Email",
    actionIcon: Mail,
  },
]

export function ClientsAtRisk() {
  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader className="flex flex-row items-start justify-between pb-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50">
            <AlertCircle className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <CardTitle className="text-base font-semibold">Clients à risque</CardTitle>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Détectés par l{"'"}IA RenewFlow
            </p>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="gap-1 text-sm text-muted-foreground">
          Voir tout
          <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {clientsAtRisk.map((client, index) => (
          <div
            key={index}
            className="group rounded-xl border border-amber-200/60 bg-amber-50/30 p-4 transition-colors hover:bg-amber-50/50"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <Avatar className="h-10 w-10 border border-amber-200/60 bg-amber-100">
                  <AvatarFallback className="bg-amber-100 text-xs font-semibold text-amber-700">
                    {client.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-foreground">{client.client}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <client.reasonIcon className="h-3 w-3" />
                    <span>{client.reason}</span>
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    <span className="text-xs text-muted-foreground">
                      {client.subscription}
                    </span>
                    <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-200/60 text-xs font-semibold">
                      {client.amountAtRisk}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                {/* Risk Score */}
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-16 overflow-hidden rounded-full bg-amber-200/60">
                    <div 
                      className="h-full rounded-full bg-amber-500 transition-all"
                      style={{ width: `${client.riskScore}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-amber-700">
                    {client.riskScore}%
                  </span>
                </div>
                <Button size="sm" className="h-8 gap-1.5 text-xs font-medium">
                  <client.actionIcon className="h-3 w-3" />
                  {client.action}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
