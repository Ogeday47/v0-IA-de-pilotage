import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  ArrowRight,
  CalendarClock,
  Bell,
  TrendingUp,
  Users,
  CheckCircle2,
  XCircle,
  Eye,
  FileSpreadsheet,
  Brain,
  AlertTriangle,
  Target,
  ListTodo,
  Building2,
  Megaphone,
  Wrench,
  ChevronDown,
  Play,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const problems = [
  {
    icon: XCircle,
    title: "Échéances oubliées",
    description: "Des renouvellements qui passent entre les mailles du filet, entraînant des pertes de revenus.",
  },
  {
    icon: AlertTriangle,
    title: "Retards de paiement",
    description: "Des factures impayées qui s'accumulent sans système de relance efficace.",
  },
  {
    icon: Eye,
    title: "Manque de visibilité",
    description: "Impossible de savoir quels contrats arrivent à échéance dans les prochaines semaines.",
  },
  {
    icon: FileSpreadsheet,
    title: "Informations dispersées",
    description: "Les données clients éparpillées entre emails, tableurs et notes papier.",
  },
]

const solutions = [
  {
    icon: CalendarClock,
    title: "Calendrier intelligent des échéances",
    description: "Visualisez toutes vos échéances sur une timeline claire avec des rappels automatiques configurables.",
  },
  {
    icon: Users,
    title: "Fiches clients centralisées",
    description: "Toutes les informations de vos clients en un seul endroit : contrats, historique, contacts.",
  },
  {
    icon: Bell,
    title: "Alertes sur les retards et renouvellements",
    description: "Soyez notifié instantanément des paiements en retard et des contrats à renouveler.",
  },
  {
    icon: FileSpreadsheet,
    title: "Import/Export CSV",
    description: "Importez vos données existantes en quelques clics et exportez vos rapports facilement.",
  },
]

const aiFeatures = [
  {
    icon: Sparkles,
    title: "Génération automatique de relances",
    description: "L'IA rédige des messages de relance personnalisés adaptés au contexte de chaque client.",
  },
  {
    icon: ListTodo,
    title: "Résumé des clients à relancer",
    description: "Chaque matin, recevez une liste priorisée des actions à effectuer.",
  },
  {
    icon: AlertTriangle,
    title: "Détection des revenus à risque",
    description: "Identifiez automatiquement les clients susceptibles de ne pas renouveler.",
  },
  {
    icon: Target,
    title: "Priorisation des actions",
    description: "L'IA classe vos tâches par ordre d'importance pour maximiser votre efficacité.",
  },
]

const useCases = [
  {
    icon: Building2,
    title: "SaaS",
    description: "Gérez les abonnements mensuels et annuels de vos clients, suivez le MRR et réduisez le churn.",
    examples: ["Renouvellements automatiques", "Suivi du MRR/ARR", "Alertes avant expiration"],
  },
  {
    icon: Megaphone,
    title: "Agences marketing",
    description: "Suivez les contrats de vos clients, les échéances de facturation et les reconductions tacites.",
    examples: ["Contrats de prestation", "Retainers mensuels", "Projets récurrents"],
  },
  {
    icon: Wrench,
    title: "Services & Maintenance",
    description: "Planifiez les interventions récurrentes et gérez les contrats de maintenance annuels.",
    examples: ["Contrats de maintenance", "Interventions planifiées", "Garanties étendues"],
  },
]

const pricingPlans = [
  {
    name: "Starter",
    description: "Pour démarrer et tester la solution",
    price: "29",
    features: [
      "Jusqu'à 50 clients",
      "Calendrier des échéances",
      "Relances par email",
      "Import CSV",
      "Support par email",
    ],
    cta: "Commencer",
    popular: false,
  },
  {
    name: "Pro",
    description: "Pour les équipes en croissance",
    price: "79",
    features: [
      "Clients illimités",
      "Relances multi-canaux",
      "Assistant IA complet",
      "Analyses et rapports",
      "Intégrations API",
      "Support prioritaire",
    ],
    cta: "Essayer gratuitement",
    popular: true,
  },
  {
    name: "Entreprise",
    description: "Pour les grandes organisations",
    price: "Sur mesure",
    features: [
      "Tout de Pro, plus :",
      "SSO & authentification avancée",
      "SLA garanti 99.9%",
      "Account manager dédié",
      "Formation personnalisée",
      "Déploiement on-premise",
    ],
    cta: "Nous contacter",
    popular: false,
  },
]

const faqItems = [
  {
    question: "Comment fonctionne l'import CSV ?",
    answer: "Vous pouvez importer vos clients et échéances depuis n'importe quel tableur. Notre système détecte automatiquement les colonnes et vous permet de mapper les champs. L'import est instantané et vous pouvez commencer à travailler immédiatement.",
  },
  {
    question: "Quels types d'abonnements puis-je gérer ?",
    answer: "RenewFlow gère tous types d'abonnements : mensuels, trimestriels, annuels, ou personnalisés. Vous pouvez définir des cycles de facturation flexibles et gérer les reconductions tacites ou explicites.",
  },
  {
    question: "Comment mes données sont-elles sécurisées ?",
    answer: "Vos données sont chiffrées en transit (TLS 1.3) et au repos (AES-256). Nous sommes hébergés sur des serveurs européens conformes au RGPD. Des sauvegardes automatiques sont effectuées quotidiennement.",
  },
  {
    question: "RenewFlow est-il compatible avec mon CRM ?",
    answer: "Oui, nous proposons des intégrations natives avec les principaux CRM (Salesforce, HubSpot, Pipedrive) et une API REST complète pour les intégrations personnalisées.",
  },
]

const dashboardPreview = {
  clientsActifs: 247,
  echeances30j: 18,
  paiementsRetard: 5,
  revenuAttendu: "42 850 €",
  clientsRisque: 3,
}

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
            <a href="#problemes" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Problèmes
            </a>
            <a href="#solution" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Solution
            </a>
            <a href="#ia" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              IA
            </a>
            <a href="#tarifs" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Tarifs
            </a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/connexion">Connexion</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/connexion">
                Demander une démo
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
              Ne ratez plus aucun renouvellement client
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Pilotez vos échéances, relances et revenus récurrents dans un seul outil intelligent.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/connexion">
                  Demander une démo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#preview">
                  <Play className="mr-2 h-4 w-4" />
                  Voir le produit
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              14 jours d{"'"}essai gratuit • Aucune carte requise
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      {/* Problem Section */}
      <section id="problemes" className="border-y border-border/60 bg-muted/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">Le constat</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ces problèmes vous parlent ?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              La gestion des revenus récurrents est un casse-tête pour beaucoup d{"'"}entreprises.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-destructive/50 hover:bg-destructive/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10">
                  <problem.icon className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {problem.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">La solution</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              RenewFlow simplifie tout
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Une plateforme complète pour reprendre le contrôle de vos revenus récurrents.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group flex gap-5 rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-border hover:shadow-lg"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-foreground">
                  <solution.icon className="h-7 w-7 text-foreground transition-colors group-hover:text-background" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {solution.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section id="ia" className="border-y border-border/60 bg-muted/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4 gap-1.5">
              <Sparkles className="h-3 w-3" />
              Intelligence Artificielle
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Un assistant IA qui travaille pour vous
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Notre IA analyse vos données et vous aide à prendre les meilleures décisions.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aiFeatures.map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-foreground">
                  <feature.icon className="h-6 w-6 text-background" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">
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

      {/* Dashboard Preview Section */}
      <section id="preview" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">Aperçu</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Un tableau de bord puissant
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Toutes vos métriques clés visibles en un coup d{"'"}œil.
            </p>
          </div>
          <div className="mt-16">
            <div className="relative rounded-2xl border border-border/60 bg-card p-1 shadow-2xl">
              {/* Fake browser bar */}
              <div className="flex items-center gap-2 rounded-t-xl border-b border-border/60 bg-muted/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto flex items-center gap-2 rounded-lg bg-background px-4 py-1.5 text-xs text-muted-foreground">
                  <span>app.renewflow.fr/dashboard</span>
                </div>
              </div>
              {/* Dashboard content */}
              <div className="p-6 sm:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Tableau de bord</h3>
                    <p className="text-sm text-muted-foreground">Bienvenue, Marie</p>
                  </div>
                  <Badge variant="secondary" className="gap-1.5">
                    <Sparkles className="h-3 w-3" />
                    IA Active
                  </Badge>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                  <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                    <p className="text-xs font-medium text-muted-foreground">Clients actifs</p>
                    <p className="mt-1 text-2xl font-bold text-foreground">{dashboardPreview.clientsActifs}</p>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                    <p className="text-xs font-medium text-muted-foreground">Échéances (30j)</p>
                    <p className="mt-1 text-2xl font-bold text-foreground">{dashboardPreview.echeances30j}</p>
                  </div>
                  <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4">
                    <p className="text-xs font-medium text-amber-600">Paiements en retard</p>
                    <p className="mt-1 text-2xl font-bold text-amber-600">{dashboardPreview.paiementsRetard}</p>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                    <p className="text-xs font-medium text-muted-foreground">Revenu attendu</p>
                    <p className="mt-1 text-2xl font-bold text-foreground">{dashboardPreview.revenuAttendu}</p>
                  </div>
                  <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4">
                    <p className="text-xs font-medium text-destructive">Clients à risque</p>
                    <p className="mt-1 text-2xl font-bold text-destructive">{dashboardPreview.clientsRisque}</p>
                  </div>
                </div>
                <div className="mt-6 rounded-xl border border-foreground/10 bg-foreground/5 p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-foreground">
                      <Brain className="h-4 w-4 text-background" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Suggestion IA</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        3 clients n{"'"}ont pas répondu à vos relances. Je vous recommande de les contacter par téléphone cette semaine.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="border-y border-border/60 bg-muted/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">Cas d{"'"}usage</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Adapté à votre secteur
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              RenewFlow s{"'"}adapte à tous les modèles d{"'"}abonnement et de revenus récurrents.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group flex flex-col rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-border hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-foreground">
                  <useCase.icon className="h-7 w-7 text-foreground transition-colors group-hover:text-background" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {useCase.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {useCase.description}
                </p>
                <ul className="space-y-2">
                  {useCase.examples.map((example, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-foreground" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">Tarifs</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Des tarifs simples et transparents
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Commencez gratuitement et évoluez selon vos besoins.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative flex flex-col rounded-2xl border bg-card p-8 ${
                  plan.popular ? "border-2 border-foreground" : "border-border/60"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Populaire
                  </Badge>
                )}
                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <div className="mt-6">
                  {plan.price === "Sur mesure" ? (
                    <span className="text-3xl font-bold tracking-tight text-foreground">{plan.price}</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold tracking-tight text-foreground">{plan.price}€</span>
                      <span className="text-muted-foreground">/mois</span>
                    </>
                  )}
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-foreground" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className="mt-8 w-full"
                  asChild
                >
                  <Link href="/connexion">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="border-y border-border/60 bg-muted/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Questions fréquentes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tout ce que vous devez savoir sur RenewFlow.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/60">
                  <AccordionTrigger className="text-left text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-16 sm:px-16 sm:py-24">
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
                Reprenez le contrôle de vos revenus récurrents
              </h2>
              <p className="mt-4 text-lg text-background/80">
                Rejoignez les entreprises qui ont déjà optimisé leur gestion des abonnements avec RenewFlow.
              </p>
              <div className="mt-10">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/connexion">
                    Tester la démo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
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
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">Mentions légales</a>
              <a href="#" className="hover:text-foreground">Confidentialité</a>
              <a href="#" className="hover:text-foreground">CGV</a>
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
