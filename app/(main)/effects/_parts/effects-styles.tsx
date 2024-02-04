import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function EffectsAndStylesList() {
  return (
    <section className="grid grid-cols-4 gap-2">
      <Card>
        <div className="w-full h-40 bg-fuchsia-200"></div>

        <CardHeader>
          <CardTitle className="text-center">Hello</CardTitle>
        </CardHeader>
      </Card>
    </section>
  );
}
