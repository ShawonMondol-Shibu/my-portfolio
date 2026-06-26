"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial } from "@react-three/drei"
import * as THREE from "three"

function Particles({ count = 200 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null!)
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [count])

  const sizes = useMemo(() => {
    const s = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      s[i] = Math.random() * 2 + 0.5
    }
    return s
  }, [count])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    mesh.current.rotation.y = time * 0.03
    mesh.current.rotation.x = Math.sin(time * 0.02) * 0.1
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#e879f9"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function FloatingGeometry() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <mesh position={[-4, 2, -3]}>
          <icosahedronGeometry args={[0.8, 1]} />
          <MeshDistortMaterial
            color="#c084fc"
            transparent
            opacity={0.3}
            distort={0.3}
            speed={2}
            wireframe
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={0.8} floatIntensity={1}>
        <mesh position={[4, -1, -4]}>
          <torusKnotGeometry args={[0.6, 0.2, 100, 16]} />
          <MeshDistortMaterial
            color="#22d3ee"
            transparent
            opacity={0.25}
            distort={0.2}
            speed={3}
            wireframe
          />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={2}>
        <mesh position={[0, 3, -5]}>
          <octahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color="#f472b6"
            transparent
            opacity={0.2}
            distort={0.4}
            speed={1.5}
            wireframe
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh position={[-3, -2, -6]}>
          <dodecahedronGeometry args={[0.7, 0]} />
          <MeshDistortMaterial
            color="#a78bfa"
            transparent
            opacity={0.2}
            distort={0.25}
            speed={2.5}
            wireframe
          />
        </mesh>
      </Float>

      <Float speed={0.8} rotationIntensity={0.4} floatIntensity={1.8}>
        <mesh position={[3, 3, -7]}>
          <torusGeometry args={[0.8, 0.3, 16, 32]} />
          <MeshDistortMaterial
            color="#67e8f9"
            transparent
            opacity={0.15}
            distort={0.15}
            speed={2}
            wireframe
          />
        </mesh>
      </Float>
    </>
  )
}

function MouseLight() {
  return <pointLight position={[0, 0, 5]} intensity={0.5} color="#e879f9" />
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <MouseLight />
        <Particles count={200} />
        <FloatingGeometry />
      </Canvas>
    </div>
  )
}
