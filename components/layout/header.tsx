"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { mainNav } from "@/config/navigation";
import Button from "@/components/ui/button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-navy/[0.06] shadow-[0_1px_3px_rgba(10,25,47,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo / Wordmark */}
            <Link href="/" className="relative z-10">
              <span className="font-[family-name:var(--font-heading)] text-navy font-black text-xl tracking-tight">
                EH
              </span>
              <span className="hidden sm:inline font-[family-name:var(--font-body)] text-slate text-[0.6875rem] tracking-[0.15em] uppercase ml-3 relative top-[-1px]">
                Ervandra Halim
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {mainNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="link-underline font-[family-name:var(--font-body)] text-[0.8125rem] tracking-[0.06em] uppercase text-navy/70 hover:text-navy transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
              <Button variant="primary" href="/book">
                Book a Call
              </Button>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center text-navy"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
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
              className="fixed inset-0 z-40 bg-navy/30 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[75vw] max-w-[360px] bg-white shadow-2xl"
            >
              <div className="flex flex-col justify-between h-full p-8 pt-24">
                <nav className="flex flex-col gap-1">
                  {mainNav.map((item, i) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                      className="font-[family-name:var(--font-heading)] text-navy text-2xl font-bold py-3 border-b border-navy/[0.06] hover:pl-2 transition-all duration-300"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    variant="primary"
                    href="/book"
                    className="w-full text-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    Book a Call
                  </Button>
                  <p className="text-[0.75rem] text-slate text-center mt-4">
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
