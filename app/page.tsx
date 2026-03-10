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
  Star,
  Quote,
  Shield,
  Clock,
  Zap,
  BarChart3,
  Mail,
  Phone,
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
    description: "Idéal pour les indépendants et TPE",
    price: "29",
    period: "/mois",
    features: [
      "Jusqu'à 50 clients",
      "Calendrier des échéances",
      "Relances par email",
      "Import CSV",
      "Support par email",
    ],
    cta: "Commencer gratuitement",
    popular: false,
  },
  {
    name: "Pro",
    description: "Pour les équipes en croissance",
    price: "79",
    period: "/mois",
    features: [
      "Clients illimités",
      "Relances multi-canaux",
      "Assistant IA complet",
      "Analyses et rapports avancés",
      "Intégrations API",
      "Support prioritaire 24/7",
    ],
    cta: "Essai gratuit 14 jours",
    popular: true,
  },
  {
    name: "Entreprise",
    description: "Pour les grandes organisations",
    price: "Sur mesure",
    period: "",
    features: [
      "Tout de Pro, plus :",
      "SSO & authentification avancée",
      "SLA garanti 99.9%",
      "Account manager dédié",
      "Formation personnalisée",
      "Déploiement on-premise possible",
    ],
    cta: "Contacter l'équipe commerciale",
    popular: false,
  },
]

const testimonials = [
  {
    name: "Marie Fontaine",
    role: "Directrice commerciale",
    company: "TechVision SAS",
    content: "RenewFlow a transformé notre gestion des abonnements. Nous avons réduit notre churn de 23% en 6 mois et récupéré plus de 45 000€ de revenus à risque.",
    avatar: "MF",
    rating: 5,
  },
  {
    name: "Thomas Mercier",
    role: "Fondateur",
    company: "Agence Pixel",
    content: "Fini les tableurs Excel ! L'assistant IA nous fait gagner 5 heures par semaine sur les relances clients. L'investissement est rentabilisé dès le premier mois.",
    avatar: "TM",
    rating: 5,
  },
  {
    name: "Sophie Laurent",
    role: "Responsable financier",
    company: "MaintenancePro",
    content: "La visibilité sur nos échéances est enfin claire. Nous n'avons plus aucun contrat qui expire sans qu'on le sache. Un outil indispensable pour notre activité.",
    avatar: "SL",
    rating: 5,
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
  {
    question: "Puis-je essayer RenewFlow avant de m'engager ?",
    answer: "Absolument ! Nous offrons un essai gratuit de 14 jours sans engagement et sans carte bancaire. Vous aurez accès à toutes les fonctionnalités de l'offre Pro pour tester la solution.",
  },
]

const stats = [
  { value: "2 500+", label: "Entreprises clientes" },
  { value: "98%", label: "Taux de satisfaction" },
  { value: "-35%", label: "Churn moyen réduit" },
  { value: "4.9/5", label: "Note moyenne" },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Dark Header */}
      <header className="sticky top-0 z-50 bg-foreground">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-background">
              <Sparkles className="h-4 w-4 text-foreground" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-background">
              RenewFlow
            </span>
          </div>
          <nav className="hidden items-center gap-8 lg:flex">
            <a href="#problemes" className="text-sm font-medium text-background/70 transition-colors hover:text-background">
              Problèmes
            </a>
            <a href="#solution" className="text-sm font-medium text-background/70 transition-colors hover:text-background">
              Solution
            </a>
            <a href="#ia" className="text-sm font-medium text-background/70 transition-colors hover:text-background">
              IA
            </a>
            <a href="#temoignages" className="text-sm font-medium text-background/70 transition-colors hover:text-background">
              Témoignages
            </a>
            <a href="#tarifs" className="text-sm font-medium text-background/70 transition-colors hover:text-background">
              Tarifs
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-background/80 hover:text-background hover:bg-background/10" asChild>
              <Link href="/connexion">Connexion</Link>
            </Button>
            <Button size="sm" variant="secondary" className="font-medium shadow-lg shadow-background/20" asChild>
              <Link href="/connexion">
                Demander une démo
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-foreground via-foreground to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.1),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-24 lg:px-8 lg:pb-40 lg:pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-8 gap-2 border-background/20 bg-background/10 px-4 py-1.5 text-background backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Propulsé par l{"'"}Intelligence Artificielle
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl xl:text-7xl">
              Ne ratez plus aucun renouvellement client
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-background/70 sm:text-xl">
              Pilotez vos échéances, relances et revenus récurrents dans un seul outil intelligent. Optimisez votre MRR et réduisez le churn avec l{"'"}aide de l{"'"}IA.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" className="h-12 px-8 text-base font-semibold shadow-xl shadow-background/25" asChild>
                <Link href="/connexion">
                  Demander une démo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 border-background/30 bg-transparent px-8 text-base font-medium text-background hover:bg-background/10 hover:text-background" asChild>
                <Link href="#preview">
                  <Play className="mr-2 h-5 w-5" />
                  Voir le produit
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-background/50">
              14 jours d{"'"}essai gratuit • Aucune carte bancaire requise • Configuration en 5 minutes
            </p>
          </div>

          {/* Stats Bar */}
          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 rounded-2xl border border-background/10 bg-background/5 p-8 backdrop-blur-sm sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold text-background sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm text-background/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-background/40" />
        </div>
      </section>

      {/* Problem Section */}
      <section id="problemes" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Le constat</p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Ces problèmes vous parlent ?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              La gestion des revenus récurrents est un casse-tête pour beaucoup d{"'"}entreprises. Sans les bons outils, vous perdez du temps et de l{"'"}argent.
            </p>
          </div>
          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-destructive/30 hover:shadow-xl hover:shadow-destructive/5"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10 transition-colors group-hover:bg-destructive/20">
                  <problem.icon className="h-7 w-7 text-destructive" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
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
      <section id="solution" className="border-y border-border bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">La solution</p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              RenewFlow simplifie tout
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Une plateforme complète pour reprendre le contrôle de vos revenus récurrents et optimiser chaque interaction client.
            </p>
          </div>
          <div className="mt-20 grid gap-8 lg:grid-cols-2">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group flex gap-6 rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-foreground shadow-lg transition-transform group-hover:scale-105">
                  <solution.icon className="h-8 w-8 text-background" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {solution.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section id="ia" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-6 gap-2 px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              Intelligence Artificielle
            </Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Un assistant IA qui travaille pour vous
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Notre IA analyse vos données en temps réel et vous aide à prendre les meilleures décisions pour maximiser vos revenus.
            </p>
          </div>
          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aiFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-foreground/5 transition-transform group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground shadow-lg">
                    <feature.icon className="h-7 w-7 text-background" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="preview" className="border-y border-border bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Aperçu</p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Un tableau de bord puissant
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Toutes vos métriques clés visibles en un coup d{"'"}œil. Prenez des décisions éclairées en quelques secondes.
            </p>
          </div>
          <div className="mt-20">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
              {/* Fake browser bar */}
              <div className="flex items-center gap-3 border-b border-border bg-muted/50 px-4 py-3">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto flex items-center gap-2 rounded-lg bg-background px-4 py-1.5 text-xs text-muted-foreground shadow-sm">
                  <Shield className="h-3 w-3 text-green-500" />
                  <span>app.renewflow.fr/dashboard</span>
                </div>
              </div>
              {/* Dashboard content */}
              <div className="p-6 sm:p-10">
                {/* Dashboard Header */}
                <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Tableau de bord</h3>
                    <p className="mt-1 text-muted-foreground">Bienvenue, Marie • Mardi 11 mars 2025</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="gap-2 px-3 py-1.5">
                      <Sparkles className="h-3.5 w-3.5" />
                      IA Active
                    </Badge>
                    <Button size="sm" variant="outline">
                      <Bell className="mr-2 h-4 w-4" />
                      3 alertes
                    </Button>
                  </div>
                </div>

                {/* KPI Cards */}
                <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                  <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-muted-foreground">Clients actifs</p>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="mt-3 text-3xl font-bold text-foreground">247</p>
                    <p className="mt-1 text-xs text-green-600">+12 ce mois</p>
                  </div>
                  <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-muted-foreground">Échéances (30j)</p>
                      <CalendarClock className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="mt-3 text-3xl font-bold text-foreground">18</p>
                    <p className="mt-1 text-xs text-muted-foreground">À traiter</p>
                  </div>
                  <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-amber-700">Paiements en retard</p>
                      <Clock className="h-4 w-4 text-amber-600" />
                    </div>
                    <p className="mt-3 text-3xl font-bold text-amber-700">5</p>
                    <p className="mt-1 text-xs text-amber-600">8 450 € à récupérer</p>
                  </div>
                  <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-muted-foreground">Revenu attendu</p>
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="mt-3 text-3xl font-bold text-foreground">42 850 €</p>
                    <p className="mt-1 text-xs text-green-600">+8.2% vs mois dernier</p>
                  </div>
                  <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-destructive">Clients à risque</p>
                      <AlertTriangle className="h-4 w-4 text-destructive" />
                    </div>
                    <p className="mt-3 text-3xl font-bold text-destructive">3</p>
                    <p className="mt-1 text-xs text-destructive">Action requise</p>
                  </div>
                </div>

                {/* Dashboard Widgets */}
                <div className="grid gap-6 lg:grid-cols-3">
                  {/* Activity Chart Placeholder */}
                  <div className="lg:col-span-2 rounded-xl border border-border bg-background p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <h4 className="font-semibold text-foreground">Revenus récurrents (MRR)</h4>
                      <Badge variant="outline" className="text-xs">12 derniers mois</Badge>
                    </div>
                    <div className="flex h-48 items-end justify-between gap-2">
                      {[35, 42, 38, 45, 52, 48, 55, 62, 58, 65, 72, 78].map((height, i) => (
                        <div key={i} className="flex w-full flex-col items-center gap-2">
                          <div 
                            className="w-full rounded-t-sm bg-foreground transition-all hover:bg-foreground/80" 
                            style={{ height: `${height * 2}px` }}
                          />
                          <span className="text-[10px] text-muted-foreground">
                            {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="rounded-xl border border-border bg-background p-6">
                    <h4 className="mb-4 font-semibold text-foreground">Actions rapides</h4>
                    <div className="space-y-3">
                      <button className="flex w-full items-center gap-3 rounded-lg border border-border p-3 text-left transition-colors hover:bg-muted">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground">
                          <Mail className="h-4 w-4 text-background" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Envoyer des relances</p>
                          <p className="text-xs text-muted-foreground">5 clients en attente</p>
                        </div>
                      </button>
                      <button className="flex w-full items-center gap-3 rounded-lg border border-border p-3 text-left transition-colors hover:bg-muted">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground">
                          <BarChart3 className="h-4 w-4 text-background" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Voir les rapports</p>
                          <p className="text-xs text-muted-foreground">Analyse mensuelle</p>
                        </div>
                      </button>
                      <button className="flex w-full items-center gap-3 rounded-lg border border-border p-3 text-left transition-colors hover:bg-muted">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground">
                          <Users className="h-4 w-4 text-background" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Ajouter un client</p>
                          <p className="text-xs text-muted-foreground">Import CSV disponible</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* AI Suggestion */}
                <div className="mt-6 rounded-xl border border-foreground/20 bg-foreground/5 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground shadow-lg">
                      <Brain className="h-5 w-5 text-background" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-foreground">Suggestion de l{"'"}assistant IA</p>
                        <Badge variant="secondary" className="text-xs">Priorité haute</Badge>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        3 clients n{"'"}ont pas répondu à vos dernières relances : <span className="font-medium text-foreground">Dupont & Fils</span>, <span className="font-medium text-foreground">Tech Solutions</span> et <span className="font-medium text-foreground">Martin SARL</span>. Je vous recommande de les contacter par téléphone cette semaine. Le montant total à risque est de 12 400 €.
                      </p>
                      <div className="mt-4 flex gap-3">
                        <Button size="sm">
                          <Phone className="mr-2 h-4 w-4" />
                          Voir les contacts
                        </Button>
                        <Button size="sm" variant="outline">
                          Générer un script d{"'"}appel
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="temoignages" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Témoignages</p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Ce que disent nos clients
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Découvrez comment RenewFlow aide des centaines d{"'"}entreprises à optimiser leurs revenus récurrents.
            </p>
          </div>
          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Quote className="mb-6 h-10 w-10 text-muted-foreground/20" />
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="flex-1 text-foreground leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="border-y border-border bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Cas d{"'"}usage</p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Adapté à votre secteur
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              RenewFlow s{"'"}adapte à tous les modèles d{"'"}abonnement et de revenus récurrents, quelle que soit votre industrie.
            </p>
          </div>
          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground shadow-lg transition-transform group-hover:scale-105">
                  <useCase.icon className="h-8 w-8 text-background" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {useCase.title}
                </h3>
                <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">
                  {useCase.description}
                </p>
                <ul className="space-y-3">
                  {useCase.examples.map((example, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-foreground" />
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
      <section id="tarifs" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Tarifs</p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Des tarifs simples et transparents
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Commencez gratuitement pendant 14 jours, puis choisissez le plan qui correspond à vos besoins.
            </p>
          </div>
          <div className="mx-auto mt-20 grid max-w-6xl gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative flex flex-col rounded-2xl border-2 bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  plan.popular ? "border-foreground shadow-lg" : "border-border"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 shadow-lg">
                    Le plus populaire
                  </Badge>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                <div className="mb-8">
                  {plan.price === "Sur mesure" ? (
                    <span className="text-4xl font-bold tracking-tight text-foreground">{plan.price}</span>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold tracking-tight text-foreground">{plan.price}€</span>
                      <span className="text-lg text-muted-foreground">{plan.period}</span>
                    </div>
                  )}
                </div>
                <ul className="mb-8 flex-1 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-foreground" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  className={`w-full ${plan.popular ? "shadow-lg" : ""}`}
                  asChild
                >
                  <Link href="/connexion">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-muted-foreground">
            Tous les prix sont hors taxes. Facturation mensuelle ou annuelle (2 mois offerts).
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="border-y border-border bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">FAQ</p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Questions fréquentes
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Tout ce que vous devez savoir sur RenewFlow. Une question ? Contactez-nous.
            </p>
          </div>
          <div className="mx-auto mt-20 max-w-3xl">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="rounded-xl border border-border bg-card px-6 shadow-sm"
                >
                  <AccordionTrigger className="py-5 text-left font-semibold text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-20 sm:px-16 sm:py-28">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.15),transparent)]" />
            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-background sm:text-4xl lg:text-5xl">
                Reprenez le contrôle de vos revenus récurrents
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-background/70">
                Rejoignez plus de 2 500 entreprises qui ont déjà optimisé leur gestion des abonnements avec RenewFlow.
              </p>
              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" className="h-12 px-8 text-base font-semibold shadow-xl" asChild>
                  <Link href="/connexion">
                    Commencer l{"'"}essai gratuit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-12 border-background/30 bg-transparent px-8 text-base font-medium text-background hover:bg-background/10 hover:text-background" asChild>
                  <Link href="/connexion">
                    Demander une démo personnalisée
                  </Link>
                </Button>
              </div>
              <p className="mt-6 text-sm text-background/50">
                Configuration en 5 minutes • Support inclus • Annulez à tout moment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground">
                  <Sparkles className="h-5 w-5 text-background" />
                </div>
                <span className="text-lg font-semibold text-foreground">RenewFlow</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                La plateforme intelligente pour gérer vos abonnements et maximiser vos revenus récurrents.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Produit</h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href="#solution" className="text-muted-foreground hover:text-foreground">Fonctionnalités</a></li>
                <li><a href="#ia" className="text-muted-foreground hover:text-foreground">Assistant IA</a></li>
                <li><a href="#tarifs" className="text-muted-foreground hover:text-foreground">Tarifs</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Intégrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Ressources</h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Guide de démarrage</a></li>
                <li><a href="#faq" className="text-muted-foreground hover:text-foreground">FAQ</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Entreprise</h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">À propos</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Carrières</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Presse</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2025 RenewFlow. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground">Mentions légales</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Confidentialité</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">CGV</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
