import { Metadata } from "next";
import Footer from "./_parts/footer";
import Navbar from "./_parts/navbar";

export const metadata: Metadata = {
  title: "Home Page 01",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark:bg-background bg-gray-200">
      <Navbar />

      {children}

      <Footer />
    </div>
  );
}
