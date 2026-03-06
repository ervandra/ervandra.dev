import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WorkContent from "@/components/sections/work-content";

export const metadata: Metadata = {
  title: "Work | Ervandra Halim — Projects & Portfolio",
  description:
    "Selected projects across enterprise, fintech, e-commerce, and digital transformation. R/GA, Komunal, Yoona, Magnificat, and more.",
  openGraph: {
    title: "Work & Portfolio — Ervandra Halim",
    description: "Selected projects across enterprise, fintech, e-commerce, and digital transformation.",
  },
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main>
        <WorkContent />
      </main>
      <Footer />
    </>
  );
}
