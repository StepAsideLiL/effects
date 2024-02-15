import { AnimatedUnderline } from "@/components/effects/animated-underline/animated-underline";
import AnimatedUnderlineDoc from "@/components/effects/animated-underline/animated-underline-doc";
import { Separator } from "@/components/ui/separator";
import { ComponentContain, MoveToDocLink } from "@/components/uis/docs-ui";
import Link from "next/link";

export default function AnimatedUnderlinePage() {
  return (
    <main>
      <ComponentContain className="gap-5">
        <AnimatedUnderline className="text-2xl">
          Animated Underline
        </AnimatedUnderline>
        <AnimatedUnderline className="text-2xl" variant={"fromRight"}>
          Animated Underline
        </AnimatedUnderline>
        <AnimatedUnderline className="text-2xl" variant={"fromMiddle"}>
          Animated Underline
        </AnimatedUnderline>
        <AnimatedUnderline className="text-2xl" variant={"fromMiddle"} asChild>
          <Link href={`https://github.com/StepAsideLiL/effects`}>
            Animated Underline
          </Link>
        </AnimatedUnderline>

        <MoveToDocLink />
      </ComponentContain>

      <Separator orientation="horizontal" />

      <AnimatedUnderlineDoc />
    </main>
  );
}
