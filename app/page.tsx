import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import LogoBar from "@/components/sections/logo-bar";
import Services from "@/components/sections/services";
import FeaturedWork from "@/components/sections/featured-work";
import About from "@/components/sections/about";
import Testimonials from "@/components/sections/testimonials";
import BlogPreview from "@/components/sections/blog-preview";
import LeadMagnet from "@/components/sections/lead-magnet";
import CTA from "@/components/sections/cta";
import { getAllPosts } from "@/lib/mdx";

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoBar />
        <Services />
        <FeaturedWork />
        <About />
        <Testimonials />
        <BlogPreview posts={posts} />
        <LeadMagnet />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
