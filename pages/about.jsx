import AboutUsSection from "@/components/AboutUsSection";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import FAQ from "@/components/FAQ";
import VisionMission from "@/components/VisionMission";
import AboutOverview from "@/components/AboutOverview";
import Leadership from "@/components/Leadership";
import Philosophy from "@/components/Philosophy";
import ProductPortfolio from "@/components/ProductPortfolio";

export default function AboutPage() {
  const meta = {
    title:
      "About | Bridge Pharmaceuticals Ltd. Leading Animal Health Company in Bangladesh",
    description:
      "Bridge Pharmaceuticals Ltd., established in 2010, is a leading Animal Health pharmaceutical manufacturer in Bangladesh specializing in Veterinary, Aquaculture, Nutritional Supplements, and Biosecurity solutions. Serving livestock, poultry, and fish farmers nationwide.",
    keywords:
      "Bridge Pharmaceuticals Ltd, animal health Bangladesh, veterinary medicine manufacturer Bangladesh, aquaculture pharmaceutical company, livestock medicine Bangladesh, poultry medicine company, biosecurity products Bangladesh, veterinary supplements Bangladesh",
    author: "Bridge Pharmaceuticals Ltd.",
    url: "https://bridgepharmabd.com/about",
    image: "https://bridgepharmabd.com/og-about.jpg",
  };

  const faqData = {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "What is Bridge Pharmaceuticals Ltd.?",
        answer:
          "Bridge Pharmaceuticals Ltd. is a pioneering Animal Health Pharmaceutical company in Bangladesh, dedicated exclusively to Veterinary and Aquaculture medicines, Nutritional Supplements, and Biosecurity solutions.",
      },
      {
        question: "When was Bridge Pharmaceuticals established?",
        answer:
          "Bridge Pharmaceuticals Ltd. was established in 2010 with the mission to serve farmers and livestock producers with world-class veterinary medicines at affordable prices.",
      },
      {
        question: "Who are the founders of Bridge Pharmaceuticals?",
        answer:
          "Bridge Pharmaceuticals was founded by Mr. Safar Ali, a pioneer in Animal Health entrepreneurship and product development, and Mr. Kamrul Hassan, a specialist in veterinary sales and distribution strategy.",
      },
      {
        question: "Who leads Bridge Pharmaceuticals currently?",
        answer:
          "The company is led by Chairperson Mrs. Farzana Mozammel and Managing Director Mr. Gazi Md. Mokammel Hoque, who joined in 2023 and brought modern management practices and innovation-driven growth.",
      },
      {
        question: "What is the corporate philosophy of Bridge Pharmaceuticals?",
        answer:
          "Bridge Pharmaceuticals believes that Animal Health is the foundation of human prosperity. Its guiding principles are Quality, Service, Innovation, Integrity, and Sustainability.",
      },
      {
        question: "What is the vision of Bridge Pharmaceuticals?",
        answer:
          "The vision is to be Bangladesh’s most trusted and innovative animal health company, delivering world-class veterinary solutions that enhance animal welfare, ensure food safety, and empower farmers for a prosperous nation.",
      },
      {
        question: "What is the mission of Bridge Pharmaceuticals?",
        answer:
          "The mission is to advance livestock, poultry, aquaculture, and companion animal sectors by producing high-quality, affordable, and research-driven veterinary medicines, nutritional supplements, probiotics, and biosecurity solutions.",
      },
      {
        question: "How does Bridge Pharmaceuticals ensure product quality?",
        answer:
          "Every product undergoes rigorous quality control and quality assurance processes, ensuring no compromise in safety, purity, or efficacy.",
      },
      {
        question: "What types of products does Bridge Pharmaceuticals offer?",
        answer:
          "The company offers a comprehensive portfolio including Therapeutics, Nutritional Supplements, and Aquaculture solutions designed for disease prevention, treatment, growth, and biosecurity.",
      },
      {
        question: "What therapeutic products are available?",
        answer:
          "Therapeutic products include antibiotics, anti-protozoal drugs, anthelmintics, anti-parasitic medicines, and other treatments for disease prevention and control.",
      },
      {
        question:
          "What nutritional supplements does Bridge Pharmaceuticals produce?",
        answer:
          "Bridge Pharmaceuticals produces multivitamins, probiotics, amino acids, and multiminerals to support optimal growth, immunity, and overall animal health.",
      },
      {
        question: "Does Bridge Pharmaceuticals provide aquaculture solutions?",
        answer:
          "Yes. The company offers aquaculture-focused biosecurity products and pond management solutions to improve water quality, fish health, and farm productivity.",
      },
      {
        question:
          "How does Bridge Pharmaceuticals support farmers and veterinarians?",
        answer:
          "The company supports farmers and veterinarians through reliable product supply, technical training, field-level assistance, and continuous knowledge sharing.",
      },
      {
        question:
          "What makes Bridge Pharmaceuticals different from competitors?",
        answer:
          "Bridge Pharmaceuticals combines scientific innovation, ethical business practices, affordable pricing, and farmer-centric services, making it a trusted and reliable home-grown brand.",
      },
      {
        question: "Is Bridge Pharmaceuticals committed to sustainability?",
        answer:
          "Yes. Sustainability is a core value, reflected in responsible manufacturing, ethical operations, and long-term strategies that benefit animals, farmers, and society.",
      },
      {
        question:
          "How can customers or partners contact Bridge Pharmaceuticals?",
        answer:
          "Customers and partners can contact Bridge Pharmaceuticals through its official office, sales representatives, or authorized distributors across Bangladesh.",
      },
    ],
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
          title: "About",
          backgroundImage: "/hero-bg.JPG",
        }}
      />
      <AboutUsSection />
      <AboutOverview />
      <VisionMission />
      <ProductPortfolio />
      <Philosophy />
      <Leadership />
      <FAQ faqData={faqData} />
    </div>
  );
}
