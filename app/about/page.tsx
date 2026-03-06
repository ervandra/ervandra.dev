import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import AboutContent from "@/components/sections/about-content";

export const metadata: Metadata = {
  title: "About | Ervandra Halim — Strategic Tech Partner",
  description:
    "15+ years building technology that moves businesses forward. CPTO & Co-founder at Syntax Solution. Career timeline, skills, and expertise.",
  openGraph: {
    title: "About Ervandra Halim",
    description: "15+ years building technology that moves businesses forward.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
