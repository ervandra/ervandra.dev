"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileCheck } from "lucide-react";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — Offer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <span className="editorial-label">Free Resource</span>

            <h2 className="mt-4 mb-6">
              AI Readiness Checklist for SMEs
            </h2>

            <p className="text-navy/50 text-[1.0625rem] leading-relaxed mb-8 max-w-[480px]">
              A practical, no-fluff guide to assess whether your business is
              ready for AI automation. Covers operations, data, team, and
              budget — in 15 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 text-[0.875rem] text-navy/50">
              <div className="flex items-center gap-2">
                <FileCheck size={16} strokeWidth={1.5} className="text-navy/30" />
                <span>Actionable checklist</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck size={16} strokeWidth={1.5} className="text-navy/30" />
                <span>15-min assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck size={16} strokeWidth={1.5} className="text-navy/30" />
                <span>100% free</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <div className="bg-warm-gray/60 p-8 md:p-10 border border-navy/[0.06] relative noise-overlay">
              <div className="relative z-10">
                {submitted ? (
                  <div className="text-center py-6">
                    <p className="font-[family-name:var(--font-heading)] text-navy text-[1.25rem] font-bold mb-2">
                      Thank you.
                    </p>
                    <p className="text-navy/50 text-[0.9375rem]">
                      Check your inbox for the checklist.
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="font-[family-name:var(--font-heading)] text-navy font-bold text-[1.125rem] mb-2">
                      Get the free checklist
                    </p>
                    <p className="text-navy/40 text-[0.875rem] mb-6">
                      Delivered straight to your inbox. No spam.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        required
                        className="w-full"
                      />
                      <button
                        type="submit"
                        className="w-full bg-navy text-white px-8 py-4 font-[family-name:var(--font-body)] font-semibold text-[0.8125rem] tracking-[0.04em] uppercase flex items-center justify-center gap-2 hover:bg-navy-light transition-colors duration-300 cursor-pointer"
                      >
                        Download Free Checklist
                        <ArrowRight size={16} strokeWidth={2} />
                      </button>
                    </form>

                    <p className="text-[0.75rem] text-navy/30 mt-4 text-center">
                      Your privacy is protected. Unsubscribe anytime.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
