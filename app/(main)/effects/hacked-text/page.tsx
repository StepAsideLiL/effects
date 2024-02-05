import HackedTextDoc from "@/components/effects/hacked-text/hacked-text-doc";
import HackedText from "@/components/effects/hacked-text/hacked-text";
import { Separator } from "@/components/ui/separator";

export default function HackedTextPage() {
  return (
    <main>
      <section className="min-h-screen flex items-center justify-center">
        <HackedText className="text-4xl">Hacked Text</HackedText>
      </section>

      <Separator orientation="horizontal" />

      <HackedTextDoc />
    </main>
  );
}
