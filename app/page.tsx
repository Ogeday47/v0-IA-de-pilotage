import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  ArrowRight,
  CalendarClock,
  Bell,
  TrendingUp,
  Shield,
  Zap,
  Users,
  CheckCircle2,
  Star,
} from "lucide-react"

const features = [
  {
    icon: CalendarClock,
    title: "Suivi des échéances",
    description: "Visualisez toutes vos échéances de paiement et ne manquez plus jamais une date importante.",
  },
  {
    icon: Bell,
    title: "Relances automatiques",
    description: "Configurez des relances intelligentes par email, SMS ou téléphone selon vos préférences.",
  },
  {
    icon: TrendingUp,
    title: "Analyse des revenus",
    description: "Suivez vos revenus récurrents avec des tableaux de bord clairs et des projections fiables.",
  },
  {
    icon: Shield,
    title: "Sécurité des données",
    description: "Vos données clients sont protégées avec un chiffrement de bout en bout.",
  },
  {
    icon: Zap,
    title: "IA Assistant",
    description: "Notre assistant IA analyse vos données et vous suggère les meilleures actions à prendre.",
  },
  {
    icon: Users,
    title: "Gestion clients",
    description: "Centralisez toutes les informations de vos clients en un seul endroit accessible.",
  },
]

const testimonials = [
  {
    quote: "RenewFlow a transformé notre gestion des abonnements. Nous avons réduit nos impayés de 40% en 3 mois.",
    author: "Marie Dupont",
    role: "Directrice Financière",
    company: "TechStart SAS",
  },
  {
    quote: "L'assistant IA nous fait gagner un temps précieux en priorisant automatiquement les relances.",
    author: "Pierre Martin",
    role: "Responsable Comptabilité",
    company: "Agence Créative",
  },
  {
    quote: "Interface intuitive et support réactif. Exactement ce dont nous avions besoin pour nos 500+ clients.",
    author: "Sophie Bernard",
    role: "CEO",
    company: "CloudServices Pro",
  },
]

const stats = [
  { value: "2 500+", label: "Entreprises" },
  { value: "15M€", label: "Revenus gérés" },
  { value: "98%", label: "Satisfaction" },
  { value: "-35%", label: "Impayés" },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground">
              <Sparkles className="h-5 w-5 text-background" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              RenewFlow
            </span>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#fonctionnalites" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Fonctionnalités
            </a>
            <a href="#temoignages" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Témoignages
            </a>
            <a href="#tarifs" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Tarifs
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/connexion">Connexion</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/connexion">
                Essai gratuit
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,hsl(var(--muted))_0%,transparent_100%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1">
              <Sparkles className="h-3.5 w-3.5" />
              Propulsé par l{"'"}IA
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Gérez vos abonnements et revenus récurrents sans effort
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              RenewFlow centralise le suivi de vos échéances, automatise vos relances et vous aide à maximiser vos revenus récurrents grâce à l{"'"}intelligence artificielle.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/connexion">
                  Démarrer gratuitement
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#fonctionnalites">
                  Découvrir les fonctionnalités
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              14 jours d{"'"}essai gratuit • Aucune carte requise
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fonctionnalites" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Tout ce dont vous avez besoin
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Une solution complète pour optimiser la gestion de vos revenus récurrents.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-border hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-foreground">
                  <feature.icon className="h-6 w-6 text-foreground transition-colors group-hover:text-background" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="temoignages" className="border-y border-border/60 bg-muted/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ils nous font confiance
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Découvrez comment RenewFlow aide des entreprises comme la vôtre.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col rounded-2xl border border-border/60 bg-card p-6"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-foreground text-foreground" />
                  ))}
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section id="tarifs" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Des tarifs simples et transparents
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Commencez gratuitement et évoluez selon vos besoins.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
            {/* Starter Plan */}
            <div className="rounded-2xl border border-border/60 bg-card p-8">
              <h3 className="text-lg font-semibold text-foreground">Starter</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Pour les indépendants et petites équipes
              </p>
              <div className="mt-6">
                <span className="text-4xl font-bold tracking-tight text-foreground">29€</span>
                <span className="text-muted-foreground">/mois</span>
              </div>
              <ul className="mt-8 space-y-3">
                {["Jusqu'à 100 clients", "Relances par email", "Tableau de bord basique", "Support par email"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="mt-8 w-full" asChild>
                <Link href="/connexion">Commencer</Link>
              </Button>
            </div>
            {/* Pro Plan */}
            <div className="relative rounded-2xl border-2 border-foreground bg-card p-8">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                Populaire
              </Badge>
              <h3 className="text-lg font-semibold text-foreground">Pro</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Pour les entreprises en croissance
              </p>
              <div className="mt-6">
                <span className="text-4xl font-bold tracking-tight text-foreground">79€</span>
                <span className="text-muted-foreground">/mois</span>
              </div>
              <ul className="mt-8 space-y-3">
                {["Clients illimités", "Relances multi-canaux", "Assistant IA avancé", "Analyses et rapports", "Support prioritaire"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full" asChild>
                <Link href="/connexion">Essayer gratuitement</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/60 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Prêt à optimiser vos revenus récurrents ?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Rejoignez plus de 2 500 entreprises qui font confiance à RenewFlow.
            </p>
            <div className="mt-10">
              <Button size="lg" asChild>
                <Link href="/connexion">
                  Commencer maintenant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
                <Sparkles className="h-4 w-4 text-background" />
              </div>
              <span className="text-sm font-semibold text-foreground">RenewFlow</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 RenewFlow. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
