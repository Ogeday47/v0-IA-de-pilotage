"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Pencil,
  CalendarPlus,
  Send,
  Download,
  ArrowLeft,
} from "lucide-react"

export function ClientHeader() {
  return (
    <div className="mb-8">
      {/* Breadcrumb */}
      <div className="mb-4 flex items-center gap-2 text-sm">
        <Link
          href="/clients"
          className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux clients
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground shadow-sm">
            <Building2 className="h-7 w-7 text-background" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                Atelier Dubois & Fils
              </h1>
              <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                Actif
              </Badge>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Consultez les informations du client, ses échéances, ses relances et son historique.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" className="h-9 gap-2">
            <Pencil className="h-4 w-4" />
            Modifier
          </Button>
          <Button variant="outline" size="sm" className="h-9 gap-2">
            <CalendarPlus className="h-4 w-4" />
            <span className="hidden sm:inline">Ajouter une échéance</span>
            <span className="sm:hidden">Échéance</span>
          </Button>
          <Button variant="outline" size="sm" className="h-9 gap-2">
            <Send className="h-4 w-4" />
            <span className="hidden sm:inline">Générer une relance</span>
            <span className="sm:hidden">Relance</span>
          </Button>
          <Button variant="outline" size="sm" className="h-9 gap-2">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Exporter la fiche</span>
            <span className="sm:hidden">Exporter</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
