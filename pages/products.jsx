import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import ProductsPageSection from "@/components/ProductsPageSection";
export default function ProductsPage() {
  const meta = {
    title: "Veterinary & Animal Health Products | Bridge Pharmaceuticals Ltd.",
    description:
      "Explore the complete range of Veterinary and Animal Health products from Bridge Pharmaceuticals Ltd., including Antibiotics, Anthelmintics, Anti-protozoals, Anti-inflammatory medicines, Nutritional Supplements, Aqua products, and more — manufactured in Bangladesh under GMP-aligned facilities.",
    keywords:
      "Bridge Pharmaceuticals products, veterinary medicines Bangladesh, animal health products Bangladesh, livestock medicine manufacturer, poultry medicine supplier, aquaculture products Bangladesh, veterinary antibiotics Bangladesh, animal nutritional supplements manufacturer",
    author: "Bridge Pharmaceuticals Ltd.",
    url: "https://bridgepharmabd.com/products",
    image: "https://bridgepharmabd.com/products/products-og.jpg",
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
          title: "All Products",
          backgroundImage: "/services/services-bg.jpg",
        }}
      />
      <ProductsPageSection />
    </div>
  );
}
