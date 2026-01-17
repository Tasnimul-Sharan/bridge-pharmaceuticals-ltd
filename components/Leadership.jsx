"use client";

import { fadeUp } from "@/Hooks/animations";
import { motion } from "framer-motion";

export default function Leadership() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Leadership <span className="text-primary">Team</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              name: "Mrs. Farzana Mozammel",
              role: "Chairperson",
              desc: "Ensures ethical excellence, governance, and organizational growth.",
            },
            {
              name: "Mr. Gazi Md. Mokammel Hoque",
              role: "Managing Director",
              desc: "Driving digital transformation and research-driven innovation since 2023.",
            },
          ].map((leader, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border rounded-2xl p-8 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{leader.name}</h3>
              <p className="text-primary font-medium">{leader.role}</p>
              <p className="mt-4 text-gray-600">{leader.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
