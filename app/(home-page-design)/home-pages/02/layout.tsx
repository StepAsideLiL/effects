import { ModeToggle } from "@/components/effects/mode-toggle";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Page 02",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Header */}
      <header className="py-5">
        <div className="container flex items-center gap-10">
          <h1 className="text-2xl">Logo</h1>

          <nav className="flex-1">
            <ul className="flex items-center gap-5">
              <li>
                <Link
                  href="#"
                  className="rounded px-2 py-1 font-semibold transition-colors hover:bg-muted/50"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="rounded px-2 py-1 font-semibold transition-colors hover:bg-muted/50"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="rounded px-2 py-1 font-semibold transition-colors hover:bg-muted/50"
                >
                  Tools
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="rounded px-2 py-1 font-semibold transition-colors hover:bg-muted/50"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-5">
            <ModeToggle />

            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* Main body */}
      {children}

      {/* Footer */}
      <footer></footer>
    </>
  );
}
