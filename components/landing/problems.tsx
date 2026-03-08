import { Calendar, Clock, Eye, FolderOpen, TrendingDown } from "lucide-react"

const problems = [
  {
    icon: Calendar,
    title: "Échéances oubliées",
    description: "Des renouvellements passent entre les mailles du filet, entraînant des pertes de revenus évitables.",
    stat: "12%",
    statLabel: "de revenus perdus en moyenne"
  },
  {
    icon: Clock,
    title: "Retards de paiement",
    description: "Les factures impayées s'accumulent sans système de suivi automatique pour relancer vos clients.",
    stat: "45j",
    statLabel: "délai moyen de recouvrement"
  },
  {
    icon: Eye,
    title: "Manque de visibilité",
    description: "Impossible de savoir quels contrats arrivent à échéance et quels revenus sont à risque.",
    stat: "0",
    statLabel: "vue consolidée de vos échéances"
  },
  {
    icon: FolderOpen,
    title: "Données dispersées",
    description: "Les données clients sont éparpillées entre tableurs, emails et différents outils.",
    stat: "5+",
    statLabel: "outils différents utilisés"
  }
]

export function Problems() {
  return (
    <section id="problemes" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-6">
            <TrendingDown className="h-4 w-4" />
            Le problème
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">
            Des revenus qui vous échappent{" "}
            <span className="text-destructive">chaque mois</span>
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Les entreprises à abonnement perdent en moyenne 15% de leurs revenus récurrents à cause de ces problèmes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 rounded-2xl border-2 border-border bg-card hover:border-destructive/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10 text-destructive mb-6">
                <problem.icon className="h-7 w-7" />
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold text-foreground">{problem.stat}</span>
                <p className="text-sm text-muted-foreground mt-1">{problem.statLabel}</p>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
