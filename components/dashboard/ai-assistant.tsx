import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight, Bell, RefreshCw } from "lucide-react"

const suggestions = [
  {
    icon: Bell,
    text: "3 clients sont à relancer cette semaine",
  },
  {
    icon: RefreshCw,
    text: "2 renouvellements importants arrivent dans 5 jours",
  },
]

export function AiAssistant() {
  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <CardTitle className="text-lg font-semibold">Assistant IA</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg bg-card p-3 shadow-sm"
            >
              <suggestion.icon className="h-4 w-4 text-primary" />
              <p className="text-sm">{suggestion.text}</p>
            </div>
          ))}
        </div>
        <Button className="w-full gap-2">
          Générer les relances
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
