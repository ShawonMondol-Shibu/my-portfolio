"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Dashboard",
      description:
        "A modern admin dashboard built with Next.js and TypeScript, featuring real-time analytics and inventory management.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "shadcn/ui", "Recharts"],
      image: "/images/dashboard.png",
      demoUrl: "https://admin-panel-dashboard-puce.vercel.app/",
      githubUrl: "https://github.com/ShawonMondol-Shibu/Admin_Panel_Dashboard",
    },
    {
      title: "Furniro-Shop",
      description:
        "Furniture buying system. u can buy your favourite furniture by using this site ",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI"],
      image: "/images/furniro.png",
      demoUrl: "https://furniro-shop-gamma.vercel.app/",
      githubUrl: "https://github.com/ShawonMondol-Shibu/Furniro-shop",
    },
    {
      title: "Memorial-Magazine",
      description: "Explore Old days Memorys.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI"],
      image: "/images/memorial-magazine.png",
      demoUrl: "https://memorial-magazine.vercel.app/",
      githubUrl: "https://github.com/ShawonMondolShibu/memorial-magazine",
    },
    {
      title: "Discount ME",
      description:
        "Responsive portfolio website showcasing modern web development practices and clean design principles.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI"],
      image: "/images/restaurant.png",
      demoUrl: "https://restaurant-management-black-xi.vercel.app/",
      githubUrl: "https://github.com/ShawonMondol-Shibu/my-portfolio",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website showcasing modern web development practices and clean design principles.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI"],
      image: "/images/portfolio.png",
      demoUrl: "https://shawon-mondol-shibu.vercel.app/",
      githubUrl: "https://github.com/ShawonMondol-Shibu/my-portfolio",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-playfair text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions to complex
            problems
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-3 animate-on-scroll group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  height={500}
                  width={500}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      asChild
                    >
                      <Link href={project.demoUrl} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 bg-transparent"
                      asChild
                    >
                      <Link href={project.githubUrl} target="_blank">
                        <FaGithub className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-playfair group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
