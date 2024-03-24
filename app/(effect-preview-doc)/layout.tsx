import EffectsMenuSheet from "@/components/templates/effects-menu-sheet";
import SearchCommandMenu from "@/components/templates/search-command-menu";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="container fixed top-3 z-50 flex items-center gap-3">
        <EffectsMenuSheet />

        <Button variant={"ghost"} size={"icon"}>
          <Link href={"/effects"}>
            <span className="sr-only">Back to effects page</span>
            <MoveLeft />
          </Link>
        </Button>

        <SearchCommandMenu />
      </header>

      {children}
    </>
  );
}
