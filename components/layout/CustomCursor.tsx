"use client"

import { useEffect, useState, useRef } from "react"

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [clicking, setClicking] = useState(false)
  const [visible, setVisible] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const visibleRef = useRef(false)

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0)
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return

    const style = document.createElement("style")
    style.id = "cursor-hide-style"
    style.textContent = "body, a, button, input, textarea, select { cursor: none !important; }"
    document.head.appendChild(style)

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visibleRef.current) {
        visibleRef.current = true
        setVisible(true)
      }
    }
    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseenter", onEnter)

    return () => {
      style.remove()
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseenter", onEnter)
    }
  }, [])

  if (isTouch || !visible) return null

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] transition-transform duration-100"
        style={{
          left: pos.x - 4,
          top: pos.y - 4,
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "oklch(0.55 0.25 330)",
          boxShadow: "0 0 10px oklch(0.55 0.25 330 / 0.7), 0 0 20px oklch(0.55 0.25 330 / 0.3)",
          transform: clicking ? "scale(1.5)" : "scale(1)",
        }}
      />
      <div
        className="pointer-events-none fixed z-[9998] transition-all duration-150"
        style={{
          left: pos.x - 20,
          top: pos.y - 20,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid oklch(0.55 0.2 190 / 0.4)",
          transform: clicking ? "scale(1.4)" : "scale(1)",
          transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />
    </>
  )
}
