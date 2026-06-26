"use client"

import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa"
import Image from "next/image"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-lg overflow-hidden ring-2 ring-primary/20">
              <Image
                src="/images/logo.png"
                width={40}
                height={40}
                alt="logo"
                className="size-full object-cover"
              />
            </div>
            <span className="font-playfair font-semibold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Shawon Mondol Shibu
            </span>
          </div>

          <p className="text-xs text-muted-foreground order-first md:order-none">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/ShawonMondol-Shibu"
              target="_blank"
              rel="noopener noreferrer"
              className="size-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
            >
              <FaGithub className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/shawon-mondol-142302294"
              target="_blank"
              rel="noopener noreferrer"
              className="size-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all duration-200"
            >
              <FaLinkedin className="size-4" />
            </a>
            <a
              href="mailto:shawonmondolshibu@gmail.com"
              className="size-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
            >
              <FaEnvelope className="size-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="size-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-all duration-200 ml-2"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
