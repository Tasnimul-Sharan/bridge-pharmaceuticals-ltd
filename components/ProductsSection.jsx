// "use client";

// import { motion } from "framer-motion";

// const products = [
//   {
//     title: "Fish Products",
//     desc: "High-quality fish health solutions designed to improve growth, immunity, and overall aquatic wellness with scientifically balanced formulations.",
//   },
//   {
//     title: "Metabolic & Nutritional Supplements",
//     desc: "Advanced nutritional supplements that support metabolism, enhance productivity, and ensure optimal health for livestock and aquatic species.",
//   },
//   {
//     title: "Anti-parasitics Products",
//     desc: "Effective anti-parasitic solutions that protect animals from internal and external parasites, ensuring long-term health and performance.",
//   },
//   {
//     title: "Appetizer & Digestive Stimulants",
//     desc: "Formulated to improve appetite, digestion, and nutrient absorption, promoting faster recovery and improved feed efficiency.",
//   },
//   {
//     title: "Anti-histamines Products",
//     desc: "Reliable anti-histamine products that help manage allergic reactions and respiratory discomfort in animals.",
//   },
//   {
//     title: "Anti-Inflammatory Products",
//     desc: "Clinically proven anti-inflammatory formulations that reduce pain, swelling, and inflammation for faster healing.",
//   },
//   {
//     title: "Anthelmintics Products",
//     desc: "Broad-spectrum deworming solutions to control and eliminate parasitic worms effectively and safely.",
//   },
//   {
//     title: "Antibiotics Products",
//     desc: "High-standard antibiotics developed to combat bacterial infections while maintaining safety and effectiveness.",
//   },
// ];

// export default function ProductsSection() {
//   return (
//     <section className="bg-gradient-to-b from-slate-50 to-white py-20">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <h2 className="text-4xl font-bold text-slate-800 mb-4">
//             What We Sell
//           </h2>
//           <p className="text-slate-600 text-lg">
//             A comprehensive range of veterinary and aquaculture solutions
//             designed to ensure health, performance, and sustainability.
//           </p>
//         </motion.div>

//         {/* Grid */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {products.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.05 }}
//               className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition"
//             >
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition" />

//               <h3 className="relative text-xl font-semibold text-slate-800 mb-3">
//                 {item.title}
//               </h3>
//               <p className="relative text-slate-600 text-sm leading-relaxed">
//                 {item.desc}
//               </p>

//               <div className="relative mt-6">
//                 <span className="inline-block text-sm font-medium text-blue-600 group-hover:underline cursor-pointer">
//                   Learn more →
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Slider from "react-slick";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const products = [
//   {
//     name: "Buparvet Injection",
//     category: "Analgesic & Anti-Inflammatory",
//     image: "/images/products/buparvet.png",
//   },
//   {
//     name: "Bosvet Injection",
//     category: "Antibiotic",
//     image: "/images/products/bosvet.png",
//   },
//   {
//     name: "Livet-LA Injection",
//     category: "Long Acting Antibiotic",
//     image: "/images/products/livet-la.png",
//   },
// ];

// export default function ProductsSlider() {
//   const settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 900,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 640,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   return (
//     <section className="py-24 bg-secondary_two/5">
//       <div className="max-w-7xl mx-auto px-6 md:px-0">
//         {/* Section Header */}
//         <div className="mb-14 flex items-center justify-between">
//           <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
//             Our Products
//           </h2>
//         </div>

//         {/* Slider */}
//         <Slider {...settings}>
//           {products.map((item, index) => (
//             <div key={index} className="px-3 outline-none">
//               <motion.div
//                 whileHover={{ y: -10 }}
//                 transition={{ duration: 0.4 }}
//                 className="group relative bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl"
//               >
//                 {/* Image */}
//                 <div className="relative h-[260px] flex items-center justify-center">
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     fill
//                     className="object-contain transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>

//                 {/* Info */}
//                 <div className="mt-6 text-center">
//                   <span className="text-xs uppercase tracking-widest text-primary font-medium">
//                     {item.category}
//                   </span>
//                   <h3 className="mt-2 text-lg font-semibold text-gray-900">
//                     {item.name}
//                   </h3>
//                 </div>

//                 {/* Premium Accent Line */}
//                 <span className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-primary to-cyan-400 opacity-0 group-hover:opacity-100 transition" />
//               </motion.div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Slider from "react-slick";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const products = [
//   {
//     name: "Buparvet Injection",
//     category: "Analgesic & Anti-Inflammatory",
//     image: "/images/products/buparvet.png",
//     slug: "buparvet-injection",
//   },
//   {
//     name: "Bosvet Injection",
//     category: "Antibiotic",
//     image: "/images/products/bosvet.png",
//     slug: "bosvet-injection",
//   },
//   {
//     name: "Livet-LA Injection",
//     category: "Long Acting Antibiotic",
//     image: "/images/products/livet-la.png",
//     slug: "livet-la-injection",
//   },
// ];

// export default function ProductsSlider() {
//   const sliderRef = useRef(null);
//   const productRefs = useRef([]);

//   useEffect(() => {
//     productRefs.current.forEach((card) => {
//       if (!card) return;

//       const border = card.querySelector(".hover-border");
//       gsap.set(border, { scaleX: 0, transformOrigin: "left" });

//       card.addEventListener("mouseenter", () => {
//         gsap.to(border, { scaleX: 1, duration: 0.6, ease: "power3.out" });
//       });

//       card.addEventListener("mouseleave", () => {
//         gsap.to(border, { scaleX: 0, duration: 0.6, ease: "power3.out" });
//       });
//     });
//   }, []);

//   const settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 900,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: false,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 640, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <section className="py-24 bg-secondary_two/5 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 md:px-0">
//         {/* <div className="mb-6">
//           <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
//             Our Products
//           </h2>
//         </div> */}
//         <div className="mb-10 flex items-center justify-between">
//           <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
//             Our Products
//           </h2>

//           <div className="flex items-center gap-3">
//             {/* Left */}
//             <button
//               onClick={() => sliderRef.current?.slickPrev()}
//               className="
//         w-11 h-11 flex items-center justify-center
//         rounded-full border border-primary text-primary
//         hover:bg-primary hover:text-white
//         transition-all duration-300
//       "
//             >
//               <FaArrowLeft />
//             </button>

//             {/* Right */}
//             <button
//               onClick={() => sliderRef.current?.slickNext()}
//               className="
//         w-11 h-11 flex items-center justify-center
//         rounded-full border border-primary text-primary
//         hover:bg-primary hover:text-white
//         transition-all duration-300
//       "
//             >
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>

//         <Slider ref={sliderRef} {...settings}>
//           {products.map((item, index) => (
//             <div key={index} className="px-3">
//               {/* <Link href={`/products/${item.slug}`} className="block h-full">
//                 <motion.div
//                   whileHover={{ y: -6 }}
//                   transition={{ duration: 0.35 }}
//                   className="group relative h-full bg-white rounded-2xl overflow-hidden border border-gray-200 p-8 shadow-sm hover:shadow-xl cursor-pointer"
//                 > */}
//               <Link
//                 key={index}
//                 href={`/products/${item.slug}`}
//                 className="group block h-full"
//               >
//                 <motion.div
//                   whileHover={{ y: -6 }}
//                   transition={{ duration: 0.35 }}
//                   className="relative h-full bg-white rounded-2xl overflow-hidden border border-gray-200 p-8 shadow-sm hover:shadow-xl cursor-pointer"
//                 >
//                   {/* Image */}
//                   <div className="relative h-[260px] flex items-center justify-center">
//                     <Image
//                       src={item.image}
//                       alt={item.name}
//                       fill
//                       className="object-contain transition-transform duration-500 group-hover:scale-105"
//                     />
//                   </div>

//                   {/* Info */}
//                   <div className="mt-6 text-center">
//                     <span className="text-xs uppercase tracking-widest text-primary font-medium">
//                       {item.category}
//                     </span>
//                     <h3 className="mt-2 text-lg font-semibold text-gray-900">
//                       {item.name}
//                     </h3>
//                   </div>

//                   {/* Rounded Premium Accent */}
//                   <span className="absolute inset-x-0 bottom-0 h-[4px] rounded-b-2xl bg-gradient-to-r from-primary to-Secound_primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
//                 </motion.div>
//               </Link>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Slider from "react-slick";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import gsap from "gsap";

// const products = [
//   {
//     name: "Buparvet Injection",
//     category: "Analgesic & Anti-Inflammatory",
//     image: "/images/products/buparvet.png",
//     slug: "buparvet-injection",
//   },
//   {
//     name: "Bosvet Injection",
//     category: "Antibiotic",
//     image: "/images/products/bosvet.png",
//     slug: "bosvet-injection",
//   },
//   {
//     name: "Livet-LA Injection",
//     category: "Long Acting Antibiotic",
//     image: "/images/products/livet-la.png",
//     slug: "livet-la-injection",
//   },
// ];

// export default function ProductsSlider() {
//   const sliderRef = useRef(null);
//   const productRefs = useRef([]);

//   useEffect(() => {
//     productRefs.current.forEach((card) => {
//       if (!card) return;

//       const border = card.querySelector(".hover-border");
//       if (!border) return;

//       gsap.set(border, { scaleX: 0, transformOrigin: "left" });

//       const enter = () =>
//         gsap.to(border, { scaleX: 1, duration: 0.4, ease: "power3.out" });

//       const leave = () =>
//         gsap.to(border, { scaleX: 0, duration: 0.4, ease: "power3.out" });

//       card.addEventListener("mouseenter", enter);
//       card.addEventListener("mouseleave", leave);
//     });
//   }, []);

//   const settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 900,
//     slidesToShow: 3,
//     slidesToScroll: 1,

//     beforeChange: () => {
//       productRefs.current.forEach((card) => {
//         if (!card) return;
//         const border = card.querySelector(".hover-border");
//         if (!border) return;

//         gsap.set(border, { scaleX: 0 });
//       });
//     },

//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 640, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <section className="py-24 bg-secondary_two/5 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 md:px-0">
//         {/* Heading + Arrows */}
//         <div className="mb-10 flex items-center justify-between">
//           <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
//             Our Products
//           </h2>

//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => sliderRef.current?.slickPrev()}
//               className="w-11 h-11 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
//             >
//               <FaArrowLeft />
//             </button>

//             <button
//               onClick={() => sliderRef.current?.slickNext()}
//               className="w-11 h-11 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
//             >
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>

//         {/* Slider */}
//         <Slider ref={sliderRef} {...settings}>
//           {products.map((item, index) => (
//             <div key={index} className="px-3">
//               <motion.div
//                 ref={(el) => (productRefs.current[index] = el)}
//                 whileHover={{ y: -6 }}
//                 transition={{ duration: 0.35 }}
//                 className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 p-8 shadow-sm hover:shadow-xl cursor-pointer h-[32rem]"
//               >
//                 {/* FULL CARD CLICKABLE */}
//                 <Link
//                   href={`/products/${item.slug}`}
//                   className="absolute inset-0 z-10"
//                   aria-label={item.name}
//                 />

//                 {/* Image */}
//                 <div className="relative h-[260px] flex items-center justify-center mb-6">
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     fill
//                     className="object-contain transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>

//                 {/* Info */}
//                 <div className="text-center">
//                   <span className="text-xs uppercase tracking-widest text-primary font-medium">
//                     {item.category}
//                   </span>
//                   <h3 className="mt-2 text-lg font-semibold text-gray-900">
//                     {item.name}
//                   </h3>
//                 </div>

//                 {/* Bottom hover animated line */}
//                 <span className="absolute left-0 bottom-0 w-full h-[4px] bg-gradient-to-r from-primary to-Secound_primary hover-border" />
//               </motion.div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// }

"use client";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const products = [
  {
    name: "Buparvet Injection",
    category: "Analgesic & Anti-Inflammatory",
    image: "/products/520241379.jpg",
    slug: "buparvet-injection",
  },
  {
    name: "Bosvet Injection",
    category: "Antibiotic",
    image: "/products/131997487.jpg",
    slug: "bosvet-injection",
  },
  {
    name: "Livet-LA Injection",
    category: "Long Acting Antibiotic",
    image: "/products/83225446.jpg",
    slug: "livet-la-injection",
  },
];

export default function ProductsSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-24 bg-secondary_two/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        {/* Heading + Arrows */}
        <div className="mb-10 flex items-center justify-between md:px-2">
          <h2 className="md:text-4xl text-3xl font-semibold tracking-tight text-gray-900">
            Our Products
          </h2>

          <div className="flex items-center gap-3">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {products.map((item, index) => (
            <div key={index} className="px-3">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 p-8 shadow-sm hover:shadow-xl cursor-pointer"
              >
                {/* Full clickable card */}
                <Link
                  href={`/products/${item.slug}`}
                  className="absolute inset-0 z-10"
                />

                {/* Image */}
                <div className="relative h-[260px] flex items-center justify-center mb-6">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="text-start">
                  <span className="text-xs uppercase tracking-widest text-primary font-medium">
                    {item.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>
                </div>

                {/* Hover Border (ONLY ON HOVER) */}
                <span className="absolute left-0 bottom-0 h-[4px] w-full bg-gradient-to-r from-primary to-Secound_primary scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
