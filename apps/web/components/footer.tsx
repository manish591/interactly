import Link from 'next/link';
import { Globe, Smartphone } from 'lucide-react';
import { AppLogo } from '@/components/app-logo';
import { FooterSocials } from '@/components/footer-socials';

export function Footer() {
  return (
    <footer className="bg-foreground/90 text-background py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <AppLogo varient="dark" />
            <p className="text-background/70 mb-6 max-w-md mt-2">
              Transform boring presentations into engaging experiences. Create
              interactive sessions that captivate your audience.
            </p>
            <FooterSocials />
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-background transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-background transition-colors"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-background transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-background transition-colors"
                >
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-background transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-background transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-background transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-background transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-t-muted/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/70 text-sm">
            © 2025 Interactly. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 text-background/70 gray-400 text-sm">
              <Globe className="w-4 h-4" />
              <span>Available worldwide</span>
            </div>
            <div className="flex items-center space-x-2 text-background/70 text-sm">
              <Smartphone className="w-4 h-4" />
              <span>Mobile friendly</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
