"use client"

import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  const projects = [
    {
      title: "Shibu-hub",
      description: "An online shop for electronics, shipping support, and delivery services.",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn UI", "Recharts", "TanStack Query"],
      image: "/images/shibu-hub.png",
      demoUrl: "https://shibu-hub.vercel.app/",
      githubUrl: "https://github.com/ShawonMondol-Shibu/ShibuHub.git",
    },
    {
      title: "Furniro-Shop",
      description: "A furniture shopping experience with product browsing and checkout flows.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Clerk Auth"],
      image: "/images/furniro.png",
      demoUrl: "https://furniro-shop-gamma.vercel.app/",
      githubUrl: "https://github.com/ShawonMondol-Shibu/Furniro-shop",
    },
    {
      title: "E-commerce Dashboard",
      description: "A modern admin dashboard built with Next.js and TypeScript, featuring real-time analytics.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "shadcn/ui", "Recharts"],
      image: "/images/dashboard.png",
      demoUrl: "https://admin-panel-dashboard-puce.vercel.app/",
      githubUrl: "https://github.com/ShawonMondol-Shibu/Admin_Panel_Dashboard",
    },
    {
      title: "Memorial-Magazine",
      description: "A digital memorial magazine for preserving and exploring shared memories.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI"],
      image: "/images/memorial-magazine.png",
      demoUrl: "https://memorial-magazine.vercel.app/",
      githubUrl: "https://github.com/ShawonMondolShibu/memorial-magazine",
    },
    {
      title: "Discount ME",
      description: "A restaurant booking and food ordering website.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI"],
      image: "/images/restaurant.png",
      demoUrl: "https://restaurant-management-black-xi.vercel.app/",
      githubUrl: "https://github.com/ShawonMondolShibu/Restaurant-Management",
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio showcasing modern web development practices.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI"],
      image: "/images/portfolio.png",
      demoUrl: "https://shawon-mondol-shibu.vercel.app/",
      githubUrl: "https://github.com/ShawonMondol-Shibu/my-portfolio",
    },
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (window.matchMedia("(pointer: coarse)").matches) return
    const card = cardsRef.current[index]
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 15
    const rotateY = (centerX - x) / 15
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`
  }

  const handleMouseLeave = (index: number) => {
    const card = cardsRef.current[index]
    if (!card) return
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)"
  }

  return (
    <section id="projects" className="py-18 md:py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 gsap-reveal">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-neon">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions to complex problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gsap-stagger">
          {projects.map((project, index) => (
            <div
              key={index}
              className="gsap-reveal"
            >
              <div
                ref={(el) => { cardsRef.current[index] = el }}
                className="transition-transform duration-200 ease-out"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
              <Card className="overflow-hidden h-full bg-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                      <Button size="sm" className="bg-primary hover:bg-primary/80 text-primary-foreground" asChild>
                        <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink data-icon="inline-start" />
                          Live
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" className="border-border/50 bg-background/50 backdrop-blur-sm" asChild>
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <FaGithub data-icon="inline-start" />
                          Code
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-playfair text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs border-border/30 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 md:hidden">
                    <Button size="sm" className="flex-1" asChild>
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink data-icon="inline-start" />
                        Live
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <FaGithub data-icon="inline-start" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
