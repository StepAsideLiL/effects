"use client";

import { LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "../ui/button";
import { menus } from "@/lib/menus";
import { useRouter } from "next/navigation";
import { MenuSquare, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

export default function SearchCommandMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant={"outline"}
        className="lg:w-96 w-full text-sm text-muted-foreground px-3 py-1 flex justify-between items-center"
        onClick={() => setOpen((open) => !open)}
      >
        <span>Search...</span>
        <span>
          <span className="">⌘</span> <span className="font-mono">K</span>
        </span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Menus">
            {menus.mainHeaderMenu.map((item) => (
              <CommandItem
                key={item.href}
                value={item.title}
                onSelect={() => {
                  runCommand(() => router.push(item.href as string));
                }}
              >
                <MenuSquare className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Effects & Style">
            {menus.effectsList.map((item) => (
              <CommandItem
                key={item.href}
                value={item.title}
                onSelect={() => {
                  runCommand(() => router.push(item.href as string));
                }}
              >
                <Sparkles className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <SunIcon className="mr-2 h-4 w-4" />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <MoonIcon className="mr-2 h-4 w-4" />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <LaptopIcon className="mr-2 h-4 w-4" />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
