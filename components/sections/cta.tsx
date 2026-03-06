"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* Architectural lines */}
      <div className="absolute top-[20%] left-0 w-[40%] h-px bg-gradient-to-r from-navy/[0.04] to-transparent hidden lg:block" />
      <div className="absolute bottom-[30%] right-0 w-[30%] h-px bg-gradient-to-l from-navy/[0.04] to-transparent hidden lg:block" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-[680px] mx-auto text-center">
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
            Ready to transform
            <br />
            your business?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-navy/50 text-[1.0625rem] leading-relaxed mb-10 max-w-[480px] mx-auto"
          >
            Book a free 30-minute strategy session. No obligation — just a
            conversation about where technology can take your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="primary" href="https://calendly.com/ervandra/free-strategy">
              Book Free Consultation
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button variant="secondary" href="mailto:hi@ervandra.com">
              Or email me directly
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-[0.8125rem] text-navy/30 mt-8"
          >
            hi@ervandra.com &middot; +62 877 0877 0800
          </motion.p>
        </div>
      </div>
    </section>
  );
}
