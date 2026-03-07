"use client";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "./Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaBriefcaseMedical } from "react-icons/fa";
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
      subtitle: "Since 2010 • Bangladesh",
      title: "Advancing Animal Health Innovation",
      description:
        "Bridge Pharmaceuticals Ltd. is a science-driven Animal Health company dedicated exclusively to Veterinary, Aquaculture, Nutritional, and Biosecurity solutions — ensuring healthier animals and safer food production.",
      image: "/slider/bridge-1.jpg",
      align: "left",
    },
    {
      subtitle: "Quality • Research • Leadership",
      title: "Trusted Partner of Farmers & Veterinarians",
      description:
        "With a diversified portfolio of therapeutic and nutritional solutions, we empower livestock, poultry, and aquaculture sectors through innovation, affordability, and uncompromising quality standards.",
      image: "/slider/bridge-2.jpg",
      align: "center",
    },
    {
      subtitle: "Sustainable Growth • National Impact",
      title: "Building a Healthier Future Together",
      description:
        "Committed to excellence, integrity, and sustainability, Bridge Pharmaceuticals contributes to animal welfare, food safety, and long-term agricultural prosperity across Bangladesh.",
      image: "/slider/bridge-3.jpg",
      align: "right",
    },
  ];

  // const slides = [
  //   {
  //     subtitle: "Comprehensive Veterinary Solutions",
  //     title: "Your One-Stop Animal Health Partner",
  //     description:
  //       "Bridge Pharmaceuticals Ltd. offers a complete range of high-quality veterinary medicines, vaccines, and nutritional supplements designed to enhance livestock productivity and animal welfare.",
  //     image: "/slider/bridge-1.jpg",
  //     align: "left",
  //   },
  //   {
  //     subtitle: "Scientific Excellence & Innovation",
  //     title: "Advancing Veterinary Science",
  //     description:
  //       "Our dedicated research and development team is committed to creating cutting-edge formulations and treatments, ensuring the best possible care for poultry, livestock, and aquaculture.",
  //     image: "/slider/bridge-2.jpg",
  //     align: "center",
  //   },
  //   {
  //     subtitle: "Nationwide Distribution Network",
  //     title: "Reaching Every Farm in Bangladesh",
  //     description:
  //       "With a robust supply chain and expert technical support, we ensure that farmers and veterinarians have immediate access to the essential animal health products they need.",
  //     image: "/slider/bridge-3.jpg",
  //     align: "right",
  //   },
  // ];

  const getAlignmentClasses = (align) => {
    switch (align) {
      case "center":
        return "items-center text-center mx-auto";
      case "right":
        return "items-end text-right ml-auto";
      default:
        return "items-start text-left";
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 0,
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

    <section className="relative w-full h-screen overflow-hidden group">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-screen">
            {/* Background */}
            <motion.div
              key={`bg-${index}-${currentSlide}`}
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 4, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center custom-container mx-auto">
              <motion.div
                key={currentSlide === index ? `slide-${index}` : index}
                className={`max-w-3xl flex flex-col ${getAlignmentClasses(
                  slide.align,
                )}`}
                variants={containerVariants}
                initial="hidden"
                animate={currentSlide === index ? "visible" : "hidden"}
              >
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-3 mb-4"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary">
                    <FaBriefcaseMedical className="text-sm" />
                  </span>

                  <span className="uppercase tracking-[0.3em] text-xs font-medium text-primary">
                    {slide.subtitle}
                  </span>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                  <span className="text-primary">
                    {slide.title.split(" ")[0]}
                  </span>{" "}
                  {slide.title.split(" ").slice(1).join(" ")}
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-gray-200 mb-10 max-w-xl"
                >
                  {slide.description}
                </motion.p>

                <motion.div variants={itemVariants} className="flex gap-4">
                  <Link href="/contact">
                    <Button variant="primary">Get In Touch</Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </motion.div>
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
