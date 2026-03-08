import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Problems } from "@/components/landing/problems"
import { Solution } from "@/components/landing/solution"
import { AIFeatures } from "@/components/landing/ai-features"
import { DashboardPreview } from "@/components/landing/dashboard-preview"
import { UseCases } from "@/components/landing/use-cases"
import { Testimonials } from "@/components/landing/testimonials"
import { Pricing } from "@/components/landing/pricing"
import { FAQ } from "@/components/landing/faq"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problems />
      <Solution />
      <AIFeatures />
      <DashboardPreview />
      <UseCases />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
