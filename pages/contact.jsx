"use client";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import EventMap from "@/components/EventMap";
import Navbar from "@/components/Navbar";
import ContactPageSection from "@/components/ContactPageSection";
export default function ContactPage() {
  const meta = {
    title:
      "Contact | Anondo Baari - Senior Wellness & Assisted Living in Bangladesh",
    description:
      "Get in touch with Anondo Baari for inquiries, admissions, or visits. Located in Purbachal, Dhaka, our senior wellness and assisted living center offers world-class care, wellness programs, and community living.",
    keywords:
      "Anondo Baari contact, senior living Bangladesh, assisted living Dhaka, wellness center contact, elderly care Bangladesh, retirement home inquiry, Purbachal senior care, Anondo Baari phone, Anondo Baari email",
    author: "Anondo Baari",
    url: "https://www.anondobari.com/contact",
    image: "https://www.anondobari.com/contact/contact-og.jpg",
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
          title: "Contact",
          backgroundImage: "/contact-bg.jpg",
        }}
      />
      <ContactPageSection />
      <EventMap />
    </div>
  );
}
