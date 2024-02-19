import Footer from "./_parts/footer";
import Navbar from "./_parts/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  );
}
