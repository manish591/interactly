'use client';

import { Navbar } from '@/components/navbar';
import { useState } from 'react';
import { JoinBanner } from './join-banner';

export function Header() {
  const [isJoinBannerOpen, setIsJoinBannerOpen] = useState(true);

  return (
    <>
      <header className="sticky top-0 z-20 h-16 flex border-b border-muted bg-background">
        <Navbar />
      </header>
      {isJoinBannerOpen && <JoinBanner setOpen={setIsJoinBannerOpen} />}
    </>
  );
}
