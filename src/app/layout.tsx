import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ervandra Halim | Tech Expert · 15+ Years · CPTO & Founder",
    template: "%s | Ervandra Halim",
  },
  description:
    "Tech expert and builder (15+ years). CPTO and solo founder helping people and SMEs implement cost-effective AI automation and AI solutions that deliver speed, accuracy, and visible results.",
  authors: [{ name: "Ervandra Halim" }],
  creator: "Ervandra Halim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ervandra.dev",
    siteName: "Ervandra Halim",
    title: "Ervandra Halim | Tech Expert · 15+ Years · CPTO & Founder",
    description:
      "Tech expert and builder (15+ years). CPTO and solo founder helping people and SMEs implement cost-effective AI automation.",
    images: [{ url: "/images/cover.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ervandracom",
    title: "Ervandra Halim | Tech Expert · CPTO & Founder",
    description:
      "Tech expert and builder (15+ years). CPTO and solo founder helping people and SMEs implement cost-effective AI automation.",
    images: ["/images/cover.png"],
  },
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://www.ervandra.dev"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTMID;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="bg-grid min-h-screen">
            {children}
          </div>
        </ThemeProvider>

        {gtmId && (
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        )}
      </body>
    </html>
  );
}
