import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "./Button";
import Link from "next/link";

const services = [
  {
    title: "Sustainability & Green Living",
    description:
      "Eco-friendly practices such as solar-powered lighting, rainwater harvesting, organic gardens, recycling, and green transportation for a healthier planet.",
    img: "/services/green.jpg",
    slug: "sustainability-green",
  },
  {
    title: "Technology Integration",
    description:
      "Smart emergency buttons, AI-powered health monitoring, telemedicine, resident wellness app, digital noticeboards, and Wi-Fi in every suite.",
    number: "05",
    img: "/services/technology.jpg",
    slug: "technology",
  },
  {
    title: "Super Biased Diet",
    description:
      "Freshly prepared, dietitian-approved meals. Options include vegetarian, diabetic-friendly, heart-healthy, and high-protein diets with community feasts.",
    number: "07",
    img: "/services/dining.jpg",
    slug: "super-biased-diet",
  },
  {
    title: "Wellness & Fitness Programs",
    description:
      "Active aging through yoga, aerobics, aqua gym, supervised training, group walks, tai chi, massage, hydrotherapy, and meditation practices.",
    img: "/services/wellness.jpg",
    slug: "wellness-fitness",
  },
  {
    title: "24/7 Medical Care",
    description:
      "On-site physicians, nurses, physiotherapists, psychologists, dieticians, diagnostic labs, pharmacy, emergency care, and even a medical helicopter.",
    img: "/services/medical.jpg",
    slug: "medical-care",
  },
  {
    title: "Physiotherapy & Occupational Therapy Units",
    description:
      "State-of-the-art physiotherapy and occupational therapy units designed to restore mobility, improve independence, and enhance quality of life for residents.",
    img: "/services/physiotherapy.jpg",
    slug: "physiotherapy-occupational",
  },
  {
    title: "Mental Health Support & Cognitive Therapy",
    description:
      "Personalized counseling, cognitive behavioral therapy, memory exercises, and support programs for emotional resilience and mental well-being.",
    img: "/services/mental-health.jpg",
    slug: "mental-health-cognitive",
  },
  {
    title: "Recreation & Engagement",
    description:
      "A vibrant calendar of cultural evenings, art workshops, gardening clubs, music, dance, religious prayer, movie nights, and intergenerational programs.",
    number: "08",
    img: "/services/recreation.jpg",
    slug: "recreation",
  },
  {
    title: "Security And Safety",
    description:
      "Smart emergency buttons, AI-powered health monitoring, telemedicine, resident wellness app, digital noticeboards, and Wi-Fi in every suite.",
    number: "05",
    img: "/services/security.jpg",
    slug: "security-safety",
  },
  {
    title: "Community Gardening & Environment",
    description:
      "25 acres of serene gardens, jogging tracks, swimming pool, open-air pavilions, orchards, koi ponds, and bird-watching zones.",
    number: "06",
    img: "/services/landscaping.jpg",
    slug: "community-gardening",
  },
  {
    title: "Religious Activities",
    description:
      "Spaces and programs for daily prayers, meditation, and spiritual growth. Includes multi-faith prayer halls, religious festivals, and spiritual counseling.",
    number: "09",
    img: "/services/religious.jpg",
    slug: "religious-activities",
  },
  {
    title: "Social Gatherings",
    description:
      "Celebrate life together with cultural evenings, festive events, birthdays, religious festivals, and community bonding programs designed to bring residents closer.",
    img: "/services/social.jpg",
    slug: "social-gatherings",
  },
  // {
  //   title: "Seminars, Learning & Contribution",
  //   description:
  //     "Lectures, workshops, and senior-led sessions in partnership with universities. Residents can learn, teach, and publish, nurturing lifelong growth.",
  //   number: "04",
  //   img: "/services/seminars.jpg",
  //   slug: "seminars",
  // },
  // {
  //   title: "Compassionate Staff",
  //   description:
  //     "A 1063-member professional team including physicians, nurses, dieticians, trainers, and cultural coordinators — all trained in empathy and eldercare.",
  //   number: "03",
  //   img: "/services/staff.jpg",
  //   slug: "compassionate-staff",
  // },
  // {
  //   title: "Admission & Residency Options",
  //   description:
  //     "We offer flexible residency packages – permanent, seasonal, and short-term recovery stays. Begin your journey of healing and harmony with ease.",
  //   number: "01",
  //   img: "/services/admission.jpg",
  //   slug: "admission",
  // },
];

export default function Services() {
  const serviceRefs = useRef([]);

  useEffect(() => {
    serviceRefs.current.forEach((service) => {
      const border = service.querySelector(".hover-border");
      gsap.set(border, { scaleX: 0, transformOrigin: "left" });

      service.addEventListener("mouseenter", () => {
        gsap.to(border, { scaleX: 1, duration: 0.6, ease: "power3.out" });
      });

      service.addEventListener("mouseleave", () => {
        gsap.to(border, { scaleX: 0, duration: 0.6, ease: "power3.out" });
      });
    });
  }, []);

  return (
    <section className="py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 custom-container mx-auto">
        {services.map((service, index) => (
          <Link href={`/services/${service.slug}`}>
            <div
              key={index}
              ref={(el) => (serviceRefs.current[index] = el)}
              className="relative cursor-pointer group px-6 py-8 md:h-[35rem] h-[32rem] border rounded service-item hover:scale-105 transition-all transform duration-500 overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 w-full h-1 bg-primary hover-border"
                style={{ transform: "scaleX(1)", transition: "none" }}
              ></div>
              <div className="overflow-hidden rounded-md mb-4">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-secondary md:text-xl text-lg mb-3 font-semibold transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-secondary_two text-base transition-colors duration-500 ease-in-out">
                {service.description}
              </p>
              <div className="absolute bottom-6 right-6">
                <Button variant="primary" size="md">
                  Read More
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
