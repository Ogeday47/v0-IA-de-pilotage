import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Problems } from "@/components/landing/problems"
import { Solution } from "@/components/landing/solution"
import { AiFeatures } from "@/components/landing/ai-features"
import { DashboardPreview } from "@/components/landing/dashboard-preview"
import { UseCases } from "@/components/landing/use-cases"
import { Testimonials } from "@/components/landing/testimonials"
import { Pricing } from "@/components/landing/pricing"
import { Faq } from "@/components/landing/faq"
import { FinalCta } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export const metadata = {
  title: "RenewFlow - Ne ratez plus aucun renouvellement client",
  description: "Pilotez vos échéances, relances et revenus récurrents dans un seul outil intelligent propulsé par l'IA.",
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problems />
      <Solution />
      <AiFeatures />
      <DashboardPreview />
      <UseCases />
      <Testimonials />
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  )
}
