"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Logo from "@/components/uis/logo";
import { Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import NavMenu from "@/components/templates/nav-menu";
import { usePathname } from "next/navigation";
import { menus } from "@/lib/menus";

export default function EffectsMenuSheet() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size={"icon"}>
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side={"left"} className="space-y-6">
        <SheetHeader>
          <Logo variant="link" />
        </SheetHeader>

        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-10">
          <nav className="flex flex-col gap-2">
            <NavMenu orientation="vertical" />
            <Separator />
            <h1 className="text-lg font-semibold">Effects & Styles</h1>
            {menus.effectsList.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm text-muted-foreground hover:underline",
                  pathname === item.href && "text-foreground underline",
                )}
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
