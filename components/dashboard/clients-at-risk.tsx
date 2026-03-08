import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, ArrowRight } from "lucide-react"

const clientsAtRisk = [
  {
    client: "Agence Digitale Nord",
    reason: "2 retards de paiement consécutifs",
    subscription: "Suite Entreprise",
    amountAtRisk: "26 400 €/an",
    action: "Appeler le client",
  },
  {
    client: "Clinique Vétérinaire Pasteur",
    reason: "Demande de résiliation en cours",
    subscription: "Pack Pro Mensuel",
    amountAtRisk: "10 680 €/an",
    action: "Proposer une offre",
  },
  {
    client: "Coiffure & Spa Élégance",
    reason: "Aucune connexion depuis 60 jours",
    subscription: "Pack Starter",
    amountAtRisk: "3 480 €/an",
    action: "Envoyer un email",
  },
]

export function ClientsAtRisk() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-amber-500" />
          <CardTitle className="text-lg font-semibold">Clients à risque</CardTitle>
        </div>
        <Button variant="outline" size="sm">
          Voir tout
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {clientsAtRisk.map((client, index) => (
          <div
            key={index}
            className="rounded-lg border border-amber-200 bg-amber-50/50 p-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <p className="font-semibold">{client.client}</p>
                  <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-200">
                    À risque
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{client.reason}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-muted-foreground">
                    {client.subscription}
                  </span>
                  <span className="font-medium text-amber-700">
                    {client.amountAtRisk}
                  </span>
                </div>
              </div>
              <Button size="sm" className="shrink-0 gap-1.5">
                {client.action}
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
