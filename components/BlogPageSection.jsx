"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    img: "/blogs/community/community-1.jpg",
    date: "15 AUGUST, 2025",
    author: "BY ANONDO BAARI",
    title: "Why Community Living Enhances Happiness in Aging",
    slug: "community-living-happiness",
  },
  {
    id: 2,
    img: "/blogs/wellness/wellness-1.jpg",
    date: "05 AUGUST, 2025",
    author: "BY ANONDO BAARI",
    title: "The Healing Power of Yoga and Meditation for Seniors",
    slug: "healing-power-of-yoga",
  },
  {
    id: 3,
    img: "/blogs/nutrition/nutrition-1.jpg",
    date: "10 AUGUST, 2025",
    author: "BY ANONDO BAARI",
    title: "Nutrition After 60: Building Strength Through Food",
    slug: "nutrition-after-60",
  },
  {
    id: 4,
    img: "/blogs/mentalhealth/mentalhealth-1.jpg",
    date: "20 AUGUST, 2025",
    author: "BY ANONDO BAARI",
    title: "Mind Matters: Supporting Mental Health in Senior Years",
    slug: "mental-health-seniors",
  },
  {
    id: 5,
    img: "/blogs/artmusic/artmusic-1.jpg",
    date: "28 AUGUST, 2025",
    author: "BY ANONDO BAARI",
    title: "The Joy of Art and Music Therapy for Seniors",
    slug: "art-music-therapy",
  },
  {
    id: 6,
    img: "/blogs/fitness/fitness-1.jpg",
    date: "20 AUGUST, 2025",
    author: "BY ANONDO BAARI",
    title: "Staying Fit After 60: Gentle Exercises That Work",
    slug: "staying-fit-after-60",
  },
];

export default function BlogPageSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="custom-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => {
            const [hovered, setHovered] = useState(false);

            return (
              <div
                key={blog.id}
                className="rounded-lg overflow-hidden group"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <div className="relative w-full h-96 overflow-hidden rounded-t-lg">
                  <motion.div
                    animate={{ scale: hovered ? 1.2 : 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      width={1200}
                      height={800}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                </div>
                <div className="bg-white relative z-0 mx-4 rounded-md px-6 py-6 -mt-10">
                  <span className="bg-primary bg-opacity-10 text-primary font-semibold px-3 py-1 text-xs uppercase inline-block mb-4">
                    {blog.date}
                  </span>
                  <div className="flex items-center gap-4 text-gray-500 text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <FaRegUser className="text-gray-400" /> {blog.author}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {blog.title}
                  </h3>

                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="relative inline-flex items-center gap-1 text-primary text-sm font-semibold transition-all transform duration-500 group"
                  >
                    Read More <FaArrowRight />
                    <span className="hover-line absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
