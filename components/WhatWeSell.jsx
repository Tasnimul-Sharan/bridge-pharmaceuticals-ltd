"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Therapeutic", "Nutritional", "Aquaculture"];

const productGroups = [
  {
    groupTitle: "Therapeutic Products",
    products: [
      {
        title: "Antibiotic Products",
        image: "/images/antibiotics.jpg",
        desc: "High-quality antibiotics formulated to combat bacterial infections responsibly.",
      },
      {
        title: "Anthelmintic Products",
        image: "/images/deworming.jpg",
        desc: "Safe and effective control of parasitic worms with veterinary-grade assurance.",
      },
      {
        title: "Anti-Parasitic Formulations",
        image: "/images/parasite.jpg",
        desc: "Broad-spectrum protection against internal and external parasites.",
      },
      {
        title: "Anti-Protozoal Formulations",
        image: "/images/antiprotozoal.jpg",
        desc: "Effective protozoal infection control solutions for veterinary precision.",
      },
      {
        title: "Anti-Inflammatory Therapy",
        image: "/images/inflammatory.jpg",
        desc: "Clinically trusted formulations to reduce pain, swelling, and inflammation.",
      },
      {
        title: "Anti-Histamine Products",
        image: "/images/antihistamine.jpg",
        desc: "Reliable solutions to manage allergies and respiratory discomfort.",
      },
    ],
  },
  {
    groupTitle: "Nutritional & Metabolic Solutions",
    products: [
      {
        title: "Metabolic & Nutritional Supplements",
        image: "/images/nutrition.jpg",
        desc: "Advanced supplements designed to improve feed efficiency and vitality.",
      },
      {
        title: "Digestive & Appetite Stimulants",
        image: "/images/digestive.jpg",
        desc: "Optimized digestive stimulants that maximize nutrient absorption.",
      },
    ],
  },
  {
    groupTitle: "Aquaculture Solutions",
    products: [
      {
        title: "Fish Health Solutions",
        image: "/images/fish.jpg",
        desc: "Scientifically formulated aquatic health products enhancing immunity and growth.",
      },
    ],
  },
];

export default function WhatWeSell() {
  const [activeCategory, setActiveCategory] = useState("All");

  const allProducts = productGroups.flatMap((group) =>
    group.products.map((product) => ({
      ...product,
      category:
        group.groupTitle === "Therapeutic Products"
          ? "Therapeutic"
          : group.groupTitle === "Nutritional & Metabolic Solutions"
            ? "Nutritional"
            : "Aquaculture",
    })),
  );

  const filteredProducts =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter((item) => item.category === activeCategory);

  return (
    <section className="py-28 bg-white">
      <div className="custom-container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-2 border border-sky-200 text-sm font-medium text-sky-700 bg-sky-100 rounded-full mb-5">
            Pharmaceutical Grade Products
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Product Portfolio
          </h2>

          <p className="text-slate-600 text-lg">
            Science-driven veterinary and aquaculture healthcare solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all transform duration-500
                ${
                  activeCategory === cat
                    ? "bg-Secound_primary text-white shadow-md"
                    : "bg-gray-100 text-slate-600 hover:bg-Secound_primary/20"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-6 md:px-0"
        >
          {filteredProducts.map((item) => (
            <div
              key={item.title}
              className="group relative bg-white/80 backdrop-blur
                 rounded-2xl overflow-hidden
                 border border-sky-100
                 shadow-[0_8px_30px_rgba(2,132,199,0.08)]
                 hover:shadow-[0_15px_45px_rgba(2,132,199,0.18)]
                 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/30 via-sky-700/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-sky-300/40 transition" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
