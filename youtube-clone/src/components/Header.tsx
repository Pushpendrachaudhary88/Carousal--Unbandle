"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "./Logo";

export default function Header() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-3">
        <Logo />
        <form onSubmit={onSubmit} className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-2xl flex items-center gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="w-full h-10 rounded-full border border-black/10 dark:border-white/15 bg-white/90 dark:bg-black/40 px-4 text-sm outline-none focus:ring-2 ring-red-500/60"
            />
            <button
              type="submit"
              className="h-10 px-5 rounded-full bg-red-500 text-white text-sm font-medium hover:bg-red-600 active:bg-red-700 transition"
            >
              Search
            </button>
          </div>
        </form>
        <div className="hidden sm:flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-400 to-orange-400" />
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-400 to-indigo-400" />
        </div>
      </div>
    </header>
  );
}

