import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "SciEdScrumming — Building Systems of Collaborative Learning",
    template: "%s | SciEdScrumming",
  },
  description:
    "SciEdScrumming blends Universal Design for Learning (UDL) with Agile Scrum practices to build student-centered classrooms and empower independent learners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
