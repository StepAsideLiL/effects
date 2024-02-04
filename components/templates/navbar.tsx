import React from "react";
import { ModeToggle } from "./mode-toggle";
import Logo from "@/components/uis/logo";

export default function Navbar() {
  return (
    <header className="container py-4 flex justify-between items-center">
      <div>
        <Logo variant="link" />
      </div>

      <div>
        <ModeToggle />
      </div>
    </header>
  );
}
