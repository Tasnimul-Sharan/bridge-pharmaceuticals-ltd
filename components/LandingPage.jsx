"use client";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "./Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      heading: "INNOVATIVE PHARMACEUTICALS",
      subheading:
        "Advancing Healthcare Through Research, Quality, and Innovation",
      image: "/hero-section/1.jpg",
    },
    {
      heading: "SCIENCE FOR BETTER LIVING",
      subheading:
        "Developing Safe, Effective, and Trusted Medicines for a Healthier Tomorrow",
      image: "/hero-section/2.jpg",
    },
    {
      heading: "QUALITY YOU CAN TRUST",
      subheading: "Committed to Global Standards in Pharmaceutical Excellence",
      image: "/hero-section/3.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return (
    <section className="bg-primary bg-opacity-5 min-h-screen relative group overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="flex flex-col lg:flex-row justify-between items-center custom-container mx-auto">
              <motion.div
                key={
                  currentSlide === index
                    ? `slide-${index}-${Date.now()}`
                    : `slide-${index}`
                }
                className="max-w-3xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.p
                  variants={itemVariants}
                  className="text-primary tracking-widest font-medium mb-2 uppercase"
                >
                  {slide.heading}
                </motion.p>

                <motion.h1
                  variants={itemVariants}
                  className="text-3xl md:text-5xl font-bold text-secondary md:mb-12 mb-6 "
                >
                  {slide.subheading}
                </motion.h1>

                <motion.div variants={itemVariants} className="flex gap-4">
                  <Link href="/services">
                    <Button variant="primary" size="md">
                      Explore More
                    </Button>
                  </Link>
                  <Link href="/book-now">
                    <Button variant="outline" size="md">
                      Book a Visit
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                key={`img-${currentSlide === index ? Date.now() : index}`}
                className="relative mt-12 lg:mt-0 lg:w-1/2 w-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <Image
                  src={slide.image}
                  width={1200}
                  height={1200}
                  alt="Anondo Baari Wellness"
                  className="w-full h-full object-cover rounded-md"
                />
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute z-10 top-1/2 left-6 -translate-y-1/2 bg-primary text-white p-4 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute z-10 top-1/2 right-6 -translate-y-1/2 bg-primary text-white p-4 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);
