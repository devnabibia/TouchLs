import { cn } from '@/utils/cn';

export function Container({
  className,
  isFullWidth = false,
  ...props
}: {
  className?: string;
  isFullWidth?: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) {
  return (
    <div
      className={cn(
        'mx-auto max-w-7xl sm:px-6 lg:px-8',
        isFullWidth ? 'px-0' : 'px-4',
        className
      )}
      {...props}
    />
  );
}
