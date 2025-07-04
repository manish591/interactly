import { Bell, Plus } from 'lucide-react';
import { SearchPresentations } from '@/components/search-presentations';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@workspace/ui/components/avatar';
import { Button } from '@workspace/ui/components/button';
import { PresentationCard } from '@/components/presentation-card';

export default function DashboardHome() {
  return (
    <div className="py-8 px-10">
      <div className="flex items-start justify-between">
        <SearchPresentations />
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 flex items-center justify-center bg-muted rounded-[50%]">
            <Bell className="w-4 h-4" />
          </div>
          <Avatar className="w-8 h-8 rounded-[50%]">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="rounded-[50%]"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="mt-14">
        <h1 className="text-3xl">Hello, Manish Devrani!</h1>
        <div className="mt-12 flex gap-6 items-center">
          <Button>
            New Presentation <Plus className="w-4 h-4" strokeWidth={2} />
          </Button>
          <Button variant="outline">
            Create With AI <Plus className="w-4 h-4" strokeWidth={2} />
          </Button>
        </div>
        <div className="mt-8">
          <h3>Recently Viewed</h3>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <PresentationCard />
            <PresentationCard />
            <PresentationCard />
          </div>
        </div>
      </div>
    </div>
  );
}
