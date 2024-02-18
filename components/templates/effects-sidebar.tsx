import Link from "next/link";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import NavMenu from "./nav-menu";
import { menus } from "@/lib/menus";

export default function EffectsSidebar() {
  return (
    <nav className="flex flex-col gap-2">
      <NavMenu orientation="vertical" />
      <Separator />
      <h1 className="text-lg font-semibold">Effects & Styles</h1>
      {menus.effectsList.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn("text-muted-foreground text-sm hover:underline")}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
