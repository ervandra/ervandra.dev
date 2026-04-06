"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/button";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* Accent radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/[0.04] blur-[100px]" />
      </div>

      {/* Architectural lines */}
      <div className="absolute top-[20%] left-0 w-[40%] h-px bg-gradient-to-r from-accent/[0.08] to-transparent hidden lg:block" />
      <div className="absolute bottom-[30%] right-0 w-[30%] h-px bg-gradient-to-l from-accent/[0.08] to-transparent hidden lg:block" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-[640px] mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="editorial-label"
          >
            Get Started
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 mb-6"
          >
            Let&apos;s architect
            <br />
            your next system.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-navy/45 text-[0.9375rem] leading-relaxed mb-10 max-w-[440px] mx-auto"
          >
            Book a free 30-minute strategy session. No obligation — just an
            honest conversation about where technology can take your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="accent"
              size="lg"
              href="https://calendly.com/ervandra/free-strategy"
              icon={<ArrowRight size={14} />}
            >
              Book Free Consultation
            </Button>
            <Button variant="secondary" href="mailto:hi@ervandra.com">
              Email me directly
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mono text-[0.625rem] text-navy/25 mt-8 tracking-wider"
          >
            hi@ervandra.com &middot; +62 877 0877 0800
          </motion.p>
        </div>
      </div>
    </section>
  );
}
