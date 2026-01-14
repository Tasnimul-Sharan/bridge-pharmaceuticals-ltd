"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Abdul Karim",
    role: "Resident, 72 years",
    img: "/clients/senior1.jpg",
    text: "Anondo Baari has truly become my second home. The care, respect, and dignity I receive here makes me feel valued every single day.",
    highlight: true,
  },
  {
    name: "Kabir Ahmed",
    role: "Resident, 56 years",
    img: "/clients/family1.jpg",
    text: "Knowing that my mother is safe, happy, and surrounded by a caring community gives me complete peace of mind. Anondo Baari is a blessing for families like ours.",
    highlight: false,
  },
  {
    name: "Jahanara Begum",
    role: "Resident, 68 years",
    img: "/clients/senior2.jpg",
    text: "From healthcare to cultural activities, everything here is designed with seniors in mind. I feel healthier, more active, and part of a family.",
    highlight: false,
  },
  {
    name: "Shamim Khan",
    role: "Resident’s Son, 45 years",
    img: "/clients/family2.png",
    text: "The staff are so compassionate. They not only look after my father’s health but also ensure his happiness and social engagement.",
    highlight: true,
  },
  {
    name: "Anisur Rahman",
    role: "Resident, 75 years",
    img: "/clients/senior3.jpg",
    text: "I was worried about loneliness after retirement, but here I found friends, joy, and a meaningful way of life.",
    highlight: false,
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, centerMode: false } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerMode: false } },
    ],
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 bg-gray-50 text-center">
      <motion.p
        className="uppercase text-primary font-medium tracking-widest text-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Client Testimonials
      </motion.p>

      <motion.h2
        className="text-2xl md:text-4xl font-bold mt-2 mb-12 text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        What our clients say
      </motion.h2>

      <div className="max-w-6xl mx-auto overflow-hidden">
        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="px-2 md:px-4"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div
                className={`relative p-6 md:p-8 py-16 rounded-md text-gray-700 bg-primary bg-opacity-5 ${
                  t.highlight
                    ? "border-2 border-primary bg-green-50"
                    : "border-2 hover:border-primary transition-all duration-500"
                }`}
              >
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                  {t.text}
                </p>
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.role}</p>
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-white rounded-full p-3 md:p-4">
                  <FaQuoteLeft className="text-primary text-lg md:text-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
