"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"

interface CalendarDay {
  day: number
  isCurrentMonth: boolean
  events: { type: "a_venir" | "en_retard" | "renouvellement"; count: number }[]
}

const daysOfWeek = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]

const calendarDays: CalendarDay[] = [
  { day: 24, isCurrentMonth: false, events: [] },
  { day: 25, isCurrentMonth: false, events: [] },
  { day: 26, isCurrentMonth: false, events: [] },
  { day: 27, isCurrentMonth: false, events: [] },
  { day: 28, isCurrentMonth: false, events: [] },
  { day: 1, isCurrentMonth: true, events: [{ type: "a_venir", count: 2 }] },
  { day: 2, isCurrentMonth: true, events: [{ type: "en_retard", count: 1 }] },
  { day: 3, isCurrentMonth: true, events: [] },
  { day: 4, isCurrentMonth: true, events: [] },
  { day: 5, isCurrentMonth: true, events: [{ type: "en_retard", count: 1 }] },
  { day: 6, isCurrentMonth: true, events: [] },
  { day: 7, isCurrentMonth: true, events: [] },
  { day: 8, isCurrentMonth: true, events: [{ type: "en_retard", count: 1 }, { type: "a_venir", count: 3 }] },
  { day: 9, isCurrentMonth: true, events: [] },
  { day: 10, isCurrentMonth: true, events: [{ type: "renouvellement", count: 2 }] },
  { day: 11, isCurrentMonth: true, events: [] },
  { day: 12, isCurrentMonth: true, events: [{ type: "a_venir", count: 1 }] },
  { day: 13, isCurrentMonth: true, events: [] },
  { day: 14, isCurrentMonth: true, events: [] },
  { day: 15, isCurrentMonth: true, events: [{ type: "a_venir", count: 4 }, { type: "renouvellement", count: 1 }] },
  { day: 16, isCurrentMonth: true, events: [] },
  { day: 17, isCurrentMonth: true, events: [] },
  { day: 18, isCurrentMonth: true, events: [{ type: "a_venir", count: 2 }] },
  { day: 19, isCurrentMonth: true, events: [] },
  { day: 20, isCurrentMonth: true, events: [{ type: "a_venir", count: 1 }] },
  { day: 21, isCurrentMonth: true, events: [] },
  { day: 22, isCurrentMonth: true, events: [{ type: "a_venir", count: 2 }] },
  { day: 23, isCurrentMonth: true, events: [] },
  { day: 24, isCurrentMonth: true, events: [] },
  { day: 25, isCurrentMonth: true, events: [{ type: "renouvellement", count: 3 }] },
  { day: 26, isCurrentMonth: true, events: [] },
  { day: 27, isCurrentMonth: true, events: [] },
  { day: 28, isCurrentMonth: true, events: [{ type: "a_venir", count: 1 }] },
  { day: 29, isCurrentMonth: true, events: [] },
  { day: 30, isCurrentMonth: true, events: [] },
  { day: 31, isCurrentMonth: true, events: [{ type: "a_venir", count: 2 }] },
  { day: 1, isCurrentMonth: false, events: [] },
  { day: 2, isCurrentMonth: false, events: [] },
  { day: 3, isCurrentMonth: false, events: [] },
  { day: 4, isCurrentMonth: false, events: [] },
  { day: 5, isCurrentMonth: false, events: [] },
  { day: 6, isCurrentMonth: false, events: [] },
]

const eventColors = {
  a_venir: "bg-sky-500",
  en_retard: "bg-red-500",
  renouvellement: "bg-emerald-500",
}

export function CalendarView() {
  const today = 8 // Simulating March 8th as today

  return (
    <div className="rounded-xl border border-border/60 bg-card shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
            <Calendar className="h-5 w-5 text-foreground" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">Vue calendrier</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Visualisez vos échéances du mois
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="min-w-[120px] text-center text-sm font-medium">Mars 2026</span>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-4">
        {/* Days of Week Header */}
        <div className="mb-2 grid grid-cols-7 gap-1">
          {daysOfWeek.map((day) => (
            <div key={day} className="py-2 text-center text-xs font-semibold text-muted-foreground">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((calDay, index) => {
            const isToday = calDay.isCurrentMonth && calDay.day === today
            return (
              <div
                key={index}
                className={`relative flex min-h-[72px] flex-col rounded-lg border p-1.5 transition-colors ${
                  calDay.isCurrentMonth
                    ? isToday
                      ? "border-foreground bg-foreground/5"
                      : "border-border/40 bg-background hover:bg-muted/50"
                    : "border-transparent bg-muted/30"
                }`}
              >
                <span
                  className={`mb-1 text-xs font-medium ${
                    calDay.isCurrentMonth
                      ? isToday
                        ? "text-foreground"
                        : "text-foreground"
                      : "text-muted-foreground/50"
                  }`}
                >
                  {calDay.day}
                </span>
                {calDay.events.length > 0 && (
                  <div className="mt-auto flex flex-wrap gap-0.5">
                    {calDay.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className={`h-1.5 w-1.5 rounded-full ${eventColors[event.type]}`}
                        title={`${event.count} événement(s)`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-border/60 pt-4">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-sky-500" />
            <span className="text-xs text-muted-foreground">Échéances à venir</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <span className="text-xs text-muted-foreground">Paiements en retard</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs text-muted-foreground">Renouvellements importants</span>
          </div>
        </div>
      </div>
    </div>
  )
}
