"use client"

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4 py-6">
        <div className="grid gap-5 text-center md:grid-cols-3 md:items-center md:text-left">
          <div className="flex items-center justify-center gap-3 md:justify-start">
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

          <p className="text-xs text-muted-foreground md:text-center">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-2 md:justify-end">
            <a
              href="https://github.com/ShawonMondol-Shibu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="size-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
            >
              <FaGithub className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/shawon-mondol-142302294"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="size-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-all duration-200"
            >
              <FaLinkedin className="size-4" />
            </a>
            <a
              href="mailto:shawonmondolshibu@gmail.com"
              aria-label="Email"
              className="size-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
            >
              <FaEnvelope className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
