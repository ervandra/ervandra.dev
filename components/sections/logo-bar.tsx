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

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:gap-x-14">
          {companies.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              <span
                className={`font-[family-name:var(--font-heading)] text-[1.125rem] md:text-[1.25rem] tracking-tight transition-colors duration-300 ${
                  company.highlight
                    ? "text-navy font-semibold"
                    : "text-navy/25 font-semibold group-hover:text-navy/50"
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
