import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vyron Fit",
  description: "Built for Discipline & Strength",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#070707] text-white">{children}</body>
    </html>
  );
}