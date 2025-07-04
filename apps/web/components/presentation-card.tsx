'use client';

import { useState } from 'react';
import { MoreHorizontal, Edit, Trash2, Share, Copy } from 'lucide-react';
import { Card, CardContent } from '@workspace/ui/components/card';
import { Avatar, AvatarFallback } from '@workspace/ui/components/avatar';
import { Button } from '@workspace/ui/components/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@workspace/ui/components/dropdown-menu';

export function PresentationCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full max-w-sm mx-auto">
      <Card
        className="h-64 relative group cursor-pointer transition-all duration-200 hover:shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0 h-full flex flex-col">
          <div className="p-4 flex justify-end flex-1">
            <span className="text-xs text-muted-foreground font-medium">
              Mercator
            </span>
          </div>
          <div className="p-4 pb-0 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-blue-100 text-blue-600 text-sm font-medium">
                  MD
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium text-sm text-foreground">
                  New quiz
                </h3>
                <p className="text-xs text-muted-foreground">
                  Edited June 7, 2024
                </p>
              </div>
            </div>
            <div
              className={`transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-muted"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem className="cursor-pointer">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit project
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Copy className="mr-2 h-4 w-4" />
                    Duplicate
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Share className="mr-2 h-4 w-4" />
                    Share
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
