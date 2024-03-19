import { AnimatedUnderline } from "@/components/effects/animated-underline/animated-underline";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { menus } from "@/lib/menus";
import Link from "next/link";

export default function EffectsAndStylesList() {
  return (
    <section className="grid grid-cols-4 gap-2">
      {menus.effectsList.map((effect) => (
        <Card key={effect.href}>
          <CardHeader>
            <CardTitle className="text-center text-lg">
              <AnimatedUnderline asChild>
                <Link href={effect.href}>{effect.title}</Link>
              </AnimatedUnderline>
            </CardTitle>
          </CardHeader>
        </Card>
      ))}
    </section>
  );
}
