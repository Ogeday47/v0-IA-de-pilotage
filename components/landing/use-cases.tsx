import { Cloud, Megaphone, Wrench } from "lucide-react"

const useCases = [
  {
    icon: Cloud,
    title: "SaaS",
    description: "Gérez des centaines d'abonnements mensuels ou annuels. Anticipez les churns et maximisez votre MRR.",
    features: ["Suivi du MRR/ARR", "Alertes de churn", "Relances automatiques"]
  },
  {
    icon: Megaphone,
    title: "Agences Marketing",
    description: "Suivez les contrats de vos clients, leurs budgets mensuels et les renouvellements de services.",
    features: ["Contrats récurrents", "Facturation multi-clients", "Rapports personnalisés"]
  },
  {
    icon: Wrench,
    title: "Services par abonnement",
    description: "Sociétés de maintenance, infogérance, services B2B : ne laissez plus aucun contrat sans suivi.",
    features: ["Échéancier de contrats", "Relances automatisées", "Historique client"]
  }
]

export function UseCases() {
  return (
    <section id="cas-usage" className="py-20 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Cas d'usage
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Conçu pour votre secteur
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Que vous soyez une startup SaaS, une agence ou une entreprise de services, RenewFlow s'adapte à vos besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:shadow-xl hover:border-accent/20 transition-all duration-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-6">
                <useCase.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {useCase.description}
              </p>
              <ul className="space-y-2">
                {useCase.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {feature}
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
