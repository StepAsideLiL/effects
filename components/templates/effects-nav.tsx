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
import { Menu, MoveLeft } from "lucide-react";
import Link from "next/link";
import { effects } from "@/components/effects/effects";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function EffectsNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="container fixed top-3 flex items-center gap-3 z-50">
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
              {effects.map((list) => (
                <Link
                  key={list.herf}
                  href={list.herf}
                  className={cn("text-sm hover:underline")}
                  onClick={() => setOpen(false)}
                >
                  {list.title}
                </Link>
              ))}
            </nav>
          </ScrollArea>
        </SheetContent>
      </Sheet>

      <Button variant={"ghost"} size={"icon"}>
        <Link href={"/effects"}>
          <MoveLeft />
        </Link>
      </Button>
    </header>
  );
}
