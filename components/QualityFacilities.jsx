"use client";
import { motion } from "framer-motion";

export default function QualityFacilities() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">
            Quality Facilities
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
            World-Class Infrastructure <br /> Built for Innovation
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            We’re proud to provide advanced infrastructure, operational support
            systems, and modern research environments designed to empower
            scientists, veterinarians, and industry professionals. Our
            facilities reflect a long-term commitment to quality, precision, and
            sustainable pharmaceutical innovation.
          </p>

          <p className="text-gray-600 leading-relaxed">
            With a strong focus on future-ready infrastructure, we continue to
            invest in technologies and scientific environments that enhance
            product safety, research excellence, and operational efficiency
            across every stage of animal healthcare development.
          </p>
        </div>

        {/* Right Highlight Card */}
        <motion.div
          whileHover={{ y: -8 }}
          className="bg-gray-50 p-10 rounded-3xl shadow-xl border"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Institute for Future Environments (IFE)
          </h3>

          <p className="text-gray-600 leading-relaxed mb-4">
            Our collaborative innovation ecosystem brings together experts from
            science, technology, veterinary medicine, business strategy, and
            regulatory leadership — working collectively to solve complex
            challenges in animal health and sustainable food systems.
          </p>

          <p className="text-gray-600 leading-relaxed">
            By combining interdisciplinary expertise and advanced research
            infrastructure, we enable forward-thinking solutions that drive the
            next generation of pharmaceutical innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
