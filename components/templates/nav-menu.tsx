"use client";

import { menus } from "@/lib/menus";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
        orientation === "vertical" && "flex flex-col",
      )}
    >
      {menus.mainHeaderMenu.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-muted-foreground hover:underline",
            pathname === item.href && "text-foreground underline",
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
