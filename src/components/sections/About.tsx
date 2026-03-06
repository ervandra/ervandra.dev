"use client";

import Image from "next/image";
import profile from "@/data/profile";
import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 lg:col-span-3">
            <AnimateIn variant="scaleIn">
              <div className="w-40 h-40 md:w-full md:h-auto mx-auto md:mx-0 rounded-2xl overflow-hidden ring-2 ring-zinc-200 dark:ring-zinc-700">
                <Image
                  src="/images/ervan.png"
                  alt="Ervandra Halim"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </AnimateIn>
          </div>

          <div className="md:col-span-8 lg:col-span-9">
            <AnimateIn>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6">
                About Me
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                Engineer at heart and product-minded. I help teams deliver clear
                technical direction, robust architecture, and thoughtful
                execution that moves the business forward.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                Currently I co-found and manage{" "}
                <a
                  href="https://syntax.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-zinc-900 dark:text-white hover:text-primary transition-colors"
                >
                  Syntax Solution
                </a>{" "}
                as CPTO (Chief Product & Technology Officer).
              </p>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-3 uppercase tracking-wide">
                Recently focused on
              </p>
            </AnimateIn>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {profile.recentSkills.map((skill) => (
                <StaggerItem key={skill}>
                  <div className="flex items-center gap-2 text-sm md:text-base text-zinc-700 dark:text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {skill}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
