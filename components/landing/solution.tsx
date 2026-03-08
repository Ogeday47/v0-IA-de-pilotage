import { CalendarCheck, Users, Bell, FileSpreadsheet } from "lucide-react"

const features = [
  {
    icon: CalendarCheck,
    title: "Calendrier intelligent des échéances",
    description: "Visualisez toutes vos dates clés sur un tableau de bord unifié. Ne manquez plus jamais une date de renouvellement."
  },
  {
    icon: Users,
    title: "Fiches clients centralisées",
    description: "Regroupez toutes les informations de vos clients en un seul endroit : contrats, historique, paiements."
  },
  {
    icon: Bell,
    title: "Alertes sur les retards et renouvellements",
    description: "Recevez des notifications automatiques avant chaque échéance et dès qu'un paiement est en retard."
  },
  {
    icon: FileSpreadsheet,
    title: "Import/Export CSV",
    description: "Importez facilement vos données existantes et exportez vos rapports pour vos analyses."
  }
]

export function Solution() {
  return (
    <section id="solution" className="py-20 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            La solution
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Un outil pensé pour votre business
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            RenewFlow centralise la gestion de vos abonnements et automatise vos processus de relance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex gap-5 p-6 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-accent/20 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
