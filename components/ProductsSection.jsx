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
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    title: "Fish Products",
    image: "/images/fish.jpg",
    desc: "High-quality fish health solutions that enhance growth, immunity, and overall aquatic performance through scientifically formulated products.",
  },
  {
    title: "Metabolic & Nutritional Supplements",
    image: "/images/nutrition.jpg",
    desc: "Advanced metabolic and nutritional supplements designed to improve feed efficiency, vitality, and long-term health.",
  },
  {
    title: "Anti-parasitics Products",
    image: "/images/parasite.jpg",
    desc: "Effective anti-parasitic formulations that protect against internal and external parasites while ensuring safety.",
  },
  {
    title: "Appetizer & Digestive Stimulant Products",
    image: "/images/digestive.jpg",
    desc: "Specially developed products to stimulate appetite, improve digestion, and maximize nutrient absorption.",
  },
  {
    title: "Anti-histamines Products",
    image: "/images/antihistamine.jpg",
    desc: "Reliable anti-histamine solutions to manage allergic reactions and respiratory discomfort in animals.",
  },
  {
    title: "Anti-Inflammatory Products",
    image: "/images/inflammatory.jpg",
    desc: "Clinically trusted anti-inflammatory products that reduce pain, swelling, and inflammation effectively.",
  },
  {
    title: "Anthelmintics Products",
    image: "/images/deworming.jpg",
    desc: "Broad-spectrum anthelmintic products for safe and effective control of parasitic worms.",
  },
  {
    title: "Antibiotics Products",
    image: "/images/antibiotics.jpg",
    desc: "High-quality antibiotics formulated to combat bacterial infections while maintaining safety standards.",
  },
];

export default function WhatWeSell() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="custom-container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What We Sell
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Premium veterinary and aquatic healthcare solutions engineered for
            performance and sustainability.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-3xl overflow-hidden
                         border border-slate-100
                         shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                         hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]
                         transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Accent glow */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-sky-400/30 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
