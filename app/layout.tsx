import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";
import Providers from "@/components/providers/providers";
import Navbar from "@/components/templates/navbar";

export const metadata: Metadata = {
  title: {
    template: "%s - Effects",
    default: "Effects",
  },
  description: "Effects and Styles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />

          {children}
        </Providers>
      </body>
    </html>
  );
}
