"use client";

import { InlineWidget } from "react-calendly";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactModal from "@/components/ui/ContactModal";
import { useState } from "react";

export default function BookPage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Header onOpenContact={() => setContactOpen(true)} />
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
            Book a Free Strategy Session
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 md:text-lg">
            Let&apos;s discuss how I can help you with your technology needs.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
          <InlineWidget
            url="https://calendly.com/ervandra/free-strategy"
            styles={{ height: "700px" }}
          />
        </div>
      </main>
      <Footer />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
