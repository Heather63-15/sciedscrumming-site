import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sciedscrumming.com"),
  title: {
    default: "SciEdScrumming — Building Systems of Collaborative Learning",
    template: "%s | SciEdScrumming",
  },
  description:
    "SciEdScrumming blends Universal Design for Learning (UDL) with Agile Scrum practices to build student-centered classrooms and empower independent learners.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "SciEdScrumming",
    title: "SciEdScrumming — Building Systems of Collaborative Learning",
    description:
      "Blending UDL with Agile Scrum for greater student autonomy. Education consulting, tutoring, and courses.",
    images: [
      {
        url: "/images/ses-logo.png",
        width: 120,
        height: 120,
        alt: "SciEdScrumming Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "SciEdScrumming — Building Systems of Collaborative Learning",
    description:
      "Blending UDL with Agile Scrum for greater student autonomy.",
  },
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
