"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background accents */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative custom-container mx-auto py-28 grid lg:grid-cols-2 gap-16 items-center">
        {/* ================= Left Content ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block mb-4 text-sm font-semibold tracking-widest uppercase text-primary">
            Since 2010
          </span>

          {/* <h1 className="text-3xl md:text-5xl font-bold leading-tight text-secondary mb-6">
            Leading Bangladesh’s <br />
            <span className="text-primary">Animal Health Innovation</span>
          </h1> */}

          <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6 leading-snug">
            <span className="block">Leading Bangladesh’s</span>
            <span className="block text-primary">Animal Health Innovation</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-8">
            Bridge Pharmaceuticals Ltd. is one of Bangladesh’s pioneering Animal
            Health Pharmaceutical companies, dedicated exclusively to Veterinary
            & Aquaculture medicines, Nutritional Supplements, and Biosecurity
            solutions.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-10">
            Founded in 2010, Bridge was established with a clear mission: to
            deliver world-class veterinary solutions at affordable prices,
            empowering farmers and livestock producers across the country.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/about">
              <button className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Learn More
              </button>
            </Link>

            <Link href="/contact">
              <button className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>

        {/* ================= Right Visual ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/about.jpg"
              alt="Bridge Pharmaceuticals Animal Health"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating Info Card */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white px-6 py-6 rounded-2xl border text-center">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-1">
              Trusted for
            </p>
            <p className="text-2xl font-bold text-primary">
              Veterinary Excellence
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
