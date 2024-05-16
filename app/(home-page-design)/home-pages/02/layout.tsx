import { ModeToggle } from "@/components/effects/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import Link from "next/link";
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import PageProgressBar from "./_uis/page-progress-bar";

export const metadata: Metadata = {
  title: "Home Page 02",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageProgressBar />
      {/* Header */}
      <header className="py-5">
        <div className="container flex items-center gap-10">
          <div className="select-none text-2xl font-semibold">Logo</div>

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
      <footer className="bg-slate-800 py-20">
        <div className="mx-auto max-w-4xl space-y-10">
          <div className="flex justify-between gap-10 text-muted-foreground">
            <div className="space-y-8">
              <h1 className="text-sm">Company</h1>

              <div className="flex flex-col gap-2">
                <Link
                  href="#"
                  className="text-muted-foreground/70 transition-colors hover:text-muted-foreground"
                >
                  Tools 1
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground/70 transition-colors hover:text-muted-foreground"
                >
                  Tools 2
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground/70 transition-colors hover:text-muted-foreground"
                >
                  About Us
                </Link>
              </div>
            </div>

            <div className="space-y-8">
              <h1 className="text-sm">Support</h1>

              <div className="flex flex-col gap-2">
                <Link
                  href="#"
                  className="text-muted-foreground/70 transition-colors hover:text-muted-foreground"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="space-y-8">
              <h1 className="text-sm">Need Help?</h1>

              <div className="flex flex-col gap-2 space-y-4">
                <div>
                  <h3 className="text-xs">Call Us Directly</h3>
                  <p className="text-2xl font-semibold text-white">
                    +00 123 456 789
                  </p>
                </div>

                <div>
                  <h3 className="text-xs">Email Us</h3>
                  <p className="text-xl font-semibold text-white">
                    newcompany@example.com
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-60 flex-col items-center justify-center gap-5 rounded border border-muted-foreground/70">
              <div className="select-none text-3xl font-semibold">Logo</div>
              <div className="flex items-center gap-5">
                <Link href="#">
                  <SiFacebook size={24} />
                </Link>

                <Link href="#">
                  <SiLinkedin size={24} />
                </Link>

                <Link href="#">
                  <SiYoutube size={24} />
                </Link>

                <Link href="#">
                  <SiInstagram size={24} />
                </Link>
              </div>
            </div>
          </div>

          <Separator className="bg-muted-foreground" />

          <div className="flex items-center justify-center gap-5">
            <div className="select-none text-3xl font-semibold text-white">
              Logo
            </div>

            <p className="text-muted-foreground">
              © 2023 All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
