"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/lib/mdx";

export default function BlogPreview({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="editorial-label"
            >
              Insights
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4"
            >
              Latest from the blog
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[0.8125rem] tracking-[0.06em] uppercase text-navy/50 hover:text-navy font-medium transition-colors duration-300"
            >
              View all posts
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        <div className="border-t border-navy/[0.1]">
          {posts.slice(0, 3).map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block border-b border-navy/[0.1] py-8 md:py-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start">
                  <div className="md:col-span-2">
                    <span className="text-[0.8125rem] text-navy/25 font-medium">
                      {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="font-[family-name:var(--font-heading)] text-navy text-[1.25rem] font-bold leading-tight group-hover:translate-x-1 transition-transform duration-500">
                      {post.frontmatter.title}
                      <ArrowRight
                        size={14}
                        className="inline-block ml-2 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                      />
                    </h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-[0.9375rem] text-navy/40 leading-relaxed">
                      {post.frontmatter.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
