import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  UserPlus,
  FileUp,
  Download,
  Send,
  RefreshCw,
} from "lucide-react"

const actions = [
  {
    label: "Ajouter un client",
    icon: UserPlus,
    variant: "default" as const,
  },
  {
    label: "Importer un CSV",
    icon: FileUp,
    variant: "outline" as const,
  },
  {
    label: "Exporter les données",
    icon: Download,
    variant: "outline" as const,
  },
  {
    label: "Générer des relances",
    icon: Send,
    variant: "outline" as const,
  },
  {
    label: "Voir les renouvellements",
    icon: RefreshCw,
    variant: "outline" as const,
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">Actions rapides</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {actions.map((action) => (
          <Button
            key={action.label}
            variant={action.variant}
            className="gap-2"
          >
            <action.icon className="h-4 w-4" />
            {action.label}
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
