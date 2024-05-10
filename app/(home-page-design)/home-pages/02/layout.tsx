import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Page 02",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-200 dark:bg-background">
      {/* Header */}
      <div className="py-5">
        <header className="container flex items-center gap-10">
          <h1 className="text-2xl">Logo</h1>

          <nav className="flex-1">
            <ul className="flex items-center gap-5">
              <li>
                <Link
                  href="#"
                  className="rounded px-2 py-1 transition-colors hover:bg-muted/50"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="rounded px-2 py-1 transition-colors hover:bg-muted/50"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="rounded px-2 py-1 transition-colors hover:bg-muted/50"
                >
                  Tools
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="rounded px-2 py-1 transition-colors hover:bg-muted/50"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Login
          </Link>
        </header>
      </div>

      {/* Main body */}
      {children}

      {/* Footer */}
      <footer></footer>
    </div>
  );
}
