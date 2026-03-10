"use client";

import { FaBriefcaseMedical, FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionBadge from "./SectionBadge";

const testimonials = [
  {
    name: "Dr. Mahmud Rahman",
    role: "Veterinary Consultant",
    text: "Bridge Pharmaceuticals consistently delivers reliable veterinary solutions backed by strong research and quality manufacturing.",
  },
  {
    name: "Dr. Farhana Islam",
    role: "Aquaculture Specialist",
    text: "Their aquaculture healthcare products have significantly improved disease management and farm productivity.",
  },
  {
    name: "Md. Saiful Alam",
    role: "Livestock Farm Owner",
    text: "We trust Bridge Pharmaceuticals for dependable veterinary medicines that ensure healthier livestock and better farm performance.",
  },
  {
    name: "Dr. Shafiq Ahmed",
    role: "Veterinary Practitioner",
    text: "The company's commitment to innovation and product quality makes them a reliable partner in veterinary healthcare.",
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 700,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, centerMode: false } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerMode: false } },
    ],
  };

  return (
    <section className="py-28 bg-gradient-to-b from-white via-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <SectionBadge icon={FaBriefcaseMedical}>
            Industry Feedback
          </SectionBadge>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-bold mt-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Trusted by Veterinary Professionals
        </motion.h2>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-4">
              <motion.div
                className="relative h-full p-8 rounded-2xl bg-white/70 backdrop-blur border border-border_color shadow-sm hover:shadow-xl transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Quote Icon */}
                <div className="absolute -top-5 left-8 w-10 h-10 flex items-center justify-center bg-primary text-white rounded-lg shadow">
                  <FaQuoteLeft />
                </div>

                <p className="text-soft_black leading-relaxed mt-6 mb-6">
                  {t.text}
                </p>

                <div className="border-t pt-4">
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-sm text-secondary_two">{t.role}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
