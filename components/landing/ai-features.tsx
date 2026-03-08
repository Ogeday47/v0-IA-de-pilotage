import { Sparkles, ListChecks, TrendingDown, Target, Zap, Brain } from "lucide-react"

const aiFeatures = [
  {
    icon: Sparkles,
    title: "Génération automatique de relances",
    description: "L'IA rédige des emails de relance personnalisés pour chaque client, en tenant compte de l'historique et du ton approprié.",
    tag: "Automatisation"
  },
  {
    icon: ListChecks,
    title: "Résumé quotidien des actions",
    description: "Obtenez chaque matin une liste priorisée des clients nécessitant votre attention, triée par importance.",
    tag: "Productivité"
  },
  {
    icon: TrendingDown,
    title: "Détection prédictive des risques",
    description: "L'IA analyse les comportements et identifie les clients susceptibles de ne pas renouveler avant qu'il ne soit trop tard.",
    tag: "Prédiction"
  },
  {
    icon: Target,
    title: "Priorisation intelligente",
    description: "Concentrez-vous sur les actions les plus impactantes grâce aux recommandations basées sur la valeur client.",
    tag: "Efficacité"
  }
]

export function AIFeatures() {
  return (
    <section id="ia" className="py-24 lg:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-8">
            <Brain className="h-4 w-4" />
            Propulsé par l'Intelligence Artificielle
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight">
            L'IA qui travaille pour vous
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-background/60 max-w-2xl mx-auto leading-relaxed">
            Automatisez les tâches répétitives et prenez des décisions éclairées grâce à notre moteur d'IA avancé.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {aiFeatures.map((feature, index) => (
            <div
              key={index}
              className="group p-8 lg:p-10 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 hover:border-background/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20">
                  <feature.icon className="h-7 w-7 text-accent" />
                </div>
                <span className="px-3 py-1 rounded-full bg-background/10 text-background/80 text-xs font-medium">
                  {feature.tag}
                </span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-background/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* AI Badge */}
        <div className="mt-16 flex flex-col items-center">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-background/20 bg-background/5">
            <Zap className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-background/80">
              Modèles entraînés sur des millions de données de renouvellement B2B
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
