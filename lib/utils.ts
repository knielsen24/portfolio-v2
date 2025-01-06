import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type ClassValue = string | Record<string, boolean> | undefined | null;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const handleRemoveRegex = (link: string): string => {
  // Regex pattern to match either "https://" or "http://"
  const regex = /^(https?:\/\/)/i;
  return link.replace(regex, '');
};

export const getLinkText = (link: { name: string; href: string }): string => {
  switch (link.name) {
    case 'github':
      return 'View Source Code';
    case 'youtube':
      return 'View Demo';
    case 'ios':
      return 'View in App Store';
    case 'android':
      return 'View in Play Store';
    case 'blog':
    case 'linkedIn':
      return 'View Post';
    case 'website':
      return handleRemoveRegex(link.href);
    default:
      return 'View Link';
  }
};
