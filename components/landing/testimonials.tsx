import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "RenewFlow a transformé notre gestion des abonnements. Nous avons réduit notre churn de 35% en 6 mois et récupéré plus de 50k€ de revenus qui nous auraient échappé.",
    author: "Marie Dupont",
    role: "Directrice Commerciale",
    company: "SaaS Solutions Pro",
    avatar: "MD",
    metric: "-35% de churn"
  },
  {
    quote: "L'IA de détection des risques est bluffante. Elle a identifié 3 clients sur le point de partir qu'on n'aurait jamais repérés. On les a retenus grâce aux alertes précoces.",
    author: "Thomas Bernard",
    role: "CEO & Fondateur",
    company: "AgenceWeb 360",
    avatar: "TB",
    metric: "3 clients sauvés"
  },
  {
    quote: "Avant RenewFlow, on passait des heures à relancer manuellement. Maintenant tout est automatisé et personnalisé. Mon équipe peut se concentrer sur la relation client.",
    author: "Sophie Martin",
    role: "Responsable Customer Success",
    company: "TechGrowth",
    avatar: "SM",
    metric: "10h/sem gagnées"
  },
  {
    quote: "Le ROI est immédiat. En 3 mois, l'outil s'est rentabilisé plusieurs fois grâce aux renouvellements sécurisés. Je recommande à toutes les entreprises à abonnement.",
    author: "Pierre Leroy",
    role: "Directeur Général",
    company: "MaintenancePlus",
    avatar: "PL",
    metric: "ROI x4 en 3 mois"
  },
  {
    quote: "L'intégration avec notre CRM HubSpot était parfaite. En 2 jours, tout était opérationnel. L'équipe support a été d'une réactivité exemplaire.",
    author: "Camille Rousseau",
    role: "Head of Operations",
    company: "Digital Agency Paris",
    avatar: "CR",
    metric: "Setup en 2 jours"
  },
  {
    quote: "Les tableaux de bord sont incroyablement clairs. Pour la première fois, j'ai une vision complète de mes échéances et de mon MRR attendu. Indispensable.",
    author: "Antoine Mercier",
    role: "CFO",
    company: "CloudServices FR",
    avatar: "AM",
    metric: "Visibilité totale"
  }
]

export function Testimonials() {
  return (
    <section id="temoignages" className="py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Témoignages clients
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">
            Ils nous font confiance
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez comment RenewFlow aide des centaines d'entreprises à sécuriser leurs revenus récurrents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-accent/20 hover:shadow-xl transition-all duration-300"
            >
              {/* Metric Badge */}
              <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                {testimonial.metric}
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-foreground flex items-center justify-center">
                  <span className="text-sm font-semibold text-background">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Bar */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Entreprises clientes</div>
            </div>
            <div className="hidden lg:block h-12 w-px bg-border" />
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-foreground">2M€</div>
              <div className="text-sm text-muted-foreground mt-1">Revenus sécurisés/mois</div>
            </div>
            <div className="hidden lg:block h-12 w-px bg-border" />
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-foreground">98%</div>
              <div className="text-sm text-muted-foreground mt-1">Satisfaction client</div>
            </div>
            <div className="hidden lg:block h-12 w-px bg-border" />
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-accent">4.9/5</div>
              <div className="text-sm text-muted-foreground mt-1">Note moyenne</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
