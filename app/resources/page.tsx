"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileCheck, ArrowRight, Download } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const resources = [
  {
    id: "ai-readiness",
    title: "AI Readiness Checklist for SMEs",
    description:
      "A practical, no-fluff guide to assess whether your business is ready for AI automation. Covers operations, data, team, and budget — in 15 minutes.",
    type: "PDF Checklist",
    points: ["15-minute assessment", "Actionable checklist", "Budget planning guide"],
  },
  {
    id: "tech-audit",
    title: "Technology Audit Template",
    description:
      "A structured framework to evaluate your current technology stack, identify gaps, and prioritize improvements for maximum business impact.",
    type: "PDF Template",
    points: ["Stack evaluation framework", "Risk assessment matrix", "Priority scoring system"],
  },
  {
    id: "transformation-playbook",
    title: "Digital Transformation Playbook",
    description:
      "Step-by-step guide for SMEs planning a digital transformation. From process mapping to implementation, with real examples and timelines.",
    type: "PDF Guide",
    points: ["Process mapping templates", "Implementation timeline", "ROI calculator"],
  },
];

function ResourceCard({ resource }: { resource: (typeof resources)[0] }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="p-8 md:p-10 bg-white border border-navy/[0.08] hover:border-navy/[0.15] transition-colors duration-500">
      <div className="flex items-center gap-2 mb-4">
        <Download size={16} strokeWidth={1.5} className="text-navy/30" />
        <span className="text-[0.6875rem] tracking-[0.12em] uppercase text-navy/35 font-semibold">
          {resource.type}
        </span>
      </div>

      <h3 className="font-[family-name:var(--font-heading)] text-navy text-[1.25rem] font-bold mb-3">
        {resource.title}
      </h3>

      <p className="text-[0.9375rem] text-navy/50 leading-relaxed mb-6">
        {resource.description}
      </p>

      <div className="flex flex-wrap gap-4 mb-8">
        {resource.points.map((point) => (
          <div key={point} className="flex items-center gap-2 text-[0.8125rem] text-navy/40">
            <FileCheck size={14} strokeWidth={1.5} className="text-navy/25" />
            {point}
          </div>
        ))}
      </div>

      {submitted ? (
        <div className="p-4 bg-warm-gray/50 text-center">
          <p className="text-[0.9375rem] text-navy/70 font-medium">
            Check your inbox for the download link.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1"
          />
          <button
            type="submit"
            className="bg-navy text-white px-6 py-3 font-[family-name:var(--font-body)] font-semibold text-[0.8125rem] tracking-[0.04em] uppercase flex items-center gap-2 hover:bg-navy-light transition-colors duration-300 cursor-pointer shrink-0"
          >
            Get It
            <ArrowRight size={14} />
          </button>
        </form>
      )}
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="editorial-label"
            >
              Resources
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 mb-8 max-w-[640px]"
            >
              Free tools &amp; guides
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[1.125rem] text-navy/50 max-w-[540px] leading-relaxed"
            >
              Practical resources to help you evaluate, plan, and execute
              technology initiatives. No fluff, no spam.
            </motion.p>
          </div>
        </section>

        <div className="section-divider" />

        <section className="py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, i) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <ResourceCard resource={resource} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
