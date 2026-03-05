// "use client";

// import Slider from "react-slick";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useRef } from "react";
// import { FaArrowLeft, FaArrowRight, FaCapsules } from "react-icons/fa";
// import SectionBadge from "./SectionBadge";

// const products = [
//   {
//     name: "Buparvet Injection",
//     category: "Analgesic & Anti-Inflammatory",
//     image: "/products/520241379.jpg",
//     slug: "buparvet-injection",
//   },
//   {
//     name: "Bosvet Injection",
//     category: "Antibiotic",
//     image: "/products/131997487.jpg",
//     slug: "bosvet-injection",
//   },
//   {
//     name: "Livet-LA Injection",
//     category: "Long Acting Antibiotic",
//     image: "/products/83225446.jpg",
//     slug: "livet-la-injection",
//   },
// ];

// export default function ProductsSlider() {
//   const sliderRef = useRef(null);

//   const settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 900,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 640, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <section className="py-24 bg-secondary_two/5 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 md:px-0">
//         {/* Heading + Arrows */}
//         {/* <div className="mb-10 flex items-center justify-between md:px-2">
//           <h2 className="md:text-4xl text-3xl font-semibold tracking-tight text-gray-900">
//             Our Products
//           </h2>

//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => sliderRef.current?.slickPrev()}
//               className="w-11 h-11 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
//             >
//               <FaArrowLeft />
//             </button>

//             <button
//               onClick={() => sliderRef.current?.slickNext()}
//               className="w-11 h-11 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
//             >
//               <FaArrowRight />
//             </button>
//           </div>
//         </div> */}

//         <div className="mb-10 flex items-end justify-between md:px-2">
//           <div>
//             <SectionBadge icon={FaCapsules} className="mb-4">
//               Our Products
//             </SectionBadge>

//             <h2 className="md:text-4xl text-3xl font-semibold tracking-tight text-gray-900">
//               Veterinary Medicines & Injections
//             </h2>
//           </div>

//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => sliderRef.current?.slickPrev()}
//               className="w-11 h-11 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
//             >
//               <FaArrowLeft />
//             </button>

//             <button
//               onClick={() => sliderRef.current?.slickNext()}
//               className="w-11 h-11 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
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
//                 whileHover={{ y: -6 }}
//                 transition={{ duration: 0.35 }}
//                 className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 p-8 shadow-sm hover:shadow-xl cursor-pointer"
//               >
//                 {/* Full clickable card */}
//                 <Link
//                   href={`/products/${item.slug}`}
//                   className="absolute inset-0 z-10"
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
//                 <div className="text-start">
//                   <span className="text-xs uppercase tracking-widest text-primary font-medium">
//                     {item.category}
//                   </span>
//                   <h3 className="mt-2 text-lg font-semibold text-gray-900">
//                     {item.name}
//                   </h3>
//                 </div>

//                 {/* Hover Border (ONLY ON HOVER) */}
//                 <span className="absolute left-0 bottom-0 h-[4px] w-full bg-gradient-to-r from-primary to-Secound_primary scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
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
import { useRef, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCapsules } from "react-icons/fa";
import SectionBadge from "./SectionBadge";
import { supabaseServer } from "@/lib/supabaseServer";

export default function ProductsSlider() {
  const sliderRef = useRef(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const { data } = await supabaseServer
        .from("products")
        .select("*")
        .order("name")

      setProducts(data || []);
    };

    loadProducts();
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  console.log(products);

  return (
    <section className="py-24 bg-secondary_two/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        {/* Heading */}
        <div className="mb-10 flex items-end justify-between md:px-2">
          <div>
            <SectionBadge icon={FaCapsules} className="mb-4">
              Our Products
            </SectionBadge>

            <h2 className="md:text-4xl text-3xl font-semibold tracking-tight text-gray-900">
              Veterinary Medicines & Injections
            </h2>
          </div>

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
          {products.map((item) => (
            <div key={item.id} className="px-3">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 p-8 shadow-sm hover:shadow-xl cursor-pointer"
              >
                {/* Clickable Card */}
                <Link
                  href={`/product/${item.slug}`}
                  className="absolute inset-0 z-10"
                />

                {/* Image */}
                <div className="relative h-[260px] flex items-center justify-center mb-6">
                  <Image
                    src={item.images?.[0]}
                    alt={item.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* <Image
                    src={item.images?.[0] || "/products/placeholder.png"}
                    alt={item.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  /> */}
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

                {/* Hover Border */}
                <span className="absolute left-0 bottom-0 h-[4px] w-full bg-gradient-to-r from-primary to-Secound_primary scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
