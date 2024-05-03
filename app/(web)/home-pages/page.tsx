import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
  return (
    <main className="container min-h-screen space-y-10">
      <h1 className="py-10 text-center text-2xl font-semibold">
        Every Website Deserve A Beautiful Home Page
      </h1>

      <section className="grid grid-cols-3 gap-2">
        <Card>
          <CardHeader>
            <CardTitle>
              <Link href={`/home-pages/01`} className="hover:underline">
                01
              </Link>
            </CardTitle>
          </CardHeader>
        </Card>
      </section>
    </main>
  );
}
