"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Plus, Building2, User, Mail, Phone, CreditCard, Calendar, FileText } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function AddClientSheet() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button className="h-10 gap-2 rounded-lg px-4 shadow-sm">
          <Plus className="h-4 w-4" />
          Ajouter un client
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full overflow-y-auto sm:max-w-lg">
        <SheetHeader className="pb-6">
          <SheetTitle className="text-xl">Nouveau client</SheetTitle>
          <SheetDescription>
            Ajoutez un nouveau client à votre portefeuille. Remplissez les informations ci-dessous.
          </SheetDescription>
        </SheetHeader>

        <form className="space-y-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <User className="h-4 w-4 text-muted-foreground" />
              Informations de contact
            </div>
            <Separator />
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom</Label>
                <Input
                  id="firstName"
                  placeholder="Sophie"
                  className="h-10"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom</Label>
                <Input
                  id="lastName"
                  placeholder="Martin"
                  className="h-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Adresse e-mail</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="sophie.martin@entreprise.fr"
                  className="h-10 pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+33 6 12 34 56 78"
                  className="h-10 pl-10"
                />
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              Informations entreprise
            </div>
            <Separator />

            <div className="space-y-2">
              <Label htmlFor="company">Nom de l{"'"}entreprise</Label>
              <Input
                id="company"
                placeholder="TechVision SAS"
                className="h-10"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="siret">SIRET</Label>
                <Input
                  id="siret"
                  placeholder="123 456 789 00012"
                  className="h-10"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sector">Secteur d{"'"}activité</Label>
                <Select>
                  <SelectTrigger className="h-10 w-full">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Technologie</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="sante">Santé</SelectItem>
                    <SelectItem value="commerce">Commerce</SelectItem>
                    <SelectItem value="services">Services</SelectItem>
                    <SelectItem value="industrie">Industrie</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Subscription Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <CreditCard className="h-4 w-4 text-muted-foreground" />
              Abonnement
            </div>
            <Separator />

            <div className="space-y-2">
              <Label htmlFor="product">Produit / Offre</Label>
              <Select>
                <SelectTrigger className="h-10 w-full">
                  <SelectValue placeholder="Choisir un produit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="starter">Plan Starter - 99€/mois</SelectItem>
                  <SelectItem value="pro">Plan Pro - 299€/mois</SelectItem>
                  <SelectItem value="enterprise">Suite Enterprise - 499€/mois</SelectItem>
                  <SelectItem value="custom">Offre personnalisée</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="subscriptionType">Type d{"'"}abonnement</Label>
                <Select>
                  <SelectTrigger className="h-10 w-full">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mensuel">Mensuel</SelectItem>
                    <SelectItem value="trimestriel">Trimestriel</SelectItem>
                    <SelectItem value="annuel">Annuel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Montant (€)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="299"
                  className="h-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="startDate">Date de début</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="startDate"
                  type="date"
                  className="h-10 pl-10"
                />
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <FileText className="h-4 w-4 text-muted-foreground" />
              Notes internes
            </div>
            <Separator />

            <div className="space-y-2">
              <Label htmlFor="notes">Notes (optionnel)</Label>
              <Textarea
                id="notes"
                placeholder="Ajoutez des notes ou commentaires sur ce client..."
                className="min-h-[100px] resize-none"
              />
            </div>
          </div>
        </form>

        <SheetFooter className="mt-8 flex-col gap-3 sm:flex-row">
          <SheetClose asChild>
            <Button variant="outline" className="w-full sm:w-auto">
              Annuler
            </Button>
          </SheetClose>
          <Button type="submit" className="w-full gap-2 sm:w-auto">
            <Plus className="h-4 w-4" />
            Créer le client
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
