"use client";

import {
  FullscreenDialog,
  FullscreenDialogClose,
  FullscreenDialogContent,
  FullscreenDialogTrigger,
} from "@/components/effects/fullscreen-dialog";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function DocDialog({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const isOpen = params.get("doc");
    params.set("doc", "true");
    setOpen(isOpen === "true" ? true : false);
  }, [searchParams]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        const params = new URLSearchParams(searchParams);
        params.set("doc", "false");
        const isOpen = params.get("doc");
        setOpen(isOpen === "true" ? true : false);
        replace(`${pathname}?${params.toString()}`);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [pathname, replace, searchParams]);

  function handleOpen() {
    const params = new URLSearchParams(searchParams);
    const isOpen = params.get("doc");
    params.set("doc", "true");
    setOpen(isOpen === "true" ? true : false);
    replace(`${pathname}?${params.toString()}`);
  }

  function handleClose() {
    const params = new URLSearchParams(searchParams);
    params.set("doc", "false");
    const isOpen = params.get("doc");
    setOpen(isOpen === "true" ? true : false);
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <FullscreenDialog open={open} onOpenChange={setOpen}>
      <FullscreenDialogTrigger asChild className="fixed bottom-10 left-10">
        <Button onClick={() => handleOpen()}>Open Doc</Button>
      </FullscreenDialogTrigger>

      <FullscreenDialogContent>
        {children}

        <FullscreenDialogClose
          asChild
          className="absolute right-4 top-4 z-[100]"
        >
          <Button variant={"outline"} onClick={() => handleClose()}>
            Close
          </Button>
        </FullscreenDialogClose>
      </FullscreenDialogContent>
    </FullscreenDialog>
  );
}
