"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(ready: boolean) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ready || !containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((el) => {
        const direction = el.dataset.direction || "up"
        const delay = parseFloat(el.dataset.delay || "0")

        const from: gsap.TweenVars = {
          opacity: 0,
          y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
          x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
          scale: direction === "scale" ? 0.85 : 1,
          rotateX: direction === "rotate" ? 15 : 0,
        }

        gsap.from(el, {
          ...from,
          duration: 1,
          delay,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 20%",
            toggleActions: "play none none none",
          },
        })
      })

      gsap.utils.toArray<HTMLElement>(".gsap-stagger").forEach((container) => {
        const children = container.children
        gsap.from(children, {
          opacity: 0,
          y: 40,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
      })

      gsap.utils.toArray<HTMLElement>(".gsap-parallax").forEach((el) => {
        const speed = parseFloat(el.dataset.speed || "0.3")
        gsap.to(el, {
          y: () => -ScrollTrigger.maxScroll(window) * speed,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        })
      })

      gsap.utils.toArray<HTMLElement>(".gsap-text-split").forEach((el) => {
        const text = el.textContent || ""
        el.textContent = ""
        text.split("").forEach((char) => {
          const span = document.createElement("span")
          span.textContent = char === " " ? "\u00A0" : char
          span.style.display = "inline-block"
          el.appendChild(span)
        })

        gsap.from(el.children, {
          opacity: 0,
          y: 20,
          rotateX: -90,
          stagger: 0.02,
          duration: 0.6,
          ease: "back.out(1.7)",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
      })

      gsap.utils.toArray<HTMLElement>(".gsap-scale-in").forEach((el) => {
        gsap.from(el, {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [ready])

  return containerRef
}
