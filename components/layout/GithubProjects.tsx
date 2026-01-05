/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowUpRightFromSquareIcon } from "lucide-react";

interface repoType {
  id: number;
  name:string;
  html_url:string;
  description:string;
  visibility:string;
  updated_at:string;
}


export default function GithubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          "https://api.github.com/users/ShawonMondol-Shibu/repos"
        );
        if (!res.ok) throw new Error("Failed to fetch repositories");
        const data = await res.json();
        setRepos(data);
      } catch (err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  if (loading) {
    return <p className="text-center my-10">Loading projects...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <main className="container mx-auto my-16 px-4">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-3">GitHub Projects</h1>
        <p className="text-muted-foreground">
          Here you’ll find a collection of my GitHub projects, where I experiment,
          build, and solve real-world problems using modern web technologies.
        </p>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((repo:repoType) => (
          <Card
            key={repo.id}
            className="transition hover:shadow-lg hover:-translate-y-1"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{repo.name}</CardTitle>

                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-muted-foreground hover:text-black"
                >
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    aria-label="Open GitHub Repository"
                  >
                    <ArrowUpRightFromSquareIcon className="size-4" />
                  </Link>
                </Button>
              </div>

              {repo.description && (
                <p className="text-sm text-muted-foreground mt-2">
                  {repo.description}
                </p>
              )}
            </CardHeader>

            <CardContent className="flex items-center justify-between">
              <Badge variant="outline">{repo.visibility}</Badge>
              <span className="text-xs text-muted-foreground">
                Updated {new Date(repo.updated_at).toLocaleDateString()}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
