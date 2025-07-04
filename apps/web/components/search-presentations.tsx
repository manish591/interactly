'use client';

import { useEffect, useRef, useState } from 'react';
import { Input } from '@workspace/ui/components/input';
import { Search } from 'lucide-react';
import { cn } from '@workspace/ui/lib/utils';

const PresentationsData = [
  'kotlin',
  'java',
  'university',
  'playground',
  'cricket',
  'web development',
];

async function fetchSearchResults(query: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return PresentationsData.filter(
    (item) => query != '' && item.includes(query),
  );
}

export function SearchPresentations() {
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const searchDropdownRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickedOutside(e: MouseEvent) {
      if (searchRef && !searchRef.current?.contains(e.target as Node)) {
        setIsFocused(false);
      }
    }

    document.addEventListener('mousedown', handleClickedOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickedOutside);
    };
  }, []);

  useEffect(() => {
    if (searchDropdownRef.current) {
      setDropdownHeight(searchDropdownRef.current.offsetHeight);
    }
  }, [isFocused, searchQuery, searchResults]);

  useEffect(() => {
    (async function () {
      if (searchQuery != '') {
        setIsLoading(true);
        const results = await fetchSearchResults(searchQuery);
        setSearchResults(results);
        setIsLoading(false);
      }
    })();
  }, [searchQuery]);

  return (
    <div
      ref={searchRef}
      className={cn(
        'w-md px-2 relative border border-transparent',
        !isFocused || !searchQuery || isLoading
          ? 'border border-foreground shadow-md'
          : '',
      )}
    >
      <div className="z-10 flex items-center w-full h-10 relative">
        <Search className="w-4 h-4" />
        <Input
          type="text"
          placeholder="Search presentations..."
          className="shadow-none border-none focus-visible:border-0 focus-visible:ring-ring/0 focus-visible:ring-[0px]"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          onFocus={() => setIsFocused(true)}
        />
        {isLoading && (
          <div className="absolute right-0 animate-spin inline-block size-4 border-3 border-foreground/60 border-t-transparent rounded-full">
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
      {isFocused && (
        <div>
          <div
            ref={searchDropdownRef}
            className="z-10 px-2 pt-4 pb-3 max-h-52 overflow-y-auto w-full absolute bg-background top-full left-0"
          >
            {searchResults.length <= 0 || !searchQuery ? (
              <p className="text-sm text-foreground/70">No search result</p>
            ) : (
              <div>
                <p className="text-sm text-foreground/70">
                  Search Result for query{' '}
                  <span className="text-foreground">{searchQuery}</span>
                </p>
                <div className="mt-4">
                  {searchResults.map((res) => {
                    return (
                      <div
                        key={res}
                        className="py-1 hover:opacity-80 transition-opacity duration-200 text-sm"
                      >
                        {res}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <div
            style={{ height: dropdownHeight + 40 }}
            className={cn(
              'w-full border absolute top-0 left-0',
              isFocused
                ? 'border-ring ring-[3px] ring-ring/50 border shadow-md'
                : '',
            )}
          ></div>
        </div>
      )}
    </div>
  );
}
