import Footer from "@/components/templates/footer";
import Navbar from "@/components/templates/navbar";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  );
}
