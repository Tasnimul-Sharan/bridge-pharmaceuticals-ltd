"use client";
import { motion } from "framer-motion";
import SectionBadge from "./SectionBadge";
import {
  FaBriefcaseMedical,
  FaFlask,
  FaMicroscope,
  FaUserMd,
  FaLightbulb,
} from "react-icons/fa";
import Link from "next/link";

export default function RNDSection() {
  const features = [
    {
      icon: <FaFlask />,
      title: "Advanced Formulation Labs",
      desc: "State-of-the-art laboratories developing high-quality veterinary formulations.",
    },
    {
      icon: <FaMicroscope />,
      title: "Analytical Testing Systems",
      desc: "Precision-driven analytical equipment ensuring safety and product efficacy.",
    },
    {
      icon: <FaUserMd />,
      title: "Veterinary Research Experts",
      desc: "A dedicated team of scientists and veterinary specialists.",
    },
    {
      icon: <FaLightbulb />,
      title: "Future-Focused Innovation",
      desc: "Continuous innovation to develop next-generation healthcare solutions.",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white to-primary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex justify-center">
            <SectionBadge icon={FaBriefcaseMedical}>
              Research & Innovation
            </SectionBadge>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Science-Driven Research & Development
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-relaxed">
            Advancing veterinary and aquaculture healthcare through scientific
            innovation, modern laboratories, and precision pharmaceutical
            research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-semibold mb-6">
              Innovation Powered by Science
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Bridge Pharmaceuticals’ Research & Development division focuses on
              developing next-generation veterinary medicines, nutritional
              supplements, and aquaculture healthcare solutions using advanced
              pharmaceutical technologies.
            </p>

            <Link
              href="/facilities"
              className="inline-block mt-8 px-7 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition"
            >
              Explore Our R&D Facilities
            </Link>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((item, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-white border border-border_color shadow-sm hover:shadow-lg transition group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-xl mb-4 group-hover:bg-primary group-hover:text-white transition">
                  {item.icon}
                </div>

                <h4 className="font-semibold text-secondary mb-2">
                  {item.title}
                </h4>

                <p className="text-sm text-secondary_two leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
