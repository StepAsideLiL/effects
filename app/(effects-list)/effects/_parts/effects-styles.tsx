import { AnimatedUnderline } from "@/components/effects/animated-underline/animated-underline";
import { effects } from "@/components/effects/effects";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function EffectsAndStylesList() {
  return (
    <section className="grid grid-cols-4 gap-2">
      {effects.map((effect) => (
        <Card key={effect.herf}>
          <CardHeader>
            <CardTitle className="text-center text-lg">
              <AnimatedUnderline asChild>
                <Link href={effect.herf}>{effect.title}</Link>
              </AnimatedUnderline>
            </CardTitle>
          </CardHeader>
        </Card>
      ))}
    </section>
  );
}
