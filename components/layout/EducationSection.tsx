"use client"

import { FaGraduationCap, FaBookOpen } from "react-icons/fa"
import { Code2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function EducationSection() {
  const education = [
    {
      period: "2021 — 2024",
      degree: "Diploma in Engineering in C.S.T",
      school: "Kishoreganj Polytechnic Institute",
      details: [
        { label: "Result", value: "3.00 out of 4.00" },
        { label: "Board", value: "BTEB" },
      ],
      icon: FaGraduationCap,
      color: "oklch(0.65 0.25 330)",
    },
    {
      period: "2020",
      degree: "S.S.C in Welding and Fabrication",
      school: "Netrakona Govt. TSC",
      details: [
        { label: "Board", value: "Technical" },
        { label: "GPA", value: "4.46 out of 5.00" },
      ],
      icon: FaBookOpen,
      color: "oklch(0.7 0.2 190)",
    },
    {
      period: "2024",
      degree: "Industrial Training in MERN-Stack Development",
      school: "BdCalling Academy",
      details: [
        { label: "Focus", value: "Full-stack development with MongoDB, Express, React, Node.js" },
      ],
      icon: Code2,
      color: "oklch(0.6 0.2 290)",
    },
  ]

  return (
    <section id="education" className="py-18 md:py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-0 left-1/2 size-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10 gsap-reveal">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Education <span className="text-neon">&</span> Training
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and continuous learning in technology
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {education.map((item, index) => {
              const Icon = item.icon
              const isLeft = index % 2 === 0

              return (
                <div
                  key={index}
                  className={cn(
                    "relative flex flex-col md:flex-row items-start gap-6 gsap-reveal",
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                  data-direction={isLeft ? "left" : "right"}
                >
                  <div className={cn("flex-1", isLeft && "md:text-right")}>
                    <div className="bg-card border border-border/50 rounded-2xl p-5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                      <span className="text-xs font-mono text-primary mb-2 block">{item.period}</span>
                      <h3 className="font-playfair text-lg font-bold mb-1">{item.degree}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.school}</p>
                      <div className={cn("flex flex-col gap-1", isLeft && "md:items-end")}>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-xs text-muted-foreground">
                            <span className="text-foreground font-medium">{detail.label}:</span> {detail.value}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-center">
                    <div
                      className="size-10 rounded-full flex items-center justify-center ring-4 ring-background shadow-xl"
                      style={{ backgroundColor: item.color }}
                    >
                      <Icon className="size-4 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
