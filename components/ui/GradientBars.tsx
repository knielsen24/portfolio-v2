import { cn, ClassValue } from '@/lib/utils';

type Props = { className?: ClassValue; width?: string };

export function GradientBarHorizontal({ className }: Props) {
  return (
    <div
      className={cn(
        `absolute inset-x-0 bottom-0 bg-gradient-to-r from-indigo-200 via-indigo-500 to-teal-400`,
        className,
      )}
    />
  );
}

export function GradientBarVertical({ className }: Props) {
  return (
    <div
      className={cn(
        `absolute inset-y-0 bg-gradient-to-b from-indigo-200 via-indigo-500 to-teal-400`,
        className,
      )}
    />
  );
}
