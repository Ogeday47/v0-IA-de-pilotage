"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, Bell, Plus, User, Settings, LogOut, Command, Menu } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useSidebar } from "@/components/dashboard/sidebar-context"

export function TopNavbar() {
  const [hasNotifications] = useState(true)
  const [notificationCount] = useState(3)
  const { toggleMobile } = useSidebar()
  const router = useRouter()

  const handleLogout = () => {
    router.push("/")
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border/60 bg-card/95 px-4 backdrop-blur-sm lg:px-6">
      {/* Mobile Menu Button */}
      <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleMobile}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">Menu</span>
      </Button>

      {/* Search */}
      <div className="relative hidden w-full max-w-md lg:block">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Rechercher un client, une échéance..."
          className="h-10 w-full border-border/60 bg-muted/40 pl-10 pr-20 text-sm placeholder:text-muted-foreground/70 focus:bg-background"
        />
        <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 select-none items-center gap-1 rounded-md border border-border bg-background px-2 py-0.5 text-[10px] font-medium text-muted-foreground sm:flex">
          <Command className="h-3 w-3" />K
        </kbd>
      </div>

      {/* Mobile Search Icon */}
      <Button variant="ghost" size="icon" className="lg:hidden">
        <Search className="h-5 w-5" />
        <span className="sr-only">Rechercher</span>
      </Button>

      {/* Actions */}
      <div className="flex items-center gap-2 lg:gap-3">
        {/* Add Client Button */}
        <Button className="hidden h-9 gap-2 rounded-lg px-4 text-sm font-medium shadow-sm sm:flex">
          <Plus className="h-4 w-4" />
          Nouveau client
        </Button>
        <Button size="icon" className="h-9 w-9 rounded-lg shadow-sm sm:hidden">
          <Plus className="h-4 w-4" />
          <span className="sr-only">Ajouter un client</span>
        </Button>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative h-9 w-9 rounded-lg">
          <Bell className="h-[18px] w-[18px]" />
          {hasNotifications && (
            <Badge 
              variant="destructive" 
              className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-semibold"
            >
              {notificationCount}
            </Badge>
          )}
          <span className="sr-only">Notifications</span>
        </Button>

        {/* Divider */}
        <div className="mx-1 hidden h-6 w-px bg-border/60 lg:block" />

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 gap-2 rounded-lg px-2 hover:bg-muted lg:px-3">
              <Avatar className="h-7 w-7 lg:h-8 lg:w-8">
                <AvatarImage src="/placeholder-user.jpg" alt="Marie Dupont" />
                <AvatarFallback className="bg-foreground text-[11px] font-semibold text-background">
                  MD
                </AvatarFallback>
              </Avatar>
              <div className="hidden flex-col items-start lg:flex">
                <span className="text-sm font-medium leading-none">Marie Dupont</span>
                <span className="text-[11px] text-muted-foreground">Administrateur</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1.5">
                <p className="text-sm font-semibold leading-none">Marie Dupont</p>
                <p className="text-xs leading-none text-muted-foreground">
                  marie@entreprise-demo.fr
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              Mon profil
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              <Settings className="h-4 w-4 text-muted-foreground" />
              Paramètres
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 text-destructive focus:text-destructive" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
              Déconnexion
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
