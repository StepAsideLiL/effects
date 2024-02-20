import Footer from "./_parts/footer";
import Navbar from "./_parts/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark:bg-background bg-gray-200">
      <Navbar />

      {children}

      <Footer />
    </div>
  );
}
