import { Bell } from 'lucide-react';
import { AppLogo } from '@/components/app-logo';

export function DashboardHeader() {
  return (
    <header className="h-16 flex">
      <nav className="w-full flex items-center justify-between border">
        <AppLogo />
        <div className="flex">
          <Bell className="w-4 h-4" />
        </div>
      </nav>
    </header>
  );
}
