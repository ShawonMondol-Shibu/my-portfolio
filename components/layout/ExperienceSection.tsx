"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FaBriefcase } from "react-icons/fa"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-playfair text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <FaBriefcase className="text-primary" />
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experience and training in web development
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-all duration-300 animate-on-scroll border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl font-playfair text-primary">
                    Industrial Training in MERN-Stack Development
                  </CardTitle>
                  <CardDescription className="text-lg font-medium">BdCalling Academy</CardDescription>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  2024
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                As part of the industrial training program at BdCalling Academy, I am gaining hands-on experience and
                in-depth knowledge in web development technologies. This comprehensive training covers the full MERN
                stack including MongoDB, Express.js, React.js, and Node.js, along with modern development practices and
                industry standards.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline">MongoDB</Badge>
                <Badge variant="outline">Express.js</Badge>
                <Badge variant="outline">React.js</Badge>
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">Full-Stack Development</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
