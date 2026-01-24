"use client";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
export default function Facilities() {
  const meta = {
    title:
      "Facilities | Anondo Baari - Senior Wellness & Assisted Living in Bangladesh",
    description:
      "Discover world-class accommodation at Anondo Baari in Purbachal, Dhaka. Choose from premium suites, assisted living residences, and recovery stays designed for comfort, safety, and community living.",
    keywords:
      "Anondo Baari accommodation, senior living Bangladesh, assisted living suites, elderly care Dhaka, retirement home accommodation, Purbachal senior wellness, recovery stays Bangladesh, premium senior suites",
    author: "Anondo Baari",
    url: "https://www.anondobari.com/accommodation",
    image: "https://www.anondobari.com/accommodation/accommodation-og.jpg",
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
          title: "Why Anondo Baari?",
          backgroundImage: "/accommodation-bg.jpg",
        }}
      />
    </div>
  );
}
