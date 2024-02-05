import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Logo from "@/components/uis/logo";
import { ArrowLeft, Menu } from "lucide-react";
import Link from "next/link";
import EffectsSidebar from "./effects-sidebar";

export default function EffectsNav() {
  return (
    <header className="container fixed top-3 flex items-center gap-3">
      <Sheet>
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
            <EffectsSidebar />
          </ScrollArea>
        </SheetContent>
      </Sheet>

      <Button variant={"ghost"} size={"icon"}>
        <Link href={"/effects"}>
          <ArrowLeft />
        </Link>
      </Button>
    </header>
  );
}
