"use client";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import EventMap from "@/components/EventMap";
import ContactPageSection from "@/components/ContactPageSection";
export default function ContactPage() {
  const meta = {
    title:
      "Contact | Bridge Pharmaceuticals Ltd. Animal Health Company in Bangladesh",
    description:
      "Contact Bridge Pharmaceuticals Ltd., a leading Animal Health pharmaceutical manufacturer in Bangladesh. Reach our head office in Motijheel, Dhaka, factory in Demra, or connect with our nationwide distribution centers for veterinary and aquaculture solutions.",
    keywords:
      "Bridge Pharmaceuticals contact, animal health company Bangladesh, veterinary pharmaceutical contact Dhaka, aquaculture medicine supplier Bangladesh, pharma manufacturer Motijheel, Demra pharmaceutical factory, livestock medicine distributor Bangladesh",
    author: "Bridge Pharmaceuticals Ltd.",
    url: "https://bridgepharmabd.com/contact",
    image: "https://bridgepharmabd.com/contact/contact-og.jpg",
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
          title: "Contact",
          backgroundImage: "/contact-bg.jpg",
        }}
      />
      <ContactPageSection />
      <EventMap />
    </div>
  );
}
