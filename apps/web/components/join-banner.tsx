import { Button } from '@workspace/ui/components/button';
import { Input } from '@workspace/ui/components/input';
import { X } from 'lucide-react';

export function JoinBanner() {
  return (
    <div className="sticky top-0 py-4 bg-muted flex items-center justify-center">
      <div className="flex items-center gap-4 text-sm">
        <p>Enter code to join a live interactly</p>
        <Input
          type="text"
          placeholder="111 235"
          className="w-[130px] text-center h-8"
        />
        <Button size="sm" variant="outline">
          Join
        </Button>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
        <Button variant="ghost" size="icon">
          <X />
        </Button>
      </div>
    </div>
  );
}
