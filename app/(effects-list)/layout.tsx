import EffectsSidebar from "@/components/templates/effects-sidebar";
import Footer from "@/components/templates/footer";
import Navbar from "@/components/templates/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function EffectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <div className="container grid min-h-screen grid-cols-5 gap-10">
        <aside className="col-span-1 hidden lg:block">
          <ScrollArea className="h-[calc(100vh-8rem)] py-5">
            <EffectsSidebar />
          </ScrollArea>
        </aside>

        <main className="col-span-5 space-y-10 lg:col-span-4">{children}</main>
      </div>

      <Footer />
    </>
  );
}
