"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import projectsData from "@/config/projects";

const featured = projectsData.filter((p) => p.featured);

export default function FeaturedWork() {
  return (
    <section id="work" className="relative py-24 md:py-32 bg-warm-gray/30 noise-overlay">
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="editorial-label"
            >
              Selected Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4"
            >
              Projects &amp; Impact
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-navy/40 text-[0.8125rem] tracking-[0.06em] uppercase font-medium"
          >
            {projectsData.length} Projects Delivered
          </motion.p>
        </div>

        {/* Project list — editorial style with horizontal rules */}
        <div className="border-t border-navy/[0.1]">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group border-b border-navy/[0.1] py-8 md:py-10 cursor-default"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                {/* Number + Client */}
                <div className="md:col-span-2">
                  <span className="text-[0.6875rem] tracking-[0.15em] uppercase text-navy/30 font-medium">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[0.8125rem] text-navy/50 mt-1 font-medium">
                    {project.client}
                  </p>
                </div>

                {/* Title */}
                <div className="md:col-span-4">
                  <h3 className="text-[1.375rem] md:text-[1.5rem] font-bold leading-tight group-hover:translate-x-1 transition-transform duration-500">
                    {project.title}
                    <ArrowUpRight
                      size={18}
                      className="inline-block ml-2 opacity-0 -translate-y-1 translate-x-[-4px] group-hover:opacity-40 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500"
                    />
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-4">
                  <p className="text-[0.9375rem] text-navy/50 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="md:col-span-2 flex flex-wrap gap-2 md:justify-end">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.6875rem] tracking-[0.08em] uppercase text-navy/35 border border-navy/[0.08] px-3 py-1 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
