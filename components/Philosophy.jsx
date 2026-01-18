"use client";

import { fadeUp } from "@/Hooks/animations";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaMicroscope,
  FaHandsHelping,
  FaShieldAlt,
  FaBalanceScale,
} from "react-icons/fa";

const values = [
  { icon: FaShieldAlt, title: "Quality" },
  { icon: FaHandsHelping, title: "Service" },
  { icon: FaMicroscope, title: "Innovation" },
  { icon: FaBalanceScale, title: "Integrity" },
  { icon: FaLeaf, title: "Sustainability" },
];

export default function Philosophy() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-6"
        >
          Corporate <span className="text-primary">Philosophy</span>
        </motion.h2>

        {/* Quote */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-gray-600 italic mb-16"
        >
          “Animal Health is the foundation of human prosperity.”
        </motion.p>

        {/* Values */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition text-center"
            >
              <item.icon className="text-primary text-4xl mx-auto mb-4" />
              <h4 className="font-semibold text-lg">{item.title}</h4>
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-gray-600 mt-16"
        >
          These principles guide every decision at Bridge Pharmaceuticals —
          from research and product development to customer support and
          long-term partnerships.
        </motion.p>
      </div>
    </section>
  );
}
