import { type ClassValue, clsx } from "clsx";

// Lightweight cn utility without tailwind-merge (not needed with Tailwind v4)
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Re-export clsx for convenience
export { clsx };
