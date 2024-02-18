import React from "react";
import { ModeToggle } from "./mode-toggle";
import Logo from "@/components/uis/logo";
import NavMenu from "./nav-menu";
import EffectsMenuSheet from "./effects-menu-sheet";
import SearchCommandMenu from "./search-command-menu";

export default function Navbar() {
  return (
    <header className="container py-4 flex justify-between items-center gap-5">
      <div className="lg:w-full lg:flex hidden items-center gap-5">
        <Logo variant="link" />

        <NavMenu />
      </div>

      <div className="lg:hidden block">
        <EffectsMenuSheet />
      </div>

      <div className="w-full flex justify-end items-center gap-5">
        <SearchCommandMenu />
        <ModeToggle />
      </div>
    </header>
  );
}
