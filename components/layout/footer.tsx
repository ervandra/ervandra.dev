"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import profile from "@/config/profile";
import { footerNav } from "@/config/navigation";

const socialIcons: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  github: Github,
  linkedin: Linkedin,
  youtube: Youtube,
};

export default function Footer() {
  return (
    <footer className="relative bg-navy text-white/60">
      {/* Top rule */}
      <div className="h-px bg-white/[0.06]" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Upper Footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-16 md:py-20">
          {/* Brand */}
          <div className="md:col-span-4">
            <span className="font-[family-name:var(--font-heading)] text-white font-black text-2xl tracking-tight block mb-4">
              EH
            </span>
            <p className="text-[0.9375rem] leading-relaxed text-white/40 max-w-[300px]">
              Strategic Tech Partner helping SMEs and professionals build
              AI-powered businesses that deliver real results.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-6">
            <p className="text-[0.6875rem] tracking-[0.18em] uppercase text-white/25 font-semibold mb-5">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {footerNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[0.9375rem] text-white/50 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="md:col-span-3 md:col-start-10">
            <p className="text-[0.6875rem] tracking-[0.18em] uppercase text-white/25 font-semibold mb-5">
              Connect
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hi@ervandra.com"
                className="block text-[0.9375rem] text-white/50 hover:text-white transition-colors duration-300"
              >
                hi@ervandra.com
              </a>
              <div className="flex gap-4 pt-2">
                {profile.socialLinks.map((social) => {
                  const Icon = socialIcons[social.icon];
                  if (!Icon) return null;
                  return (
                    <a
                      key={social.id}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/30 hover:text-white transition-colors duration-300"
                      aria-label={social.id}
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </a>
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
            className="text-[0.75rem] text-white/25"
          >
            &copy; 2011&ndash;{new Date().getFullYear()} Ervandra Halim. All
            rights reserved.
          </motion.p>
          <p className="text-[0.75rem] text-white/20">
            Jakarta, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
