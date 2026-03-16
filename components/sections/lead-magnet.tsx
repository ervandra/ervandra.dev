"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FileCheck, Check } from "lucide-react";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, tags: "ai-checklist, lead-magnet, via-website" }),
      });
      setSubmitted(true);
      setEmail("");
    } catch { /* silent fail */ }
    setLoading(false);
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

            <p className="text-navy/45 text-[0.9375rem] leading-relaxed mb-8 max-w-[480px]">
              A practical, no-fluff guide to assess whether your business is
              ready for AI automation. Covers operations, data, team, and
              budget — in 15 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 text-[0.8125rem] text-navy/45">
              <div className="flex items-center gap-2">
                <FileCheck size={14} strokeWidth={1.5} className="text-accent" />
                <span>Actionable checklist</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck size={14} strokeWidth={1.5} className="text-accent" />
                <span>15-min assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck size={14} strokeWidth={1.5} className="text-accent" />
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
            <div className="bg-warm-gray/50 p-8 md:p-10 border border-navy/[0.04] relative noise-overlay overflow-hidden">
              {/* Accent top border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent/60 via-accent to-accent/60" />

              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-6"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                        className="w-12 h-12 bg-accent/10 flex items-center justify-center mx-auto mb-4"
                      >
                        <Check size={24} className="text-accent" />
                      </motion.div>
                      <p className="font-[family-name:var(--font-heading)] text-navy text-[1.125rem] font-semibold mb-2">
                        Thank you!
                      </p>
                      <p className="text-navy/45 text-[0.875rem]">
                        Check your inbox for the checklist.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div key="form" exit={{ opacity: 0 }}>
                      <p className="font-[family-name:var(--font-heading)] text-navy font-semibold text-[1rem] mb-2">
                        Get the free checklist
                      </p>
                      <p className="text-navy/35 text-[0.8125rem] mb-6">
                        Delivered straight to your inbox. No spam.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your email address"
                          required
                          disabled={loading}
                          className="w-full"
                        />
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full bg-accent text-navy px-8 py-3.5 mono font-semibold text-[0.6875rem] tracking-[0.06em] uppercase flex items-center justify-center gap-2 hover:bg-accent-light hover:shadow-[var(--shadow-accent)] transition-all duration-300 cursor-pointer disabled:opacity-50"
                        >
                          {loading ? (
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                          ) : (
                            <>
                              Download Free Checklist
                              <ArrowRight size={14} strokeWidth={2} />
                            </>
                          )}
                        </button>
                      </form>

                      <p className="mono text-[0.625rem] text-navy/25 mt-4 text-center tracking-wider">
                        Your privacy is protected. Unsubscribe anytime.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
