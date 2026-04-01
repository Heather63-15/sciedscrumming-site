import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1682903248978133');
          fbq('track', 'PageView');
        `}</Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1682903248978133&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LK8Z12V7JJ"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LK8Z12V7JJ');
        `}</Script>
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
