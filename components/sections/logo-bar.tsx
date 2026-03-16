"use client";

import { motion } from "framer-motion";

const companies = [
  { name: "R/GA", highlight: true },
  { name: "Google", highlight: false },
  { name: "Komunal", highlight: false },
  { name: "Yoona", highlight: false },
  { name: "CIAYO", highlight: false },
  { name: "Syntax", highlight: true },
  { name: "Magnificat", highlight: true },
];

export default function LogoBar() {
  return (
    <section className="relative py-14 md:py-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="editorial-label text-center mb-10"
        >
          Previously & currently building at
        </motion.p>

        {/* Marquee container */}
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#fafaf8] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#fafaf8] to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="marquee-track flex items-center gap-12 md:gap-16 w-max">
              {/* Double the items for seamless loop */}
              {[...companies, ...companies].map((company, i) => (
                <div key={`${company.name}-${i}`} className="group relative shrink-0">
                  <span
                    className={`font-[family-name:var(--font-heading)] text-[1.125rem] md:text-[1.25rem] tracking-tight transition-all duration-500 ${
                      company.highlight
                        ? "text-navy font-semibold group-hover:text-accent-dark"
                        : "text-navy/20 font-semibold group-hover:text-navy/60"
                    }`}
                  >
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
