import Link from "next/link";
import { effects } from "../effects/effects";
import { cn } from "@/lib/utils";

export default function EffectsSidebar() {
  return (
    <nav className="flex flex-col gap-2">
      {effects.map((list) => (
        <Link
          key={list.herf}
          href={list.herf}
          className={cn("text-sm hover:underline")}
        >
          {list.title}
        </Link>
      ))}
    </nav>
  );
}
