import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import CustomCursor from "@/components/layout/CustomCursor"
import FloatingTechLayer from "@/components/three/FloatingTechLayer"
import ScrollControls from "@/components/layout/ScrollControls"
import { ThemeProvider } from "next-themes"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Shawon Mondol Shibu",
  description:
    "Professional portfolio of Shawon Mondol Shibu, a skilled frontend web developer specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "Shawon",
    "Mondol",
    "Shibu",
    "Shawon Mondol",
    "Shibu Mondol",
    "Shawon Shibu",
    "Shawon Mondol Shibu",
  ],
  generator: "shawon mondol shibu",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <FloatingTechLayer />
          <ScrollControls />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
