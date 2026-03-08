"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">R</span>
            </div>
            <span className="text-lg font-semibold text-foreground">RenewFlow</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#problemes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Problèmes
            </a>
            <a href="#solution" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Solution
            </a>
            <a href="#ia" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Intelligence IA
            </a>
            <a href="#tarifs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Tarifs
            </a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Connexion
            </Button>
            <Button size="sm">
              Demander une démo
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#problemes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Problèmes
              </a>
              <a href="#solution" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Solution
              </a>
              <a href="#ia" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Intelligence IA
              </a>
              <a href="#tarifs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Tarifs
              </a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="justify-start">
                  Connexion
                </Button>
                <Button size="sm">
                  Demander une démo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
