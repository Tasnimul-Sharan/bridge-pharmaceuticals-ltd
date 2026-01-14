import React from "react";
import Link from "next/link";

const HeroSection = ({ hero }) => {
  return (
    <section className="relative w-full h-96 overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 transition bg-cover bg-center bg-no-repeat transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('${hero.backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 text-center custom-container mx-auto">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
          {hero.title}
        </h1>
        <div className="text-sm text-white flex items-center justify-center gap-1">
          <Link
            href="/"
            className="text-  hover:text-primary text-lg transition transform duration-500"
          >
            Home
          </Link>
          |<span className="text- text-lg">{hero.title}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
