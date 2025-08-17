"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/layout/HeroSection";
import SkillsSection from "@/components/layout/SkillsSection";
import ProjectsSection from "@/components/layout/ProjectsSection";
import EducationSection from "@/components/layout/EducationSection";
import ExperienceSection from "@/components/layout/ExperienceSection";
import ContactSection from "@/components/layout/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
