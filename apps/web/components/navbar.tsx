import Link from 'next/link';
import { AppLogo } from '@/components/app-logo';
import { Button } from '@workspace/ui/components/button';

export function Navbar() {
  return (
    <nav className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <div className="flex items-center gap-12">
        <AppLogo />
        <div className="mt-1 text-sm text-foreground/60 flex items-center gap-6">
          <Link
            href="#"
            className="hover:text-foreground transition-colors duration-200"
          >
            Learn
          </Link>
          <Link
            href="#"
            className="hover:text-foreground transition-colors duration-200"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="hover:text-foreground transition-colors duration-200"
          >
            Contact Us
          </Link>
          <Link
            href="#"
            className="hover:text-foreground transition-colors duration-200"
          >
            About Us
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="secondary" className="px-10 text-sm">
          Login
        </Button>
        <Button className="px-10 text-sm">Join Now</Button>
      </div>
    </nav>
  );
}
