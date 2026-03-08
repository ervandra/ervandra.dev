"use client";

import { motion } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  href?: string;
}

const base =
  "inline-flex items-center justify-center font-[family-name:var(--font-mono)] font-medium text-[0.6875rem] tracking-[0.06em] uppercase transition-all duration-300 cursor-pointer";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-white px-7 py-3.5 hover:bg-navy-light active:scale-[0.98]",
  secondary:
    "bg-transparent text-navy px-7 py-3.5 border border-navy/20 hover:border-navy hover:bg-navy/[0.02] active:scale-[0.98]",
  ghost:
    "bg-transparent text-navy px-4 py-2 hover:bg-navy/[0.03] active:scale-[0.98]",
};

export default function Button({
  variant = "primary",
  children,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      {...(props as object)}
    >
      {children}
    </motion.button>
  );
}
