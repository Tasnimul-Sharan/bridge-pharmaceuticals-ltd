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

  // const slides = [
  //   {
  //     heading: "INNOVATIVE PHARMACEUTICALS",
  //     subheading:
  //       "Advancing Healthcare Through Research, Quality, and Innovation",
  //     image: "/slider/1.jpg",
  //   },
  //   {
  //     heading: "SCIENCE FOR BETTER LIVING",
  //     subheading:
  //       "Developing Safe, Effective, and Trusted Medicines for a Healthier Tomorrow",
  //     image: "/slider/2.jpg",
  //   },
  //   {
  //     heading: "QUALITY YOU CAN TRUST",
  //     subheading: "Committed to Global Standards in Pharmaceutical Excellence",
  //     image: "/slider/3.jpg",
  //   },
  // ];

  const slides = [
    {
      subtitle: "Medical Store Template",
      title: "Medicia Medical Service and",
      description:
        "Medicia as always focused on the best treatments with affordable price through the best medical services.",
      image: "/slider/1.jpg",
      align: "left",
    },
    {
      subtitle: "Healthcare Innovation",
      title: "Science for Better Living",
      description:
        "Developing safe, effective, and trusted medicines for a healthier tomorrow.",
      image: "/slider/2.jpg",
      align: "center",
    },
    {
      subtitle: "Trusted Quality",
      title: "Global Pharmaceutical Excellence",
      description:
        "Committed to international standards and continuous innovation.",
      image: "/slider/3.jpg",
      align: "right",
    },
  ];

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
    // <section className="bg-primary bg-opacity-5 min-h-screen relative group overflow-hidden">
    //   <Slider {...settings}>
    //     {slides.map((slide, index) => (
    //       <div key={index}>
    //         <div className="flex flex-col lg:flex-row justify-between items-center custom-container mx-auto">
    //           <motion.div
    //             key={
    //               currentSlide === index
    //                 ? `slide-${index}-${Date.now()}`
    //                 : `slide-${index}`
    //             }
    //             className="max-w-3xl"
    //             variants={containerVariants}
    //             initial="hidden"
    //             animate="visible"
    //           >
    //             <motion.p
    //               variants={itemVariants}
    //               className="text-primary tracking-widest font-medium mb-2 uppercase"
    //             >
    //               {slide.heading}
    //             </motion.p>

    //             <motion.h1
    //               variants={itemVariants}
    //               className="text-3xl md:text-5xl font-bold text-secondary md:mb-12 mb-6 "
    //             >
    //               {slide.subheading}
    //             </motion.h1>

    //             <motion.div variants={itemVariants} className="flex gap-4">
    //               <Link href="/services">
    //                 <Button variant="primary" size="md">
    //                   Explore More
    //                 </Button>
    //               </Link>
    //               <Link href="/book-now">
    //                 <Button variant="outline" size="md">
    //                   Book a Visit
    //                 </Button>
    //               </Link>
    //             </motion.div>
    //           </motion.div>

    //           <motion.div
    //             key={`img-${currentSlide === index ? Date.now() : index}`}
    //             className="relative mt-12 lg:mt-0 lg:w-1/2 w-full"
    //             initial={{ opacity: 0, x: 50 }}
    //             animate={{ opacity: 1, x: 0 }}
    //             transition={{ duration: 1 }}
    //           >
    //             <Image
    //               src={slide.image}
    //               width={1200}
    //               height={1200}
    //               alt="Anondo Baari Wellness"
    //               className="w-full h-full object-cover rounded-md"
    //             />
    //           </motion.div>
    //         </div>
    //       </div>
    //     ))}
    //   </Slider>
    // </section>

    // <section className="relative overflow-hidden group">
    //   <Slider {...settings}>
    //     {slides.map((slide, index) => (
    //       <div key={index} className="h-screen relative">
    //         {/* Background image */}
    //         <div
    //           className="absolute inset-0 bg-cover bg-center"
    //           style={{ backgroundImage: `url(${slide.image})` }}
    //         />
    //         <div className="absolute inset-0 bg-black/50" />

    //         <div className="relative h-full flex items-center custom-container mx-auto">
    //           <motion.div
    //             key={
    //               currentSlide === index
    //                 ? `slide-${index}-${Date.now()}`
    //                 : index
    //             }
    //             className={`max-w-3xl flex flex-col ${getAlignmentClasses(
    //               slide.align,
    //             )}`}
    //             variants={containerVariants}
    //             initial="hidden"
    //             animate="visible"
    //           >
    //             {/* Subtitle */}
    //             <motion.span
    //               variants={itemVariants}
    //               className="text-primary uppercase tracking-widest text-sm mb-3"
    //             >
    //               #{slide.subtitle}
    //             </motion.span>

    //             {/* Title */}
    //             <motion.h1
    //               variants={itemVariants}
    //               className="text-4xl md:text-5xl font-bold text-secondary_two mb-6"
    //             >
    //               {slide.title}
    //             </motion.h1>

    //             {/* Description */}
    //             <motion.p
    //               variants={itemVariants}
    //               className="text-white mb-10 max-w-xl"
    //             >
    //               {slide.description}
    //             </motion.p>

    //             {/* Buttons */}
    //             <motion.div variants={itemVariants} className="flex gap-4">
    //               <Link href="/shop">
    //                 <Button variant="primary">Shop Now</Button>
    //               </Link>
    //               <Link href="/about">
    //                 <Button variant="outline">Learn More</Button>
    //               </Link>
    //             </motion.div>
    //           </motion.div>
    //         </div>
    //       </div>
    //     ))}
    //   </Slider>
    // </section>

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
            <div className="absolute inset-0 bg-black/60" />

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
                {/* <motion.span
                  variants={itemVariants}
                  className="text-primary uppercase tracking-widest text-sm mb-3"
                >
                  #{slide.subtitle}
                </motion.span> */}

                {/* <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-3 mb-4"
                >
                  <span className="w-10 h-[2px] bg-primary"></span>

                  <span className="uppercase tracking-[0.25em] text-xs font-semibold text-primary">
                    {slide.subtitle}
                  </span>
                </motion.div> */}

                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-2 mb-4"
                >
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
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
                  <Link href="/shop">
                    <Button variant="primary">Shop Now</Button>
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
