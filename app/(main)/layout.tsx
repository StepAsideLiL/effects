import EffectsNav from "@/components/templates/effects-nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EffectsNav />

      {children}
    </>
  );
}
