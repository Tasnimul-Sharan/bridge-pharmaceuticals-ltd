"use client";

import { motion } from "framer-motion";
import {
  FaCapsules,
  FaFlask,
  FaFish,
  FaLeaf,
  FaShieldAlt,
} from "react-icons/fa";
import { fadeUp } from "@/Hooks/animations";

export default function ProductPortfolio() {
  return (
    <section className="relative bg-secondary_two/5 py-24 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">
            Product Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
            Comprehensive Animal Health Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            Bridge Pharmaceuticals Ltd. offers a diversified and science-driven
            portfolio of Veterinary, Nutritional, and Aquaculture solutions
            designed to protect animal health and support sustainable food
            production.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Therapeutics */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-200 rounded-3xl p-10 hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl">
                <FaCapsules />
              </span>
              <h3 className="text-xl font-semibold">Therapeutics</h3>
            </div>

            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li>• Antibiotics</li>
              <li>• Anti-protozoal formulations</li>
              <li>• Anthelmintic medicines</li>
              <li>• Anti-parasitic solutions</li>
              <li>• Disease prevention & treatment products</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-200 rounded-3xl p-10 hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl">
                <FaFlask />
              </span>
              <h3 className="text-xl font-semibold">Nutritional Supplements</h3>
            </div>

            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li>• Multivitamins</li>
              <li>• Probiotics</li>
              <li>• Amino acids</li>
              <li>• Multiminerals for optimal growth & health</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-200 rounded-3xl p-10 hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl">
                <FaFish />
              </span>
              <h3 className="text-xl font-semibold">Aquaculture Solutions</h3>
            </div>

            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li>• Biosecurity products</li>
              <li>• Pond management solutions</li>
              <li>• Water quality improvement systems</li>
            </ul>
          </motion.div>
        </div>

        {/* Commitment Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 bg-primary text-white rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center gap-8"
        >
          <span className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl">
            <FaShieldAlt />
          </span>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              Commitment to the Nation
            </h3>
            <p className="text-white/90 text-lg leading-relaxed max-w-3xl">
              Bridge Pharmaceuticals remains deeply committed to supporting
              Bangladesh’s farmers, veterinarians, and food producers—building a
              healthier animal population, a safer food chain, and a stronger,
              more sustainable national economy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
