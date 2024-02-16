import EffectsNav from "@/components/templates/effects-nav";
import Footer from "@/components/templates/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EffectsNav />

      {children}

      <Footer />
    </>
  );
}
