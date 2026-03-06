import type { Metadata } from "next";
import { Merriweather, Fira_Sans } from "next/font/google";
import { GTMHead, GTMBody } from "@/components/layout/analytics";
import JsonLd from "@/components/layout/json-ld";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-heading",
  display: "swap",
});

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ervandra.dev"),
  title: "Ervandra Halim | Strategic Tech Partner — CPTO & Co-founder",
  description:
    "Strategic Tech Partner with 15+ years experience. I help SMEs and professionals build AI-powered businesses through digital transformation, AI automation, and custom software development.",
  keywords: [
    "Ervandra Halim",
    "Strategic Tech Partner",
    "CPTO",
    "AI Automation",
    "Digital Transformation",
    "Fractional CTO",
    "Software Development",
    "Tech Consultant",
  ],
  authors: [{ name: "Ervandra Halim" }],
  alternates: {
    types: { "application/rss+xml": "/feed.xml" },
  },
  openGraph: {
    title: "Ervandra Halim | Strategic Tech Partner",
    description:
      "15+ years building, leading, and shipping technology that drives real business results.",
    url: "https://ervandra.dev",
    siteName: "Ervandra Halim",
    images: [{ url: "/images/cover.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ervandra Halim | Strategic Tech Partner",
    description:
      "15+ years building, leading, and shipping technology that drives real business results.",
    creator: "@ervandracom",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${merriweather.variable} ${firaSans.variable}`}>
      <head>
        <GTMHead />
        <JsonLd />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="relative z-[1]">
        <GTMBody />
        {children}
      </body>
    </html>
  );
}
