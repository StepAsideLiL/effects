import React from "react";
import { ModeToggle } from "./mode-toggle";
import Logo from "@/components/uis/logo";
import NavMenu from "./nav-menu";
import EffectsMenuSheet from "./effects-menu-sheet";

export default function Navbar() {
  return (
    <header className="container py-4 flex justify-between items-center">
      <div className="lg:flex hidden items-center gap-5">
        <Logo variant="link" />

        <NavMenu />
      </div>

      <div className="lg:hidden block">
        <EffectsMenuSheet />
      </div>

      <div>
        <ModeToggle />
      </div>
    </header>
  );
}
