import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const benefits = [
  "Configuration en 5 minutes",
  "Essai gratuit 14 jours",
  "Aucune carte requise",
  "Support dédié inclus"
]

export function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-foreground overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }} />
          </div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-chart-2/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative px-8 py-16 lg:px-20 lg:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-background text-balance leading-tight">
                Reprenez le contrôle de vos revenus récurrents
              </h2>
              <p className="mt-6 text-lg lg:text-xl text-background/60 max-w-xl mx-auto leading-relaxed">
                Rejoignez plus de 500 entreprises qui ont déjà transformé leur gestion des abonnements avec RenewFlow.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="h-14 px-8 text-base gap-2.5 bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl shadow-accent/30"
                  asChild
                >
                  <Link href="/connexion">
                    Démarrer votre essai gratuit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="h-14 px-8 text-base border-2 border-background/20 bg-transparent text-background hover:bg-background/10 hover:border-background/30"
                  asChild
                >
                  <Link href="/connexion">Parler à un expert</Link>
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-background/60">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
