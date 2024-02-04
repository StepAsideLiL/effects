"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    title: "Docs",
    href: "/docs",
  },
  {
    title: "Effects",
    href: "/effects",
  },
];

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2">
      {menus.map((list) => (
        <Link
          key={list.href}
          href={list.href}
          className={cn(
            "text-muted-foreground hover:underline",
            pathname === list.href && "text-foreground underline"
          )}
        >
          {list.title}
        </Link>
      ))}
    </nav>
  );
}
