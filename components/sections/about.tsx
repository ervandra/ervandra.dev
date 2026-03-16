"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profile from "@/config/profile";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 relative"
          >
            <div className="relative max-w-[320px] mx-auto lg:mx-0">
              {/* Accent frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-accent/20" />
              <div className="absolute -top-1.5 -left-1.5 w-2 h-2 bg-accent" />
              <div className="relative overflow-hidden bg-warm-gray">
                <Image
                  src="/images/ervan.png"
                  alt="Ervandra Halim"
                  width={400}
                  height={400}
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="editorial-rule" />
                <span className="mono text-[0.625rem] text-navy/30 tracking-[0.12em] uppercase font-medium">
                  Gading Serpong, Indonesia
                </span>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="lg:col-span-7 lg:col-start-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="editorial-label">About</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              Architect at heart,
              <br />
              builder by trade.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 mb-12"
            >
              <p className="text-[0.9375rem] text-navy/55 leading-relaxed">
                {profile.intro}
              </p>
              <p className="text-[0.9375rem] text-navy/55 leading-relaxed">
                Currently co-founding and leading{" "}
                <a
                  href="https://syntax.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-dark font-semibold link-underline"
                >
                  Syntax Solution
                </a>{" "}
                as CPTO and{" "}
                <a
                  href="https://magnificat.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-dark font-semibold link-underline"
                >
                  Magnificat Consulthink
                </a>{" "}
                as co-founder — overseeing product strategy, technical
                architecture, and delivery for clients across industries.
              </p>
            </motion.div>

            {/* Skills grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="editorial-label mb-6">Core competencies</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0">
                {profile.recentSkills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.04 }}
                    className="group flex items-center gap-3 py-2.5 border-b border-navy/[0.04] hover:border-accent/15 transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 bg-accent/30 group-hover:bg-accent shrink-0 transition-colors duration-300" />
                    <span className="text-[0.875rem] text-navy/60 group-hover:text-navy font-medium transition-colors duration-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
