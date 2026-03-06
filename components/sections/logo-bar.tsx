"use client";

import { motion } from "framer-motion";

const companies = [
  { name: "R/GA", highlight: true },
  { name: "Komunal" },
  { name: "Yoona" },
  { name: "CIAYO" },
  { name: "Syntax", highlight: true },
  { name: "Cakra Studio" },
];

export default function LogoBar() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="editorial-label text-center mb-10"
        >
          Previously building at
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16">
          {companies.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              <span
                className={`font-[family-name:var(--font-heading)] text-[1.25rem] md:text-[1.5rem] tracking-tight transition-colors duration-300 ${
                  company.highlight
                    ? "text-navy font-bold"
                    : "text-navy/30 font-bold group-hover:text-navy/60"
                }`}
              >
                {company.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
