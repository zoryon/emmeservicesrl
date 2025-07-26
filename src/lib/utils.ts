import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function smoothScroll({ to }: { to: string }) {
  const el = document.getElementById(to);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}