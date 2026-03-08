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
import { Plus, CalendarClock } from "lucide-react"

export function AddEcheanceSheet() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button className="h-9 gap-2 shadow-sm">
          <Plus className="h-4 w-4" />
          Ajouter une échéance
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full overflow-y-auto sm:max-w-lg">
        <SheetHeader className="pb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground">
              <CalendarClock className="h-5 w-5 text-background" />
            </div>
            <div>
              <SheetTitle className="text-xl">Nouvelle échéance</SheetTitle>
              <SheetDescription>
                Créer une nouvelle échéance de paiement
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        <form className="space-y-6">
          {/* Client Selection */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Client</h4>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="client">Client existant</Label>
                <Select>
                  <SelectTrigger id="client" className="h-10">
                    <SelectValue placeholder="Sélectionner un client" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Sophie Martin - TechVision SAS</SelectItem>
                    <SelectItem value="2">Pierre Dubois - GreenLogistics</SelectItem>
                    <SelectItem value="3">Marie Lefèvre - Digital Agency Paris</SelectItem>
                    <SelectItem value="4">Jean-Claude Mercier - BuildPro Construction</SelectItem>
                    <SelectItem value="5">François Bernard - AutoService Lyon</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Product & Amount */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Détails de l&apos;échéance</h4>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="product">Produit / Service</Label>
                <Select>
                  <SelectTrigger id="product" className="h-10">
                    <SelectValue placeholder="Sélectionner un produit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="starter">Plan Starter</SelectItem>
                    <SelectItem value="pro">Plan Pro</SelectItem>
                    <SelectItem value="enterprise">Suite Enterprise</SelectItem>
                    <SelectItem value="custom">Personnalisé</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="amount">Montant (EUR)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    className="h-10"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="frequency">Fréquence</Label>
                  <Select>
                    <SelectTrigger id="frequency" className="h-10">
                      <SelectValue placeholder="Fréquence" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mensuel">Mensuel</SelectItem>
                      <SelectItem value="trimestriel">Trimestriel</SelectItem>
                      <SelectItem value="annuel">Annuel</SelectItem>
                      <SelectItem value="unique">Unique</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Date & Priority */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Planification</h4>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dueDate">Date d&apos;échéance</Label>
                  <Input
                    id="dueDate"
                    type="date"
                    className="h-10"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="priority">Priorité</Label>
                  <Select>
                    <SelectTrigger id="priority" className="h-10">
                      <SelectValue placeholder="Priorité" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="haute">Haute</SelectItem>
                      <SelectItem value="moyenne">Moyenne</SelectItem>
                      <SelectItem value="faible">Faible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="reminder">Rappel automatique</Label>
                <Select>
                  <SelectTrigger id="reminder" className="h-10">
                    <SelectValue placeholder="Configurer le rappel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Pas de rappel</SelectItem>
                    <SelectItem value="1">1 jour avant</SelectItem>
                    <SelectItem value="3">3 jours avant</SelectItem>
                    <SelectItem value="7">1 semaine avant</SelectItem>
                    <SelectItem value="14">2 semaines avant</SelectItem>
                    <SelectItem value="30">1 mois avant</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Informations complémentaires</h4>
            <div className="space-y-2">
              <Label htmlFor="notes">Notes internes</Label>
              <Textarea
                id="notes"
                placeholder="Ajouter des notes sur cette échéance..."
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
          <Button type="submit" className="w-full sm:w-auto">
            Créer l&apos;échéance
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
