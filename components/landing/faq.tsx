"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Comment importer mes données clients existantes ?",
    answer: "RenewFlow accepte les fichiers CSV avec vos données clients. Vous pouvez importer vos contacts, contrats, dates d'échéance et historiques de paiement en quelques clics. Notre assistant d'import vous guide à chaque étape et vérifie la qualité des données."
  },
  {
    question: "Quels types d'abonnements puis-je gérer ?",
    answer: "RenewFlow prend en charge tous les types d'abonnements : mensuels, trimestriels, semestriels ou annuels. Vous pouvez également gérer des contrats à durée déterminée avec dates de fin personnalisées, des renouvellements automatiques ou manuels."
  },
  {
    question: "Comment mes données sont-elles sécurisées ?",
    answer: "Vos données sont hébergées sur des serveurs européens certifiés ISO 27001. Nous utilisons le chiffrement AES-256 pour le stockage et TLS 1.3 pour les transferts. Des sauvegardes automatiques quotidiennes garantissent la récupération de vos données. Nous sommes conformes RGPD."
  },
  {
    question: "RenewFlow s'intègre-t-il avec mon CRM ?",
    answer: "Oui, RenewFlow propose des intégrations natives avec les principaux CRM du marché : Salesforce, HubSpot, Pipedrive, et Zoho CRM. Pour les plans Pro et Entreprise, nous proposons également une API REST complète pour des intégrations personnalisées."
  },
  {
    question: "Puis-je essayer avant de m'engager ?",
    answer: "Absolument ! Tous nos plans incluent un essai gratuit de 14 jours sans engagement et sans carte bancaire. Vous avez accès à toutes les fonctionnalités du plan Pro pendant cette période pour tester l'outil avec vos vraies données."
  },
  {
    question: "Comment fonctionne la génération de relances par IA ?",
    answer: "Notre IA analyse l'historique de vos échanges avec chaque client et génère des emails de relance personnalisés. Elle adapte le ton, le contenu et le timing en fonction du profil client et de la situation. Vous gardez le contrôle total et pouvez modifier chaque message avant envoi."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tout ce que vous devez savoir pour démarrer avec RenewFlow.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
