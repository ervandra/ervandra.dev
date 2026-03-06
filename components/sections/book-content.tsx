"use client";

import { motion } from "framer-motion";
import { Clock, Video, Shield } from "lucide-react";

export default function BookContent() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="editorial-label">Free Consultation</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="mt-4 mb-8">
              Book a strategy session
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-[1.0625rem] text-navy/50 leading-relaxed mb-10">
              30 minutes to discuss your business goals, technology challenges, and how I can help. No obligation, no sales pitch &mdash; just an honest conversation.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-4">
              {[
                { icon: Clock, text: "30 minutes, focused and actionable" },
                { icon: Video, text: "Video call via Google Meet or Zoom" },
                { icon: Shield, text: "100% free, no obligation" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={16} strokeWidth={1.5} className="text-navy/30 shrink-0" />
                  <span className="text-[0.9375rem] text-navy/60">{text}</span>
                </div>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-12 p-6 bg-warm-gray/50 border border-navy/[0.06]">
              <p className="text-[0.8125rem] text-navy/30 uppercase tracking-[0.1em] font-semibold mb-3">What we&apos;ll cover</p>
              <ul className="space-y-2">
                {["Your current business & technology landscape", "Quick-win opportunities for improvement", "Recommended next steps and approach", "Whether we're a good fit to work together"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.9375rem] text-navy/50">
                    <span className="w-1 h-1 bg-navy/20 mt-[0.55rem] shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="lg:col-span-6 lg:col-start-7">
            <div className="bg-white border border-navy/[0.08] min-h-[600px] flex items-center justify-center">
              <iframe src="https://calendly.com/ervandra/free-strategy?hide_gdpr_banner=1&background_color=ffffff&text_color=0a192f&primary_color=0a192f" width="100%" height="700" frameBorder="0" title="Schedule a consultation" className="w-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
