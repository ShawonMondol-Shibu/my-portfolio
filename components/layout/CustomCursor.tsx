"use client"

import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false)
  const [visible, setVisible] = useState(false)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0
    if (hasTouch) {
      const frame = requestAnimationFrame(() => setIsTouch(true))
      return () => cancelAnimationFrame(frame)
    }

    const style = document.createElement("style")
    style.id = "cursor-hide-style"
    style.textContent = "body, a, button { cursor: none !important; }"
    document.head.appendChild(style)

    const updatePosition = () => {
      if (dotRef.current) {
        dotRef.current.style.left = `${posRef.current.x - 4}px`
        dotRef.current.style.top = `${posRef.current.y - 4}px`
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${posRef.current.x - 20}px`
        ringRef.current.style.top = `${posRef.current.y - 20}px`
      }
      rafRef.current = requestAnimationFrame(updatePosition)
    }

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      if (!visible) setVisible(true)
    }
    const onDown = () => {
      if (dotRef.current) dotRef.current.style.transform = "scale(1.5)"
      if (ringRef.current) ringRef.current.style.transform = "scale(1.4)"
    }
    const onUp = () => {
      if (dotRef.current) dotRef.current.style.transform = "scale(1)"
      if (ringRef.current) ringRef.current.style.transform = "scale(1)"
    }
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    rafRef.current = requestAnimationFrame(updatePosition)
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseenter", onEnter)

    return () => {
      cancelAnimationFrame(rafRef.current)
      style.remove()
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseenter", onEnter)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (isTouch || !visible) return null

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-50 transition-transform duration-100"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "oklch(0.55 0.25 330)",
          boxShadow: "0 0 10px oklch(0.55 0.25 330 / 0.7), 0 0 20px oklch(0.55 0.25 330 / 0.3)",
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-50"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid oklch(0.55 0.2 190 / 0.4)",
          transition: "transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />
    </>
  )
}
