import { DashboardSidebar } from '@/components/dashboard-sidebar';

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-[250px_minmax(0,1fr)]">
        <div className="top-0 sticky h-screen px-4 pr-6 bg-muted/50">
          <DashboardSidebar />
        </div>
        {children}
      </div>
    </div>
  );
}
