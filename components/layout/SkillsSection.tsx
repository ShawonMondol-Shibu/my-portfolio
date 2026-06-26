"use client"

import { useState } from "react"
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaNodeJs, FaGitAlt } from "react-icons/fa"
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSass,
  SiShadcnui,
  SiDaisyui,
  SiExpress,
  SiMongodb,
  SiFigma,
  SiVuedotjs,
} from "react-icons/si"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "backend" | "tools">("all")

  const tabs = [
    { key: "all", label: "All" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "tools", label: "Tools" },
  ] as const

  const allSkills = [
    { name: "HTML5", icon: FaHtml5, color: "oklch(0.65 0.2 30)", category: "frontend" as const },
    { name: "CSS3", icon: FaCss3Alt, color: "oklch(0.55 0.2 250)", category: "frontend" as const },
    { name: "JavaScript", icon: FaJs, color: "oklch(0.75 0.2 85)", category: "frontend" as const },
    { name: "TypeScript", icon: SiTypescript, color: "oklch(0.55 0.2 240)", category: "frontend" as const },
    { name: "React", icon: FaReact, color: "oklch(0.65 0.2 200)", category: "frontend" as const },
    { name: "Next.js", icon: SiNextdotjs, color: "oklch(0.25 0 0)", category: "frontend" as const },
    { name: "Vue.js", icon: SiVuedotjs, color: "oklch(0.6 0.2 145)", category: "frontend" as const },
    { name: "SCSS", icon: SiSass, color: "oklch(0.6 0.2 340)", category: "frontend" as const },
    { name: "Tailwind", icon: SiTailwindcss, color: "oklch(0.65 0.2 200)", category: "frontend" as const },
    { name: "shadcn/ui", icon: SiShadcnui, color: "oklch(0.65 0.25 330)", category: "frontend" as const },
    { name: "Daisy UI", icon: SiDaisyui, color: "oklch(0.6 0.2 145)", category: "frontend" as const },
    { name: "Node.js", icon: FaNodeJs, color: "oklch(0.6 0.2 145)", category: "backend" as const },
    { name: "Express.js", icon: SiExpress, color: "oklch(0.35 0 0)", category: "backend" as const },
    { name: "MongoDB", icon: SiMongodb, color: "oklch(0.55 0.2 145)", category: "backend" as const },
    { name: "Git", icon: FaGitAlt, color: "oklch(0.6 0.2 30)", category: "tools" as const },
    { name: "Figma", icon: SiFigma, color: "oklch(0.65 0.25 330)", category: "tools" as const },
  ]

  const filtered = activeTab === "all" ? allSkills : allSkills.filter((s) => s.category === activeTab)

  return (
    <section id="skills" className="py-18 md:py-20 px-4 relative">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 right-0 size-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 size-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10 gsap-reveal">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-neon">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hover over a skill to see more
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-10 flex-wrap gsap-reveal" data-direction="scale">
          {tabs.map((tab) => (
            <Button
              key={tab.key}
              type="button"
              variant={activeTab === tab.key ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab(tab.key)}
              aria-pressed={activeTab === tab.key}
              className={cn(
                "rounded-full px-5 transition-all duration-200",
                activeTab === tab.key
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card text-muted-foreground hover:text-foreground border-border/50"
              )}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 gsap-stagger">
          {filtered.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center size-24 md:size-28 rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.boxShadow = `0 0 30px ${skill.color}33, 0 0 60px ${skill.color}11`
                  el.style.borderColor = skill.color
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.boxShadow = ""
                  el.style.borderColor = ""
                }}
              >
                <Icon
                  className="size-7 md:size-8 transition-all duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                />
                <span className="text-[10px] md:text-xs font-medium text-muted-foreground mt-1.5 group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-card border border-border/50 text-xs text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 pointer-events-none z-10 shadow-xl backdrop-blur-sm hidden sm:block">
                  {skill.name}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
