import Link from "next/link";
import { effects } from "../effects/effects";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import NavMenu from "./nav-menu";

export default function EffectsSidebar() {
  return (
    <nav className="flex flex-col gap-2">
      <NavMenu orientation="vertical" />
      <Separator />
      <h1 className="text-lg font-semibold">Effects & Styles</h1>
      {effects.map((list) => (
        <Link
          key={list.herf}
          href={list.herf}
          className={cn("text-muted-foreground text-sm hover:underline")}
        >
          {list.title}
        </Link>
      ))}
    </nav>
  );
}
