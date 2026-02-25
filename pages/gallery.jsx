import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import GalleryPageSection from "@/components/GalleryPageSection";
export default function GalleryPage() {
  const meta = {
    title:
      "Gallery | Bridge Pharmaceuticals Ltd. Manufacturing & R&D Facilities",
    description:
      "Explore the gallery of Bridge Pharmaceuticals Ltd. showcasing our GMP-aligned manufacturing facility, quality control laboratories, research & development center, production systems, and nationwide distribution infrastructure in Bangladesh.",
    keywords:
      "Bridge Pharmaceuticals gallery, veterinary pharmaceutical factory Bangladesh, GMP manufacturing facility images, animal health R&D lab photos, pharmaceutical production Bangladesh, veterinary company infrastructure Bangladesh",
    author: "Bridge Pharmaceuticals Ltd.",
    url: "https://bridgepharmabd.com/gallery",
    image: "https://bridgepharmabd.com/gallery/gallery-og.jpg",
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
          title: "Gallery",
          backgroundImage: "/gallery/gallery-bg.jpg",
        }}
      />
      <GalleryPageSection />
    </div>
  );
}
