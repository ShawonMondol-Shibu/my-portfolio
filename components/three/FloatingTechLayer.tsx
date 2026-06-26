"use client"

import { useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Float, Html } from "@react-three/drei"
import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa"
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb } from "react-icons/si"
import { cn } from "@/lib/utils"

type TechItem = {
  name: string
  icon: typeof FaReact
  color: string
  position: [number, number, number]
  floatSpeed: number
  rotationIntensity: number
  floatIntensity: number
}

export default function FloatingTechLayer() {
  const [mounted, setMounted] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReducedMotion(media.matches)
    const frame = requestAnimationFrame(update)
    media.addEventListener("change", update)
    return () => {
      cancelAnimationFrame(frame)
      media.removeEventListener("change", update)
    }
  }, [])

  if (!mounted || reducedMotion) return null

  const items: TechItem[] = [
    { name: "React", icon: FaReact, color: "oklch(0.7 0.2 200)", position: [-6.2, 2.6, -2], floatSpeed: 1.6, rotationIntensity: 0.5, floatIntensity: 1.4 },
    { name: "Next.js", icon: SiNextdotjs, color: "oklch(0.22 0 0)", position: [6.2, 2.2, -3], floatSpeed: 1.2, rotationIntensity: 0.4, floatIntensity: 1.1 },
    { name: "TypeScript", icon: SiTypescript, color: "oklch(0.55 0.2 240)", position: [-5.8, -1.6, -2.5], floatSpeed: 1.8, rotationIntensity: 0.6, floatIntensity: 1.2 },
    { name: "Tailwind", icon: SiTailwindcss, color: "oklch(0.65 0.2 200)", position: [5.6, -2.2, -3.5], floatSpeed: 1.4, rotationIntensity: 0.45, floatIntensity: 1.3 },
    { name: "Node.js", icon: FaNodeJs, color: "oklch(0.6 0.2 145)", position: [-2.2, 4.2, -4], floatSpeed: 1.9, rotationIntensity: 0.55, floatIntensity: 1.5 },
    { name: "MongoDB", icon: SiMongodb, color: "oklch(0.55 0.2 145)", position: [2.4, 4.6, -4.5], floatSpeed: 1.7, rotationIntensity: 0.5, floatIntensity: 1.25 },
    { name: "Git", icon: FaGitAlt, color: "oklch(0.6 0.2 30)", position: [-1.8, -4.2, -5], floatSpeed: 1.3, rotationIntensity: 0.35, floatIntensity: 1.1 },
    { name: "Figma", icon: FaFigma, color: "oklch(0.65 0.25 330)", position: [1.8, -4.6, -5.2], floatSpeed: 1.5, rotationIntensity: 0.5, floatIntensity: 1.35 },
  ]

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 55 }}
        dpr={[1, 1.35]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 10]} intensity={0.8} />
        {items.map((item) => {
          const Icon = item.icon
          return (
            <Float
              key={item.name}
              speed={item.floatSpeed}
              rotationIntensity={item.rotationIntensity}
              floatIntensity={item.floatIntensity}
            >
              <group position={item.position}>
                <Html transform sprite distanceFactor={9} center>
                  <div
                    className={cn(
                      "flex items-center gap-2 rounded-full border border-border/70 bg-background/75 px-3 py-2 shadow-xl backdrop-blur-md",
                      "text-xs font-medium text-foreground"
                    )}
                    style={{
                      boxShadow: `0 0 28px ${item.color}20, 0 10px 30px rgba(0, 0, 0, 0.12)`,
                    }}
                  >
                    <Icon style={{ color: item.color }} />
                    <span>{item.name}</span>
                  </div>
                </Html>
              </group>
            </Float>
          )
        })}
      </Canvas>
    </div>
  )
}
