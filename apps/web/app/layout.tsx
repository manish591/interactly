import '@workspace/ui/globals.css';
import { Manrope } from 'next/font/google';
import { Providers } from '@/components/providers';

const font = Manrope({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700', '500'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} lowercase font-sans antialiased `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
