import Link from 'next/link';
import { BarChart2 } from 'lucide-react';
import { cn } from '@workspace/ui/lib/utils';

export function AppLogo({
  varient = 'light',
}: Readonly<{ varient?: 'light' | 'dark' }>) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2">
      <div
        className={cn(
          'relative rounded-md p-[0.35rem] transition-colors duration-300 bg-foreground group-hover:bg-foreground/80 text-background group-hover:text-background/80',
          varient === 'dark'
            ? 'bg-background group-hover:bg-background/80 text-foreground group-hover:text-foreground/80'
            : '',
        )}
      >
        <BarChart2 className="w-[1.15rem] h-[1.15rem]" strokeWidth={2} />
      </div>
      <h1
        className={cn(
          'text-2xl font-bold text-foreground group-hover:text-foreground/70 transition-colors duration-300',
          varient === 'dark'
            ? 'text-background group-hover:text-background/70'
            : '',
        )}
      >
        Interactly
      </h1>
    </Link>
  );
}
