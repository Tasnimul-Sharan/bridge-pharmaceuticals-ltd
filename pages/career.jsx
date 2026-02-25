"use client";
import CareerSection from "@/components/CareerSection";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
export default function CareerPage() {
  const meta = {
    title:
      "Career | Bridge Pharmaceuticals Ltd. Animal Health Company in Bangladesh",
    description:
      "Explore career opportunities at Bridge Pharmaceuticals Ltd., a leading Animal Health pharmaceutical company in Bangladesh. Join our team in Veterinary, Aquaculture, Research, Sales, and Manufacturing sectors.",
    keywords:
      "Bridge Pharmaceuticals career, animal health jobs Bangladesh, veterinary pharmaceutical jobs, aquaculture company Bangladesh, pharma jobs Dhaka, research and development jobs Bangladesh, livestock pharmaceutical company",
    author: "Bridge Pharmaceuticals Ltd.",
    url: "https://bridgepharmabd.com/career",
    image: "https://bridgepharmabd.com/og-career.jpg",
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
          title: "Join Our Team",
          backgroundImage: "/career-bg.jpg",
        }}
      />
      <CareerSection />
    </div>
  );
}
