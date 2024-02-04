import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <main className="justify-center text-center py-10">Hello, Effects</main>
  );
}
