import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ServicesContent from "@/components/sections/services-content";

export const metadata: Metadata = {
  title: "Services | Ervandra Halim — AI Solutions, Digital Transformation, Fractional CPTO",
  description:
    "AI-powered business solutions, digital transformation, strategic tech partnership, and custom software development. Available directly or via Syntax Solution.",
  openGraph: {
    title: "Services — Ervandra Halim",
    description: "AI solutions, digital transformation, and strategic tech partnership for SMEs.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesContent />
      </main>
      <Footer />
    </>
  );
}
