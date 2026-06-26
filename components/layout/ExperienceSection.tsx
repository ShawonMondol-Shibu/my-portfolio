"use client"

import { Badge } from "@/components/ui/badge"
import { FaBriefcase } from "react-icons/fa"

export default function ExperienceSection() {
  const experiences = [
    {
      period: "2024",
      role: "Industrial Training in MERN-Stack Development",
      company: "BdCalling Academy",
      description:
        "As part of the industrial training program at BdCalling Academy, I am gaining hands-on experience and in-depth knowledge in web development technologies. This comprehensive training covers the full MERN stack including MongoDB, Express.js, React.js, and Node.js, along with modern development practices and industry standards.",
      tags: [
        "MongoDB",
        "Mongoose",
        "Express.js",
        "React.js",
        "Next.js",
        "Node.js",
        "Full-Stack Development",
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 px-4 bg-card/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-14 animate-on-scroll">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <FaBriefcase className="text-primary" />
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experience and training in web development
          </p>
        </div>

        <div className="relative animate-on-scroll">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-10 pb-2">
              <div
                className="absolute left-2.5 top-1 size-3 rounded-full ring-4 ring-background"
                style={{ backgroundColor: "oklch(0.65 0.25 330)" }}
              />

              <div className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                  <div>
                    <span className="text-xs font-mono text-primary mb-1 block">{exp.period}</span>
                    <h3 className="font-playfair text-xl font-bold">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">{exp.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="border-border/30 text-xs hover:bg-primary/10 hover:border-primary/30 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
