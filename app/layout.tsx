import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { GTMHead, GTMBody } from "@/components/layout/analytics";
import JsonLd from "@/components/layout/json-ld";
import ScrollProgress from "@/components/ui/scroll-progress";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ervandra.dev"),
  title: "Ervandra Halim — CTO & Principal Architect",
  description:
    "I architect digital systems that outlast the project and outgrow the plan. CTO & Principal Architect with 15+ years building scalable systems, leading teams, and shipping technology.",
  keywords: [
    "Ervandra Halim",
    "CTO",
    "Principal Architect",
    "Solution Architecture",
    "AI Integration",
    "Fractional CTO",
    "Tech Partner",
    "Agentic AI",
    "Digital Transformation",
  ],
  authors: [{ name: "Ervandra Halim" }],
  alternates: {
    types: { "application/rss+xml": "/feed.xml" },
  },
  openGraph: {
    title: "Ervandra Halim — CTO & Principal Architect",
    description:
      "I architect digital systems that outlast the project and outgrow the plan. 15+ years building scalable systems.",
    url: "https://ervandra.dev",
    siteName: "Ervandra Halim",
    images: [{ url: "/images/cover.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ervandra Halim — CTO & Principal Architect",
    description:
      "I architect digital systems that outlast the project and outgrow the plan.",
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
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <GTMHead />
        <JsonLd />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="relative z-[1]">
        <GTMBody />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
