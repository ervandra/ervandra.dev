"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/button";

const metrics = [
  { value: "15+", label: "Years in Tech" },
  { value: "50+", label: "Projects Shipped" },
  { value: "6", label: "Companies Led" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Architectural diagonal line */}
      <div className="absolute top-0 right-[20%] w-px h-[40vh] bg-gradient-to-b from-transparent via-navy/[0.07] to-transparent hidden lg:block" />
      <div className="absolute bottom-[10%] left-[15%] w-[30vw] h-px bg-gradient-to-r from-transparent via-navy/[0.05] to-transparent hidden lg:block" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 w-full pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          {/* Main Content — takes 8 cols */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="editorial-label">
                Strategic Tech Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-6 mb-8 max-w-[720px]"
            >
              I help businesses build
              <br className="hidden md:block" />{" "}
              <span className="relative inline-block">
                AI-powered systems
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-navy/20 origin-left"
                />
              </span>
              {" "}that scale.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-[1.125rem] md:text-[1.25rem] text-navy/60 max-w-[560px] leading-relaxed mb-10"
            >
              CPTO & Co-founder at Syntax. I lead digital transformation, AI
              automation, and custom implementations — removing operational
              burden with speed, accuracy, and visible results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" href="#contact">
                Book Free Consultation
              </Button>
              <Button variant="secondary" href="#work">
                See My Work
              </Button>
            </motion.div>
          </div>

          {/* Metrics Column — takes 4 cols, aligned right/bottom */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex lg:flex-col gap-8 lg:gap-0"
            >
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.7 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="lg:py-6 lg:border-t lg:border-navy/[0.08] first:lg:border-t-0"
                >
                  <span className="block font-[family-name:var(--font-heading)] text-navy text-[2.5rem] lg:text-[3rem] font-black leading-none tracking-tight">
                    {m.value}
                  </span>
                  <span className="block text-[0.75rem] tracking-[0.12em] uppercase text-slate mt-1 font-medium">
                    {m.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
