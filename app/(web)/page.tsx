import HackedText from "@/components/effects/hacked-text/hacked-text";
import { Main } from "@/components/uis/main";
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
    <Main>
      <section className="space-y-10 py-10">
        <h3 className="text-xl text-muted-foreground text-center">
          Copy and paste component on your project
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
    </Main>
  );
}
