'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function DashboardSidebarLink({
  href,
  children,
}: Readonly<{ href: string; children: React.ReactNode }>) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className="relative block p-3 px-3 hover:bg-muted/40 transition-colors duration-300 z-10"
    >
      {children}
      {pathname.includes(href) && (
        <div className="absolute bg-accent w-[2px] h-[40%] top-[50%] -translate-y-[50%] left-0 -z-1"></div>
      )}
    </Link>
  );
}
