"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsSection() {
  const sectionRef = useRef(null);
  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(false);

  const targetValue = 25;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartCount(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (!startCount) return;

    const duration = 2000;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * targetValue));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [startCount]);

  return (
    <section
      ref={sectionRef}
      className="py-24 custom-container mx-auto bg-white flex flex-col lg:flex-row items-center justify-between gap-12"
    >
      {/* <div className="relative w-full max-w-[500px] aspect-square mx-auto">
        <div className="rounded-2xl overflow-hidden w-full h-full relative z-10">
          <Image
            src="/01.jpg"
            alt="Anondo Baari Wellness"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-primary text-white px-6 py-4 sm:px-12 sm:py-5 rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 z-20 shadow-xl text-center sm:text-left">
          <span className="text-4xl sm:text-6xl font-bold leading-none">
            {count}+
          </span>
          <div className="text-sm sm:text-lg leading-snug font-medium">
            <span className="block sm:inline">Acres of</span>{" "}
            <span className="block sm:inline">Tranquil Wellness</span>
          </div>
        </div>
      </div> */}

      <div className="relative w-full lg:w-1/2 h-[500px] rounded-2xl mx-auto">
        <Image
          src="/01.jpg"
          alt="Anondo Baari Wellness"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-primary text-white px-6 py-4 sm:px-12 sm:py-6 rounded-2xl flex flex-col items-center justify-center gap-3 z-20 shadow-xl text-center">
          {/* <span className="text-4xl sm:text-6xl font-bold leading-none">
            {count}+
          </span> */}
          <div className="text-sm md:text-xl leading-snug font-medium">
            {/* <span className="block">Acres of</span> */}
            <span className="block">Sustainable Green Living</span>
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-xl">
        <p className="text-primary font-medium tracking-widest uppercase mb-3">
          About Us
        </p>
        <h2 className="md:text-4xl text-2xl font-bold mb-4 leading-tight text-secondary">
          Anondo Baari – A Sanctuary of Wellness & Dignity
        </h2>

        <p className="text-gray-600 mb-6 leading-relaxed">
          We are the entrepreneurs behind <strong>Anondo Baari</strong>, a
          world-class senior wellness centre in Purbachal, just 20 minutes from
          Hazrat Shahjalal International Airport. Aging is not a limitation—it
          is a beautiful phase of life that deserves respect, care, and
          celebration. Nestled on the south bank of the River Turag and spread
          across 25 acres, Anondo Baari is not just a residence—it is a vibrant
          community, a holistic wellness hub, and above all, a second home.
        </p>

        <Link href="/contact">
          <button className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded font-semibold transition-all transform duration-500 w-fit">
            Explore More
          </button>
        </Link>
      </div>
    </section>
  );
}
