import EffectsNavbar from "@/components/templates/effects-navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EffectsNavbar />

      {children}
    </>
  );
}
