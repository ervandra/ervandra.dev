"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/button";
import projectsData from "@/config/projects";

export default function WorkContent() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="editorial-label">Portfolio</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="mt-4 mb-8 max-w-[640px]">
            Projects &amp; impact
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-[1.125rem] text-navy/50 max-w-[540px] leading-relaxed">
            A selection of projects across enterprise, fintech, e-commerce, and digital transformation.
          </motion.p>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-0">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="border-t border-navy/[0.1]">
            {projectsData.map((project, i) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }} className="group border-b border-navy/[0.1] py-10 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                  <div className="md:col-span-1">
                    <span className="text-[0.6875rem] tracking-[0.15em] uppercase text-navy/25 font-medium">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-[1.5rem] font-bold leading-tight group-hover:translate-x-1 transition-transform duration-500">
                      {project.title}
                      <ArrowUpRight size={16} className="inline-block ml-2 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    </h3>
                    <p className="text-[0.875rem] text-navy/40 mt-1 font-medium">{project.client}</p>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-[1rem] text-navy/50 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="md:col-span-3 flex flex-wrap gap-2 md:justify-end">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[0.6875rem] tracking-[0.08em] uppercase text-navy/30 border border-navy/[0.08] px-3 py-1 font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mt-16" />

      <section className="py-20 md:py-28 text-center">
        <div className="max-w-[560px] mx-auto px-6">
          <h2 className="mb-6">Want similar results?</h2>
          <p className="text-navy/50 text-[1.0625rem] mb-10">Let&apos;s discuss your project and explore how I can help.</p>
          <Button variant="primary" href="https://calendly.com/ervandra/free-strategy">Book Free Consultation</Button>
        </div>
      </section>
    </>
  );
}
