"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/config/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/92 backdrop-blur-xl border-b border-navy/[0.06] shadow-[var(--shadow-sm)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-[64px] md:h-[72px]">
            {/* Logo */}
            <Link href="/" className="relative z-10 group">
              <span className="font-[family-name:var(--font-heading)] text-navy font-bold text-[1.125rem] tracking-tight group-hover:tracking-normal transition-all duration-500">
                ervandra
              </span>
              <span className="mono text-accent/60 text-[0.625rem] tracking-[0.1em] uppercase ml-1.5 hidden sm:inline group-hover:text-accent transition-colors duration-300">
                .dev
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {mainNav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative mono text-[0.6875rem] tracking-[0.08em] uppercase font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-accent-dark"
                        : "text-navy/50 hover:text-navy"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
              <Link
                href="/book"
                className="inline-flex items-center gap-2 bg-accent text-navy px-5 py-2.5 mono text-[0.6875rem] tracking-[0.06em] uppercase font-semibold hover:bg-accent-light hover:shadow-[var(--shadow-accent)] transition-all duration-300"
              >
                Book a Call
                <ArrowUpRight size={12} />
              </Link>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center text-navy"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-navy/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80vw] max-w-[360px] bg-white border-l border-navy/[0.06] shadow-[var(--shadow-xl)]"
            >
              <div className="flex flex-col justify-between h-full p-8 pt-24">
                <nav className="flex flex-col gap-0">
                  {mainNav.map((item, i) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block font-[family-name:var(--font-heading)] text-xl font-semibold py-4 border-b border-navy/[0.04] hover:pl-2 transition-all duration-300 ${
                            isActive ? "text-accent-dark pl-2 border-l-2 border-l-accent" : "text-navy"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4"
                >
                  <Link
                    href="/book"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-accent text-navy px-6 py-4 mono text-[0.6875rem] tracking-[0.06em] uppercase font-semibold hover:bg-accent-light transition-all duration-300"
                  >
                    Book a Call
                    <ArrowUpRight size={12} />
                  </Link>
                  <p className="mono text-[0.625rem] text-slate text-center tracking-wider">
                    hi@ervandra.com
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
