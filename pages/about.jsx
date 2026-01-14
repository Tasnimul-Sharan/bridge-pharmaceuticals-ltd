import AboutUsSection from "@/components/AboutUsSection";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import VisionMission from "@/components/VisionMission";
export default function AboutPage() {
  const meta = {
    title:
      "About Us | Anondo Baari - Senior Wellness & Assisted Living in Bangladesh",
    description:
      "Learn about Anondo Baari, a senior citizen wellness and living center in Purbachal, Dhaka. Discover our vision, mission, world-class facilities, wellness programs, medical support, and commitment to dignity, independence, and joy for the elderly.",
    keywords:
      "About Anondo Baari, senior wellness Bangladesh, assisted living Dhaka, elderly care Bangladesh, retirement home, wellness center for seniors, holistic healthcare, senior living community, Purbachal senior care",
    author: "Anondo Baari",
    url: "https://www.anondobari.com/about",
    image: "https://www.anondobari.com/about/about-og.jpg",
  };

  const faqData = {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "What is Anondo Baari?",
        answer:
          "Anondo Baari is a world-class senior wellness and assisted living centre in Bangladesh, combining modern healthcare with holistic healing practices. It offers a luxurious, peaceful, and health-conscious lifestyle for senior citizens — a true sanctuary for body, mind, and soul.",
      },
      {
        question: "Where is Anondo Baari located?",
        answer:
          "Anondo Baari is located in Ulukhola, within the thriving area of Purbachal New Town—just 20 minutes from Hazrat Shahjalal International Airport. Nestled on the south bank of the River Turag, it spans 25 acres of beautifully landscaped land.",
      },
      {
        question: "What is the vision of Anondo Baari?",
        answer:
          "To be the most trusted and respected wellness centre for senior citizens in South Asia by offering world-class facilities, holistic healthcare, and compassionate living.",
      },
      {
        question: "What is the mission of Anondo Baari?",
        answer:
          "To deliver exceptional wellness services and support systems that enable senior residents to live with joy, independence, and dignity.",
      },
      {
        question: "How many residents can live at Anondo Baari?",
        answer:
          "Anondo Baari accommodates up to 5,000 residents across 2,500 centrally air-conditioned private suites, each designed for comfort, privacy, and dignity.",
      },
      {
        question: "What types of suites are available?",
        answer:
          "Residents can choose from Standard Suites, Executive Suites, Garden-View Suites, and Assisted Living Units (for those requiring medical support). All suites are fully furnished, wheelchair accessible, and equipped with emergency call systems, housekeeping, and in-room dining services.",
      },
      {
        question: "What healthcare facilities are available?",
        answer:
          "Anondo Baari provides 24/7 in-house healthcare led by physicians, nurses, physiotherapists, psychologists, and dieticians. Facilities include chronic disease management, physiotherapy and occupational therapy, mental health support, diagnostics, on-site pharmacy, and emergency helicopter evacuation.",
      },
      {
        question: "What wellness and fitness programs are offered?",
        answer:
          "Programs include yoga, meditation, tai chi, aerobics, aqua gym, supervised fitness training, massage, hydrotherapy, and nature walks. Certified trainers create personalized plans based on each resident’s health condition and preferences.",
      },
      {
        question: "What recreational and social activities are available?",
        answer:
          "Residents enjoy a vibrant calendar of activities such as cultural evenings, art and craft workshops, music, dance, gardening, cooking clubs, movie nights, intergenerational programs, and religious sessions. Dedicated recreational therapists ensure residents stay engaged and inspired.",
      },
      {
        question: "How is dining and nutrition managed?",
        answer:
          "All meals are freshly prepared and dietitian-approved, with options such as vegetarian, diabetic-friendly, heart-healthy, and high-protein diets. Residents enjoy dining halls, buffets, private in-room dining, and herbal beverages — all designed to promote wellness and enjoyment.",
      },
      {
        question: "What makes Anondo Baari eco-friendly?",
        answer:
          "The campus is designed with sustainability in mind, featuring solar-powered lighting, rainwater harvesting, organic vegetable and herb gardens, waste recycling, composting, and eco-friendly transportation within the campus.",
      },
      {
        question: "How is safety and security ensured?",
        answer:
          "Safety is a top priority with 24/7 surveillance via 300+ CCTV cameras, RFID-based entry systems, emergency response teams, fire and disaster protocols, wellness tracking wristbands, and smart emergency buttons in all suites.",
      },
      {
        question: "What technology features are available for residents?",
        answer:
          "Anondo Baari uses advanced technology such as a Resident Wellness App (for health updates, appointments, and events), telemedicine portals, AI-powered health monitoring, digital noticeboards, and high-speed Wi-Fi in every suite.",
      },
      {
        question: "Are families allowed to visit or stay?",
        answer:
          "Yes. Families are encouraged to visit and stay in dedicated guest houses. Online communication tools, scheduled visits, family event invitations, and counseling support ensure families remain connected and involved.",
      },
      {
        question:
          "What learning and contribution opportunities exist for residents?",
        answer:
          "Residents can join senior-led knowledge sessions, lectures, workshops, university partnership programs, and volunteer projects. They can also publish memoirs and contribute to resident-led journals and seminars.",
      },
      {
        question: "Who are the staff members at Anondo Baari?",
        answer:
          "Anondo Baari’s 1,063-member team includes physicians, nurses, caregivers, therapists, dieticians, IT staff, cultural coordinators, and emergency responders—all trained in eldercare, empathy, and communication.",
      },
      {
        question: "How can I apply for residency or admission?",
        answer:
          "The admission process includes Inquiry & Virtual Tour → Application & Health Evaluation → Personal Interview & Suite Selection → Contract & Onboarding → Welcome & Orientation.",
      },
      {
        question: "What types of residency packages are available?",
        answer:
          "Residents can choose from permanent stays, seasonal residencies, or short-term recovery and rehabilitation packages, depending on their needs.",
      },
      {
        question: "How can I contact Anondo Baari?",
        answer:
          "📍 Ulukhola, Purbachal New Town, Dhaka (20 minutes from Airport)\n📍 Correspondence: Printers’ Building, 5 RAJUK Avenue, Dilkusha, Dhaka\n📞 +880 1313775333\n📧 info@anondobari.com\n🌐 https://www.anondobari.com/",
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      {/* <Navbar hasBackground={true} /> */}
      <HeroSection
        hero={{
          title: "About",
          backgroundImage: "/about-bg.jpg",
        }}
      />
      <AboutUsSection />
      <VisionMission />
      <FAQ faqData={faqData} />
    </div>
  );
}
