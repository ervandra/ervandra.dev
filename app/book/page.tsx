import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BookContent from "@/components/sections/book-content";

export const metadata: Metadata = {
  title: "Book a Free Strategy Session | Ervandra Halim",
  description:
    "Schedule a free 30-minute strategy session. No obligation — just an honest conversation about where technology can take your business.",
  openGraph: {
    title: "Book a Free Strategy Session",
    description: "30 minutes to discuss your business goals and technology challenges.",
  },
};

export default function BookPage() {
  return (
    <>
      <Header />
      <main>
        <BookContent />
      </main>
      <Footer />
    </>
  );
}
