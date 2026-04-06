"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "@/components/ui/button";
import type { BlogPost } from "@/lib/mdx";

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      i++;
      continue;
    }

    // Headings
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="font-[family-name:var(--font-heading)] text-navy text-[1.5rem] font-bold mt-12 mb-4"
        >
          {formatInline(line.slice(3))}
        </h2>
      );
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="font-[family-name:var(--font-heading)] text-navy text-[1.25rem] font-bold mt-8 mb-3"
        >
          {formatInline(line.slice(4))}
        </h3>
      );
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      elements.push(
        <blockquote
          key={i}
          className="border-l-2 border-accent/40 pl-6 my-6 text-[1.0625rem] text-navy/60 italic font-[family-name:var(--font-heading)]"
        >
          {formatInline(line.slice(2))}
        </blockquote>
      );
      i++;
      continue;
    }

    // Unordered list
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-2 mb-6 ml-0">
          {items.map((item, j) => (
            <li
              key={j}
              className="flex items-start gap-3 text-[1rem] text-navy/60 leading-relaxed"
            >
              <span className="w-1.5 h-1.5 bg-accent/40 mt-[0.5rem] shrink-0" />
              <span>{formatInline(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="space-y-2 mb-6 ml-0 list-none">
          {items.map((item, j) => (
            <li
              key={j}
              className="flex items-start gap-3 text-[1rem] text-navy/60 leading-relaxed"
            >
              <span className="text-[0.8125rem] text-accent/50 font-medium mt-0.5 shrink-0 w-5">
                {j + 1}.
              </span>
              <span>{formatInline(item)}</span>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Paragraph
    elements.push(
      <p key={i} className="text-[1rem] text-navy/60 leading-[1.8] mb-5">
        {formatInline(line)}
      </p>
    );
    i++;
  }

  return elements;
}

function formatInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let keyIdx = 0;

  while (remaining.length > 0) {
    const boldMatch = remaining.match(/\*\*(.*?)\*\*/);
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
    const codeMatch = remaining.match(/`([^`]+)`/);

    const matches = [
      boldMatch ? { type: "bold", index: boldMatch.index!, match: boldMatch } : null,
      linkMatch ? { type: "link", index: linkMatch.index!, match: linkMatch } : null,
      codeMatch ? { type: "code", index: codeMatch.index!, match: codeMatch } : null,
    ]
      .filter(Boolean)
      .sort((a, b) => a!.index - b!.index);

    if (matches.length === 0) {
      parts.push(remaining);
      break;
    }

    const first = matches[0]!;
    if (first.index > 0) {
      parts.push(remaining.slice(0, first.index));
    }

    if (first.type === "bold") {
      parts.push(
        <strong key={keyIdx++} className="text-navy font-semibold">
          {first.match[1]}
        </strong>
      );
      remaining = remaining.slice(first.index + first.match[0].length);
    } else if (first.type === "link") {
      parts.push(
        <a
          key={keyIdx++}
          href={first.match[2]}
          target={first.match[2].startsWith("http") ? "_blank" : undefined}
          rel={first.match[2].startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-accent-dark font-medium link-underline"
        >
          {first.match[1]}
        </a>
      );
      remaining = remaining.slice(first.index + first.match[0].length);
    } else if (first.type === "code") {
      parts.push(
        <code
          key={keyIdx++}
          className="text-[0.9em] bg-accent-muted px-1.5 py-0.5 font-mono text-navy/70 border border-accent/10"
        >
          {first.match[1]}
        </code>
      );
      remaining = remaining.slice(first.index + first.match[0].length);
    }
  }

  return parts.length === 1 && typeof parts[0] === "string" ? parts[0] : <>{parts}</>;
}

export default function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-[720px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[0.8125rem] text-accent-dark/60 hover:text-accent-dark transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="flex items-center gap-2 text-[0.8125rem] text-navy/30 font-medium">
                <span className="w-1.5 h-1.5 bg-accent/40" />
                {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              {post.frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.6875rem] tracking-[0.08em] uppercase text-accent-dark/40 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-[2rem] md:text-[2.75rem] leading-[1.15] mb-6">
              {post.frontmatter.title}
            </h1>

            <p className="text-[1.125rem] text-navy/50 leading-relaxed">
              {post.frontmatter.description}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Content */}
      <section className="py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-[720px] mx-auto px-6 md:px-10"
        >
          {renderMarkdown(post.content)}
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* Author + CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-[720px] mx-auto px-6 md:px-10">
          <div className="p-8 md:p-10 bg-warm-gray/50 border border-navy/[0.06] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            <p className="font-[family-name:var(--font-heading)] text-navy font-bold text-[1.125rem] mb-2">
              Written by Ervandra Halim
            </p>
            <p className="text-[0.9375rem] text-navy/50 leading-relaxed mb-6">
              Strategic Tech Partner, CPTO &amp; Co-founder at Syntax. Helping
              SMEs build AI-powered businesses.
            </p>
            <Button variant="accent" href="https://calendly.com/ervandra/free-strategy" icon={<ArrowRight size={14} />}>
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
