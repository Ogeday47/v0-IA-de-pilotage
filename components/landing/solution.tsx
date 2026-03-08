import { CalendarCheck, Users, Bell, FileSpreadsheet, CheckCircle } from "lucide-react"

const features = [
  {
    icon: CalendarCheck,
    title: "Calendrier intelligent des échéances",
    description: "Visualisez toutes vos dates clés sur un tableau de bord unifié. Ne manquez plus jamais une date de renouvellement.",
    benefits: ["Vue mensuelle et hebdomadaire", "Filtres par client/contrat", "Synchronisation agenda"]
  },
  {
    icon: Users,
    title: "Fiches clients centralisées",
    description: "Regroupez toutes les informations de vos clients en un seul endroit : contrats, historique, paiements.",
    benefits: ["Historique complet", "Documents attachés", "Notes et commentaires"]
  },
  {
    icon: Bell,
    title: "Alertes automatiques intelligentes",
    description: "Recevez des notifications automatiques avant chaque échéance et dès qu'un paiement est en retard.",
    benefits: ["Email et notifications push", "Seuils personnalisables", "Escalade automatique"]
  },
  {
    icon: FileSpreadsheet,
    title: "Import/Export et intégrations",
    description: "Importez facilement vos données existantes et connectez vos outils favoris.",
    benefits: ["Import CSV/Excel", "API REST complète", "Webhooks temps réel"]
  }
]

export function Solution() {
  return (
    <section id="solution" className="py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            La solution
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">
            Un outil pensé pour{" "}
            <span className="text-accent">votre business</span>
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            RenewFlow centralise la gestion de vos abonnements et automatise vos processus de relance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 lg:p-10 rounded-2xl bg-card border-2 border-border hover:border-accent/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-6">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
