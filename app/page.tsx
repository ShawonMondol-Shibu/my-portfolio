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
import HeroScene from "@/components/three/HeroScene"
import { useScrollReveal } from "@/lib/useGsap"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useScrollReveal()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="flex items-center justify-center h-screen">
          <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroScene />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <FunSection />
      <GithubProjects />
      <EducationSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
