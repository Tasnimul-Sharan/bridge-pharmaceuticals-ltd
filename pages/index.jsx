import AboutUsSection from "@/components/AboutUsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Head from "next/head";
import LandingPage from "@/components/LandingPage";
import PharmaStatsSection from "@/components/PharmaStatsSection";
import ProductsSection from "@/components/ProductsSection";
import WhatWeSell from "@/components/WhatWeSell";
export default function Home() {
  const meta = {
    title:
      "Bridge Pharmaceuticals Ltd. | Veterinary & Animal Health Company in Bangladesh",
    description:
      "Bridge Pharmaceuticals Ltd. is a science-driven veterinary and animal health company in Bangladesh, delivering high-quality medicines, aquaculture solutions, nutritional products, and biosecurity innovations to ensure healthier livestock and safer food production.",
    keywords:
      "Bridge Pharmaceuticals Ltd, veterinary medicine Bangladesh, animal health company Bangladesh, aquaculture products Bangladesh, livestock medicine manufacturer, veterinary pharmaceutical company, biosecurity solutions Bangladesh",
    author: "Bridge Pharmaceuticals Ltd.",
    url: "https://bridgepharmabd.com/",
    image: "https://bridgepharmabd.com/og-image.jpg",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bridge Pharmaceuticals Ltd.",
              url: "https://bridgepharmabd.com/",
              logo: "https://bridgepharmabd.com/logo.png",
              sameAs: [
                "https://www.facebook.com/bridgepharma",
                "https://www.linkedin.com/company/bridge-pharmaceuticals",
              ],
            }),
          }}
        />
      </Head>
      <LandingPage />
      <AboutUsSection />
      <PharmaStatsSection />
      <ProductsSection />
      <WhatWeSell />
      {/* <TeamSection /> */}
      <ContactSection />
      <BlogSection />
    </div>
  );
}
