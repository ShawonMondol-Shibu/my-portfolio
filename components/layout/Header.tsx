"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -70% 0px" }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [mounted])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#fun", label: "Fun" },
    { href: "#contact", label: "Contact" },
  ]

  const handleNavClick = () => setIsMobileMenuOpen(false)
  const menuId = "mobile-navigation"

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex h-14 items-center justify-between px-4">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="size-10 rounded-lg overflow-hidden ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all duration-300">
            <Image
              src="/images/logo.png"
              width={40}
              height={40}
              alt="logo"
              className="size-full object-cover"
            />
          </div>
          <span className="font-playfair text-lg font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Shawon
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors duration-200 relative group",
                activeSection === item.href.slice(1)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
              <span className={cn(
                "absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary to-accent transition-transform duration-200 origin-left",
                activeSection === item.href.slice(1) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              )} />
            </a>
          ))}
          {mounted && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2 hover:bg-primary/10 text-muted-foreground hover:text-primary"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>
          )}
        </nav>

        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-primary/10 text-muted-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="hover:bg-primary/10 text-muted-foreground"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls={menuId}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <div className={cn(
        "md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl overflow-hidden transition-all duration-300",
        isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}
        id={menuId}
      >
        <nav className="container py-4 flex flex-col gap-1 px-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={cn(
                  "block py-2.5 px-3 text-sm font-medium rounded-lg transition-all duration-200",
                  activeSection === item.href.slice(1)
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
      </div>
    </header>
  )
}
