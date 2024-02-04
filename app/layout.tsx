import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/lib/fonts";
import Providers from "@/components/providers/providers";

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
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
