import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-primary p-12 lg:p-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDJ2LTJoMzR6bTAtNFYySDJ2MmgzNHptMC02VjIwSDJ2NGgzNHptMC04VjEySDJ2NGgzNHptMC04VjRIMnY0aDM0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
              Reprenez le contrôle de vos revenus récurrents
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/70">
              Rejoignez des centaines d'entreprises qui ont déjà transformé leur gestion des abonnements avec RenewFlow.
            </p>
            <div className="mt-10">
              <Button size="lg" variant="secondary" className="gap-2 px-8">
                Tester la démo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/50">
              Configuration en 5 minutes • Aucun engagement
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
