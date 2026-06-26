"use client"

import { useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function seededRandom(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453
  return value - Math.floor(value)
}

function Particles({ count = 200 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null!)
  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const s = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (seededRandom(i + 1) - 0.5) * 20
      pos[i * 3 + 1] = (seededRandom(i + 2) - 0.5) * 20
      pos[i * 3 + 2] = (seededRandom(i + 3) - 0.5) * 10
      s[i] = seededRandom(i + 4) * 2 + 0.5
    }
    return [pos, s]
  }, [count])

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1))
    return geo
  }, [positions, sizes])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    mesh.current.rotation.y = time * 0.03
    mesh.current.rotation.x = Math.sin(time * 0.02) * 0.1
  })

  return (
    <points ref={mesh} geometry={geometry}>
      <pointsMaterial
        size={0.075}
        color="#e879f9"
        transparent
        opacity={0.85}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function MouseLight() {
  return <pointLight position={[0, 0, 5]} intensity={0.8} color="#e879f9" />
}

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(true)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none opacity-90">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        frameloop={inView ? "always" : "never"}
      >
        <ambientLight intensity={0.35} />
        <MouseLight />
        <Particles count={200} />
      </Canvas>
    </div>
  )
}
