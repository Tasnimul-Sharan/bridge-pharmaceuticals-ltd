"use client";
import FacilitiesSection from "@/components/FacilitiesSection";
import GMPHighlight from "@/components/GMPHighlight";
import HeroSection from "@/components/HeroSection";
import QualityFacilities from "@/components/QualityFacilities";
import RDShowcase from "@/components/RDShowcase";
import ResearchTimeline from "@/components/ResearchTimeline";
import Head from "next/head";
export default function FacilitiesPage() {
  const meta = {
    title:
      "Facilities | Bridge Pharmaceuticals Ltd. Manufacturing & R&D Facilities in Bangladesh",
    description:
      "Explore the state-of-the-art GMP-aligned manufacturing facility, Quality Control laboratories, Research & Development center, and nationwide distribution infrastructure of Bridge Pharmaceuticals Ltd., a leading Animal Health pharmaceutical manufacturer in Bangladesh.",
    keywords:
      "Bridge Pharmaceuticals facilities, veterinary pharmaceutical manufacturing Bangladesh, GMP pharmaceutical factory Bangladesh, animal health R&D lab, quality control laboratory Bangladesh, pharmaceutical production facility Dhaka, veterinary medicine manufacturer Bangladesh",
    author: "Bridge Pharmaceuticals Ltd.",
    url: "https://bridgepharmabd.com/facilities",
    image: "https://bridgepharmabd.com/facilities/facilities-og.jpg",
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
          title: "Our Facilities",
          backgroundImage: "/facilities-bg.jpg",
        }}
      />
      <FacilitiesSection />
      <GMPHighlight />
      <QualityFacilities />
      <ResearchTimeline />
      <RDShowcase />
    </div>
  );
}
