"use client"

import { Button } from "@/components/ui/button"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center space-x-2 mb-4">
          <div className="w-14 h-14 rounded-lg flex items-center justify-center">
            <Image src={'/images/logo.png'} width={500} height={500} alt="this website's logo"/>
          </div>
          <span className="font-playfair font-semibold text-primary">Shawon Mondol Shibu</span>
        </div>
        <p className="text-muted-foreground mb-4">© 2024 Shawon Mondol Shibu. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            <FaGithub className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-blue-700 hover:text-white transition-colors duration-200"
          >
            <FaLinkedin className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            <FaEnvelope className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
