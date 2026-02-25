import BlogPageSection from "@/components/BlogPageSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Head from "next/head";
export default function BlogsPage() {
  const meta = {
    title:
      "Blogs | Bridge Pharmaceuticals Ltd. Animal Health Insights & Industry Trends in Bangladesh",
    description:
      "Explore expert insights from Bridge Pharmaceuticals Ltd. on Animal Health, GMP compliance, Veterinary medicines, Pharmaceutical quality assurance, Cold chain logistics, R&D innovation, and modern pharmaceutical manufacturing in Bangladesh.",
    keywords:
      "Bridge Pharmaceuticals blog, animal health insights Bangladesh, veterinary pharmaceutical articles, GMP compliance Bangladesh, pharmaceutical manufacturing blog, aquaculture medicine research, cold chain logistics pharma, veterinary R&D Bangladesh",
    author: "Bridge Pharmaceuticals Ltd.",
    url: "https://bridgepharmabd.com/blogs",
    image: "https://bridgepharmabd.com/blogs/blog-og.jpg",
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
        <meta property="og:site_name" content="Bridge Pharmaceuticals Ltd." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="canonical" href={meta.url} />
      </Head>
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
