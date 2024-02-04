import React from "react";
import { ModeToggle } from "./mode-toggle";
import Logo from "@/components/uis/logo";
import NavMenu from "./nav-menu";

export default function Navbar() {
  return (
    <header className="container py-4 flex justify-between items-center">
      <div className="flex items-center gap-5">
        <Logo variant="link" />

        <NavMenu />
      </div>

      <div>
        <ModeToggle />
      </div>
    </header>
  );
}
