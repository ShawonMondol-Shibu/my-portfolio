"use client"

import { useState } from "react"
import Image from "next/image"
import { Cpu, Gamepad2, Brain, Coffee, X, ArrowRight } from "lucide-react"

interface FunItem {
  title: string
  icon: typeof Cpu
  description: string
  details: string
  image?: string
  color: string
}

export default function FunSection() {
  const [selected, setSelected] = useState<FunItem | null>(null)

  const items: FunItem[] = [
    {
      title: "Hackintosh Builder",
      icon: Cpu,
      description: "Building and optimizing Hackintosh systems",
      details: "I specialize in building custom Hackintosh systems — running macOS on PC hardware. From selecting compatible components to tuning kexts and SSDTs, I've built several stable and powerful systems that rival real Macs.",
      color: "oklch(0.65 0.25 330)",
    },
    {
      title: "Gaming Setup",
      icon: Gamepad2,
      description: "Enthusiast gamer and setup builder",
      details: "Gaming is my go-to creative escape. I enjoy building optimized gaming setups, from cable management to performance tuning. Favorite genres: RPGs, strategy, and open-world adventures.",
      color: "oklch(0.7 0.2 190)",
    },
    {
      title: "INTJ-A Mindset",
      icon: Brain,
      description: "Architect personality type",
      details: "As an INTJ-A (Assertive Architect), I approach problems with strategy and big-picture thinking. I love designing systems, optimizing workflows, and building things that last. This personality type drives my methodical approach to development.",
      color: "oklch(0.6 0.2 290)",
    },
    {
      title: "Coffee Lover",
      icon: Coffee,
      description: "Fueled by good coffee and code",
      details: "A good cup of coffee is my coding companion. Whether it's espresso, pour-over, or cold brew — coffee fuels my late-night coding sessions and creative breakthroughs.",
      color: "oklch(0.75 0.2 30)",
    },
  ]

  return (
    <section id="fun" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 size-72 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 size-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Beyond the <span className="text-neon">Code</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The person behind the developer — hobbies, interests, and what makes me tick
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <button
                key={index}
                onClick={() => setSelected(item)}
                className="group text-left bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="size-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  <Icon className="size-6" />
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <div className="flex items-center gap-1.5 mt-3 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="size-3.5" />
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-card border border-border/50 rounded-2xl max-w-md w-full p-6 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className="size-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${selected.color}15`, color: selected.color }}
              >
                {<selected.icon className="size-6" />}
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>
            <h3 className="font-playfair text-xl font-bold mb-2">{selected.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{selected.details}</p>
          </div>
        </div>
      )}
    </section>
  )
}
