import HackedText from "@/components/effects/hacked-text/hacked-text";
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
    <main className="container min-h-screen py-4 space-y-4">
      <section className="space-y-10 py-10">
        <h3 className="text-xl text-muted-foreground text-center">
          Embrace The Power Of Copy-Paste
        </h3>
        <HackedText
          className={cn(
            rubikMonoOne.className,
            "w-fit mx-auto text-center text-6xl"
          )}
        >
          EFFECTS & STYLES
        </HackedText>

        <p className="text-xl font-medium text-center">FOR</p>

        <section className="flex justify-center items-center gap-10">
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
