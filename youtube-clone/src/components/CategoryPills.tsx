"use client";
import { useState } from "react";
import { categories } from "@/data/mock";

export default function CategoryPills() {
  const [active, setActive] = useState(0);
  return (
    <div className="sticky top-16 z-30 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 py-3 overflow-x-auto no-scrollbar">
          {categories.map((c, i) => (
            <button
              key={c}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition ${
                active === i
                  ? "bg-foreground text-background"
                  : "bg-black/[.04] dark:bg-white/[.06] hover:bg-black/[.06] dark:hover:bg-white/[.08]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

