"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "@/data/profile";
import AnimateIn from "@/components/ui/AnimateIn";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const activeExp = profile.experiences[activeTab];

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-10">
            Where I&apos;ve Contributed
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Tab buttons */}
            <div className="md:w-48 shrink-0">
              <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible -mx-6 px-6 md:mx-0 md:px-0 gap-0 border-b md:border-b-0 md:border-l border-zinc-200 dark:border-zinc-700">
                {profile.experiences.map((exp, i) => (
                  <button
                    key={exp.company}
                    onClick={() => setActiveTab(i)}
                    className={`relative whitespace-nowrap px-4 py-3 text-sm text-left transition-colors ${
                      i === activeTab
                        ? "text-zinc-900 dark:text-white font-medium bg-zinc-50 dark:bg-zinc-800/50"
                        : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/30"
                    }`}
                  >
                    {i === activeTab && (
                      <motion.span
                        layoutId="exp-indicator"
                        className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary rounded-full hidden md:block"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    {i === activeTab && (
                      <motion.span
                        layoutId="exp-indicator-mobile"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full md:hidden"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    {exp.company}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-8"
                >
                  {activeExp.promotions.map((promo, i) => (
                    <div key={promo.title + promo.year} className="relative">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        {activeTab === 0 && i === 0 && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                            Current
                          </span>
                        )}
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                          {promo.title}
                        </h3>
                      </div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                        {promo.year} · {activeExp.company}
                      </p>
                      <ul className="space-y-2">
                        {promo.summary.map((item) => (
                          <li
                            key={item}
                            className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 flex items-start gap-3"
                          >
                            <span className="text-primary mt-1.5 shrink-0">
                              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" fill="none" />
                              </svg>
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
