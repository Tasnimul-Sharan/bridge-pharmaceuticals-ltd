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
    title: "Security And Safety",
    description:
      "Smart emergency buttons, AI-powered health monitoring, telemedicine, resident wellness app, digital noticeboards, and Wi-Fi in every suite.",
    number: "05",
    img: "/services/security.jpg",
    slug: "security-safety",
  },
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
      <div className="text-center mb-12">
        <p className="uppercase text-primary font-medium tracking-[0.15em] text-sm">
          Our Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2">
          What our key Services Are
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-2">
          At Anondo Baari, we combine world-class facilities, compassionate
          care, and a serene environment to create a perfect sanctuary for
          senior citizens.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 custom-container mx-auto">
        {services.map((service, index) => (
          <Link href={`/services/${service.slug}`}>
            <div
              key={index}
              ref={(el) => (serviceRefs.current[index] = el)}
              className="relative cursor-pointer group px-6 py-8 h-[35rem] border rounded service-item hover:scale-105 transition-all transform duration-500 overflow-hidden"
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
      <div className="flex justify-center mt-12">
        <Link href="/services">
          <Button variant="outline" size="lg" className="animate-ripple">
            See All
          </Button>
        </Link>
      </div>
    </section>
  );
}
