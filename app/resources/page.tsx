import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ResourcesContent from "@/components/sections/resources-content";

export const metadata: Metadata = {
  title: "Free Resources | Ervandra Halim — AI Checklists, Templates & Guides",
  description:
    "Free tools and guides for SMEs: AI Readiness Checklist, Technology Audit Template, and Digital Transformation Playbook.",
  openGraph: {
    title: "Free Resources — Ervandra Halim",
    description: "AI checklists, technology audit templates, and transformation playbooks for SMEs.",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        <ResourcesContent />
      </main>
      <Footer />
    </>
  );
}
