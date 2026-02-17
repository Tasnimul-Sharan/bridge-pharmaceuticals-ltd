"use client";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function GMPHighlight() {
  const items = [
    {
      title: "GMP Aligned Manufacturing",
      desc: "Strict adherence to Good Manufacturing Practices ensuring safety, consistency, and regulatory compliance.",
    },
    {
      title: "Advanced Quality Assurance Labs",
      desc: "Dedicated laboratories for microbiological, chemical, and stability testing.",
    },
    {
      title: "Automated Production Systems",
      desc: "Modern automated systems minimizing human error and maximizing precision.",
    },
    {
      title: "Biosecurity Controlled Zones",
      desc: "Controlled environments designed to maintain sterile and contamination-free production.",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-6">
          GMP Certified Production Environment
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Our infrastructure is engineered to meet global pharmaceutical
          standards, ensuring uncompromising quality and operational excellence.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xl">
                  <FaCheckCircle />
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-4">{item.title}</h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
