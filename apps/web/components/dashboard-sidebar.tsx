import {
  ArrowUpRight,
  Crown,
  FileText,
  HardDrive,
  Home,
  User2,
} from 'lucide-react';
import { AppLogo } from '@/components/app-logo';
import { DashboardSidebarLink } from '@/components/dashboard-sidebar-link';
import { Button } from '@workspace/ui/components/button';
import { Card, CardContent } from '@workspace/ui/components/card';

export function DashboardSidebar() {
  return (
    <div className="py-6 flex flex-col h-full">
      <div className="p-3 hover:bg-muted/40 transition-colors duration-300">
        <AppLogo />
      </div>
      <div className="mt-10 flex-1">
        <DashboardSidebarLink href="/dashboard/home">
          <div className="flex items-center gap-3 z-30">
            <Home className="w-4 h-4" />
            <span className="mt-[2px] text-sm">Home</span>
          </div>
        </DashboardSidebarLink>
        <DashboardSidebarLink href="/dashboard/presentations">
          <div className="flex items-center gap-3 z-30">
            <User2 className="w-4 h-4" />
            <span className="mt-[2px] text-sm">Presentations</span>
          </div>
        </DashboardSidebarLink>
        <DashboardSidebarLink href="/dashboard/presentations">
          <div className="flex items-center gap-3 z-30">
            <HardDrive className="w-4 h-4" />
            <span className="mt-[2px] text-sm">Shared with me</span>
          </div>
        </DashboardSidebarLink>
        <DashboardSidebarLink href="/dashboard/presentations">
          <div className="flex items-center gap-3 z-30">
            <FileText className="w-4 h-4" />
            <span className="mt-[2px] text-sm">Templates</span>
          </div>
        </DashboardSidebarLink>
      </div>
      <div className="mt-auto">
        <Card className="border">
          <CardContent className="py-2 px-4 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Presentations</span>
                <span className="font-medium">3 / 5</span>
              </div>
              <p className="text-xs text-muted-foreground">
                2 presentations remaining on Free plan
              </p>
            </div>
            <Button
              className="w-full bg-gradient-to-r from-primary to-primary/60 hover:from-primary/90 hover:to-primary/80 text-background border-0 shadow-md hover:shadow-lg transition-all duration-200"
              size="sm"
            >
              <Crown className="w-4 h-4 mr-2" />
              Upgrade to Pro
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
            <div className="text-xs text-muted-foreground space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-orange-500 rounded-full" />
                <span>Unlimited presentations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-orange-500 rounded-full" />
                <span>Advanced templates</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-orange-500 rounded-full" />
                <span>Priority support</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
