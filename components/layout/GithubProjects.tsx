"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import Link from "next/link"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Skeleton } from "../ui/skeleton"
import { ArrowUpRightFromSquareIcon, GitForkIcon, StarIcon, AlertCircle, RotateCw } from "lucide-react"
import { cn } from "@/lib/utils"

interface repoType {
  id: number
  name: string
  html_url: string
  description: string
  visibility: string
  updated_at: string
  stargazers_count: number
  forks_count: number
  language: string | null
}

export default function GithubProjects() {
  const [repos, setRepos] = useState<repoType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<"updated" | "stars">("updated")

  async function fetchRepos() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("https://api.github.com/users/ShawonMondol-Shibu/repos?per_page=30&sort=updated")
      if (!res.ok) throw new Error("Failed to fetch repositories")
      const data = await res.json()
      setRepos(data)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRepos()
  }, [])

  const sorted = [...repos].sort((a, b) =>
    sortBy === "stars" ? b.stargazers_count - a.stargazers_count
    : new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  )

  if (loading) {
    return (
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              GitHub <span className="text-neon">Projects</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="bg-card/50 border-border/30">
                <CardHeader>
                  <Skeleton className="h-5 w-2/3 mb-2" />
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-4/5 mt-1" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-1/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex flex-col items-center gap-4">
            <AlertCircle className="size-12 text-destructive" />
            <p className="text-muted-foreground">{error}</p>
            <Button variant="outline" onClick={fetchRepos} className="gap-2">
              <RotateCw />
              Retry
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            GitHub <span className="text-neon">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here you&apos;ll find a collection of my GitHub projects, where I experiment,
            build, and solve real-world problems.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-10 animate-on-scroll">
          <button
            onClick={() => setSortBy("updated")}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              sortBy === "updated"
                ? "bg-gradient-to-r from-primary to-accent text-white"
                : "bg-card text-muted-foreground border border-border/50"
            )}
          >
            Recently Updated
          </button>
          <button
            onClick={() => setSortBy("stars")}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              sortBy === "stars"
                ? "bg-gradient-to-r from-primary to-accent text-white"
                : "bg-card text-muted-foreground border border-border/50"
            )}
          >
            Most Stars
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((repo, i) => (
            <Card
              key={repo.id}
              className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 animate-on-scroll"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base font-playfair">{repo.name}</CardTitle>
                  <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary shrink-0">
                    <Link href={repo.html_url} target="_blank" aria-label="Open GitHub Repository">
                      <ArrowUpRightFromSquareIcon />
                    </Link>
                  </Button>
                </div>
                {repo.description && (
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{repo.description}</p>
                )}
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <span className="text-xs text-muted-foreground">{repo.language}</span>
                    )}
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <StarIcon className="size-3" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <GitForkIcon className="size-3" />
                      {repo.forks_count}
                    </span>
                  </div>
                  <Badge variant="outline" className="text-[10px] border-border/30">
                    {repo.visibility}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
