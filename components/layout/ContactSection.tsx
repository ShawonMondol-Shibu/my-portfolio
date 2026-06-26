"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa"
import { Send, Sparkles, CheckCircle, XCircle, LoaderCircle } from "lucide-react"
import { useState } from "react"

const FORMSPREE_ID = "YOUR_FORMSPREE_ID"

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })
      if (!res.ok) throw new Error("Failed to send")
      setStatus("success")
      setFormState({ name: "", email: "", message: "" })
      setTimeout(() => setStatus("idle"), 4000)
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  const infoCards = [
    { icon: FaPhone, title: "Phone", value: "+880 1812-014377", href: "tel:+8801812014377" },
    { icon: FaEnvelope, title: "Email", value: "shawonmondolshibu@gmail.com", href: "mailto:shawonmondolshibu@gmail.com" },
    { icon: FaMapMarkerAlt, title: "Location", value: "2400 Netrakona, Mymensingh" },
  ]

  const socials = [
    { icon: FaFacebook, label: "Facebook", href: "https://www.facebook.com/shawon.mondol.797/" },
    { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shawon-mondol-142302294" },
    { icon: FaGithub, label: "GitHub", href: "https://github.com/ShawonMondol-Shibu" },
  ]

  return (
    <section id="contact" className="py-18 md:py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 size-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 size-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10 gsap-reveal">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-neon">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-4 gsap-reveal" data-direction="left">
            {infoCards.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="bg-card border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="flex items-center gap-3 text-base">
                      <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-4 text-primary" />
                      </div>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    {item.href ? (
                      <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    )}
                  </CardContent>
                </Card>
              )
            })}

            <Card className="bg-card border-border/50">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base">Social Links</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex gap-2">
                  {socials.map((social, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      size="icon"
                      className="border-border/30 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                        <social.icon />
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="lg:col-span-3 bg-card border-border/50 gsap-reveal" data-direction="right">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Sparkles className="size-5 text-primary" />
                Let&apos;s Work Together
              </CardTitle>
              <CardDescription>
                I&apos;m always interested in new opportunities and exciting projects.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder=" "
                      required
                      aria-required="true"
                      className="peer w-full px-3 pt-5 pb-2 border border-border/50 rounded-xl bg-background text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all outline-none"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-3 top-4 text-sm text-muted-foreground transition-all peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs"
                    >
                      Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder=" "
                      required
                      aria-required="true"
                      className="peer w-full px-3 pt-5 pb-2 border border-border/50 rounded-xl bg-background text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all outline-none"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-3 top-4 text-sm text-muted-foreground transition-all peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs"
                    >
                      Email
                    </label>
                  </div>
                </div>
                <div className="relative">
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    aria-required="true"
                    className="peer w-full px-3 pt-5 pb-2 border border-border/50 rounded-xl bg-background text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all outline-none resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-3 top-4 text-sm text-muted-foreground transition-all peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs"
                  >
                    Message
                  </label>
                </div>
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-medium py-5 rounded-xl shadow-lg shadow-primary/20 transition-all duration-200"
                >
                  {status === "sending" ? (
                    <span className="inline-flex items-center gap-2">
                      <LoaderCircle data-icon="inline-start" className="animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send data-icon="inline-start" />
                      Send Message
                    </>
                  )}
                </Button>
                <div aria-live="polite">
                  {status === "success" && (
                    <p className="flex items-center gap-2 text-sm text-secondary">
                      <CheckCircle className="size-4" /> Message sent successfully!
                    </p>
                  )}
                  {status === "error" && (
                    <p className="flex items-center gap-2 text-sm text-destructive">
                      <XCircle className="size-4" /> Failed to send. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
