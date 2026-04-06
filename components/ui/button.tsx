"use client";

import { motion } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "accent";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  href?: string;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const base =
  "inline-flex items-center justify-center font-[family-name:var(--font-mono)] font-medium tracking-[0.06em] uppercase transition-all duration-300 cursor-pointer relative overflow-hidden";

const sizes: Record<Size, string> = {
  sm: "text-[0.625rem] px-5 py-2.5",
  md: "text-[0.6875rem] px-7 py-3.5",
  lg: "text-[0.75rem] px-9 py-4",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] hover:bg-navy-light active:scale-[0.97] border border-white/[0.05]",
  secondary:
    "bg-transparent text-navy px-7 py-3.5 border border-navy/15 hover:border-accent hover:text-accent-dark hover:bg-accent-muted active:scale-[0.97]",
  ghost:
    "bg-transparent text-navy/60 hover:text-accent-dark hover:bg-accent-muted active:scale-[0.97]",
  accent:
    "bg-accent text-navy font-semibold shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-accent)] hover:bg-accent-light active:scale-[0.97] border border-accent-light/30",
};

function Spinner() {
  return (
    <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
      <circle
        className="opacity-25"
        cx="12" cy="12" r="10"
        stroke="currentColor" strokeWidth="3"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  loading = false,
  icon,
  iconPosition = "right",
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${disabled || loading ? "opacity-50 pointer-events-none" : ""} ${className}`;

  const content = (
    <>
      {loading && <Spinner />}
      {!loading && icon && iconPosition === "left" && (
        <span className="mr-2">{icon}</span>
      )}
      {!loading && children}
      {!loading && icon && iconPosition === "right" && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      disabled={disabled || loading}
      {...(props as object)}
    >
      {content}
    </motion.button>
  );
}
