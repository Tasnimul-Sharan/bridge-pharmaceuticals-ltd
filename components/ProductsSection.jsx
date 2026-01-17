"use client";

import { motion } from "framer-motion";

const products = [
  {
    title: "Fish Products",
    desc: "High-quality fish health solutions designed to improve growth, immunity, and overall aquatic wellness with scientifically balanced formulations.",
  },
  {
    title: "Metabolic & Nutritional Supplements",
    desc: "Advanced nutritional supplements that support metabolism, enhance productivity, and ensure optimal health for livestock and aquatic species.",
  },
  {
    title: "Anti-parasitics Products",
    desc: "Effective anti-parasitic solutions that protect animals from internal and external parasites, ensuring long-term health and performance.",
  },
  {
    title: "Appetizer & Digestive Stimulants",
    desc: "Formulated to improve appetite, digestion, and nutrient absorption, promoting faster recovery and improved feed efficiency.",
  },
  {
    title: "Anti-histamines Products",
    desc: "Reliable anti-histamine products that help manage allergic reactions and respiratory discomfort in animals.",
  },
  {
    title: "Anti-Inflammatory Products",
    desc: "Clinically proven anti-inflammatory formulations that reduce pain, swelling, and inflammation for faster healing.",
  },
  {
    title: "Anthelmintics Products",
    desc: "Broad-spectrum deworming solutions to control and eliminate parasitic worms effectively and safely.",
  },
  {
    title: "Antibiotics Products",
    desc: "High-standard antibiotics developed to combat bacterial infections while maintaining safety and effectiveness.",
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            What We Sell
          </h2>
          <p className="text-slate-600 text-lg">
            A comprehensive range of veterinary and aquaculture solutions
            designed to ensure health, performance, and sustainability.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition" />

              <h3 className="relative text-xl font-semibold text-slate-800 mb-3">
                {item.title}
              </h3>
              <p className="relative text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>

              <div className="relative mt-6">
                <span className="inline-block text-sm font-medium text-blue-600 group-hover:underline cursor-pointer">
                  Learn more →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
