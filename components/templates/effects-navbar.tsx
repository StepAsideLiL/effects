import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import EffectsMenuSheet from "./effects-menu-sheet";

export default function EffectsNavbar() {
  return (
    <header className="container fixed top-3 z-50 flex items-center gap-3">
      <EffectsMenuSheet />

      <Button variant={"ghost"} size={"icon"}>
        <Link href={"/effects"}>
          <span className="sr-only">Back to effects page</span>
          <MoveLeft />
        </Link>
      </Button>
    </header>
  );
}
