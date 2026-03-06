"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/mdx";
import Link from "next/link";

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="editorial-label"
          >
            Blog
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 mb-8 max-w-[640px]"
          >
            Insights &amp; ideas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[1.125rem] text-navy/50 max-w-[540px] leading-relaxed"
          >
            Practical thinking on AI, digital transformation, and tech
            leadership for SMEs and professionals.
          </motion.p>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-0">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          {posts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-navy/40 text-[1.0625rem]">
                Posts coming soon. Stay tuned.
              </p>
            </div>
          ) : (
            <div className="border-t border-navy/[0.1]">
              {posts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block border-b border-navy/[0.1] py-10 md:py-12"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                      <div className="md:col-span-2">
                        <span className="text-[0.8125rem] text-navy/30 font-medium">
                          {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>

                      <div className="md:col-span-6">
                        <h2 className="font-[family-name:var(--font-heading)] text-navy text-[1.375rem] md:text-[1.5rem] font-bold leading-tight group-hover:translate-x-1 transition-transform duration-500">
                          {post.frontmatter.title}
                          <ArrowRight
                            size={16}
                            className="inline-block ml-2 opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                          />
                        </h2>
                      </div>

                      <div className="md:col-span-4">
                        <p className="text-[0.9375rem] text-navy/45 leading-relaxed">
                          {post.frontmatter.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4 md:ml-[calc(16.666%+2rem)]">
                      {post.frontmatter.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.6875rem] tracking-[0.08em] uppercase text-navy/25 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
