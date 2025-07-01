import { BarChart2, Mic } from 'lucide-react';
import Link from 'next/link';

export default function AppLogo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-2">
      <div className="relative bg-foreground text-background rounded-md p-[0.35rem] group-hover:bg-foreground/80 transition-colors duration-300">
        <BarChart2
          className="w-[1.15rem] h-[1.15rem] text-background group-hover:text-background/80 transition-colors duration-300"
          strokeWidth={2}
        />
      </div>
      <h1 className="text-2xl font-bold text-foreground group-hover:text-foreground/70 transition-colors duration-300">
        Interactly
      </h1>
    </Link>
  );
}
