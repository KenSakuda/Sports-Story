import type { Metadata } from "next";
// import Script from 'next/script';
import "./globals.css";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
// import { GTM } from '@/_components/GTM';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL as string),
  title: {
    template: "%s｜Sports Story",
    default: "Sports Story - スポーツアナリティクス特化型ニュースサイト",
  },
  description: "データアナリティクスに特化したスポーツニュースサイト",
  openGraph: {
    title: "Sports Story",
    description: "データアナリティクスに特化したスポーツニュースサイト",
    type: "website",
    images: "/logo_mystory.jng",
  },
  // twitter: {
  //   card: "summary_large_image",
  // },
  alternates: {
    canonical: "https:/sportsstory.b-mystory.com",
  },
};

const isProduction: boolean = process.env.NODE_ENV === "production";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      {/* {isProduction && (
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0000000000000000"
          crossOrigin="anonymous"
        />
      )} */}
      {/* {isProduction && <GTM />} */}
      {isProduction}
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
