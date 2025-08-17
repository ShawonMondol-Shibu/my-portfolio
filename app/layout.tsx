import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "next/font/google";
import { GeistMono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Shawon Mondol Shibu - Frontend Developer",
  description:
    "Professional portfolio of Shawon Mondol Shibu, a skilled frontend web developer specializing in React, Next.js, and modern web technologies.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  /* Added Playfair Display variable for headings */
  --font-playfair: ${playfair.variable};
}
        `}</style>
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
