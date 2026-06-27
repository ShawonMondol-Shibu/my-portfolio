"use client"

import { useEffect, useState } from "react"
import { ArrowDown, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScrollControls() {
  const [ready, setReady] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const [atBottom, setAtBottom] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    if (!ready) return

    const update = () => {
      const scrollTop = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setAtTop(scrollTop < 24)
      setAtBottom(maxScroll - scrollTop < 24)
    }

    const frame = requestAnimationFrame(update)
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [ready])

  if (!ready) return null

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2">
      <Button
        type="button"
        size="icon"
        variant="outline"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        disabled={atTop}
        className="size-11 rounded-full border-border/30 bg-background/20 text-muted-foreground hover:text-foreground hover:bg-background/40 shadow-lg backdrop-blur-md transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none"
      >
        <ArrowUp />
      </Button>
      <Button
        type="button"
        size="icon"
        variant="outline"
        onClick={scrollToBottom}
        aria-label="Scroll to bottom"
        disabled={atBottom}
        className="size-11 rounded-full border-border/30 bg-background/20 text-muted-foreground hover:text-foreground hover:bg-background/40 shadow-lg backdrop-blur-md transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none"
      >
        <ArrowDown />
      </Button>
    </div>
  )
}
