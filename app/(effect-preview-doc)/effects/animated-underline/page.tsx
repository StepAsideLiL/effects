import { AnimatedUnderline } from "@/components/effects/animated-underline/animated-underline";
import AnimatedUnderlineDoc from "@/components/effects/animated-underline/animated-underline-doc";
import { Separator } from "@/components/ui/separator";
import { ComponentContain, MoveToDocLink } from "@/components/uis/docs-ui";
import Link from "next/link";

export default function AnimatedUnderlinePage() {
  return (
    <main>
      <ComponentContain className="gap-5">
        <AnimatedUnderline className="text-lg">
          Animated Underline Default
        </AnimatedUnderline>
        <AnimatedUnderline className="text-lg" variant={"left"}>
          Animated Underline From Left
        </AnimatedUnderline>
        <AnimatedUnderline className="text-lg" variant={"leftReverse"}>
          Animated Underline From Left Reverse
        </AnimatedUnderline>
        <AnimatedUnderline className="text-lg" variant={"right"}>
          Animated Underline From Right
        </AnimatedUnderline>
        <AnimatedUnderline className="text-lg" variant={"rightReverse"}>
          Animated Underline From Right Reverse
        </AnimatedUnderline>
        <AnimatedUnderline className="text-lg" variant={"middle"}>
          Animated Underline From Middle
        </AnimatedUnderline>
        <AnimatedUnderline className="text-lg" variant={"middleReverse"}>
          Animated Underline From Middle Reverse
        </AnimatedUnderline>
        <AnimatedUnderline className="text-lg" asChild>
          <Link href={`https://github.com/StepAsideLiL/effects`}>
            Animated Underline Link
          </Link>
        </AnimatedUnderline>

        <MoveToDocLink />
      </ComponentContain>

      <Separator orientation="horizontal" />

      <AnimatedUnderlineDoc />
    </main>
  );
}
