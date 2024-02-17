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
  {
    title: "Front pages",
    href: "/front-pages",
  },
  {
    title: "Designs",
    href: "/designs",
  },
];

export default function NavMenu({
  orientation = "",
}: {
  orientation?: "" | "default" | "horizontal" | "vertical";
}) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        orientation !== "vertical" && "flex items-center gap-2",
        orientation === "vertical" && "flex flex-col"
      )}
    >
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
