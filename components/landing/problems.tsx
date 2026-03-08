import { Calendar, Clock, Eye, FolderOpen } from "lucide-react"

const problems = [
  {
    icon: Calendar,
    title: "Échéances oubliées",
    description: "Des renouvellements passent entre les mailles du filet, entraînant des pertes de revenus évitables."
  },
  {
    icon: Clock,
    title: "Retards de paiement",
    description: "Les factures impayées s'accumulent sans système de suivi automatique pour relancer vos clients."
  },
  {
    icon: Eye,
    title: "Manque de visibilité",
    description: "Impossible de savoir quels contrats arrivent à échéance et quels revenus sont à risque."
  },
  {
    icon: FolderOpen,
    title: "Informations dispersées",
    description: "Les données clients sont éparpillées entre tableurs, emails et différents outils."
  }
]

export function Problems() {
  return (
    <section id="problemes" className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Le problème
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Des revenus qui vous échappent chaque mois
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Les entreprises à abonnement perdent en moyenne 15% de leurs revenus récurrents à cause de ces problèmes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-accent/20 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive mb-4">
                <problem.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
