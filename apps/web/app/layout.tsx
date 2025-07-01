import '@workspace/ui/globals.css';
import { Sora } from 'next/font/google';
import { Providers } from '@/components/providers';

const font = Sora({
  subsets: ['latin'],
  display: 'swap',
  weight: ['800', '700', '600', '500', '400'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
