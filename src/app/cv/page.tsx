import type { Metadata } from "next";
import CVContent from "@/components/sections/CVContent";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Ervandra Halim - Technology Lead",
};

export default function CVPage() {
  return <CVContent />;
}
