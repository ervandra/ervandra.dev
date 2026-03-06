"use client";

import AnimateIn from "@/components/ui/AnimateIn";

export default function Contact({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <AnimateIn>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2 uppercase tracking-wide">
              What&apos;s next?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
              Get In Touch
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-zinc-600 dark:text-zinc-400 md:text-lg mb-10 leading-relaxed">
              I&apos;d love to hear from you — whether it&apos;s about a project,
              collaboration, or just to connect and share ideas about technology.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
              >
                Get In Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a
                href="/book"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                Book a Strategy Call
              </a>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
