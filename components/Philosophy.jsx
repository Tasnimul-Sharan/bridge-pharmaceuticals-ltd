"use client";

import { fadeUp } from "@/Hooks/animations";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaMicroscope,
  FaHandsHelping,
  FaShieldAlt,
} from "react-icons/fa";

const values = [
  { icon: FaShieldAlt, title: "Quality" },
  { icon: FaHandsHelping, title: "Service" },
  { icon: FaMicroscope, title: "Innovation" },
  { icon: FaLeaf, title: "Sustainability" },
];

export default function Philosophy() {
  return (
    <div className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Our <span className="text-primary">Philosophy</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow text-center"
            >
              <item.icon className="text-primary text-4xl mx-auto mb-4" />
              <h4 className="font-semibold text-lg">{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
