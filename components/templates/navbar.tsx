import React from "react";
import { ModeToggle } from "./mode-toggle";
import Logo from "@/components/uis/logo";
import NavMenu from "./nav-menu";
import EffectsMenuSheet from "./effects-menu-sheet";
import SearchCommandMenu from "./search-command-menu";

export default function Navbar() {
  return (
    <header className="container flex items-center justify-between gap-5 py-4">
      <div className="hidden items-center gap-5 lg:flex lg:w-full">
        <Logo variant="link" />

        <NavMenu />
      </div>

      <div className="block lg:hidden">
        <EffectsMenuSheet />
      </div>

      <div className="flex w-full items-center justify-end gap-5">
        <SearchCommandMenu />
        <ModeToggle />
      </div>
    </header>
  );
}
