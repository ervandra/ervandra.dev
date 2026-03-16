"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex items-center relative overflow-hidden">
        {/* Accent glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/[0.04] blur-[100px]" />
        </div>

        <div className="max-w-[1280px] mx-auto px-6 md:px-10 w-full py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-[family-name:var(--font-heading)] text-[6rem] md:text-[10rem] font-black leading-none block mb-4 text-gradient">
              404
            </span>
            <h1 className="text-[2rem] md:text-[2.5rem] mb-4">Page not found</h1>
            <p className="text-navy/50 text-[1.0625rem] mb-10 max-w-[400px]">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Button variant="accent" href="/" icon={<ArrowRight size={14} />}>
              Back to Home
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
