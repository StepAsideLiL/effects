import HackedText from "@/components/effects/hacked-text";
import { NextjsIcon, ShadcnIcon } from "@/components/uis/svg-icons";
import { rubikMonoOne } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <main className="container min-h-screen space-y-4 py-4">
      <section className="space-y-10 py-10">
        <section className="space-y-2">
          <h3 className="text-center text-base text-muted-foreground md:text-xl">
            Embrace The Power Of Copy-Paste
          </h3>
          <HackedText
            className={cn(
              rubikMonoOne.className,
              "mx-auto hidden w-fit text-center text-6xl lg:block",
            )}
          >
            EFFECTS & STYLES
          </HackedText>
          <h1
            className={cn(
              rubikMonoOne.className,
              "block text-center text-4xl lg:hidden",
            )}
          >
            EFFECTS & STYLES
          </h1>
        </section>

        <p className="text-center text-lg font-medium md:text-xl">FOR</p>

        <section className="flex items-center justify-center gap-10">
          <Link href={`https://nextjs.org/`} target="_blank">
            <NextjsIcon />
          </Link>
          <Link href={`https://ui.shadcn.com/`} target="_blank">
            <ShadcnIcon />
          </Link>
        </section>
      </section>
    </main>
  );
}
