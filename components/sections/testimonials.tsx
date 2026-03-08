"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import profile from "@/config/profile";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 md:py-32 bg-navy noise-overlay overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.02),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="editorial-label !text-white/25"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 !text-white"
          >
            What people say
          </motion.h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px">
          {profile.testimonials.slice(0, 6).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`bg-white/[0.03] border border-white/[0.04] p-8 md:p-10 hover:bg-white/[0.06] transition-colors duration-500 ${
                i === 0 ? "md:row-span-2 flex flex-col justify-between" : ""
              }`}
            >
              <div>
                <Quote
                  size={18}
                  className="text-white/8 mb-4"
                  strokeWidth={1}
                />
                <p
                  className={`text-white/60 leading-relaxed mb-8 ${
                    i === 0
                      ? "text-[1.0625rem] font-[family-name:var(--font-heading)] font-light leading-[1.7]"
                      : "text-[0.875rem]"
                  }`}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 overflow-hidden shrink-0 grayscale">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white/80 text-[0.8125rem] font-semibold">
                    {t.name}
                  </p>
                  <p className="mono text-white/30 text-[0.625rem] tracking-wider">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}
