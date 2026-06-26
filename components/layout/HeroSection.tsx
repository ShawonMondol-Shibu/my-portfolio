"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { FaDownload } from "react-icons/fa"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const PARTICLE_COLORS = [
  "oklch(0.65 0.25 330)",
  "oklch(0.7 0.2 190)",
  "oklch(0.6 0.2 290)",
]

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  delay: number
  duration: number
  depth: number
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 4,
    color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
    delay: Math.random() * 5,
    duration: Math.random() * 4 + 4,
    depth: Math.random() * 0.5 + 0.5,
  }))
}

export default function HeroSection() {
  const [typewriterText, setTypewriterText] = useState("")
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const particles = useMemo(() => generateParticles(30), [])

  const phrases = [
    "a Frontend Developer",
    "a MERN Stack Developer",
    "a Creative Developer",
    "a Problem Solver",
    "INTJ-A",
    "a Hackintosh Builder",
    "a Hackintosh Expert",
  ]

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 1000 : 2000

    const timeout = setTimeout(() => {
      if (!isDeleting && typewriterText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && typewriterText === "") {
        setIsDeleting(false)
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
      } else if (isDeleting) {
        setTypewriterText(currentPhrase.substring(0, typewriterText.length - 1))
      } else {
        setTypewriterText(currentPhrase.substring(0, typewriterText.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [typewriterText, currentPhraseIndex, isDeleting, phrases])

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
        })
      }
    }
    window.addEventListener("mousemove", onMouseMove)
    return () => window.removeEventListener("mousemove", onMouseMove)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{ perspective: "800px", transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.25 330 / 0.3), oklch(0.7 0.2 190 / 0.2), oklch(0.6 0.2 290 / 0.15), transparent)",
            backgroundSize: "200% 200%",
            animation: "gradient-shift 6s ease infinite",
            transform: `translate(calc(-50% + ${mousePos.x * 20}px), calc(-50% + ${mousePos.y * 20}px))`,
          }}
        />
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              transform: `translate3d(${mousePos.x * (1 - p.depth) * 30}px, ${mousePos.y * (1 - p.depth) * 30}px, ${p.depth * 60 - 30}px)`,
              transition: "transform 0.15s ease-out",
            }}
          >
            <div
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                borderRadius: "50%",
                backgroundColor: p.color,
                boxShadow: `0 0 ${p.size * 2}px ${p.color}, 0 0 ${p.size * 4}px ${p.color}80`,
                animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-8 animate-fade-in-up">
          <span className="relative flex size-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full size-2.5 bg-secondary" />
          </span>
          <span className="text-sm font-medium text-secondary">Available for new projects</span>
        </div>

        <div className="mb-10 flex justify-center animate-scale-in">
          <div className="relative group">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-50 blur-lg group-hover:opacity-80 transition-opacity duration-500 animate-spin" style={{ animationDuration: "8s" }} />
            <div className="relative rounded-full p-1 bg-background">
              <Image
                src="/images/shawon.png"
                alt="Shawon Mondol Shibu"
                width={180}
                height={180}
                className="rounded-full aspect-square object-cover object-center shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-8">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold">
            {"Hi, I am Shawon".split("").map((char, i) => (
              <span
                key={i}
                className="inline-block animate-letter-reveal text-foreground"
                style={{
                  animation: `letter-reveal 0.6s ease forwards ${i * 0.04}s`,
                  opacity: 0,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
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

        <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          Frontend developer passionate about creating beautiful, functional, and user-friendly web applications using
          the latest technologies and best practices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <a href="#projects" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-medium px-8 py-6 rounded-xl shadow-lg shadow-primary/25 transition-all duration-200">
              <ExternalLink data-icon="inline-start" />
              View My Work
            </Button>
          </a>
          <Link href="/shawon-cv.pdf" download onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 px-8 py-6 rounded-xl transition-all duration-200"
            >
              <FaDownload data-icon="inline-start" className="text-secondary" />
              Download Resume
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bob">
          <svg className="size-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
