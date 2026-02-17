import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import GalleryPageSection from "@/components/GalleryPageSection";
export default function GalleryPage() {
  const meta = {
    title:
      "Gallery | Anondo Baari - Senior Living & Wellness Center in Bangladesh",
    description:
      "Explore the Anondo Baari Gallery showcasing our senior wellness center, assisted living suites, landscaped gardens, wellness activities, dining experiences, and community life at Purbachal, Dhaka.",
    keywords:
      "Anondo Baari gallery, senior living Bangladesh, assisted living images, wellness center photos, elderly care Dhaka, retirement home Bangladesh, community lifestyle, wellness activities, Purbachal senior care",
    author: "Anondo Baari",
    url: "https://www.anondobari.com/gallery",
    image: "https://www.anondobari.com/gallery/gallery-og.jpg",
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
      <Navbar hasBackground={true} />
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
