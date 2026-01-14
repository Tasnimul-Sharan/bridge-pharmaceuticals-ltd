import BlogPageSection from "@/components/BlogPageSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Head from "next/head";
export default function BlogsPage() {
  const meta = {
    title:
      "Blogs | Anondo Baari - Wellness, Senior Living & Lifestyle Insights",
    description:
      "Read blogs and articles from Anondo Baari on senior wellness, assisted living, holistic healthcare, nutrition, yoga, community lifestyle, and elderly care in Bangladesh.",
    keywords:
      "Anondo Baari blogs, senior wellness articles, elderly care Bangladesh, assisted living Dhaka, wellness lifestyle blogs, yoga meditation tips, nutrition for seniors, retirement home insights, holistic healthcare Bangladesh",
    author: "Anondo Baari",
    url: "https://www.anondobari.com/blogs",
    image: "https://www.anondobari.com/blogs/blog-og.jpg",
  };

  return (
    <div className="w-full relative">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      {/* <Navbar hasBackground={true} /> */}
      <HeroSection
        hero={{
          title: "Blogs",
          backgroundImage: "/blogs/blog-hero.jpg",
        }}
      />
      <BlogPageSection />
    </div>
  );
}
