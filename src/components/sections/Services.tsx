"use client";

import profile from "@/data/profile";
import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";

const icons: Record<string, React.ReactNode> = {
  layers: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  cpu: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </svg>
  ),
  brain: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z" />
      <path d="M9 21h6M10 17v4M14 17v4" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-3">
              Services
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 md:text-lg">
              Engagements available directly or via Syntax Solution
            </p>
          </div>
        </AnimateIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profile.services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="card-glass rounded-xl p-6 h-full hover:-translate-y-1 transition-transform duration-200">
                <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 mb-4">
                  {icons[service.icon]}
                </div>
                <h3 className="font-semibold text-lg text-zinc-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
