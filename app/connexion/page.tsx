"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Sparkles, ArrowLeft, ArrowRight, CalendarClock, Bell, TrendingUp, Zap } from "lucide-react"

const benefits = [
  {
    icon: CalendarClock,
    title: "Échéances maîtrisées",
    description: "Ne ratez plus jamais une date de renouvellement importante.",
  },
  {
    icon: Bell,
    title: "Relances automatiques",
    description: "Vos relances partent au bon moment, sans effort manuel.",
  },
  {
    icon: TrendingUp,
    title: "Revenus optimisés",
    description: "Augmentez votre taux de rétention jusqu'à 40%.",
  },
  {
    icon: Zap,
    title: "IA intégrée",
    description: "Des suggestions intelligentes pour chaque action.",
  },
]

export default function ConnexionPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login delay
    await new Promise((resolve) => setTimeout(resolve, 800))
    
    // Redirect to dashboard
    router.push("/tableau-de-bord")
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Left Side - Login Form */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:w-[55%] lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <Link href="/accueil" className="inline-flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground transition-transform group-hover:scale-105">
                <Sparkles className="h-5 w-5 text-background" />
              </div>
              <span className="text-xl font-semibold tracking-tight text-foreground">RenewFlow</span>
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Connexion
            </h1>
            <p className="mt-2 text-base text-muted-foreground">
              Accédez à votre espace RenewFlow
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                Adresse email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="vous@entreprise.fr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11 border-border/60 bg-card shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                  Mot de passe
                </Label>
                <Link
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Mot de passe oublié ?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-11 border-border/60 bg-card shadow-sm"
              />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <Label
                htmlFor="remember"
                className="text-sm text-muted-foreground cursor-pointer"
              >
                Se souvenir de moi
              </Label>
            </div>

            <Button
              type="submit"
              className="h-11 w-full gap-2 text-base font-medium shadow-lg shadow-foreground/10"
              disabled={isLoading}
            >
              {isLoading ? "Connexion en cours..." : "Se connecter"}
              {!isLoading && <ArrowRight className="h-4 w-4" />}
            </Button>
          </form>

          {/* Secondary Actions */}
          <div className="mt-8 space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/60" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-3 text-muted-foreground">ou</span>
              </div>
            </div>

            <div className="text-center">
              <span className="text-sm text-muted-foreground">
                Vous n{"'"}avez pas encore de compte ?{" "}
              </span>
              <Link
                href="#"
                className="text-sm font-medium text-foreground hover:underline underline-offset-4"
              >
                Demander une démo
              </Link>
            </div>

            <Link
              href="/accueil"
              className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour à l{"'"}accueil
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Benefits Panel */}
      <div className="relative hidden lg:flex lg:flex-1 lg:items-center lg:justify-center bg-foreground overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-accent/10 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-lg px-8">
          {/* Message */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-background xl:text-3xl text-balance">
              Pilotez vos abonnements clients comme jamais
            </h2>
            <p className="mt-3 text-base text-background/70 leading-relaxed">
              RenewFlow centralise vos échéances, automatise vos relances et optimise vos revenus récurrents.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-5">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl bg-background/5 p-4 border border-background/10"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                  <benefit.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-background">{benefit.title}</h3>
                  <p className="mt-0.5 text-sm text-background/60">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dashboard preview placeholder */}
          <div className="mt-10 rounded-xl bg-background/10 border border-background/20 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-3 w-3 rounded-full bg-red-400/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-400/60" />
              <div className="h-3 w-3 rounded-full bg-green-400/60" />
            </div>
            <div className="space-y-3">
              <div className="h-3 w-3/4 rounded bg-background/20" />
              <div className="h-3 w-1/2 rounded bg-background/15" />
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="h-16 rounded-lg bg-background/10" />
                <div className="h-16 rounded-lg bg-background/10" />
                <div className="h-16 rounded-lg bg-background/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
