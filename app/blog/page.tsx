import { getAllPosts } from "@/lib/mdx";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BlogList from "@/components/sections/blog-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Ervandra Halim",
  description:
    "Insights on AI automation, digital transformation, and tech leadership for SMEs and professionals.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main>
        <BlogList posts={posts} />
      </main>
      <Footer />
    </>
  );
}
