import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/trending", label: "Trending" },
  { href: "/subscriptions", label: "Subscriptions" },
  { href: "/library", label: "Library" },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-64 shrink-0 border-r border-black/5 dark:border-white/10 pt-4">
      <nav className="px-3 space-y-1">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="block px-3 py-2 rounded-md text-sm hover:bg-black/[.04] dark:hover:bg-white/[.06]"
          >
            {l.label}
          </Link>
        ))}
      </nav>
      <div className="px-3 mt-4">
        <p className="text-xs uppercase tracking-wide text-black/50 dark:text-white/50 mb-2">Shortcuts</p>
        <div className="grid grid-cols-2 gap-2">
          {["Music","Gaming","Live","Sports","News","Movies"].map((t) => (
            <span key={t} className="px-3 py-2 rounded-full text-xs bg-black/[.04] dark:bg-white/[.06]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}

