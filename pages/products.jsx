import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import ProductsPageSection from "@/components/ProductsPageSection";
export default function ProductsPage() {
  const meta = {
    title:
      "Services | Anondo Baari - Senior Wellness & Assisted Living in Bangladesh",
    description:
      "Discover Anondo Baari’s world-class services for senior citizens in Purbachal, Dhaka. We offer assisted living, 24/7 healthcare, therapeutic care, yoga, meditation, nutrition counseling, and vibrant community activities for a dignified life.",
    keywords:
      "Anondo Baari services, senior wellness Bangladesh, assisted living Dhaka, elderly care, therapeutic services, wellness programs, yoga meditation, nutrition counseling, retirement home Bangladesh",
    author: "Anondo Baari",
    url: "https://www.anondobari.com/services",
    image: "https://www.anondobari.com/services/services-og.jpg",
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
          title: "Products",
          backgroundImage: "/services/services-bg.jpg",
        }}
      />
      <ProductsPageSection />
    </div>
  );
}
