import { Separator } from "@/components/ui/separator";
import Banner from "./_sections/banner";
import Products from "./_sections/products";
import Features from "./_sections/features";
import ChooseUs from "./_sections/choose-us";
import Visions from "./_sections/visions";
import FallingElement from "./_sections/falling-element";
import BrandsAndAgencies from "./_sections/brands-and-agencies";
import Contact from "./_sections/contact";

export default function Page() {
  return (
    <main>
      {/* Banner */}
      <Banner />

      {/* Products */}
      <Products />

      {/* Features */}
      <Features />

      <Separator className="bg-primary" />

      {/* Choose us */}
      <ChooseUs />

      <Separator className="bg-primary" />

      {/* Visions */}
      <Visions />

      <Separator className="bg-primary" />

      {/* Throwable Physics elements */}
      {/* <FallingElement /> */}

      {/* Top Brands & Agencies */}
      <BrandsAndAgencies />

      {/* Contact */}
      <Contact />
    </main>
  );
}
