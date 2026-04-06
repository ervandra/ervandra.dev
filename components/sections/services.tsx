"use client";

import { motion } from "framer-motion";
import { Brain, Rocket, Handshake, Code } from "lucide-react";
import servicesData from "@/config/services";

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  brain: Brain,
  rocket: Rocket,
  handshake: Handshake,
  code: Code,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-20">
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="editorial-label"
            >
              Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4"
            >
              What I build
            </motion.h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-navy/45 text-[0.9375rem] leading-relaxed"
            >
              Engagements available directly or via Syntax Solution. Every
              project starts with understanding your business — then applying
              the right technology to move it forward.
            </motion.p>
          </div>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-navy/[0.04]">
          {servicesData.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group bg-white hover:bg-warm-gray/30 transition-all duration-500 p-8 md:p-10 lg:p-12 relative hover:shadow-[var(--shadow-md)] hover:-translate-y-1"
              >
                {/* Accent left border on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-[3px] bg-accent transition-all duration-500" />

                {/* Number */}
                <span className="mono text-[0.625rem] text-navy/15 group-hover:text-accent/60 absolute top-6 right-8 tracking-[0.1em] font-medium transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex items-start gap-4 mb-5">
                  {Icon && (
                    <div className="w-9 h-9 flex items-center justify-center text-navy/40 group-hover:text-accent-dark group-hover:bg-accent-muted transition-all duration-300 shrink-0 mt-0.5">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                  )}
                  <h3 className="text-[1.125rem] font-semibold leading-snug">
                    {service.title}
                  </h3>
                </div>

                <p className="text-navy/45 text-[0.875rem] leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-[0.8125rem] text-navy/50"
                    >
                      <span className="w-1 h-1 bg-accent/40 mt-[0.55rem] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-5 border-t border-navy/[0.04] group-hover:border-accent/10 transition-colors duration-500">
                  <p className="mono text-[0.6875rem] text-navy/30 group-hover:text-accent-dark/60 tracking-wide transition-colors duration-500">
                    {service.outcome}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
