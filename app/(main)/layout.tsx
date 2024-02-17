import EffectsNavbar from "@/components/templates/effects-navbar";
import Footer from "@/components/templates/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EffectsNavbar />

      {children}

      <Footer />
    </>
  );
}
