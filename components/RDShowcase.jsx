"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionBadge from "./SectionBadge";
import { FaBriefcaseMedical } from "react-icons/fa";

export default function RDShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center">
            <SectionBadge icon={FaBriefcaseMedical}>
              Research & Development
            </SectionBadge>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Innovation Driven by Science & Precision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our dedicated R&D division is designed to accelerate product
            innovation, ensure scientific accuracy, and deliver next-generation
            veterinary and aquaculture healthcare solutions.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/rd-lab1.jpg"
              alt="Product Development Laboratory"
              fill
              className="object-cover"
            />
          </motion.div>

          <div>
            <h3 className="text-3xl font-semibold mb-6">
              Dedicated Product Development Laboratory
            </h3>

            <p className="text-gray-600 mb-5 leading-relaxed">
              Our advanced formulation laboratory is equipped with a complete
              range of prototype and pilot-scale machinery, enabling precise
              development of innovative veterinary formulations.
            </p>

            <p className="text-gray-600 leading-relaxed">
              From concept validation to stability testing, our product
              development team ensures each formulation meets strict safety,
              efficacy, and regulatory standards before commercial production.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-semibold mb-6">
              Independent Analytical Method Development Laboratory
            </h3>

            <p className="text-gray-600 mb-5 leading-relaxed">
              Analytical method development is conducted in a separate,
              controlled laboratory environment to ensure data integrity and
              precision testing.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Equipped with modern analytical instruments, this facility
              supports validation studies, quality verification, and
              regulatory-compliant documentation for every product.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2"
          >
            <Image
              src="/images/rd-lab2.jpg"
              alt="Analytical Laboratory"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
