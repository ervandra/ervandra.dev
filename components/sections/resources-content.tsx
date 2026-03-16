"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileCheck, ArrowRight, Download, Check } from "lucide-react";

const resources = [
  {
    id: "ai-readiness",
    title: "AI Readiness Checklist for SMEs",
    description: "A practical, no-fluff guide to assess whether your business is ready for AI automation. Covers operations, data, team, and budget — in 15 minutes.",
    type: "PDF Checklist",
    points: ["Actionable checklist", "15-min assessment", "Budget planning guide"],
  },
  {
    id: "tech-audit",
    title: "Technology Audit Template",
    description: "A structured framework to evaluate your current technology stack, identify gaps, and prioritize improvements for maximum business impact.",
    type: "PDF Template",
    points: ["Stack evaluation framework", "Risk assessment matrix", "Priority scoring system"],
  },
  {
    id: "transformation-playbook",
    title: "Digital Transformation Playbook",
    description: "Step-by-step guide for SMEs planning a digital transformation. From process mapping to implementation, with real examples and timelines.",
    type: "PDF Guide",
    points: ["Process mapping templates", "Implementation timeline", "ROI calculator"],
  },
];

function ResourceCard({ resource }: { resource: (typeof resources)[0] }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, tags: `resource-${resource.id}, via-website` }),
      });
      setSubmitted(true);
      setEmail("");
    } catch { /* silent */ }
    setLoading(false);
  };

  return (
    <div className="group p-8 md:p-10 bg-white border border-navy/[0.08] hover:border-accent/25 hover:shadow-[var(--shadow-lg)] transition-all duration-500 relative overflow-hidden">
      {/* Accent top border on hover */}
      <div className="absolute top-0 left-0 right-0 h-0 group-hover:h-[2px] bg-accent/50 transition-all duration-500" />

      <div className="flex items-center gap-2 mb-4">
        <Download size={16} strokeWidth={1.5} className="text-accent" />
        <span className="text-[0.6875rem] tracking-[0.12em] uppercase text-accent-dark/50 font-semibold">{resource.type}</span>
      </div>
      <h3 className="font-[family-name:var(--font-heading)] text-navy text-[1.25rem] font-bold mb-3">{resource.title}</h3>
      <p className="text-[0.9375rem] text-navy/50 leading-relaxed mb-6">{resource.description}</p>
      <div className="flex flex-wrap gap-4 mb-8">
        {resource.points.map((point) => (
          <div key={point} className="flex items-center gap-2 text-[0.8125rem] text-navy/40">
            <FileCheck size={14} strokeWidth={1.5} className="text-accent/60" />{point}
          </div>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 bg-accent-muted text-center flex items-center justify-center gap-2"
          >
            <Check size={16} className="text-accent" />
            <p className="text-[0.9375rem] text-navy/70 font-medium">Check your inbox for the download link.</p>
          </motion.div>
        ) : (
          <motion.form key="form" exit={{ opacity: 0 }} onSubmit={handleSubmit} className="flex gap-3">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" required className="flex-1" disabled={loading} />
            <button type="submit" disabled={loading} className="bg-accent text-navy px-6 py-3 font-[family-name:var(--font-body)] font-semibold text-[0.8125rem] tracking-[0.04em] uppercase flex items-center gap-2 hover:bg-accent-light hover:shadow-[var(--shadow-accent)] transition-all duration-300 cursor-pointer shrink-0 disabled:opacity-50">
              {loading ? (
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                <>Get It<ArrowRight size={14} /></>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ResourcesContent() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="editorial-label">Resources</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="mt-4 mb-8 max-w-[640px]">
            Free tools &amp; guides
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-[1.125rem] text-navy/50 max-w-[540px] leading-relaxed">
            Practical resources to help you evaluate, plan, and execute technology initiatives. No fluff, no spam.
          </motion.p>
        </div>
      </section>
      <div className="section-divider" />
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, i) => (
              <motion.div key={resource.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}>
                <ResourceCard resource={resource} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
