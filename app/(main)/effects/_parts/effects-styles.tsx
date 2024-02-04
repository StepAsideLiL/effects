import { effects } from "@/components/effects/effects";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function EffectsAndStylesList() {
  return (
    <section className="grid grid-cols-4 gap-2">
      {effects.map((effect) => (
        <Card key={effect.herf}>
          <Link href={effect.herf}>
            <div className="w-full pb-[100%]"></div>
          </Link>

          <CardHeader>
            <CardTitle className="text-center">
              <Link href={effect.herf} className="hover:underline">
                {effect.title}
              </Link>
            </CardTitle>
          </CardHeader>
        </Card>
      ))}
    </section>
  );
}
