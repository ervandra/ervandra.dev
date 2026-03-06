"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex items-center">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 w-full py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-[family-name:var(--font-heading)] text-[6rem] md:text-[8rem] font-black text-navy/[0.06] leading-none block mb-4">
              404
            </span>
            <h1 className="text-[2rem] md:text-[2.5rem] mb-4">Page not found</h1>
            <p className="text-navy/50 text-[1.0625rem] mb-10 max-w-[400px]">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Button variant="primary" href="/">
              Back to Home
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
