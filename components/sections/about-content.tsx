"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/button";
import profile from "@/config/profile";
import { Briefcase, GraduationCap } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" as const },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export default function AboutContent() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <motion.span {...fade} className="editorial-label">About</motion.span>
              <motion.h1 {...fade} transition={{ ...fade.transition, delay: 0.1 }} className="mt-4 mb-8">
                Building technology<br />that moves businesses forward.
              </motion.h1>
              <motion.p {...fade} transition={{ ...fade.transition, delay: 0.2 }} className="text-[1.125rem] text-navy/60 leading-relaxed max-w-[540px] mb-6">
                {profile.intro}
              </motion.p>
              <motion.p {...fade} transition={{ ...fade.transition, delay: 0.25 }} className="text-[1.125rem] text-navy/60 leading-relaxed max-w-[540px]">
                Currently co-founding and leading{" "}
                <a href="https://syntax.id" target="_blank" rel="noopener noreferrer" className="text-navy font-semibold link-underline">Syntax Solution</a>{" "}
                as CPTO, overseeing product strategy, architecture, and delivery across industries.
              </motion.p>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="lg:col-span-4 lg:col-start-9">
              <div className="relative max-w-[320px] mx-auto lg:mx-0">
                <div className="absolute -top-3 -left-3 w-full h-full border border-navy/[0.1]" />
                <div className="relative overflow-hidden bg-warm-gray">
                  <Image src="/images/ervan.png" alt="Ervandra Halim" width={400} height={400} className="w-full h-auto" priority />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <motion.span {...fade} className="editorial-label">Expertise</motion.span>
          <motion.h2 {...fade} transition={{ ...fade.transition, delay: 0.1 }} className="mt-4 mb-12">What I bring to the table</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="editorial-label mb-6">Currently Focused On</p>
              <div className="space-y-0">
                {profile.recentSkills.map((skill, i) => (
                  <motion.div key={skill} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} className="flex items-center gap-3 py-3 border-b border-navy/[0.04]">
                    <span className="w-1.5 h-1.5 bg-navy/20 shrink-0" />
                    <span className="text-[0.9375rem] text-navy/70 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <p className="editorial-label mb-6">Full Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {profile.allSkills.map((skill, i) => (
                  <motion.span key={skill} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.02 }} className="text-[0.8125rem] text-navy/40 border border-navy/[0.08] px-3 py-1.5 font-medium hover:text-navy/70 hover:border-navy/20 transition-all duration-300">
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-20 md:py-28 bg-warm-gray/30 noise-overlay relative">
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase size={18} className="text-navy/30" strokeWidth={1.5} />
            <span className="editorial-label">Career Timeline</span>
          </div>
          <div className="space-y-0">
            {profile.experiences.map((exp, i) => (
              <motion.div key={exp.company} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.6, delay: i * 0.06 }} className="border-b border-navy/[0.06]">
                <div className="py-8 md:py-10">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                    <div className="md:col-span-3">
                      <h3 className="text-[1.375rem] font-bold">{exp.company}</h3>
                      {i === 0 && <span className="inline-block text-[0.6875rem] tracking-[0.1em] uppercase bg-navy text-white px-2 py-0.5 mt-2 font-medium">Current</span>}
                    </div>
                    <div className="md:col-span-9 space-y-6">
                      {exp.promotion.map((role, j) => (
                        <div key={role.title} className={j > 0 ? "pt-6 border-t border-navy/[0.04]" : ""}>
                          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                            <h4 className="font-[family-name:var(--font-heading)] text-navy font-bold text-[1rem]">{role.title}</h4>
                            <span className="text-[0.8125rem] text-navy/35 font-medium shrink-0">{role.year}</span>
                          </div>
                          <ul className="space-y-1.5">
                            {role.summary.map((item) => (
                              <li key={item} className="flex items-start gap-3 text-[0.9375rem] text-navy/50">
                                <span className="w-1 h-1 bg-navy/20 mt-[0.55rem] shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap size={18} className="text-navy/30" strokeWidth={1.5} />
            <span className="editorial-label">Education</span>
          </div>
          {profile.education.map((edu) => (
            <div key={edu.school} className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-3">
                <span className="text-[0.875rem] text-navy/35 font-medium">{edu.year}</span>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-[1.25rem] font-bold mb-1">{edu.title}</h3>
                <p className="text-navy/50">{edu.school}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-20 md:py-28 text-center">
        <div className="max-w-[560px] mx-auto px-6">
          <h2 className="mb-6">Let&apos;s work together</h2>
          <p className="text-navy/50 text-[1.0625rem] mb-10">Looking for a strategic tech partner? Let&apos;s talk about how I can help your business.</p>
          <Button variant="primary" href="https://calendly.com/ervandra/free-strategy">Book Free Consultation</Button>
        </div>
      </section>
    </>
  );
}
