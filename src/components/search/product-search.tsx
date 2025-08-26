"use client";

import * as React from "react";
import  Input from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

export default function ProductSearchOverlay() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");

  const toggleSearch = () => setOpen(!open);

  return (
    <div className="flex w-full justify-end md:justify-start">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSearch}
        aria-label="Open search"
        className="ml-auto md:ml-0"
      >
        <Search className="h-5 w-5" />
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center p-4">
          <div className="relative w-full max-w-2xl mt-20">
            <Input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full h-14 rounded-2xl pl-12 pr-12 text-lg text-white placeholder:text-gray-300 focus-visible:ring-2 focus-visible:ring-primary/50 shadow-lg bg-black/70"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-300" />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={toggleSearch}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full hover:bg-muted"
            >
              <X className="h-5 w-5 text-gray-300" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
