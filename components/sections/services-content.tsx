"use client";

import { motion } from "framer-motion";
import { Brain, Rocket, Handshake, Code, ArrowRight } from "lucide-react";
import Button from "@/components/ui/button";
import servicesData from "@/config/services";

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  brain: Brain, rocket: Rocket, handshake: Handshake, code: Code,
};

export default function ServicesContent() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="editorial-label">Services</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="mt-4 mb-8 max-w-[640px]">
            Technology that drives real business results.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-[1.125rem] text-navy/50 max-w-[540px] leading-relaxed">
            Every engagement starts with understanding your business. Available directly or via Syntax Solution.
          </motion.p>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-0">
        {servicesData.map((service, i) => {
          const Icon = iconMap[service.icon];
          const isEven = i % 2 === 0;
          return (
            <div key={service.id}>
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className={`py-20 md:py-28 ${isEven ? "" : "bg-warm-gray/30 noise-overlay relative"}`}>
                <div className={`${!isEven ? "relative z-10" : ""} max-w-[1280px] mx-auto px-6 md:px-10`}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    <div className="lg:col-span-5">
                      <span className="editorial-label">{String(i + 1).padStart(2, "0")}</span>
                      <div className="flex items-start gap-4 mt-4 mb-6">
                        {Icon && <div className="w-10 h-10 flex items-center justify-center text-accent shrink-0 mt-1 bg-accent-muted"><Icon size={28} strokeWidth={1.5} /></div>}
                        <h2 className="text-[1.75rem] md:text-[2rem]">{service.title}</h2>
                      </div>
                      <p className="text-[1.0625rem] text-navy/50 leading-relaxed mb-8">{service.description}</p>
                      <Button variant="secondary" href="#contact" icon={<ArrowRight size={14} />}>Discuss This Service</Button>
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7">
                      <div className="space-y-0">
                        <p className="editorial-label mb-6">What&apos;s included</p>
                        {service.features.map((feature, j) => (
                          <div key={feature} className="flex items-start gap-4 py-4 border-b border-navy/[0.05] group hover:border-accent/15 transition-all duration-300">
                            <span className="text-[0.75rem] text-accent/50 group-hover:text-accent font-medium mt-0.5 shrink-0 transition-colors duration-300">{String(j + 1).padStart(2, "0")}</span>
                            <span className="text-[1rem] text-navy/70 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-10 p-6 bg-navy/[0.02] border border-navy/[0.06] relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                        <p className="text-[0.8125rem] text-accent-dark/60 uppercase tracking-[0.1em] font-semibold mb-2">Expected Outcome</p>
                        <p className="font-[family-name:var(--font-heading)] text-navy font-bold text-[1.0625rem] leading-snug">{service.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              {i < servicesData.length - 1 && <div className="section-divider" />}
            </div>
          );
        })}
      </section>

      <div className="section-divider" />

      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="editorial-label">FAQ</span>
              <h2 className="mt-4">Common questions</h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-0">
              {[
                { q: "How do engagements typically start?", a: "Every engagement starts with a free 30-minute strategy session. We discuss your goals, current challenges, and I propose a tailored approach." },
                { q: "Do you work with international clients?", a: "Yes. I've worked with global teams across APAC, US, and Europe. Remote collaboration is standard for all engagements." },
                { q: "What's the typical project timeline?", a: "It depends on scope. Strategy engagements can be 2-4 weeks. Development projects range from 4-12 weeks. Fractional CPTO engagements are ongoing." },
                { q: "Can you work through Syntax Solution?", a: "Absolutely. For larger projects or when a team is needed, engagements run through Syntax Solution with full project management support." },
              ].map((faq, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group py-6 border-b border-navy/[0.06] hover:border-accent/15 transition-all duration-300">
                  <h4 className="font-[family-name:var(--font-heading)] text-navy font-bold text-[1.0625rem] mb-3 group-hover:text-accent-dark transition-colors duration-300">{faq.q}</h4>
                  <p className="text-[0.9375rem] text-navy/50 leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section id="contact" className="py-20 md:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/[0.04] blur-[100px]" />
        </div>
        <div className="max-w-[560px] mx-auto px-6 relative">
          <h2 className="mb-6">Ready to start?</h2>
          <p className="text-navy/50 text-[1.0625rem] mb-10">Book a free strategy session and let&apos;s discuss how technology can accelerate your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" href="https://calendly.com/ervandra/free-strategy" icon={<ArrowRight size={14} />}>Book Free Consultation</Button>
            <Button variant="secondary" href="mailto:hi@ervandra.com">Email me directly</Button>
          </div>
        </div>
      </section>
    </>
  );
}
