"use client"

import { useState } from "react"
import { Code2, Palette, Search, Wrench, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface Service {
  title: string
  icon: typeof Code2
  description: string
  details: string[]
  color: string
  gradient: string
}

export default function ServicesSection() {
  const [flipped, setFlipped] = useState<number | null>(null)

  const services: Service[] = [
    {
      title: "Web Development",
      icon: Code2,
      description: "Full-stack web applications with modern tech",
      details: [
        "Custom websites and web apps",
        "Responsive and accessible design",
        "Performance optimization",
        "API integration and development",
      ],
      color: "oklch(0.65 0.25 330)",
      gradient: "from-primary/20 via-accent/10 to-transparent",
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      description: "Beautiful interfaces with great user experience",
      details: [
        "Wireframing and prototyping",
        "Visual design and branding",
        "User experience optimization",
        "Design system creation",
      ],
      color: "oklch(0.7 0.2 190)",
      gradient: "from-secondary/20 via-primary/10 to-transparent",
    },
    {
      title: "SEO & Optimization",
      icon: Search,
      description: "Make your site fast and discoverable",
      details: [
        "Technical SEO audit",
        "Performance optimization",
        "Core Web Vitals improvement",
        "Search engine visibility",
      ],
      color: "oklch(0.6 0.2 290)",
      gradient: "from-accent/20 via-secondary/10 to-transparent",
    },
    {
      title: "Maintenance & Support",
      icon: Wrench,
      description: "Keep your project running smoothly",
      details: [
        "Bug fixes and updates",
        "Security patches",
        "Feature additions",
        "24/7 monitoring support",
      ],
      color: "oklch(0.75 0.2 30)",
      gradient: "from-primary/20 via-accent/10 to-transparent",
    },
  ]

  return (
    <section id="services" className="py-24 px-4 bg-card/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            What I <span className="text-neon">Do</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Services I offer to help bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon
            const isFlipped = flipped === index

            return (
              <div
                key={index}
                className="relative h-[280px] animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setFlipped(index)}
                onMouseLeave={() => setFlipped(null)}
              >
                <div
                  className={cn(
                    "absolute inset-0 transition-all duration-500 [transform-style:preserve-3d]",
                    isFlipped && "[transform:rotateY(180deg)]"
                  )}
                >
                  <div
                    className="absolute inset-0 rounded-2xl bg-card border border-border/50 p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden] bg-gradient-to-b"
                    style={{ backgroundImage: `linear-gradient(to bottom, ${service.color}15, transparent)` }}
                  >
                    <div
                      className="size-14 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${service.color}15`, color: service.color }}
                    >
                      <Icon className="size-7" />
                    </div>
                    <h3 className="font-playfair text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                    <p className="text-xs text-primary mt-3 flex items-center gap-1">
                      Hover to see details <ArrowRight className="size-3" />
                    </p>
                  </div>

                  <div
                    className="absolute inset-0 rounded-2xl bg-card border border-primary/20 p-6 flex flex-col justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]"
                    style={{ boxShadow: `0 0 30px ${service.color}15` }}
                  >
                    <h3 className="font-playfair text-base font-semibold mb-3">{service.title}</h3>
                    <ul className="flex flex-col gap-2">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="size-3.5 mt-0.5 shrink-0" style={{ color: service.color }} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10 animate-on-scroll">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition-all duration-200 shadow-lg shadow-primary/20"
          >
            Let&apos;s Work Together <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
