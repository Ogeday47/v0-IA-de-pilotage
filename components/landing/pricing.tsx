import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    description: "Pour les indépendants et petites équipes",
    price: "29",
    period: "/mois",
    features: [
      "Jusqu'à 100 clients",
      "Calendrier des échéances",
      "Alertes par email",
      "Import CSV",
      "Support par email"
    ],
    cta: "Démarrer gratuitement",
    popular: false
  },
  {
    name: "Pro",
    description: "Pour les entreprises en croissance",
    price: "79",
    period: "/mois",
    features: [
      "Clients illimités",
      "Toutes les fonctionnalités Starter",
      "Relances IA automatiques",
      "Détection des risques",
      "Intégrations CRM",
      "Support prioritaire"
    ],
    cta: "Essayer Pro",
    popular: true
  },
  {
    name: "Entreprise",
    description: "Pour les grandes organisations",
    price: "Sur mesure",
    period: "",
    features: [
      "Tout dans Pro",
      "API dédiée",
      "Single Sign-On (SSO)",
      "Gestionnaire de compte dédié",
      "Formation personnalisée",
      "SLA garanti"
    ],
    cta: "Contacter les ventes",
    popular: false
  }
]

export function Pricing() {
  return (
    <section id="tarifs" className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Tarifs
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Un prix adapté à votre taille
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez le plan qui correspond à vos besoins. Tous les plans incluent un essai gratuit de 14 jours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.popular 
                  ? 'bg-primary text-primary-foreground border-primary shadow-2xl scale-105' 
                  : 'bg-card border-border hover:shadow-lg hover:border-accent/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                  Le plus populaire
                </div>
              )}
              
              <h3 className={`text-xl font-semibold mb-2 ${plan.popular ? '' : 'text-foreground'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                {plan.description}
              </p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm">
                    <Check className={`h-4 w-4 flex-shrink-0 ${plan.popular ? 'text-accent' : 'text-accent'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full" 
                variant={plan.popular ? "secondary" : "default"}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
