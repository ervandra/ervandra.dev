"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import profile from "@/config/profile";

const metrics = [
  { value: "15+", label: "Years" },
  { value: "50+", label: "Projects" },
  { value: "20+", label: "Team Size" },
  { value: "6", label: "Companies" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Architectural grid lines */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-0 left-[16.666%] w-px h-full bg-navy/[0.03]" />
        <div className="absolute top-0 left-[33.333%] w-px h-full bg-navy/[0.03]" />
        <div className="absolute top-0 left-[50%] w-px h-full bg-navy/[0.03]" />
        <div className="absolute top-0 left-[66.666%] w-px h-full bg-navy/[0.03]" />
        <div className="absolute top-0 left-[83.333%] w-px h-full bg-navy/[0.03]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 w-full pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Top label bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="editorial-rule" />
          <span className="mono text-[0.6875rem] tracking-[0.12em] uppercase text-slate font-medium">
            {profile.title}
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-[900px] mb-10"
        >
          {profile.headline}
        </motion.h1>

        {/* Subtext + CTA row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-[1rem] md:text-[1.0625rem] text-navy/50 leading-relaxed mb-8 max-w-[480px]">
              {profile.intro}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" href="/book">
                Book a Conversation
              </Button>
              <Button variant="secondary" href="#work">
                View Work
              </Button>
            </div>
          </motion.div>

          {/* Philosophy statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:col-start-8 flex items-end"
          >
            <div className="border-l-2 border-navy/10 pl-6">
              <p className="mono text-[0.75rem] text-navy/30 uppercase tracking-[0.1em] mb-3">
                Methodology
              </p>
              <p className="text-[1.125rem] md:text-[1.25rem] text-navy/70 font-[family-name:var(--font-heading)] font-medium leading-snug tracking-tight">
                {profile.mission}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Metrics bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 border-t border-navy/[0.08]"
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.8 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="py-6 md:py-8 border-b md:border-b-0 md:border-r border-navy/[0.08] last:border-r-0 last:border-b-0 [&:nth-child(2)]:border-b-0 md:[&:nth-child(2)]:border-b-0"
            >
              <span className="block font-[family-name:var(--font-heading)] text-navy text-[2.5rem] md:text-[3.5rem] font-bold leading-none tracking-tighter">
                {m.value}
              </span>
              <span className="block mono text-[0.6875rem] tracking-[0.12em] uppercase text-slate mt-2 font-medium">
                {m.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
