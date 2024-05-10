import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page 02",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-200 dark:bg-background">
      {/* Header */}
      <header></header>

      {/* Main body */}
      {children}

      {/* Footer */}
      <footer></footer>
    </div>
  );
}
