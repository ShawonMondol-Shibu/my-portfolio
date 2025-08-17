"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FaGraduationCap } from "react-icons/fa"
import { Code2 } from "lucide-react"

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-playfair text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <FaGraduationCap className="text-primary" />
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and continuous learning in technology
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="hover:shadow-lg transition-all duration-300 animate-on-scroll">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl font-playfair text-primary">Diploma in Engineering in C.S.T</CardTitle>
                  <CardDescription className="text-lg font-medium">Kishoreganj Polytechnic Institute</CardDescription>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  2021-2024
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Result:</span> 3.00 out of 4.00
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Board:</span> BTEB
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 animate-on-scroll">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl font-playfair text-primary">S.S.C in Welding and Fabrication</CardTitle>
                  <CardDescription className="text-lg font-medium">Netrakona Govt. TSC</CardDescription>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  2020
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Board:</span> Technical
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">GPA:</span> 4.46 out of 5.00
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 animate-on-scroll border-l-4 border-l-accent">
            <CardHeader>
              <CardTitle className="text-xl font-playfair text-accent flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                Relevant Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Industrial Training in MERN-Stack Development</span> at
                BdCalling Academy
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
