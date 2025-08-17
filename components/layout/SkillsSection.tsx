"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa"
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiSass, SiShadcnui, SiDaisyui } from "react-icons/si"

export default function SkillsSection() {
  const skills = [
    { name: "HTML5", icon: FaHtml5, description: "Semantic markup and accessibility", color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, description: "Modern styling and animations", color: "text-blue-500" },
    { name: "SCSS", icon: SiSass, description: "Advanced CSS preprocessing", color: "text-pink-500" },
    { name: "ReactJS", icon: FaReact, description: "Component-based architecture", color: "text-cyan-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, description: "Tailwind CSS components", color: "text-cyan-500" },
    { name: "Next.js", icon: SiNextdotjs, description: "Full-stack React framework", color: "text-white" },
    { name: "TypeScript", icon: SiTypescript, description: "Type-safe JavaScript", color: "text-blue-600" },
    { name: "shadcn/ui", icon: SiShadcnui, description: "Modern component library", color: "text-purple-500" },
    { name: "Daisy UI", icon: SiDaisyui, description: "Tailwind CSS components", color: "text-green-500" },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-playfair text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise in modern frontend technologies and frameworks for building exceptional web experiences
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-on-scroll group border-l-4 border-l-transparent hover:border-l-primary"
            >
              <CardHeader className="text-center">
                <div className="relative">
                  <skill.icon
                    className={`w-12 h-12 mx-auto mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-200`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                  {skill.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{skill.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
