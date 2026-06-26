"use client"

import { useEffect, useState } from "react"
import Header from "@/components/layout/Header"
import HeroSection from "@/components/layout/HeroSection"
import SkillsSection from "@/components/layout/SkillsSection"
import ProjectsSection from "@/components/layout/ProjectsSection"
import ServicesSection from "@/components/layout/ServicesSection"
import FunSection from "@/components/layout/FunSection"
import GithubProjects from "@/components/layout/GithubProjects"
import EducationSection from "@/components/layout/EducationSection"
import ExperienceSection from "@/components/layout/ExperienceSection"
import ContactSection from "@/components/layout/ContactSection"
import Footer from "@/components/layout/Footer"
import { useScrollReveal } from "@/lib/useGsap"
import { LoaderCircle } from "lucide-react"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useScrollReveal(mounted)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="flex items-center justify-center h-screen">
          <LoaderCircle className="size-8 animate-spin text-primary" aria-label="Loading portfolio" />
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative z-10 min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <FunSection />
        <GithubProjects />
        <EducationSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
