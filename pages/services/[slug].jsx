"use client";
import { useRouter } from "next/router";
import Head from "next/head";
import { RiLoader2Fill } from "react-icons/ri";
import HeroSection from "@/components/HeroSection";
import { servicesDetailsData } from "@/data/serviceDetailsData";
import ServicesDetails from "@/components/ServicesDetails";
import Navbar from "@/components/Navbar";

export default function ServicesDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center min-h-screen text-secondary">
        <RiLoader2Fill className="animate-spin w-6 h-6" />
        <p className="font-medium text-xl">Loading...</p>
      </div>
    );
  }

  const { serviceDetails } = servicesDetailsData;

  const service = serviceDetails.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-secondary font-medium text-xl">
          Service detail not found.
        </p>
      </div>
    );
  }

  const meta = {
    title: `${service.services.title} | Anondo Baari - Senior Wellness & Assisted Living in Bangladesh`,
    description:
      service.services.description ||
      `Learn more about our ${service.services.title} at Anondo Baari. Located in Purbachal, Dhaka, we provide holistic senior wellness including assisted living, 24/7 healthcare, yoga, meditation, nutrition counseling, and compassionate care in a vibrant community.`,
    keywords: `${service.services.title}, Anondo Baari services, senior wellness Bangladesh, assisted living Dhaka, elderly care, therapeutic programs, yoga meditation, nutrition counseling, holistic wellness center, retirement home Bangladesh`,
    author: "Anondo Baari",
    url: `https://www.anondobari.com/services/${service.slug}`,
    image:
      service.services.image ||
      "https://www.anondobari.com/services/services-og.jpg",
  };

  return (
    <div>
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
          title: service.services.title,
          backgroundImage: "/services/services-bg.jpg",
        }}
      />
      <ServicesDetails service={service} />
    </div>
  );
}
