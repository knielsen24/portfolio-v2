import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type ClassValue = string | Record<string, boolean> | undefined | null;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
