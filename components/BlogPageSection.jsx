"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    img: "/blogs/pharma/pharma-1.jpg",
    date: "18 AUGUST, 2025",
    author: "BRIDGE PHARMA INSIGHTS",
    title: "Ensuring GMP Compliance in Modern Pharmaceutical Manufacturing",
    slug: "gmp-compliance-pharma-manufacturing",
  },
  {
    id: 2,
    img: "/blogs/animal-health/animal-health-1.jpg",
    date: "10 AUGUST, 2025",
    author: "BRIDGE PHARMA INSIGHTS",
    title: "Advancing Animal Health Through Quality Veterinary Medicines",
    slug: "advancing-animal-health",
  },
  {
    id: 3,
    img: "/blogs/research/research-1.jpg",
    date: "02 AUGUST, 2025",
    author: "BRIDGE PHARMA R&D",
    title: "Innovation & Research: Driving the Future of Pharmaceuticals",
    slug: "innovation-research-pharma",
  },
  {
    id: 4,
    img: "/blogs/quality/quality-1.jpg",
    date: "22 JULY, 2025",
    author: "BRIDGE QUALITY TEAM",
    title: "Quality Assurance Protocols in Pharmaceutical Distribution",
    slug: "pharma-quality-assurance-protocols",
  },
  {
    id: 5,
    img: "/blogs/supply-chain/supply-1.jpg",
    date: "14 JULY, 2025",
    author: "BRIDGE SUPPLY CHAIN",
    title: "Strengthening Cold Chain Logistics for Medicine Safety",
    slug: "cold-chain-medicine-safety",
  },
  {
    id: 6,
    img: "/blogs/technology/tech-1.jpg",
    date: "05 JULY, 2025",
    author: "BRIDGE PHARMA TECH",
    title: "Digital Transformation in Pharmaceutical Operations",
    slug: "digital-transformation-pharma-operations",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function BlogPageSection() {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              variants={cardVariants}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center text-xs font-semibold tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {blog.date}
                  </span>

                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <FaRegUser />
                    <span>{blog.author}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-5">
                  {blog.title}
                </h3>

                <Link href={`/blogs/${blog.slug}`}>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    Read Article <FaArrowRight />
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
