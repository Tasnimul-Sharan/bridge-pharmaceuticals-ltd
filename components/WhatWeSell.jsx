"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    title: "Fish Health Solutions",
    image: "/images/fish.jpg",
    desc: "Scientifically formulated aquatic health products that enhance immunity, growth, and overall performance.",
  },
  {
    title: "Metabolic & Nutritional Supplements",
    image: "/images/nutrition.jpg",
    desc: "Advanced supplements designed to improve feed efficiency, vitality, and long-term wellness.",
  },
  {
    title: "Anti-Parasitic Formulations",
    image: "/images/parasite.jpg",
    desc: "Broad-spectrum protection against internal and external parasites with clinical safety standards.",
  },
  {
    title: "Digestive & Appetite Enhancers",
    image: "/images/digestive.jpg",
    desc: "Optimized digestive stimulants that maximize nutrient absorption and appetite balance.",
  },
  {
    title: "Anti-Histamine Care",
    image: "/images/antihistamine.jpg",
    desc: "Reliable solutions to manage allergies and respiratory discomfort effectively.",
  },
  {
    title: "Anti-Inflammatory Therapy",
    image: "/images/inflammatory.jpg",
    desc: "Clinically trusted formulations to reduce pain, swelling, and inflammation.",
  },
  {
    title: "Anthelmintic Treatments",
    image: "/images/deworming.jpg",
    desc: "Safe and effective control of parasitic worms with veterinary-grade assurance.",
  },
  {
    title: "Antibiotic Range",
    image: "/images/antibiotics.jpg",
    desc: "High-quality antibiotics formulated to combat bacterial infections responsibly.",
  },
];

export default function WhatWeSell() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-sky-50/40 to-white">
      <div className="custom-container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span
            className="inline-block px-4 py-2 border border-sky-200 mb-5 text-sm font-medium tracking-wide
                           text-Secound_primary bg-sky-100 rounded-full"
          >
            Pharmaceutical Grade Products
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Product Portfolio
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            Precision-engineered veterinary and aquatic healthcare solutions
            designed for safety, performance, and sustainability.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
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

                {/* Medical gradient */}
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

              {/* Premium border glow */}
              <div
                className="absolute inset-0 rounded-2xl ring-1 ring-transparent
                              group-hover:ring-sky-300/40 transition"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
