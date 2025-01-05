import { cn } from '@/lib/utils';

type CnProps = React.HTMLProps<HTMLElement>;

export function GradientBarHorizontal({ className }: CnProps) {
  return (
    <div className="relative">
      <div
        className={cn(
          'absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-indigo-200 via-indigo-500 to-teal-400',
          className,
        )}
      />
    </div>
  );
}

export function GradientBarVertical({ className }: CnProps) {
  return (
    <div
      className={cn(
        'absolute inset-y-0 w-1.5 bg-gradient-to-b from-indigo-200 via-indigo-500 to-teal-400',
        className,
      )}
    />
  );
}
