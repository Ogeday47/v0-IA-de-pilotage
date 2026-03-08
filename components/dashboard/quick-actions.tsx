import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  UserPlus,
  FileUp,
  Download,
  Send,
  RefreshCw,
  FileText,
} from "lucide-react"

const actions = [
  {
    label: "Nouveau client",
    icon: UserPlus,
    variant: "default" as const,
    description: "Ajouter une fiche client",
  },
  {
    label: "Importer CSV",
    icon: FileUp,
    variant: "outline" as const,
    description: "Importer des données",
  },
  {
    label: "Exporter",
    icon: Download,
    variant: "outline" as const,
    description: "Télécharger un rapport",
  },
  {
    label: "Relances auto",
    icon: Send,
    variant: "outline" as const,
    description: "Générer des relances",
  },
  {
    label: "Renouvellements",
    icon: RefreshCw,
    variant: "outline" as const,
    description: "Voir les renouvellements",
  },
  {
    label: "Rapports",
    icon: FileText,
    variant: "outline" as const,
    description: "Analyses et statistiques",
  },
]

export function QuickActions() {
  return (
    <Card className="border-border/60 shadow-sm">
      <CardContent className="p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-2 text-sm font-medium text-muted-foreground">Actions rapides</span>
          {actions.map((action) => (
            <Button
              key={action.label}
              variant={action.variant}
              size="sm"
              className="h-9 gap-2 text-sm"
            >
              <action.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
