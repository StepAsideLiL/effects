"use client";

import { AnimatedUnderline } from "@/components/effects/animated-underline/animated-underline";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderMenu({ className }: { className?: string }) {
  const menus = [
    {
      title: "Home",
      href: "/home-pages/01",
    },
    {
      title: "About Us",
      href: "/home-pages/01/about-us",
    },
    {
      title: "Contact Us",
      href: "/home-pages/01/contact-us",
    },
    {
      title: "Blogs",
      href: "/home-pages/01/blogs",
    },
  ];

  const pathname = usePathname();

  return (
    <nav className={cn("flex justify-center items-center gap-5", className)}>
      {menus.map((item, i) => (
        <AnimatedUnderline
          key={i}
          variant={item.href === pathname ? "active" : "default"}
          asChild
        >
          <Link href={``}>{item.title}</Link>
        </AnimatedUnderline>
      ))}
    </nav>
  );
}
