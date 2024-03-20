import HackedTextDoc from "@/components/effects/docs/hacked-text-doc";
import HackedText from "@/components/effects/hacked-text";
import { Separator } from "@/components/ui/separator";
import { ComponentContain, MoveToDocLink } from "@/components/uis/docs-ui";

export default function HackedTextPage() {
  return (
    <main>
      <ComponentContain>
        <HackedText className="text-9xl">Hacked Text</HackedText>

        <MoveToDocLink />
      </ComponentContain>

      <Separator orientation="horizontal" />

      <HackedTextDoc />
    </main>
  );
}
