"use client";

import { motion } from "framer-motion";
import profile from "@/data/profile";

export default function Hero({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      <div className="hero-glow" />
      <div className="max-w-6xl mx-auto px-6 w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-4 tracking-wide uppercase">
            Hi, I&apos;m Ervandra Halim
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-6">
            Tech Expert &<br />
            <span className="text-gradient">Builder</span> — 15+ Years
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-4 max-w-2xl leading-relaxed"
          >
            Co-founder & CPTO at{" "}
            <a
              href="https://syntax.id"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-900 dark:text-white hover:text-primary transition-colors"
            >
              Syntax Solution
            </a>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 mb-10 max-w-2xl leading-relaxed"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
            >
              Get In Touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a
              href="#experience"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              View Experience
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
