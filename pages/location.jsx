"use client";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import EventMap from "@/components/EventMap";
import Navbar from "@/components/Navbar";
import LocationInfo from "@/components/LocationInfo";
export default function Location() {
  const meta = {
    title:
      "Location | Anondo Baari - Senior Wellness & Assisted Living in Bangladesh",
    description:
      "Anondo Baari is located in Ulukhola, Purbachal New Town — just 20 minutes from Hazrat Shahjalal International Airport. Surrounded by nature and the River Turag, our serene setting ensures both connectivity and tranquility.",
    keywords:
      "Anondo Baari location, senior living Purbachal, assisted living Bangladesh, retirement home Dhaka, elderly care location, Purbachal senior wellness, Anondo Baari address, Anondo Baari map",
    author: "Anondo Baari",
    url: "https://www.anondobari.com/location",
    image: "https://www.anondobari.com/location/location-og.jpg",
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
          title: "Our Location",
          backgroundImage: "/location-bg.jpg",
        }}
      />
      <LocationInfo />
      <EventMap />
    </div>
  );
}
