"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { FaDownload } from "react-icons/fa"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import HeroScene from "@/components/three/HeroScene"

const PHRASES = [
  "a Frontend Developer",
  "a MERN Stack Developer",
  "a Creative Developer",
  "a Problem Solver",
  "INTJ-A",
  "a Hackintosh Builder",
  "a Hackintosh Expert",
]

export default function HeroSection() {
  const [typewriterText, setTypewriterText] = useState("")
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentPhrase = PHRASES[currentPhraseIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 1000 : 2000

    const timeout = setTimeout(() => {
      if (!isDeleting && typewriterText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && typewriterText === "") {
        setIsDeleting(false)
        setCurrentPhraseIndex((prev) => (prev + 1) % PHRASES.length)
      } else if (isDeleting) {
        setTypewriterText(currentPhrase.substring(0, typewriterText.length - 1))
      } else {
        setTypewriterText(currentPhrase.substring(0, typewriterText.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [typewriterText, currentPhraseIndex, isDeleting])

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia("(pointer: coarse)").matches) return
    const btn = e.currentTarget
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = "translate(0, 0)"
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-svh flex items-center justify-center px-4 relative overflow-hidden pt-24 pb-16"
    >
      <HeroScene />
      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-8 gsap-reveal" data-direction="down">
          <span className="relative flex size-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full size-2.5 bg-secondary" />
          </span>
          <span className="text-sm font-medium text-secondary">Available for new projects</span>
        </div>

        <div className="mb-10 flex justify-center gsap-scale-in">
          <div className="relative group">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-50 blur-lg group-hover:opacity-80 transition-opacity duration-500 animate-spin" style={{ animationDuration: "8s" }} />
            <div className="relative rounded-full p-1 bg-background">
              <Image
                src="/images/shawon.png"
                alt="Shawon Mondol Shibu"
                width={168}
                height={168}
                sizes="(min-width: 768px) 168px, 136px"
                className="size-[136px] md:size-[168px] rounded-full object-cover object-center shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-8">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
            Hi, I am Shawon
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              Mondol Shibu
            </span>
          </h1>
          <h2 className="text-xl md:text-3xl font-light text-muted-foreground min-h-[40px] flex items-center justify-center">
            <span>
              {typewriterText}
              <span className="inline-block w-[3px] h-[1em] bg-secondary ml-1 animate-cursor-pulse" />
            </span>
          </h2>
        </div>

        <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed gsap-reveal" data-direction="up">
          Frontend developer passionate about creating beautiful, functional, and user-friendly web applications using
          the latest technologies and best practices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#projects" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-medium px-8 py-6 rounded-xl shadow-lg shadow-primary/25 transition-all duration-200">
              <ExternalLink data-icon="inline-start" />
              View My Work
            </Button>
          </a>
          <Link href="/shawon-cv.pdf" download onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 px-8 py-6 rounded-xl transition-all duration-200"
            >
              <FaDownload data-icon="inline-start" />
              Download Resume
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bob hidden sm:block" aria-hidden="true">
          <svg className="size-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
