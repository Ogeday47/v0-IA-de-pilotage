import { Sparkles, ListChecks, TrendingDown, Target } from "lucide-react"

const aiFeatures = [
  {
    icon: Sparkles,
    title: "Génération automatique de relances",
    description: "L'IA rédige des emails de relance personnalisés pour chaque client, en tenant compte de l'historique."
  },
  {
    icon: ListChecks,
    title: "Résumé des clients à relancer",
    description: "Obtenez chaque matin une liste priorisée des clients nécessitant votre attention."
  },
  {
    icon: TrendingDown,
    title: "Détection des revenus à risque",
    description: "L'IA analyse les comportements et identifie les clients susceptibles de ne pas renouveler."
  },
  {
    icon: Target,
    title: "Priorisation des actions à faire",
    description: "Concentrez-vous sur les actions les plus impactantes grâce aux recommandations intelligentes."
  }
]

export function AIFeatures() {
  return (
    <section id="ia" className="py-20 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDJ2LTJoMzR6bTAtNFYySDJ2MmgzNHptMC02VjIwSDJ2NGgzNHptMC04VjEySDJ2NGgzNHptMC04VjRIMnY0aDM0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Propulsé par l'Intelligence Artificielle
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">
            L'IA qui travaille pour vous
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Automatisez les tâches répétitives et prenez des décisions éclairées grâce à notre moteur d'IA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {aiFeatures.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10 mb-4">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
