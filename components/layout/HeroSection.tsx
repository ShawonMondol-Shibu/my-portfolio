"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { FaDownload } from "react-icons/fa"
import { ExternalLink, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  const [typewriterText, setTypewriterText] = useState("")
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const phrases = [
    "a Frontend Developer",
    "a MERN Stack Developer",
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

  return (
    <section id="home" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="container mx-auto text-center animate-on-scroll">
        <div className="inline-flex items-center space-x-2 bg-primary/20 px-4 py-2 rounded-full mb-6 animate-bounce">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Available for new projects</span>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative">
              <Image
                src="/images/shawon.png"
                alt="Shawon Mondol Shibu"
                width={200}
                height={200}
                className="rounded-full aspect-square object-cover object-center border-4 border-background shadow-2xl transform group-hover:scale-105 transition-all duration-300"
                priority
              />
            </div>
          </div>
        </div>

        <div className="min-h-[200px] flex flex-col items-center justify-center">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-2 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Hi, I am Shawon Mondol Shibu
          </h1>
          <h2 className="font-playfair text-2xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent min-h-[60px] flex items-center">
            <span className="inline-block">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </span>
          </h2>
        </div>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Frontend developer passionate about creating beautiful, functional, and user-friendly web applications using
          the latest technologies and best practices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200"
          >
            <a href="#projects" className="flex items-center">
              <ExternalLink className="w-4 h-4 mr-2" />
              View My Work
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-accent hover:text-accent-foreground transform hover:scale-105 transition-all duration-200 bg-transparent"
            asChild
          >
            <Link href={'/shawon-cv.pdf'} download={true}>
            <FaDownload className="w-4 h-4 mr-2" />
            Download Resume
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
