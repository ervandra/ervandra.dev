"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, ArrowUp } from "lucide-react";
import Link from "next/link";
import profile from "@/config/profile";
import { footerNav } from "@/config/navigation";

const socialIcons: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  github: Github,
  linkedin: Linkedin,
  youtube: Youtube,
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="relative bg-navy text-white/50">
      {/* Accent gradient top border */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Upper Footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-16 md:py-20">
          {/* Brand */}
          <div className="md:col-span-4">
            <span className="font-[family-name:var(--font-heading)] text-white font-bold text-xl tracking-tight block mb-4">
              ervandra
              <span className="mono text-accent/50 text-[0.625rem] tracking-[0.1em] ml-1">
                .dev
              </span>
            </span>
            <p className="text-[0.875rem] leading-relaxed text-white/35 max-w-[300px]">
              CTO & Principal Architect — building scalable systems and
              leading teams that ship technology with real business impact.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-6">
            <p className="mono text-[0.625rem] tracking-[0.15em] uppercase text-accent/40 font-medium mb-5">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {footerNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[0.875rem] text-white/40 hover:text-accent-light transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="md:col-span-3 md:col-start-10">
            <p className="mono text-[0.625rem] tracking-[0.15em] uppercase text-accent/40 font-medium mb-5">
              Connect
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hi@ervandra.com"
                className="block text-[0.875rem] text-white/40 hover:text-accent-light transition-colors duration-300"
              >
                hi@ervandra.com
              </a>
              <div className="flex gap-4 pt-2">
                {profile.socialLinks.map((social) => {
                  const Icon = socialIcons[social.icon];
                  if (!Icon) return null;
                  return (
                    <motion.a
                      key={social.id}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/25 hover:text-accent transition-colors duration-300"
                      aria-label={social.id}
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={16} strokeWidth={1.5} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mono text-[0.625rem] text-white/20 tracking-wider"
          >
            &copy; 2011&ndash;{new Date().getFullYear()} Ervandra Halim
          </motion.p>

          <div className="flex items-center gap-6">
            <p className="mono text-[0.625rem] text-white/15 tracking-wider">
              Gading Serpong, Indonesia
            </p>
            <motion.button
              onClick={scrollToTop}
              className="text-white/20 hover:text-accent transition-colors duration-300 cursor-pointer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
