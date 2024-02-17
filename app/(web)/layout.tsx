import EffectsSidebar from "@/components/templates/effects-sidebar";
import Navbar from "@/components/templates/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
}
