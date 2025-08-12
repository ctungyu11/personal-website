"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="h-16 flex items-center justify-between" aria-label="Main">
      <div className="flex items-center gap-3">
        <Image src="/avatar.png" alt="Avatar" width={40} height={40} className="rounded-full border" />
        <Link href="/" className="font-semibold">Anthony Chou</Link>
      </div>
      <div className="flex items-center gap-6">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={clsx("text-sm hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 rounded px-1", pathname.startsWith(l.href) && "text-blue-600")}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/resume" className="text-sm rounded-lg border border-slate-300 px-3 py-1.5 hover:bg-slate-50">View Resume</Link>
      </div>
    </nav>
  );
}


