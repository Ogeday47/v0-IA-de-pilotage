import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Sparkles } from "lucide-react"

const plans = [
  {
    name: "Starter",
    description: "Pour les indépendants et petites équipes qui débutent",
    price: "29",
    period: "/mois",
    billing: "Facturé annuellement",
    features: [
      "Jusqu'à 100 clients",
      "Calendrier des échéances",
      "Alertes par email",
      "Import CSV",
      "Support par email",
      "Tableaux de bord basiques"
    ],
    cta: "Commencer gratuitement",
    popular: false,
    highlight: false
  },
  {
    name: "Pro",
    description: "Pour les entreprises en croissance qui veulent automatiser",
    price: "79",
    period: "/mois",
    billing: "Facturé annuellement",
    features: [
      "Clients illimités",
      "Toutes les fonctionnalités Starter",
      "Relances IA automatiques",
      "Détection prédictive des risques",
      "Intégrations CRM (HubSpot, Salesforce)",
      "Rapports avancés et exports",
      "Support prioritaire 24h",
      "Onboarding personnalisé"
    ],
    cta: "Essayer Pro gratuitement",
    popular: true,
    highlight: true
  },
  {
    name: "Entreprise",
    description: "Pour les grandes organisations avec des besoins spécifiques",
    price: "Sur mesure",
    period: "",
    billing: "Facturation flexible",
    features: [
      "Tout dans Pro",
      "API dédiée et webhooks",
      "Single Sign-On (SSO)",
      "Gestionnaire de compte dédié",
      "Formation personnalisée",
      "SLA garanti 99.9%",
      "Environnement isolé",
      "Audit de sécurité"
    ],
    cta: "Contacter l'équipe commerciale",
    popular: false,
    highlight: false
  }
]

export function Pricing() {
  return (
    <section id="tarifs" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Tarifs transparents
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">
            Un prix adapté à votre croissance
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choisissez le plan qui correspond à vos besoins. Tous les plans incluent un essai gratuit de 14 jours sans engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 lg:p-10 rounded-2xl lg:rounded-3xl border-2 transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-foreground text-background border-foreground shadow-2xl shadow-foreground/20 lg:scale-105 lg:-my-4' 
                  : 'bg-card border-border hover:border-accent/30 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold shadow-lg">
                  <Sparkles className="h-3.5 w-3.5" />
                  Le plus populaire
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? '' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-background/70' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl lg:text-6xl font-bold tracking-tight">{plan.price}</span>
                  {plan.period && (
                    <span className={`text-lg ${plan.highlight ? 'text-background/60' : 'text-muted-foreground'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-sm mt-2 ${plan.highlight ? 'text-background/60' : 'text-muted-foreground'}`}>
                  {plan.billing}
                </p>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 mt-0.5 p-0.5 rounded-full ${plan.highlight ? 'bg-accent' : 'bg-accent/10'}`}>
                      <Check className={`h-3.5 w-3.5 ${plan.highlight ? 'text-accent-foreground' : 'text-accent'}`} />
                    </div>
                    <span className={`text-sm leading-relaxed ${plan.highlight ? 'text-background/90' : 'text-foreground'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full h-12 text-base gap-2 ${
                  plan.highlight 
                    ? 'bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25' 
                    : 'bg-foreground hover:bg-foreground/90 text-background'
                }`}
                size="lg"
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Des questions ? Parlons-en.{" "}
            <a href="#contact" className="text-accent hover:underline font-medium">
              Contactez notre équipe
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
