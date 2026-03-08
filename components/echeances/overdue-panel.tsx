"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { AlertTriangle, Send, Clock } from "lucide-react"

interface OverduePayment {
  id: string
  clientName: string
  company: string
  amount: number
  daysLate: number
  urgency: "critique" | "urgent" | "modere"
}

const overduePayments: OverduePayment[] = [
  {
    id: "1",
    clientName: "Pierre Dubois",
    company: "GreenLogistics",
    amount: 299,
    daysLate: 8,
    urgency: "urgent",
  },
  {
    id: "2",
    clientName: "Isabelle Moreau",
    company: "Cuisine Plus",
    amount: 799,
    daysLate: 3,
    urgency: "modere",
  },
  {
    id: "3",
    clientName: "Émilie Rousseau",
    company: "Média France",
    amount: 299,
    daysLate: 6,
    urgency: "urgent",
  },
  {
    id: "4",
    clientName: "Thomas Garnier",
    company: "Tech Solutions",
    amount: 1499,
    daysLate: 15,
    urgency: "critique",
  },
]

const urgencyConfig = {
  critique: { label: "Critique", className: "bg-red-600 text-white border-red-600" },
  urgent: { label: "Urgent", className: "bg-amber-500/10 text-amber-600 border-amber-500/20" },
  modere: { label: "Modéré", className: "bg-slate-500/10 text-slate-600 border-slate-500/20" },
}

export function OverduePanel() {
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  const totalOverdue = overduePayments.reduce((acc, p) => acc + p.amount, 0)

  return (
    <div className="rounded-xl border border-red-200 bg-red-50/50 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-red-200 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100">
            <AlertTriangle className="h-5 w-5 text-red-600" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">Retards à traiter</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {overduePayments.length} paiements en retard - {formatAmount(totalOverdue)} à recouvrer
            </p>
          </div>
        </div>
        <Button size="sm" className="h-9 gap-2">
          <Send className="h-4 w-4" />
          Tout relancer
        </Button>
      </div>

      {/* List */}
      <div className="divide-y divide-red-100">
        {overduePayments.map((payment) => {
          const urgency = urgencyConfig[payment.urgency]
          return (
            <div key={payment.id} className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border border-red-200">
                  <AvatarFallback className="bg-white text-xs font-semibold text-muted-foreground">
                    {getInitials(payment.clientName)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{payment.clientName}</span>
                    <Badge variant="outline" className={urgency.className}>
                      {urgency.label}
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">{payment.company}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-semibold tabular-nums text-foreground">
                    {formatAmount(payment.amount)}
                  </p>
                  <div className="flex items-center justify-end gap-1 text-xs text-red-600">
                    <Clock className="h-3 w-3" />
                    {payment.daysLate} jours de retard
                  </div>
                </div>
                <Button variant="outline" size="sm" className="h-8 gap-1.5 border-red-200 bg-white text-red-600 hover:bg-red-50 hover:text-red-700">
                  <Send className="h-3.5 w-3.5" />
                  Relancer
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
